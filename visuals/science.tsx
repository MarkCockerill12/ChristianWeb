"use client"

import Image from "next/image"

import { BarChart, SERIES } from "@/components/visuals/charts"
import { CardGrid, Legend, StepStrip, VisualCard } from "@/components/visuals/kit"

type Person = readonly [slug: string, name: string, dates: string, work: string, faith: string, w: number, h: number, src: string]

const PEOPLE: readonly Person[] = [
  ["copernicus", "Nicolaus Copernicus", "1473-1543", "The heliocentric model", "Canon of Frombork cathedral", 400, 500, "https://commons.wikimedia.org/wiki/File:Nikolaus_Kopernikus_MOT.jpg"],
  ["kepler", "Johannes Kepler", "1571-1630", "The laws of planetary motion", "Trained for the Lutheran ministry", 400, 574, "https://commons.wikimedia.org/wiki/File:JKepler.jpg"],
  ["pascal", "Blaise Pascal", "1623-1662", "Hydrostatics; probability", "Wrote the *Pensées* in defence of the faith", 400, 477, "https://commons.wikimedia.org/wiki/File:Blaise_Pascal_Versailles,_circa_1690.JPG"],
  ["boyle", "Robert Boyle", "1627-1691", "Experimental chemistry", "Endowed lectures defending Christianity", 400, 505, "https://commons.wikimedia.org/wiki/File:The_Shannon_Portrait_of_the_Hon_Robert_Boyle.jpg"],
  ["steno", "Nicolas Steno", "1638-1686", "Stratigraphy, the basis of geology", "Catholic bishop, beatified in 1988", 400, 593, "https://commons.wikimedia.org/wiki/File:Stensen_Schwerin.jpg"],
  ["newton", "Isaac Newton", "1643-1727", "Motion and universal gravitation", "Devout, but privately anti-Trinitarian", 400, 482, "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg"],
  ["linnaeus", "Carl Linnaeus", "1707-1778", "Naming of species", "Saw classification as cataloguing God's works", 400, 486, "https://commons.wikimedia.org/wiki/File:Carl_von_Linn%C3%A9,_1707-1778,_botanist,_professor_(Alexander_Roslin)_-_Nationalmuseum_-_15723_(cropped).tif"],
  ["faraday", "Michael Faraday", "1791-1867", "Electromagnetic induction", "Elder and lay preacher, Sandemanian church", 400, 529, "https://commons.wikimedia.org/wiki/File:Michael_Faraday_sitting_crop.jpg"],
  ["mendel", "Gregor Mendel", "1822-1884", "The laws of inheritance", "Augustinian friar and abbot", 400, 543, "https://commons.wikimedia.org/wiki/File:Gregor_Mendel_2.jpg"],
  ["pasteur", "Louis Pasteur", "1822-1895", "Germ theory; vaccines", "Practising Catholic", 400, 551, "https://commons.wikimedia.org/wiki/File:Louis_Pasteur,_foto_av_Paul_Nadar,_Crisco_edit.jpg"],
  ["maxwell", "James Clerk Maxwell", "1831-1879", "Electromagnetism", "Presbyterian elder; Psalm 111:2 over the Cavendish door", 400, 500, "https://commons.wikimedia.org/wiki/File:James-Clerk-Maxwell-1831-1879.jpg"],
  ["lemaitre", "Georges Lemaître", "1894-1966", "The expanding universe and its beginning", "Catholic priest", 400, 598, "https://commons.wikimedia.org/wiki/File:GLemaitre30.jpg"],
]

function Founders() {
  return (
    <VisualCard
      title="Twelve believers who built modern science"
      subtitle="Each name appears in the sections below. Selected not to prove the faith true, but against the claim that serious science and Christian conviction cannot share one mind."
      note="Portraits are public domain; select a name for its Wikimedia Commons file."
    >
      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none p-0 m-0">
        {PEOPLE.map(([slug, name, dates, work, faith, w, h, src]) => (
          <li key={slug} className="viz-info rounded-lg border overflow-hidden flex flex-col">
            <div className="aspect-[4/5] bg-[color:var(--viz-hover)] overflow-hidden">
              <Image src={`/images/science/${slug}.jpg`} alt={`Portrait of ${name}`} width={w} height={h} sizes="(min-width: 1024px) 15vw, 45vw" className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-2.5 flex flex-col grow">
              <a href={src} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm leading-tight hover:underline">
                {name}
              </a>
              <span className="text-[11px] text-[color:var(--viz-muted)] tabular-nums">{dates}</span>
              <span className="text-[12px] mt-1 leading-snug">{work}</span>
              <span className="text-[12px] mt-1 leading-snug text-[color:var(--viz-ink-2)]" dangerouslySetInnerHTML={{ __html: faith.replace(/\*(.+?)\*/g, "<em>$1</em>") }} />
            </div>
          </li>
        ))}
      </ol>
    </VisualCard>
  )
}

function Beliefs() {
  return (
    <VisualCard
      title="Belief in God: American scientists and the public"
      subtitle="Pew Research Center's 2009 survey of members of the American Association for the Advancement of Science, beside the general public. American scientists are markedly less religious; the international picture is more mixed."
      note="The scientists' three answers total 92%; Pew did not report the remaining 8%."
      sources={[
        { label: "Pew Research Center, \"Scientists and Belief\" (2009)", url: "https://www.pewresearch.org/religion/2009/11/05/scientists-and-belief/" },
      ]}
    >
      <Legend items={[{ label: "AAAS scientists (2009)", color: SERIES[0] }, { label: "US public (2006)", color: SERIES[1] }]} />
      <div className="space-y-4">
        {[
          ["Believe in God", 33, 83],
          ["Believe in a universal spirit or higher power", 18, 12],
          ["Believe in neither", 41, 4],
        ].map(([label, sci, pub]) => (
          <div key={label as string}>
            <div className="text-[13px] font-semibold mb-1">{label}</div>
            <BarChart
              labelWidth="5.5rem"
              max={100}
              unit="%"
              data={[
                { label: "Scientists", value: sci as number, color: SERIES[0] },
                { label: "Public", value: pub as number, color: SERIES[1] },
              ]}
            />
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function Galileo() {
  return (
    <VisualCard
      title="The Galileo affair in sequence"
      subtitle="Ninety years from Copernicus's book to Galileo's sentence, and two more centuries before the direct proof."
      sources={[
        { label: "Wikipedia, \"Galileo affair\"", url: "https://en.wikipedia.org/wiki/Galileo_affair" },
        { label: "Wikipedia, \"Stellar parallax\" (Bessel, 1838)", url: "https://en.wikipedia.org/wiki/Stellar_parallax" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "1543", title: "Copernicus publishes", body: "*De revolutionibus*, dedicated to Pope Paul III." },
          { label: "1615", title: "Letter to Christina", body: "Galileo: Scripture teaches how to go to heaven, not how heaven goes." },
          { label: "1616", title: "The warning", body: "Copernicanism declared contrary to Scripture; Bellarmine's certificate: no penalty." },
          { label: "1632", title: "The Dialogue", body: "Urban VIII's argument put in the mouth of Simplicio." },
          { label: "1633", title: "Trial and abjuration", body: "House arrest for the rest of his life." },
          { label: "1838", title: "Bessel measures parallax", body: "The first direct observational proof of the earth's motion." },
        ]}
      />
    </VisualCard>
  )
}

function Courtroom() {
  return (
    <VisualCard
      title="Origins in the American courts"
      subtitle="The cases behind the popular story, from Dayton to Dover. Each later ruling was decided on the constitutional separation of church and state."
      sources={[
        { label: "Wikipedia, \"Scopes trial\"", url: "https://en.wikipedia.org/wiki/Scopes_trial" },
        { label: "Wikipedia, \"Edwards v. Aguillard\"", url: "https://en.wikipedia.org/wiki/Edwards_v._Aguillard" },
        { label: "Wikipedia, \"Kitzmiller v. Dover Area School District\"", url: "https://en.wikipedia.org/wiki/Kitzmiller_v._Dover_Area_School_District" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "1925", title: "Scopes", body: "Convicted and fined $100; overturned on a technicality." },
          { label: "1968", title: "Epperson v. Arkansas", body: "Bans on teaching evolution struck down." },
          { label: "1982", title: "McLean v. Arkansas", body: "Balanced treatment of creation science rejected." },
          { label: "1987", title: "Edwards v. Aguillard", body: "The Supreme Court does the same." },
          { label: "2005", title: "Kitzmiller v. Dover", body: "Intelligent design ruled not science for a school curriculum." },
        ]}
      />
    </VisualCard>
  )
}

function Models() {
  return (
    <VisualCard
      title="Four ways of relating science and religion"
      subtitle="Ian Barbour's typology, widely used to map the debate. In most regions of Ecklund's international study, a majority of scientists described independence or collaboration rather than conflict."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Religion and Science\"", url: "https://plato.stanford.edu/entries/religion-science/" },
      ]}
    >
      <CardGrid
        columns={4}
        cards={[
          { title: "Conflict", body: "Science and religion make rival claims about the same things, and one must lose. The warfare thesis of Draper and White." },
          { title: "Independence", body: "They answer different questions by different methods and cannot clash. Gould's non-overlapping magisteria." },
          { title: "Dialogue", body: "Each raises questions the other can address, such as why the universe is intelligible at all." },
          { title: "Integration", body: "Findings of science inform theology directly, as in natural theology and arguments from fine-tuning." },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  founders: Founders,
  beliefs: Beliefs,
  galileo: Galileo,
  courtroom: Courtroom,
  models: Models,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
