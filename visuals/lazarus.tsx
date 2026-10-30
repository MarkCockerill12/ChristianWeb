"use client"

import { StepStrip, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"
import { PinMap } from "@/components/visuals/geo"
import { JUDEA } from "@/components/visuals/maps/judea"

function FourDays() {
  return (
    <VisualCard
      title="How Lazarus came to be four days dead"
      subtitle="A common reconstruction of John 11. If the messenger needed a day to reach Jesus and Jesus a day to reach Bethany, Lazarus had probably died around the time the message arrived."
      note="John gives only the two-day wait (11:6) and the four days in the tomb (11:17); the travel times are inferred from the distance."
      sources={[
        { label: "Commentaries on John 11:17 (Bible Hub)", url: "https://biblehub.com/commentaries/john/11-17.htm" },
        { label: "Wikipedia, \"Raising of Lazarus\"", url: "https://en.wikipedia.org/wiki/Raising_of_Lazarus" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "Day 1", title: "The message is sent", body: "\"Lord, the one you love is sick\" (John 11:3). Lazarus dies and is buried the same day, as was customary." },
          { label: "Days 2 and 3", title: "Jesus stays put", body: "\"He stayed where he was two more days\" (John 11:6), across the Jordan." },
          { label: "Day 4", title: "The journey to Bethany", body: "A day's walk up from the Jordan valley past Jericho." },
          { label: "Arrival", title: "Four days in the tomb", body: "\"By this time there is a bad odour\" (John 11:39). He calls Lazarus out." },
        ]}
      />
    </VisualCard>
  )
}

function JourneyMap() {
  return (
    <VisualCard
      title="From beyond the Jordan to Bethany"
      subtitle="Jesus was at the place across the Jordan where John had baptised (John 10:40). Bethany lay less than two miles from Jerusalem (John 11:18), close enough for mourners to come out from the city."
      note={"The baptism site \"Bethany beyond the Jordan\" (John 1:28) is traditionally placed at al-Maghtas, opposite Jericho; some scholars place it further north in Batanea."}
      sources={[
        { label: "Wikipedia, \"Al-Maghtas\" (Bethany beyond the Jordan)", url: "https://en.wikipedia.org/wiki/Al-Maghtas" },
        { label: "Wikipedia, \"Al-Eizariya\" (Bethany)", url: "https://en.wikipedia.org/wiki/Al-Eizariya" },
      ]}
    >
      <PinMap
        geo={JUDEA}
        initial="bethany"
        groups={["John 11", "Nearby"]}
        areaLabels={[
          { lon: 35.5, lat: 31.55, text: "Dead Sea", water: true },
          { lon: 34.6, lat: 31.95, text: "Mediterranean", water: true },
        ]}
        routes={[{ points: [[35.55, 31.838], [35.45, 31.867], [35.275, 31.775]] }]}
        pins={[
          { id: "maghtas", lon: 35.5503, lat: 31.8375, label: "Beyond the Jordan", group: "John 11", detail: "Where Jesus was staying when the message came (John 10:40; 11:6), traditionally al-Maghtas." },
          { id: "bethany", lon: 35.2627, lat: 31.7713, label: "Bethany", group: "John 11", detail: "Home of Martha, Mary and Lazarus, on the eastern slope of the Mount of Olives (modern al-Eizariya)." },
          { id: "jerusalem", lon: 35.2354, lat: 31.778, label: "Jerusalem", group: "Nearby", labelLeft: true, detail: "Less than two miles away (John 11:18). The Sanhedrin met here after the raising (John 11:47-53)." },
          { id: "jericho", lon: 35.45, lat: 31.8667, label: "Jericho", group: "Nearby", detail: "On the road up from the Jordan valley to Jerusalem." },
          { id: "ephraim", lon: 35.3006, lat: 31.9536, label: "Ephraim", group: "John 11", detail: "The village near the wilderness where Jesus withdrew after the council's decision (John 11:54), often identified with modern Taybeh." },
        ]}
      />
    </VisualCard>
  )
}

function Tombs() {
  return (
    <VisualCard
      title={"\"It was a cave with a stone laid across the entrance\""}
      subtitle="John 11:38. Tombs of the period were rock-cut chambers closed by a stone, sometimes a disc rolled in a channel."
      sources={[{ label: "Wikipedia, \"Tomb of Lazarus\"", url: "https://en.wikipedia.org/wiki/Tomb_of_Lazarus" }]}
    >
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/lazarus/rolling-stone-tomb.jpg",
            width: 900,
            height: 610,
            alt: "Rock-cut tomb entrance with a round stone beside it",
            caption: "A Jewish tomb with a rolling stone at Abu Ghosh, west of Jerusalem, photographed in the early twentieth century.",
            credit: "Matson Collection, Library of Congress",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Jewish_tombs_with_rolling_stones_at_Abou_Gosh._Rolling_stone_tomb_(with_figure_of_a_priest,_Bro._Bede)_LOC_matpc.21097.jpg",
          },
          {
            src: "/images/lazarus/tomb-of-lazarus.jpg",
            width: 900,
            height: 1197,
            alt: "Old photograph of a doorway in a stone wall with people in front",
            caption: "The entrance to the traditional Tomb of Lazarus at al-Eizariya, venerated as the site since at least the fourth century.",
            credit: "Rijksmuseum",
            license: "CC0",
            licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Gezicht_op_het_graf_van_Lazarus_in_Al-Eizariya_met_mensen_en_kinderen_ervoor_Tomb_of_Lazarus_(titel_op_object),_RP-F-2001-7-559B-4.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "four-days": FourDays,
  map: JourneyMap,
  tombs: Tombs,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
