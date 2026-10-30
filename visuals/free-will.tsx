"use client"

import { useState } from "react"

import { CompareTable, Rich, StepStrip, VisualCard } from "@/components/visuals/kit"
import { SERIES } from "@/components/visuals/charts"
import { cn } from "@/lib/utils"

const POSITIONS = [
  { id: "hard", at: 4, row: 0, name: "Hard determinism", body: "Every event, every choice included, is fixed by prior causes, so no one could ever have done otherwise. Few Christians hold it, since it is usually taken to rule out responsibility." },
  { id: "compat", at: 38, row: 0, name: "Compatibilism", body: "A choice is free if it flows from the agent's own desires without compulsion, even if those desires were themselves determined." },
  { id: "lib", at: 90, row: 0, name: "Libertarianism", body: "In the very same circumstances the agent could have chosen otherwise; the choice is not settled by prior causes." },
  { id: "calv", at: 30, row: 1, name: "Calvinism", body: "God ordains whatever comes to pass; humans act freely in the compatibilist sense and are responsible (Westminster Confession 3.1)." },
  { id: "thom", at: 46, row: 1, name: "Thomism", body: "God moves every cause, including free wills, as their first cause, so that an act is wholly God's and wholly the agent's (concurrence)." },
  { id: "mol", at: 70, row: 1, name: "Molinism", body: "Libertarian freedom, with God's middle knowledge of what each creature would freely do guiding his choice of which world to create." },
  { id: "arm", at: 82, row: 1, name: "Arminianism", body: "Libertarian freedom enabled by prevenient grace; God foreknows free choices but does not determine them." },
  { id: "open", at: 95, row: 1, name: "Open theism", body: "Libertarian freedom so strong that future free choices are not yet there to be known; God knows all that can be known." },
] as const

function Spectrum() {
  const [sel, setSel] = useState<string>("compat")
  const s = POSITIONS.find((p) => p.id === sel)!
  return (
    <VisualCard
      title="From determinism to libertarian freedom"
      subtitle="The philosophical positions on the upper line, and where the main theological systems sit beneath them. Select a position for a summary."
      note="Placements are approximate: Thomists dispute whether their view is compatibilist at all, and some Calvinists reject the label."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Free Will\"", url: "https://plato.stanford.edu/entries/freewill/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Compatibilism\"", url: "https://plato.stanford.edu/entries/compatibilism/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Foreknowledge and Free Will\"", url: "https://plato.stanford.edu/entries/free-will-foreknowledge/" },
      ]}
    >
      <div className="relative h-40 mx-2" role="listbox" aria-label="Positions on free will">
        <div className="absolute left-0 right-0 top-[38px] h-[2px] bg-[color:var(--viz-axis)]" />
        <div className="absolute left-0 right-0 top-[100px] h-[2px] bg-[color:var(--viz-grid)]" />
        <span className="absolute left-0 top-0 text-[11px] text-[color:var(--viz-muted)]">Philosophy</span>
        <span className="absolute left-0 top-[62px] text-[11px] text-[color:var(--viz-muted)]">Theology</span>
        {POSITIONS.map((p, i) => {
          const on = p.id === sel
          // Theology labels alternate above and below the line so neighbours never collide.
          const above = p.row === 1 && i % 2 === 0
          const edge = p.at < 10 ? "translate-x-0 items-start" : p.at > 90 ? "-translate-x-full items-end" : "-translate-x-1/2 items-center"
          return (
            <button
              key={p.id}
              type="button"
              role="option"
              aria-selected={on}
              onClick={() => setSel(p.id)}
              className={cn("absolute flex group", above ? "flex-col-reverse" : "flex-col", edge)}
              style={{ left: `${p.at}%`, top: p.row === 0 ? 30 : above ? 72 : 92 }}
            >
              <span
                className={cn("block h-4 w-4 rounded-full border-2 border-[color:var(--viz-surface)] transition-transform", on && "scale-125")}
                style={{ background: p.row === 0 ? SERIES[0] : SERIES[1], boxShadow: on ? "0 0 0 2px var(--viz-ink)" : undefined }}
              />
              <span className={cn("my-0.5 whitespace-nowrap text-[11px] sm:text-[12px] hidden sm:inline", on ? "font-semibold" : "text-[color:var(--viz-ink-2)]")}>{p.name}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-1 flex flex-wrap gap-1.5 sm:hidden">
        {POSITIONS.map((p) => (
          <button key={p.id} type="button" onClick={() => setSel(p.id)} className={cn("viz-chip", p.id === sel && "viz-chip-active")} aria-pressed={p.id === sel}>
            {p.name}
          </button>
        ))}
      </div>
      <div className="viz-info rounded-lg border p-3 mt-2" aria-live="polite">
        <div className="font-semibold text-sm">{s.name}</div>
        <Rich as="p" text={s.body} className="text-[13px] mt-1 leading-relaxed text-[color:var(--viz-ink-2)]" />
      </div>
    </VisualCard>
  )
}

function Systems() {
  return (
    <VisualCard
      title="Four theological systems compared"
      subtitle="How each answers the questions on which the free will debate turns."
      sources={[
        { label: "Wikipedia, \"Calvinism\" (Reformed Christianity)", url: "https://en.wikipedia.org/wiki/Calvinism" },
        { label: "Wikipedia, \"Molinism\"", url: "https://en.wikipedia.org/wiki/Molinism" },
        { label: "Wikipedia, \"Arminianism\"", url: "https://en.wikipedia.org/wiki/Arminianism" },
        { label: "Wikipedia, \"Open theism\"", url: "https://en.wikipedia.org/wiki/Open_theism" },
      ]}
    >
      <CompareTable
        minWidth="52rem"
        compact
        columns={[
          { key: "q", label: "Question" },
          { key: "cal", label: "Calvinism" },
          { key: "mol", label: "Molinism" },
          { key: "arm", label: "Arminianism" },
          { key: "open", label: "Open theism" },
        ]}
        rows={[
          { q: "Does God know future free choices?", cal: "@yes Because he decrees them", mol: "@yes Including what anyone would do in any situation", arm: "@yes By simple foreknowledge", open: "@no They are not yet there to be known" },
          { q: "Kind of human freedom", cal: "Compatibilist", mol: "Libertarian", arm: "Libertarian", open: "Libertarian" },
          { q: "Basis of election", cal: "God's choice alone (unconditional)", mol: "God's choice of a world, knowing how each would respond", arm: "God's foresight of faith (conditional)", open: "Usually corporate: the people in Christ" },
          { q: "Can grace be resisted?", cal: "@no Efficacious for the elect", mol: "@yes", arm: "@yes", open: "@yes" },
          { q: "Representative thinkers", cal: "John Calvin, Jonathan Edwards", mol: "Luis de Molina, Alvin Plantinga, William Lane Craig", arm: "Jacobus Arminius, John Wesley", open: "Clark Pinnock, Gregory Boyd, John Sanders" },
        ]}
      />
    </VisualCard>
  )
}

function MolinistOrder() {
  return (
    <VisualCard
      title="The logical order of God's knowledge in Molinism"
      subtitle="Not a sequence in time but in logic: what each kind of knowledge depends on."
      sources={[{ label: "Internet Encyclopedia of Philosophy, \"Middle Knowledge\"", url: "https://iep.utm.edu/middlekn/" }]}
    >
      <StepStrip
        steps={[
          { label: "First", title: "Natural knowledge", body: "Everything that could be: all possibilities. Independent of God's will." },
          { label: "Second", title: "Middle knowledge", body: "Everything that would be: what each free creature would do in each circumstance. Also independent of God's will." },
          { label: "Then", title: "The creative decree", body: "God freely chooses which world to make actual." },
          { label: "Finally", title: "Free knowledge", body: "Everything that will be: the actual future, dependent on God's choice." },
        ]}
      />
    </VisualCard>
  )
}

function Tulip() {
  return (
    <VisualCard
      title="The Remonstrants and the Synod of Dort"
      subtitle="The Five Articles of Remonstrance (1610) set out the Arminian position; the Synod of Dort (1618-19) answered them point by point. The acronym TULIP is a much later English summary of Dort's answers."
      sources={[
        { label: "Wikipedia, \"Five Articles of Remonstrance\"", url: "https://en.wikipedia.org/wiki/Five_Articles_of_Remonstrance" },
        { label: "Wikipedia, \"Canons of Dort\"", url: "https://en.wikipedia.org/wiki/Canons_of_Dort" },
      ]}
    >
      <CompareTable
        minWidth="40rem"
        columns={[
          { key: "topic", label: "Question" },
          { key: "rem", label: "Remonstrants (1610)" },
          { key: "dort", label: "Dort (1619), the TULIP letter" },
        ]}
        rows={[
          { topic: "Human ability", rem: "Fallen people cannot think or do any saving good without grace", dort: "**T**otal depravity: the same inability, stated more strongly" },
          { topic: "Election", rem: "Conditional: God elects those he foresees will believe", dort: "**U**nconditional election" },
          { topic: "Atonement", rem: "Christ died for all, though only believers benefit", dort: "**L**imited (particular) atonement: effective for the elect" },
          { topic: "Grace", rem: "Resistible", dort: "**I**rresistible grace" },
          { topic: "Perseverance", rem: "Left open whether believers can fall away", dort: "**P**erseverance of the saints" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  spectrum: Spectrum,
  systems: Systems,
  "molinist-order": MolinistOrder,
  tulip: Tulip,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
