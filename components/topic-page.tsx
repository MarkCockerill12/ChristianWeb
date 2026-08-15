"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BibleVerse } from "@/components/bible-verse"
import { ContentRenderer } from "@/components/content-renderer"
import type { Topic } from "@/topics/types"

type Subtopic = NonNullable<Topic["subtopics"]>[number]

/**
 * Browser find (Ctrl+F) can match text inside a collapsed subtopic, because the
 * content stays in the DOM behind `max-h-0`. When that happens the browser moves
 * the selection into it, so we listen for selection changes and expand the owner.
 *
 * Registered once for the lifetime of the page: the previous implementation
 * re-ran on every expand/collapse and never removed its listener, so handlers
 * accumulated one per toggle.
 */
function useExpandOnBrowserFind(expand: (id: string) => void) {
  const expandRef = useRef(expand)
  expandRef.current = expand

  useEffect(() => {
    const onSelectionChange = () => {
      const selection = globalThis.getSelection()
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return

      const container = selection.getRangeAt(0).commonAncestorContainer
      const element =
        container.nodeType === Node.TEXT_NODE
          ? container.parentElement
          : (container as HTMLElement)

      const owner = element?.closest("[data-subtopic-id]")
      const id = owner?.getAttribute("data-subtopic-id")
      if (id) expandRef.current(id)
    }

    document.addEventListener("selectionchange", onSelectionChange)
    return () => document.removeEventListener("selectionchange", onSelectionChange)
  }, [])
}

/** Search/tag filtering over a topic's subtopics. */
function useSubtopicFilter(subtopics: readonly Subtopic[]) {
  const [search, setSearch] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Precomputed once per topic: content bodies run to hundreds of KB, so
  // lowercasing them on every keystroke was the dominant cost while typing.
  const haystacks = useMemo(
    () =>
      subtopics.map((sub) =>
        `${sub.title}\n${sub.content}\n${sub.tags.join("\n")}`.toLowerCase(),
      ),
    [subtopics],
  )

  const allTags = useMemo(
    () => Array.from(new Set(subtopics.flatMap((sub) => sub.tags))),
    [subtopics],
  )

  const filtered = useMemo(() => {
    if (selectedTag) return subtopics.filter((sub) => sub.tags.includes(selectedTag))
    const q = search.trim().toLowerCase()
    if (!q) return subtopics as Subtopic[]
    return subtopics.filter((_, i) => haystacks[i].includes(q))
  }, [subtopics, haystacks, search, selectedTag])

  return { search, setSearch, selectedTag, setSelectedTag, allTags, filtered }
}

function SubtopicSearch({
  search,
  onSearch,
  allTags,
  selectedTag,
  onSelectTag,
}: {
  readonly search: string
  readonly onSearch: (v: string) => void
  readonly allTags: readonly string[]
  readonly selectedTag: string | null
  readonly onSelectTag: (t: string | null) => void
}) {
  return (
    <div className="mb-6 space-y-4">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          onSearch(e.target.value)
          onSelectTag(null)
        }}
        placeholder="Search sections or tags..."
        aria-label="Search sections or tags"
        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
      />
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              className={`text-xs sm:text-sm ${selectedTag === tag ? "bg-blue-600 text-white" : ""}`}
              onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

const SubtopicCard = React.memo(function SubtopicCard({
  sub,
  sources,
  expanded,
  onToggle,
  header,
}: {
  readonly sub: Subtopic
  readonly sources: readonly string[]
  readonly expanded: boolean
  readonly onToggle: (id: string) => void
  readonly header?: React.ReactNode
}) {
  return (
    <Card
      className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onToggle(sub.id)}
    >
      <CardHeader className="flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg text-purple-700 flex-1 leading-tight">
              {sub.title}
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 flex-shrink-0 pointer-events-none"
              tabIndex={-1}
              aria-hidden
            >
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            {sub.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {header}
        </div>
      </CardHeader>
      <CardContent
        data-subtopic-id={sub.id}
        className={`text-gray-800 transition-all duration-300 ${
          expanded ? "py-4 max-h-[50000px]" : "max-h-0 py-0"
        } overflow-hidden`}
      >
        <ContentRenderer content={sub.content} sources={sources} wrapInCard={false} />
      </CardContent>
    </Card>
  )
})

function SourcesCard({ sources }: { readonly sources: readonly string[] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="h-6 w-6 text-green-600" />
          Sources &amp; Further Reading
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {sources
            .filter((source) => source.trim() !== "")
            .map((source, index) => {
              const url = /(https?:\/\/[^\s"']+)/.exec(source)?.[1] ?? null
              const description = url ? source.replace(url, "").trim() : source

              return (
                <li
                  key={`source-${index}`}
                  id={`source-${index + 1}`}
                  className="flex items-start gap-2 scroll-mt-20"
                >
                  <ExternalLink className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  {url ? (
                    <div className="flex flex-col">
                      <span className="text-gray-700 text-sm">{description}</span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm break-all"
                      >
                        {url}
                      </a>
                    </div>
                  ) : (
                    <span className="text-gray-700 text-sm">{source}</span>
                  )}
                </li>
              )
            })}
        </ul>
      </CardContent>
    </Card>
  )
}

/** Handed to `afterSubtopics` so sibling UI (e.g. the branching timeline) can open a section. */
export interface TopicPageApi {
  readonly expand: (subtopicId: string) => void
}

export interface TopicPageProps {
  readonly category: Topic
  /** Rendered between the TL;DR and the search box (e.g. the branches legend). */
  readonly beforeSearch?: React.ReactNode
  /** Rendered after the subtopic list (e.g. the branching timeline). */
  readonly afterSubtopics?: React.ReactNode | ((api: TopicPageApi) => React.ReactNode)
  /** Extra header content inside each subtopic card (e.g. branch belief icons). */
  readonly renderSubtopicHeader?: (sub: Subtopic) => React.ReactNode
  /** Wraps each subtopic card, for the branches timeline rail. */
  readonly renderSubtopicWrapper?: (sub: Subtopic, card: React.ReactNode) => React.ReactNode
  /** Container class for the subtopic list. */
  readonly subtopicListClassName?: string
  /** Rendered between the main content and the subtopic search (e.g. a Timeline). */
  readonly beforeSubtopics?: React.ReactNode
}

export function TopicPage({
  category,
  beforeSearch,
  beforeSubtopics,
  afterSubtopics,
  renderSubtopicHeader,
  renderSubtopicWrapper,
  subtopicListClassName = "space-y-4",
}: TopicPageProps) {
  const subtopics = useMemo(() => category.subtopics ?? [], [category.subtopics])
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set())

  const expand = useCallback((id: string) => {
    setExpanded((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])

  const toggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (!next.delete(id)) next.add(id)
      return next
    })
  }, [])

  useExpandOnBrowserFind(expand)

  const { search, setSearch, selectedTag, setSelectedTag, allTags, filtered } =
    useSubtopicFilter(subtopics)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Topics
            </Link>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {category.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-fluid-3xl break-words hyphens-auto leading-tight">
              {category.title}
            </CardTitle>
            <CardDescription className="text-lg">{category.description}</CardDescription>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4" />
              Last updated: {category.lastUpdated}
            </div>
          </CardHeader>
        </Card>

        {category.tldr && (
          <Card className="mb-8 border-l-4 border-blue-600 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">TL;DR</CardTitle>
              <CardDescription className="text-md text-gray-700">{category.tldr}</CardDescription>
            </CardHeader>
          </Card>
        )}

        {beforeSearch}

        {category.content && (
          <ContentRenderer content={category.content} sources={category.sources} />
        )}

        {beforeSubtopics}

        {subtopics.length > 0 && (
          <>
            <SubtopicSearch
              search={search}
              onSearch={setSearch}
              allTags={allTags}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />

            <div className={subtopicListClassName}>
              {filtered.map((sub) => {
                const card = (
                  <SubtopicCard
                    sub={sub}
                    sources={category.sources}
                    expanded={expanded.has(sub.id)}
                    onToggle={toggle}
                    header={renderSubtopicHeader?.(sub)}
                  />
                )
                return renderSubtopicWrapper ? (
                  <React.Fragment key={sub.id}>{renderSubtopicWrapper(sub, card)}</React.Fragment>
                ) : (
                  <React.Fragment key={sub.id}>{card}</React.Fragment>
                )
              })}
              {filtered.length === 0 && (
                <div className="text-gray-500 text-center py-8">No matching sections found.</div>
              )}
            </div>
          </>
        )}

        {typeof afterSubtopics === "function" ? afterSubtopics({ expand }) : afterSubtopics}

        {category.verses && category.verses.length > 0 && (
          <Card className="mb-8 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Key Bible Verses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.verses.map((verse) => (
                  <BibleVerse key={verse.reference} verse={verse} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <SourcesCard sources={category.sources} />

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Topics
            </Link>
          </Button>
          <Button asChild>
            <Link href="/personal">Personal Journey</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { useExpandOnBrowserFind }
