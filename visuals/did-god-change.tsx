"use client"

import { CompareTable, StepStrip, VisualCard, Legend } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { cn } from "@/lib/utils"

function BothTestaments() {
  return (
    <VisualCard
      title="Mercy and judgment in both Testaments"
      subtitle="Each theme set beside its Old and New Testament texts. Several of the New Testament's ethical commands quote the Old Testament directly."
    >
      <CompareTable
        minWidth="44rem"
        columns={[
          { key: "theme", label: "Theme" },
          { key: "ot", label: "Old Testament" },
          { key: "nt", label: "New Testament" },
        ]}
        rows={[
          { theme: "God is compassionate and slow to anger", ot: "Exodus 34:6-7; Jonah 4:2; Ezekiel 33:11", nt: "Luke 15:11-32; John 3:16; 2 Peter 3:9" },
          { theme: "God judges sin severely", ot: "Genesis 6:5-7; 2 Kings 17:18", nt: "Acts 5:1-11; Romans 1:18; Revelation 19:15" },
          { theme: "Love God with everything", ot: "Deuteronomy 6:5", nt: "Matthew 22:37, quoting Deuteronomy" },
          { theme: "Love your neighbour", ot: "Leviticus 19:18", nt: "Matthew 22:39; Romans 13:9, quoting Leviticus" },
          { theme: "Do good to your enemy", ot: "Exodus 23:4-5; Proverbs 25:21-22", nt: "Matthew 5:44; Romans 12:20, quoting Proverbs" },
          { theme: "Care for the foreigner", ot: "Leviticus 19:33-34; Deuteronomy 10:19", nt: "Matthew 25:35; Hebrews 13:2" },
          { theme: "Final, eternal judgment", ot: "Daniel 12:2", nt: "Matthew 25:46; 2 Thessalonians 1:9" },
        ]}
      />
    </VisualCard>
  )
}

const ECHOES = [
  ["Exodus 34:6-7", "Sinai"],
  ["Numbers 14:18", "Moses intercedes"],
  ["Nehemiah 9:17", "Confession after the exile"],
  ["Psalm 86:15", "David's prayer"],
  ["Psalm 103:8", "Praise"],
  ["Psalm 145:8", "Praise"],
  ["Joel 2:13", "Call to return"],
  ["Jonah 4:2", "Jonah's complaint"],
  ["Nahum 1:3", "Judgment on Nineveh"],
] as const

function SinaiFormula() {
  return (
    <VisualCard
      title={"\"Compassionate and gracious, slow to anger\""}
      subtitle="The description of God given at Sinai recurs across the Old Testament in law, history, worship and prophecy."
    >
      <ol className="grid gap-2 sm:grid-cols-3 list-none p-0 m-0">
        {ECHOES.map(([ref, ctx], i) => (
          <li key={ref} className={cn("viz-info rounded-lg border p-2.5 text-sm", i === 0 && "sm:col-span-3 border-[color:var(--viz-1)]")}>
            <span className="font-semibold">{ref}</span>
            <span className="block text-[12px] text-[color:var(--viz-ink-2)]">{ctx}</span>
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

function Covenants() {
  return (
    <VisualCard
      title="One God, a sequence of covenants"
      subtitle="Progressive revelation in outline: each covenant builds on the last, and the new covenant is announced in the Old Testament itself (Jeremiah 31:31-34)."
    >
      <StepStrip
        steps={[
          { label: "Noah", title: "Preservation", body: "Genesis 9:8-17. Sign: the rainbow." },
          { label: "Abraham", title: "Promise", body: "Genesis 12; 15; 17. Sign: circumcision." },
          { label: "Moses", title: "Law", body: "Exodus 19-24. Sign: the Sabbath (Exodus 31:13)." },
          { label: "David", title: "Kingdom", body: "2 Samuel 7:12-16. An everlasting throne." },
          { label: "New covenant", title: "Fulfilment", body: "Jeremiah 31:31-34; Luke 22:20; Hebrews 8. Sign: the cup." },
        ]}
      />
    </VisualCard>
  )
}

const OT = 39
const NT = ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]
const KEPT = new Set(["Luke", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "Philemon"])

function MarcionBible() {
  return (
    <VisualCard
      title="Marcion's Bible"
      subtitle="To keep a God of love apart from the God of Israel, Marcion kept eleven of the Bible's 66 books, and edited those."
      note="Marcion called Ephesians the letter to the Laodiceans. His Luke lacked the birth narratives, and he removed passages from Paul that tied Christ to the God of Israel."
      sources={[
        { label: "Wikipedia, \"Marcion of Sinope\"", url: "https://en.wikipedia.org/wiki/Marcion_of_Sinope" },
        { label: "Wikipedia, \"Gospel of Marcion\"", url: "https://en.wikipedia.org/wiki/Gospel_of_Marcion" },
      ]}
    >
      <Legend items={[{ label: "Kept (edited)", color: SERIES[0] }, { label: "Rejected", color: "var(--viz-grid)" }]} />
      <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-1">Old Testament: all 39 books rejected</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(14px,1fr))] gap-[3px] mb-4" aria-label="39 Old Testament books, all rejected">
        {Array.from({ length: OT }, (_, i) => (
          <div key={i} className="h-5 rounded-[3px] bg-[color:var(--viz-grid)]" />
        ))}
      </div>
      <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-1">New Testament: 11 of 27 kept</div>
      <div className="flex flex-wrap gap-1">
        {NT.map((b) => (
          <span
            key={b}
            className={cn("rounded px-1.5 py-0.5 text-[12px]", KEPT.has(b) ? "text-white font-semibold" : "text-[color:var(--viz-muted)] bg-[color:var(--viz-hover)] line-through")}
            style={KEPT.has(b) ? { background: SERIES[0] } : undefined}
          >
            {b}
          </span>
        ))}
      </div>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "both-testaments": BothTestaments,
  "sinai-formula": SinaiFormula,
  covenants: Covenants,
  marcion: MarcionBible,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
