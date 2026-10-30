"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Search, X } from "lucide-react"

import type { SearchEntry } from "@/lib/search-index"

/** Folds case and accents so "pneuma" can find "πνεῦμα" spellings with marks removed. */
const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[‘’]/g, "'")

interface IndexedEntry extends SearchEntry {
  readonly title: string
  readonly topicTitle: string
  readonly body: string
}

let indexPromise: Promise<IndexedEntry[]> | null = null

function loadIndex() {
  indexPromise ??= fetch("/search-index.json")
    .then((r) => {
      if (!r.ok) throw new Error(`search index ${r.status}`)
      return r.json() as Promise<SearchEntry[]>
    })
    .then((entries) => entries.map((e) => ({ ...e, title: fold(e.h), topicTitle: fold(e.tt), body: fold(e.x) })))
    .catch((err) => {
      indexPromise = null
      throw err
    })
  return indexPromise
}

const MAX_RESULTS = 40

function runSearch(index: readonly IndexedEntry[], query: string) {
  const phrase = fold(query).trim()
  const terms = phrase.split(/\s+/).filter((w) => w.length > 1 || /[^a-z0-9]/.test(w))
  if (terms.length === 0) return []
  const scored: Array<{ entry: IndexedEntry; score: number }> = []
  for (const entry of index) {
    let score = 0
    let all = true
    for (const term of terms) {
      const inTitle = entry.title.includes(term)
      const inTopic = entry.topicTitle.includes(term)
      const inBody = entry.body.includes(term)
      if (!inTitle && !inTopic && !inBody) {
        all = false
        break
      }
      score += (inTitle ? 12 : 0) + (inTopic ? 3 : 0)
      if (inBody) score += Math.min(6, entry.body.split(term).length - 1)
    }
    if (!all) continue
    if (entry.title.includes(phrase)) score += 40
    if (entry.body.includes(phrase)) score += 15
    if (!entry.s) score += 2
    scored.push({ entry, score })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, MAX_RESULTS).map((r) => r.entry)
}

/** The words around the first match, with enough either side to read. */
function snippet(entry: IndexedEntry, query: string) {
  const phrase = fold(query).trim()
  const first = phrase.split(/\s+/)[0] ?? ""
  let at = entry.body.indexOf(phrase)
  if (at < 0) at = entry.body.indexOf(first)
  // Folding can shorten text with combining marks, so the offset is only approximate there.
  const start = Math.max(0, at - 70)
  const text = entry.x.slice(start, start + 210)
  return `${start > 0 ? "..." : ""}${text}${start + 210 < entry.x.length ? "..." : ""}`
}

function Highlighted({ text, query }: { readonly text: string; readonly query: string }) {
  const terms = query.trim().split(/\s+/).filter((t) => t.length > 1)
  if (terms.length === 0) return <>{text}</>
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi")
  return (
    <>
      {text.split(pattern).map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded-sm px-0.5" style={{ background: "#fde68a", color: "#1f2937" }}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function SearchPanel({
  initialQuery = "",
  autoFocus = true,
  onNavigate,
}: {
  readonly initialQuery?: string
  readonly autoFocus?: boolean
  readonly onNavigate?: () => void
}) {
  const [query, setQuery] = useState(initialQuery)
  const [index, setIndex] = useState<IndexedEntry[] | null>(null)
  const [failed, setFailed] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let live = true
    loadIndex()
      .then((data) => live && setIndex(data))
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
  }, [])

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  useEffect(() => setQuery(initialQuery), [initialQuery])

  const results = useMemo(() => (index ? runSearch(index, query) : []), [index, query])
  const hasQuery = query.trim().length > 1

  const hrefFor = (e: IndexedEntry) => `/categories/${e.t}${e.s ? `#section-${encodeURIComponent(e.s)}` : ""}`

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              onNavigate?.()
              window.location.assign(hrefFor(results[0]))
            }
          }}
          placeholder="Search every topic..."
          aria-label="Search every topic"
          className="w-full rounded-md border border-gray-300 bg-white py-3 pl-10 pr-3 text-base text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mt-3 min-h-0 flex-1 overflow-y-auto" aria-live="polite">
        {failed && <p className="py-6 text-center text-sm text-gray-500">Search could not load. Please try again.</p>}
        {!failed && !index && hasQuery && <p className="py-6 text-center text-sm text-gray-500">Loading...</p>}
        {index && hasQuery && results.length === 0 && (
          <p className="py-6 text-center text-sm text-gray-500">Nothing found for &quot;{query.trim()}&quot;. Try fewer or different words.</p>
        )}
        {results.length > 0 && (
          <ul className="m-0 list-none space-y-1 p-0">
            {results.map((entry) => (
              <li key={`${entry.t}-${entry.s ?? "top"}`}>
                <a
                  href={hrefFor(entry)}
                  onClick={onNavigate}
                  className="block rounded-md p-2.5 no-underline hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <span className="block text-xs text-gray-500">{entry.s ? entry.tt : "Topic"}</span>
                  <span className="block text-sm font-semibold leading-snug text-blue-700">
                    <Highlighted text={entry.h} query={query} />
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-gray-600">
                    <Highlighted text={snippet(entry, query)} query={query} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

/** The panel on the /search page, taking its starting query from the address. */
export function SearchFromUrl() {
  const [query, setQuery] = useState("")
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") ?? "")
  }, [])
  return <SearchPanel initialQuery={query} />
}

/** The search button in the navigation bar, opening the panel over the page. Ctrl+K also opens it. */
export function SiteSearchButton() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 text-sm text-gray-500 hover:text-blue-600"
        aria-label="Search every topic"
      >
        <Search className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-gray-200 px-1 text-[10px] text-gray-400 lg:inline">Ctrl K</kbd>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Search every topic"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-xl bg-white p-4 shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Search the whole site</span>
              <button type="button" onClick={close} aria-label="Close search" className="rounded p-1 text-gray-500 hover:text-gray-900">
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <SearchPanel onNavigate={close} />
          </div>
        </div>
      )}
    </>
  )
}
