"use client"

import { BarChart, RangeChart } from "@/components/visuals/charts"
import { ClaimLegend, CompareTable, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"
import { PinMap } from "@/components/visuals/geo"
import { NEAREAST } from "@/components/visuals/maps/neareast"

const WIKI = (page: string, label = page.replace(/_/g, " ")) => ({ label: `Wikipedia, "${label}"`, url: `https://en.wikipedia.org/wiki/${page}` })

function Compare() {
  return (
    <VisualCard
      title="Jesus and Muhammad, side by side"
      subtitle="Each founder as his own earliest sources describe him. Muslims count Muhammad as the model to follow (Quran 33:21), and Christians so count Jesus."
    >
      <CompareTable
        minWidth="44rem"
        compact
        columns={[
          { key: "q", label: "" },
          { key: "j", label: "Jesus" },
          { key: "m", label: "Muhammad" },
        ]}
        rows={[
          { q: "Power", j: "Refused a kingdom and ruled nothing (John 18:36)", m: "Became ruler and commander at Medina from 622" },
          { q: "Violence", j: "\"Put your sword back\" (Matthew 26:52); killed no one", m: "Led and ordered battles and raids; ordered the killing of critics" },
          { q: "Enemies", j: "\"Father, forgive them\" (Luke 23:34)", m: "Accepted the execution of the men of the Banu Qurayza" },
          { q: "Marriage", j: "Never married", m: "Many wives, one of them married at six and taken at nine" },
          { q: "Death", j: "Crucified by his enemies, willingly, for others", m: "Died in Medina as head of a state" },
          { q: "Afterwards", j: "Reported raised from the dead", m: "Buried in Medina, where his tomb is visited" },
          { q: "How he spread", j: "A persecuted movement for three centuries", m: "Arabia unified by arms within his lifetime and the Near East conquered within a generation" },
          { q: "Earliest sources", j: "Letters about 20 years later and Gospels within about 40 to 65", m: "The Quran's text fixed about 20 years later; the first surviving biography about 200 years later" },
        ]}
      />
    </VisualCard>
  )
}

function Errors() {
  return (
    <VisualCard
      title="Claims that are wrong as stated"
      subtitle="The problems that do not depend on how an Arabic word is translated, with the usual Muslim answer and why it falls short. Each is examined in the sections below."
    >
      <ClaimLegend levels={["fails", "weak"]} />
      <CompareTable
        minWidth="58rem"
        compact
        filterKeys={["kind"]}
        columns={[
          { key: "claim", label: "The claim" },
          { key: "ref", label: "Source" },
          { key: "fact", label: "What is known" },
          { key: "reply", label: "Usual reply" },
          { key: "kind", label: "Kind" },
          { key: "level", label: "Standing" },
        ]}
        rows={[
          { claim: "Semen comes from between the backbone and the ribs", ref: "Quran 86:6-7", fact: "Made in the testes, with fluid from the prostate and seminal vesicles", reply: "The testes begin near the kidneys in the embryo, long before any semen exists", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "The moon was split in two as a sign", ref: "Quran 54:1; Bukhari 3637", fact: "No record outside Islam; no physical evidence", reply: "A future event, or seen only locally, which the hadith excludes", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "The sun bows beneath God's throne each night", ref: "Bukhari 3199; Abu Dawud 4002", fact: "The earth rotates; the sun does not travel to a resting place", reply: "A metaphor, though it is his own answer to where the sun goes", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "Shooting stars are missiles thrown at devils", ref: "Quran 67:5; 37:6-10", fact: "Meteors are grains of rock and dust burning in the atmosphere", reply: "Unseen spiritual events accompany them", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "Adam was 60 cubits tall, and humans have shrunk since", ref: "Bukhari 3326", fact: "Early human skeletons are ordinary in height", reply: "Few answers offered; some set the report aside", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "Which parent climaxes first decides resemblance", ref: "Bukhari 3329", fact: "Children inherit through genes from both parents", reply: "Read figuratively, or rejected as a report", kind: "Science", level: "!fails Claim stands refuted" },
          { claim: "Jesus was not crucified", ref: "Quran 4:157", fact: "Reported by every first-century source, Christian and not", reply: "God deceived the witnesses, which raises a worse problem", kind: "History", level: "!fails Claim stands refuted" },
          { claim: "Fixed inheritance shares that exceed the estate", ref: "Quran 4:11-12", fact: "Two daughters, both parents and a wife come to 27/24", reply: "Reduce all shares proportionally, a human ruling not in the text", kind: "Internal", level: "!fails Claim stands refuted" },
          { claim: "Christians should judge by a Gospel that contradicts the Quran", ref: "Quran 5:47; 10:94; 6:115", fact: "Manuscripts of that Gospel survive from 300 years before Muhammad", reply: "The Gospel was corrupted, which the same verses exclude", kind: "Internal", level: "!fails Claim stands refuted" },
          { claim: "Mary is \"sister of Aaron\"", ref: "Quran 19:28", fact: "Moses' sister lived many centuries earlier", reply: "People were named after earlier prophets (Muslim 2135)", kind: "History", level: "!weak Has a standard reply" },
          { claim: "Haman served Pharaoh", ref: "Quran 28:38", fact: "The Bible's Haman is a Persian official many centuries later", reply: "A different man of the same name", kind: "History", level: "!weak Has a standard reply" },
        ]}
      />
    </VisualCard>
  )
}

function Timeline() {
  return (
    <VisualCard
      title="The life of Muhammad"
      subtitle="The dates traditional Muslim sources give. The longest of these sources were written more than a century after his death."
      sources={[WIKI("Muhammad"), WIKI("Hijrah"), WIKI("Battle_of_Badr"), WIKI("Banu_Qurayza"), WIKI("Conquest_of_Mecca")]}
    >
      <RangeChart
        min={565}
        max={640}
        ticks={[570, 590, 610, 622, 632]}
        format={(n) => `${n}`}
        labelWidth={190}
        groups={["Mecca", "Medina"]}
        items={[
          { label: "Birth in Mecca; orphaned at six", start: 570, end: 576, group: "Mecca", display: "c. 570-576" },
          { label: "Marries Khadijah", start: 595, group: "Mecca", display: "c. 595" },
          { label: "First revelation; Waraqa's reply", start: 610, group: "Mecca", display: "c. 610", note: "Waraqa dies soon after and the revelation pauses (Bukhari 3)." },
          { label: "Preaching in Mecca", start: 613, end: 622, group: "Mecca", display: "c. 613-622" },
          { label: "Migration to Medina", start: 622, group: "Medina", display: "622", note: "Year one of the Islamic calendar." },
          { label: "Battle of Badr", start: 624, group: "Medina", display: "624" },
          { label: "The Trench; Banu Qurayza", start: 627, group: "Medina", display: "627" },
          { label: "Conquest of Mecca", start: 630, group: "Medina", display: "630" },
          { label: "Death in Medina", start: 632, group: "Medina", display: "632" },
        ]}
      />
    </VisualCard>
  )
}

function SourceGap() {
  return (
    <VisualCard
      title="Years from the event to the source"
      subtitle="How long after the death of each founder the main written sources appear, taking the crucifixion as AD 30."
      note="The Quran is the earliest Muslim source, but it says little about Muhammad's life. The hadith and biographies supply almost all of it."
      sources={[WIKI("Ibn_Ishaq"), WIKI("Muhammad_al-Bukhari"), WIKI("Gospel_of_Mark"), WIKI("Uthman")]}
    >
      <BarChart
        labelWidth="15rem"
        unit=" yrs"
        max={240}
        data={[
          { label: "Paul's letters (Jesus)", value: 20, display: "about 20", highlight: true },
          { label: "Mark's Gospel (Jesus)", value: 40, display: "about 40", highlight: true },
          { label: "John's Gospel (Jesus)", value: 65, display: "about 65", highlight: true },
          { label: "Uthman's Quran (Muhammad)", value: 20, display: "about 20" },
          { label: "Ibn Ishaq's biography, lost (Muhammad)", value: 135, display: "about 135 at his death" },
          { label: "Ibn Hisham's edition, surviving", value: 200, display: "about 200" },
          { label: "Bukhari's hadith (Muhammad)", value: 235, display: "about 235 at his death" },
        ]}
      />
    </VisualCard>
  )
}

function ConquestMap() {
  return (
    <VisualCard
      title="Where the wars were fought"
      subtitle="The main campaigns of the first centuries and the later wars with Byzantium. Select a point."
      sources={[WIKI("Early_Muslim_conquests"), WIKI("Battle_of_Yarmuk"), WIKI("Battle_of_al-Q%C4%81disiyyah", "Battle of al-Qadisiyyah"), WIKI("Muslim_conquest_of_Egypt"), WIKI("Battle_of_Karbala"), WIKI("Battle_of_Manzikert"), WIKI("Fall_of_Constantinople"), WIKI("Natural_Earth")]}
    >
      <PinMap
        geo={NEAREAST}
        initial="medina"
        groups={["Under Muhammad", "First conquests", "Civil war", "Later wars"]}
        areaLabels={[
          { lon: 20, lat: 34.5, text: "Mediterranean", water: true },
          { lon: 30.5, lat: 27, text: "EGYPT" },
          { lon: 46, lat: 30.5, text: "PERSIA" },
          { lon: 32, lat: 39.4, text: "BYZANTIUM" },
        ]}
        pins={[
          { id: "medina", lon: 39.61, lat: 24.47, label: "Medina", group: "Under Muhammad", detail: "His base from 622, from which raids and the campaign against Mecca were launched. Mecca, which fell in 630, lies further south." },
          { id: "yarmuk", lon: 35.95, lat: 32.8, label: "Yarmuk", group: "First conquests", labelLeft: true, detail: "636: the Byzantine army in Syria is broken." },
          { id: "jerusalem", lon: 35.23, lat: 31.78, label: "Jerusalem", group: "First conquests", labelLeft: true, detail: "Taken about 638. The Dome of the Rock followed in 691, with inscriptions rejecting the Trinity." },
          { id: "alexandria", lon: 29.92, lat: 31.2, label: "Alexandria", group: "First conquests", labelLeft: true, detail: "Egypt falls between 639 and 642." },
          { id: "qadisiyyah", lon: 44.45, lat: 31.8, label: "al-Qadisiyyah", group: "First conquests", detail: "About 636: the Persian army is defeated. The Sasanian Empire ended by 651." },
          { id: "karbala", lon: 44.03, lat: 32.62, label: "Karbala", group: "Civil war", detail: "680: Muhammad's grandson Husayn is killed by Muslim forces, sealing the Sunni and Shia division." },
          { id: "manzikert", lon: 42.55, lat: 39.14, label: "Manzikert", group: "Later wars", detail: "1071: Seljuk victory over Byzantium opens Anatolia, leading to the appeal behind the First Crusade." },
          { id: "constantinople", lon: 28.97, lat: 41.01, label: "Constantinople", group: "Later wars", detail: "1453: taken by the Ottomans, ending the Byzantine Empire." },
        ]}
      />
    </VisualCard>
  )
}

function Manuscripts() {
  return (
    <VisualCard
      title="The Quran's early manuscripts"
      subtitle="A palimpsest whose erased text differs from the standard Quran, and one of the oldest surviving folios."
      sources={[WIKI("Sana%27a_manuscript", "Sana'a manuscript"), WIKI("Birmingham_Quran_manuscript")]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/islam/sanaa.jpg",
            width: 960,
            height: 1230,
            alt: "Parchment leaf of Arabic text with fainter text visible beneath it",
            caption: "A leaf of the Sana'a palimpsest. An earlier text of the Quran was washed off and the standard text written over it.",
            credit: "Unknown scribe",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Sana'a1_Stanford_'07_recto.jpg",
          },
          {
            src: "/images/islam/birmingham.jpg",
            width: 960,
            height: 625,
            alt: "Parchment leaf of early Arabic script in dark ink",
            caption: "A folio of the Birmingham Quran. Radiocarbon dating places the parchment between 568 and 645.",
            credit: "Unknown scribe",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Birmingham_Quran_manuscript.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  compare: Compare,
  errors: Errors,
  timeline: Timeline,
  "source-gap": SourceGap,
  "conquest-map": ConquestMap,
  manuscripts: Manuscripts,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
