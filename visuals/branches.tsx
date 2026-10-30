"use client"

import { Figure } from "@/components/visuals/figure"
import { useMemo, useState } from "react"

import { branchBeliefMap, branchBeliefs, branches, branchTimeline } from "@/topics/branches"
import { StackedBar } from "@/components/visuals/charts"
import { CompareTable, Toggle, VisualCard } from "@/components/visuals/kit"
import { useTopicPage } from "@/components/topic-context"
import { cn } from "@/lib/utils"
import { WorldMap } from "@/components/visuals/geo"
import { WORLD } from "@/components/visuals/maps/world"
import TRADITION from "@/visuals/data/christian-tradition-by-country.json"

/** Every branch that has belief data, in the page's own order, with its title and date. */
function useBranches() {
  return useMemo(
    () =>
      (branches.subtopics ?? [])
        .filter((s) => branchBeliefMap[s.id])
        .map((s) => ({
          id: s.id,
          title: s.title,
          date: branchTimeline.find((t) => t.id === s.id)?.date ?? "",
          beliefs: branchBeliefMap[s.id],
        })),
    [],
  )
}

function Matrix() {
  const rows = useBranches()
  return (
    <VisualCard
      title="The branches compared"
      subtitle="The five markers shown on each branch below, in one table. Sort by any column, or filter to find the traditions that share a position."
      note="Yes or no on each marker is a simplification of the fuller descriptions in each section."
    >
      <CompareTable
        minWidth="56rem"
        compact
        searchable
        columns={[
          { key: "title", label: "Branch" },
          { key: "date", label: "Origin", numeric: true },
          ...branchBeliefs.map((b) => ({ key: b.key, label: b.label })),
        ]}
        rows={rows.map((r) => ({
          title: r.title,
          date: r.date,
          ...Object.fromEntries(branchBeliefs.map((b) => [b.key, r.beliefs[b.key] ? "@yes" : "@no"])),
        }))}
      />
    </VisualCard>
  )
}

type Answer = "yes" | "no" | "skip"

const QUESTIONS: Record<string, string> = {
  churchAuthority: "Should a visible church hierarchy, such as bishops and councils, have authority to settle doctrine?",
  tradition: "Should apostolic tradition and liturgy carry great weight alongside Scripture?",
  sacraments: "Do sacraments such as baptism and the Eucharist actually convey grace?",
  pope: "Is the Bishop of Rome the visible head of the whole church?",
  priesthood: "Do all believers share one priesthood, with no separate sacrificial priesthood?",
}

function Quiz() {
  const rows = useBranches()
  const { openSection } = useTopicPage()
  const [answers, setAnswers] = useState<Record<string, Answer>>(() => Object.fromEntries(branchBeliefs.map((b) => [b.key, "skip"])))
  const answered = Object.values(answers).filter((a) => a !== "skip").length
  const ranked = useMemo(
    () =>
      rows
        .map((r) => ({
          ...r,
          score: branchBeliefs.filter((b) => answers[b.key] !== "skip" && r.beliefs[b.key] === (answers[b.key] === "yes")).length,
        }))
        .sort((a, b) => b.score - a.score),
    [rows, answers],
  )
  return (
    <VisualCard
      title="Which tradition is closest to your convictions?"
      subtitle="Answer any of the five questions. Branches are ranked by how many of your answers match their marker on that question."
      note="A rough guide built from the five markers only. Every tradition is far more than its answers to these questions; read the sections for the fuller picture."
    >
      <div className="space-y-2">
        {branchBeliefs.map((b) => (
          <div key={b.key} className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] items-center viz-info rounded-lg border p-2.5">
            <span className="text-sm">{QUESTIONS[b.key]}</span>
            <Toggle
              label={b.label}
              value={answers[b.key]}
              onChange={(v) => setAnswers((a) => ({ ...a, [b.key]: v }))}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "skip", label: "Not sure" },
              ]}
            />
          </div>
        ))}
      </div>
      {answered > 0 && (
        <div className="mt-4" aria-live="polite">
          <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-2">Closest matches ({answered} of 5 answered)</div>
          <ol className="space-y-1.5 list-none p-0 m-0">
            {ranked.slice(0, 6).map((r) => (
              <li key={r.id} className="flex items-center gap-3">
                <div className="h-2 rounded-full bg-[color:var(--viz-hover)] w-28 flex-shrink-0 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(r.score / answered) * 100}%`, background: "var(--viz-1)" }} />
                </div>
                <span className="text-[12px] tabular-nums w-10 flex-shrink-0">
                  {r.score}/{answered}
                </span>
                <button type="button" className={cn("text-sm text-left hover:underline", r.score === answered && "font-semibold")} onClick={() => openSection(r.id)}>
                  {r.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </VisualCard>
  )
}

function Adherents() {
  return (
    <VisualCard
      title="The world's Christians by tradition"
      subtitle={"About 2.18 billion Christians in 2010, by Pew Research Center's estimate. \"Protestant\" here is broad, including Anglicans, independent and Pentecostal churches."}
      sources={[
        { label: "Pew Research Center, \"Global Christianity\" (2011)", url: "https://www.pewresearch.org/religion/2011/12/19/new-pew-forum-study-estimates-global-christian-population-at-2-18-billion/" },
        { label: "Christian Century, report on the Pew study", url: "https://christiancentury.org/article/2011-12/report-shows-christianity-shifting-africa" },
      ]}
    >
      <StackedBar
        unit="%"
        segments={[
          { label: "Catholic", value: 50.1, note: "About 1.1 billion." },
          { label: "Protestant", value: 36.7, note: "Including Anglican, independent and Pentecostal churches." },
          { label: "Orthodox", value: 11.9, note: "Eastern and Oriental Orthodox." },
          { label: "Other Christian", value: 1.3, note: "Groups such as Latter-day Saints and Jehovah's Witnesses." },
        ]}
      />
    </VisualCard>
  )
}

type TraditionRow = { readonly t: string; readonly s: number; readonly c: number | null }

const TRADITIONS = [
  { key: "Catholic", label: "Catholic" },
  { key: "Protestant", label: "Protestant" },
  { key: "Orthodox", label: "Orthodox" },
  { key: "Minority", label: "Christians under 10%", color: "var(--viz-land-empty)" },
] as const

function TraditionMap() {
  const rows = TRADITION as Record<string, TraditionRow>
  const values = Object.fromEntries(Object.entries(rows).map(([k, v]) => [k, v.c !== null && v.c < 10 ? "Minority" : v.t]))
  const details = Object.fromEntries(
    Object.entries(rows).map(([k, v]) => [k, `Christians ${v.c ?? "?"}% of the population; ${v.t === "Other" ? "other Christians" : `${v.t}s`} ${v.s}% of Christians`]),
  )
  return (
    <VisualCard
      title="The largest Christian tradition in each country, 2010"
      subtitle="Coloured by whichever tradition has the most members among a country's Christians. Countries where Christians are under a tenth of the population are left pale. Hover a country for its figures."
      note="Pew counts Anglicans and independent churches as Protestant, and Latter-day Saints and Jehovah's Witnesses as other Christians, who are not the largest group anywhere. Orthodox includes the Oriental Orthodox churches, such as Ethiopia's. In Germany Protestants (49% of Christians) only narrowly outnumber Catholics (48%)."
      sources={[
        { label: "Pew Research Center, \"Global Christianity\" (2011), tables of Christian population and traditions by country", url: "https://www.pewresearch.org/wp-content/uploads/sites/20/2011/12/Christianity-fullreport-web.pdf" },
        { label: "Natural Earth (map outlines, public domain)", url: "https://www.naturalearthdata.com/" },
      ]}
    >
      <WorldMap geo={WORLD} values={values} details={details} categories={TRADITIONS} />
    </VisualCard>
  )
}

function HagiaSophia() {
  return (
    <VisualCard title="Hagia Sophia" subtitle="The great church of Constantinople, completed in 537 and for nine centuries the centre of Eastern Christianity." sources={[{ label: "Wikipedia, \"Hagia Sophia\"", url: "https://en.wikipedia.org/wiki/Hagia_Sophia" }]}>
      <div className="max-w-2xl">
        <Figure
          image={{
            src: "/images/branches/hagia-sophia.jpg",
            width: 900,
            height: 601,
            alt: "The domed interior of Hagia Sophia in Istanbul",
            caption: "The interior of Hagia Sophia, Istanbul.",
            credit: "Arild Vågen",
            license: "CC BY-SA 3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "hagia-sophia": HagiaSophia,
  "tradition-map": TraditionMap,
  matrix: Matrix,
  quiz: Quiz,
  adherents: Adherents,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
