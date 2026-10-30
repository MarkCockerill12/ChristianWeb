"use client"

import { useState } from "react"

import { CardGrid, CompareTable, Rich, StepStrip, VisualCard } from "@/components/visuals/kit"
import { Figure } from "@/components/visuals/figure"
import { cn } from "@/lib/utils"

type NodeId = "P" | "F" | "S" | "D"

const NODES: Record<NodeId, { x: number; y: number; label: string; latin: string }> = {
  P: { x: 80, y: 78, label: "Father", latin: "Pater" },
  F: { x: 320, y: 78, label: "Son", latin: "Filius" },
  S: { x: 200, y: 318, label: "Holy Spirit", latin: "Spiritus Sanctus" },
  D: { x: 200, y: 160, label: "God", latin: "Deus" },
}

const LINKS: ReadonlyArray<{ a: NodeId; b: NodeId; is: boolean; claim: string; texts: string }> = [
  { a: "P", b: "D", is: true, claim: "The Father is God", texts: "\"Grace and peace to you from God our Father\" (1 Corinthians 1:3); \"from everlasting to everlasting you are God\" (Psalm 90:2)." },
  { a: "F", b: "D", is: true, claim: "The Son is God", texts: "\"The Word was God\" (John 1:1); \"My Lord and my God!\" (John 20:28); \"Your throne, O God\" said to the Son (Hebrews 1:8)." },
  { a: "S", b: "D", is: true, claim: "The Holy Spirit is God", texts: "Lying to the Holy Spirit is lying to God (Acts 5:3-4); the Spirit searches the deep things of God (1 Corinthians 2:10-11)." },
  { a: "P", b: "F", is: false, claim: "The Father is not the Son", texts: "The Son prays to the Father and asks for the glory he had with him before the world began (John 17:1-5)." },
  { a: "F", b: "S", is: false, claim: "The Son is not the Holy Spirit", texts: "The Son asks the Father to send \"another advocate\" (John 14:16-17); at the baptism the Son is in the water while the Spirit descends (Matthew 3:16-17)." },
  { a: "S", b: "P", is: false, claim: "The Holy Spirit is not the Father", texts: "The Spirit \"goes out from the Father\" and is sent by the Son (John 15:26)." },
]

function Shield() {
  const [active, setActive] = useState(0)
  const link = LINKS[active]
  const edgeKey = (i: number) => `${LINKS[i].a}${LINKS[i].b}`

  return (
    <VisualCard
      title="The Shield of the Trinity"
      subtitle="The medieval *Scutum Fidei* diagram: each person **is** God, and no person **is** another. Select a line to see the texts behind it."
      note="The earliest surviving copy is in a manuscript of Peter of Poitiers' *Compendium historiae*, about 1208-1216, pictured above."
      sources={[
        { label: "Wikipedia, \"Shield of the Trinity\"", url: "https://en.wikipedia.org/wiki/Shield_of_the_Trinity" },
        { label: "Cotton Faustina B VII, f. 42v (British Library), via Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:PetrusPictaviensis_CottonFaustinaBVII-folio42v_ScutumFidei_early13thc.jpg" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
        <svg viewBox="0 0 400 380" className="w-full max-w-md mx-auto" role="img" aria-label="Shield of the Trinity diagram">
          {LINKS.map((l, i) => {
            const a = NODES[l.a]
            const b = NODES[l.b]
            const on = i === active
            const mx = (a.x + b.x) / 2
            const my = (a.y + b.y) / 2
            return (
              <g key={edgeKey(i)} onClick={() => setActive(i)} className="cursor-pointer">
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="transparent" strokeWidth={22} />
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={l.is ? "var(--viz-1)" : "var(--viz-2)"}
                  strokeWidth={on ? 5 : 3}
                  strokeLinecap="round"
                  opacity={on ? 1 : 0.55}
                />
                <rect x={mx - 26} y={my - 11} width={52} height={22} rx={11} fill="var(--viz-surface)" stroke={l.is ? "var(--viz-1)" : "var(--viz-2)"} strokeWidth={on ? 2 : 1} />
                <text x={mx} y={my + 4.5} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--viz-ink)">
                  {l.is ? "is" : "is not"}
                </text>
              </g>
            )
          })}
          {(Object.keys(NODES) as NodeId[]).map((k) => {
            const n = NODES[k]
            const lit = link.a === k || link.b === k
            return (
              <g key={k}>
                <circle cx={n.x} cy={n.y} r={k === "D" ? 40 : 46} fill="var(--viz-plane)" stroke={lit ? "var(--viz-ink)" : "var(--viz-axis)"} strokeWidth={lit ? 2.5 : 1.5} />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize={15} fontWeight={700} fill="var(--viz-ink)">
                  {n.label}
                </text>
                <text x={n.x} y={n.y + 15} textAnchor="middle" fontSize={11} fontStyle="italic" fill="var(--viz-muted)">
                  {n.latin}
                </text>
              </g>
            )
          })}
        </svg>
        <div>
          <div className="viz-info rounded-lg border p-4" aria-live="polite">
            <div className="text-lg font-semibold">{link.claim}</div>
            <Rich as="p" text={link.texts} className="text-sm leading-relaxed mt-2 text-[color:var(--viz-ink-2)]" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {LINKS.map((l, i) => (
              <button key={edgeKey(i)} type="button" onClick={() => setActive(i)} className={cn("viz-chip", i === active && "viz-chip-active")} aria-pressed={i === active}>
                {l.claim}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-xs">
        <Figure
          image={{
            src: "/images/trinity/scutum-fidei-1210.jpg",
            width: 600,
            height: 690,
            alt: "Thirteenth-century manuscript drawing of the Shield of the Trinity",
            caption: "The oldest known Shield of the Trinity, c. 1210, in a manuscript of Peter of Poitiers (British Library, Cotton Faustina B VII).",
            credit: "13th-century scribe",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:PetrusPictaviensis_CottonFaustinaBVII-folio42v_ScutumFidei_early13thc.jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

function AttributeMatrix() {
  return (
    <VisualCard
      title="The same divine attributes and works, for each person"
      subtitle="Where Scripture ascribes what belongs only to God to the Father, to the Son and to the Spirit alike. Each cell gives one text; most have several."
    >
      <CompareTable
        minWidth="44rem"
        columns={[
          { key: "attr", label: "Attribute or work" },
          { key: "father", label: "Father" },
          { key: "son", label: "Son" },
          { key: "spirit", label: "Holy Spirit" },
        ]}
        rows={[
          { attr: "Called God", father: "1 Corinthians 1:3", son: "John 1:1; John 20:28", spirit: "Acts 5:3-4" },
          { attr: "Eternal", father: "Psalm 90:2", son: "John 17:5", spirit: "Hebrews 9:14 (\"the eternal Spirit\")" },
          { attr: "Creator", father: "1 Corinthians 8:6", son: "Colossians 1:16; John 1:3", spirit: "Genesis 1:2; Job 33:4" },
          { attr: "Present everywhere", father: "Jeremiah 23:24", son: "Matthew 28:20", spirit: "Psalm 139:7-10" },
          { attr: "Knows all things", father: "1 John 3:20", son: "John 21:17", spirit: "1 Corinthians 2:10-11" },
          { attr: "Raised Jesus from the dead", father: "Galatians 1:1", son: "John 2:19; John 10:17-18", spirit: "Romans 8:11" },
          { attr: "Dwells in believers", father: "John 14:23", son: "Colossians 1:27", spirit: "1 Corinthians 3:16; John 14:17" },
        ]}
      />
    </VisualCard>
  )
}

function Heresies() {
  return (
    <VisualCard
      title="Four ways to get it wrong, and the analogies that fall into them"
      subtitle="Most popular analogies for the Trinity, pressed literally, land in one of the positions the early church rejected."
      sources={[
        { label: "Wikipedia, \"Sabellianism\"", url: "https://en.wikipedia.org/wiki/Sabellianism" },
        { label: "Wikipedia, \"Arianism\"", url: "https://en.wikipedia.org/wiki/Arianism" },
        { label: "Wikipedia, \"Tritheism\"", url: "https://en.wikipedia.org/wiki/Tritheism" },
        { label: "Wikipedia, \"Trinity\" (analogies and their limits)", url: "https://en.wikipedia.org/wiki/Trinity" },
      ]}
    >
      <CardGrid
        columns={4}
        cards={[
          { kicker: "Modalism", title: "One person, three modes", body: "God is one person who appears as Father, then Son, then Spirit, never all three at once. Sabellius was excommunicated at Rome about 220 and the Sabellians anathematised at Constantinople (381).", footer: "**Analogy that falls into it:** water as ice, liquid and steam; one man who is a father, a son and a husband." },
          { kicker: "Partialism", title: "Three parts of one God", body: "Each person is a third of God, and only together are they fully God. Denies that each person is wholly God.", footer: "**Analogy that falls into it:** a shamrock's three leaves, or an egg's shell, white and yolk." },
          { kicker: "Tritheism", title: "Three separate gods", body: "Three divine beings who agree with one another. Denies the one divine being (ousia) shared by all three.", footer: "**Analogy that falls into it:** three people sharing one human nature, such as a committee or a family." },
          { kicker: "Arianism", title: "The Son is created", body: "The Son is the first and highest creature, not eternal: \"there was when he was not\". Condemned at Nicaea (325).", footer: "**Analogy that falls into it:** the sun and its light, if taken to mean the light came later and is lesser." },
        ]}
      />
    </VisualCard>
  )
}

function Councils() {
  return (
    <VisualCard
      title="How the language developed"
      subtitle="The doctrine was not voted into existence; the vocabulary was developed to state it against rival readings."
      sources={[
        { label: "Wikipedia, \"Trinity\" (Theophilus of Antioch, late 2nd century)", url: "https://en.wikipedia.org/wiki/Trinity" },
        { label: "Wikipedia, \"Tertullian\" (first Latin writer known to use trinitas)", url: "https://en.wikipedia.org/wiki/Tertullian" },
        { label: "Wikipedia, \"Filioque\" (Third Council of Toledo, 589)", url: "https://en.wikipedia.org/wiki/Filioque" },
        { label: "Wikipedia, \"First Council of Constantinople\"", url: "https://en.wikipedia.org/wiki/First_Council_of_Constantinople" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "Late 2nd c.", title: "Theophilus of Antioch", body: "First writer recorded using the word \"Trinity\" (Greek *trias*)." },
          { label: "c. 200-220", title: "Tertullian", body: "First Latin writer known to use *trinitas*; writes against modalism in *Against Praxeas*." },
          { label: "AD 325", title: "Nicaea", body: "The Son is *homoousios*, of the same being as the Father, against Arius." },
          { label: "AD 381", title: "Constantinople", body: "Creed expanded: the Spirit is \"worshipped and glorified\" with the Father and the Son." },
          { label: "AD 589", title: "Toledo", body: "*Filioque* (\"and the Son\") added in the West; later a cause of the 1054 schism." },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  shield: Shield,
  attributes: AttributeMatrix,
  heresies: Heresies,
  councils: Councils,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
