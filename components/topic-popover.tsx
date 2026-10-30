"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { GLOSSARY } from "@/lib/glossary"

type Popover =
  | { kind: "verse"; ref: string; href: string; text: string | null; failed?: boolean; x: number; y: number }
  | { kind: "gloss"; term: string; text: string; x: number; y: number }

/**
 * Verse text comes from bible-api.com in the World English Bible, which is in
 * the public domain, so it can be quoted in full without a licence. The link
 * itself still opens Bible Gateway for reading in context.
 */
const verseCache = new Map<string, Promise<string>>()

function fetchVerse(ref: string): Promise<string> {
  const hit = verseCache.get(ref)
  if (hit) return hit
  const p = fetch(`https://bible-api.com/${encodeURIComponent(ref)}?translation=web`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((d: { text?: string }) => (d.text ?? "").replace(/\s+/g, " ").trim())
  p.catch(() => verseCache.delete(ref))
  verseCache.set(ref, p)
  return p
}

function place(el: Element) {
  const r = el.getBoundingClientRect()
  const below = r.bottom + 8
  const width = Math.min(352, window.innerWidth - 32)
  const x = Math.min(Math.max(16, r.left), window.innerWidth - width - 16)
  // Flip above the anchor when there is not room underneath.
  const y = below + 180 > window.innerHeight ? Math.max(8, r.top - 8 - 180) : below
  return { x, y }
}

/**
 * One floating panel for the whole topic page: scripture previews on hover of
 * any auto-linked reference, and glossary definitions on hover, focus or tap.
 * Delegated from the document so prose rendered as HTML strings needs no
 * per-element wiring.
 */
export function TopicPopover() {
  const [pop, setPop] = useState<Popover | null>(null)
  const hideTimer = useRef<number | null>(null)
  const showTimer = useRef<number | null>(null)
  const current = useRef<Element | null>(null)

  const cancelHide = () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
    hideTimer.current = null
  }
  const scheduleHide = useCallback(() => {
    cancelHide()
    hideTimer.current = window.setTimeout(() => {
      setPop(null)
      current.current = null
    }, 220)
  }, [])

  const open = useCallback((el: Element) => {
    if (current.current === el) return
    current.current = el
    const { x, y } = place(el)
    const term = el.getAttribute("data-gloss")
    if (term) {
      setPop({ kind: "gloss", term, text: GLOSSARY[term] ?? "", x, y })
      return
    }
    const ref = el.getAttribute("data-ref")
    if (!ref) return
    const href = (el as HTMLAnchorElement).href
    setPop({ kind: "verse", ref, href, text: null, x, y })
    fetchVerse(ref)
      .then((text) => {
        if (current.current === el) setPop((p) => (p && p.kind === "verse" && p.ref === ref ? { ...p, text } : p))
      })
      .catch(() => {
        if (current.current === el) setPop((p) => (p && p.kind === "verse" && p.ref === ref ? { ...p, failed: true } : p))
      })
  }, [])

  useEffect(() => {
    const target = (e: Event) => (e.target as Element | null)?.closest?.("a[data-ref], .gloss") ?? null
    // Touch screens get no hover; glossary terms open on tap instead and
    // scripture links simply follow the link.
    const fine = window.matchMedia("(hover: hover)").matches

    const over = (e: MouseEvent) => {
      if (!fine) return
      const el = target(e)
      if (el) {
        cancelHide()
        if (showTimer.current) window.clearTimeout(showTimer.current)
        showTimer.current = window.setTimeout(() => open(el), el.classList.contains("gloss") ? 120 : 350)
      }
    }
    const out = (e: MouseEvent) => {
      if (!fine) return
      if (target(e)) {
        if (showTimer.current) window.clearTimeout(showTimer.current)
        scheduleHide()
      }
    }
    const focus = (e: FocusEvent) => {
      const el = target(e)
      if (el) open(el)
    }
    const blur = (e: FocusEvent) => {
      if (target(e)) scheduleHide()
    }
    const click = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(".gloss")
      if (el) {
        e.stopPropagation()
        current.current = null
        open(el)
      } else if (!(e.target as Element | null)?.closest?.(".topic-popover")) {
        setPop(null)
        current.current = null
      }
    }
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPop(null)
        current.current = null
      }
    }
    const scroll = () => {
      setPop(null)
      current.current = null
    }

    document.addEventListener("mouseover", over)
    document.addEventListener("mouseout", out)
    document.addEventListener("focusin", focus)
    document.addEventListener("focusout", blur)
    document.addEventListener("click", click, true)
    document.addEventListener("keydown", key)
    window.addEventListener("scroll", scroll, { passive: true })
    return () => {
      document.removeEventListener("mouseover", over)
      document.removeEventListener("mouseout", out)
      document.removeEventListener("focusin", focus)
      document.removeEventListener("focusout", blur)
      document.removeEventListener("click", click, true)
      document.removeEventListener("keydown", key)
      window.removeEventListener("scroll", scroll)
    }
  }, [open, scheduleHide])

  if (!pop) return null

  return (
    <div
      className="topic-popover"
      style={{ left: pop.x, top: pop.y }}
      role="tooltip"
      onMouseEnter={cancelHide}
      onMouseLeave={scheduleHide}
    >
      {pop.kind === "gloss" ? (
        <>
          <div className="font-semibold mb-1">{pop.term}</div>
          <div className="text-[color:var(--viz-ink-2)]">{pop.text}</div>
        </>
      ) : (
        <>
          <div className="font-semibold mb-1">{pop.ref}</div>
          <div className="text-[color:var(--viz-ink-2)] max-h-40 overflow-y-auto">
            {pop.failed ? "Preview unavailable." : (pop.text ?? "Loading...")}
          </div>
          <div className="mt-2 flex justify-between gap-2 text-[11px] text-[color:var(--viz-muted)]">
            <span>World English Bible</span>
            <a href={pop.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Read in context (NIV)
            </a>
          </div>
        </>
      )}
    </div>
  )
}
