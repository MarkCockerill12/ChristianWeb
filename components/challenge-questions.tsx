"use client"

import { ArrowRight, MessageCircleQuestion } from "lucide-react"

import { Rich } from "@/components/visuals/kit"
import { useTopicPage } from "@/components/topic-context"
import type { ChallengeQuestion } from "@/topics/types"

const COLUMBO = ["What do you mean by that?", "How did you come to that conclusion?", "Have you considered this alternative?"] as const

/**
 * Questions rather than rebuttals. A challenge usually carries assumptions the person
 * making it has not examined, and a good question brings them out without a lecture.
 * The three general questions are Greg Koukl's "Columbo" tactic; the rest are specific
 * to the topic, each linked to the section holding the full answer.
 */
export function ChallengeQuestions({ questions }: { readonly questions: readonly ChallengeQuestion[] }) {
  const { openSection } = useTopicPage()
  return (
    <section className="viz-card not-prose my-8 rounded-xl border p-4 sm:p-5" aria-labelledby="challenge-questions">
      <h3 id="challenge-questions" className="viz-title flex items-center gap-2 text-lg sm:text-xl leading-snug text-[color:var(--viz-ink)]">
        <MessageCircleQuestion className="h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden />
        Questions to ask
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[color:var(--viz-ink-2)]">
        The burden of proof sits with whoever makes the claim. Three questions fit any claim:{" "}
        {COLUMBO.map((q) => (
          <strong key={q} className="font-semibold text-[color:var(--viz-ink)]">
            {q}{" "}
          </strong>
        ))}
        <a
          href="https://www.str.org/w/take-a-tip-from-lt.-columbo-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          (Greg Koukl, Stand to Reason)
        </a>
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {questions.map((q) => (
          <div key={q.claim} className="viz-info flex flex-col rounded-lg border p-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--viz-muted)]">The claim</div>
            <Rich as="div" text={q.claim} className="mt-0.5 text-sm font-semibold leading-snug" />
            <ul className="mt-2 list-none space-y-1.5 p-0">
              {q.asks.map((ask) => (
                <li key={ask} className="flex items-start gap-1.5 text-[13px] leading-snug text-[color:var(--viz-ink)]">
                  <span className="font-bold text-blue-600" aria-hidden>?</span>
                  <Rich text={ask} />
                </li>
              ))}
            </ul>
            <Rich as="p" text={q.point} className="mt-2 grow text-xs italic leading-relaxed text-[color:var(--viz-ink-2)]" />
            {q.section && (
              <button
                type="button"
                onClick={() => openSection(q.section as string)}
                className="mt-2 inline-flex items-center gap-1 self-start text-xs font-medium text-blue-600 hover:underline"
              >
                Read the full answer <ArrowRight className="h-3 w-3" aria-hidden />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
