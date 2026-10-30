"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { linkScriptureReferences } from "@/lib/scripture"
import { markGlossaryTerms } from "@/lib/glossary"
import { Visual } from "@/components/visuals/registry"

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

/** Markdown links: external ones open a new tab, links within the site stay in it. */
function linkMarkdown(html: string): string {
  return html
    .replace(
      /\[([^\]^]+)\]\((https?:\/\/[^)]+)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">$1</a>`,
    )
    .replace(/\[([^\]^]+)\]\((\/[^)\s]*)\)/g, `<a href="$2" class="${LINK_CLASS}">$1</a>`)
}

/**
 * Inline emphasis, markdown links and bare scripture references.
 *
 * Shared with the timeline and the sources list, both of which render their text
 * through `dangerouslySetInnerHTML` without going near the block-level pass. Without
 * this, a markdown link in a timeline entry printed its own brackets.
 */
export function renderInline(text: string): string {
  let html = text.replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/(?<![*\w])\*(?!\s)([^*\n]+?)(?<![\s*])\*(?!\*)/g, "<em>$1</em>")
  html = linkMarkdown(html)
  return linkScriptureReferences(html, LINK_CLASS)
}

/** Stable DOM id for a heading: "1 Corinthians" -> "h-1-corinthians". */
export function headingId(text: string) {
  return `h-${text.replace(/<[^>]+>|\*\*/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
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

    // Anchor ids let a visual (e.g. the Bible bookshelf) jump to one heading.
    return `<h${level} id="${headingId(text)}" class="${sizeClass} font-bold mt-8 mb-4 text-gray-900 leading-tight scroll-mt-24">${text}</h${level}>`
  })

  // Bold
  html = html.replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Italics. Runs after bold so the remaining single asterisks are the italic
  // ones: transliterated terms (*herem*, *eis*) and cited titles. The opening
  // asterisk must not be followed by a space, so a "* item" bullet is left for
  // the list pass rather than swallowed as emphasis.
  html = html.replace(/(?<![*\w])\*(?!\s)([^*\n]+?)(?<![\s*])\*(?!\*)/g, "<em>$1</em>")

  // Markdown links [text](url)
  html = linkMarkdown(html)

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

  const lines = html.split("\n")

  /** The kind of list the next non-blank line would open, if any. */
  const listTypeAt = (index: number): "ul" | "ol" | null => {
    for (let i = index; i < lines.length; i++) {
      const t = lines[i].trim()
      if (t === "") continue
      if (/^[-*•]\s+/.test(t)) return "ul"
      if (/^\d+\.\s+/.test(t)) return "ol"
      return null
    }
    return null
  }

  for (const [index, line] of lines.entries()) {
    const trimmed = line.trim()

    if (trimmed === "") {
      flushParagraph()
      // Several topic files space their bullets out with blank lines between
      // them. Closing the list on every blank line turned those into a run of
      // one-item lists, so an open list survives a gap that another item of the
      // same kind follows.
      if (listTypeAt(index + 1) !== currentListType) flushList()
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

  return markGlossaryTerms(processedLines.join("\n"))
}

/**
 * A visual is placed in authored content with a marker on its own line:
 * `<?viz topic/name?>`. Splitting on the marker gives alternating prose and
 * visual ids, so prose keeps going through the markdown pass untouched.
 */
const VIZ_MARKER = /^[ \t]*<\?viz\s+([\w/-]+)\s*\?>[ \t]*$/gm

type Segment =
  | { readonly kind: "html"; readonly html: string }
  | { readonly kind: "viz"; readonly id: string }

function renderSegments(content: string, sources: readonly string[]): Segment[] {
  const out: Segment[] = []
  content.split(VIZ_MARKER).forEach((part, i) => {
    if (i % 2 === 1) out.push({ kind: "viz", id: part })
    else if (part.trim()) out.push({ kind: "html", html: renderMarkdown(part, sources) })
  })
  return out
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
  const segments = React.useMemo(
    () => (content?.trim() ? renderSegments(content, sources) : []),
    [content, sources],
  )

  if (segments.length === 0) return null

  const renderedContent =
    segments.length === 1 && segments[0].kind === "html" ? (
      <div
        className={`topic-prose max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: segments[0].html }}
      />
    ) : (
      <div className={`topic-prose max-w-none ${className}`}>
        {segments.map((seg, i) =>
          seg.kind === "viz" ? (
            <Visual key={`viz-${i}`} id={seg.id} />
          ) : (
            <div key={`html-${i}`} dangerouslySetInnerHTML={{ __html: seg.html }} />
          ),
        )}
      </div>
    )

  // Content that is only visuals already sits in its own figure cards.
  if (!wrapInCard || segments.every((s) => s.kind === "viz")) return renderedContent

  return (
    <Card className="mb-8 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
      <CardContent className="py-8 px-6 sm:px-8">{renderedContent}</CardContent>
    </Card>
  )
})
