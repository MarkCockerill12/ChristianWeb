"use client"

import { CompareTable, VisualCard } from "@/components/visuals/kit"
import { Gallery } from "@/components/visuals/figure"

function LawComparison() {
  return (
    <VisualCard
      title="How the Mosaic law compares"
      subtitle="The Torah's servitude laws set beside the Code of Hammurabi, Roman law and American slavery. The Torah treated a fellow Israelite and a foreign slave very differently, so they have separate columns: the foreign column is where the hardest objections lie."
      note="Hammurabi references are to the numbered laws of the code (L.W. King's translation). Deuteronomy 23:15-16 is usually read as covering slaves who escaped to Israel from other nations."
      sources={[
        { label: "The Code of Hammurabi, trans. L.W. King (Avalon Project, Yale Law School)", url: "https://avalon.law.yale.edu/ancient/hamcode.asp" },
        { label: "Wikipedia, \"Slavery in ancient Rome\"", url: "https://en.wikipedia.org/wiki/Slavery_in_ancient_Rome" },
        { label: "World History Encyclopedia, \"Slavery in the Roman World\"", url: "https://www.worldhistory.org/article/629/slavery-in-the-roman-world/" },
        { label: "Wikipedia, \"Partus sequitur ventrem\" (Virginia, 1662)", url: "https://en.wikipedia.org/wiki/Partus_sequitur_ventrem" },
        { label: "Wikipedia, \"Fugitive Slave Act of 1850\"", url: "https://en.wikipedia.org/wiki/Fugitive_Slave_Act_of_1850" },
        { label: "Wikipedia, \"Act Prohibiting Importation of Slaves\" (1807, in force 1808)", url: "https://en.wikipedia.org/wiki/Act_Prohibiting_Importation_of_Slaves" },
        { label: "Wikipedia, \"Slave codes\"", url: "https://en.wikipedia.org/wiki/Slave_codes" },
      ]}
    >
      <CompareTable
        minWidth="64rem"
        compact
        columns={[
          { key: "issue", label: "Question" },
          { key: "hebrew", label: "Torah: Israelite servant" },
          { key: "foreign", label: "Torah: foreign slave" },
          { key: "hammurabi", label: "Code of Hammurabi" },
          { key: "rome", label: "Roman law" },
          { key: "us", label: "American slavery" },
        ]}
        rows={[
          {
            issue: "How long?",
            hebrew: "@yes Six years, freed in the seventh (Exodus 21:2; Deuteronomy 15:12)",
            foreign: "@no For life, and passed on to children (Leviticus 25:44-46)",
            hammurabi: "@partial Debt bondage of a wife or child limited to three years (§117)",
            rome: "@no For life; a child of an enslaved mother was born a slave",
            us: "@no For life, and hereditary through the mother (Virginia, 1662)",
          },
          {
            issue: "Leaving service",
            hebrew: "@yes Sent away with livestock, grain and wine (Deuteronomy 15:13-14)",
            foreign: "@no No release provision",
            hammurabi: "@yes Set free in the fourth year (§117)",
            rome: "@partial Manumission at the owner's choice; freed slaves could become citizens",
            us: "@partial At the owner's choice",
          },
          {
            issue: "Runaways",
            hebrew: "@yes Shelter them and do not hand them back (Deuteronomy 23:15-16)",
            foreign: "@yes The same law",
            hammurabi: "@no Death for harbouring a runaway (§16); a reward for returning one (§17)",
            rome: "@no Hunting fugitive slaves was the most concerted form of policing in the empire",
            us: "@no The Fugitive Slave Act of 1850 required their return, even from free states",
          },
          {
            issue: "Kidnapping people",
            hebrew: "@yes Kidnapping and selling a person is a capital crime (Exodus 21:16; Deuteronomy 24:7)",
            foreign: "@yes The same law",
            hammurabi: "@yes Death for stealing a man's young son (§14)",
            rome: "@na",
            us: "@partial Importing slaves banned from 1808; the domestic trade in people continued",
          },
          {
            issue: "Injury by the owner",
            hebrew: "@yes Losing an eye or a tooth sets the servant free (Exodus 21:26-27)",
            foreign: "@yes The same law",
            hammurabi: "@no Injuring another man's slave: pay the owner half its value (§199)",
            rome: "@no Largely at the owner's discretion",
            us: "@no Codes often set no penalty for killing a slave while punishing them",
          },
          {
            issue: "Killing",
            hebrew: "@yes The servant is to be \"avenged\" (Exodus 21:20), though the next verse exempts a death after a day or two",
            foreign: "@yes The same law",
            hammurabi: "@no A physician who kills a slave replaces him with another slave (§219)",
            rome: "@partial From Antoninus Pius, killing a slave without just cause could be tried as homicide",
            us: "@partial Some later codes made mistreatment a crime; owners were rarely punished",
          },
          {
            issue: "Weekly rest",
            hebrew: "@yes Sabbath rest includes servants (Exodus 20:10; Deuteronomy 5:14)",
            foreign: "@yes The same law",
            hammurabi: "@na",
            rome: "@na",
            us: "@na",
          },
        ]}
      />
    </VisualCard>
  )
}

function AbolitionGallery() {
  return (
    <VisualCard
      title="Scripture for and against slavery"
      subtitle="The full Bible was read as a threat to slavery by the people who edited it, and as a charter of freedom by the people who campaigned against it."
      sources={[
        { label: "Wikipedia, \"Am I Not a Man and a Brother?\"", url: "https://en.wikipedia.org/wiki/Am_I_Not_a_Man_and_a_Brother%3F" },
        { label: "TheTorah.com, \"The Slave Bible: For Slavery or Salvation?\"", url: "https://www.thetorah.com/article/the-slave-bible-for-slavery-or-salvation" },
        { label: "Wikipedia, \"William Wilberforce\"", url: "https://en.wikipedia.org/wiki/William_Wilberforce" },
      ]}
    >
      <Gallery
        columns={3}
        images={[
          {
            src: "/images/slavery/slave-bible.jpg",
            width: 700,
            height: 1139,
            alt: "Title page of Select Parts of the Holy Bible for the use of the Negro Slaves, 1807",
            caption: "*Select Parts of the Holy Bible, for the Use of the Negro Slaves* (London, 1807), the \"Slave Bible\", which left out the exodus and Galatians 3:28.",
            credit: "Law & Gilbert, digitised by Oxford University",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Select_Parts_of_the_Holy_Bible_for_use_of_the_Negro_Slaves.jpg",
          },
          {
            src: "/images/slavery/wedgwood-medallion.jpg",
            width: 700,
            height: 810,
            alt: "Wedgwood jasperware medallion of a kneeling man in chains, inscribed Am I not a man and a brother",
            caption: "Josiah Wedgwood's 1787 medallion for the Society for Effecting the Abolition of the Slave Trade. Its motto, \"Am I not a man and a brother?\", became the emblem of the campaign.",
            credit: "Josiah Wedgwood, Walters Art Museum",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Wedgwood_-_Anti-Slavery_Medallion_-_Walters_482597.jpg",
          },
          {
            src: "/images/slavery/wilberforce.jpg",
            width: 700,
            height: 615,
            alt: "Unfinished oil portrait of William Wilberforce",
            caption: "William Wilberforce, the evangelical MP who led the parliamentary campaign that ended the British slave trade in 1807. Unfinished portrait by Thomas Lawrence, 1828.",
            credit: "Thomas Lawrence, National Portrait Gallery",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:William_Wilberforce_by_Thomas_Lawrence_1828.jpg",
          },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "law-comparison": LawComparison,
  gallery: AbolitionGallery,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
