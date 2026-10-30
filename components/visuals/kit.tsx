"use client"

import React, { useMemo, useState } from "react"
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  BadgeCheck,
  ChevronDown,
  CircleDashed,
  CircleHelp,
  Check,
  Minus,
  ShieldCheck,
  X,
  XOctagon,
} from "lucide-react"

import { renderInline } from "@/components/content-renderer"
import { useTopicPage } from "@/components/topic-context"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Text                                                                */
/* ------------------------------------------------------------------ */

/**
 * Authored text inside a visual: bold, italics, markdown links and bare
 * scripture references all behave exactly as they do in topic prose.
 */
export function Rich({
  text,
  as: Tag = "span",
  className,
}: {
  readonly text: string
  readonly as?: "span" | "p" | "div" | "strong"
  readonly className?: string
}) {
  const html = useMemo(() => renderInline(text), [text])
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

/* ------------------------------------------------------------------ */
/* Frame                                                               */
/* ------------------------------------------------------------------ */

export interface VisualSource {
  readonly label: string
  readonly url?: string
}

export function SourceList({ sources }: { readonly sources: readonly VisualSource[] }) {
  if (sources.length === 0) return null
  return (
    <details className="viz-sources mt-4 text-xs group">
      <summary className="cursor-pointer select-none text-[color:var(--viz-ink-2)] inline-flex items-center gap-1">
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
        Sources for this visual ({sources.length})
      </summary>
      <ol className="mt-2 space-y-1 list-decimal pl-5 text-[color:var(--viz-ink-2)]">
        {sources.map((s) => (
          <li key={s.label + (s.url ?? "")}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ol>
    </details>
  )
}

/**
 * Every visual sits in one of these. Clicks are stopped here because visuals
 * live inside subtopic cards whose whole surface toggles the card, and a click
 * on a filter chip must not collapse the section it belongs to.
 */
export function VisualCard({
  title,
  subtitle,
  note,
  sources = [],
  children,
  className,
  wide = false,
}: {
  readonly title: string
  readonly subtitle?: string
  readonly note?: string
  readonly sources?: readonly VisualSource[]
  readonly children: React.ReactNode
  readonly className?: string
  readonly wide?: boolean
}) {
  return (
    <figure
      className={cn("viz-card not-prose my-8 rounded-xl border p-4 sm:p-5 cursor-auto", wide && "sm:-mx-2", className)}
      onClick={(e) => e.stopPropagation()}
    >
      <figcaption className="mb-4">
        <div className="viz-title text-lg sm:text-xl leading-snug text-[color:var(--viz-ink)]">{title}</div>
        {subtitle && (
          <Rich as="div" text={subtitle} className="text-sm text-[color:var(--viz-ink-2)] mt-1 leading-relaxed" />
        )}
      </figcaption>
      {children}
      {note && <Rich as="p" text={note} className="mt-4 text-xs leading-relaxed text-[color:var(--viz-ink-2)] italic" />}
      <SourceList sources={sources} />
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Evidence strength                                                   */
/* ------------------------------------------------------------------ */

export type ClaimLevel = "established" | "strong" | "debated" | "weak" | "fails" | "retracted" | "myth"

const CLAIM: Record<ClaimLevel, { label: string; className: string; Icon: typeof Check }> = {
  established: { label: "Established", className: "viz-status-good", Icon: BadgeCheck },
  strong: { label: "Strong", className: "viz-status-good-soft", Icon: ShieldCheck },
  debated: { label: "Debated", className: "viz-status-warning", Icon: CircleHelp },
  weak: { label: "Weak", className: "viz-status-serious", Icon: CircleDashed },
  fails: { label: "Does not hold", className: "viz-status-critical", Icon: XOctagon },
  retracted: { label: "Retracted", className: "viz-status-critical", Icon: XOctagon },
  myth: { label: "Myth", className: "viz-status-critical", Icon: AlertTriangle },
}

/** Icon + label, never colour alone. */
export function ClaimBadge({ level, label }: { readonly level: ClaimLevel; readonly label?: string }) {
  const c = CLAIM[level]
  return (
    <span className={cn("viz-status inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[12px] font-semibold whitespace-nowrap", c.className)}>
      <c.Icon className="h-3 w-3" aria-hidden />
      {label ?? c.label}
    </span>
  )
}

export function ClaimLegend({ levels }: { readonly levels: readonly ClaimLevel[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {levels.map((l) => (
        <ClaimBadge key={l} level={l} />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Yes / no marks for matrices                                         */
/* ------------------------------------------------------------------ */

const MARKS = {
  yes: { Icon: Check, className: "viz-mark-yes", label: "Yes" },
  no: { Icon: X, className: "viz-mark-no", label: "No" },
  partial: { Icon: Minus, className: "viz-mark-partial", label: "Partly" },
  na: { Icon: Minus, className: "viz-mark-na", label: "Not applicable" },
} as const

type MarkKind = keyof typeof MARKS

/**
 * Table cells are plain strings. A cell starting "@yes", "@no", "@partial" or
 * "@na" renders an icon mark, with any text after it as a qualifier.
 */
function parseMark(cell: string): { mark: MarkKind; rest: string } | null {
  const m = /^@(yes|no|partial|na)\b\s*([\s\S]*)$/.exec(cell)
  return m ? { mark: m[1] as MarkKind, rest: m[2] } : null
}

export function Mark({ kind, text }: { readonly kind: MarkKind; readonly text?: string }) {
  const m = MARKS[kind]
  return (
    <span className="inline-flex items-start gap-1.5">
      <span className={cn("viz-mark inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full", m.className)} title={m.label}>
        <m.Icon className="h-3 w-3" aria-hidden />
        <span className="sr-only">{m.label}</span>
      </span>
      {text ? <Rich text={text} className="text-[13px] leading-snug" /> : null}
    </span>
  )
}

function Cell({ value }: { readonly value: string }) {
  const mark = parseMark(value)
  if (mark) return <Mark kind={mark.mark} text={mark.rest} />
  const level = /^!(established|strong|debated|weak|fails|retracted|myth)\b\s*([\s\S]*)$/.exec(value)
  if (level)
    return (
      <span className="inline-flex flex-col items-start gap-1">
        <ClaimBadge level={level[1] as ClaimLevel} />
        {level[2] && <Rich text={level[2]} className="text-[13px] leading-snug" />}
      </span>
    )
  return <Rich text={value} />
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

export interface Column {
  readonly key: string
  readonly label: string
  /** Sorts numerically on the leading number in the cell (BC dates as negatives). */
  readonly numeric?: boolean
  readonly className?: string
}

export type Row = Readonly<Record<string, string>>

function sortValue(cell: string | undefined, numeric: boolean): number | string {
  const text = (cell ?? "").replace(/^[@!]\w+\s*/, "").replace(/<[^>]+>|\*\*/g, "")
  if (!numeric) return text.toLowerCase()
  const m = /(-?[\d,.]+)\s*(BC|BCE)?/i.exec(text)
  if (!m) return Number.POSITIVE_INFINITY
  const n = Number.parseFloat(m[1].replace(/,/g, ""))
  return m[2] ? -n : n
}

/**
 * Sortable comparison table with optional filter chips and text search. The
 * first column stays pinned while the rest scroll sideways on phones.
 */
export function CompareTable({
  columns,
  rows,
  filterKeys = [],
  searchable = false,
  minWidth = "40rem",
  initialSort,
  compact = false,
}: {
  readonly columns: readonly Column[]
  readonly rows: readonly Row[]
  readonly filterKeys?: readonly string[]
  readonly searchable?: boolean
  readonly minWidth?: string
  readonly initialSort?: string
  readonly compact?: boolean
}) {
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 } | null>(
    initialSort ? { key: initialSort, dir: 1 } : null,
  )
  const [filters, setFilters] = useState<Record<string, string | null>>({})
  const [query, setQuery] = useState("")

  const filterValues = useMemo(
    () =>
      Object.fromEntries(
        filterKeys.map((k) => [
          k,
          Array.from(new Set(rows.flatMap((r) => (r[k] ?? "").split(/\s*;\s*/).filter(Boolean)))),
        ]),
      ),
    [filterKeys, rows],
  )

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    let out = rows.filter((r) =>
      Object.entries(filters).every(([k, v]) => !v || (r[k] ?? "").split(/\s*;\s*/).includes(v)),
    )
    if (q) out = out.filter((r) => Object.values(r).join(" ").toLowerCase().includes(q))
    if (sort) {
      const col = columns.find((c) => c.key === sort.key)
      out = [...out].sort((a, b) => {
        const x = sortValue(a[sort.key], !!col?.numeric)
        const y = sortValue(b[sort.key], !!col?.numeric)
        return (x < y ? -1 : x > y ? 1 : 0) * sort.dir
      })
    }
    return out
  }, [rows, filters, query, sort, columns])

  const cellPad = compact ? "px-2.5 py-1.5" : "px-3 py-2.5"

  return (
    <div>
      {(filterKeys.length > 0 || searchable) && (
        <div className="mb-3 space-y-2">
          {searchable && (
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter rows..."
              aria-label="Filter rows"
              className="w-full sm:w-72 rounded-md border px-3 py-1.5 text-sm bg-[color:var(--viz-surface)]"
            />
          )}
          {filterKeys.map((k) => (
            <div key={k} className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-[color:var(--viz-ink-2)] mr-1">
                {columns.find((c) => c.key === k)?.label}:
              </span>
              {filterValues[k].map((v) => {
                const active = filters[k] === v
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setFilters((f) => ({ ...f, [k]: active ? null : v }))}
                    className={cn("viz-chip", active && "viz-chip-active")}
                    aria-pressed={active}
                  >
                    {v}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      )}
      <div className="relative overflow-x-auto rounded-lg border viz-table-wrap">
        <table className="w-full border-collapse text-sm leading-snug" style={{ minWidth }}>
          <thead>
            <tr>
              {columns.map((c, i) => {
                const active = sort?.key === c.key
                const SortIcon = active ? (sort.dir === 1 ? ArrowUp : ArrowDown) : ArrowUpDown
                return (
                  <th
                    key={c.key}
                    scope="col"
                    className={cn(
                      "viz-th text-left font-semibold align-bottom",
                      cellPad,
                      i === 0 && "sticky left-0 z-10",
                      c.className,
                    )}
                    aria-sort={active ? (sort.dir === 1 ? "ascending" : "descending") : undefined}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-left hover:underline"
                      onClick={() =>
                        setSort((s) => (s?.key === c.key ? { key: c.key, dir: s.dir === 1 ? -1 : 1 } : { key: c.key, dir: 1 }))
                      }
                    >
                      {c.label}
                      <SortIcon className={cn("h-3 w-3 flex-shrink-0", !active && "opacity-40")} aria-hidden />
                    </button>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {shown.map((r, ri) => (
              <tr key={ri} className="viz-tr">
                {columns.map((c, i) => (
                  <td
                    key={c.key}
                    className={cn("viz-td align-top", cellPad, i === 0 && "sticky left-0 z-10 font-medium", c.className)}
                  >
                    <Cell value={r[c.key] ?? ""} />
                  </td>
                ))}
              </tr>
            ))}
            {shown.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-3 py-6 text-center text-[color:var(--viz-ink-2)]">
                  No rows match.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-1.5 text-[11px] text-[color:var(--viz-muted)]">
        {shown.length} of {rows.length} rows. Click a column heading to sort.
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Passages side by side                                               */
/* ------------------------------------------------------------------ */

export interface Passage {
  readonly ref: string
  readonly text: string
  readonly label?: string
}

function highlight(text: string, words: readonly string[]): string {
  if (words.length === 0) return text
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi")
  return text.replace(re, "<mark class=\"viz-mark-hl\">$1</mark>")
}

/** Two to four passages in columns, with shared wording highlighted. */
export function PassageCompare({
  passages,
  highlightWords = [],
  translation = "NIV",
}: {
  readonly passages: readonly Passage[]
  readonly highlightWords?: readonly string[]
  readonly translation?: string
}) {
  const cols = passages.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : passages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
  return (
    <div className={cn("grid grid-cols-1 gap-3", cols)}>
      {passages.map((p) => (
        <blockquote key={p.ref + p.text.slice(0, 12)} className="viz-passage not-italic rounded-lg border p-3 m-0">
          {p.label && <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-1">{p.label}</div>}
          <Rich as="div" text={p.ref} className="font-semibold text-sm mb-1.5" />
          <div
            className="text-sm leading-relaxed text-[color:var(--viz-ink)]"
            dangerouslySetInnerHTML={{ __html: highlight(p.text, highlightWords) }}
          />
        </blockquote>
      ))}
      <div className="col-span-full text-[11px] text-[color:var(--viz-muted)]">Quoted from the {translation}.</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Steps                                                               */
/* ------------------------------------------------------------------ */

export interface Step {
  readonly label: string
  readonly title: string
  readonly body?: string
}

/** A left-to-right sequence (wraps to a vertical list on phones). */
export function StepStrip({ steps }: { readonly steps: readonly Step[] }) {
  return (
    <ol className="grid gap-3 sm:grid-flow-col sm:auto-cols-fr list-none p-0 m-0">
      {steps.map((s, i) => (
        <li key={s.label + s.title} className="viz-step relative rounded-lg border p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="viz-step-num inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">{i + 1}</span>
            <span className="text-[12px] font-semibold text-[color:var(--viz-muted)]">{s.label}</span>
          </div>
          <Rich as="div" text={s.title} className="font-semibold text-sm leading-snug" />
          {s.body && <Rich as="div" text={s.body} className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]" />}
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Card grids                                                          */
/* ------------------------------------------------------------------ */

export interface InfoCard {
  readonly title: string
  readonly kicker?: string
  readonly body: string
  readonly level?: ClaimLevel
  readonly footer?: string
}

export function CardGrid({ cards, columns = 3 }: { readonly cards: readonly InfoCard[]; readonly columns?: 2 | 3 | 4 }) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns]
  return (
    <div className={cn("grid grid-cols-1 gap-3", cols)}>
      {cards.map((c) => (
        <div key={c.title} className="viz-info rounded-lg border p-3 flex flex-col">
          {c.kicker && <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-1">{c.kicker}</div>}
          <div className="flex items-start justify-between gap-2">
            <Rich as="div" text={c.title} className="font-semibold text-sm leading-snug" />
            {c.level && <ClaimBadge level={c.level} />}
          </div>
          <Rich as="div" text={c.body} className="text-[13px] leading-relaxed mt-1.5 text-[color:var(--viz-ink-2)] grow" />
          {c.footer && <Rich as="div" text={c.footer} className="text-[12px] mt-2 pt-2 border-t text-[color:var(--viz-ink-2)]" />}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Objection and response                                              */
/* ------------------------------------------------------------------ */

export function ObjectionCards({
  items,
}: {
  readonly items: ReadonlyArray<{ readonly objection: string; readonly response: string }>
}) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-2">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.objection} className="viz-info rounded-lg border">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left p-3 flex items-start gap-2"
            >
              <span className="text-[12px] font-semibold text-[color:var(--viz-muted)] mt-0.5 w-20 flex-shrink-0">Objection</span>
              <Rich text={it.objection} className="font-medium text-sm grow" />
              <ChevronDown className={cn("h-4 w-4 flex-shrink-0 transition-transform mt-0.5", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="px-3 pb-3 flex gap-2">
                <span className="text-[12px] font-semibold text-[color:var(--viz-muted)] mt-0.5 w-20 flex-shrink-0">Response</span>
                <Rich as="div" text={it.response} className="text-sm leading-relaxed text-[color:var(--viz-ink-2)]" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Section explorer (prophecy, contradictions)                         */
/* ------------------------------------------------------------------ */

export interface ExplorerItem {
  readonly section: string
  readonly title: string
  readonly facets: Readonly<Record<string, string>>
  readonly summary?: string
  readonly level?: ClaimLevel
  readonly meta?: string
}

/**
 * Filterable grid over a topic's subtopics. "Open section" expands the card
 * further down and scrolls to it, so nothing here duplicates the prose.
 */
export function SectionExplorer({
  items,
  facets,
  countLabel = "sections",
}: {
  readonly items: readonly ExplorerItem[]
  readonly facets: ReadonlyArray<{ readonly key: string; readonly label: string }>
  readonly countLabel?: string
}) {
  const { openSection } = useTopicPage()
  const [active, setActive] = useState<Record<string, string | null>>({})
  const [query, setQuery] = useState("")
  const [showAll, setShowAll] = useState(false)

  const values = useMemo(
    () => Object.fromEntries(facets.map((f) => [f.key, Array.from(new Set(items.map((i) => i.facets[f.key]).filter(Boolean)))])),
    [facets, items],
  )

  const shown = items.filter(
    (it) =>
      Object.entries(active).every(([k, v]) => !v || it.facets[k] === v) &&
      (!query.trim() || `${it.title} ${it.summary ?? ""} ${it.meta ?? ""}`.toLowerCase().includes(query.trim().toLowerCase())),
  )

  return (
    <div>
      <div className="space-y-2 mb-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${countLabel}...`}
          aria-label={`Search ${countLabel}`}
          className="w-full sm:w-80 rounded-md border px-3 py-1.5 text-sm bg-[color:var(--viz-surface)]"
        />
        {facets.map((f) => (
          <div key={f.key} className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-[color:var(--viz-ink-2)] mr-1">{f.label}:</span>
            {values[f.key].map((v) => {
              const on = active[f.key] === v
              const count = items.filter((i) => i.facets[f.key] === v).length
              return (
                <button
                  key={v}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive((a) => ({ ...a, [f.key]: on ? null : v }))}
                  className={cn("viz-chip", on && "viz-chip-active")}
                >
                  {v} <span className="opacity-60">{count}</span>
                </button>
              )
            })}
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[color:var(--viz-muted)] mb-2">
        Showing {shown.length} of {items.length} {countLabel}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {(showAll || shown.length <= 15 ? shown : shown.slice(0, 12)).map((it) => (
          <button
            key={it.section}
            type="button"
            onClick={() => openSection(it.section)}
            className="viz-info rounded-lg border p-3 text-left hover:border-[color:var(--viz-ink-2)] transition-colors flex flex-col"
          >
            <div className="flex flex-wrap gap-1 mb-1.5">
              {facets.map((f) =>
                it.facets[f.key] ? (
                  <span key={f.key} className="viz-tag">
                    {it.facets[f.key]}
                  </span>
                ) : null,
              )}
            </div>
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-sm leading-snug">{it.title}</span>
              {it.level && <ClaimBadge level={it.level} />}
            </div>
            {it.meta && <Rich as="div" text={it.meta} className="text-[12px] mt-1 text-[color:var(--viz-ink-2)]" />}
            {it.summary && <Rich as="div" text={it.summary} className="text-[13px] mt-1.5 leading-relaxed text-[color:var(--viz-ink-2)] grow" />}
            <span className="text-xs text-blue-600 mt-2">Open section</span>
          </button>
        ))}
      </div>
      {shown.length > 15 && (
        <button type="button" className="viz-chip mt-3" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
          {showAll ? "Show fewer" : `Show all ${shown.length} ${countLabel}`}
        </button>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Segmented toggle                                                    */
/* ------------------------------------------------------------------ */

export function Toggle<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  readonly options: ReadonlyArray<{ readonly value: T; readonly label: string }>
  readonly value: T
  readonly onChange: (v: T) => void
  readonly label: string
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex flex-wrap rounded-lg border p-0.5 viz-toggle">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn("px-3 py-1 text-xs sm:text-sm rounded-md transition-colors", value === o.value ? "viz-toggle-on" : "hover:bg-[color:var(--viz-hover)]")}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** Small coloured key used by charts with two or more series. */
export function Legend({ items }: { readonly items: ReadonlyArray<{ readonly label: string; readonly color: string }> }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-[color:var(--viz-ink-2)]">
      {items.map((i) => (
        <span key={i.label} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: i.color }} />
          {i.label}
        </span>
      ))}
    </div>
  )
}
