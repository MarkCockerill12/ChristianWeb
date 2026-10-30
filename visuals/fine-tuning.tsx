"use client"

import { useState } from "react"
import { Atom, Dna, Globe, Sun, Telescope } from "lucide-react"

import { ClaimLegend, CompareTable, Toggle, VisualCard } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { Figure } from "@/components/visuals/figure"
import { cn } from "@/lib/utils"

const BARNES = { label: "Luke A. Barnes, \"The Fine-Tuning of the Universe for Intelligent Life\", PASA 29 (2012)", url: "https://arxiv.org/abs/1112.4647" }

function Constants() {
  return (
    <VisualCard
      title="The constants, and how well each case holds up"
      subtitle="Each constant discussed below, with what the published analyses support and how that compares with the figure often quoted in popular apologetics."
      sources={[
        BARNES,
        { label: "Harnik, Kribs and Perez, \"A Universe Without Weak Interactions\", Physical Review D 74 (2006)", url: "https://arxiv.org/abs/hep-ph/0604027" },
        { label: "Wikipedia, \"Cosmological constant problem\"", url: "https://en.wikipedia.org/wiki/Cosmological_constant_problem" },
      ]}
    >
      <ClaimLegend levels={["strong", "debated", "weak"]} />
      <CompareTable
        minWidth="58rem"
        compact
        columns={[
          { key: "c", label: "Constant" },
          { key: "governs", label: "Governs" },
          { key: "published", label: "What the analyses support" },
          { key: "popular", label: "Popular figure" },
          { key: "level", label: "Case" },
        ]}
        rows={[
          { c: "Strong force", governs: "Binding of nuclei", published: "About 10% weaker unbinds the deuteron; destroying hydrogen needs about 50% stronger", popular: "±2-5%", level: "!strong Real, but wider than claimed" },
          { c: "Weak force", governs: "Nuclear reaction rates in stars", published: "A habitable \"weakless universe\" has been modelled", popular: "Finely tuned", level: "!weak A published counter-example" },
          { c: "Fine-structure constant", governs: "All electromagnetic interactions", published: "Problems as it nears 1, and in its balance with the strong force", popular: "±4%", level: "!debated Limits less dramatic than stated" },
          { c: "Gravitational constant", governs: "Star masses and lifetimes", published: "Stronger or weaker gravity changes stellar lifetimes and masses", popular: "Precise", level: "!debated" },
          { c: "Cosmological constant", governs: "Expansion and galaxy formation", published: "Galaxies still form up to a few hundred to a few thousand times its observed value, a tiny part of the possible range", popular: "1 part in 10¹²⁰", level: "!strong Real; at most 1 part in 10⁹⁰ on Barnes's conservative bound" },
          { c: "Initial entropy (Penrose)", governs: "Order of the early universe", published: "1 in 10^(10^123) on Penrose's calculation", popular: "Same", level: "!strong" },
        ]}
      />
    </VisualCard>
  )
}

/** One horizontal scale with the life-permitting band and, above it, the popular claim. */
function Window({
  title,
  min,
  max,
  ticks,
  format,
  band,
  popular,
  actual,
  log = false,
}: {
  readonly title: string
  readonly min: number
  readonly max: number
  readonly ticks: readonly number[]
  readonly format: (n: number) => string
  readonly band: readonly [number, number]
  readonly popular?: readonly [number, number]
  readonly actual: number
  readonly log?: boolean
}) {
  const f = (v: number) => (log ? Math.log10(v) : v)
  const x = (v: number) => `${((f(v) - f(min)) / (f(max) - f(min))) * 100}%`
  const w = (a: number, b: number) => `${((f(b) - f(a)) / (f(max) - f(min))) * 100}%`
  return (
    <div className="mb-6">
      <div className="text-sm font-semibold mb-2">{title}</div>
      <div className="relative h-16 mx-1">
        {popular && (
          <div className="absolute top-0 h-3 rounded-[3px]" style={{ left: x(popular[0]), width: w(popular[0], popular[1]), background: SERIES[1] }} title="Popular claim" />
        )}
        <div className="absolute top-5 inset-x-0 h-3 rounded-full bg-[color:var(--viz-hover)]" />
        <div className="absolute top-5 h-3 rounded-full" style={{ left: x(band[0]), width: w(band[0], band[1]), background: SERIES[0] }} title="Life-permitting range in published analyses" />
        <div className="absolute top-3.5 h-6 w-[3px] rounded bg-[color:var(--viz-ink)]" style={{ left: x(actual) }} title="Our universe" />
        {ticks.map((t) => (
          <span key={t} className="absolute top-10 -translate-x-1/2 text-[11px] text-[color:var(--viz-muted)] tabular-nums" style={{ left: x(t) }}>
            {format(t)}
          </span>
        ))}
      </div>
    </div>
  )
}

function Windows() {
  return (
    <VisualCard
      title="How narrow is the window?"
      subtitle="Two well-studied cases drawn to scale: the range in which life is still possible according to the published analyses, our universe's value, and the narrower range popular sources quote."
      note="The cosmological constant is drawn on a logarithmic scale, and only the range near the observed value is shown. The whole possible range, up to the scale of quantum gravity, would extend about 120 powers of ten to the right."
      sources={[BARNES, { label: "Wikipedia, \"Anthropic principle\" (Weinberg's bound on the cosmological constant)", url: "https://en.wikipedia.org/wiki/Anthropic_principle" }]}
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-[color:var(--viz-ink-2)]">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-4 rounded-sm" style={{ background: SERIES[0] }} />Life-permitting range in published analyses</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-4 rounded-sm" style={{ background: SERIES[1] }} />Range quoted in popular sources</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-3 w-[3px] rounded bg-[color:var(--viz-ink)]" />Our universe</span>
      </div>
      <Window
        title="Strong nuclear force: change in strength"
        min={-20}
        max={60}
        ticks={[-20, -10, 0, 20, 40, 60]}
        format={(n) => (n > 0 ? `+${n}%` : `${n}%`)}
        band={[-10, 50]}
        popular={[-5, 5]}
        actual={0}
      />
      <Window
        title="Cosmological constant: multiple of the observed value"
        min={0.1}
        max={10000}
        ticks={[0.1, 1, 10, 100, 1000, 10000]}
        format={(n) => `${n}×`}
        band={[0.1, 1000]}
        actual={1}
        log
      />
    </VisualCard>
  )
}

function HabitableZone() {
  const AU = 230 // px per astronomical unit
  const cx = 30
  const planets = [
    { name: "Venus", au: 0.72 },
    { name: "Earth", au: 1.0 },
    { name: "Mars", au: 1.52 },
  ]
  return (
    <VisualCard
      title="The Sun's habitable zone"
      subtitle="The band around the Sun where an Earth-like planet can keep liquid water on its surface, using the classic estimate of 0.95 to 1.37 AU. Earth sits nearer the inner edge than the outer one."
      note="Later models move the outer edge further out once the carbonate-silicate cycle is included; the inner edge is closer and better constrained."
      sources={[{ label: "Wikipedia, \"Circumstellar habitable zone\"", url: "https://en.wikipedia.org/wiki/Circumstellar_habitable_zone" }]}
    >
      <svg viewBox="0 0 420 120" className="w-full h-auto" role="img" aria-label="Habitable zone from 0.95 to 1.37 AU, with Venus inside, Earth within, and Mars outside">
        <rect x={cx + 0.95 * AU} y={10} width={(1.37 - 0.95) * AU} height={80} rx={6} fill={SERIES[2]} opacity={0.18} />
        <text x={cx + 1.16 * AU} y={24} textAnchor="middle" fontSize={11} fill="var(--viz-ink-2)">
          Habitable zone
        </text>
        <circle cx={cx} cy={55} r={18} fill={SERIES[3]} />
        <text x={cx} y={98} textAnchor="middle" fontSize={11} fill="var(--viz-ink-2)">Sun</text>
        <line x1={cx} x2={410} y1={55} y2={55} stroke="var(--viz-grid)" />
        {planets.map((p) => (
          <g key={p.name}>
            <circle cx={cx + p.au * AU} cy={55} r={p.name === "Earth" ? 6 : 5} fill={p.name === "Earth" ? SERIES[0] : "var(--viz-ink-2)"} stroke="var(--viz-surface)" strokeWidth={2} />
            <text x={cx + p.au * AU} y={80} textAnchor="middle" fontSize={11} fontWeight={p.name === "Earth" ? 700 : 400} fill="var(--viz-ink)">
              {p.name}
            </text>
            <text x={cx + p.au * AU} y={110} textAnchor="middle" fontSize={10} fill="var(--viz-muted)">
              {p.au} AU
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-5 max-w-2xl">
        <Figure
          image={{
            src: "/images/fine-tuning/galactic-habitable-zone.jpg",
            width: 1000,
            height: 500,
            alt: "Artist's views of the Milky Way with a ring marking a habitable band",
            caption: "The proposed galactic habitable zone: a ring of the Milky Way with enough heavy elements for rocky planets and few enough nearby supernovae. The idea is plausible but its boundaries are debated.",
            credit: "NASA Scientific Visualization Studio",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Milky_Way_Habitable_Zone_(SVS15047_-).jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

function Arguments() {
  return (
    <VisualCard
      title="The arguments for God, and how they fit together"
      subtitle="No single argument is meant to carry the whole weight. Each one starts from a different feature of the world and has a serious reply."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Cosmological Argument\"", url: "https://plato.stanford.edu/entries/cosmological-argument/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Fine-Tuning\"", url: "https://plato.stanford.edu/entries/fine-tuning/" },
        { label: "Wikipedia, \"Ontological argument\"", url: "https://en.wikipedia.org/wiki/Ontological_argument" },
      ]}
    >
      <CompareTable
        minWidth="56rem"
        compact
        columns={[
          { key: "a", label: "Argument" },
          { key: "from", label: "Starts from" },
          { key: "to", label: "Points to" },
          { key: "reply", label: "The main reply" },
          { key: "more", label: "In depth" },
        ]}
        rows={[
          { a: "From a beginning (kalam)", from: "The universe began", to: "A cause beyond space and time", reply: "Causation may not apply to the universe; the physics of the beginning is unsettled", more: "This topic" },
          { a: "From contingency", from: "The universe need not have existed", to: "A necessary being", reply: "The universe may be a brute fact", more: "This topic" },
          { a: "From fine-tuning", from: "Constants in narrow ranges", to: "An intelligent cause", reply: "A multiverse, or an unknown necessity", more: "This topic" },
          { a: "From consciousness and reason", from: "Minds that reason and experience", to: "Mind as fundamental to reality", reply: "A future neuroscience may explain them", more: "This topic" },
          { a: "Moral", from: "Objective right and wrong", to: "A moral lawgiver", reply: "Moral facts may need no ground", more: "[Morality](/categories/morality)" },
          { a: "Ontological", from: "The idea of a greatest possible being", to: "That being's existence", reply: "Existence is not a property (Kant); the same logic could prove a perfect island (Gaunilo)", more: "Few rest their case on it" },
          { a: "Historical", from: "The resurrection and fulfilled prophecy", to: "The God of Israel, specifically", reply: "Rival explanations of the same data", more: "[Resurrection](/categories/resurrection), [Prophecy](/categories/prophecy)" },
        ]}
      />
    </VisualCard>
  )
}

function Explanations() {
  return (
    <VisualCard
      title="Four explanations of the fine-tuning"
      subtitle="The naturalistic explanations examined below, with the main difficulty each faces, beside the design explanation."
    >
      <CompareTable
        minWidth="46rem"
        compact
        columns={[
          { key: "e", label: "Explanation" },
          { key: "claim", label: "Claim" },
          { key: "difficulty", label: "Main difficulty" },
        ]}
        rows={[
          { e: "Multiverse", claim: "Every combination of constants exists somewhere; we are in a life-permitting one", difficulty: "Unobservable; the universe-generating mechanism would itself need tuning" },
          { e: "Anthropic selection", claim: "We could only observe a universe that permits observers", difficulty: "Explains why we see it, not why it is so (Leslie's firing squad)" },
          { e: "Necessity", claim: "A final theory will show the constants could not be otherwise", difficulty: "No such theory; string theory points to a vast landscape instead" },
          { e: "Design", claim: "The constants were set by an intelligent cause", difficulty: "Raises the question of the designer, and cannot be tested in the same way" },
        ]}
      />
    </VisualCard>
  )
}

/* ------------------------------------------------------------------ */
/* Everything life needs, and the odds                                 */
/* ------------------------------------------------------------------ */

type Standing = "calculated" | "measured" | "contested"

interface Requirement {
  readonly id: string
  readonly name: string
  readonly needs: string
  /** log10 of the odds against; null when no defensible number exists. */
  readonly exponent: number | null
  readonly odds: string
  readonly standing?: Standing
  /** Counted in the default tally. */
  readonly on?: boolean
  /** Penrose's figure is a double exponential and cannot be summed with the rest. */
  readonly doubleExponent?: boolean
}

const TIERS: ReadonlyArray<{
  readonly key: string
  readonly name: string
  readonly scale: string
  readonly Icon: typeof Atom
  readonly color: string
  readonly items: readonly Requirement[]
}> = [
  {
    key: "universe",
    name: "The universe",
    scale: "Laws, constants and the beginning",
    Icon: Atom,
    color: SERIES[6],
    items: [
      { id: "lambda", name: "Cosmological constant", needs: "Too large and matter flies apart before galaxies form. Too negative and the universe recollapses.", exponent: 90, odds: "At most 1 in 10⁹⁰", standing: "calculated", on: true },
      { id: "higgs", name: "Higgs field strength", needs: "A few times larger and no atom heavier than hydrogen is stable, so there is no chemistry.", exponent: 33, odds: "At most 1 in 10³³", standing: "calculated", on: true },
      { id: "q", name: "Lumpiness of the early universe (Q)", needs: "Below about 10⁻⁶, structures are too loosely bound to keep the heavy elements stars make. Above about 10⁻⁴, dense galaxies disrupt planetary orbits.", exponent: 4, odds: "1 in 10⁴, if Q could fall anywhere from 0 to 1", standing: "calculated", on: true },
      { id: "entropy", name: "Low-entropy beginning", needs: "Without an extraordinarily ordered start there is no arrow of time and no structure.", exponent: null, odds: "1 in 10^(10¹²³) (Penrose)", standing: "calculated", doubleExponent: true },
      { id: "flatness", name: "Density at the Planck time", needs: "Without inflation, the density must be set to 60 decimal places. Inflation may remove this one.", exponent: 60, odds: "1 in 10⁶⁰, without inflation", standing: "contested" },
      { id: "forces", name: "Strength of the forces", needs: "The strong force needs to sit between about 10% weaker and 50% stronger. Electromagnetism must balance against it.", exponent: null, odds: "No agreed number" },
      { id: "quarks", name: "Quark and electron masses", needs: "Nine separate conditions must hold for stable, complex atoms, in a range spanning 60 orders of magnitude.", exponent: null, odds: "No single number" },
      { id: "dimensions", name: "Three dimensions of space", needs: "Stable planetary orbits and atoms are not available with more than three.", exponent: null, odds: "No probability applies" },
    ],
  },
  {
    key: "galaxy",
    name: "The galaxy",
    scale: "Where in the galaxy",
    Icon: Telescope,
    color: SERIES[0],
    items: [
      { id: "ghz", name: "Galactic habitable zone", needs: "Enough heavy elements to build rocky planets, few enough nearby supernovae. Its boundaries are disputed.", exponent: 1, odds: "About 1 star in 10", standing: "contested", on: true },
    ],
  },
  {
    key: "star",
    name: "The star",
    scale: "Which kind of sun",
    Icon: Sun,
    color: SERIES[3],
    items: [
      { id: "gtype", name: "A Sun-like star", needs: "Long-lived and stable, with a habitable zone wide and distant enough to avoid tidal locking.", exponent: Math.log10(1 / 0.076), odds: "1 star in 13 (class G)", standing: "measured", on: true },
    ],
  },
  {
    key: "planet",
    name: "The planet",
    scale: "Which kind of world",
    Icon: Globe,
    color: SERIES[2],
    items: [
      { id: "hz", name: "Earth-size, in the habitable zone", needs: "Rocky and at the right distance for liquid water.", exponent: Math.log10(1 / 0.22), odds: "About 1 in 5 Sun-like stars", standing: "measured", on: true },
      { id: "moon", name: "A large, stabilising moon", needs: "Steadies the planet's tilt and so its climate, though how far life needs this is debated.", exponent: Math.log10(12), odds: "About 1 in 12 rocky planets", standing: "calculated", on: true },
      { id: "others", name: "Magnetic field, plate tectonics, atmosphere, oceans, a shielding giant planet", needs: "Each is argued to matter, and each is debated. None has a measured frequency beyond our solar system.", exponent: null, odds: "No measured number" },
    ],
  },
  {
    key: "life",
    name: "Life itself",
    scale: "From chemistry to cells",
    Icon: Dna,
    color: SERIES[7],
    items: [
      { id: "fold", name: "A functional protein fold", needs: "Douglas Axe's estimate for one fold by chance. Other experiments find functional sequences far more often, and no one proposes that first life began this way.", exponent: 77, odds: "1 in 10⁷⁷ (Axe, disputed)", standing: "contested" },
      { id: "origin", name: "The origin of life", needs: "Life's early appearance on Earth is consistent with its being common or arbitrarily rare. One planet is too small a sample to tell.", exponent: null, odds: "Unknown" },
      { id: "mind", name: "Consciousness", needs: "No physical account of subjective experience exists to attach a number to.", exponent: null, odds: "Unknown" },
    ],
  },
]

const STANDING: Record<Standing, string> = {
  calculated: "Published calculation",
  measured: "Observed frequency",
  contested: "Contested",
}

const ALL_ITEMS = TIERS.flatMap((t) => t.items.map((i) => ({ ...i, tier: t.key })))
const COUNTABLE = ALL_ITEMS.filter((i) => i.exponent !== null || i.doubleExponent)
const DEFAULTS = COUNTABLE.filter((i) => i.on).map((i) => i.id)

const PRESETS: ReadonlyArray<{ readonly value: string; readonly label: string; readonly ids: readonly string[] }> = [
  { value: "default", label: "Everything with a defensible number", ids: DEFAULTS },
  { value: "universe", label: "The universe only", ids: ["lambda", "higgs", "q"] },
  { value: "earth", label: "Earth only", ids: ["ghz", "gtype", "hz", "moon"] },
  { value: "all", label: "Add the contested ones", ids: COUNTABLE.map((i) => i.id) },
]

const SUPER: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" }
const sup = (n: number) => String(n).replace(/\d/g, (d) => SUPER[d])

function formatOdds(exponent: number) {
  if (exponent < 6) return `1 in ${Number((10 ** exponent).toPrecision(2)).toLocaleString("en-GB")}`
  return `1 in 10${sup(Math.round(exponent))}`
}

const RULER_MAX = 240
const STARS_EXPONENT = 24
const ATOMS_EXPONENT = 80

function Requirements() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(() => new Set(DEFAULTS))
  const [preset, setPreset] = useState("default")

  const toggle = (id: string) => {
    setPreset("")
    setSelected((cur) => {
      const next = new Set(cur)
      if (!next.delete(id)) next.add(id)
      return next
    })
  }

  const chosen = COUNTABLE.filter((i) => selected.has(i.id))
  const exponent = chosen.reduce((sum, i) => sum + (i.exponent ?? 0), 0)
  const hasPenrose = chosen.some((i) => i.doubleExponent)
  const earth = COUNTABLE.filter((i) => i.tier !== "universe" && i.tier !== "life").reduce((sum, i) => sum + (i.exponent ?? 0), 0)
  const universe = COUNTABLE.filter((i) => i.on && i.tier === "universe").reduce((sum, i) => sum + (i.exponent ?? 0), 0)
  const onlyEarthChosen = chosen.length > 0 && chosen.every((i) => i.tier !== "universe" && i.tier !== "life")
  const pct = (e: number) => `${Math.min(100, (e / RULER_MAX) * 100)}%`

  return (
    <VisualCard
      title="Everything life needs, and the chances of getting it all"
      subtitle="Five scales, from the laws of physics down to a living cell. Each requirement shows what it does and what is known about its odds. Tick any that carry a number to add them to the running total."
      note={"Multiplying assumes each requirement is independent of the others and that the assumed ranges are right, and neither is settled. Physicists set the range for quantities such as the cosmological constant by the Planck scale; McGrew, McGrew and Vestrup argue that without a limit no probability exists at all, and Barnes replies that the same problem faces any theory with free parameters. Barnes also warns that varying constants one at a time can mislead. The total is an illustration of scale, not a measurement. It says nothing by itself about what explains the result: the multiverse, necessity and design are compared in the next card."}
      sources={[
        { label: "Luke A. Barnes, \"A Reasonable Little Question: A Formulation of the Fine-Tuning Argument\", Ergo 6 (2020) (cosmological constant at most 10⁻⁹⁰, Higgs at most 10⁻³³)", url: "https://quod.lib.umich.edu/e/ergo/12405314.0006.042/--reasonable-little-question-a-formulation-of-the-fine-tuning?rgn=main;view=fulltext" },
        { label: "Is There a God?, \"An alternative fine-tuning argument\" (summarises those two bounds)", url: "https://www.is-there-a-god.info/clues/an-alternative-fine-tuning-argument" },
        { ...BARNES, label: `${BARNES.label} (density to 60 places, nine criteria for quark masses, the warning on varying one constant)` },
        { label: "Tegmark and Rees, \"Why Is the CMB Fluctuation Level 10⁻⁵?\", Astrophysical Journal 499 (1998)", url: "https://arxiv.org/abs/astro-ph/9709058" },
        { label: "Lineweaver, Fenner and Gibson, \"The Galactic Habitable Zone\", Science 303 (2004)", url: "https://arxiv.org/abs/astro-ph/0401024" },
        { label: "Times Higher Education, \"Ample Scope for Life in the Milky Way\" (reports Lineweaver's 10% figure)", url: "https://www.timeshighereducation.com/node/48202" },
        { label: "Wikipedia, \"Galactic habitable zone\" (later challenges to the concept)", url: "https://en.wikipedia.org/wiki/Galactic_habitable_zone" },
        { label: "Wikipedia, \"Stellar classification\" (class G is 7.6% of main-sequence stars)", url: "https://en.wikipedia.org/wiki/Stellar_classification" },
        { label: "Petigura, Howard and Marcy, \"Prevalence of Earth-size planets orbiting Sun-like stars\", PNAS (2013)", url: "https://arxiv.org/abs/1311.6806" },
        { label: "Astronomy, \"One in five stars has Earth-sized planet in habitable zone\" (the 22% figure)", url: "https://www.astronomy.com/science/one-in-five-stars-has-earth-sized-planet-in-habitable-zone/" },
        { label: "Bryson et al., \"The Occurrence of Rocky Habitable-zone Planets\", Astronomical Journal (2021) (later and higher estimates)", url: "https://arxiv.org/abs/2010.14812" },
        { label: "Elser, Moore, Stadel and Morishima, \"How common are Earth-Moon planetary systems?\", Icarus (2011)", url: "https://arxiv.org/abs/1105.4616" },
        { label: "Spiegel and Turner, \"Bayesian analysis of the astrobiological implications of life's early emergence on Earth\", PNAS (2012)", url: "https://arxiv.org/abs/1107.3835" },
        { label: "European Space Agency, \"How many stars are there in the Universe?\" (10²² to 10²⁴)", url: "https://www.esa.int/Science_Exploration/Space_Science/Herschel/How_many_stars_are_there_in_the_Universe" },
        { label: "Wikipedia, \"Observable universe\" (about 10⁸⁰ atoms)", url: "https://en.wikipedia.org/wiki/Observable_universe" },
        { label: "McGrew, McGrew and Vestrup, \"Probabilities and the Fine-Tuning Argument\", Mind 110 (2001)", url: "https://philpapers.org/rec/MCGPAT" },
        { label: "Barnes, \"Fine-Tuning in the Context of Bayesian Theory Testing\" (2017)", url: "https://arxiv.org/abs/1707.03965" },
        { label: "Stanford Encyclopedia of Philosophy, \"Fine-Tuning\"", url: "https://plato.stanford.edu/entries/fine-tuning/" },
        { label: "Reasons to Believe, \"Probability for Life on Earth\" (Ross's 322 factors)", url: "https://reasons.org/explore/publications/articles/probability-for-life-on-earth" },
        { label: "The Secular Web, \"How Hugh Ross Calculates the Improbability of Life on Earth\" (critique)", url: "https://secularfrontier.infidels.org/2014/04/how-hugh-ross-calculates-the-improbability-of-life-on-earth-due-to-chance-alone/" },
      ]}
    >
      <div className="space-y-3">
        {TIERS.map((tier) => (
          <div key={tier.key} className="rounded-lg border overflow-hidden" style={{ borderLeft: `4px solid ${tier.color}` }}>
            <div className="flex items-center gap-2 px-3 py-2 bg-[color:var(--viz-hover)]">
              <tier.Icon className="h-5 w-5 flex-shrink-0" style={{ color: tier.color }} aria-hidden />
              <span className="font-semibold text-sm">{tier.name}</span>
              <span className="text-xs text-[color:var(--viz-muted)]">{tier.scale}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {tier.items.map((item) => {
                const countable = item.exponent !== null || item.doubleExponent
                const on = selected.has(item.id)
                const Wrapper = countable ? "label" : "div"
                return (
                  <Wrapper key={item.id} className={cn("flex gap-2 p-3 border-t border-[color:var(--viz-border)]", countable && "cursor-pointer hover:bg-[color:var(--viz-hover)]")}>
                    {countable && <input type="checkbox" checked={on} onChange={() => toggle(item.id)} className="mt-0.5 h-4 w-4 flex-shrink-0" />}
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold leading-snug">{item.name}</span>
                      <span className="block text-xs leading-snug mt-0.5 text-[color:var(--viz-ink-2)]">{item.needs}</span>
                      <span className={cn("block text-xs font-semibold mt-1", !countable && "text-[color:var(--viz-muted)] font-normal italic")}>{item.odds}</span>
                      {item.standing && <span className="viz-tag mt-1 inline-block">{STANDING[item.standing]}</span>}
                    </span>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border p-4 viz-info">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="text-sm font-semibold">Chance of everything ticked, taken as independent</span>
          <span className="text-2xl sm:text-3xl font-bold tabular-nums text-[color:var(--viz-1)]" aria-live="polite">
            {chosen.length === 0 ? "None selected" : hasPenrose ? "1 in 10^(10¹²³)" : formatOdds(exponent)}
          </span>
        </div>
        <div className="relative mt-8 mb-8 h-3 rounded-full bg-[color:var(--viz-hover)]" aria-hidden>
          <div className="h-full rounded-full transition-all duration-300" style={{ width: hasPenrose ? "100%" : pct(exponent), background: "var(--viz-1)" }} />
          {[
            { e: STARS_EXPONENT, label: "Stars in the universe" },
            { e: ATOMS_EXPONENT, label: "Atoms in the universe" },
          ].map((m) => (
            <div key={m.e} className="absolute top-[-4px] h-5 w-[2px] bg-[color:var(--viz-ink)]" style={{ left: pct(m.e) }}>
              <span className={cn("absolute left-0 whitespace-nowrap text-[10px] text-[color:var(--viz-ink-2)]", m.e === STARS_EXPONENT ? "top-5" : "bottom-5")}>
                {m.label} (10{sup(m.e)})
              </span>
            </div>
          ))}
        </div>
        {hasPenrose && <p className="text-xs text-[color:var(--viz-ink-2)] mb-2">Penrose&apos;s figure is so large that nothing else changes the total; it runs far past the end of this scale.</p>}
        <Toggle label="Preset" value={preset} onChange={(v) => { setPreset(v); setSelected(new Set(PRESETS.find((p) => p.value === v)?.ids ?? [])) }} options={PRESETS.map(({ value, label }) => ({ value, label }))} />
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className={cn("rounded-lg border p-3 viz-info", onlyEarthChosen && "ring-2 ring-[color:var(--viz-1)]")}>
          <div className="text-sm font-semibold">Earth&apos;s conditions alone do not need a miracle</div>
          <p className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]">
            The measured factors come to about {formatOdds(earth)} stars. Against 10²² to 10²⁴ stars, that leaves around 10{sup(Math.round(22 - earth))} to 10{sup(Math.round(24 - earth))} candidates, even before the unmeasured factors are counted. Rarity of this kind does not call for an explanation beyond chance.
          </p>
        </div>
        <div className="rounded-lg border p-3 viz-info">
          <div className="text-sm font-semibold">The universe&apos;s conditions are the real argument</div>
          <p className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]">
            At about {formatOdds(universe)}, the published bounds on the universe&apos;s own constants far exceed the number of atoms in it. There is only one universe to try, so no quantity of stars can offset them, which is why a multiverse is proposed.
          </p>
        </div>
      </div>
      <p className="text-xs leading-relaxed mt-3 text-[color:var(--viz-ink-2)]">
        Popular totals run much higher: Hugh Ross of Reasons to Believe multiplies 322 factors to reach 1 in 10²⁸², after allowing for 10²² planets. Each factor is his own estimate and many are not independent, so the figure is attributed here rather than counted.
      </p>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  requirements: Requirements,
  arguments: Arguments,
  constants: Constants,
  windows: Windows,
  "habitable-zone": HabitableZone,
  explanations: Explanations,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
