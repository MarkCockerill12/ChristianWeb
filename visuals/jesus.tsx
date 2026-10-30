"use client"

import { CardGrid, CompareTable, VisualCard } from "@/components/visuals/kit"
import { RangeChart } from "@/components/visuals/charts"
import { Gallery } from "@/components/visuals/figure"
import { DecisionTree } from "@/components/visuals/tree"

function Claims() {
  return (
    <VisualCard
      title="What Jesus claimed, and how his hearers took it"
      subtitle="Each claim set beside the Old Testament language it draws on and the reaction it provoked. The reactions are the strongest evidence of what the words meant to first-century Jews."
    >
      <CompareTable
        minWidth="48rem"
        columns={[
          { key: "claim", label: "Claim" },
          { key: "text", label: "Where" },
          { key: "ot", label: "Old Testament background" },
          { key: "reaction", label: "Reaction" },
        ]}
        rows={[
          { claim: "\"Before Abraham was born, I am\"", text: "John 8:58", ot: "God's name \"I am\" (Exodus 3:14); \"I am he\" (Isaiah 43:10)", reaction: "They picked up stones to stone him (John 8:59)" },
          { claim: "\"I and the Father are one\"", text: "John 10:30", ot: "\"The LORD is one\" (Deuteronomy 6:4)", reaction: "Stones again: \"you, a mere man, claim to be God\" (John 10:31-33)" },
          { claim: "Calls God his own Father", text: "John 5:17-18", ot: "God alone works on the Sabbath (Genesis 2:2-3)", reaction: "Sought to kill him for \"making himself equal with God\" (John 5:18)" },
          { claim: "Forgives sins", text: "Mark 2:5-7", ot: "\"I am he who blots out your transgressions\" (Isaiah 43:25)", reaction: "\"Who can forgive sins but God alone?\" (Mark 2:7)" },
          { claim: "The Son of Man coming on the clouds", text: "Mark 14:62", ot: "One like a son of man given everlasting dominion (Daniel 7:13-14)", reaction: "The high priest tore his clothes: \"blasphemy\" (Mark 14:63-64)" },
          { claim: "Lord of the Sabbath", text: "Mark 2:27-28", ot: "The Sabbath belongs to the LORD (Exodus 20:8-11)", reaction: "Pharisees began plotting to kill him (Mark 3:6)" },
          { claim: "Final judge of the nations", text: "Matthew 25:31-32", ot: "The LORD sits to judge all the nations (Joel 3:12)", reaction: "@na" },
          { claim: "Accepts \"My Lord and my God\"", text: "John 20:28-29", ot: "Worship belongs to God alone (Exodus 20:3-5)", reaction: "Jesus commends the faith; apostles and angels refuse worship (Acts 10:25-26; Revelation 22:8-9)" },
        ]}
      />
    </VisualCard>
  )
}

function IAm() {
  return (
    <VisualCard
      title={"The \"I am\" sayings of John's Gospel"}
      subtitle={"Seven sayings with a predicate, and the absolute \"I am\" (Greek *egō eimi*) with none, which echoes the Septuagint's rendering of God's self-naming."}
    >
      <CardGrid
        columns={4}
        cards={[
          { kicker: "John 6:35", title: "The bread of life", body: "After feeding the five thousand." },
          { kicker: "John 8:12", title: "The light of the world", body: "At the Feast of Tabernacles, with its great lamps." },
          { kicker: "John 10:7, 9", title: "The gate for the sheep", body: "The way into the fold." },
          { kicker: "John 10:11, 14", title: "The good shepherd", body: "Who lays down his life for the sheep." },
          { kicker: "John 11:25", title: "The resurrection and the life", body: "Before raising Lazarus." },
          { kicker: "John 14:6", title: "The way, the truth and the life", body: "\"No one comes to the Father except through me.\"" },
          { kicker: "John 15:1, 5", title: "The true vine", body: "Israel's own image for itself (Psalm 80:8)." },
          { kicker: "Absolute", title: "\"I am\"", body: "John 8:24, 8:28, 8:58, 13:19 and 18:5-6, where the arresting soldiers fall back at the words." },
        ]}
      />
    </VisualCard>
  )
}

function Trilemma() {
  return (
    <VisualCard
      title="Lewis's trilemma, with the fourth option critics add"
      subtitle="C.S. Lewis argued that a man who said what Jesus said cannot be merely a good teacher. Critics reply that the claims may be legend; that branch turns on how early the sources are."
      sources={[
        { label: "C.S. Lewis, Mere Christianity, Book II ch. 3 (\"The Shocking Alternative\")", url: "https://www.cslewis.com/us/books/paperback/mere-christianity/9780060652920" },
        { label: "Wikipedia, \"Lewis's trilemma\"", url: "https://en.wikipedia.org/wiki/Lewis%27s_trilemma" },
      ]}
    >
      <DecisionTree
        root={{
          question: "Did Jesus actually claim to be God?",
          branches: [
            { label: "No", to: { outcome: "Legend", body: "The claims were added later. Answered by the early dates of the sources and of worship of Jesus (chart below).", tone: "neutral" } },
            {
              label: "Yes",
              to: {
                question: "Was the claim true?",
                branches: [
                  {
                    label: "No",
                    to: {
                      question: "Did he know it was false?",
                      branches: [
                        { label: "Yes", to: { outcome: "Liar", body: "A deliberate deceiver, hard to square with his moral teaching.", tone: "reject" } },
                        { label: "No", to: { outcome: "Lunatic", body: "Sincerely deluded, hard to square with the sanity of his character.", tone: "reject" } },
                      ],
                    },
                  },
                  { label: "Yes", to: { outcome: "Lord", body: "God incarnate, as he claimed.", tone: "accept" } },
                ],
              },
            },
          ],
        }}
      />
    </VisualCard>
  )
}

function EarlyChristology() {
  return (
    <VisualCard
      title="Worship of Jesus came early, not at Nicaea"
      subtitle="Dated evidence that Christians treated Jesus as divine, from the earliest letters to the archaeology. Nicaea (325) defined the language; it did not begin the belief."
      note="Letter dates are the mainstream ranges. The hymn in Philippians 2 and the Aramaic *Maranatha* are generally thought to be older than the letters that quote them."
      sources={[
        { label: "Wikipedia, \"Pauline epistles\"", url: "https://en.wikipedia.org/wiki/Pauline_epistles" },
        { label: "Pliny the Younger, Letters 10.96 (\"a hymn to Christ as to a god\")", url: "https://en.wikipedia.org/wiki/Pliny_the_Younger_on_Christians" },
        { label: "Wikipedia, \"Ignatius of Antioch\"", url: "https://en.wikipedia.org/wiki/Ignatius_of_Antioch" },
        { label: "Wikipedia, \"Alexamenos graffito\"", url: "https://en.wikipedia.org/wiki/Alexamenos_graffito" },
        { label: "Wikipedia, \"Megiddo church (Israel)\"", url: "https://en.wikipedia.org/wiki/Megiddo_church_(Israel)" },
      ]}
    >
      <RangeChart
        min={20}
        max={340}
        ticks={[30, 100, 200, 300]}
        format={(n) => `AD ${n}`}
        markers={[{ at: 325, label: "Nicaea" }]}
        groups={["New Testament", "Outside the New Testament"]}
        labelWidth={210}
        items={[
          { label: "Crucifixion", start: 30, end: 33, group: "New Testament", display: "AD 30 or 33" },
          { label: "1 Corinthians 8:6; 16:22 (Maranatha)", start: 53, end: 55, group: "New Testament", display: "c. 53-55" },
          { label: "Philippians 2:6-11", start: 54, end: 62, group: "New Testament", display: "c. 54-62" },
          { label: "Gospel of Mark", start: 66, end: 74, group: "New Testament", display: "c. 66-74" },
          { label: "Gospel of John (John 1:1; 20:28)", start: 90, end: 110, group: "New Testament", display: "c. 90-110" },
          { label: "Ignatius: \"Jesus Christ, the God\"", start: 105, end: 115, group: "Outside the New Testament", display: "c. 108" },
          { label: "Pliny: \"a hymn to Christ as to a god\"", start: 112, group: "Outside the New Testament", display: "c. 112" },
          { label: "Alexamenos graffito", start: 200, group: "Outside the New Testament", display: "c. 200" },
          { label: "Megiddo mosaic: \"to God Jesus Christ\"", start: 230, end: 305, group: "Outside the New Testament", display: "c. 230 (some later)" },
        ]}
      />
    </VisualCard>
  )
}

function Evidence() {
  return (
    <VisualCard
      title="The physical evidence"
      subtitle={"A mocking graffito, a dedication to \"God Jesus Christ\", and one of the oldest New Testament fragments."}
      sources={[
        { label: "Wikipedia, \"Alexamenos graffito\"", url: "https://en.wikipedia.org/wiki/Alexamenos_graffito" },
        { label: "Wikipedia, \"Megiddo church (Israel)\"", url: "https://en.wikipedia.org/wiki/Megiddo_church_(Israel)" },
        { label: "Wikipedia, \"Rylands Library Papyrus P52\"", url: "https://en.wikipedia.org/wiki/Rylands_Library_Papyrus_P52" },
      ]}
    >
      <Gallery
        columns={3}
        images={[
          {
            src: "/images/jesus/alexamenos-graffito.jpg",
            width: 800,
            height: 907,
            alt: "Scratched plaster graffito of a man saluting a crucified figure with a donkey's head",
            caption: "The Alexamenos graffito from the Palatine Hill, Rome (probably c. 200): a man raises his hand to a crucified figure with a donkey's head, captioned \"Alexamenos worships his god\". A pagan mocking a Christian for worshipping a crucified man.",
            credit: "Justin Benttinen",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Alexamenos_graffito.jpg",
          },
          {
            src: "/images/jesus/megiddo-mosaic.jpg",
            width: 900,
            height: 554,
            alt: "Floor mosaic with a Greek inscription inside a decorative border",
            caption: "The Megiddo mosaic, found in 2005 in a prayer hall near Megiddo: \"The God-loving Akeptous has offered the table to God Jesus Christ as a memorial.\" Dated c. 230 by the excavator; some archaeologists argue for a later date.",
            credit: "Vassilios Tzaferis",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Akeptous_Inscription_2.jpg",
          },
          {
            src: "/images/jesus/p52-recto.jpg",
            width: 500,
            height: 787,
            alt: "Small papyrus fragment with Greek writing",
            caption: "Papyrus P52, a fragment of John 18, usually dated to the first half of the second century and held at the John Rylands Library, Manchester.",
            credit: "John Rylands University Library",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:P52_recto.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  claims: Claims,
  "i-am": IAm,
  trilemma: Trilemma,
  "early-christology": EarlyChristology,
  evidence: Evidence,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
