"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, ListTree, X } from "lucide-react"
import { sectionDomId } from "@/components/topic-context"
import type { Topic } from "@/topics/types"

type Subtopic = NonNullable<Topic["subtopics"]>[number]

/** Index of the section whose heading was last passed, or -1 above the first. */
function currentIndex(subtopics: readonly Subtopic[]) {
  let current = -1
  subtopics.forEach((sub, i) => {
    const el = document.getElementById(sectionDomId(sub.id))
    if (el && el.getBoundingClientRect().top <= 140) current = i
  })
  return current
}

/**
 * Phones only: a small bar at the foot of the screen with the section list and a way
 * back to the top. It shows once the reader is into the page and hides while they
 * scroll down, so it never sits over the text they are reading.
 */
export function PhoneSectionBar({
  subtopics,
  onOpen,
}: {
  readonly subtopics: readonly Subtopic[]
  readonly onOpen: (id: string) => void
}) {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(-1)
  const openerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        const nearEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 80
        if (y < 500) setVisible(false)
        else if (y < lastY - 4 || nearEnd) setVisible(true)
        else if (y > lastY + 4) setVisible(false)
        lastY = y
        setCurrent(currentIndex(subtopics))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [subtopics])

  useEffect(() => {
    if (!open) return
    const opener = openerRef.current
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener("keydown", onKey)
      opener?.focus()
    }
  }, [open])

  return (
    <>
      <nav
        aria-label="Sections"
        className={`fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center rounded-full border bg-card text-card-foreground shadow-lg transition-all duration-200 sm:hidden ${
          visible && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
        }`}
      >
        <button
          ref={openerRef}
          type="button"
          onClick={() => {
            setCurrent(currentIndex(subtopics))
            setOpen(true)
          }}
          className="flex items-center gap-2 whitespace-nowrap rounded-l-full py-2.5 pl-4 pr-3 text-sm font-medium"
          aria-haspopup="dialog"
        >
          <ListTree className="h-4 w-4 text-purple-600" aria-hidden />
          Sections
          {current >= 0 && (
            <span className="whitespace-nowrap text-xs font-normal text-gray-500">
              {current + 1} of {subtopics.length}
            </span>
          )}
        </button>
        <span className="h-5 w-px bg-gray-200" aria-hidden />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-r-full py-2.5 pl-3 pr-4"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-labelledby="phone-sections-title">
          <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close sections" tabIndex={-1} onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 flex max-h-[75dvh] flex-col rounded-t-2xl border-t bg-card text-card-foreground shadow-2xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 id="phone-sections-title" className="m-0 text-base font-semibold">
                Sections <span className="text-sm font-normal text-gray-500">({subtopics.length})</span>
              </h2>
              <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="rounded p-1" aria-label="Close sections">
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ol className="m-0 list-none overflow-y-auto overscroll-contain p-2">
              {subtopics.map((sub, i) => (
                <li key={sub.id} className="m-0">
                  <a
                    href={`#${sectionDomId(sub.id)}`}
                    aria-current={i === current ? "location" : undefined}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      onOpen(sub.id)
                    }}
                    className={`flex gap-3 rounded-lg px-3 py-2.5 text-sm leading-snug no-underline ${
                      i === current ? "bg-blue-50 font-semibold text-blue-800" : "text-gray-800"
                    }`}
                  >
                    <span className="w-6 shrink-0 text-right tabular-nums text-gray-400">{i + 1}</span>
                    <span>{sub.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  )
}
