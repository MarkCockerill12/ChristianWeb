"use client"

import { useState } from "react"

import { RangeChart } from "@/components/visuals/charts"
import { CardGrid, ClaimLegend, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"

function Scorecard() {
  return (
    <VisualCard
      title="How each claim stands"
      subtitle="Every space-science claim examined below, with how well it holds up. The astronomy is often solid; what it proves about the biblical event is usually more limited."
    >
      <ClaimLegend levels={["established", "debated", "weak", "retracted", "myth"]} />
      <CardGrid
        columns={3}
        cards={[
          { title: "NASA found Joshua's \"missing day\"", level: "myth", body: "A story from C.A.L. Totten (1890) and Harry Rimmer that predates NASA. No such calculation is possible." },
          { title: "An annular eclipse on 30 October 1207 BC", level: "debated", body: "A peer-reviewed proposal resting on a disputed translation of Joshua 10." },
          { title: "Wind setdown parting the water", level: "debated", body: "A sound physical model of a lagoon in the Nile Delta; the crossing's location is unknown." },
          { title: "A cosmic airburst destroyed Sodom", level: "retracted", body: "The 2021 *Scientific Reports* paper was retracted on 24 April 2025." },
          { title: "Radar traced caravan tracks to Shisr", level: "established", body: "The tracks and the site are real; whether Shisr is \"Ubar\" is disputed." },
          { title: "A lunar eclipse on 3 April AD 33", level: "established", body: "The eclipse happened. Its bearing on the crucifixion depends on the AD 33 date, which is contested." },
          { title: "A Dead Sea seismite from AD 26-36", level: "debated", body: "Consistent with an earthquake in Pilate's time; cannot fix a day." },
          { title: "Conjunctions as the Star of Bethlehem", level: "debated", body: "The conjunctions occurred; none behaves as Matthew's star does." },
          { title: "Refraction reversed Hezekiah's shadow", level: "weak", body: "Refraction is real, but no effect of the size required has been observed." },
        ]}
      />
    </VisualCard>
  )
}

function WindSetdown() {
  const [hours, setHours] = useState(0)
  // Water retreats towards a steady state over the wind's first hours (illustrative curve).
  const drop = Math.min(1, hours / 8) ** 0.8
  const water = 70 + drop * 34
  const exposed = drop > 0.75
  return (
    <VisualCard
      title="Wind setdown, simulated"
      subtitle="Drag the slider to blow an east wind of 28 m/s (about 63 mph) across a shallow lagoon. As water is pushed off the shallows, a ridge between two deeper channels is exposed."
      note="A schematic cross-section, not the authors' model output. In their reconstruction of the ancient Lake of Tanis the exposed land bridge was 3-4 km long and 5 km wide and stayed open for about four hours."
      sources={[
        { label: "Drews and Han, \"Dynamics of Wind Setdown at Suez and the Eastern Nile Delta\", PLOS ONE 5 (2010): e12481", url: "https://pubmed.ncbi.nlm.nih.gov/20827299/" },
      ]}
    >
      <label className="flex flex-wrap items-center gap-3 text-sm">
        <span className="font-semibold">Hours of wind: {hours}</span>
        <input type="range" min={0} max={12} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-56" aria-label="Hours of wind" />
      </label>
      <svg viewBox="0 0 600 170" className="w-full h-auto mt-3 rounded-lg border viz-map" role="img" aria-label={`Cross-section after ${hours} hours of wind${exposed ? ": land bridge exposed" : ""}`}>
        <rect width="600" height="170" fill="var(--viz-surface)" />
        <rect x="0" y={water} width="600" height={170 - water} fill="var(--viz-water)" style={{ transition: "y 300ms, height 300ms" }} />
        <path d="M0,150 L120,150 L170,110 L220,94 L300,90 L380,94 L430,110 L480,150 L600,150 L600,170 L0,170 Z" fill="var(--viz-land)" stroke="var(--viz-coast)" strokeWidth="1.5" />
        <line x1="0" x2="600" y1="70" y2="70" stroke="var(--viz-axis)" strokeDasharray="0" opacity="0.5" />
        <text x="8" y="64" fontSize="12" fill="var(--viz-muted)">Normal water level</text>
        {exposed && (
          <text x="300" y="82" fontSize="13" fontWeight="600" textAnchor="middle" fill="var(--viz-ink)">
            Land bridge exposed
          </text>
        )}
        <text x="580" y="30" fontSize="12" textAnchor="end" fill="var(--viz-ink-2)">
          {hours > 0 ? "East wind →" : "Calm"}
        </text>
      </svg>
    </VisualCard>
  )
}

function Ubar() {
  return (
    <VisualCard
      title="Seeing through sand from orbit"
      subtitle="Shuttle Imaging Radar picked out ancient caravan tracks in the Rub' al Khali, leading to the excavated site at Shisr in Oman."
      sources={[
        { label: "NASA/JPL, SIR-C/X-SAR image P-44414 (Wikimedia Commons)", url: "https://commons.wikimedia.org/wiki/File:SIR-C_X-SAR_Ubar,_Oman.gif" },
        { label: "Wikipedia, \"Iram of the Pillars\" (Ubar and Shisr)", url: "https://en.wikipedia.org/wiki/Iram_of_the_Pillars" },
      ]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/nasa/ubar-radar.gif",
            width: 900,
            height: 1676,
            alt: "False-colour radar image of desert terrain with faint linear tracks",
            caption: "Spaceborne Imaging Radar (SIR-C/X-SAR) image of the region around Shisr, taken from the Space Shuttle in 1994.",
            credit: "NASA/JPL",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:SIR-C_X-SAR_Ubar,_Oman.gif",
          },
          {
            src: "/images/nasa/shisr-ruins.jpg",
            width: 900,
            height: 741,
            alt: "Stone ruins on a desert site",
            caption: "The ruins at Shisr, a fortified waystation on the frankincense trade route, partly collapsed into a sinkhole.",
            credit: "Bz-mof (de.wikipedia)",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Ubar_2002_Ruine.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

function Star() {
  return (
    <VisualCard
      title="The Star of Bethlehem candidates against Herod's death"
      subtitle="Matthew places Jesus' birth before Herod died. The usual date for that is 4 BC; a minority place it in 1 BC, which changes which candidates fit."
      sources={[
        { label: "Wikipedia, \"Star of Bethlehem\"", url: "https://en.wikipedia.org/wiki/Star_of_Bethlehem" },
        { label: "NASA JPL, HORIZONS ephemeris system", url: "https://ssd.jpl.nasa.gov/horizons/" },
      ]}
    >
      <RangeChart
        min={-8}
        max={0}
        ticks={[-7, -6, -5, -4, -3, -2, -1]}
        format={(n) => `${-n} BC`}
        markers={[{ at: -4, label: "Herod dies (usual date)" }]}
        labelWidth={230}
        groups={["Planetary conjunction", "Comet or nova"]}
        items={[
          { label: "Jupiter-Saturn triple conjunction, Pisces", start: -7, end: -6.1, group: "Planetary conjunction", display: "7 BC" },
          { label: "Object seen 70 days by Chinese astronomers", start: -5, end: -4.8, group: "Comet or nova", display: "5 BC" },
          { label: "Jupiter-Venus conjunction", start: -3, end: -2.9, group: "Planetary conjunction", display: "August 3 BC" },
          { label: "Jupiter-Venus near-merger, Leo", start: -2, end: -1.9, group: "Planetary conjunction", display: "17 June 2 BC" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  scorecard: Scorecard,
  "wind-setdown": WindSetdown,
  ubar: Ubar,
  star: Star,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
