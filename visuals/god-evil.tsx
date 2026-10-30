"use client"

import { CompareTable, PassageCompare, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"

function CaseFiles() {
  return (
    <VisualCard
      title="The judgments side by side"
      subtitle="Each judgment examined below, with the reason the text gives, the warning or time allowed, and who was spared. Nineveh is included as the case where warning led to repentance and no judgment fell."
      note="Some entries rest on contested readings, marked in the sections themselves: Genesis 6:3 may limit human lifespan rather than set a period of grace."
    >
      <CompareTable
        minWidth="56rem"
        compact
        filterKeys={["testament"]}
        columns={[
          { key: "event", label: "Judgment" },
          { key: "reason", label: "Stated reason" },
          { key: "warning", label: "Warning or time given" },
          { key: "spared", label: "Spared" },
          { key: "testament", label: "Testament" },
        ]}
        rows={[
          { event: "The Flood (Genesis 6-8)", reason: "The earth \"filled with violence\" (Genesis 6:11)", warning: "120 years on one reading (Genesis 6:3); Noah \"a preacher of righteousness\" (2 Peter 2:5)", spared: "Noah's family", testament: "Old" },
          { event: "Sodom and Gomorrah (Genesis 19)", reason: "Arrogance, neglect of the poor, sexual violence (Ezekiel 16:49; Genesis 19:4-9)", warning: "Abraham's intercession: spared for ten righteous (Genesis 18:22-33)", spared: "Lot and his daughters", testament: "Old" },
          { event: "The plagues of Egypt (Exodus 7-12)", reason: "Generations of slavery and the killing of Hebrew infants (Exodus 1)", warning: "Nine plagues, each announced, before the last", spared: "Israel, and Egyptians who heeded the warning (Exodus 9:20)", testament: "Old" },
          { event: "Canaan (Joshua)", reason: "Practices including child sacrifice (Leviticus 18:21-25; Deuteronomy 12:31)", warning: "Four centuries: \"the sin of the Amorites has not yet reached its full measure\" (Genesis 15:16)", spared: "Rahab's family (Joshua 6:25); the Gibeonites (Joshua 9)", testament: "Old" },
          { event: "Amalek (1 Samuel 15)", reason: "Attacking Israel's stragglers after the exodus (Deuteronomy 25:17-19)", warning: "Centuries since the attack", spared: "The Kenites, warned to leave first (1 Samuel 15:6)", testament: "Old" },
          { event: "Nineveh (Jonah 3)", reason: "\"Its wickedness has come up before me\" (Jonah 1:2)", warning: "Forty days", spared: "The whole city, after it repented (Jonah 3:10)", testament: "Old" },
          { event: "Judah's exile (2 Chronicles 36)", reason: "Idolatry and injustice among God's own people", warning: "Prophets sent \"again and again\" (2 Chronicles 36:15-16)", spared: "A remnant returned", testament: "Old" },
          { event: "Ananias and Sapphira (Acts 5)", reason: "Lying to the Holy Spirit", warning: "Peter's question gave Sapphira an opening to tell the truth (Acts 5:8)", spared: "@na", testament: "New" },
          { event: "Herod Agrippa I (Acts 12)", reason: "Accepting worship as a god (Acts 12:22-23)", warning: "@na", spared: "@na", testament: "New" },
        ]}
      />
    </VisualCard>
  )
}

function Hyperbole() {
  return (
    <VisualCard
      title="Total victory language in ancient war reports"
      subtitle={"Ancient Near Eastern kings routinely described wars in absolute terms that their own later history contradicts. Some scholars read Joshua's \"left no survivors\" the same way, since Judges finds the same peoples still in the land."}
      note="Critics reply that 1 Samuel 15 names non-combatants explicitly, so the hyperbole reading does not remove the difficulty entirely."
      sources={[
        { label: "Wikipedia, \"Mesha Stele\"", url: "https://en.wikipedia.org/wiki/Mesha_Stele" },
        { label: "Wikipedia, \"Merneptah Stele\"", url: "https://en.wikipedia.org/wiki/Merneptah_Stele" },
        { label: "Paul Copan, \"Is God a Moral Monster?\" (Denver Journal)", url: "https://denverjournal.denverseminary.edu/the-denver-journal-article/is-god-a-moral-monster-making-sense-of-the-old-testament-god/" },
        { label: "The Gospel Coalition, \"Is God OK with Genocide?\"", url: "https://www.thegospelcoalition.org/article/god-genocide/" },
      ]}
    >
      <PassageCompare
        translation="NIV for Scripture; standard scholarly translations for the inscriptions"
        highlightWords={["perished", "utterly", "forever", "laid waste", "his seed is not", "no survivors", "totally destroyed", "failed to dislodge"]}
        passages={[
          { label: "Mesha of Moab, c. 840 BC", ref: "Mesha Stele, line 7", text: "Israel has utterly perished forever." },
          { label: "Pharaoh Merneptah, c. 1208 BC", ref: "Merneptah Stele, line 27", text: "Israel is laid waste, his seed is not." },
          { label: "The conquest summarised", ref: "Joshua 10:40", text: "He left no survivors. He totally destroyed all who breathed, just as the LORD, the God of Israel, had commanded." },
          { label: "The same land later", ref: "Judges 1:21, 28", text: "The Benjamites, however, failed to dislodge the Jebusites... When Israel became strong, they pressed the Canaanites into forced labour but never drove them out completely." },
        ]}
      />
      <div className="mt-5">
        <Gallery
          columns={2}
          images={[
            {
              src: "/images/archaeology/mesha-stele.jpg",
              width: 800,
              height: 1067,
              alt: "Black basalt stele covered in Moabite script",
              caption: "The Mesha Stele (c. 840 BC), Louvre. Israel survived another 120 years as a kingdom after Mesha declared it gone for ever.",
              credit: "Tangopaso",
              license: "Public domain",
              sourceUrl: "https://commons.wikimedia.org/wiki/File:Mesha_stele_(Louvre,_AO_5066).jpg",
            },
            {
              src: "/images/archaeology/merneptah-stele.jpg",
              width: 800,
              height: 1251,
              alt: "Tall granite stele with hieroglyphic inscription",
              caption: "The Merneptah Stele (c. 1208 BC), Egyptian Museum, Cairo: the earliest known mention of Israel outside the Bible, announcing its destruction.",
              credit: "Webscribe",
              license: "CC BY-SA 3.0",
              licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
              sourceUrl: "https://commons.wikimedia.org/wiki/File:Merenptah_Israel_Stele_Cairo.jpg",
            },
          ]}
        />
      </div>
    </VisualCard>
  )
}

const PLAGUES = [
  ["Exodus 7:14-25", "Water to blood", "The magicians copy it; Pharaoh's heart is hard"],
  ["Exodus 8:1-15", "Frogs", "Pharaoh promises release, then hardens his heart"],
  ["Exodus 8:16-19", "Gnats", "The magicians fail: \"This is the finger of God\""],
  ["Exodus 8:20-32", "Flies", "Goshen is spared; Pharaoh bargains, then refuses"],
  ["Exodus 9:1-7", "Livestock", "Israel's animals are untouched"],
  ["Exodus 9:8-12", "Boils", "\"The LORD hardened Pharaoh's heart\""],
  ["Exodus 9:13-35", "Hail", "Egyptians who fear the word shelter their servants; Pharaoh: \"I have sinned\""],
  ["Exodus 10:1-20", "Locusts", "Pharaoh's officials beg him to let Israel go"],
  ["Exodus 10:21-29", "Darkness", "Three days; Israel has light"],
  ["Exodus 11-12", "The firstborn", "Passover; Pharaoh lets Israel go"],
] as const

function Plagues() {
  return (
    <VisualCard title="Ten plagues, ten chances" subtitle="Each plague with Pharaoh's response. The account alternates between Pharaoh hardening his own heart and God hardening it.">
      <ol className="grid grid-cols-2 sm:grid-cols-5 gap-2 list-none p-0 m-0">
        {PLAGUES.map(([ref, name, response], i) => (
          <li key={name} className="viz-step rounded-lg border p-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold tabular-nums" style={{ color: i === 9 ? "var(--viz-8)" : "var(--viz-1)" }}>
                {i + 1}
              </span>
              <span className="font-semibold text-sm">{name}</span>
            </div>
            <div className="text-[12px] text-[color:var(--viz-muted)]">{ref}</div>
            <div className="text-[12px] mt-1 leading-snug text-[color:var(--viz-ink-2)]">{response}</div>
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "case-files": CaseFiles,
  hyperbole: Hyperbole,
  plagues: Plagues,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
