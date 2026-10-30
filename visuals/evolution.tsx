"use client"

import { useState } from "react"

import { LineChart, RangeChart, SERIES } from "@/components/visuals/charts"
import { ClaimLegend, CompareTable, Rich, Toggle, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"

/* ------------------------------------------------------------------ */
/* Views on origins                                                    */
/* ------------------------------------------------------------------ */

function Views() {
  return (
    <VisualCard
      title="The Christian views on origins, side by side"
      subtitle="The positions set out below, all held by Christians who accept the authority of Scripture. They differ on three questions: the age of the earth, how the days are read, and common descent."
    >
      <CompareTable
        minWidth="56rem"
        compact
        columns={[
          { key: "v", label: "View" },
          { key: "age", label: "Age of the earth" },
          { key: "days", label: "The days of Genesis 1" },
          { key: "descent", label: "Common descent" },
          { key: "who", label: "Represented by" },
        ]}
        rows={[
          { v: "Young earth creationism", age: "6,000-10,000 years", days: "Six consecutive 24-hour days", descent: "@no Separately created kinds", who: "Answers in Genesis, Institute for Creation Research" },
          { v: "Gap theory", age: "@partial Old universe, recent re-creation", days: "A gap between 1:1 and 1:2, then six days", descent: "@no", who: "Scofield Reference Bible (1909)" },
          { v: "Day-age / progressive creation", age: "Billions of years", days: "Long ages in sequence", descent: "@no New forms created at intervals", who: "Hugh Ross, Reasons to Believe" },
          { v: "Framework / analogical days", age: "Compatible with an old earth", days: "A literary arrangement, or God's workdays by analogy", descent: "@na No position in itself", who: "Meredith Kline; C. John Collins" },
          { v: "Cosmic temple", age: "No claim", days: "God assigning functions to the cosmos as his temple", descent: "@na No claim about material origins", who: "John Walton" },
          { v: "Historical creationism", age: "Unspecified (Genesis 1:1)", days: "Preparing the promised land of Eden", descent: "@na", who: "John Sailhamer" },
          { v: "Evolutionary creation", age: "Billions of years", days: "Theological, in an ancient setting", descent: "@yes Including humans", who: "Views of Adam differ widely" },
          { v: "Intelligent design", age: "Varies", days: "Not a reading of Genesis", descent: "@partial Proponents differ", who: "Michael Behe accepts common descent" },
        ]}
      />
    </VisualCard>
  )
}

function Framework() {
  const pairs = [
    ["Day 1", "Light and darkness", "Day 4", "Sun, moon and stars"],
    ["Day 2", "Sky and sea", "Day 5", "Birds and sea creatures"],
    ["Day 3", "Dry land and plants", "Day 6", "Land animals and humans"],
  ] as const
  return (
    <VisualCard
      title="Realms and rulers: the structure of Genesis 1"
      subtitle="Days one to three form realms; days four to six fill them in the same order. The framework view reads this as a deliberate arrangement; others see it as structure within a chronological account."
    >
      <div className="grid gap-2" role="table" aria-label="Days of creation in parallel">
        <div className="grid grid-cols-2 gap-2 text-[12px] font-semibold text-[color:var(--viz-muted)]" role="row">
          <span role="columnheader">Forming: realms</span>
          <span role="columnheader">Filling: their inhabitants</span>
        </div>
        {pairs.map(([d1, a, d2, b]) => (
          <div key={d1} className="grid grid-cols-2 gap-2" role="row">
            <div className="rounded-lg border p-3" style={{ borderColor: SERIES[0], background: "color-mix(in srgb, var(--viz-1) 8%, transparent)" }} role="cell">
              <div className="text-[12px] text-[color:var(--viz-muted)]">{d1}</div>
              <div className="font-semibold text-sm">{a}</div>
            </div>
            <div className="rounded-lg border p-3" style={{ borderColor: SERIES[1], background: "color-mix(in srgb, var(--viz-2) 8%, transparent)" }} role="cell">
              <div className="text-[12px] text-[color:var(--viz-muted)]">{d2}</div>
              <div className="font-semibold text-sm">{b}</div>
            </div>
          </div>
        ))}
        <div className="rounded-lg border p-3 text-center viz-info" role="row">
          <span className="text-[12px] text-[color:var(--viz-muted)]">Day 7 </span>
          <span className="font-semibold text-sm">God rests: no evening and morning (Genesis 2:1-3)</span>
        </div>
      </div>
    </VisualCard>
  )
}

function Order() {
  return (
    <VisualCard
      title="Genesis 1 read as a chronology, beside the scientific order"
      subtitle="The comparison behind the objection. Where the two orders disagree is the point at which readers divide between concordist and non-concordist readings."
      note="Scientific dates are approximate mainstream figures."
      sources={[
        { label: "Wikipedia, \"Timeline of the evolutionary history of life\"", url: "https://en.wikipedia.org/wiki/Timeline_of_the_evolutionary_history_of_life" },
        { label: "Wikipedia, \"Age of the Earth\"", url: "https://en.wikipedia.org/wiki/Age_of_Earth" },
      ]}
    >
      <CompareTable
        minWidth="44rem"
        compact
        columns={[
          { key: "item", label: "Event" },
          { key: "gen", label: "Genesis 1" },
          { key: "sci", label: "Science" },
          { key: "match", label: "Same order?" },
        ]}
        rows={[
          { item: "Light", gen: "Day 1", sci: "From the first stars, about 13.6 billion years ago", match: "@yes" },
          { item: "Earth and seas", gen: "Days 1-2", sci: "About 4.5 billion years ago, after the stars", match: "@no Earth before the stars in Genesis" },
          { item: "Land plants and fruit trees", gen: "Day 3", sci: "Land plants about 470 million years ago; flowering plants about 130 million", match: "@no Before the sun in Genesis" },
          { item: "Sun, moon and stars", gen: "Day 4", sci: "Sun about 4.6 billion years ago", match: "@no After plants in Genesis" },
          { item: "Sea creatures", gen: "Day 5", sci: "Animals in the sea from about 540 million years ago", match: "@yes" },
          { item: "Birds", gen: "Day 5", sci: "About 150 million years ago, after land animals", match: "@no Before land animals in Genesis" },
          { item: "Whales", gen: "Day 5", sci: "About 50 million years ago, from land mammals", match: "@no" },
          { item: "Land animals", gen: "Day 6", sci: "Land vertebrates about 375 million years ago", match: "@partial" },
          { item: "Humans", gen: "Day 6, last", sci: "About 300,000 years ago, last", match: "@yes" },
        ]}
      />
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Radiometric decay                                                   */
/* ------------------------------------------------------------------ */

const ISOTOPES = {
  c14: { label: "Carbon-14", parent: "carbon-14", daughter: "nitrogen-14", half: 5730, unit: "years" },
  k40: { label: "Potassium-40", parent: "potassium-40", daughter: "argon-40 (part)", half: 1.25e9, unit: "years" },
  u238: { label: "Uranium-238", parent: "uranium-238", daughter: "lead-206", half: 4.47e9, unit: "years" },
  rb87: { label: "Rubidium-87", parent: "rubidium-87", daughter: "strontium-87", half: 49e9, unit: "years" },
} as const

function fmtYears(y: number) {
  if (y >= 1e9) return `${(y / 1e9).toFixed(2)} billion years`
  if (y >= 1e6) return `${(y / 1e6).toFixed(1)} million years`
  return `${Math.round(y).toLocaleString("en-GB")} years`
}

function Decay() {
  const [iso, setIso] = useState<keyof typeof ISOTOPES>("u238")
  const [halves, setHalves] = useState(1)
  const i = ISOTOPES[iso]
  const points = Array.from({ length: 51 }, (_, k) => ({ x: k / 10, y: 100 * 0.5 ** (k / 10) }))
  const parent = 100 * 0.5 ** halves
  return (
    <VisualCard
      title="How a radioactive clock works"
      subtitle="Choose an isotope and drag through time. Each half-life, half of what remains of the parent decays to the daughter, so the ratio of the two gives the time since the mineral formed."
      note="Uranium-lead dating runs two such clocks at once (uranium-238 and uranium-235) in the same crystal, which is how loss of lead is detected."
    >
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <Toggle label="Isotope" value={iso} onChange={setIso} options={Object.entries(ISOTOPES).map(([value, x]) => ({ value: value as keyof typeof ISOTOPES, label: x.label }))} />
        <label className="flex items-center gap-2 text-sm">
          <span>Half-lives elapsed: {halves.toFixed(1)}</span>
          <input type="range" min={0} max={5} step={0.1} value={halves} onChange={(e) => setHalves(Number(e.target.value))} aria-label="Half-lives elapsed" />
        </label>
      </div>
      <LineChart
        height={220}
        xMin={0}
        xMax={5}
        yMax={100}
        xTicks={[0, 1, 2, 3, 4, 5]}
        yTicks={[0, 25, 50, 75, 100]}
        xFormat={(n) => `${n} half-life${n === 1 ? "" : "s"}`}
        yFormat={(n) => `${Math.round(n)}%`}
        annotations={[{ x: Math.round(halves * 10) / 10, label: "Now" }]}
        series={[
          { name: `${i.parent} remaining`, points },
          { name: `${i.daughter} formed`, points: points.map((p) => ({ x: p.x, y: 100 - p.y })) },
        ]}
      />
      <div className="viz-info rounded-lg border p-3 mt-3 text-sm grid gap-1 sm:grid-cols-3" aria-live="polite">
        <span>Parent left: <strong>{parent.toFixed(1)}%</strong></span>
        <span>Daughter: <strong>{(100 - parent).toFixed(1)}%</strong></span>
        <span>Age: <strong>{fmtYears(halves * i.half)}</strong> (half-life {fmtYears(i.half)})</span>
      </div>
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Human origins                                                       */
/* ------------------------------------------------------------------ */

function Hominins() {
  const fmt = (n: number) => (n === 0 ? "today" : n >= 1 ? `${n} mya` : `${Math.round(n * 1000)} kya`)
  return (
    <VisualCard
      title="The human fossil record"
      subtitle="The species and finds described below, on one axis in millions of years before the present. Several lived at the same time."
      note="Mainstream palaeoanthropological dates. Young earth creationists place all human remains within the last several thousand years."
    >
      <RangeChart
        min={0}
        max={7.5}
        reverse
        ticks={[7, 6, 5, 4, 3, 2, 1, 0]}
        format={fmt}
        labelWidth={190}
        groups={["Earlier hominins", "Genus Homo", "Our species"]}
        items={[
          { label: "Sahelanthropus to Ardipithecus", start: 7, end: 4, group: "Earlier hominins", display: "7-4 mya" },
          { label: "Australopithecines", start: 4, end: 2, group: "Earlier hominins", display: "4-2 mya" },
          { label: "\"Lucy\" (A. afarensis)", start: 3.2, group: "Earlier hominins", display: "3.2 mya" },
          { label: "Laetoli footprints", start: 3.66, group: "Earlier hominins", display: "3.66 mya" },
          { label: "Lomekwi stone tools", start: 3.3, group: "Genus Homo", display: "3.3 mya" },
          { label: "Homo erectus", start: 1.9, end: 0.11, group: "Genus Homo", display: "from 1.9 mya" },
          { label: "Homo heidelbergensis", start: 0.7, end: 0.2, group: "Genus Homo", display: "700-200 kya" },
          { label: "Neanderthals", start: 0.4, end: 0.04, group: "Genus Homo", display: "400-40 kya" },
          { label: "Homo naledi", start: 0.335, end: 0.236, group: "Genus Homo", display: "335-236 kya" },
          { label: "Homo sapiens", start: 0.315, end: 0, group: "Our species", display: "from 315 kya" },
        ]}
      />
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Lifespans                                                           */
/* ------------------------------------------------------------------ */

const LIFESPANS: ReadonlyArray<readonly [name: string, age: number, ref: string]> = [
  ["Adam", 930, "Genesis 5:5"], ["Seth", 912, "Genesis 5:8"], ["Enosh", 905, "Genesis 5:11"], ["Kenan", 910, "Genesis 5:14"],
  ["Mahalalel", 895, "Genesis 5:17"], ["Jared", 962, "Genesis 5:20"], ["Enoch", 365, "Genesis 5:23"], ["Methuselah", 969, "Genesis 5:27"],
  ["Lamech", 777, "Genesis 5:31"], ["Noah", 950, "Genesis 9:29"], ["Shem", 600, "Genesis 11:10-11"], ["Arphaxad", 438, "Genesis 11:12-13"],
  ["Shelah", 433, "Genesis 11:14-15"], ["Eber", 464, "Genesis 11:16-17"], ["Peleg", 239, "Genesis 11:18-19"], ["Reu", 239, "Genesis 11:20-21"],
  ["Serug", 230, "Genesis 11:22-23"], ["Nahor", 148, "Genesis 11:24-25"], ["Terah", 205, "Genesis 11:32"], ["Abraham", 175, "Genesis 25:7"],
  ["Isaac", 180, "Genesis 35:28"], ["Jacob", 147, "Genesis 47:28"], ["Joseph", 110, "Genesis 50:26"], ["Moses", 120, "Deuteronomy 34:7"],
]

function Lifespans() {
  return (
    <VisualCard
      title="The long lifespans of Genesis, in sequence"
      subtitle="Age at death for each generation in the Hebrew text, from Adam to Moses. The ages fall steeply after the Flood and level off near the 120 years of Genesis 6:3."
      note="Enoch (365) did not die but was taken (Genesis 5:24). The Septuagint gives larger numbers for many fathers' ages at the birth of a son."
    >
      <LineChart
        height={260}
        xMin={0}
        xMax={LIFESPANS.length - 1}
        yMax={1000}
        xTicks={[0, 9, 19, 23]}
        yTicks={[0, 250, 500, 750, 1000]}
        xFormat={(n) => LIFESPANS[n]?.[0] ?? ""}
        annotations={[{ x: 9.5, label: "Flood" }]}
        series={[{ name: "Age at death", points: LIFESPANS.map(([name, age], k) => ({ x: k, y: age, label: name })) }]}
        yLabel="Years lived, in generational order (hover for each name)"
      />
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* The ark                                                             */
/* ------------------------------------------------------------------ */

function Ark() {
  const items = [
    { label: "Noah's ark (300 cubits)", m: 137, note: "Genesis 6:15, at a common cubit of about 45.7 cm; 23 m wide, 14 m high" },
    { label: "Football pitch", m: 105, note: "A standard full-size pitch" },
    { label: "Boeing 747-400", m: 70.6, note: "Length of the airliner" },
    { label: "RMS Titanic", m: 269, note: "1912" },
  ]
  const max = 280
  return (
    <VisualCard
      title="The ark to scale"
      subtitle="Genesis gives the ark as 300 by 50 by 30 cubits. With the cubit at about 45.7 cm, that is roughly 137 metres long, set here beside familiar lengths."
      note="Cubits varied; with the longer royal cubit of about 52 cm the ark would be about 157 metres."
      sources={[{ label: "Wikipedia, \"Cubit\"", url: "https://en.wikipedia.org/wiki/Cubit" }, { label: "Wikipedia, \"Titanic\"", url: "https://en.wikipedia.org/wiki/Titanic" }]}
    >
      <div className="space-y-3">
        {items.map((it, k) => (
          <div key={it.label}>
            <div className="flex justify-between text-[13px]">
              <span className="font-semibold">{it.label}</span>
              <span className="tabular-nums text-[color:var(--viz-ink-2)]">{it.m} m</span>
            </div>
            <div className="h-5 rounded-[4px] mt-1" style={{ width: `${(it.m / max) * 100}%`, background: k === 0 ? SERIES[1] : SERIES[0] }} title={it.note} />
            <div className="text-[12px] text-[color:var(--viz-muted)] mt-0.5">{it.note}</div>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Ancient cosmology                                                   */
/* ------------------------------------------------------------------ */

function Cosmology() {
  const labels = [
    { y: 34, text: "Waters above (Genesis 1:7; Psalm 148:4)" },
    { y: 70, text: "Firmament, raqia (Genesis 1:6-8; Job 37:18)" },
    { y: 104, text: "Windows of heaven (Genesis 7:11)" },
    { y: 176, text: "Earth on its pillars (1 Samuel 2:8; Job 9:6)" },
    { y: 214, text: "The deep, tehom (Genesis 1:2; 7:11)" },
    { y: 244, text: "Sheol, the realm of the dead (Numbers 16:33)" },
  ]
  return (
    <VisualCard
      title="The picture of the world the first readers shared"
      subtitle="A reconstruction of the ancient Near Eastern cosmos implied by the texts discussed below. On the accommodation reading, Scripture speaks through this picture without teaching it as physics."
      note="A schematic drawn from the passages cited, not an ancient diagram."
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
        <svg viewBox="0 0 320 260" className="w-full max-w-md mx-auto" role="img" aria-label="Ancient cosmos: waters above a dome, a flat earth on pillars, the deep and Sheol below">
          <rect width="320" height="260" fill="var(--viz-surface)" />
          <path d="M10,150 A150,130 0 0 1 310,150" fill="var(--viz-water)" />
          <path d="M30,150 A130,110 0 0 1 290,150" fill="var(--viz-surface)" stroke="var(--viz-ink-2)" strokeWidth={3} />
          <rect x="120" y="54" width="14" height="10" fill="var(--viz-water)" stroke="var(--viz-ink-2)" />
          <rect x="186" y="54" width="14" height="10" fill="var(--viz-water)" stroke="var(--viz-ink-2)" />
          <circle cx="110" cy="96" r="9" fill={SERIES[3]} />
          <circle cx="215" cy="92" r="6" fill="var(--viz-axis)" />
          <rect x="30" y="150" width="260" height="10" fill="var(--viz-land)" stroke="var(--viz-coast)" />
          {[60, 110, 160, 210, 260].map((x) => (
            <rect key={x} x={x - 4} y={160} width={8} height={38} fill="var(--viz-axis)" />
          ))}
          <rect x="10" y="198" width="300" height="28" fill="var(--viz-water)" />
          <path d="M100,226 L220,226 L195,252 L125,252 Z" fill="var(--viz-grid)" />
          <text x="160" y="243" textAnchor="middle" fontSize="11" fill="var(--viz-ink-2)">Sheol</text>
          <text x="160" y="214" textAnchor="middle" fontSize="11" fill="var(--viz-water-ink)" fontStyle="italic">the deep</text>
          <text x="160" y="28" textAnchor="middle" fontSize="11" fill="var(--viz-water-ink)" fontStyle="italic">waters above</text>
        </svg>
        <ol className="space-y-1.5 list-none p-0 m-0 text-[13px]">
          {labels.map((l) => (
            <li key={l.text}>
              <Rich text={l.text} />
            </li>
          ))}
        </ol>
      </div>
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Parallels and arguments                                             */
/* ------------------------------------------------------------------ */

function Parallels() {
  return (
    <VisualCard
      title="Genesis beside its Mesopotamian neighbours"
      subtitle="The similarities and the differences set out in the section below."
      sources={[
        { label: "Wikipedia, \"Enūma Eliš\"", url: "https://en.wikipedia.org/wiki/En%C3%BBma_Eli%C5%A1" },
        { label: "Wikipedia, \"Atra-Hasis\"", url: "https://en.wikipedia.org/wiki/Atra-Hasis" },
        { label: "Wikipedia, \"Gilgamesh flood myth\"", url: "https://en.wikipedia.org/wiki/Gilgamesh_flood_myth" },
      ]}
    >
      <CompareTable
        minWidth="46rem"
        compact
        columns={[
          { key: "q", label: "Theme" },
          { key: "meso", label: "Enūma Eliš, Atrahasis, Gilgamesh" },
          { key: "gen", label: "Genesis 1-11" },
        ]}
        rows={[
          { q: "Creation", meso: "From the corpse of the slain goddess Tiamat after a war among gods", gen: "By the word of one God; the sea monsters are his creatures" },
          { q: "Purpose of humans", meso: "To do the gods' labour", gen: "To bear God's image and rule creation for him" },
          { q: "Cause of the flood", meso: "Human noise disturbs the gods' sleep", gen: "Violence and corruption" },
          { q: "The rescued man", meso: "Warned by a god to build a boat; birds sent out", gen: "Noah, righteous, builds the ark; birds sent out" },
          { q: "After the flood", meso: "The starving gods crowd round the sacrifice \"like flies\"", gen: "A covenant never again to destroy the earth" },
          { q: "Before the flood", meso: "Kings reign up to 28,800 years (Sumerian King List)", gen: "Lifespans up to 969 years" },
        ]}
      />
    </VisualCard>
  )
}

function Arguments() {
  return (
    <VisualCard
      title="Arguments against evolution, scored"
      subtitle="The verdict the section below reaches on each common argument. Weak arguments, repeated, damage the case they are meant to support."
    >
      <ClaimLegend levels={["fails", "weak", "debated"]} />
      <CompareTable
        minWidth="34rem"
        compact
        filterKeys={["verdict"]}
        columns={[
          { key: "arg", label: "Argument" },
          { key: "level", label: "Verdict" },
          { key: "verdict", label: "Category" },
        ]}
        rows={[
          { arg: "\"Evolution is just a theory\"", level: "!fails", verdict: "Does not hold" },
          { arg: "\"It violates the second law of thermodynamics\"", level: "!fails", verdict: "Does not hold" },
          { arg: "\"There are no transitional fossils\"", level: "!fails", verdict: "Does not hold" },
          { arg: "\"Nobody has observed macroevolution\"", level: "!weak Does not hold as stated", verdict: "Does not hold" },
          { arg: "Irreducible complexity", level: "!weak Largely answered", verdict: "Largely answered" },
          { arg: "Haeckel's embryos", level: "!debated Partly holds, against old textbooks", verdict: "Partly holds" },
          { arg: "Piltdown and Nebraska Man", level: "!fails", verdict: "Does not hold" },
          { arg: "The peppered moth", level: "!fails", verdict: "Does not hold" },
          { arg: "The Cambrian explosion", level: "!debated A real scientific question", verdict: "Open question" },
          { arg: "Genetic entropy", level: "!fails Not accepted", verdict: "Does not hold" },
          { arg: "\"Junk DNA\" and ENCODE", level: "!weak Largely does not hold", verdict: "Largely answered" },
          { arg: "\"The odds are impossible\"", level: "!fails", verdict: "Does not hold" },
          { arg: "\"Darwin recanted on his deathbed\"", level: "!fails", verdict: "Does not hold" },
          { arg: "\"Many scientists reject evolution\"", level: "!fails", verdict: "Does not hold" },
        ]}
      />
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* ------------------------------------------------------------------ */

function Clocks() {
  return (
    <VisualCard title="Clocks that count years" subtitle="Annual layers in ice, wood and lake sediment, independent of radioactive decay.">
      <Gallery
        columns={3}
        images={[
          { src: "/images/evolution/ice-core.jpg", width: 700, height: 467, alt: "Section of an ice core showing banding", caption: "An ice core section. In the cold interior of Greenland and Antarctica, annual layers are identified by several independent seasonal signals.", credit: "Lonnie Thompson, Byrd Polar Research Center", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Icecore_4.jpg" },
          { src: "/images/evolution/bristlecone.jpg", width: 700, height: 873, alt: "Gnarled ancient bristlecone pine", caption: "A Great Basin bristlecone pine on the Methuselah Trail, California. Overlapping ring sequences extend tree-ring chronologies past 12,000 years.", credit: "Dcrjsr", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Big_bristlecone_pine_Pinus_longaeva.jpg" },
          { src: "/images/evolution/varves.jpg", width: 700, height: 467, alt: "Striped layers of sediment in a cliff", caption: "Varves, annual layers of lake sediment, from a glacial lake at Sandend Bay, Scotland.", credit: "Anne Burgess (geograph.org.uk)", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pleistocene_Glacial_Lake_Varves_at_Sandend_Bay_in_Scotland_-_geograph_4175519.jpg" },
        ]}
      />
    </VisualCard>
  )
}

function Fossils() {
  return (
    <VisualCard title="Transitional and early human fossils" subtitle="Three of the finds named in the sections below.">
      <Gallery
        columns={3}
        images={[
          { src: "/images/evolution/tiktaalik.jpg", width: 700, height: 330, alt: "Fossil of a flat-headed fish with sturdy fins", caption: "Tiktaalik (about 375 million years old), a fish with a neck and limb-like fins, Field Museum, Chicago.", credit: "Eduard Solà", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tiktaalik_Chicago.JPG" },
          { src: "/images/evolution/archaeopteryx.jpg", width: 700, height: 946, alt: "Fossil of a feathered creature with teeth and a long tail", caption: "Archaeopteryx, the Berlin specimen: feathers and wings with teeth and a bony tail.", credit: "H. Raab", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Archaeopteryx_lithographica_(Berlin_specimen).jpg" },
          { src: "/images/evolution/lucy.jpg", width: 700, height: 1689, alt: "Reconstructed skeleton of a small upright hominin", caption: "A cast of \"Lucy\" (Australopithecus afarensis, 3.2 million years), who walked upright with a chimpanzee-sized brain.", credit: "Wikimedia Commons user 120", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Reconstruction_of_the_fossil_skeleton_of_%22Lucy%22_the_Australopithecus_afarensis.jpg" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  views: Views,
  framework: Framework,
  order: Order,
  decay: Decay,
  hominins: Hominins,
  lifespans: Lifespans,
  ark: Ark,
  cosmology: Cosmology,
  parallels: Parallels,
  arguments: Arguments,
  clocks: Clocks,
  fossils: Fossils,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
