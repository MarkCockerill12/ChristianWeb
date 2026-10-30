"use client"

import { useState } from "react"

import { CompareTable, Rich, Toggle, VisualCard } from "@/components/visuals/kit"

const CORNERS = [
  { x: 200, y: 40, label: "God is all-powerful" },
  { x: 50, y: 270, label: "God is wholly good" },
  { x: 350, y: 270, label: "Evil exists" },
] as const

const MODES = {
  problem: {
    label: "The problem",
    centre: "Contradiction?",
    text: "J.L. Mackie (1955) argued that these three claims cannot all be true: a good being eliminates evil as far as it can, and an all-powerful being can eliminate all of it.",
  },
  defense: {
    label: "Plantinga's defense",
    centre: "+ a morally sufficient reason",
    text: "A fourth claim removes the contradiction: God may have a good reason to permit evil, such as creating free creatures, and even an all-powerful God cannot make free creatures who are guaranteed to choose only good. The claim need only be possible, not proven, which is why most philosophers regard the logical problem as answered.",
  },
  evidential: {
    label: "The evidential problem",
    centre: "Consistent, but probable?",
    text: "William Rowe and others grant that the three claims are consistent, but argue that the amount of apparently pointless suffering, such as a fawn dying slowly in a forest fire, makes God's existence improbable. This version remains under active debate.",
  },
} as const

function Triad() {
  const [mode, setMode] = useState<keyof typeof MODES>("problem")
  const m = MODES[mode]
  return (
    <VisualCard
      title="The inconsistent triad"
      subtitle="The logical problem of evil as three claims that seem not to fit together, and the two main stages of the modern debate."
      sources={[
        { label: "Internet Encyclopedia of Philosophy, \"The Logical Problem of Evil\"", url: "https://iep.utm.edu/evil-log/" },
        { label: "Internet Encyclopedia of Philosophy, \"The Evidential Problem of Evil\"", url: "https://iep.utm.edu/evil-evi/" },
        { label: "Stanford Encyclopedia of Philosophy, \"The Problem of Evil\"", url: "https://plato.stanford.edu/entries/evil/" },
      ]}
    >
      <Toggle label="Stage of the debate" value={mode} onChange={setMode} options={Object.entries(MODES).map(([value, x]) => ({ value: value as keyof typeof MODES, label: x.label }))} />
      <div className="grid gap-4 md:grid-cols-2 items-center mt-3">
        <svg viewBox="0 0 400 310" className="w-full max-w-md mx-auto" role="img" aria-label={`Triangle of three claims: ${m.centre}`}>
          <polygon
            points={CORNERS.map((c) => `${c.x},${c.y}`).join(" ")}
            fill="none"
            stroke={mode === "problem" ? "var(--viz-8)" : mode === "defense" ? "var(--viz-3)" : "var(--viz-4)"}
            strokeWidth={3}
            strokeLinejoin="round"
            style={{ transition: "stroke 300ms" }}
          />
          {CORNERS.map((c) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r={7} fill="var(--viz-ink)" />
              <text x={c.x} y={c.y < 100 ? c.y - 16 : c.y + 26} textAnchor="middle" fontSize={14} fontWeight={600} fill="var(--viz-ink)">
                {c.label}
              </text>
            </g>
          ))}
          <text x={200} y={196} textAnchor="middle" fontSize={14} fill="var(--viz-ink-2)" fontStyle="italic">
            {m.centre}
          </text>
        </svg>
        <div className="viz-info rounded-lg border p-4" aria-live="polite">
          <div className="font-semibold text-sm">{m.label}</div>
          <Rich as="p" text={m.text} className="text-[13px] leading-relaxed mt-1 text-[color:var(--viz-ink-2)]" />
        </div>
      </div>
    </VisualCard>
  )
}

function Responses() {
  return (
    <VisualCard
      title="What each response is built to answer"
      subtitle="The Christian responses set out below, the kind of evil each is mainly designed for, and the objection most often pressed against it. No single response is meant to carry the whole weight."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"The Problem of Evil\"", url: "https://plato.stanford.edu/entries/evil/" },
        { label: "Wikipedia, \"Irenaean theodicy\"", url: "https://en.wikipedia.org/wiki/Irenaean_theodicy" },
        { label: "Stanford Encyclopedia of Philosophy, \"Skeptical Theism\"", url: "https://plato.stanford.edu/entries/skeptical-theism/" },
      ]}
    >
      <CompareTable
        minWidth="46rem"
        compact
        columns={[
          { key: "r", label: "Response" },
          { key: "moral", label: "Moral evil" },
          { key: "natural", label: "Natural evil" },
          { key: "objection", label: "Main objection" },
        ]}
        rows={[
          { r: "Free will defense (Plantinga)", moral: "@yes Its main target", natural: "@partial Only by extension", objection: "Why not a world of free creatures who always choose well?" },
          { r: "Soul-making (Irenaeus, John Hick)", moral: "@yes", natural: "@yes Hardship builds character", objection: "Much suffering crushes rather than builds, and falls on infants and animals" },
          { r: "Natural law and the Fall", moral: "@na", natural: "@yes A stable, fallen creation has real dangers", objection: "Animal suffering long before humans existed" },
          { r: "Skeptical theism", moral: "@partial", natural: "@partial", objection: "If we cannot see God's reasons, can we judge anything good?" },
          { r: "God's solidarity in the cross", moral: "@partial", natural: "@partial", objection: "A response to suffering rather than an explanation of it" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  triad: Triad,
  responses: Responses,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
