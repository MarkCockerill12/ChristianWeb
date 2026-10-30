"use client"

import { useEffect, useState } from "react"

import { CardGrid, CompareTable, Rich, StepStrip, VisualCard } from "@/components/visuals/kit"
import { cn } from "@/lib/utils"

const LINES: ReadonlyArray<{ line: string; part: string; note: string }> = [
  { line: "Our Father in heaven,", part: "Address", note: "Intimate (\"Father\") and transcendent (\"in heaven\") at once. Jesus addressed God as Father, and gives his disciples the same right (John 20:17)." },
  { line: "hallowed be your name,", part: "Adoration", note: "A request that God's name be treated as holy, echoing Ezekiel 36:23, where God promises to show the holiness of his great name." },
  { line: "your kingdom come, your will be done, on earth as it is in heaven.", part: "Submission", note: "The same surrender Jesus prayed in Gethsemane: \"not my will, but yours be done\" (Luke 22:42)." },
  { line: "Give us today our daily bread.", part: "Petition", note: "The rare Greek word *epiousios*, usually rendered \"daily\", may also mean \"for tomorrow\" or \"needed for existence\"; its exact sense has been debated since Origen." },
  { line: "And forgive us our debts, as we also have forgiven our debtors.", part: "Confession", note: "The only line Jesus comments on afterwards: forgiving others and being forgiven go together (Matthew 6:14-15). Luke has \"sins\" (Luke 11:4)." },
  { line: "And lead us not into temptation, but deliver us from the evil one.", part: "Protection", note: "The Greek *tou ponērou* can mean \"evil\" or \"the evil one\"; modern translations divide between the two." },
  { line: "For yours is the kingdom and the power and the glory for ever. Amen.", part: "Doxology", note: "Not in the earliest manuscripts of Matthew, and absent from Luke. A shorter form appears in the *Didache* (8.2) around AD 100, and it entered later manuscripts and the KJV. Protestant churches usually say it; the Catholic Mass places a form of it after the prayer." },
]

function LordsPrayer() {
  const [active, setActive] = useState(0)
  return (
    <VisualCard
      title="The Lord's Prayer, line by line"
      subtitle="Matthew 6:9-13. Select a line for what it asks and how it has been read."
      sources={[
        { label: "Wikipedia, \"Lord's Prayer\" (text, doxology, Didache 8)", url: "https://en.wikipedia.org/wiki/Lord%27s_Prayer" },
        { label: "Wikipedia, \"Epiousion\"", url: "https://en.wikipedia.org/wiki/Epiousios" },
      ]}
    >
      <div className="grid gap-4 md:grid-cols-2 items-start">
        <ol className="space-y-1.5 list-none p-0 m-0">
          {LINES.map((l, i) => (
            <li key={l.part}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn("w-full text-left rounded-md px-3 py-2 border transition-colors", i === active ? "viz-chip-active" : "viz-info hover:bg-[color:var(--viz-hover)]")}
              >
                <span className="block text-[12px] font-semibold opacity-70">{l.part}</span>
                <span className={cn("block text-sm", l.part === "Doxology" && "italic")}>{l.line}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="viz-info rounded-lg border p-4 md:sticky md:top-24" aria-live="polite">
          <div className="text-[12px] font-semibold text-[color:var(--viz-muted)]">{LINES[active].part}</div>
          <div className="font-semibold mt-1">{LINES[active].line}</div>
          <Rich as="p" text={LINES[active].note} className="text-sm leading-relaxed mt-2 text-[color:var(--viz-ink-2)]" />
        </div>
      </div>
    </VisualCard>
  )
}

const ACTS = [
  { letter: "A", title: "Adoration", prompt: "Praise God for who he is, before asking for anything.", verse: "Psalm 145:3" },
  { letter: "C", title: "Confession", prompt: "Name specific sins and receive forgiveness.", verse: "1 John 1:9" },
  { letter: "T", title: "Thanksgiving", prompt: "Thank God for what he has done.", verse: "1 Thessalonians 5:18" },
  { letter: "S", title: "Supplication", prompt: "Bring requests for yourself and for others.", verse: "Philippians 4:6" },
] as const

function ActsGuide() {
  const [step, setStep] = useState<number | null>(null)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    if (step === null || left <= 0) return
    const t = window.setTimeout(() => setLeft((s) => s - 1), 1000)
    return () => window.clearTimeout(t)
  }, [step, left])

  const start = (i: number) => {
    setStep(i)
    setLeft(60)
  }

  return (
    <VisualCard
      title="ACTS: a pattern for a time of prayer"
      subtitle="Adoration, Confession, Thanksgiving, Supplication. A modern teaching aid, loosely based on the Lord's Prayer with thanksgiving added from Philippians 4:6, not a biblical formula. Its first known appearance is usually traced to 1883."
      sources={[
        { label: "The Navigators, \"ACTS Prayer Model\"", url: "https://www.navigators.org/?p=265967" },
        { label: "Crosswalk, \"ACTS Prayer Method\"", url: "https://www.crosswalk.com/11845475" },
      ]}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {ACTS.map((a, i) => (
          <div key={a.letter} className={cn("viz-info rounded-lg border p-3 flex flex-col", step === i && "ring-2 ring-[color:var(--viz-1)]")}>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold" style={{ color: "var(--viz-1)" }} aria-hidden>
                {a.letter}
              </span>
              <span className="font-semibold">{a.title}</span>
            </div>
            <p className="text-[13px] mt-1 leading-snug text-[color:var(--viz-ink-2)] grow">{a.prompt}</p>
            <Rich as="div" text={a.verse} className="text-[12px] mt-1" />
            <button type="button" onClick={() => start(i)} className="viz-chip mt-2 self-start">
              {step === i && left > 0 ? `${left}s` : "Pause one minute"}
            </button>
          </div>
        ))}
      </div>
      {step !== null && (
        <div className="mt-3 flex items-center gap-3 text-sm" aria-live="polite">
          <span>
            {left > 0 ? `${ACTS[step].title}: ${left} seconds` : `${ACTS[step].title} complete.`}
          </span>
          {left === 0 && step < 3 && (
            <button type="button" className="viz-chip viz-chip-active" onClick={() => start(step + 1)}>
              Next: {ACTS[step + 1].title}
            </button>
          )}
          <button type="button" className="viz-chip" onClick={() => setStep(null)}>
            Stop
          </button>
        </div>
      )}
    </VisualCard>
  )
}

function TrinityPattern() {
  return (
    <VisualCard
      title="To the Father, through the Son, in the Spirit"
      subtitle={"\"Through him we both have access to the Father by one Spirit\" (Ephesians 2:18). The normal New Testament pattern, with the exceptions it also records."}
    >
      <StepStrip
        steps={[
          { label: "Addressed to", title: "The Father", body: "\"Our Father in heaven\" (Matthew 6:9)." },
          { label: "Through", title: "The Son", body: "\"Whatever you ask in my name\" (John 16:23); Christ intercedes for us (Romans 8:34)." },
          { label: "In", title: "The Holy Spirit", body: "The Spirit helps us in our weakness and intercedes (Romans 8:26)." },
        ]}
      />
      <CardGrid
        columns={3}
        cards={[
          { kicker: "Also in the New Testament", title: "Prayer to Jesus", body: "Stephen: \"Lord Jesus, receive my spirit\" (Acts 7:59); Paul asks the Lord three times about his thorn (2 Corinthians 12:8)." },
          { kicker: "Not recorded", title: "Prayer to the Spirit", body: "No New Testament example; the practice rests on the Spirit's full deity, as in *Veni Creator Spiritus* and the Orthodox *O Heavenly King*." },
          { kicker: "All three", title: "One God hears", body: "Prayer to any one person is not prayer that excludes the others." },
        ]}
      />
    </VisualCard>
  )
}

function BiblePrayers() {
  return (
    <VisualCard title="Great prayers of the Bible" subtitle="A sample of recorded prayers, by kind. Filter by kind or sort by any column.">
      <CompareTable
        filterKeys={["kind"]}
        minWidth="40rem"
        columns={[
          { key: "who", label: "Who" },
          { key: "where", label: "Passage" },
          { key: "kind", label: "Kind" },
          { key: "setting", label: "Setting" },
        ]}
        rows={[
          { who: "Hannah", where: "1 Samuel 2:1-10", kind: "Praise", setting: "After the birth of Samuel" },
          { who: "Solomon", where: "1 Kings 8:22-53", kind: "Intercession", setting: "Dedication of the temple" },
          { who: "David", where: "Psalm 51", kind: "Confession", setting: "After his sin with Bathsheba" },
          { who: "Jonah", where: "Jonah 2:1-9", kind: "Petition", setting: "Inside the fish" },
          { who: "Nehemiah", where: "Nehemiah 1:4-11", kind: "Confession", setting: "On hearing of Jerusalem's ruined walls" },
          { who: "Daniel", where: "Daniel 9:4-19", kind: "Confession", setting: "Reading Jeremiah's seventy years" },
          { who: "Mary", where: "Luke 1:46-55", kind: "Praise", setting: "The Magnificat, on meeting Elizabeth" },
          { who: "Jesus", where: "Matthew 26:39", kind: "Petition", setting: "Gethsemane: \"not as I will\"" },
          { who: "Jesus", where: "John 17:1-26", kind: "Intercession", setting: "For his disciples, the night before the cross" },
          { who: "The church", where: "Acts 4:24-30", kind: "Petition", setting: "For boldness under threat" },
          { who: "Paul", where: "Ephesians 3:14-21", kind: "Intercession", setting: "That believers grasp Christ's love" },
        ]}
      />
    </VisualCard>
  )
}

function FixedHours() {
  return (
    <VisualCard
      title="Praying at set times"
      subtitle="Scripture records prayer at fixed hours, the root of the church's later canonical hours."
      sources={[{ label: "Wikipedia, \"Canonical hours\"", url: "https://en.wikipedia.org/wiki/Canonical_hours" }]}
    >
      <StepStrip
        steps={[
          { label: "Three times a day", title: "Daniel", body: "Knelt three times a day toward Jerusalem (Daniel 6:10); \"evening, morning and noon\" (Psalm 55:17)." },
          { label: "Noon (sixth hour)", title: "Peter", body: "Went up on the roof to pray (Acts 10:9)." },
          { label: "3 p.m. (ninth hour)", title: "Peter and John", body: "Went up to the temple at the time of prayer (Acts 3:1)." },
          { label: "Three times a day", title: "The Didache", body: "Directs Christians to say the Lord's Prayer three times daily (8.3)." },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "lords-prayer": LordsPrayer,
  acts: ActsGuide,
  "trinity-pattern": TrinityPattern,
  "bible-prayers": BiblePrayers,
  "fixed-hours": FixedHours,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
