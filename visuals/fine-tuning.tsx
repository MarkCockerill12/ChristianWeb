"use client"

import { ClaimLegend, CompareTable, VisualCard } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { Figure } from "@/components/visuals/figure"

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
          { c: "Cosmological constant", governs: "Expansion and galaxy formation", published: "Galaxies still form up to a few hundred to a few thousand times its observed value", popular: "1 part in 10¹²⁰", level: "!strong Real, but 10¹²⁰ is a different problem" },
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
      note="The cosmological constant is drawn on a logarithmic scale. The famous 1 part in 10¹²⁰ is the gap between the value quantum theory predicts and the value observed, not a life-permitting tolerance, so it cannot be drawn on this scale."
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

const VISUALS: Record<string, () => React.JSX.Element> = {
  constants: Constants,
  windows: Windows,
  "habitable-zone": HabitableZone,
  explanations: Explanations,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
