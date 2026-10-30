"use client"

import { useMemo, useState } from "react"

import { RangeChart, SERIES } from "@/components/visuals/charts"
import { Rich, Toggle, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"
import VERSES from "@/visuals/data/verses.json"
import { cn } from "@/lib/utils"

/* Positions follow the method column of the page's own comparison table. */
const SPECTRUM = [
  { v: "LSB", at: 4, method: "Word for word" },
  { v: "NASB", at: 8, method: "Word for word" },
  { v: "KJV", at: 14, method: "Word for word" },
  { v: "NKJV", at: 17, method: "Word for word" },
  { v: "ESV", at: 24, method: "Essentially literal" },
  { v: "NRSV", at: 30, method: "As literal as possible, as free as necessary" },
  { v: "CSB", at: 44, method: "Optimal equivalence" },
  { v: "NET", at: 49, method: "Middle, with extensive notes" },
  { v: "NIV", at: 56, method: "Balanced, leaning thought for thought" },
  { v: "NLT", at: 73, method: "Thought for thought" },
  { v: "GNT", at: 79, method: "Thought for thought" },
  { v: "The Message", at: 96, method: "Paraphrase" },
] as const

function Spectrum() {
  const [sel, setSel] = useState<string>("ESV")
  const s = SPECTRUM.find((x) => x.v === sel)!
  return (
    <VisualCard
      title="From word for word to paraphrase"
      subtitle="Where the main English translations sit between strict formal equivalence and free paraphrase. Select a translation."
      note="Positions are approximate and follow each translation's stated method; translations within the same band differ less than their marketing suggests."
    >
      <div className="relative h-24 mx-3" role="listbox" aria-label="Translation spectrum">
        <div className="absolute inset-x-0 top-9 h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${SERIES[0]}, ${SERIES[2]}, ${SERIES[1]})` }} />
        <span className="absolute left-0 top-0 text-[12px] font-semibold">Word for word</span>
        <span className="absolute right-0 top-0 text-[12px] font-semibold">Paraphrase</span>
        {SPECTRUM.map((x, i) => {
          const on = x.v === sel
          const below = i % 2 === 0
          return (
            <button
              key={x.v}
              type="button"
              role="option"
              aria-selected={on}
              onClick={() => setSel(x.v)}
              className={cn("absolute -translate-x-1/2 flex items-center", below ? "flex-col top-[30px]" : "flex-col-reverse top-[8px]")}
              style={{ left: `${x.at}%` }}
            >
              <span className={cn("block h-4 w-4 rounded-full border-2 border-[color:var(--viz-surface)]", on ? "bg-[color:var(--viz-ink)] scale-125" : "bg-[color:var(--viz-surface)] ring-2 ring-[color:var(--viz-ink-2)]")} />
              <span className={cn("text-[11px] whitespace-nowrap my-0.5 hidden sm:inline", on ? "font-bold" : "text-[color:var(--viz-ink-2)]")}>{x.v}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-1 flex flex-wrap gap-1.5 sm:hidden">
        {SPECTRUM.map((x) => (
          <button key={x.v} type="button" onClick={() => setSel(x.v)} className={cn("viz-chip", x.v === sel && "viz-chip-active")} aria-pressed={x.v === sel}>
            {x.v}
          </button>
        ))}
      </div>
      <div className="viz-info rounded-lg border p-3 mt-4" aria-live="polite">
        <span className="font-semibold">{s.v}</span>
        <span className="text-[13px] text-[color:var(--viz-ink-2)]">: {s.method}</span>
      </div>
    </VisualCard>
  )
}

const NOTES: Record<string, string> = {
  "John 3:16": "*Monogenēs*, \"only begotten\" in the KJV tradition, is now usually rendered \"one and only\" or \"only\": the word stresses uniqueness rather than begetting. The CSB and NLT also take *houtōs* as \"in this way\" rather than \"so much\".",
  "Isaiah 7:14": "The Hebrew *almah* means a young woman of marriageable age; the Septuagint, quoted in Matthew 1:23, has *parthenos*, virgin. The RSV's \"young woman\" (1952) caused a storm; most evangelical versions keep \"virgin\".",
  "Psalm 22:16": "Most Masoretic manuscripts read \"like a lion\"; the Septuagint, Syriac and a Dead Sea Scroll support \"pierced\", which every translation here follows.",
  "John 1:18": "The oldest manuscripts read *monogenēs theos*, \"only God\"; later ones read \"only Son\". The KJV and NKJV follow the later reading, the rest the earlier.",
  "1 John 5:7": "The words about the Father, the Word and the Spirit (the Comma Johanneum) appear in only a handful of late Greek manuscripts and entered the Textus Receptus through Erasmus's third edition.",
}

function VerseComparer() {
  const refs = Object.keys(VERSES)
  const [ref, setRef] = useState(refs[0])
  const [diffOnly, setDiffOnly] = useState<"all" | "words">("all")
  const rows = (VERSES as Record<string, Record<string, string>>)[ref]
  // Words that appear in every version are shown plainly; the rest are marked.
  const common = useMemo(() => {
    const sets = Object.values(rows).map((t) => new Set(t.toLowerCase().match(/[a-z']+/g) ?? []))
    return sets.reduce((a, b) => new Set([...a].filter((w) => b.has(w))))
  }, [rows])
  return (
    <VisualCard
      title="One verse, seven translations"
      subtitle="Choose a verse to compare. Words that some translations have and others lack can be highlighted."
      note="Quoted from the KJV (public domain) and from the NKJV, NASB 1995, ESV, NIV, CSB and NLT within their publishers' permitted quotation limits."
      sources={[{ label: "Bible Gateway (texts of each version)", url: "https://www.biblegateway.com/" }]}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <Toggle label="Verse" value={ref} onChange={setRef} options={refs.map((r) => ({ value: r, label: r }))} />
        <Toggle label="Highlight" value={diffOnly} onChange={setDiffOnly} options={[{ value: "all", label: "Plain" }, { value: "words", label: "Mark differences" }]} />
      </div>
      <div className="divide-y divide-[color:var(--viz-grid)] border-y border-[color:var(--viz-grid)]">
        {Object.entries(rows).map(([v, text]) => (
          <div key={v} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-3 py-2 text-sm">
            <span className="font-semibold">{v}</span>
            <span className="leading-relaxed">
              {diffOnly === "words"
                ? text.split(/(\s+)/).map((w, i) => {
                    const k = w.toLowerCase().replace(/[^a-z']/g, "")
                    return k && !common.has(k) ? (
                      <mark key={i} className="viz-mark-hl">
                        {w}
                      </mark>
                    ) : (
                      <span key={i}>{w}</span>
                    )
                  })
                : text}
            </span>
          </div>
        ))}
      </div>
      {NOTES[ref] && <Rich as="p" text={NOTES[ref]} className="mt-3 text-[13px] leading-relaxed text-[color:var(--viz-ink-2)]" />}
    </VisualCard>
  )
}

type Node = { id: string; label: string; year: string; col: number; row: number; catholic?: boolean }

const NODES: readonly Node[] = [
  { id: "wyc", label: "Wycliffe", year: "1380s", col: 0, row: 4, catholic: true },
  { id: "tyn", label: "Tyndale NT", year: "1526", col: 0, row: 1 },
  { id: "cov", label: "Coverdale", year: "1535", col: 1, row: 1 },
  { id: "mat", label: "Matthew's Bible", year: "1537", col: 2, row: 1 },
  { id: "grt", label: "Great Bible", year: "1539", col: 3, row: 1 },
  { id: "gen", label: "Geneva", year: "1560", col: 4, row: 0 },
  { id: "bsh", label: "Bishops'", year: "1568", col: 4, row: 2 },
  { id: "dr", label: "Douay-Rheims", year: "1582-1610", col: 4, row: 4, catholic: true },
  { id: "kjv", label: "KJV", year: "1611", col: 5, row: 1 },
  { id: "rv", label: "Revised Version", year: "1881-85", col: 6, row: 1 },
  { id: "nkjv", label: "NKJV", year: "1982", col: 6, row: 3 },
  { id: "asv", label: "ASV", year: "1901", col: 7, row: 1 },
  { id: "rsv", label: "RSV", year: "1952", col: 8, row: 0 },
  { id: "nasb", label: "NASB", year: "1971", col: 8, row: 2 },
  { id: "nrsv", label: "NRSV", year: "1989", col: 9, row: 0 },
  { id: "esv", label: "ESV", year: "2001", col: 9, row: 1 },
  { id: "lsb", label: "LSB", year: "2021", col: 9, row: 2 },
]

const EDGES: ReadonlyArray<readonly [string, string]> = [
  ["tyn", "cov"], ["cov", "mat"], ["tyn", "mat"], ["mat", "grt"], ["grt", "gen"], ["grt", "bsh"], ["bsh", "kjv"], ["gen", "kjv"], ["kjv", "rv"], ["kjv", "nkjv"], ["rv", "asv"], ["asv", "rsv"], ["asv", "nasb"], ["rsv", "nrsv"], ["rsv", "esv"], ["nasb", "lsb"], ["wyc", "dr"],
]

function FamilyTree() {
  const X = (c: number) => 60 + c * 118
  const Y = (r: number) => 30 + r * 62
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))
  return (
    <VisualCard
      title="The family tree of English Bibles"
      subtitle="Most Protestant English Bibles descend from Tyndale through the KJV; each revision built on the one before. Catholic translation followed its own line from the Latin Vulgate."
      note="Wycliffe and Douay-Rheims were translated from the Latin Vulgate rather than from Hebrew and Greek, and the KJV translators consulted Douay-Rheims too."
      sources={[
        { label: "Wikipedia, \"English translations of the Bible\"", url: "https://en.wikipedia.org/wiki/English_translations_of_the_Bible" },
        { label: "Wikipedia, \"Revised Standard Version\"", url: "https://en.wikipedia.org/wiki/Revised_Standard_Version" },
      ]}
    >
      <div className="overflow-x-auto">
        <svg viewBox="0 0 1180 330" className="min-w-[46rem] w-full h-auto" role="img" aria-label="Family tree of English Bible translations">
          <defs>
            <marker id="tree-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0L10,5L0,10z" fill="var(--viz-axis)" />
            </marker>
          </defs>
          {EDGES.map(([a, b]) => {
            const p = byId[a]
            const q = byId[b]
            const x1 = X(p.col) + 48
            const x2 = X(q.col) - 50
            return (
              <path
                key={a + b}
                d={`M${x1},${Y(p.row)} C${(x1 + x2) / 2},${Y(p.row)} ${(x1 + x2) / 2},${Y(q.row)} ${x2},${Y(q.row)}`}
                fill="none"
                stroke="var(--viz-axis)"
                strokeWidth={1.5}
                markerEnd="url(#tree-arrow)"
              />
            )
          })}
          {NODES.map((n) => (
            <g key={n.id}>
              <rect x={X(n.col) - 50} y={Y(n.row) - 20} width={100} height={40} rx={8} fill={n.catholic ? "var(--viz-plane)" : "var(--viz-surface)"} stroke={n.id === "kjv" ? SERIES[0] : n.catholic ? SERIES[1] : "var(--viz-axis)"} strokeWidth={n.id === "kjv" ? 2.5 : 1.5} />
              <text x={X(n.col)} y={Y(n.row) - 2} textAnchor="middle" fontSize={12.5} fontWeight={600} fill="var(--viz-ink)">
                {n.label}
              </text>
              <text x={X(n.col)} y={Y(n.row) + 13} textAnchor="middle" fontSize={11} fill="var(--viz-muted)">
                {n.year}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </VisualCard>
  )
}

function ManuscriptTimeline() {
  return (
    <VisualCard
      title="The manuscripts behind the translations"
      subtitle="Key Hebrew and Greek witnesses, and the printed Greek text of 1516 that the KJV New Testament rests on. Modern translations draw on the older manuscripts found since."
      sources={[
        { label: "Wikipedia, \"Dead Sea Scrolls\"", url: "https://en.wikipedia.org/wiki/Dead_Sea_Scrolls" },
        { label: "Wikipedia, \"Codex Sinaiticus\"", url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus" },
        { label: "Wikipedia, \"Codex Vaticanus\"", url: "https://en.wikipedia.org/wiki/Codex_Vaticanus" },
        { label: "Wikipedia, \"Aleppo Codex\"", url: "https://en.wikipedia.org/wiki/Aleppo_Codex" },
        { label: "Wikipedia, \"Leningrad Codex\"", url: "https://en.wikipedia.org/wiki/Leningrad_Codex" },
        { label: "Wikipedia, \"Textus Receptus\"", url: "https://en.wikipedia.org/wiki/Textus_Receptus" },
      ]}
    >
      <RangeChart
        min={-300}
        max={1600}
        ticks={[-200, 1, 400, 800, 1200, 1500]}
        format={(n) => (n < 0 ? `${-n} BC` : n === 1 ? "AD 1" : `AD ${n}`)}
        groups={["Old Testament (Hebrew)", "New Testament (Greek)"]}
        labelWidth={180}
        items={[
          { label: "Dead Sea Scrolls", start: -250, end: 68, group: "Old Testament (Hebrew)", display: "c. 250 BC-AD 68" },
          { label: "Papyrus P52 (John 18)", start: 125, end: 175, group: "New Testament (Greek)", display: "c. 125-175" },
          { label: "Papyri P66 and P75", start: 175, end: 225, group: "New Testament (Greek)", display: "c. 200" },
          { label: "Codex Vaticanus", start: 300, end: 350, group: "New Testament (Greek)", display: "4th century" },
          { label: "Codex Sinaiticus", start: 330, end: 360, group: "New Testament (Greek)", display: "c. 350" },
          { label: "Aleppo Codex", start: 920, end: 930, group: "Old Testament (Hebrew)", display: "c. 925" },
          { label: "Leningrad Codex", start: 1008, end: 1009, group: "Old Testament (Hebrew)", display: "1008-09" },
          { label: "Erasmus's Greek New Testament", start: 1516, group: "New Testament (Greek)", display: "1516" },
        ]}
      />
    </VisualCard>
  )
}

function Manuscripts() {
  return (
    <VisualCard title="What translators work from" subtitle="The oldest complete Hebrew Bible text tradition and the oldest Greek Bibles.">
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/canon/codex-sinaiticus-matthew.jpg",
            width: 800,
            height: 774,
            alt: "Page of a Greek uncial manuscript in four columns",
            caption: "Codex Sinaiticus (c. 350), the opening of Matthew.",
            credit: "British Library",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus_Matthew_1,1-2,5.JPG",
          },
          {
            src: "/images/prophecy/isaiah-scroll-53.jpg",
            width: 1000,
            height: 1137,
            alt: "Columns of Hebrew text on a Dead Sea Scroll",
            caption: "The Great Isaiah Scroll from Qumran, about a thousand years older than the medieval Masoretic manuscripts.",
            credit: "Ardon Bar-Hama, Israel Museum",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Isaiah_Scroll_Ch53.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  spectrum: Spectrum,
  "verse-comparer": VerseComparer,
  "family-tree": FamilyTree,
  "manuscript-timeline": ManuscriptTimeline,
  manuscripts: Manuscripts,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
