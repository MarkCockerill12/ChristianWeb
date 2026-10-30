"use client"

import { useState } from "react"

import { CardGrid, CompareTable, Rich, VisualCard } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { cn } from "@/lib/utils"

/* Everyone named in Romans 16:1-15, in order. Aristobulus and Narcissus are
   named as heads of households greeted. */
const PEOPLE: ReadonlyArray<readonly [name: string, verse: string, woman: boolean, note?: string]> = [
  ["Phoebe", "16:1-2", true, "*Diakonos* of the church at Cenchreae and *prostatis*, patron; probably carried the letter."],
  ["Priscilla", "16:3-4", true, "Paul's co-worker who risked her life for him; named before her husband."],
  ["Aquila", "16:3", false],
  ["Epenetus", "16:5", false],
  ["Mary", "16:6", true, "\"Worked very hard for you.\""],
  ["Andronicus", "16:7", false],
  ["Junia", "16:7", true, "\"Outstanding among the apostles\", in Christ before Paul."],
  ["Ampliatus", "16:8", false],
  ["Urbanus", "16:9", false],
  ["Stachys", "16:9", false],
  ["Apelles", "16:10", false],
  ["Aristobulus", "16:10", false],
  ["Herodion", "16:11", false],
  ["Narcissus", "16:11", false],
  ["Tryphena", "16:12", true, "\"Women who work hard in the Lord.\""],
  ["Tryphosa", "16:12", true, "\"Women who work hard in the Lord.\""],
  ["Persis", "16:12", true, "\"Worked very hard in the Lord.\""],
  ["Rufus", "16:13", false],
  ["Rufus's mother", "16:13", true, "\"Who has been a mother to me, too.\""],
  ["Asyncritus", "16:14", false],
  ["Phlegon", "16:14", false],
  ["Hermes", "16:14", false],
  ["Patrobas", "16:14", false],
  ["Hermas", "16:14", false],
  ["Philologus", "16:15", false],
  ["Julia", "16:15", true],
  ["Nereus", "16:15", false],
  ["Nereus's sister", "16:15", true],
  ["Olympas", "16:15", false],
]

function Romans16() {
  const [sel, setSel] = useState("Phoebe")
  const p = PEOPLE.find((x) => x[0] === sel)!
  return (
    <VisualCard
      title="Romans 16: ten women among twenty-nine names"
      subtitle="Everyone Paul commends or greets in Romans 16:1-15. Women are filled; select any name for what Paul says about them."
    >
      <div className="flex flex-wrap gap-1.5" role="listbox" aria-label="People named in Romans 16">
        {PEOPLE.map(([name, , woman]) => (
          <button
            key={name}
            type="button"
            role="option"
            aria-selected={name === sel}
            onClick={() => setSel(name)}
            className={cn("rounded-full border px-2.5 py-0.5 text-[12px] transition-colors", name === sel && "ring-2 ring-[color:var(--viz-ink)]", woman ? "text-white border-transparent font-semibold" : "text-[color:var(--viz-ink-2)] border-[color:var(--viz-border)]")}
            style={woman ? { background: SERIES[6] } : undefined}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="viz-info rounded-lg border p-3 mt-3" aria-live="polite">
        <div className="font-semibold text-sm">
          {p[0]} <Rich text={`(Romans ${p[1]})`} className="font-normal text-[12px]" />
        </div>
        <Rich as="p" text={p[3] ?? "Greeted by name."} className="text-[13px] mt-1 text-[color:var(--viz-ink-2)]" />
      </div>
    </VisualCard>
  )
}

function LawComparison() {
  return (
    <VisualCard
      title="Women under three ancient law codes"
      subtitle="The comparison made in the section below, point by point. It favours the Mosaic law overall, and not at every point."
      sources={[
        { label: "The Code of Hammurabi, trans. L.W. King (Avalon Project)", url: "https://avalon.law.yale.edu/ancient/hamcode.asp" },
        { label: "Wikipedia, \"Assyrian law\" (Middle Assyrian Laws)", url: "https://en.wikipedia.org/wiki/Middle_Assyrian_Laws" },
      ]}
    >
      <CompareTable
        minWidth="52rem"
        compact
        columns={[
          { key: "q", label: "Question" },
          { key: "ham", label: "Hammurabi (c. 1750 BC)" },
          { key: "mal", label: "Middle Assyrian (c. 1100 BC)" },
          { key: "torah", label: "Mosaic law" },
        ]}
        rows={[
          { q: "Selling a wife for debt", ham: "@no Allowed: wife and children to forced labour for three years (§117)", mal: "@na", torah: "@yes No provision for it" },
          { q: "Adultery", ham: "Both drowned, but the husband may pardon his wife (§129)", mal: "@na", torah: "Capital for both, with no pardon left to the husband (Leviticus 20:10)" },
          { q: "Veiling and public status", ham: "@na", mal: "@no Compulsory for wives; a veiled prostitute receives fifty blows and hot pitch", torah: "@na No veiling law" },
          { q: "Husband's punishment of a wife", ham: "@na", mal: "@no Permitted at will", torah: "@yes No provision for it" },
          { q: "Childless widow", ham: "@na", mal: "@na", torah: "@yes She herself shames a brother-in-law who refuses levirate marriage (Deuteronomy 25:5-10)" },
          { q: "Wife's right to divorce", ham: "@yes For cause, taking her dowry (§142)", mal: "@na", torah: "@no No provision" },
          { q: "Wife's vows", ham: "@na", mal: "@na", torah: "@no A husband may annul them (Numbers 30)" },
        ]}
      />
    </VisualCard>
  )
}

function WomenOfScripture() {
  return (
    <VisualCard title="Women of standing in Scripture" subtitle="Roles the Bible records women holding, from the Exodus to the early church.">
      <CardGrid
        columns={4}
        cards={[
          { kicker: "Exodus 15:20; Micah 6:4", title: "Miriam", body: "Prophet; named with Moses and Aaron as sent to lead Israel." },
          { kicker: "Exodus 1:15-21", title: "Shiphrah and Puah", body: "Midwives who defied Pharaoh's order to kill Hebrew boys." },
          { kicker: "Judges 4-5", title: "Deborah", body: "Prophet and judge of Israel, \"a mother in Israel\"." },
          { kicker: "2 Kings 22:14-20", title: "Huldah", body: "The prophet the king's officials consulted on the book of the Law." },
          { kicker: "Ruth 1-4", title: "Ruth", body: "A Moabite widow, great-grandmother of David." },
          { kicker: "Esther 4-8", title: "Esther", body: "Risked her life before the Persian king to save her people." },
          { kicker: "John 20:11-18", title: "Mary Magdalene", body: "First witness of the risen Jesus, sent to tell the disciples." },
          { kicker: "Acts 16:14-15, 40", title: "Lydia", body: "First named convert in Europe; the Philippian church met in her house." },
          { kicker: "Acts 18:26", title: "Priscilla", body: "With Aquila, explained the way of God more adequately to Apollos." },
          { kicker: "Romans 16:1-2", title: "Phoebe", body: "Deacon of the church at Cenchreae, commended to Rome." },
          { kicker: "Acts 21:9", title: "Philip's daughters", body: "Four unmarried daughters who prophesied." },
          { kicker: "Luke 2:36-38", title: "Anna", body: "Prophet who spoke of the infant Jesus to all awaiting redemption." },
        ]}
      />
    </VisualCard>
  )
}

function TwoReadings() {
  return (
    <VisualCard
      title="The same texts, read two ways"
      subtitle="The passages at the centre of the complementarian and egalitarian debate, with each position's reading as the sections below set them out."
    >
      <CompareTable
        minWidth="50rem"
        columns={[
          { key: "text", label: "Text" },
          { key: "comp", label: "Complementarian reading" },
          { key: "egal", label: "Egalitarian reading" },
        ]}
        rows={[
          { text: "1 Timothy 2:11-15", comp: "The appeal to Adam and Eve grounds the limit on teaching men in creation, so it holds in every church", egal: "*Authentein* means domineering; the letter targets false teaching in Ephesus" },
          { text: "1 Corinthians 14:34-35", comp: "Women do not weigh prophecies or teach in the assembly", egal: "A specific disruption is in view, since 11:5 assumes women pray and prophesy" },
          { text: "1 Corinthians 11:2-16", comp: "*Kephale* means authority; the principle of headship survives the custom of veiling", egal: "*Kephale* can mean source; Paul qualifies it: neither sex is independent in the Lord" },
          { text: "Ephesians 5:21-33", comp: "Husbands lead by self-sacrifice; wives submit", egal: "Mutual submission (5:21) governs the whole passage" },
          { text: "Galatians 3:28", comp: "Equal standing in salvation, not identical roles", egal: "Equality that extends to office and function" },
          { text: "Romans 16:1, 7", comp: "Phoebe served; Junia was a respected missionary", egal: "A woman deacon and a woman apostle" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "romans-16": Romans16,
  "law-comparison": LawComparison,
  "women-of-scripture": WomenOfScripture,
  "two-readings": TwoReadings,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
