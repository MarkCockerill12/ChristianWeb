"use client"

import { BarChart } from "@/components/visuals/charts"
import { CardGrid, CompareTable, VisualCard } from "@/components/visuals/kit"
import { Figure } from "@/components/visuals/figure"

function Words() {
  return (
    <VisualCard
      title={"Four words English Bibles have translated \"hell\""}
      subtitle={"Only one of them, Gehenna, is the word Jesus uses for final punishment. The King James Version used \"hell\" for all four, which is why the English word appears 54 times there and far less in modern versions."}
      note="Counts are of the original-language word. Hades appears 10 times in critical editions of the Greek New Testament and 11 in the Textus Receptus, which reads it at 1 Corinthians 15:55."
      sources={[
        { label: "Wikipedia, \"Sheol\" (66 occurrences in the Hebrew Bible)", url: "https://en.wikipedia.org/wiki/Sheol" },
        { label: "Wikipedia, \"Christian views on Hades\"", url: "https://en.wikipedia.org/wiki/Hades_in_Christianity" },
        { label: "Wikipedia, \"Gehenna\"", url: "https://en.wikipedia.org/wiki/Gehenna" },
        { label: "Wikipedia, \"Tartarus\" (2 Peter 2:4)", url: "https://en.wikipedia.org/wiki/Tartarus" },
      ]}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
        <div>
          <div className="text-[12px] font-semibold text-[color:var(--viz-muted)] mb-2">Occurrences in the original text</div>
          <BarChart
            labelWidth="6rem"
            data={[
              { label: "Sheol", value: 66, note: "Hebrew, Old Testament" },
              { label: "Gehenna", value: 12, highlight: true, note: "Greek, eleven times from Jesus, once in James 3:6" },
              { label: "Hades", value: 10, display: "10 or 11", note: "Greek, New Testament" },
              { label: "Tartarus", value: 1, note: "Greek verb tartaroō, 2 Peter 2:4" },
            ]}
          />
        </div>
        <CardGrid
          columns={2}
          cards={[
            { kicker: "Hebrew", title: "Sheol", body: "The grave, or the realm of all the dead, righteous and wicked alike. Not in itself a place of punishment.", footer: "Genesis 37:35; Psalm 16:10" },
            { kicker: "Greek", title: "Hades", body: "The Septuagint's word for Sheol; in the New Testament the temporary state of the dead before the final judgment.", footer: "Luke 16:23; Revelation 20:13-14" },
            { kicker: "Greek, from Hebrew", title: "Gehenna", body: "The Valley of Hinnom outside Jerusalem, where children were sacrificed to Molech. Jesus' word for final judgment.", footer: "Matthew 10:28; Mark 9:43-48" },
            { kicker: "Greek", title: "Tartarus", body: "Used once, as a verb, for where the fallen angels are held in chains of darkness awaiting judgment.", footer: "2 Peter 2:4" },
          ]}
        />
      </div>
    </VisualCard>
  )
}

function Views() {
  return (
    <VisualCard
      title={"Three answers to \"how long?\""}
      subtitle="The positions set out in the sections below, side by side. Purgatory is not a fourth answer: in Catholic teaching it is a purification of the saved, separate from hell."
      sources={[
        { label: "Wikipedia, \"Annihilationism\"", url: "https://en.wikipedia.org/wiki/Annihilationism" },
        { label: "Wikipedia, \"Christian universalism\"", url: "https://en.wikipedia.org/wiki/Christian_universalism" },
        { label: "Catechism of the Catholic Church 1030-1032 (purgatory)", url: "https://www.vatican.va/archive/ENG0015/__P2N.HTM" },
        { label: "Catechism of the Catholic Church 1033-1037 (hell)", url: "https://www.vatican.va/archive/ENG0015/__P2O.HTM" },
      ]}
    >
      <CompareTable
        minWidth="50rem"
        compact
        columns={[
          { key: "q", label: "Question" },
          { key: "ect", label: "Eternal conscious punishment" },
          { key: "ann", label: "Annihilationism" },
          { key: "uni", label: "Universalism" },
        ]}
        rows={[
          { q: "Is the outcome final?", ect: "@yes", ann: "@yes", uni: "@no All are eventually reconciled" },
          { q: "Do the lost exist forever?", ect: "@yes", ann: "@no Destroyed after just punishment", uni: "@yes But redeemed" },
          { q: "Is suffering endless?", ect: "@yes", ann: "@no", uni: "@no" },
          { q: "Central texts", ect: "Matthew 25:46; Revelation 14:10-11; 20:10", ann: "Matthew 10:28; 2 Thessalonians 1:9; Romans 6:23", uni: "1 Corinthians 15:22; Colossians 1:20; 1 Timothy 2:4" },
          { q: "Held by", ect: "Augustine, Aquinas, the Reformers, the major confessions", ann: "John Stott (tentatively), Edward Fudge, Clark Pinnock", uni: "Origen is often cited; modern advocates include David Bentley Hart" },
          { q: "Standing", ect: "The majority view", ann: "A significant evangelical minority", uni: "Outside historic orthodoxy" },
        ]}
      />
    </VisualCard>
  )
}

function Presence() {
  return (
    <VisualCard
      title="Separated from God, yet God is everywhere"
      subtitle="Theologians distinguish God's sustaining presence, which nothing escapes, from his favourable presence, which the lost lose."
    >
      <CardGrid
        columns={2}
        cards={[
          { kicker: "Not lost", title: "God's sustaining presence", body: "\"In him all things hold together\" (Colossians 1:17). Even hell exists only because God upholds it. \"If I make my bed in the depths, you are there\" (Psalm 139:8).", footer: "Revelation 14:10: punishment \"in the presence of the Lamb\", Greek *enōpion*, \"before\", the language of a courtroom." },
          { kicker: "Lost", title: "God's favour and fellowship", body: "\"Away from the presence of the Lord\" (2 Thessalonians 1:9): *prosōpon*, his face, the biblical image of his favour (Numbers 6:25). Every gift of common grace is withdrawn.", footer: "Already begun in this life: \"your iniquities have separated you from your God\" (Isaiah 59:2)." },
        ]}
      />
    </VisualCard>
  )
}

function Hinnom() {
  return (
    <VisualCard
      title="Gehenna is a real place"
      subtitle="The Valley of Hinnom curves around the south and west of Jerusalem's Old City."
      note="The claim that it was the city's burning rubbish dump in Jesus' day is first found around AD 1200, in Rabbi David Kimhi."
      sources={[{ label: "Wikipedia, \"Gehenna\"", url: "https://en.wikipedia.org/wiki/Gehenna" }]}
    >
      <div className="max-w-2xl">
        <Figure
          image={{
            src: "/images/hell/hinnom-valley.jpg",
            width: 1000,
            height: 750,
            alt: "View across a green valley outside Jerusalem's walls",
            caption: "The Hinnom Valley today, looking west from outside the Old City. Jeremiah condemned the child sacrifices once made here (Jeremiah 7:31).",
            credit: "Ian Scott",
            license: "CC BY-SA 2.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Hinnom_Valley_(3622866514).jpg",
          }}
        />
      </div>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  words: Words,
  views: Views,
  presence: Presence,
  hinnom: Hinnom,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
