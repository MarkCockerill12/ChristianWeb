"use client"

import { useState } from "react"

import { ColumnChart, SERIES } from "@/components/visuals/charts"
import { CompareTable, Rich, Toggle, VisualCard } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"
import M7 from "@/visuals/data/usgs-m7.json"

/* ------------------------------------------------------------------ */
/* Millennial views                                                    */
/* ------------------------------------------------------------------ */

type Seg = { label: string; grow: number; kind: "age" | "millennium" | "tribulation" | "event" }

const VIEWS: Record<string, { name: string; summary: string; segs: Seg[] }> = {
  amil: {
    name: "Amillennial",
    summary: "The thousand years of Revelation 20 are the present church age, described symbolically. Christ returns once, followed at once by the resurrection, judgment and new creation. Held by Augustine and most Catholic, Orthodox, Lutheran and Reformed theology.",
    segs: [
      { label: "First coming", grow: 0, kind: "event" },
      { label: "Church age = the millennium", grow: 6, kind: "millennium" },
      { label: "Return, resurrection, judgment", grow: 0, kind: "event" },
      { label: "New creation", grow: 2, kind: "age" },
    ],
  },
  postmil: {
    name: "Postmillennial",
    summary: "The gospel gradually transforms the world into a long golden age, after which Christ returns. Common among Puritans and many nineteenth-century evangelicals.",
    segs: [
      { label: "First coming", grow: 0, kind: "event" },
      { label: "Church age", grow: 3, kind: "age" },
      { label: "Golden age (millennium)", grow: 3, kind: "millennium" },
      { label: "Return, resurrection, judgment", grow: 0, kind: "event" },
      { label: "New creation", grow: 2, kind: "age" },
    ],
  },
  histpre: {
    name: "Historic premillennial",
    summary: "Christ returns after a time of tribulation and reigns on earth for a thousand years before the final judgment. The view of several early fathers, such as Irenaeus and Justin Martyr.",
    segs: [
      { label: "First coming", grow: 0, kind: "event" },
      { label: "Church age", grow: 3, kind: "age" },
      { label: "Tribulation", grow: 1, kind: "tribulation" },
      { label: "Return", grow: 0, kind: "event" },
      { label: "Thousand-year reign", grow: 2.5, kind: "millennium" },
      { label: "Final judgment", grow: 0, kind: "event" },
      { label: "New creation", grow: 1.5, kind: "age" },
    ],
  },
  disp: {
    name: "Dispensational premillennial",
    summary: "The church is raptured before a seven-year tribulation; Christ then returns to reign for a thousand years from Jerusalem. Developed by J.N. Darby in the nineteenth century and popularised by the Scofield Reference Bible.",
    segs: [
      { label: "First coming", grow: 0, kind: "event" },
      { label: "Church age", grow: 3, kind: "age" },
      { label: "Rapture", grow: 0, kind: "event" },
      { label: "Seven-year tribulation", grow: 1, kind: "tribulation" },
      { label: "Return", grow: 0, kind: "event" },
      { label: "Thousand-year reign", grow: 2.5, kind: "millennium" },
      { label: "Final judgment", grow: 0, kind: "event" },
      { label: "New creation", grow: 1.5, kind: "age" },
    ],
  },
}

const SEG_COLOR = { age: "var(--viz-grid)", millennium: SERIES[0], tribulation: SERIES[7] } as const

function Millennium() {
  const [view, setView] = useState<keyof typeof VIEWS>("amil")
  const v = VIEWS[view]
  return (
    <VisualCard
      title="Four views of the millennium"
      subtitle="Each view drawn on the same line from Christ's first coming to the new creation. Switch between them to see what moves."
      sources={[
        { label: "Wikipedia, \"Millennialism\"", url: "https://en.wikipedia.org/wiki/Millennialism" },
        { label: "Wikipedia, \"Amillennialism\"", url: "https://en.wikipedia.org/wiki/Amillennialism" },
        { label: "Wikipedia, \"Dispensationalism\"", url: "https://en.wikipedia.org/wiki/Dispensationalism" },
      ]}
    >
      <Toggle
        label="Millennial view"
        value={view}
        onChange={(x) => setView(x as keyof typeof VIEWS)}
        options={Object.entries(VIEWS).map(([value, x]) => ({ value, label: x.name }))}
      />
      <div className="mt-5 hidden sm:flex items-stretch gap-0 min-h-24" role="img" aria-label={`${v.name}: ${v.segs.map((s) => s.label).join(", then ")}`}>
        {v.segs.map((s, i) =>
          s.kind === "event" ? (
            <div key={s.label} className="relative flex flex-col items-center w-0">
              <div className="h-8 w-[3px] rounded bg-[color:var(--viz-ink)] mt-2" />
              {/* The first marker sits on the left edge, so its label hangs right rather than centring off-card. */}
              <div className={cn("absolute top-12 w-24 text-[11px] leading-tight font-semibold", i === 0 ? "left-0 text-left" : "left-0 -translate-x-1/2 text-center")}>{s.label}</div>
            </div>
          ) : (
            <div key={s.label} className="flex flex-col" style={{ flexGrow: s.grow, flexBasis: 0 }}>
              <div
                className="h-5 mt-3.5 mx-[2px] rounded-[4px] transition-all duration-300"
                style={{ background: SEG_COLOR[s.kind] }}
              />
              <div className="mt-1 px-1 text-[12px] leading-tight text-center text-[color:var(--viz-ink-2)]">{s.label}</div>
            </div>
          ),
        )}
      </div>
      {/* Phones: the same sequence top to bottom, since the line is too short to label. */}
      <ol className="sm:hidden mt-4 space-y-1.5 list-none p-0 m-0">
        {v.segs.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-[13px]">
            {s.kind === "event" ? (
              <span className="h-[3px] w-5 rounded bg-[color:var(--viz-ink)] flex-shrink-0" aria-hidden />
            ) : (
              <span className="h-4 w-5 rounded-[3px] flex-shrink-0" style={{ background: SEG_COLOR[s.kind] }} aria-hidden />
            )}
            <span className={s.kind === "event" ? "font-semibold" : "text-[color:var(--viz-ink-2)]"}>{s.label}</span>
          </li>
        ))}
      </ol>
      <Rich as="p" text={v.summary} className="mt-4 sm:mt-10 text-sm leading-relaxed" />
    </VisualCard>
  )
}

function Frameworks() {
  return (
    <VisualCard
      title="Four ways of reading Revelation"
      subtitle="The interpretive frameworks set out below, with what each takes chapters 4 to 20 to describe."
      sources={[
        { label: "Wikipedia, \"Preterism\"", url: "https://en.wikipedia.org/wiki/Preterism" },
        { label: "Wikipedia, \"Historicism (Christianity)\"", url: "https://en.wikipedia.org/wiki/Historicism_(Christianity)" },
        { label: "Wikipedia, \"Futurism (Christianity)\"", url: "https://en.wikipedia.org/wiki/Futurism_(Christianity)" },
        { label: "Wikipedia, \"Idealism (Christian eschatology)\"", url: "https://en.wikipedia.org/wiki/Idealism_(Christian_eschatology)" },
      ]}
    >
      <CompareTable
        minWidth="46rem"
        columns={[
          { key: "v", label: "Framework" },
          { key: "when", label: "Revelation 4-20 describes" },
          { key: "key", label: "Key support" },
          { key: "who", label: "Associated with" },
        ]}
        rows={[
          { v: "Preterism", when: "Mostly the first century, above all the fall of Jerusalem in AD 70", key: "The book's own time markers: \"soon\", \"the time is near\" (Revelation 1:1-3)", who: "R.C. Sproul, Kenneth Gentry (partial preterism)" },
          { v: "Historicism", when: "The course of church history from the apostles to the end", key: "A day for a year in prophetic numbers", who: "The Reformers, Isaac Newton, Charles Spurgeon" },
          { v: "Futurism", when: "Events still to come, before Christ's return", key: "The scale of the judgments has no past fulfilment", who: "J.N. Darby, C.I. Scofield, Tim LaHaye" },
          { v: "Idealism", when: "The conflict of good and evil in every age", key: "The book's symbolic genre", who: "William Milligan, William Hendriksen" },
        ]}
      />
    </VisualCard>
  )
}

const PREDICTIONS: ReadonlyArray<readonly [year: string, who: string, what: string]> = [
  ["1260", "Joachim of Fiore", "The start of a new age of the Spirit; his followers moved it to 1290, then 1335"],
  ["1844", "William Miller", "Christ's return, revised to 22 October: the Great Disappointment"],
  ["1914", "Charles Taze Russell", "The close of the battle of the great day \"definitely marked\" for October 1914"],
  ["1975", "Jehovah's Witnesses", "Publications suggested Armageddon could come with 6,000 years of human history"],
  ["1988", "Edgar Whisenant", "The rapture, in *88 Reasons*; revised to 1989, 1993 and 1994"],
  ["1994", "Harold Camping", "The rapture in September 1994, revised twice"],
  ["2011", "Harold Camping", "The rapture on 21 May and the end on 21 October"],
  ["2014-15", "John Hagee and Mark Biltz", "Four \"blood moons\" signalling the beginning of the end times"],
  ["2017", "David Meade", "The planet Nibiru appearing on 23 September and soon destroying the earth"],
]

function DateSetting() {
  return (
    <VisualCard
      title={"0 for " + PREDICTIONS.length}
      subtitle="A selection of dated predictions of Christ's return, the rapture or the end, made by Christians and Christian movements. None came to pass."
      note={"\"But about that day or hour no one knows\" (Matthew 24:36)."}
      sources={[{ label: "Wikipedia, \"List of dates predicted for apocalyptic events\"", url: "https://en.wikipedia.org/wiki/List_of_dates_predicted_for_apocalyptic_events" }]}
    >
      <ol className="relative border-l-2 border-[color:var(--viz-axis)] ml-12 space-y-3 list-none p-0">
        {PREDICTIONS.map(([year, who, what]) => (
          <li key={year + who} className="relative pl-4">
            <span className="absolute -left-[3.6rem] top-0 w-12 text-right text-sm font-semibold tabular-nums">{year}</span>
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[color:var(--viz-surface)]" style={{ background: SERIES[7] }} aria-hidden />
            <div className="text-sm font-semibold">{who}</div>
            <Rich as="div" text={what} className="text-[13px] text-[color:var(--viz-ink-2)] leading-snug" />
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

function Earthquakes() {
  const data = Object.entries(M7 as Record<string, number>).map(([y, n]) => ({ label: y, value: n, display: `${n} earthquakes` }))
  const recent = data.slice(-30)
  const avg = (recent.reduce((a, d) => a + d.value, 0) / recent.length).toFixed(1)
  return (
    <VisualCard
      title="Are earthquakes increasing?"
      subtitle={`Earthquakes of magnitude 7 or more worldwide, every year since 1950. Counts swing from year to year with no rising trend in recent decades; the average over the last 30 years is ${avg} a year.`}
      note="Counted from the USGS earthquake catalogue. Earlier decades run slightly lower partly because the global seismograph network was less complete. More small earthquakes are reported today because there are far more instruments, not because there are more earthquakes."
      sources={[
        { label: "USGS Earthquake Catalog (ComCat), counts by year, magnitude 7 and above", url: "https://earthquake.usgs.gov/earthquakes/search/" },
        { label: "USGS, \"Why are we having so many earthquakes? Has naturally occurring earthquake activity been increasing?\"", url: "https://www.usgs.gov/faqs/why-are-we-having-so-many-earthquakes-has-naturally-occurring-earthquake-activity-been" },
        { label: "NSF SAGE (IRIS), \"Is the number of earthquakes increasing?\"", url: "https://www.iris.edu/ds/support/faq/7/is-the-number-of-earthquakes-increasing/" },
      ]}
    >
      <ColumnChart data={data} height={220} yLabel="Magnitude 7+ earthquakes per year, 1950 to 2025" />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  millennium: Millennium,
  frameworks: Frameworks,
  "date-setting": DateSetting,
  earthquakes: Earthquakes,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
