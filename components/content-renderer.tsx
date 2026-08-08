"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { linkScriptureReferences } from "@/lib/scripture"

const CITE_CLASS =
  "text-blue-600 hover:text-blue-800 font-semibold no-underline text-xs align-super mx-0.5 transition-colors"
const LINK_CLASS = "text-blue-600 hover:text-blue-800 hover:underline transition-colors"

/** Map "1. Label https://url" style source entries to Source ID -> URL. */
function buildSourceMap(sources: readonly string[]) {
  const map = new Map<string, string>()

  sources.forEach((source, index) => {
    const fallbackId = String(index + 1)

    // Explicit numbered prefix like "1. " or "[1] "
    const explicitMatch = /^\s*(?:\[)?(\d+)(?:\]|\.)\s*(.*)/.exec(source)
    const activeId = explicitMatch ? explicitMatch[1] : fallbackId
    const remainder = explicitMatch ? explicitMatch[2] : source

    const urlMatch = /(https?:\/\/[^\s"']+)/.exec(remainder)
    // Without a URL, point at the entry in the on-page sources list
    const target = urlMatch ? urlMatch[1].trim().replace(/[",']$/, "") : `#source-${activeId}`

    map.set(activeId, target)
    map.set(fallbackId, target)
  })

  return map
}

function citationAnchor(url: string, id: string) {
  const external = url.startsWith("http")
  const rel = external ? ' target="_blank" rel="noopener noreferrer"' : ""
  return `<a href="${url}"${rel} class="${CITE_CLASS}" title="Source [${id}]">[${id}]</a>`
}

/**
 * Sequential Markdown-to-HTML transform for authored topic content.
 * Pure and deterministic, so callers can memoise on (content, sources).
 */
function renderMarkdown(content: string, sources: readonly string[]): string {
  const sourceMap = buildSourceMap(sources)
  let html = content

  // Headings: "## Heading" -> <h2>Heading</h2>
  html = html.replace(/^\s*(#{1,6})\s+(.+)$/gm, (_match, hashes: string, text: string) => {
    const level = hashes.length
    const sizeClass =
      level === 1 ? "text-3xl sm:text-4xl" :
      level === 2 ? "text-2xl sm:text-3xl" :
      level === 3 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"

    return `<h${level} class="${sizeClass} font-bold mt-8 mb-4 text-gray-900 leading-tight">${text}</h${level}>`
  })

  // Bold
  html = html.replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Italics. Runs after bold so the remaining single asterisks are the italic
  // ones: transliterated terms (*herem*, *eis*) and cited titles. The opening
  // asterisk must not be followed by a space, so a "* item" bullet is left for
  // the list pass rather than swallowed as emphasis.
  html = html.replace(/(?<![*\w])\*(?!\s)([^*\n]+?)(?<![\s*])\*(?!\*)/g, "<em>$1</em>")

  // Markdown links [text](url)
  html = html.replace(
    /\[([^\]^]+)\]\((https?:\/\/[^)]+)\)/g,
    `<a href="$2" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">$1</a>`,
  )

  // Footnote citations [^1] -> linked superscript
  html = html.replace(/\[\^(\d+)\]/g, (match, id: string) => {
    const url = sourceMap.get(id)
    return url ? citationAnchor(url, id) : match
  })

  // Normalise legacy hardcoded citation anchors onto the same styling
  html = html.replace(/<a\s+href="([^"]+)"[^>]*>\[(\d+)\]<\/a>/g, (_m, url: string, id: string) =>
    citationAnchor(url, id),
  )

  // Bare scripture references become Bible Gateway links. Runs after the anchor
  // passes so that references already inside a link are left alone.
  html = linkScriptureReferences(html, LINK_CLASS)

  // Block-level pass: headings, lists and paragraphs
  const processedLines: string[] = []
  let currentListType: "ul" | "ol" | null = null
  let currentParagraph: string[] = []
  const BLOCK_TAG = /^<(h[1-6]|ul|ol|li|div|blockquote|table|tr|th|td|thead|tbody|p)\b/i

  const flushParagraph = () => {
    if (currentParagraph.length === 0) return
    const text = currentParagraph.join(" ").trim()
    if (text) {
      processedLines.push(
        BLOCK_TAG.test(text) ? text : `<p class="mb-6 text-gray-800 leading-relaxed">${text}</p>`,
      )
    }
    currentParagraph = []
  }

  const flushList = () => {
    if (!currentListType) return
    processedLines.push(currentListType === "ul" ? "</ul>" : "</ol>")
    currentListType = null
  }

  for (const line of html.split("\n")) {
    const trimmed = line.trim()

    if (trimmed === "") {
      flushParagraph()
      flushList()
      continue
    }

    const bulletMatch = /^[-*•]\s+(.+)$/.exec(trimmed)
    if (bulletMatch) {
      flushParagraph()
      if (currentListType !== "ul") {
        flushList()
        processedLines.push('<ul class="list-disc pl-6 my-6 space-y-4 text-gray-800">')
        currentListType = "ul"
      }
      processedLines.push(`  <li>${bulletMatch[1]}</li>`)
      continue
    }

    const numberMatch = /^\d+\.\s+(.+)$/.exec(trimmed)
    if (numberMatch) {
      flushParagraph()
      if (currentListType !== "ol") {
        flushList()
        processedLines.push('<ol class="list-decimal pl-6 my-6 space-y-4 text-gray-800">')
        currentListType = "ol"
      }
      processedLines.push(`  <li>${numberMatch[1]}</li>`)
      continue
    }

    if (BLOCK_TAG.test(trimmed)) {
      flushParagraph()
      flushList()
      processedLines.push(trimmed)
      continue
    }

    flushList()
    currentParagraph.push(trimmed)
  }

  flushParagraph()
  flushList()

  return processedLines.join("\n")
}

interface ContentRendererProps {
  readonly content: string
  readonly sources?: readonly string[]
  readonly className?: string
  readonly wrapInCard?: boolean
}

const EMPTY_SOURCES: readonly string[] = []

/**
 * Memoised so that typing in a topic's search box does not re-parse the markdown
 * of every subtopic on every keystroke.
 */
export const ContentRenderer = React.memo(function ContentRenderer({
  content,
  sources = EMPTY_SOURCES,
  className = "",
  wrapInCard = true,
}: ContentRendererProps) {
  const html = React.useMemo(
    () => (content?.trim() ? renderMarkdown(content, sources) : ""),
    [content, sources],
  )

  if (!html) return null

  const renderedContent = (
    <div
      className={`prose prose-blue max-w-none prose-p:leading-relaxed prose-li:leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  if (!wrapInCard) return renderedContent

  return (
    <Card className="mb-8 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
      <CardContent className="py-8 px-6 sm:px-8">{renderedContent}</CardContent>
    </Card>
  )
})
