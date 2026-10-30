"use client"

import { CompareTable, Rich, VisualCard } from "@/components/visuals/kit"
import { Figure } from "@/components/visuals/figure"
import { SERIES } from "@/components/visuals/charts"

type Step = "Faith" | "Repentance" | "Baptism" | "Spirit" | "Hands laid on"

const STEP_COLOR: Record<Step, string> = {
  Faith: SERIES[0],
  Repentance: SERIES[0],
  Baptism: SERIES[2],
  Spirit: SERIES[6],
  "Hands laid on": SERIES[3],
}

const ACCOUNTS: ReadonlyArray<{ ref: string; who: string; steps: readonly Step[]; note: string }> = [
  { ref: "Acts 2:37-41", who: "The crowd at Pentecost", steps: ["Repentance", "Baptism", "Spirit"], note: "The Spirit is promised to those who repent and are baptised." },
  { ref: "Acts 8:12-17", who: "The Samaritans", steps: ["Faith", "Baptism", "Hands laid on", "Spirit"], note: "Baptised by Philip; the Spirit comes later, when Peter and John lay hands on them." },
  { ref: "Acts 8:35-38", who: "The Ethiopian official", steps: ["Faith", "Baptism"], note: "The Spirit is not mentioned. Verse 37, his confession, is missing from the earliest manuscripts." },
  { ref: "Acts 9:17-18; 22:16", who: "Saul of Tarsus", steps: ["Faith", "Baptism"], note: "Ananias comes so that Saul may see again and \"be filled with the Holy Spirit\"; the filling is not narrated. He is baptised and told to \"wash your sins away\"." },
  { ref: "Acts 10:44-48", who: "Cornelius's household", steps: ["Faith", "Spirit", "Baptism"], note: "The Spirit falls while Peter is still speaking; baptism follows as recognition." },
  { ref: "Acts 16:14-15", who: "Lydia and her household", steps: ["Faith", "Baptism"], note: "\"The Lord opened her heart\"; the Spirit is not mentioned." },
  { ref: "Acts 16:30-34", who: "The Philippian jailer", steps: ["Faith", "Baptism"], note: "Baptised \"at once\", that same hour of the night." },
  { ref: "Acts 19:1-6", who: "Disciples at Ephesus", steps: ["Faith", "Baptism", "Hands laid on", "Spirit"], note: "They had received only John's baptism; baptised in Jesus' name, then Paul lays hands on them." },
]

function ActsOrder() {
  return (
    <VisualCard
      title="The order of events in each conversion in Acts"
      subtitle="Both sides of the debate cite Acts. Set side by side, the accounts show no single fixed sequence of faith, baptism and the Spirit."
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-[color:var(--viz-ink-2)]">
        {(["Faith", "Baptism", "Hands laid on", "Spirit"] as const).map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: STEP_COLOR[s] }} />
            {s === "Faith" ? "Faith or repentance" : s === "Spirit" ? "Holy Spirit received" : s}
          </span>
        ))}
      </div>
      <div className="divide-y divide-[color:var(--viz-grid)] border-y border-[color:var(--viz-grid)]">
        {ACCOUNTS.map((a) => (
          <div key={a.ref} className="grid gap-2 py-2.5 sm:grid-cols-[13rem_minmax(0,1fr)] items-start">
            <div>
              <div className="font-semibold text-sm">{a.who}</div>
              <Rich text={a.ref} className="text-[12px]" />
            </div>
            <div>
              <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0" aria-label={`Order: ${a.steps.join(", then ")}`}>
                {a.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-1">
                    {i > 0 && <span className="text-[color:var(--viz-muted)] text-xs" aria-hidden>then</span>}
                    <span className="rounded-md px-2 py-0.5 text-[12px] font-semibold text-white" style={{ background: STEP_COLOR[s] }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
              <Rich as="p" text={a.note} className="text-[12px] mt-1 text-[color:var(--viz-ink-2)] leading-snug" />
            </div>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function Traditions() {
  return (
    <VisualCard
      title="What each tradition teaches about baptism"
      subtitle={"Sort or filter the table to compare. \"Necessary\" means necessary for salvation in the ordinary course; every tradition that says yes allows that God is not bound by the rite."}
      sources={[
        { label: "Catechism of the Catholic Church, 1213-1284", url: "https://www.vatican.va/archive/ENG0015/__P3G.HTM" },
        { label: "Orthodox Church in America, \"Baptism\"", url: "https://www.oca.org/orthodoxy/the-orthodox-faith/worship/the-sacraments/baptism" },
        { label: "Augsburg Confession, Article IX", url: "https://bookofconcord.org/augsburg-confession/article-ix/" },
        { label: "Church of England, Book of Common Prayer catechism (\"generally necessary to salvation\")", url: "https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer/catechism" },
        { label: "Westminster Confession of Faith, chapter 28 (Orthodox Presbyterian Church)", url: "https://www.opc.org/wcf.html" },
        { label: "United Methodist Church, \"By Water and the Spirit\"", url: "https://www.umc.org/content/by-water-and-the-spirit-a-united-methodist-understanding-of-baptism" },
        { label: "Baptist Faith and Message 2000, Article VII", url: "https://bfm.sbc.net/bfm2000/" },
        { label: "Wikipedia, \"Churches of Christ\"", url: "https://en.wikipedia.org/wiki/Churches_of_Christ" },
        { label: "Assemblies of God, Statement of Fundamental Truths", url: "https://ag.org/Beliefs/Statement-of-Fundamental-Truths" },
      ]}
    >
      <CompareTable
        minWidth="52rem"
        compact
        filterKeys={["infants"]}
        columns={[
          { key: "t", label: "Tradition" },
          { key: "necessary", label: "Necessary?" },
          { key: "infants", label: "Infants" },
          { key: "mode", label: "Usual mode" },
          { key: "does", label: "What it does" },
        ]}
        rows={[
          { t: "Catholic", necessary: "@yes With baptism of desire and of blood", infants: "Baptised", mode: "Pouring; immersion permitted", does: "Regenerates, removes original and personal sin" },
          { t: "Eastern Orthodox", necessary: "@yes", infants: "Baptised", mode: "Triple immersion", does: "New birth, given with chrismation and first communion" },
          { t: "Lutheran", necessary: "@yes \"Necessary to salvation\" (Augsburg IX)", infants: "Baptised", mode: "Pouring", does: "Grace offered and received; regeneration" },
          { t: "Anglican", necessary: "@yes \"Generally necessary\" (BCP catechism)", infants: "Baptised", mode: "Pouring", does: "Regeneration in the rite's own language" },
          { t: "Reformed and Presbyterian", necessary: "@no Grace and salvation are \"not so inseparably annexed\" to it (WCF 28.5)", infants: "Baptised", mode: "Sprinkling or pouring", does: "Sign and seal of the covenant" },
          { t: "Methodist", necessary: "@partial \"Neither essential to nor sufficient for\" salvation, but the ordinary means", infants: "Baptised", mode: "Any mode", does: "A means of grace" },
          { t: "Baptist", necessary: "@no", infants: "Not baptised", mode: "Immersion", does: "An act of obedience picturing death and resurrection with Christ" },
          { t: "Churches of Christ", necessary: "@yes For the forgiveness of sins", infants: "Not baptised", mode: "Immersion", does: "The point at which sins are forgiven" },
          { t: "Pentecostal", necessary: "@no", infants: "Not baptised", mode: "Immersion", does: "An ordinance of obedience" },
        ]}
      />
    </VisualCard>
  )
}

function Dura() {
  return (
    <VisualCard
      title="The oldest known Christian baptistery"
      subtitle="Dura-Europos on the Euphrates, where a house was converted into a church around 232 and buried when the city fell in 256."
      sources={[{ label: "Wikipedia, \"Dura-Europos church\"", url: "https://en.wikipedia.org/wiki/Dura-Europos_church" }]}
    >
      <div className="max-w-2xl">
        <Figure
          image={{
            src: "/images/baptism/dura-baptistery.jpg",
            width: 900,
            height: 626,
            alt: "Reconstructed room with a font under a painted canopy and fragments of wall paintings",
            caption: "The Dura-Europos baptistery as reconstructed at the Yale University Art Gallery: the font under its painted canopy on the left, and on the wall the women approaching the tomb.",
            credit: "Yale University Art Gallery, Dura-Europos archive",
            license: "CC0",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Dura-Europos_archival_photograph,_YUAG_negative_number_dura-ds42~01_-object-id-14205.jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "acts-order": ActsOrder,
  traditions: Traditions,
  dura: Dura,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
