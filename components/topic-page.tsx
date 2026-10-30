"use client"

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUp, BookOpen, Calendar, Check, ChevronDown, ChevronUp, Clock, ExternalLink, Link2, ListTree } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BibleVerse } from "@/components/bible-verse"
import { ContentRenderer } from "@/components/content-renderer"
import { TopicPopover } from "@/components/topic-popover"
import { TopicPageContext, sectionDomId } from "@/components/topic-context"
import { ChallengeQuestions } from "@/components/challenge-questions"
import { LEVEL_MEANINGS } from "@/topics/extras/organisation"
import type { Topic } from "@/topics/types"

type Subtopic = NonNullable<Topic["subtopics"]>[number]

/**
 * Browser find (Ctrl+F) can match text inside a collapsed section, which is held
 * `hidden="until-found"`. The browser fires `beforematch` on it just before revealing
 * the match, and that is the moment to mark the section open so React agrees.
 */
function useExpandOnBrowserFind(expand: (id: string) => void) {
  const expandRef = useRef(expand)
  expandRef.current = expand

  useEffect(() => {
    const onBeforeMatch = (event: Event) => {
      const owner = (event.target as HTMLElement).closest("[data-subtopic-id]")
      const id = owner?.getAttribute("data-subtopic-id")
      if (id) expandRef.current(id)
    }
    document.addEventListener("beforematch", onBeforeMatch, true)
    return () => document.removeEventListener("beforematch", onBeforeMatch, true)
  }, [])
}

const MAX_FILTER_TAGS = 10

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

  // A filter row stops being useful past ten choices. The topic data is curated to
  // stay within this, and the cap keeps the most-used tags if a later edit does not.
  const allTags = useMemo(() => {
    const counts = new Map<string, number>()
    for (const tag of subtopics.flatMap((sub) => sub.tags)) counts.set(tag, (counts.get(tag) ?? 0) + 1)
    return [...counts.keys()].sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0)).slice(0, MAX_FILTER_TAGS)
  }, [subtopics])

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

/** A small, quiet control beside a section's tags that copies a direct link to it. */
function CopySectionLink({ id }: { readonly id: string }) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timer)
  }, [copied])
  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionDomId(id)}`
    navigator.clipboard?.writeText(url).then(() => setCopied(true), () => undefined)
  }
  return (
    <button
      type="button"
      onClick={copy}
      title={copied ? "Link copied" : "Copy link to this section"}
      aria-label={copied ? "Link copied" : "Copy link to this section"}
      className="ml-auto rounded p-1 text-gray-300 transition-colors hover:text-blue-600 focus-visible:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-600" aria-hidden /> : <Link2 className="h-3.5 w-3.5" aria-hidden />}
    </button>
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
  const panelId = `panel-${sub.id}`
  // React treats `hidden` as a plain boolean and writes hidden="", so the value browser
  // find needs has to be set on the element directly.
  const panelRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!expanded) panelRef.current?.setAttribute("hidden", "until-found")
  }, [expanded])
  return (
    <Card id={sectionDomId(sub.id)} className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300 scroll-mt-24">
      <CardHeader className="flex flex-col">
        <div className="flex flex-col gap-3">
          <h3 className="m-0">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => onToggle(sub.id)}
              className="flex w-full items-start justify-between gap-2 rounded text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              <span className="flex-1 text-lg font-semibold leading-tight text-purple-700">{sub.title}</span>
              {expanded ? <ChevronUp className="mt-1 h-4 w-4 flex-shrink-0" aria-hidden /> : <ChevronDown className="mt-1 h-4 w-4 flex-shrink-0" aria-hidden />}
            </button>
          </h3>
          <div className="flex flex-wrap items-center gap-1">
            {sub.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            <CopySectionLink id={sub.id} />
          </div>
          {header}
        </div>
      </CardHeader>
      {/* until-found keeps collapsed text out of the tab order and away from screen
          readers, while still letting browser find reveal it (see useExpandOnBrowserFind). */}
      <CardContent
        ref={panelRef}
        id={panelId}
        data-subtopic-id={sub.id}
        hidden={!expanded}
        className={expanded ? "py-4 text-gray-800" : "py-0 text-gray-800"}
      >
        <ContentRenderer content={sub.content} sources={sources} wrapInCard={false} />
      </CardContent>
    </Card>
  )
})

/** Rough reading time over the prose, ignoring markup and visual markers. */
function readingMinutes(topic: Topic) {
  const text = [topic.content, ...(topic.subtopics ?? []).map((s) => s.content)].join(" ")
  const words = text.replace(/<[^>]+>|\[\^\d+\]/g, " ").split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 230))
}

/** Thin bar along the very top of the window showing how far down the page the reader is. */
function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
        setShowTop(window.scrollY > 1200)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[60] h-1 pointer-events-none" aria-hidden>
        <div className="h-full bg-blue-600 origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

/**
 * A short list of collapsed sections already works as its own contents, so the
 * separate card is only worth its space on the long topics.
 */
const CONTENTS_MIN_SECTIONS = 15

/** Divides the overview from the sections, so each part of the page has one job. */
function SectionHeading({ title }: { readonly title: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-5">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">{title}</h2>
      <div className="h-px flex-1 bg-gray-200" aria-hidden />
    </div>
  )
}

/** Banner picture for a topic, with the attribution its licence requires. */
function TopicHero({ hero }: { readonly hero: NonNullable<Topic["hero"]> }) {
  return (
    <figure className="m-0 -mt-6">
      <div className="relative h-44 sm:h-64 w-full overflow-hidden bg-gray-100">
        {hero.contain && (
          <Image src={hero.src} alt="" fill aria-hidden sizes="640px" className="object-cover scale-110 blur-xl opacity-70" />
        )}
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className={hero.contain ? "object-contain" : "object-cover"}
          style={hero.contain ? undefined : { objectPosition: hero.position ?? "center" }}
        />
      </div>
      <figcaption className="px-6 pt-2 text-[11px] leading-snug text-gray-500">
        {hero.caption}{" "}
        <a href={hero.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {hero.credit}, {hero.license}
        </a>
      </figcaption>
    </figure>
  )
}

/** Every section of the topic, one click to open and jump to it. */
function ContentsCard({
  subtopics,
  onOpen,
}: {
  readonly subtopics: readonly Subtopic[]
  readonly onOpen: (id: string) => void
}) {
  const [open, setOpen] = useState(subtopics.length <= 12)
  const shown = open ? subtopics : subtopics.slice(0, 9)
  return (
    <Card className="mb-8">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ListTree className="h-5 w-5 text-purple-600" />
          In this topic
          <span className="text-sm font-normal text-gray-500">({subtopics.length} sections)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3 list-decimal pl-5 text-sm marker:text-gray-400">
          {shown.map((sub) => (
            <li key={sub.id}>
              <a
                href={`#${sectionDomId(sub.id)}`}
                onClick={(e) => {
                  e.preventDefault()
                  onOpen(sub.id)
                }}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                {sub.title}
              </a>
            </li>
          ))}
        </ol>
        {subtopics.length > 12 && (
          <Button variant="ghost" size="sm" className="mt-3" onClick={() => setOpen((v) => !v)}>
            {open ? "Show fewer" : `Show all ${subtopics.length} sections`}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

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

export interface TopicPageProps {
  readonly category: Topic
  /** Rendered at the start of the sections, before the search box (e.g. the branches legend). */
  readonly beforeSearch?: React.ReactNode
  /** Extra header content inside each subtopic card (e.g. branch belief icons). */
  readonly renderSubtopicHeader?: (sub: Subtopic) => React.ReactNode
  /** Wraps each subtopic card, for the branches timeline rail. */
  readonly renderSubtopicWrapper?: (sub: Subtopic, card: React.ReactNode) => React.ReactNode
  /** Container class for the subtopic list. */
  readonly subtopicListClassName?: string
  /** Rendered at the end of the overview (e.g. a Timeline). */
  readonly beforeSubtopics?: React.ReactNode
}

export function TopicPage({
  category,
  beforeSearch,
  beforeSubtopics,
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

  // Opening a section clears any filter that would hide it, then scrolls once
  // the card has rendered expanded. The hash makes the section linkable.
  const openSection = useCallback(
    (id: string, anchorId?: string) => {
      setSearch("")
      setSelectedTag(null)
      expand(id)
      history.replaceState(null, "", `#${sectionDomId(id)}`)
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          document
            .getElementById(anchorId ?? sectionDomId(id))
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        ),
      )
    },
    [expand, setSearch, setSelectedTag],
  )

  // Deep links: /categories/x#section-y opens that section on arrival, and again when a
  // link within the page changes the hash. openSection's own replaceState fires no event.
  useEffect(() => {
    const openFromHash = () => {
      const m = /^#section-(.+)$/.exec(window.location.hash)
      const id = m ? decodeURIComponent(m[1]) : null
      if (id && subtopics.some((s) => s.id === id)) openSection(id)
    }
    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [openSection, subtopics])

  const context = useMemo(() => ({ expand, openSection }), [expand, openSection])
  const minutes = useMemo(() => readingMinutes(category), [category])

  return (
    <TopicPageContext.Provider value={context}>
    <ReadingProgress />
    <TopicPopover />
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

        <Card className="mb-8 overflow-hidden">
          {category.hero && <TopicHero hero={category.hero} />}
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {category.level && (
                <span
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700"
                  title={LEVEL_MEANINGS[category.level]}
                >
                  {category.level}
                </span>
              )}
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-gray-500 mt-4">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last updated: {category.lastUpdated}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {minutes} min read
              </span>
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

        {(category.content || beforeSubtopics) && <SectionHeading title="At a glance" />}

        {category.content && (
          <ContentRenderer content={category.content} sources={category.sources} />
        )}

        {beforeSubtopics}

        {category.questions && category.questions.length > 0 && (
          <ChallengeQuestions questions={category.questions} />
        )}

        {subtopics.length > 0 && (
          <>
            <SectionHeading title="In depth" />

            {beforeSearch}

            {subtopics.length >= CONTENTS_MIN_SECTIONS && <ContentsCard subtopics={subtopics} onOpen={openSection} />}

            {subtopics.length > 1 && (
              <div className="flex justify-end gap-2 mb-3">
                <Button variant="outline" size="sm" onClick={() => setExpanded(new Set(subtopics.map((s) => s.id)))}>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Expand all
                </Button>
                <Button variant="outline" size="sm" onClick={() => setExpanded(new Set())}>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Collapse all
                </Button>
              </div>
            )}
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

        {category.relatedTopics && category.relatedTopics.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-6 w-6 text-purple-600" />
                Read next
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
                {category.relatedTopics.map((topic) => (
                  <li key={topic.id}>
                    <Link href={`/categories/${topic.id}`} className="block rounded-md p-2 no-underline hover:bg-blue-50">
                      <span className="block text-sm font-semibold text-blue-700">{topic.title}</span>
                      <span className="block text-[13px] leading-snug text-gray-600 line-clamp-2">{topic.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
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
    </TopicPageContext.Provider>
  )
}
