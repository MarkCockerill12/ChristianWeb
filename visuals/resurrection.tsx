"use client"

import { CardGrid, ClaimLegend, CompareTable, StepStrip, VisualCard } from "@/components/visuals/kit"
import { RangeChart } from "@/components/visuals/charts"
import { Gallery } from "@/components/visuals/figure"

const HABERMAS = { label: "Gary Habermas, \"The Minimal Facts Approach to the Resurrection of Jesus\" (2012)", url: "http://www.garyhabermas.com/articles/Habermas_Minimal%20Facts%20STR%202012.pdf" }
const CROSSEXAMINED = { label: "Cross Examined, \"The Minimal Facts of the Resurrection\"", url: "https://crossexamined.org/the-minimal-facts-of-the-resurrection/" }
const EHRMAN = { label: "Bart Ehrman, \"Jesus' Resurrection\"", url: "https://www.bartehrman.com/jesus-resurrection/" }

function MinimalFacts() {
  return (
    <VisualCard
      title="The five facts at a glance"
      subtitle="The facts the minimal facts argument builds on, with how widely critical scholars grant each one."
      sources={[HABERMAS, CROSSEXAMINED, EHRMAN]}
    >
      <ClaimLegend levels={["established", "strong"]} />
      <CardGrid
        columns={3}
        cards={[
          { kicker: "Fact 1", title: "Jesus died by crucifixion", level: "established", body: "Attested by all four Gospels, Paul, Josephus and Tacitus. No early opponent denied it." },
          { kicker: "Fact 2", title: "He was buried", level: "strong", body: "Granted by a clear majority. Crossan and Ehrman are among those who doubt the Joseph of Arimathea tradition." },
          { kicker: "Fact 3", title: "The tomb was found empty", level: "strong", body: "Granted by a clear majority, disputed by a significant minority. Implied by \"buried... raised\" in 1 Corinthians 15:3-4." },
          { kicker: "Fact 4", title: "The disciples believed they saw him risen", level: "established", body: "Conceded even by sceptics such as Lüdemann, Ehrman and Fredriksen, who explain the experiences differently." },
          { kicker: "Fact 5", title: "Sceptics and enemies were transformed", level: "established", body: "The disciples became bold preachers; James, a sceptic (John 7:5), and Paul, a persecutor, became leaders of the church." },
        ]}
      />
    </VisualCard>
  )
}

const FACTS = [
  { key: "theory", label: "Explanation" },
  { key: "death", label: "Death by crucifixion" },
  { key: "tomb", label: "Empty tomb" },
  { key: "appear", label: "Group appearances" },
  { key: "paul", label: "Paul's conversion" },
  { key: "james", label: "James's conversion" },
  { key: "change", label: "Disciples willing to die" },
] as const

function TheoryScorecard() {
  return (
    <VisualCard
      title="Which explanation accounts for all the facts?"
      subtitle="Each alternative theory scored against the minimal facts. These are the assessments of Christian historians such as Habermas and Licona; sceptical scholars contest several cells, especially group appearances."
      note="Green tick: explains the fact. Amber dash: explains it only with extra assumptions. Red cross: fails to explain it, or denies it."
      sources={[HABERMAS, CROSSEXAMINED, EHRMAN, { label: "David Strauss, The Life of Jesus Critically Examined (the classic rebuttal of the swoon theory)", url: "https://www.gutenberg.org/files/64037/64037-h/64037-h.htm" }]}
    >
      <CompareTable
        minWidth="52rem"
        compact
        columns={FACTS.map((f) => ({ key: f.key, label: f.label }))}
        rows={[
          { theory: "**Swoon** (Jesus fainted)", death: "@no Denies it, against Roman practice and the spear wound", tomb: "@yes", appear: "@partial A wounded survivor, not a conquering Lord", paul: "@no", james: "@partial", change: "@partial" },
          { theory: "**Hallucination**", death: "@yes", tomb: "@no The body would still be in the tomb", appear: "@partial Disputed: critics cite collective visions", paul: "@no A persecutor, years later", james: "@no A sceptic, not a grieving follower", change: "@partial" },
          { theory: "**Stolen body** (conspiracy)", death: "@yes", tomb: "@yes", appear: "@no", paul: "@no", james: "@no", change: "@no No one dies for a known lie" },
          { theory: "**Wrong tomb**", death: "@yes", tomb: "@partial Only if no one checked the right one", appear: "@no", paul: "@no", james: "@no", change: "@no" },
          { theory: "**Legend** (later development)", death: "@yes", tomb: "@partial", appear: "@no The creed lists appearances within a few years", paul: "@no Paul writes as a witness", james: "@no", change: "@no" },
          { theory: "**Alien removal**", death: "@yes", tomb: "@yes", appear: "@no", paul: "@no", james: "@no", change: "@no" },
          { theory: "**Resurrection**", death: "@yes", tomb: "@yes", appear: "@yes", paul: "@yes", james: "@yes", change: "@yes" },
        ]}
      />
    </VisualCard>
  )
}

function SourceDistance() {
  return (
    <VisualCard
      title="How soon were the sources written?"
      subtitle="Years between the event and each surviving written source, for Jesus (taking the crucifixion as AD 30) and for Alexander the Great (died 323 BC). Mainstream critical dates are used for the Gospels; traditional dates are earlier."
      note="The Alexander biographies drew on earlier eyewitness-era histories by Ptolemy and Aristobulus that are now lost. The comparison is between surviving sources."
      sources={[
        { label: "Wikipedia, \"Pauline epistles\" (dates of the undisputed letters)", url: "https://en.wikipedia.org/wiki/Pauline_epistles" },
        { label: "Wikipedia, \"Gospel of Mark\"", url: "https://en.wikipedia.org/wiki/Gospel_of_Mark" },
        { label: "Wikipedia, \"Gospel of Luke\"", url: "https://en.wikipedia.org/wiki/Gospel_of_Luke" },
        { label: "Wikipedia, \"Historiography of Alexander the Great\"", url: "https://en.wikipedia.org/wiki/Historiography_of_Alexander_the_Great" },
        { label: "Commentaries on 1 Corinthians 15:3 (Bible Hub)", url: "https://biblehub.com/commentaries/1_corinthians/15-3.htm" },
      ]}
    >
      <RangeChart
        min={0}
        max={480}
        ticks={[0, 50, 100, 200, 300, 400]}
        format={(n) => `${n} yrs`}
        groups={["Jesus", "Alexander the Great"]}
        labelWidth={190}
        items={[
          { label: "Creed of 1 Corinthians 15:3-7", start: 2, end: 5, group: "Jesus", display: "2-5 yrs", note: "Received by Paul, most likely on his visit to Jerusalem (Galatians 1:18)." },
          { label: "Paul's letters", start: 20, end: 27, group: "Jesus", display: "c. AD 50-57" },
          { label: "Gospel of Mark", start: 36, end: 44, group: "Jesus", display: "c. AD 66-74" },
          { label: "Matthew and Luke", start: 50, end: 60, group: "Jesus", display: "c. AD 80-90" },
          { label: "Gospel of John", start: 60, end: 80, group: "Jesus", display: "c. AD 90-110" },
          { label: "Josephus, Antiquities", start: 63, end: 64, group: "Jesus", display: "AD 93-94" },
          { label: "Tacitus, Annals", start: 86, group: "Jesus", display: "c. AD 116" },
          { label: "Diodorus Siculus", start: 263, end: 293, group: "Alexander the Great", display: "1st c. BC" },
          { label: "Quintus Curtius Rufus", start: 360, end: 390, group: "Alexander the Great", display: "1st c. AD" },
          { label: "Plutarch, Life of Alexander", start: 420, end: 440, group: "Alexander the Great", display: "c. AD 100-120" },
          { label: "Arrian, Anabasis", start: 450, end: 470, group: "Alexander the Great", display: "2nd c. AD" },
        ]}
      />
    </VisualCard>
  )
}

function Apostles() {
  return (
    <VisualCard
      title="Did the apostles die for their claim?"
      subtitle="Sean McDowell's ratings of how likely each apostle's martyrdom is, on his ten-point scale from *The Fate of the Apostles*. The argument needs only that they were willing to suffer for what they said they had seen."
      sources={[{ label: "Sean McDowell, \"Did the Apostles Really Die as Martyrs for Their Faith?\" (Christian Research Institute)", url: "https://www.equip.org/articles/apostles-really-die-martyrs-faith/" }, { label: "Historical Evaluation of the Evidence for the Death of the Apostles (Boyce Digital Repository)", url: "https://repository.sbts.edu/handle/10392/4857" }]}
    >
      <CompareTable
        compact
        minWidth="32rem"
        columns={[
          { key: "who", label: "Apostle" },
          { key: "rating", label: "McDowell's rating" },
          { key: "score", label: "Scale", numeric: true },
        ]}
        rows={[
          { who: "Peter", rating: "!established Highest possible probability", score: "9-10" },
          { who: "Paul", rating: "!established Highest possible probability", score: "9-10" },
          { who: "James, son of Zebedee", rating: "!established Highest possible probability (Acts 12:2)", score: "9-10" },
          { who: "James, brother of Jesus", rating: "!established Highest possible probability (Josephus, Antiquities 20.200)", score: "9-10" },
          { who: "Thomas", rating: "!strong More probable than not", score: "7" },
          { who: "Andrew", rating: "!debated More plausible than not", score: "6" },
          { who: "Philip, Bartholomew, Matthew, James son of Alphaeus, Thaddeus, Simon the Zealot, Matthias", rating: "!debated As plausible as not", score: "5" },
          { who: "John", rating: "!weak Improbable (tradition says he died of old age)", score: "3" },
        ]}
      />
    </VisualCard>
  )
}

function Persecution() {
  return (
    <VisualCard title="From persecuted sect to state religion" subtitle="The milestones in the persecution of the church described above.">
      <StepStrip
        steps={[
          { label: "AD 64", title: "Nero", body: "Blames Christians for the Great Fire of Rome." },
          { label: "AD 250", title: "Decius", body: "First empire-wide persecution." },
          { label: "AD 303", title: "Diocletian", body: "The Great Persecution: churches destroyed, scriptures burned." },
          { label: "AD 311-313", title: "Toleration", body: "Galerius's edict, then the Milan agreement of Constantine and Licinius." },
          { label: "AD 380", title: "Theodosius I", body: "Edict of Thessalonica makes Nicene Christianity the state religion." },
        ]}
      />
    </VisualCard>
  )
}

function Places() {
  return (
    <VisualCard
      title="Places and artefacts"
      subtitle="The traditional site of the tomb, and an inscription once linked to the resurrection."
      sources={[
        { label: "Wikipedia, \"Church of the Holy Sepulchre\"", url: "https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre" },
        { label: "Harper et al., \"Establishing the provenance of the Nazareth Inscription\", Journal of Archaeological Science: Reports 30 (2020)", url: "https://hal.univ-lorraine.fr/hal-02934970v1/document" },
        { label: "Science News, \"The Nazareth Inscription's origins may refute ties to Jesus' resurrection\"", url: "https://www.sciencenews.org/article/nazareth-inscription-origins-may-refute-ties-jesus-resurrection" },
      ]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/resurrection/holy-sepulchre-aedicule.jpg",
            width: 1000,
            height: 667,
            alt: "The Aedicule shrine inside the Church of the Holy Sepulchre",
            caption: "The Aedicule in the Church of the Holy Sepulchre, Jerusalem, built over the rock-cut tomb identified as Jesus' burial place since Constantine's excavation in the 320s.",
            credit: "Gary Todd",
            license: "CC0",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Church_of_the_Holy_Sepulchre_The_Aedicule,_Which_Contains_the_Holy_Sepulchre_Itself_(28431087277).jpg",
          },
          {
            src: "/images/resurrection/nazareth-inscription.jpg",
            width: 800,
            height: 1233,
            alt: "Marble slab bearing the Greek text of the Nazareth Inscription",
            caption: "The Nazareth Inscription, an imperial edict making tomb-robbing a capital offence, long linked to reports of Jesus' empty tomb. A 2020 isotope study traced the marble to the Greek island of Kos, which makes that link unlikely.",
            credit: "F. Cumont (1930)",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Nazareth_Inscription.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "minimal-facts": MinimalFacts,
  "theory-scorecard": TheoryScorecard,
  "source-distance": SourceDistance,
  apostles: Apostles,
  persecution: Persecution,
  places: Places,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
