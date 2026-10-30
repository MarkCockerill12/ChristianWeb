"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import INDEX from "@/visuals/data/bible-index.json"
import { useTopicPage } from "@/components/topic-context"
import { Rich, Toggle } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { cn } from "@/lib/utils"

/**
 * Arc diagram of the Bible's cross-references, after Chris Harrison and Christoph
 * Römhild's 2007 chart. Every chapter sits on the baseline and every link is one arc.
 *
 * The full set is drawn once into its own canvas, in slices so the page stays
 * responsive; hover and selection only repaint a second canvas stacked on top.
 */

const { names: NAMES, chapters: CHAPTERS } = INDEX as { names: string[]; chapters: number[][] }
const FIRST_NT_BOOK = 39
const CHAPTER_COUNT = CHAPTERS.reduce((n, c) => n + c.length, 0)
const SLICE = 3500
const RECORD = 6

/* verse id -> chapter ordinal, built once */
const BOOK_START: number[] = []
const VERSE_CHAPTER = (() => {
  const total = CHAPTERS.flat().reduce((a, b) => a + b, 0)
  const out = new Uint16Array(total)
  let verse = 0
  let chapter = 0
  CHAPTERS.forEach((chs) => {
    BOOK_START.push(chapter)
    chs.forEach((count) => {
      out.fill(chapter, verse, verse + count)
      verse += count
      chapter++
    })
  })
  return out
})()
const CHAPTER_BOOK = (() => {
  const out = new Uint8Array(CHAPTER_COUNT)
  CHAPTERS.forEach((chs, b) => out.fill(b, BOOK_START[b], BOOK_START[b] + chs.length))
  return out
})()
const VERSE_START = (() => {
  const out = new Uint16Array(CHAPTER_COUNT)
  let v = 0
  CHAPTERS.flat().forEach((count, i) => {
    out[i] = v
    v += count
  })
  return out
})()

function verseRef(id: number) {
  const chapter = VERSE_CHAPTER[id]
  const book = CHAPTER_BOOK[chapter]
  return `${NAMES[book]} ${chapter - BOOK_START[book] + 1}:${id - VERSE_START[chapter] + 1}`
}

const NAME_TO_BOOK = new Map(NAMES.map((n, i) => [n, i]))
NAME_TO_BOOK.set("Psalms", NAME_TO_BOOK.get("Psalm") as number)

/** "Isaiah 44:28-45:1" -> chapter ordinal, or null when the text is not a reference. */
function chapterOf(ref: string): number | null {
  const m = /^\s*((?:[123] )?[A-Z][a-z]+(?: of [A-Z][a-z]+)?) (\d+):\d/.exec(ref)
  if (!m) return null
  const book = NAME_TO_BOOK.get(m[1])
  return book === undefined ? null : BOOK_START[book] + Number(m[2]) - 1
}

export interface CuratedLink {
  readonly section: string
  readonly title: string
  readonly group: string
  readonly note: string
  /** "Micah 5:2 → Luke 2:1-7 (c. 700 BC)" */
  readonly meta: string
}

interface CuratedArc extends CuratedLink {
  readonly pairs: ReadonlyArray<readonly [number, number]>
}

function parseCurated(items: readonly CuratedLink[]): CuratedArc[] {
  return items.map((item) => {
    const [from, to = ""] = item.meta.replace(/\s*\([^)]*\)\s*$/, "").split("→")
    const targets = to.split(";").map(chapterOf).filter((c): c is number => c !== null)
    const sources = from.split(";").map(chapterOf).filter((c): c is number => c !== null)
    return { ...item, pairs: sources.flatMap((s) => targets.map((t) => [s, t] as const)) }
  })
}

/* Span of the link -> colour: short green, middling red and pink, long blue and violet. */
const HUE_STOPS: ReadonlyArray<readonly [number, number]> = [[0, 125], [0.2, 40], [0.4, -15], [0.6, -60], [0.8, -130], [1, -170]]
function hueFor(span: number) {
  for (let i = 1; i < HUE_STOPS.length; i++) {
    const [x1, h1] = HUE_STOPS[i]
    if (span <= x1) {
      const [x0, h0] = HUE_STOPS[i - 1]
      return h0 + ((span - x0) / (x1 - x0)) * (h1 - h0)
    }
  }
  return HUE_STOPS[HUE_STOPS.length - 1][1]
}

const BASELINE_RATIO = 0.5
const LABEL_SPACE = 78
const BAR_SPACE = 16

function layout(width: number) {
  const baseline = Math.round(width * BASELINE_RATIO) + 4
  return { baseline, height: baseline + BAR_SPACE + LABEL_SPACE, x: (ch: number) => ((ch + 0.5) / CHAPTER_COUNT) * width }
}

function traceArc(ctx: CanvasRenderingContext2D, x1: number, x2: number, baseline: number) {
  const rx = Math.abs(x2 - x1) / 2
  ctx.ellipse((x1 + x2) / 2, baseline, Math.max(rx, 0.5), Math.max(rx, 0.5), 0, Math.PI, 2 * Math.PI)
}

function prepare(canvas: HTMLCanvasElement, width: number, height: number) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  canvas.style.height = `${height}px`
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  return ctx
}

type View = "all" | "ot-nt" | "curated"

const VIEWS: ReadonlyArray<{ value: View; label: string }> = [
  { value: "curated", label: "The prophecies below" },
  { value: "ot-nt", label: "Old Testament to New" },
  { value: "all", label: "Every link" },
]

const inView = (a: number, b: number, view: View) => view !== "ot-nt" || (CHAPTER_BOOK[VERSE_CHAPTER[a]] < FIRST_NT_BOOK && CHAPTER_BOOK[VERSE_CHAPTER[b]] >= FIRST_NT_BOOK)

export function BibleArcs({ curated }: { readonly curated: readonly CuratedLink[] }) {
  const { openSection } = useTopicPage()
  const wrapRef = useRef<HTMLDivElement>(null)
  const baseRef = useRef<HTMLCanvasElement>(null)
  const topRef = useRef<HTMLCanvasElement>(null)
  const [links, setLinks] = useState<DataView | null>(null)
  const [failed, setFailed] = useState(false)
  const [width, setWidth] = useState(0)
  const [view, setView] = useState<View>("curated")
  const [book, setBook] = useState<number | null>(null)
  const [hoverBook, setHoverBook] = useState<number | null>(null)
  const [group, setGroup] = useState<string | null>(null)
  const [hoverArc, setHoverArc] = useState<string | null>(null)

  const arcs = useMemo(() => parseCurated(curated), [curated])
  const groups = useMemo(() => Array.from(new Set(curated.map((c) => c.group))), [curated])
  const groupColor = (g: string) => SERIES[groups.indexOf(g) % SERIES.length]
  const count = links ? links.byteLength / RECORD : 0

  // The data is about 390 KB, so it waits until the chart is nearly on screen.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        fetch("/data/xrefs.bin")
          .then((r) => {
            if (!r.ok) throw new Error(String(r.status))
            return r.arrayBuffer()
          })
          .then((buf) => setLinks(new DataView(buf)))
          .catch(() => setFailed(true))
      },
      { rootMargin: "400px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    setWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const dark = () => document.documentElement.classList.contains("dark")

  // Base layer: every link in the view, faint, drawn in slices.
  useEffect(() => {
    const canvas = baseRef.current
    if (!canvas || !links || width === 0) return
    const { baseline, height, x } = layout(width)
    const ctx = prepare(canvas, width, height)
    const isDark = dark()
    const total = links.byteLength / RECORD
    let i = 0
    let frame = 0
    ctx.lineWidth = 0.6
    const alpha = isDark ? 0.07 : view === "ot-nt" ? 0.09 : 0.055
    const paint = () => {
      const end = Math.min(i + SLICE, total)
      for (; i < end; i++) {
        const a = links.getUint16(i * RECORD, true)
        const b = links.getUint16(i * RECORD + 2, true)
        if (!inView(a, b, view)) continue
        const c1 = VERSE_CHAPTER[a]
        const c2 = VERSE_CHAPTER[b]
        const span = Math.abs(c2 - c1) / CHAPTER_COUNT
        ctx.strokeStyle = `hsla(${hueFor(span)},75%,${isDark ? 62 : 45}%,${alpha})`
        ctx.beginPath()
        traceArc(ctx, x(c1), x(c2), baseline)
        ctx.stroke()
      }
      if (i < total) frame = requestAnimationFrame(paint)
    }
    paint()
    return () => cancelAnimationFrame(frame)
  }, [links, width, view])

  // Top layer: baseline, labels and whatever is currently emphasised.
  useEffect(() => {
    const canvas = topRef.current
    if (!canvas || width === 0) return
    const { baseline, height, x } = layout(width)
    const ctx = prepare(canvas, width, height)
    const isDark = dark()
    const ink = isDark ? "#e2e8f0" : "#0f172a"
    const muted = isDark ? "#94a3b8" : "#64748b"
    const active = hoverBook ?? book

    if (links && active !== null && view !== "curated") {
      const start = BOOK_START[active]
      const end = start + CHAPTERS[active].length
      ctx.lineWidth = 0.9
      const total = links.byteLength / RECORD
      for (let i = 0; i < total; i++) {
        const a = links.getUint16(i * RECORD, true)
        const b = links.getUint16(i * RECORD + 2, true)
        const c1 = VERSE_CHAPTER[a]
        const c2 = VERSE_CHAPTER[b]
        if (!((c1 >= start && c1 < end) || (c2 >= start && c2 < end)) || !inView(a, b, view)) continue
        ctx.strokeStyle = `hsla(${hueFor(Math.abs(c2 - c1) / CHAPTER_COUNT)},85%,${isDark ? 65 : 40}%,0.42)`
        ctx.beginPath()
        traceArc(ctx, x(c1), x(c2), baseline)
        ctx.stroke()
      }
    }

    if (view === "curated") {
      for (const arc of arcs) {
        const on = !group || arc.group === group
        const hot = hoverArc === arc.section
        for (const [s, t] of arc.pairs) {
          ctx.lineWidth = hot ? 3.5 : on ? 1.8 : 0.6
          ctx.globalAlpha = hot ? 1 : on ? 0.9 : 0.14
          // CSS variables do not resolve on a canvas, so read the computed colour.
          ctx.strokeStyle = getComputedStyle(canvas).getPropertyValue(groupColor(arc.group).slice(4, -1)) || ink
          ctx.beginPath()
          traceArc(ctx, x(s), x(t), baseline)
          ctx.stroke()
        }
      }
      ctx.globalAlpha = 1
    }

    // Chapter bars: length is the chapter's verse count, as in the original chart.
    let ch = 0
    CHAPTERS.forEach((chs, b) => {
      ctx.fillStyle = b === active ? (isDark ? "#60a5fa" : "#2563eb") : b % 2 ? muted : ink
      chs.forEach((verses) => {
        const w = Math.max(width / CHAPTER_COUNT, 0.6)
        ctx.fillRect(x(ch) - w / 2, baseline + 1, w, Math.max(1, (verses / 176) * (BAR_SPACE - 3)))
        ch++
      })
    })

    // Labels, skipping any that would collide unless it is the active book.
    ctx.font = "10px system-ui, sans-serif"
    ctx.textAlign = "right"
    let lastX = -100
    CHAPTERS.forEach((chs, b) => {
      const cx = x(BOOK_START[b] + chs.length / 2)
      if (cx - lastX < 11 && b !== active) return
      lastX = cx
      ctx.save()
      ctx.translate(cx, baseline + BAR_SPACE + 2)
      ctx.rotate(-Math.PI / 2.6)
      ctx.fillStyle = b === active ? (isDark ? "#93c5fd" : "#1d4ed8") : b < FIRST_NT_BOOK ? muted : ink
      ctx.font = b === active ? "bold 11px system-ui, sans-serif" : "10px system-ui, sans-serif"
      ctx.fillText(NAMES[b], 0, 3)
      ctx.restore()
    })
  }, [links, width, view, book, hoverBook, arcs, group, hoverArc]) // eslint-disable-line react-hooks/exhaustive-deps

  function bookAt(px: number): number | null {
    const ch = Math.floor((px / width) * CHAPTER_COUNT)
    return ch >= 0 && ch < CHAPTER_COUNT ? CHAPTER_BOOK[ch] : null
  }

  function arcAt(px: number, py: number): string | null {
    const { baseline, x } = layout(width)
    let best: string | null = null
    // A finger is less exact than a pointer.
    let bestDistance = matchMedia("(pointer: coarse)").matches ? 16 : 7
    for (const arc of arcs) {
      if (group && arc.group !== group) continue
      for (const [s, t] of arc.pairs) {
        const x1 = x(s)
        const x2 = x(t)
        const rx = Math.max(Math.abs(x2 - x1) / 2, 0.5)
        const distance = Math.abs(Math.hypot(px - (x1 + x2) / 2, py - baseline) - rx)
        if (py <= baseline && distance < bestDistance) {
          bestDistance = distance
          best = arc.section
        }
      }
    }
    return best
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    if (view === "curated") {
      setHoverArc(arcAt(px, py))
      return
    }
    setHoverBook(bookAt(px))
  }

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    if (view === "curated") {
      const hit = arcAt(px, py)
      if (hit) openSection(hit)
      return
    }
    const b = bookAt(px)
    setBook((cur) => (cur === b ? null : b))
  }

  /* The strongest links touching the selected book, for the list under the chart. */
  const bookLinks = useMemo(() => {
    if (!links || book === null || view === "curated") return []
    const start = BOOK_START[book]
    const end = start + CHAPTERS[book].length
    const out: Array<readonly [number, number, number]> = []
    const total = links.byteLength / RECORD
    for (let i = 0; i < total; i++) {
      const a = links.getUint16(i * RECORD, true)
      const b = links.getUint16(i * RECORD + 2, true)
      const c1 = VERSE_CHAPTER[a]
      const c2 = VERSE_CHAPTER[b]
      if (((c1 >= start && c1 < end) || (c2 >= start && c2 < end)) && inView(a, b, view)) out.push([a, b, links.getUint16(i * RECORD + 4, true)])
    }
    return out.sort((x, y) => y[2] - x[2])
  }, [links, book, view])

  const shownBook = hoverBook ?? book
  const unlinked = arcs.filter((a) => a.pairs.length === 0 && (!group || a.group === group))
  const linked = arcs.filter((a) => a.pairs.length > 0 && (!group || a.group === group))
  const hoveredArc = arcs.find((a) => a.section === hoverArc)

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <Toggle label="Links to show" value={view} onChange={setView} options={VIEWS} />
        {view !== "curated" && (
          <select
            aria-label="Choose a book"
            value={book ?? ""}
            onChange={(e) => setBook(e.target.value === "" ? null : Number(e.target.value))}
            className="rounded-md border px-2 py-1 text-sm bg-[color:var(--viz-surface)]"
          >
            <option value="">All books</option>
            {NAMES.map((n, i) => (
              <option key={n} value={i}>
                {n}
              </option>
            ))}
          </select>
        )}
      </div>

      {view === "curated" && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {groups.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={group === g}
              onClick={() => setGroup((cur) => (cur === g ? null : g))}
              className={cn("viz-chip inline-flex items-center gap-1.5", group === g && "viz-chip-active")}
            >
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: groupColor(g) }} />
              {g}
            </button>
          ))}
        </div>
      )}

      <div
        ref={wrapRef}
        className="relative w-full select-none"
        style={{ height: width ? layout(width).height : 360, cursor: view === "curated" ? (hoverArc ? "pointer" : "default") : "pointer" }}
        onMouseMove={onMove}
        onMouseLeave={() => {
          setHoverBook(null)
          setHoverArc(null)
        }}
        onClick={onClick}
        role="img"
        aria-label="Arc diagram of the chapters of the Bible along a line, with one arc for each link between chapters. The subject buttons and the book menu give the same information as lists."
      >
        <canvas
          ref={baseRef}
          className="absolute inset-0 w-full transition-opacity"
          style={{ opacity: view === "curated" ? 0.3 : (hoverBook ?? book) !== null ? 0.25 : 1 }}
        />
        <canvas ref={topRef} className="absolute inset-0 w-full" />
        {!links && !failed && <div className="absolute inset-x-0 top-1/3 text-center text-sm text-[color:var(--viz-muted)]">Loading links...</div>}
        {failed && <div className="absolute inset-x-0 top-1/3 text-center text-sm text-[color:var(--viz-muted)]">The links could not be loaded.</div>}
      </div>

      <div className="min-h-5 text-[13px] text-[color:var(--viz-ink-2)]" aria-live="polite">
        {view === "curated"
          ? hoveredArc
            ? `${hoveredArc.title}: ${hoveredArc.meta}`
            : group
              ? `${linked.length + unlinked.length} prophecies in this subject. Select one to open its section.`
              : "Select an arc to open that prophecy's section, or a subject above to list its prophecies."
          : shownBook !== null
            ? `${NAMES[shownBook]}: ${book === shownBook ? `${bookLinks.length.toLocaleString("en-GB")} links in this view` : "select to list its links"}`
            : `${count.toLocaleString("en-GB")} links across ${CHAPTER_COUNT.toLocaleString("en-GB")} chapters. Select a book to isolate it.`}
      </div>

      {view === "curated" && group && (
        <div className="mt-4 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {linked.map((a) => (
            <button
              key={a.section}
              type="button"
              onMouseEnter={() => setHoverArc(a.section)}
              onMouseLeave={() => setHoverArc(null)}
              onFocus={() => setHoverArc(a.section)}
              onBlur={() => setHoverArc(null)}
              onClick={() => openSection(a.section)}
              className="rounded-md border border-transparent px-2 py-1 text-left hover:border-[color:var(--viz-border)] hover:bg-[color:var(--viz-hover)]"
            >
              <span className="flex items-center gap-1.5 text-[13px] font-medium">
                <span className="inline-block h-2 w-2 flex-shrink-0 rounded-sm" style={{ background: groupColor(a.group) }} />
                {a.title}
              </span>
              <span className="block text-[11px] text-[color:var(--viz-muted)] pl-3.5">
                {a.meta}
                {a.note ? ` · ${a.note}` : ""}
              </span>
            </button>
          ))}
        </div>
      )}

      {view === "curated" && group && unlinked.length > 0 && (
        <div className="mt-4">
          <div className="text-xs font-medium text-[color:var(--viz-ink-2)] mb-1">Fulfilment claimed in later history, or debated, so no arc within the Bible</div>
          <div className="flex flex-wrap gap-1.5">
            {unlinked.map((a) => (
              <button key={a.section} type="button" className="viz-chip" title={a.meta} onClick={() => openSection(a.section)}>
                {a.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {view !== "curated" && book !== null && bookLinks.length > 0 && (
        <div className="mt-3">
          <div className="text-xs font-medium text-[color:var(--viz-ink-2)] mb-1">
            Most-voted links for {NAMES[book]} (top {Math.min(bookLinks.length, 40)} of {bookLinks.length.toLocaleString("en-GB")})
          </div>
          <ol className="max-h-72 overflow-y-auto grid gap-x-6 gap-y-1 sm:grid-cols-2 list-none p-0 m-0 text-[13px]">
            {bookLinks.slice(0, 40).map(([a, b, votes]) => (
              <li key={`${a}-${b}`} className="flex items-baseline justify-between gap-3">
                <Rich text={`${verseRef(a)} and ${verseRef(b)}`} />
                <span className="text-[11px] tabular-nums text-[color:var(--viz-muted)]" title="Votes on OpenBible.info">{votes.toLocaleString("en-GB")}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-3 flex items-center gap-2 text-[11px] text-[color:var(--viz-muted)]">
        <span>Arc colour: short span</span>
        <span
          className="h-2 w-28 rounded-full"
          style={{ background: `linear-gradient(to right, ${HUE_STOPS.map(([, h]) => `hsl(${h},75%,50%)`).join(",")})` }}
          aria-hidden
        />
        <span>long span</span>
      </div>
    </div>
  )
}
