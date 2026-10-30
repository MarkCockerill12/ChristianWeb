"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"
import { SERIES } from "@/components/visuals/charts"

function Merism() {
  const examples = [
    ["Heaven and earth", "Genesis 1:1", "all of creation"],
    ["When I sit and when I rise", "Psalm 139:2", "everything I do"],
    ["From the least to the greatest", "Jeremiah 31:34", "everyone"],
    ["Good and evil", "Genesis 2:17", "everything, morally: comprehensive discernment"],
  ] as const
  return (
    <VisualCard
      title="Two ends that mean everything between"
      subtitle={"A merism names two extremes to cover the whole range. On this reading, \"knowledge of good and evil\" is not a single fact but total moral discernment, a prerogative that belongs to God."}
      sources={[{ label: "Wikipedia, \"Merism\"", url: "https://en.wikipedia.org/wiki/Merism" }]}
    >
      <div className="relative h-10 mb-4" aria-hidden>
        <div className="absolute inset-x-0 top-4 h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${SERIES[0]}, var(--viz-grid), ${SERIES[7]})` }} />
        <span className="absolute left-0 top-0 text-xs font-semibold">Good</span>
        <span className="absolute left-1/2 -translate-x-1/2 top-7 text-xs text-[color:var(--viz-muted)]">and everything in between</span>
        <span className="absolute right-0 top-0 text-xs font-semibold">Evil</span>
      </div>
      <CompareTable
        minWidth="32rem"
        compact
        columns={[
          { key: "phrase", label: "Expression" },
          { key: "ref", label: "Where" },
          { key: "means", label: "Means" },
        ]}
        rows={examples.map(([phrase, ref, means]) => ({ phrase, ref, means }))}
      />
    </VisualCard>
  )
}

function Bookends() {
  return (
    <VisualCard
      title="The Bible's first garden and its last city"
      subtitle="What is lost in Genesis 2-3 is restored, and surpassed, in Revelation 21-22."
    >
      <CompareTable
        minWidth="40rem"
        columns={[
          { key: "theme", label: "Theme" },
          { key: "gen", label: "Genesis 2-3" },
          { key: "rev", label: "Revelation 21-22" },
        ]}
        rows={[
          { theme: "The tree of life", gen: "Guarded by cherubim and a flaming sword (Genesis 3:24)", rev: "Open to all, its leaves for the healing of the nations (Revelation 22:2)" },
          { theme: "The river", gen: "A river flows out of Eden to water the garden (Genesis 2:10)", rev: "The river of the water of life flows from the throne (Revelation 22:1)" },
          { theme: "The curse", gen: "The ground is cursed (Genesis 3:17)", rev: "\"No longer will there be any curse\" (Revelation 22:3)" },
          { theme: "God's presence", gen: "They hide from God and are sent out (Genesis 3:8, 23)", rev: "\"They will see his face\" (Revelation 22:4)" },
          { theme: "Death", gen: "\"To dust you will return\" (Genesis 3:19)", rev: "\"There will be no more death\" (Revelation 21:4)" },
        ]}
      />
    </VisualCard>
  )
}

function Parallels() {
  return (
    <VisualCard
      title="Life lost in other ancient stories"
      subtitle="Mesopotamian literature also tells of humans missing out on immortality. The comparison shows what Genesis shares with its world and where it differs."
      sources={[
        { label: "Wikipedia, \"Epic of Gilgamesh\"", url: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh" },
        { label: "Wikipedia, \"Adapa\"", url: "https://en.wikipedia.org/wiki/Adapa" },
      ]}
    >
      <CompareTable
        minWidth="42rem"
        compact
        columns={[
          { key: "story", label: "Story" },
          { key: "life", label: "Source of life" },
          { key: "lost", label: "How it is lost" },
          { key: "diff", label: "Difference from Genesis" },
        ]}
        rows={[
          { story: "Genesis 2-3", life: "The tree of life", lost: "Disobedience to a single command; humans are sent out", diff: "@na" },
          { story: "Epic of Gilgamesh, Tablet XI", life: "A plant that restores youth", lost: "A serpent steals it while Gilgamesh bathes", diff: "Loss by accident and bad luck, not moral choice" },
          { story: "Adapa", life: "The bread and water of life", lost: "Adapa refuses them, on the advice of the god Ea", diff: "Loss by divine trickery, not human rebellion" },
        ]}
      />
    </VisualCard>
  )
}

function Art() {
  return (
    <VisualCard title="The Fall in art" subtitle="Two of the best-known Renaissance treatments of Genesis 3.">
      <Gallery
        columns={2}
        images={[
          {
            src: "/images/tree-of-knowledge/cranach-adam-eve.jpg",
            width: 800,
            height: 1205,
            alt: "Painting of Adam and Eve beneath the tree with the serpent",
            caption: "Lucas Cranach the Elder, *Adam and Eve* (1526), Courtauld Gallery, London.",
            credit: "Lucas Cranach the Elder",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._-_Adam_und_Eva_(Courtauld_Institute_of_Art).jpg",
          },
          {
            src: "/images/tree-of-knowledge/michelangelo-fall.jpg",
            width: 1000,
            height: 438,
            alt: "Fresco showing the temptation on the left and the expulsion on the right",
            caption: "Michelangelo, *The Fall and Expulsion from the Garden of Eden* (c. 1509-10), Sistine Chapel ceiling: the temptation on the left, the expulsion on the right.",
            credit: "Michelangelo",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Michelangelo,_Fall_and_Expulsion_from_Garden_of_Eden_00.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  merism: Merism,
  bookends: Bookends,
  parallels: Parallels,
  art: Art,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}

