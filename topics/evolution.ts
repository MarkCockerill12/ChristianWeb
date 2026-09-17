import type { Topic } from './types'

export const EVOLUTION: Topic = {
  id: "evolution",
  title: "Evolution vs Creation",
  description: "Genesis and science on the age of the earth, dinosaurs, Neanderthals, Adam, the Flood and every major objection, with each Christian view and its answers.",
  icon: "Globe",
  color: "green",
  tags: ["Science", "Creation", "Origins", "Dinosaurs", "Human Origins"],
  verses: [
    { reference: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth." },
    { reference: "Genesis 1:31", text: "God saw all that he had made, and it was very good. And there was evening, and there was morning, the sixth day." },
    { reference: "Job 40:15", text: "Look at Behemoth, which I made along with you and which feeds on grass like an ox." },
    { reference: "Hebrews 11:3", text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible." },
    { reference: "Romans 5:12", text: "Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned." },
    { reference: "Colossians 1:16-17", text: "For in him all things were created: things in heaven and on earth, visible and invisible... he is before all things, and in him all things hold together." }
  ],
  tldr: "Believers who affirm biblical authority hold several views of origins, from a young earth created in six days to evolutionary creation, and all affirm God as Creator. Mainstream science dates the universe to 13.8 billion years, places the last non-avian dinosaurs 66 million years before the first humans, and finds that Neanderthals and modern humans interbred. Young earth creationists place dinosaurs and Neanderthals within the last few thousand years; other Christians accept the scientific dates and read Genesis differently. The historicity of Adam is doctrinally load-bearing in a way the age of the earth is not, and several popular arguments on both sides do not hold up.",
  content: `
Discussions of origins combine two questions that come apart. The first is theological: how Genesis 1 to 11 should be read, and what that reading commits a believer to[^1]. The second is empirical: what the evidence indicates about the age of the earth, the history of life, and the origin of human beings[^2].

A position on the first does not automatically settle the second, which is why people who affirm the authority of Scripture hold several different views, from a young earth made in six ordinary days to evolutionary creation[^3][^4].

Scripture is true in what it affirms, and the real question in each case is what a given passage affirms[^5]. Its authority does not rest on any particular apologetic argument holding up. Augustine warned in the early fifth century that when believers make confident claims about the natural world that an unbeliever knows from reason and experience to be false, they bring Scripture itself into contempt[^6].

Two subjects draw the most questions: whether dinosaurs lived before humans or alongside them, and how early humans such as the Neanderthals relate to Adam. Both are set out in detail, along with the main scientific, historical and literary objections raised against Genesis and the answers each Christian view gives to them.
`,
  timeline: [
    {
      id: 1,
      date: "c. 13.8 billion years ago",
      title: "The universe begins",
      period: "Cosmos",
      color: "indigo",
      description: "Measurements of cosmic expansion and of the cosmic microwave background place the hot, dense beginning of the observable universe about 13.8 billion years ago.",
      significance: "A universe with a beginning is consistent with Genesis 1:1; young earth creationists accept a beginning but reject the age."
    },
    {
      id: 2,
      date: "c. 4.54 billion years ago",
      title: "The earth forms",
      period: "Earth",
      color: "blue",
      description: "Lead isotopes in meteorites date the solar system to about 4.567 billion years, and zircon crystals from the Jack Hills of Western Australia are about 4.4 billion years old.",
      significance: "Several independent radiometric methods converge on this age."
    },
    {
      id: 3,
      date: "c. 3.5 billion years ago",
      title: "Early life",
      period: "Earth",
      color: "teal",
      description: "Stromatolites and microfossils provide the earliest widely accepted evidence of single-celled life; some older claims are disputed.",
      significance: "How life began remains an unsolved scientific problem."
    },
    {
      id: 4,
      date: "c. 2.4 billion years ago",
      title: "Oxygen accumulates",
      period: "Earth",
      color: "teal",
      description: "Photosynthesising microbes cause the Great Oxidation Event, the first sustained build-up of oxygen in the atmosphere.",
      significance: "Prepares the atmosphere for later complex life."
    },
    {
      id: 5,
      date: "c. 539 million years ago",
      title: "Cambrian explosion",
      period: "Life",
      color: "green",
      description: "Most major animal body plans appear in the fossil record over some tens of millions of years, preceded by the Ediacaran biota.",
      significance: "A rapid diversification that design advocates and evolutionary biologists interpret differently."
    },
    {
      id: 6,
      date: "c. 375 million years ago",
      title: "Fish with limbs",
      period: "Life",
      color: "green",
      description: "Tiktaalik, a fish with a neck, wrist bones and lungs, lives in shallow streams; it was found in 2004 by searching rocks of the predicted age.",
      significance: "A transitional form between fish and four-legged animals."
    },
    {
      id: 7,
      date: "c. 252 million years ago",
      title: "The Great Dying",
      period: "Life",
      color: "red",
      description: "The end-Permian extinction wipes out roughly nine in ten marine species.",
      significance: "Opens the way for the reptiles from which dinosaurs arise."
    },
    {
      id: 8,
      date: "c. 233 million years ago",
      title: "The first dinosaurs",
      period: "Dinosaurs",
      color: "amber",
      description: "Early dinosaurs such as Eoraptor and Herrerasaurus appear in the Late Triassic.",
      significance: "Dinosaurs dominate land ecosystems for the next 165 million years."
    },
    {
      id: 9,
      date: "c. 150 million years ago",
      title: "Archaeopteryx",
      period: "Dinosaurs",
      color: "amber",
      description: "A feathered dinosaur with wings, teeth and a bony tail lives in what is now Germany.",
      significance: "One of many fossils linking dinosaurs to birds."
    },
    {
      id: 10,
      date: "66 million years ago",
      title: "The dinosaurs' extinction",
      period: "Dinosaurs",
      color: "red",
      description: "An asteroid about 10 km wide strikes Chicxulub in Mexico; all non-avian dinosaurs die out, along with about three-quarters of species.",
      significance: "On the scientific dating, no human ever saw a living non-avian dinosaur; birds are the surviving dinosaur lineage."
    },
    {
      id: 11,
      date: "c. 7-6 million years ago",
      title: "Human and chimpanzee lineages part",
      period: "Human origins",
      color: "orange",
      description: "Sahelanthropus tchadensis, from Chad, is among the earliest proposed members of the human lineage.",
      significance: "Genetic comparison places the split between human and chimpanzee ancestors in this period."
    },
    {
      id: 12,
      date: "c. 3.2 million years ago",
      title: "Lucy",
      period: "Human origins",
      color: "orange",
      description: "Australopithecus afarensis walks upright with an ape-sized brain; footprints at Laetoli are about 3.66 million years old.",
      significance: "Upright walking long precedes large brains."
    },
    {
      id: 13,
      date: "c. 2.6 million years ago",
      title: "Stone tools spread",
      period: "Human origins",
      color: "orange",
      description: "Oldowan stone tools appear in East Africa, soon after the earliest fossils assigned to Homo; older tools at Lomekwi date to 3.3 million years.",
      significance: "Toolmaking predates Homo sapiens by millions of years."
    },
    {
      id: 14,
      date: "c. 1.9 million years ago",
      title: "Homo erectus",
      period: "Human origins",
      color: "orange",
      description: "A tall, long-legged human species appears and soon spreads out of Africa, reaching Dmanisi in Georgia by about 1.8 million years ago.",
      significance: "Controlled use of fire is attested within the next million years."
    },
    {
      id: 15,
      date: "c. 430,000 years ago",
      title: "Early Neanderthals",
      period: "Human origins",
      color: "purple",
      description: "Fossils and ancient DNA from Sima de los Huesos in Spain belong to the early Neanderthal lineage.",
      significance: "Neanderthals and modern humans share ancestors further back in time."
    },
    {
      id: 16,
      date: "c. 315,000 years ago",
      title: "Earliest Homo sapiens",
      period: "Human origins",
      color: "purple",
      description: "Fossils from Jebel Irhoud in Morocco show modern faces with more primitive braincases.",
      significance: "Our species is at least 300,000 years old on the fossil evidence."
    },
    {
      id: 17,
      date: "c. 60,000-45,000 years ago",
      title: "Out of Africa and interbreeding",
      period: "Human origins",
      color: "purple",
      description: "Modern humans spread across Eurasia and interbreed with Neanderthals and Denisovans, whose DNA survives in people today.",
      significance: "Most people of non-African ancestry carry roughly 1 to 2 per cent Neanderthal DNA."
    },
    {
      id: 18,
      date: "c. 51,200 years ago",
      title: "Early figurative art",
      period: "Human origins",
      color: "purple",
      description: "A cave painting on Sulawesi in Indonesia shows human figures interacting with a wild pig.",
      significance: "Symbolic and artistic behaviour is well established by this date."
    },
    {
      id: 19,
      date: "c. 40,000 years ago",
      title: "Neanderthals disappear",
      period: "Human origins",
      color: "rose",
      description: "The last Neanderthal populations vanish from Europe, absorbed and replaced by modern humans.",
      significance: "Their genes survive through interbreeding."
    },
    {
      id: 20,
      date: "c. 11,500 years ago",
      title: "The first farmers",
      period: "Human origins",
      color: "rose",
      description: "Agriculture and animal domestication begin in the Fertile Crescent, and monumental sites such as Göbekli Tepe are built.",
      significance: "Genesis 4 describes farming, herding, a city and metalworking within a few generations of Adam, one reason some Christians place Adam in this Neolithic setting."
    }
  ],
  subtopics: [
    {
      id: "reading-genesis",
      title: "Reading Genesis 1: Days, Genre and Structure",
      tags: ["hebrew", "genesis", "interpretation", "yom"],
      content: `
The interpretive question turns largely on genre and on one Hebrew word, *yom*, "day"[^7].

**The case for ordinary days.** *Yom* most often means a 24-hour day. Young earth creationists point out that in Genesis 1 it is joined to a number and to "evening and morning", a combination they argue always means an ordinary day[^8]. Their strongest text is Exodus 20:11, where the Sabbath command rests on the fact that "in six days the LORD made the heavens and the earth", which appears to tie the creation days to the working week[^9].

**The case for a wider sense.** The same word is used for an indefinite period, as in "the day of the LORD", and Genesis 2:4 speaks of "the day" the LORD God made the earth and the heavens, covering the whole creation week[^10]. Numbered days are not always literal outside Genesis 1: Hosea 6:2 uses "after two days... on the third day" figuratively[^11]. The seventh day has no closing "evening and morning", and Hebrews 4 treats God's Sabbath rest as still continuing[^12]. Exodus 31:17 says that on the seventh day God "rested and was refreshed", language that describes God by analogy with a human worker, which suggests to many interpreters that the week is analogical rather than a measure of duration[^13].

**The sun on the fourth day.** The sun, moon and stars are made on day four, so the first three "days" have evening and morning without a sun. Origen already asked in the third century how there could be a first, second and third day without sun, moon and stars, and concluded that the days were not meant literally[^14]. Young earth creationists answer that God supplied a temporary light source; day-age advocates that the sun already existed and became visible or was appointed to its role on day four[^15].

**Literary structure.** Days one to three form realms (light and darkness; sky and sea; land and plants), and days four to six fill them in the same order (lights; birds and fish; land animals and humans). The framework interpretation, developed by Meredith Kline, reads this as a deliberate topical arrangement rather than a chronological log[^16]. John Walton reads Genesis 1 against its ancient setting as God assigning functions to the cosmos as his temple[^17], and C. John Collins argues that the days are God's workdays described by analogy with ours[^18].

**Divine time.** Psalm 90:4 and 2 Peter 3:8 say that a thousand years are like a day to God. Both are poetic statements about God's relation to time rather than formulas for converting days into ages, and neither side's case depends on them[^19].
`
    },
    {
      id: "history-of-interpretation",
      title: "How the Church Has Read Genesis",
      tags: ["history", "church fathers", "reformation", "fundamentalism"],
      content: `
The modern debate is often presented as a new compromise with science. The history is more mixed than either side usually allows.

**The early church.** Most church fathers believed the world was only a few thousand years old. Irenaeus argued that Adam died within the "day" of Genesis 2:17 because he did not reach a thousand years, reading a day as a thousand years[^20]. Basil of Caesarea took the days as 24-hour periods in his *Hexaemeron*[^21]. Augustine, by contrast, held that God created all things in a single moment and that the six days describe an order of knowing rather than a sequence of ordinary days, yet he also rejected accounts that made the world many thousands of years old, since by the biblical record fewer than six thousand years had passed[^22]. Aquinas later set out both Augustine's reading and the more common literal one without condemning either[^23].

**Reformation to the eighteenth century.** Luther and Calvin read the days as ordinary days. Archbishop James Ussher's chronology of 1650 dated creation to 4004 BC, and his dates were printed in the margins of many English Bibles[^24]. By the late eighteenth century geologists such as James Hutton, reading the rock record, concluded that the earth was far older[^25].

**Nineteenth-century evangelicals.** Many conservative Protestants accepted an old earth well before Darwin. Thomas Chalmers popularised the gap theory in 1814, placing geological ages between Genesis 1:1 and 1:2[^26]. The geologist Hugh Miller defended the day-age view[^27]. B. B. Warfield, the leading defender of biblical inerrancy at Princeton, regarded evolution as compatible with Scripture provided God's providence and the special creation of the soul were maintained[^28], and James Orr, a contributor to *The Fundamentals* (1910-1915), took a similar position[^29].

**The modern young earth movement.** Strict six-day creation with a global flood explaining most of the fossil record was revived in the early twentieth century by George McCready Price, a Seventh-day Adventist writer[^30]. It entered mainstream evangelicalism with Henry Morris and John Whitcomb's *The Genesis Flood* in 1961[^31].

**Evangelical and Catholic statements.** The Chicago Statement on Biblical Inerrancy (1978) holds that scientific hypotheses may not be used to overturn Scripture's teaching on creation and the flood, but it does not define the age of the earth[^32]. The 1982 Chicago Statement on Biblical Hermeneutics affirms that Genesis 1 to 11 is factual[^33]. In the Catholic Church, Pius XII's *Humani Generis* (1950) allowed investigation of the evolution of the human body while insisting that souls are created immediately by God and that the view that humanity descends from many first parents cannot be reconciled with the doctrine of original sin[^34]. John Paul II described evolution in 1996 as "more than a hypothesis"[^35], and the International Theological Commission in 2004 accepted common descent while affirming the special creation of the human soul[^36].
`
    },
    {
      id: "views-on-origins",
      title: "The Main Christian Views on Origins",
      tags: ["yec", "oec", "gap theory", "framework", "evolutionary creation", "intelligent design"],
      content: `
The positions below are all held by Christians who accept the authority of Scripture. They differ on the age of the earth, on how the days are read, and on common descent[^37].

*   **Young Earth Creationism.** The universe and earth are roughly 6,000 to 10,000 years old, created in six consecutive 24-hour days. Distinct "kinds" were created separately, there was no animal death before Adam's sin, and a global flood laid down most of the fossil-bearing rock. Represented by Answers in Genesis, the Institute for Creation Research and Creation Ministries International[^38].
*   **Gap Theory.** An indefinite period separates Genesis 1:1 from 1:2, sometimes linked to the fall of Satan, and the six days describe a later re-creation. Popularised by the Scofield Reference Bible (1909), it is now held by few scholars because the Hebrew of 1:2 does not naturally describe a later ruin[^39][^40].
*   **Day-Age and Progressive Creation.** The days are long ages in the right order, the scientific ages of the universe and earth are accepted, and God created new forms at intervals rather than through common descent. Hugh Ross and Reasons to Believe are the leading representatives[^41][^42][^43].
*   **Framework and Analogical Days.** The days are a literary arrangement (Kline) or God's workdays described by analogy with human ones (Collins)[^44]. Both are compatible with an old earth and take no position in themselves on common descent.
*   **Cosmic Temple (Functional) View.** John Walton argues that ancient audiences understood creation mainly as the assigning of functions and order, not the manufacture of matter, so that Genesis 1 describes God inaugurating the cosmos as his temple. The account makes no claim about material origins or their timing[^45][^46].
*   **Historical Creationism.** John Sailhamer argued that Genesis 1:1 covers the creation of the universe over an unspecified time, and that the six days describe God preparing the promised land of Eden for humanity[^47].
*   **Evolutionary Creation.** God created through evolutionary processes that he sustains and directs, common descent (including that of humans) is accepted, and Genesis is read for its theological claims within an ancient setting. Views of Adam within this position differ widely[^48].
*   **Intelligent Design.** Not a reading of Genesis but an argument that certain features of nature are best explained by intelligence. Its proponents range from young earth creationists to those who accept common descent, such as Michael Behe[^49].

All of these views hold that God created deliberately, that the universe is not self-explanatory, and that humanity bears God's image.
`
    },
    {
      id: "age-of-the-earth",
      title: "How Old Is the Earth? The Evidence and the Young-Earth Response",
      tags: ["age of the earth", "radiometric dating", "starlight", "geology"],
      content: `
**The mainstream evidence.** Several independent lines of evidence point to an old earth and universe, and their agreement is the main reason scientists regard the question as settled[^50].

*   **Radiometric dating.** Different radioactive decay systems (uranium-lead, potassium-argon, rubidium-strontium and others), measured in different laboratories on different minerals, agree closely. Meteorites date to about 4.567 billion years, and zircon crystals from Western Australia to about 4.4 billion years[^51][^52].
*   **Annual layers.** Antarctic ice cores record about 800,000 years of snowfall, and Greenland cores preserve individually countable annual layers for tens of thousands of years[^53][^54]. The sediments of Lake Suigetsu in Japan contain annual layers covering tens of thousands of years, and continuous tree-ring chronologies extend back more than 12,000 years; both are used to calibrate radiocarbon dating independently[^55][^56][^57].
*   **Distant starlight.** Light from supernova 1987A took about 168,000 years to arrive, and the explosion itself was observed as it reached us, with its light illuminating rings of earlier ejected gas[^58]. Galaxies are seen at distances of billions of light-years, and the universe's age is measured at about 13.8 billion years[^59].
*   **Plate movement.** The Atlantic widens by a few centimetres a year, consistent with the ocean floor's measured age of up to about 180 million years[^60].

**The young earth responses.** Young earth scientists accept that these data exist and propose other explanations[^61].

*   **Accelerated decay.** The RATE project (1997-2005) proposed that radioactive decay was greatly accelerated during creation week and the Flood. Its own authors acknowledged that decay on that scale would release enough heat to melt the earth's crust, and the Institute for Creation Research lists the heat problem among the project's unresolved difficulties[^62][^63].
*   **Starlight.** Proposals include cosmological models in which time ran at different rates in different places (D. Russell Humphreys) and a convention in which light travels instantly towards an observer (Jason Lisle). Mainstream physicists do not accept these models[^64].
*   **Mature creation.** Philip Gosse's *Omphalos* (1857) argued that God created a world that looked old, as Adam was created an adult[^65]. The standard objection is that starlight and rock layers record detailed events, such as exploding stars and sequences of ancient environments, that on this view never happened, which many theologians regard as making God deceptive[^66].
*   **Evidence cited for youth.** Arguments from the earth's magnetic field, ocean salt, helium in zircons and radiocarbon in coal and diamonds are answered in the scientific literature as depending on incorrect assumptions or contamination[^67][^68]. Soft tissue in dinosaur bones, first reported by Mary Schweitzer in 2005, is real; Schweitzer, an evangelical Christian, has objected that young earth creationists misrepresent her work, and her team has shown that iron from blood can preserve tissue over long periods[^69][^70]. Answers in Genesis itself advises against using several older arguments, such as moon dust thickness[^71].

**The honest positions on both sides.** Some young earth scientists are frank about where their conviction rests. Kurt Wise, a Harvard-trained palaeontologist, wrote that if all the evidence in the universe turned against creationism he would still be a creationist, because that is what the Word of God seems to indicate[^72][^73]. Todd Wood, a young earth biologist, wrote in 2009 that evolution "is not a theory in crisis" and has "gobs and gobs" of evidence, urging creationist students to base their position on Scripture rather than on claims that the science is failing[^74]. The case for a young earth is therefore theological, resting on a particular reading of Genesis, rather than scientific, and old earth Christians argue that the reading is not required by the text.
`
    },
    {
      id: "dinosaurs",
      title: "Dinosaurs: Before Humans or Alongside Them?",
      tags: ["dinosaurs", "age of the earth", "fossils", "genesis"],
      content: `
**What the Bible says.** The word "dinosaur" was coined by Richard Owen in 1842, so no English Bible uses it, just as none uses "kangaroo"[^75]. Scripture neither names dinosaurs nor dates them. Every answer to the question therefore depends on how Genesis 1 and the age of the earth are understood.

**What the fossil record shows.** Dinosaurs first appear about 233 million years ago in the Late Triassic and dominate the land for over 160 million years[^76][^77]. All non-avian dinosaurs disappear at the end of the Cretaceous, 66 million years ago, when an asteroid struck Chicxulub in Mexico[^78][^79]. The earliest members of the human genus appear about 2.8 million years ago and Homo sapiens about 300,000 years ago, so on the scientific dating more than 60 million years separate the last Tyrannosaurus from the first human[^80][^81]. Birds are the one dinosaur lineage that survived: feathered dinosaurs from China and fossils such as Archaeopteryx document the transition[^82].

**The young earth view: created alongside humans.** Answers in Genesis teaches that land-dwelling dinosaurs were created on day six with Adam, and flying reptiles and marine reptiles on day five, that pairs of dinosaur kinds (young ones, to save space) were on Noah's ark, and that most dinosaur fossils were buried in the Flood, with survivors later dying out[^83]. On this view dinosaurs are among the "great sea creatures" (*tannin*) and land creatures of Genesis 1, and memories of them survive in dragon legends[^84][^85].

**The old earth and evolutionary views: long before humans.** Old earth creationists and evolutionary creationists accept that dinosaurs lived and died long before humans. Genesis 1 describes categories of creatures ("great sea creatures", "livestock", "creatures that move along the ground") without listing every species, and nothing in the text requires every kind to have been alive at the same time[^86].

**Where the evidence weighs.** The objection to the young earth view is not only the dating. Dinosaur fossils are never found in the same rock layers as human remains or large modern mammals such as horses, elephants and whales, which is difficult to explain if all were buried together in one flood. Dinosaur nesting sites with eggs, trackways and burrows appear at many successive levels, which requires dinosaurs to have been living normally on dry land while the Flood supposedly deposited the layers beneath them. Dinosaur bones also show disease, healed injuries and even bone cancer: a malignant osteosarcoma was diagnosed in 2020 in a 76-million-year-old Centrosaurus[^87][^88].
`
    },
    {
      id: "behemoth-leviathan-dragons",
      title: "Behemoth, Leviathan, Dragons and Other Dinosaur Claims",
      tags: ["behemoth", "leviathan", "dragons", "paluxy", "job"],
      content: `
**Behemoth (Job 40:15-24).** The Hebrew *behemot* is the plural of the ordinary word for "beast", probably used as a plural of majesty: "the great beast"[^89]. It eats grass like an ox, lies under lotus plants in the marsh, and is untroubled when the Jordan rushes against its mouth[^90]. The most debated line is verse 17, "he stiffens his tail like a cedar"[^91].

*   **As a sauropod.** Answers in Genesis argues that a tail like a cedar fits a long-necked sauropod such as Apatosaurus, not a hippopotamus or elephant with a short tail, and that God's words "which I made along with you" show that Behemoth lived at the same time as humans[^92].
*   **As a hippopotamus or elephant.** Most commentators identify Behemoth with the hippopotamus, which fits the marsh setting, the grass diet and the river, and which lived in the Nile and formerly in the Levant[^93][^94]. Some take "tail" as a euphemism, since the parallel line speaks of the sinews of its thighs, rendered by the Latin Vulgate as its testicles, so the verse describes its strength rather than its length. Critics of the sauropod reading add that an animal lying hidden among lotus plants and reeds suits a hippopotamus far better than a sauropod, and that the passage calls Behemoth "first among the works of God", which is poetic rather than zoological[^95].
*   **"Made along with you."** The phrase says that God made Behemoth as he made Job, emphasising that both are creatures, and holds whether or not they were created on the same day. A hippopotamus lived in Job's world in any case.

**Leviathan (Job 41).** Leviathan breathes fire and smoke, cannot be pierced by any weapon, and is described as a creature no human can master[^96]. Elsewhere Leviathan has several heads (Psalm 74:14) and is called "the fleeing serpent... the coiling serpent" (Isaiah 27:1)[^97][^98]. Almost identical words describe Lotan, the seven-headed sea serpent defeated by Baal in texts from Ugarit (14th to 12th centuries BC)[^99]. Most scholars therefore read Leviathan as the chaos monster of ancient Near Eastern poetry, used to show that the God of Israel has mastered everything other peoples feared; in Job 41 its description may draw on the crocodile[^100][^101]. Young earth writers who identify it with a marine reptile must treat the fire-breathing as literal, which no known reptile could do.

**"Dragons" and "flying serpents".** The King James Version sometimes translates *tannin* and related words as "dragons", but in context they mean sea monsters, great serpents or, in some verses, jackals[^102]. The "flying serpent" of Isaiah 30:6 is sometimes claimed as a pterosaur, but it appears in a list of desert dangers alongside lions and vipers, in a poem about the Negev, which suits a venomous snake described vividly[^103].

**Dragon legends.** Dragon stories appear in many cultures. The folklorist Adrienne Mayor has shown that ancient peoples did find dinosaur and mammal fossils and interpreted them through myth, as with the griffin legends of Central Asia and the fossils of Protoceratops[^104][^105]. In China, fossil "dragon bones" have long been collected for traditional medicine, and local people directed the geologist Johan Gunnar Andersson to Dragon Bone Hill at Zhoukoudian, where Peking Man was later found[^106][^107]. The legends therefore fit people finding fossils, and do not require people to have seen living dinosaurs.

**Claims that do not hold.**

*   **The Paluxy River "man tracks".** Supposed human footprints beside dinosaur tracks in Texas turned out to be elongated dinosaur tracks, erosion features and some carvings. The creationist film *Footprints in Stone* was withdrawn by its producers in 1986, and Answers in Genesis lists the tracks among arguments not to use[^108].
*   **The Ica stones.** Engraved stones from Peru showing humans with dinosaurs were admitted to be modern carvings by the farmer who sold them[^109].
*   **The Acámbaro figures.** Clay figurines from Mexico showing dinosaur-like animals are widely regarded as modern productions; their dating and the circumstances of their discovery are unreliable[^110].
*   **The Ta Prohm "stegosaurus".** A carving on a 12th-century Cambodian temple is claimed to show a stegosaurus; the "plates" match the decorative foliage around other carved animals, and the animal is more plausibly a rhinoceros or boar[^111].
`
    },
    {
      id: "human-origins",
      title: "Early Humans: What the Fossil and Genetic Record Shows",
      tags: ["human evolution", "fossils", "neanderthals", "genetics"],
      content: `
**The scientific picture.** The fossil record of the human lineage is now extensive, and the dates below are those of mainstream palaeoanthropology[^112].

*   **Earliest hominins (about 7 to 4 million years ago).** Sahelanthropus from Chad and later Ardipithecus show a mix of ape-like and human-like features, including signs of upright walking[^113].
*   **Australopithecines (about 4 to 2 million years ago).** Australopithecus afarensis, represented by "Lucy" (3.2 million years), walked upright with a chimpanzee-sized brain; footprints at Laetoli in Tanzania, 3.66 million years old, show a human-like gait[^114][^115].
*   **Early Homo and tools.** Stone tools at Lomekwi in Kenya date to 3.3 million years, and the Oldowan toolmaking tradition to 2.6 million years[^116][^117].
*   **Homo erectus (from about 1.9 million years ago).** With body proportions like ours, Homo erectus spread from Africa into Asia, reaching Dmanisi in Georgia by 1.8 million years ago, and was associated with fire use later in its long history[^118][^119][^120].
*   **Archaic humans.** Homo heidelbergensis (about 700,000 to 200,000 years ago) is often treated as the common ancestor of Neanderthals and modern humans[^121]. Homo naledi from South Africa (about 335,000 to 236,000 years ago) combined a small brain with human-like hands and feet; its discoverers' claim that it buried its dead is disputed[^122][^123]. Homo floresiensis, the "hobbit" of Indonesia, survived until about 50,000 years ago[^124].
*   **Neanderthals (about 400,000 to 40,000 years ago).** Neanderthals lived across Europe and western Asia, made sophisticated tools, controlled fire and buried some of their dead. DNA from Sima de los Huesos in Spain shows the Neanderthal lineage was already distinct about 430,000 years ago, and they disappeared about 40,000 years ago[^125][^126].
*   **Homo sapiens.** The oldest fossils of our species, from Jebel Irhoud in Morocco, are about 315,000 years old[^127][^128]. Engraved ochre from Blombos Cave in South Africa is about 75,000 years old, and a cave painting on Sulawesi dated to at least 51,200 years ago shows a narrative scene[^129][^130]. Symbolic behaviour appears gradually rather than in a single "great leap forward"[^131].
*   **Genetics.** The human genome differs from the chimpanzee genome by about 1.2 per cent in single-letter differences, and by roughly 4 per cent when insertions and deletions are included[^132]. Genetic evidence places the origin of modern humans in Africa, with a dispersal into Eurasia after about 60,000 years ago[^133].

**What Scripture says.** The Bible does not mention Neanderthals, Homo erectus or any other named hominin. It says that God made humanity in his image (Genesis 1:26-27), formed the man from the dust and breathed into him the breath of life (Genesis 2:7), and "from one man... made all the nations" (Acts 17:26). The questions are therefore where, if anywhere, these fossil humans fit within that account, and which of them bore God's image.
`
    },
    {
      id: "neanderthals-and-adam",
      title: "Neanderthals, Denisovans and the Image of God",
      tags: ["neanderthals", "denisovans", "image of god", "adam"],
      content: `
**Interbreeding.** The sequencing of the Neanderthal genome, for which Svante Pääbo received the 2022 Nobel Prize, showed that modern humans and Neanderthals interbred. People of non-African ancestry carry roughly 1 to 2 per cent Neanderthal DNA, and Papuans and some other Oceanians carry around 4 to 6 per cent from the Denisovans, a group first identified from a finger bone in a Siberian cave[^134][^135][^136]. Because they produced fertile offspring with modern humans, some biologists regard Neanderthals and Denisovans as varieties of one human population rather than wholly separate species[^137].

**Neanderthal behaviour.** Neanderthals buried some of their dead, used pigments, wore eagle-talon ornaments at Krapina in Croatia about 130,000 years ago, and built circular structures from broken stalagmites deep in Bruniquel Cave in France about 176,000 years ago[^138][^139][^140]. The evidence for symbolic thought among them is debated, but it has grown steadily.

**The main Christian positions.**

*   **Young earth creationism: fully human descendants of Adam.** Answers in Genesis teaches that Neanderthals were fully human, made in God's image, and descended from Adam and Noah, and that they lived only a few thousand years ago as a people group that formed after the dispersion from Babel. On this view their interbreeding with other humans is exactly what would be expected[^141][^142]. The difficulty is that it requires compressing hundreds of thousands of years of dated fossils and archaeology into a few centuries after the Flood.
*   **Old earth creationism (Reasons to Believe): not image-bearers.** Hugh Ross and Fazale Rana's model, set out in *Who Was Adam?*, treats Neanderthals and earlier hominins as creatures God made without his image, and Adam and Eve as specially created ancestors of modern humans only. Interbreeding is its hardest problem, and Reasons to Believe has published a series of articles addressing its scientific and theological implications[^143]. Critics reply that the evidence of Neanderthal symbolism and interfertility makes a sharp line between them and modern humans hard to draw.
*   **An ancient Adam.** William Lane Craig, in *In Quest of the Historical Adam* (2021), argues that Genesis 1 to 11 belongs to the genre of "mytho-history", which uses figurative and symbolic elements to convey real historical events. He places Adam and Eve between about 750,000 and 1,000,000 years ago as members of Homo heidelbergensis, so that Neanderthals, Denisovans and modern humans all descend from them and all bear God's image[^144][^145]. Critics on the old earth and young earth sides question whether such an early date and such a genre can do justice to Genesis[^146].
*   **A genealogical Adam.** S. Joshua Swamidass, a computational biologist, argues in *The Genealogical Adam and Eve* (2019) that Adam and Eve could have been created specially a few thousand years ago in the Near East, with other people living outside the garden. Mathematical models show that within a few thousand years such a couple would become genealogical ancestors of everyone alive, even though genetically most of our DNA comes from a wider population[^147][^148]. Every person alive by around AD 1 could then be descended from Adam and Eve[^149].
*   **A representative Adam in the Neolithic.** Derek Kidner suggested that Adam was given headship over his contemporaries as well as his descendants, and John Stott called Adam a possible *homo divinus*, the first human to whom God gave his image and a covenant relationship[^150][^151]. The biologist Denis Alexander develops this into a model in which God revealed himself to a Neolithic farming couple around 6,000 to 8,000 years ago, who became the representative head of all humanity alive then and since[^152][^153]. Supporters point out that Genesis 4 places agriculture, herding, a city and metalworking in bronze and iron within a few generations of Adam, which matches the Neolithic Revolution of about 11,500 years ago rather than the Palaeolithic[^154][^155]. Critics note that bronze and iron working are later still, around 3300 BC and 1200 BC respectively, so the cultural details do not fit any single period neatly[^156].

**Clues and cautions in the text.** Cain fears that "whoever finds me will kill me", marries, and builds a city (Genesis 4:14-17), which some read as implying people outside Adam's family; the traditional answer is that Adam had many other sons and daughters (Genesis 5:4)[^157]. Theories of people outside Adam's line have a troubling history: Isaac La Peyrère's pre-Adamite theory of 1655 was later used to argue that some races were not descended from Adam and so were less than human, a use every modern Christian proposal explicitly rejects[^158][^159].

**What is not in dispute.** All of these views agree that every human being alive today bears God's image and shares equal dignity, and that the image is not a matter of brain size or genetic percentages but of the relationship and calling God gives[^160].
`
    },
    {
      id: "historical-adam",
      title: "The Historical Adam",
      tags: ["adam", "romans 5", "doctrine", "genetics"],
      content: `
Christians may differ on the age of the earth. The historicity of Adam stands on a different footing, because the New Testament's account of sin and salvation depends on it.

*   **Paul's argument requires a real Adam.** Romans 5:12-19 sets Adam and Christ in direct parallel, with sin and death entering through one man and righteousness and life coming through one man. If the first man is only a literary figure, the parallel loses its force at the point where Paul rests his weight on it[^161].
*   **1 Corinthians 15 makes the same move.** "Since death came through a man, the resurrection of the dead comes also through a man": the argument is structured on the correspondence between two historical individuals[^162].
*   **The genealogies treat him as historical.** Luke traces the line of Jesus back through David, Abraham and Noah to "Adam, the son of God" without changing register, and Paul told the Athenians that God made every nation "from one man"[^163][^164].
*   **The doctrine of the fall depends on it.** Without a real first pair and a real act of disobedience, sin becomes part of how humans were made rather than something that entered a good creation, which shifts responsibility for evil onto the Creator.

**The genetic objection.** Human genetic diversity is often said to be too great to have come from only two people. Most genes exist in many variant forms, and standard population models estimate that our ancestors never numbered fewer than several thousand breeding individuals over the last several hundred thousand years[^165][^166].

**The responses.**

*   **A couple further back in time.** Ola Hössjer and Ann Gauger published a model in 2019 arguing that the present genetic data are consistent with a single ancestral couple about 500,000 years ago or earlier, allowing time for new variation to arise by mutation[^167]. The work appeared in a journal associated with the intelligent design movement and has not been widely tested by other population geneticists.
*   **Evidence of an ancient bottleneck.** A 2023 study in *Science* by Hu and colleagues inferred that human ancestors fell to about 1,280 breeding individuals between about 930,000 and 813,000 years ago; other researchers have questioned the method, and the result is not evidence of a single couple[^168].
*   **Genealogical ancestry.** The genealogical model avoids the genetic objection by having Adam and Eve become ancestors of all humans without being the only source of human DNA.
*   **Created diversity.** Young earth creationists propose that Adam and Eve were created with substantial built-in genetic variation, with further diversity arising by mutation since; critics answer that two people can carry at most four versions of each gene, while many genes have far more.

**Mitochondrial Eve and Y-chromosomal Adam** are technical terms for the most recent common ancestors along the purely maternal and purely paternal lines. Their estimated dates differ and are revised as methods change; each lived among many other people, and do not correspond to the Genesis figures, so citing them as scientific confirmation of Genesis misrepresents them[^169][^170].

**Dust and rib.** Genesis 2 says that God formed the man from the dust and made the woman from his side. The traditional reading takes these as direct acts of special creation; others, such as John Walton, read them as ancient ways of describing human mortality and the union of man and woman, applicable to all humans, while still affirming a historical pair[^171][^172].
`
    },
    {
      id: "common-descent",
      title: "The Case for Common Descent, and the Creationist Response",
      tags: ["common descent", "fossils", "genetics", "evolution"],
      content: `
**The evidence as biologists present it.** Common descent is supported by several independent lines of evidence that point to the same family tree[^173][^174].

*   **Nested hierarchies.** Living things fall into groups within groups, and trees built from anatomy and from DNA sequences largely agree[^175].
*   **Predicted transitional fossils.** In 2004 researchers found Tiktaalik, a fish with a neck, wrist bones and lungs, by deliberately searching rocks of the age evolutionary theory predicted, about 375 million years old[^176]. The fossil series from land mammals such as Pakicetus to whales shows legs shrinking and nostrils moving back over about 10 million years[^177].
*   **Chromosome 2.** Great apes have 24 pairs of chromosomes and humans 23. Human chromosome 2 carries the marks of two ape-like chromosomes joined end to end: telomere sequences in its middle and the remains of a second centromere[^178].
*   **Shared mistakes.** Humans and other primates carry the same broken gene for making vitamin C, disabled by the same kind of damage, and share thousands of viral insertions (endogenous retroviruses) at identical positions in the genome, about 8 per cent of our DNA consisting of such remnants[^179]. Biologists regard shared errors as the strongest evidence, since a designer would have no reason to repeat the same mistakes, whereas inheritance explains them[^180].

**The creationist responses.**

*   **Common design.** Similar structures and genes reflect a common Designer reusing good solutions, as engineers reuse parts; Answers in Genesis argues that genetic similarity is expected on either view[^181]. This explains similarity well; it is weakest as an explanation of shared broken genes and viral insertions.
*   **Function in "junk".** Some creationists and design advocates argue that apparent errors will prove to have functions. Some pseudogenes and retroviral sequences have been found to be functional, which strengthens this reply in particular cases without explaining why the same sequences sit in the same places across species.
*   **Kinds, not common descent.** Young earth creationists accept that species change and even that new species arise, but hold that change is limited within the original created "kinds" (Genesis 1:21), studied under the name baraminology[^182]. The Hebrew *min* ("kind") describes categories of animals and does not itself state a limit on change[^183]. Young earth models of the Ark require rapid speciation after the Flood, faster than mainstream biology proposes, to produce today's diversity from about 1,400 kinds.

**Observed change.** New species have been observed forming in plants and animals, and ring species show populations diverging gradually across a geographical range[^184][^185]. In Richard Lenski's long-running experiment, one population of E. coli evolved the ability to use citrate in oxygen after about 31,500 generations, a new capability that arose through gene duplication and rearrangement[^186][^187]. Bacteria have evolved enzymes that digest nylon, a material that did not exist before 1935[^188].

**Assessment.** The evidence for common descent is strong and convergent, and several young earth scientists acknowledge its explanatory power while rejecting it on scriptural grounds. The theological question is not whether evolution occurs, which all sides accept at some level, but whether common descent extends to all life including humans, and how that relates to the special creation of Adam.
`
    },
    {
      id: "objections-to-evolution",
      title: "Arguments Against Evolution: Which Hold and Which Do Not",
      tags: ["objections", "irreducible complexity", "apologetics", "fossils"],
      content: `
Arguments that collapse under examination damage the case they are meant to support. The common arguments are set out with the scientific response[^189].

*   **"Evolution is just a theory."** In science a theory is a well-tested explanation, not a guess, and evolution is both an observed fact (populations change) and a theory explaining how[^190]. **Does not hold.**
*   **"Evolution violates the second law of thermodynamics."** The second law applies to closed systems. The earth receives energy from the sun, and local increases in order, like growing plants or forming crystals, happen constantly[^191]. **Does not hold.**
*   **"There are no transitional fossils."** Many are known, including Tiktaalik, Archaeopteryx, the whale series and the reptile-to-mammal jaw transition[^192]. **Does not hold.**
*   **"Nobody has observed macroevolution."** Speciation has been observed, and larger changes are inferred from fossils and genetics as other historical sciences infer the past[^193]. **Does not hold as stated**, though the long-term changes cannot be watched directly.
*   **Irreducible complexity.** Michael Behe argued in *Darwin's Black Box* (1996) that systems such as the bacterial flagellum cannot work if any part is removed, so could not be built gradually[^194]. Biologists answer that parts can be borrowed from systems with other functions: part of the flagellum's machinery closely resembles the Type III secretion system, which bacteria use to inject proteins into cells[^195][^196]. In *Kitzmiller v. Dover* (2005) a federal court heard Behe's testimony and ruled that intelligent design could not be taught as science in public schools[^197]. **Largely answered**, though whether every such system has a detailed pathway remains a research question; a court ruling on a school curriculum settles nothing about Genesis.
*   **Haeckel's embryos.** Ernst Haeckel's 19th-century drawings exaggerated the similarity of vertebrate embryos, as Michael Richardson showed in 1997, and the criticism is fair. The underlying observation, that vertebrate embryos share features such as pharyngeal arches, remains true[^198]. **Partly holds** against old textbooks, not against the evidence.
*   **Piltdown Man and Nebraska Man.** Piltdown Man (1912) was a forgery exposed by scientists in 1953[^199]. Nebraska Man (1922) was a single tooth later identified as a peccary's and withdrawn by 1927[^200]. **Does not hold** as an argument: both were corrected by the scientific process itself, and neither is part of the case for human evolution.
*   **The peppered moth.** Critics claimed the classic experiments were flawed; Michael Majerus repeated them over several years and confirmed that bird predation drove the change in moth colour[^201]. **Does not hold.**
*   **The Cambrian explosion.** Most animal body plans appear in the fossil record over some 20 to 25 million years from about 539 million years ago, which Stephen Meyer argues in *Darwin's Doubt* (2013) requires an input of information beyond natural processes[^202][^203]. Biologists point to earlier Ediacaran organisms and small shelly fossils, and to the rarity of preservation for soft-bodied animals[^204]. **A real scientific question**, still debated, though not a gap in the record as sudden as popular accounts suggest.
*   **Genetic entropy.** John Sanford argues that harmful mutations accumulate faster than selection removes them, so the human genome is degrading and cannot be millions of years old[^205]. Population geneticists answer that the models ignore selection's effectiveness and that species with short generation times, which should have collapsed by now, have not[^206]. **Not accepted** outside creationist circles.
*   **"Junk DNA" and ENCODE.** In 2012 the ENCODE project reported "biochemical function" for 80 per cent of the human genome, and the figure was cited against evolution[^207]. Critics showed that the definition counted any chemical activity, and most researchers still estimate that only about 10 to 15 per cent is under selective constraint[^208][^209]. **Largely does not hold**, though more of the genome is functional than was once assumed.
*   **"The odds are impossible."** Calculations such as Fred Hoyle's assume that complex molecules must assemble all at once by chance, which no evolutionary account proposes[^210]. **Does not hold** against evolution; the origin of life is a different and genuinely unsolved question.
*   **"Darwin recanted on his deathbed."** The story comes from Lady Hope in 1915; Darwin's children denied it, and Answers in Genesis itself advises against using it[^211]. **Does not hold.**
*   **"Many scientists reject evolution."** Lists of dissenting scientists exist, but they are a small fraction of working biologists, and scientific questions are settled by evidence rather than by headcounts in either direction[^212]. **Does not hold.**
`
    },
    {
      id: "order-of-creation",
      title: "Genesis 1 and the Scientific Order of Events",
      tags: ["genesis 1", "order", "sun", "concordism"],
      content: `
**The objection.** Read as a scientific chronology, the order of Genesis 1 does not match the order science reconstructs. Light and "evening and morning" come before the sun (days one and four); land plants and fruit trees come before the sun, moon and stars (days three and four); birds and sea creatures, including whales, come before land animals (days five and six), whereas land vertebrates appear before birds and whales evolved from land mammals; and the earth exists before the stars[^213].

**The responses.**

*   **Young earth.** The order is exactly as written, and science's order is mistaken because it rests on long ages and evolution; God can make light without the sun and plants can survive a day without it[^214].
*   **Day-age concordism.** Hugh Ross argues that the account is written from the viewpoint of an observer on the earth's surface (Genesis 1:2), so the sun already existed and became visible through a clearing atmosphere on day four, and some day-age advocates add that the Hebrew for "birds" covers any flying creature, including insects. Critics reply that the text says God "made" the lights on day four, and that the fruit trees and whales still come too early.
*   **Non-concordist readings.** The framework, cosmic temple and analogical views hold that Genesis 1 is not arranged as a physical chronology, so its order is literary and theological. The sun, moon and stars, which neighbouring peoples worshipped as gods, are demoted to "lights" made on the fourth day to serve humanity, as Gerhard Hasel argued in a classic study of Genesis's polemic against neighbouring cosmologies[^215].
*   **Accommodation.** John Calvin noted that Genesis 1:16 calls the moon a "great light" although astronomers knew Saturn to be larger, and explained that Moses wrote "in a popular style" of what ordinary people see, leaving astronomy to astronomers[^216].

**Assessment.** Detailed attempts to match every day to a scientific epoch require non-obvious readings of the text, and none commands agreement. Readings that do not treat Genesis 1 as a physical chronology avoid the conflict, at the cost of the more straightforward sequential reading that young earth creationists defend.
`
    },
    {
      id: "two-creation-accounts",
      title: "Genesis 1 and 2: Two Creation Accounts?",
      tags: ["genesis 2", "documentary hypothesis", "order"],
      content: `
**The objection.** In Genesis 1 plants and animals are made before humans, and man and woman are created together. In Genesis 2 no plant of the field has yet sprung up when the man is formed (2:5-7), the animals are formed and brought to the man afterwards (2:19), and the woman is made last. Critical scholars assign the two chapters to different sources, the Priestly and the Yahwist, with different vocabulary for God and different concerns[^217].

**The responses.**

*   **A second focus, not a second chronology.** Genesis 2:4 opens with a *toledot* ("these are the generations of") heading, used throughout Genesis to introduce what follows from a previous stage, so chapter 2 zooms in on the creation of humanity rather than retelling the whole week[^218].
*   **The plants of the field.** Genesis 2:5 explains that there was no shrub or plant "of the field" because God had not yet sent rain and there was no one to work the ground. Mark Futato argued that these are cultivated crops and wild growth that depend on rain and human farming, not all vegetation, which fits a local setting after the creation of plants in general[^219][^220].
*   **The animals.** Several translations, including the NIV, render the verb in 2:19 as "had formed", placing the creation of the animals earlier; the grammar allows but does not require this[^221].

The same question is treated among the [supposed contradictions](/categories/contradictions) under Genesis 1:25-27 and 2:7-19.
`
    },
    {
      id: "ancient-cosmology",
      title: "The Firmament, a Flat Earth and Ancient Cosmology",
      tags: ["firmament", "cosmology", "flat earth", "accommodation"],
      content: `
**The objection.** Genesis 1:6-8 describes a *raqia*, traditionally translated "firmament", separating waters above from waters below. Elsewhere the sky is "hard as a mirror of cast bronze" (Job 37:18), has "windows" through which the Flood waters came (Genesis 7:11), and the earth rests on pillars and foundations. Critics argue that Scripture assumes the ancient Near Eastern picture of a flat earth under a solid dome with a heavenly ocean above it[^222][^223].

**The evidence in the text.** The noun *raqia* comes from a verb meaning to beat out or spread, used of hammering metal, and many Old Testament scholars, including evangelicals such as John Walton, agree that Israel shared the common ancient picture of the sky[^224][^225][^226].

**The responses.**

*   **Phenomenological language.** Scripture describes the world as it appears, as modern people still speak of sunrise. "Expanse" is a legitimate translation of *raqia*, and the "windows of heaven" are imagery for heavy rain.
*   **Accommodation.** God communicated through the cosmological picture of the original hearers without teaching it, just as Jesus spoke of the mustard seed as the smallest of seeds known to his audience. The Bible's claims concern who made the sky and why, not its physical structure. This was Calvin's approach, and it is compatible with Scripture being true in all it affirms, because the picture of the sky is the vehicle, not the thing affirmed. Galileo quoted Cardinal Baronius to the same effect: the Holy Spirit intends to teach how one goes to heaven, not how the heavens go[^227].
*   **Supposed scientific foreknowledge.** Some apologists claim that Isaiah 40:22, "the circle of the earth", teaches a spherical earth, and Job 26:7, "he hangs the earth on nothing", modern astronomy. The Hebrew *chug* means a circle or vault, not a sphere, so these verses should not be pressed in either direction[^228][^229][^230].

**The flat earth myth.** The popular claim that medieval Christians believed the earth was flat is false. Educated Christians from Bede to Aquinas held that the earth was a sphere, and the myth was largely created by nineteenth-century writers promoting the idea of a war between science and religion[^231].
`
    },
    {
      id: "ancient-near-eastern-parallels",
      title: "Borrowed Myths? Genesis and the Mesopotamian Parallels",
      tags: ["enuma elish", "gilgamesh", "atrahasis", "ancient near east"],
      content: `
**The objection.** Genesis 1 to 11 closely resembles older Mesopotamian texts, suggesting it was borrowed from myths. The Babylonian *Enūma Eliš* describes creation beginning from primeval waters, with the goddess Tiamat, whose name is related to the Hebrew *tehom*, "the deep" of Genesis 1:2[^232][^233]. The *Atrahasis* epic and Tablet XI of the *Epic of Gilgamesh* tell of a flood sent by the gods, a man warned to build a boat, animals preserved, birds sent out to find land, and a sacrifice after the waters recede[^234][^235]. The Sumerian King List gives kings before its flood reigns of tens of thousands of years, much as Genesis 5 gives long lifespans before Noah[^236].

**What the parallels show.** The similarities are real and extensive, and they show that Genesis addresses questions its neighbours also asked, in shared images and forms. Hermann Gunkel argued that Genesis adapted the Babylonian combat myth, but most scholars now reject direct copying from any one text, and David Tsumura's linguistic study concluded that *tehom* reflects a common Semitic word for the ocean rather than being derived from the goddess[^237].

**The differences.** The contrasts are as striking as the similarities.

*   **One God, not many.** In *Enūma Eliš* the world is made from the corpse of a slain goddess after a war among gods; in Genesis one God creates by his word, and the sea monsters are simply creatures he made.
*   **Humanity's dignity.** In *Atrahasis* humans are made to do the gods' labour; in Genesis they are made in God's image to rule creation on his behalf.
*   **The reason for the flood.** In *Atrahasis* the gods send the flood because human noise disturbs their sleep; in Genesis God sends it because of violence and corruption, and saves Noah because he is righteous.
*   **The gods' character.** After the flood the Mesopotamian gods crowd around the sacrifice "like flies" because they have been starving; in Genesis God makes a covenant never again to destroy the earth.

**The interpretations.** Conservative scholars read the parallels as evidence of a shared memory of real events, with Genesis giving the true account that other traditions distorted. Others read Genesis as a deliberate polemic that takes up familiar stories and corrects their theology. Both readings treat Genesis as asserting its own claims about God and humanity against those of its neighbours, not as repeating them[^238].
`
    },
    {
      id: "death-before-the-fall",
      title: "Animal Death Before the Fall",
      tags: ["death", "fall", "predation", "suffering"],
      content: `
**The objection.** The fossil record shows predation, disease, parasites, injury and extinction for hundreds of millions of years before humans existed, including cancer in dinosaurs. If Genesis teaches that there was no death of any kind before Adam's sin, an old earth contradicts it; and if there was death, the objection runs, God created a world of suffering and called it "very good".

**The young earth view.** Answers in Genesis holds that no animal death occurred before the fall, citing Genesis 1:29-30, where humans and animals are given plants to eat, Romans 5:12, where death entered the world through sin, and Romans 8:20-22, where creation was subjected to futility and groans awaiting liberation[^239][^240][^241]. On this view an old earth places death, disease and bloodshed before sin, which they regard as undermining the gospel.

**The responses from other views.**

*   **Romans 5 concerns human death.** Paul says that death "came to all people, because all sinned"; the death in view is human death as the penalty for sin, and Romans 5 says nothing about animals.
*   **God is praised for predators.** Psalm 104:21 says that "the lions roar for their prey and seek their food from God", in a psalm celebrating creation, and in Job 38:39-41 and 39:27-30 God himself describes providing prey for lions and ravens and blood for the eagle's young as part of his wise design[^242][^243].
*   **Genesis 1:30 is a grant, not a prohibition.** It gives plants to animals as food, but does not say that no animal ate another, and the Hebrew "very good" describes fitness for God's purpose, not the absence of death.
*   **Aquinas.** Thomas Aquinas held that "the nature of animals was not changed by man's sin", and that animals which now devour others would have done so before the fall as well[^244].
*   **The tree of life.** Genesis 3:22 implies that the man would need to eat from the tree of life to live forever, suggesting that physical immortality was a gift rather than the natural condition of creatures[^245].

**The deeper problem of animal suffering.** Charles Darwin wrote to Asa Gray in 1860 that he could not persuade himself that a beneficent God would have created parasitic wasps that feed within the living bodies of caterpillars[^246]. Christian responses include C. S. Lewis's suggestion in *The Problem of Pain* that a fallen angelic power corrupted animal nature before humanity existed[^247]; William Dembski's proposal that the effects of the fall reached backwards in time; and Christopher Southgate's argument in *The Groaning of Creation* (2008) that a world able to produce the beauty and diversity of life may only be possible through a process that also involves suffering, which God shares in Christ and will redeem[^248]. None of these fully removes the difficulty, which is felt by holders of every view: young earth creationists face the same question about predation and disease after the fall.
`
    },
    {
      id: "the-flood",
      title: "Noah's Flood: Global, Regional or Local?",
      tags: ["flood", "noah", "geology", "ark"],
      content: `
**What the text says.** The waters covered "all the high mountains under the entire heavens" (Genesis 7:19), and every living thing on the land outside the ark died[^249]. The Hebrew *erets*, translated "earth", also means "land" or "country", and phrases such as "all the earth" are used elsewhere of a region: "all the world" came to Egypt to buy grain from Joseph (Genesis 41:57)[^250][^251].

**The global flood view.** Young earth creationists hold that the Flood covered the whole globe about 4,300 years ago, laid down most of the fossil-bearing sedimentary rock, and carved features such as the Grand Canyon, possibly through a burst of rapid continental movement ("catastrophic plate tectonics")[^252][^253].

**The geological objections.** Geologists, including many Christians, find the global flood interpretation of the rock record untenable.

*   **Features that need time and dry land.** The rock record contains desert dune deposits with animal trackways, such as the Coconino Sandstone of the Grand Canyon, fossil soils, evaporite salt beds formed by drying seas, coral reefs grown in place, and dinosaur nesting grounds at many successive levels[^254].
*   **The ordering of fossils.** Fossils appear in a consistent worldwide order that sorting by a single flood (by density, habitat or ability to flee) does not explain, for example flowering plants and pollen never appearing in the lowest layers[^255].
*   **The Grand Canyon.** In *The Grand Canyon, Monument to an Ancient Earth* (2016), a group of geologists, most of them Christians, argued in detail that its layers and erosion require millions of years; Answers in Genesis has published a rebuttal[^256][^257][^258].
*   **Unbroken records.** Egyptian and Mesopotamian civilisation, tree-ring sequences and annual ice layers continue through the date a strict chronology assigns to the Flood.

**The ark and biology.** Ark Encounter estimates that about 1,398 kinds, some 6,744 animals, would have been needed[^259]. Critics raise the care and feeding of the animals for a year, the redistribution of animals afterwards (kangaroos only to Australia, sloths only to the Americas), and the absence of the severe genetic bottleneck that eight people and two animals of each kind would leave in every species about 4,300 years ago. Young earth creationists answer with land bridges, rapid post-Flood speciation and created genetic diversity.

**The regional or local flood view.** Many old earth Christians hold that the Flood was a real, catastrophic event that destroyed the human world of its day in Mesopotamia, described from the perspective of those who experienced it, in which "the whole earth" and "under the entire heavens" describe the whole horizon and land known to them, as similar phrases do elsewhere (Acts 2:5, Colossians 1:23). Hugh Ross and Reasons to Believe hold this view; Answers in Genesis argues that it cannot account for the text's description of the waters covering the mountains or for the size of the ark[^260][^261]. Excavations at Shuruppak, Noah's home in the Sumerian tradition, and at Ur and Kish found major flood deposits, though from different dates[^262]. The proposal that the Black Sea flooded catastrophically around 5600 BC is disputed[^263].

**The New Testament.** Jesus referred to Noah and the Flood as real events (Matthew 24:37-39), and 2 Peter 3:6 says that "the world of that time was deluged and destroyed"[^264][^265]. Both sides accept the Flood as historical; they differ over whether these texts require it to have covered the entire planet or the entire world of humanity.

**The rainbow.** Genesis 9:13 does not require that rainbows never appeared before the Flood; God appointed an existing phenomenon as the sign of his covenant, as circumcision and bread were given new meaning[^266].
`
    },
    {
      id: "babel-genealogies-lifespans",
      title: "Babel, the Genealogies and the Long Lifespans",
      tags: ["babel", "genealogies", "lifespans", "chronology"],
      content: `
**Babel and the origin of languages.** Linguists trace language families diverging over many thousands of years, and writing, cities and ziggurats appear in Mesopotamia from about the fourth millennium BC[^267]. Genesis 10 already describes the nations spread out "each with its own language" (10:5) before the Babel narrative of chapter 11, which shows that the chapters are not arranged in strict chronological order[^268][^269]. Interpreters who read Babel as a regional event see it as explaining the scattering of the peoples of the Mesopotamian world rather than the origin of every human language, while young earth creationists read it as the origin of the world's language families[^270].

**The genealogies and chronology.** Ussher's date of 4004 BC depends on adding up the ages in Genesis 5 and 11 as a continuous chronology[^271]. In 1890 William Henry Green of Princeton Seminary, a defender of inerrancy, argued that biblical genealogies often omit generations (Matthew 1:8 skips three kings, for example) and were "not intended to be used" for chronology[^272]. Young earth creationists reply that Genesis 5 and 11 differ from other genealogies because they give each father's age at the birth of the next name, so that even with gaps the years still add up. The Septuagint gives substantially larger numbers than the Hebrew text, and its Genesis 11 includes an extra generation, Cainan, whom Luke 3:36 also names[^273][^274].

**The long lifespans.** Adam lives 930 years and Methuselah 969[^275]. No known biological mechanism allows such ages.

*   **Literal.** Young earth creationists hold the ages are exact, explained by a different pre-Flood environment or a healthier original genome, with lifespans declining after the Flood.
*   **Symbolic or honorific.** Carol Hill argued that the ages combine real and sacred numbers in the Mesopotamian sexagesimal system, built mainly from multiples of 60 and 7, conveying significance rather than precise durations[^276].
*   **Ancient Near Eastern context.** The Sumerian King List gives pre-flood kings reigns of up to 28,800 years; the Genesis ages are far more modest, and some read them as a deliberate contrast[^277]. Genesis 6:3 limits human life to 120 years, which is close to the maximum recorded human lifespan[^278].
`
    },
    {
      id: "jesus-and-genesis",
      title: "What Jesus and the Apostles Affirmed About Genesis",
      tags: ["jesus", "new testament", "adam", "noah"],
      content: `
The New Testament refers to the early chapters of Genesis often, and every Christian view has to account for these references.

*   **"From the beginning of creation."** Jesus said that "at the beginning of creation God made them male and female" (Mark 10:6, Matthew 19:4). Young earth creationists argue that humans were therefore present from the beginning, not billions of years after it. Others answer that "the beginning of creation" refers to the beginning of human creation and the institution of marriage, which is the subject of the passage[^279].
*   **Abel and the prophets.** Jesus spoke of the blood of the prophets shed "since the foundation of the world, from the blood of Abel" (Luke 11:50-51), treating Abel as a real person at the beginning of human history.
*   **Noah.** Jesus compared his return to "the days of Noah" (Matthew 24:37-39), and 1 Peter 3:20 and 2 Peter 2:5 treat Noah as historical; the texts do not specify the Flood's geographical extent.
*   **Adam.** Paul's arguments in Romans 5, 1 Corinthians 15 and 1 Timothy 2:13-14, and Luke's genealogy, treat Adam as a real individual.
*   **Creation by God's word.** Hebrews 11:3 affirms that the universe was formed at God's command, "so that what is seen was not made out of what was visible".

**What follows.** These texts establish that Jesus and the apostles regarded Adam, Abel, Noah and the Flood as real, and that creation is God's work. They do not specify the age of the earth, the length of the days, or the extent of the Flood, which is why believers who agree on the historical claims still differ on those questions.
`
    },
    {
      id: "origin-of-life",
      title: "Where Naturalistic Explanation Runs Out",
      tags: ["origin of life", "genetic code", "consciousness", "limits"],
      content: `
Evolution by natural selection explains how populations of self-replicating organisms diversify once such organisms exist. It does not claim to explain how replication began, and the questions below sit outside its scope rather than inside it. Each is an open problem in the mainstream literature[^280].

**The origin of life has no accepted mechanism.** There is no consensus account of how the first self-replicating chemistry arose. The leading framework, the RNA world, faces unresolved difficulties in the prebiotic synthesis of ribose and the nucleobases, in accumulating long enough polymers, and in getting replication started without enzymes[^281].

**Homochirality is unexplained.** Life uses left-handed amino acids and right-handed sugars, while ordinary chemistry produces both hands equally. Recent work achieved an excess of one hand by crystallising an RNA precursor on magnetite, which is progress towards a mechanism rather than a settled answer[^282][^283].

**The genetic code is a chicken-and-egg problem.** Translating DNA into protein requires proteins, and building those proteins requires translation. Proposals exist, including ribozyme precursors and early RNA-based systems, but no demonstrated route leads from chemistry to a working code[^284][^285].

**Consciousness is not addressed.** Why physical processes in the brain are accompanied by subjective experience is unresolved in philosophy of mind, and evolutionary biology can at most explain the behaviour that accompanies experience[^286].

None of this is proof of design, and an unsolved problem may yet be solved. It does show that the naturalistic account is incomplete at exactly the points where a Creator is claimed to act, and that the question of origins is not closed.
`
    },
    {
      id: "theological-objections",
      title: "Does Evolution Make God Unnecessary?",
      tags: ["god of the gaps", "providence", "naturalism", "theology"],
      content: `
**The objection.** If natural processes explain the development of life, the argument runs, there is nothing left for God to do, and belief in a Creator becomes superfluous.

**Primary and secondary causes.** Classical Christian theology has never held that God acts only where natural explanation fails. God is the primary cause who sustains all things and works through the secondary causes of nature; a natural explanation of how something happened does not remove God as the one who made it happen, any more than explaining the water cycle removes God from the rain (Psalm 147:8)[^287]. Arguments that locate God only in the gaps of current science ("God of the gaps") are vulnerable whenever the gap is filled, which is why many theologians avoid them.

**Early Christian responses to Darwin.** When *On the Origin of Species* appeared in 1859, some Christian thinkers welcomed it: the American botanist Asa Gray, a committed Christian, argued that natural selection was compatible with design, and the Anglican Charles Kingsley wrote that it was just as noble to believe God created forms capable of self-development[^288]. The Catholic Encyclopedia of 1909 distinguished evolution as a scientific theory from the atheistic philosophy sometimes attached to it[^289].

**The argument turned around.** Alvin Plantinga argues that it is naturalism, not evolution, that is in tension with science. If our cognitive faculties were produced only by unguided processes selecting for survival rather than truth, we would have no good reason to trust them, including when they form the belief in naturalism. On a theistic view, by contrast, God may have guided the process to produce reliable minds[^290].

**Misuse on both sides.** Evolutionary ideas were used to support social Darwinism, eugenics and scientific racism in the late nineteenth and early twentieth centuries, and the Bible was used to defend slavery and racial hierarchy. In both cases the misuse of an idea does not settle whether the idea is true.
`
    },
    {
      id: "open-questions",
      title: "Open Questions and Summary",
      tags: ["open questions", "assessment", "summary"],
      content: `
**Where the evidence is strong.** The age of the earth and universe is supported by many independent lines of evidence, dinosaurs lived and died long before humans on every mainstream dating method, and the fossil and genetic evidence for common ancestry, including between humans and other primates, is extensive. Young earth scientists who acknowledge this base their position on their reading of Scripture.

**Where honest disagreement remains.** How Genesis 1 to 11 should be read; where, when and how Adam and Eve lived; how Neanderthals and other archaic humans relate to the image of God; whether the Flood was global or regional; and how to understand animal death and suffering before the fall are genuinely debated among Christians who accept biblical authority.

**Where naturalism has no answer.** The origin of life, the origin of the genetic code, the fine-tuning of physical constants and the existence of consciousness and moral agency remain open problems that biological evolution does not address.

**What every Christian view affirms.** Creation is deliberate and not self-explanatory; it is the work of Christ, in whom all things hold together (Colossians 1:16-17); God's power and nature are seen in what has been made (Romans 1:20); humans bear God's image; sin is real and entered a good creation; and the whole creation, subjected to frustration, waits to be set free (Romans 8:21). None of these claims is settled by biology in either direction.
`
    }
  ],
  sources: [
    "1. [Reference] Wikipedia. 'Genesis creation narrative.' Text, structure and ancient Near Eastern context. https://en.wikipedia.org/wiki/Genesis_creation_narrative",
    "2. [Academic] National Academies Press. 'Science, Evolution, and Creationism' (National Academy of Sciences and Institute of Medicine, 2008). https://nap.nationalacademies.org/catalog/11876/science-evolution-and-creationism",
    "3. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Creationism.' https://plato.stanford.edu/entries/creationism/",
    "4. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Religion and Science.' https://plato.stanford.edu/entries/religion-science/",
    "5. [Apologetics] GotQuestions.org. 'What is biblical inerrancy?' https://www.gotquestions.org/biblical-inerrancy.html",
    "6. [Primary Text] World History Encyclopedia. 'St. Augustine: from The Literal Meaning of Genesis' (1.19.39). https://www.worldhistory.org/article/91/st-augustine-from-the-literal-meaning-of-genesis/",
    "7. [Lexical Resource] Bible Hub. 'Strong's Hebrew 3117: yom, day.' https://biblehub.com/hebrew/3117.htm",
    "8. [Young Earth Creationist] Answers in Genesis. 'Could God Really Have Created Everything in Six Days?' https://answersingenesis.org/days-of-creation/could-god-really-have-created-everything-in-six-days/",
    "9. [Commentary] Bible Hub. 'Commentaries on Exodus 20:11.' https://biblehub.com/commentaries/exodus/20-11.htm",
    "10. [Commentary] Bible Hub. 'Commentaries on Genesis 2:4.' https://biblehub.com/commentaries/genesis/2-4.htm",
    "11. [Reference] Wikipedia. 'Hosea 6.' Includes the 'third day' of verse 2. https://en.wikipedia.org/wiki/Hosea_6",
    "12. [Commentary] Bible Hub. 'Commentaries on Hebrews 4:4.' https://biblehub.com/commentaries/hebrews/4-4.htm",
    "13. [Commentary] Bible Hub. 'Commentaries on Exodus 31:17.' https://biblehub.com/commentaries/exodus/31-17.htm",
    "14. [Primary Text] New Advent. Origen, 'De Principiis', Book IV. https://www.newadvent.org/fathers/04124.htm",
    "15. [Commentary] Bible Hub. 'Commentaries on Genesis 1:14.' https://biblehub.com/commentaries/genesis/1-14.htm",
    "16. [Reference] Wikipedia. 'Meredith Kline.' Originator of the framework interpretation. https://en.wikipedia.org/wiki/Meredith_Kline",
    "17. [Reference] Wikipedia. 'John H. Walton.' The cosmic temple and functional reading of Genesis 1. https://en.wikipedia.org/wiki/John_H._Walton",
    "18. [Reference] Wikipedia. 'C. John Collins.' The analogical days view. https://en.wikipedia.org/wiki/C._John_Collins",
    "19. [Commentary] Bible Hub. 'Commentaries on Psalm 90:4.' https://biblehub.com/commentaries/psalms/90-4.htm",
    "20. [Primary Text] New Advent. Irenaeus, 'Against Heresies' V.23. https://www.newadvent.org/fathers/0103523.htm",
    "21. [Primary Text] New Advent. Basil of Caesarea, 'Hexaemeron', Homily II. https://www.newadvent.org/fathers/32012.htm",
    "22. [Primary Text] New Advent. Augustine, 'City of God', Book XII. https://www.newadvent.org/fathers/120112.htm",
    "23. [Primary Text] New Advent. Thomas Aquinas, 'Summa Theologiae' I, Q. 74. https://www.newadvent.org/summa/1074.htm",
    "24. [Reference] Wikipedia. 'Ussher chronology.' https://en.wikipedia.org/wiki/Ussher_chronology",
    "25. [Reference] Wikipedia. 'James Hutton.' https://en.wikipedia.org/wiki/James_Hutton",
    "26. [Reference] Wikipedia. 'Thomas Chalmers.' Early proponent of the gap theory. https://en.wikipedia.org/wiki/Thomas_Chalmers",
    "27. [Reference] Wikipedia. 'Hugh Miller.' Geologist and day-age interpreter. https://en.wikipedia.org/wiki/Hugh_Miller",
    "28. [Reference] Wikipedia. 'B. B. Warfield.' https://en.wikipedia.org/wiki/B._B._Warfield",
    "29. [Reference] Wikipedia. 'James Orr (theologian).' Contributor to The Fundamentals. https://en.wikipedia.org/wiki/James_Orr_(theologian)",
    "30. [Reference] Wikipedia. 'George McCready Price.' https://en.wikipedia.org/wiki/George_McCready_Price",
    "31. [Reference] Wikipedia. 'The Genesis Flood' (Whitcomb and Morris, 1961). https://en.wikipedia.org/wiki/The_Genesis_Flood",
    "32. [Primary Text] Bible Researcher. 'Chicago Statement on Biblical Inerrancy' (1978). https://www.bible-researcher.com/chicago1.html",
    "33. [Primary Text] Bible Researcher. 'Chicago Statement on Biblical Hermeneutics' (1982), Article XXII. https://www.bible-researcher.com/chicago2.html",
    "34. [Primary Text] Vatican. Pius XII, 'Humani Generis' (1950). https://www.vatican.va/content/pius-xii/en/encyclicals/documents/hf_p-xii_enc_12081950_humani-generis.html",
    "35. [Primary Text] New Advent. John Paul II, 'Truth Cannot Contradict Truth' (1996). https://www.newadvent.org/library/docs_jp02tc.htm",
    "36. [Primary Text] Vatican, International Theological Commission. 'Communion and Stewardship: Human Persons Created in the Image of God' (2004). https://www.vatican.va/roman_curia/congregations/cfaith/cti_documents/rc_con_cfaith_doc_20040723_communion-stewardship_en.html",
    "37. [Reference] Wikipedia. 'Old Earth creationism.' https://en.wikipedia.org/wiki/Old_Earth_creationism",
    "38. [Reference] Wikipedia. 'Young Earth creationism.' https://en.wikipedia.org/wiki/Young_Earth_creationism",
    "39. [Reference] Wikipedia. 'Gap creationism.' https://en.wikipedia.org/wiki/Gap_creationism",
    "40. [Reference] Wikipedia. 'Scofield Reference Bible.' https://en.wikipedia.org/wiki/Scofield_Reference_Bible",
    "41. [Reference] Wikipedia. 'Day-age creationism.' https://en.wikipedia.org/wiki/Day-age_creationism",
    "42. [Reference] Wikipedia. 'Hugh Ross (astrophysicist).' Founder of Reasons to Believe. https://en.wikipedia.org/wiki/Hugh_Ross_(astrophysicist)",
    "43. [Reference] Wikipedia. 'Progressive creationism.' https://en.wikipedia.org/wiki/Progressive_creationism",
    "44. [Academic Journal] Perspectives on Science and Christian Faith. Meredith G. Kline, 'Space and Time in the Genesis Cosmogony' (1996). https://www.asa3.org/ASA/PSCF/1996/PSCF3-96Kline.html",
    "45. [Academic Review] Dallas Theological Seminary, DTS Voice. Review of John H. Walton, 'The Lost World of Genesis One.' https://voice.dts.edu/review/john-walton-the-lost-world-of-genesis-one/",
    "46. [Academic Journal] Andrews University Seminary Studies. 'An Overview of John H. Walton's Lost World of Genesis One.' https://digitalcommons.andrews.edu/cgi/viewcontent.cgi?article=3133&context=auss",
    "47. [Reference] Wikipedia. 'John Sailhamer.' The historical creationism or 'land' view. https://en.wikipedia.org/wiki/John_Sailhamer",
    "48. [Reference] Wikipedia. 'Theistic evolution.' https://en.wikipedia.org/wiki/Theistic_evolution",
    "49. [Intelligent Design] Discovery Institute. 'Frequently Asked Questions.' https://www.discovery.org/id/faqs/",
    "50. [Government Science] United States Geological Survey. 'Geologic Time: Age of the Earth.' https://pubs.usgs.gov/gip/geotime/age.html",
    "51. [Academic] American Scientific Affiliation. Roger C. Wiens, 'Radiometric Dating: A Christian Perspective.' https://www.asa3.org/ASA/resources/Wiens.html",
    "52. [Reference] Wikipedia. 'Age of Earth.' Meteorite and zircon ages. https://en.wikipedia.org/wiki/Age_of_Earth",
    "53. [Peer-Reviewed Journal] Nature. EPICA community members, 'Eight glacial cycles from an Antarctic ice core' (2004). https://www.nature.com/articles/nature02599",
    "54. [Reference] Wikipedia. 'Ice core.' Annual layer counting in Greenland cores. https://en.wikipedia.org/wiki/Ice_core",
    "55. [Reference] Wikipedia. 'Lake Suigetsu.' Annual varves used to calibrate radiocarbon. https://en.wikipedia.org/wiki/Lake_Suigetsu",
    "56. [Reference] Wikipedia. 'Dendrochronology.' https://en.wikipedia.org/wiki/Dendrochronology",
    "57. [Reference] Wikipedia. 'Radiocarbon calibration.' https://en.wikipedia.org/wiki/Radiocarbon_calibration",
    "58. [Reference] Wikipedia. 'SN 1987A.' Distance of about 168,000 light-years. https://en.wikipedia.org/wiki/SN_1987A",
    "59. [Reference] Wikipedia. 'Age of the universe.' https://en.wikipedia.org/wiki/Age_of_the_universe",
    "60. [Government Science] United States Geological Survey. 'This Dynamic Earth: The Story of Plate Tectonics.' https://pubs.usgs.gov/gip/dynamic/dynamic.html",
    "61. [Young Earth Creationist] Answers in Genesis. 'Age of the Earth' topic page. https://answersingenesis.org/age-of-the-earth/",
    "62. [Young Earth Creationist] Institute for Creation Research. 'RATE in Review: Unresolved Problems.' https://www.icr.org/article/rate-review-unresolved-problems/",
    "63. [Academic] American Scientific Affiliation. 'RATE and Age of the Earth.' https://www.asa3.org/ASA/education/origins/rate.htm",
    "64. [Young Earth Creationist] Answers in Genesis. 'Distant Starlight.' https://answersingenesis.org/astronomy/starlight/distant-starlight-thesis/",
    "65. [Reference] Wikipedia. 'Philip Henry Gosse.' https://en.wikipedia.org/wiki/Philip_Henry_Gosse",
    "66. [Reference] Wikipedia. 'Omphalos hypothesis.' https://en.wikipedia.org/wiki/Omphalos_hypothesis",
    "67. [Science Education] TalkOrigins Archive. 'CH210: Age of the Earth.' https://www.talkorigins.org/indexcc/CH/CH210.html",
    "68. [Science Education] TalkOrigins Archive. 'CD011: Carbon dating.' https://www.talkorigins.org/indexcc/CD/CD011.html",
    "69. [Reference] Wikipedia. 'Mary Higby Schweitzer.' https://en.wikipedia.org/wiki/Mary_Higby_Schweitzer",
    "70. [University] NC State News. 'Iron Preserves, Hides Ancient Tissues in Fossilized Remains' (2013). https://news.ncsu.edu/2013/11/schweitzer-iron/",
    "71. [Young Earth Creationist] Answers in Genesis. 'Arguments to Avoid.' https://answersingenesis.org/creationism/arguments-to-avoid/",
    "72. [Young Earth Creationist] Answers in Genesis. 'Kurt P. Wise, Geology', from 'In Six Days'. https://answersingenesis.org/answers/books/in-six-days/kurt-p-wise-geology/",
    "73. [Reference] Wikipedia. 'Kurt Wise.' https://en.wikipedia.org/wiki/Kurt_Wise",
    "74. [Young Earth Creationist] Todd Charles Wood. 'The truth about evolution' (2009). https://toddcwood.blogspot.com/2009/09/truth-about-evolution.html",
    "75. [Reference] Wikipedia. 'Richard Owen.' Coined 'Dinosauria' in 1842. https://en.wikipedia.org/wiki/Richard_Owen",
    "76. [University] University of California Museum of Paleontology. 'The Dinosauria.' https://ucmp.berkeley.edu/diapsids/dinosaur.html",
    "77. [Reference] Wikipedia. 'Triassic.' https://en.wikipedia.org/wiki/Triassic",
    "78. [Museum] Natural History Museum, London. 'What killed the dinosaurs?' https://www.nhm.ac.uk/discover/dinosaur-extinction.html",
    "79. [Reference] Wikipedia. 'Chicxulub crater.' https://en.wikipedia.org/wiki/Chicxulub_crater",
    "80. [Reference] Wikipedia. 'Timeline of human evolution.' https://en.wikipedia.org/wiki/Timeline_of_human_evolution",
    "81. [Museum] Natural History Museum, London. 'The Dino Directory.' https://www.nhm.ac.uk/discover/dino-directory.html",
    "82. [University] University of California Museum of Paleontology. 'Dinobuzz: Dinosaur-Bird Relationships.' https://ucmp.berkeley.edu/diapsids/avians.html",
    "83. [Young Earth Creationist] Answers in Genesis. 'Dinosaurs on the Ark.' https://answersingenesis.org/dinosaurs/humans/dinosaurs-on-the-ark/",
    "84. [Lexical Resource] Bible Hub. 'Strong's Hebrew 8577: tannin, sea monster, serpent.' https://biblehub.com/hebrew/8577.htm",
    "85. [Commentary] Bible Hub. 'Commentaries on Genesis 1:21.' https://biblehub.com/commentaries/genesis/1-21.htm",
    "86. [Reference] Wikipedia. 'Mesozoic.' https://en.wikipedia.org/wiki/Mesozoic",
    "87. [Peer-Reviewed Journal] The Lancet Oncology. 'First case of osteosarcoma in a dinosaur: a multimodal diagnosis' (2020). https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(20)30171-6/abstract",
    "88. [Science News] ScienceDaily. 'Malignant cancer diagnosed in a dinosaur for the first time' (2020). https://www.sciencedaily.com/releases/2020/08/200803184149.htm",
    "89. [Lexical Resource] Bible Hub. 'Strong's Hebrew 930: behemoth.' https://biblehub.com/hebrew/930.htm",
    "90. [Commentary] Bible Hub. 'Commentaries on Job 40:15.' https://biblehub.com/commentaries/job/40-15.htm",
    "91. [Commentary] Bible Hub. 'Commentaries on Job 40:17.' https://biblehub.com/commentaries/job/40-17.htm",
    "92. [Young Earth Creationist] Answers in Genesis. 'Could Behemoth Have Been a Dinosaur?' https://answersingenesis.org/dinosaurs/could-behemoth-have-been-a-dinosaur/",
    "93. [Reference] Wikipedia. 'Behemoth.' https://en.wikipedia.org/wiki/Behemoth",
    "94. [Reference] Wikipedia. 'Hippopotamus.' Including its former range. https://en.wikipedia.org/wiki/Hippopotamus",
    "95. [Science Education] Glen Kuban. 'Was Behemoth a Dinosaur?' https://paleo.cc/paluxy/behemoth.htm",
    "96. [Commentary] Bible Hub. 'Commentaries on Job 41:1.' https://biblehub.com/commentaries/job/41-1.htm",
    "97. [Commentary] Bible Hub. 'Commentaries on Psalm 74:14.' https://biblehub.com/commentaries/psalms/74-14.htm",
    "98. [Commentary] Bible Hub. 'Commentaries on Isaiah 27:1.' https://biblehub.com/commentaries/isaiah/27-1.htm",
    "99. [Reference] Wikipedia. 'Lotan.' The seven-headed sea serpent of Ugaritic myth. https://en.wikipedia.org/wiki/Lotan",
    "100. [Reference] Wikipedia. 'Leviathan.' https://en.wikipedia.org/wiki/Leviathan",
    "101. [Reference] Wikipedia. 'Nile crocodile.' https://en.wikipedia.org/wiki/Nile_crocodile",
    "102. [Reference] Wikipedia. 'Tannin (mythology).' https://en.wikipedia.org/wiki/Tannin_(monster)",
    "103. [Commentary] Bible Hub. 'Commentaries on Isaiah 30:6.' https://biblehub.com/commentaries/isaiah/30-6.htm",
    "104. [Reference] Wikipedia. 'Adrienne Mayor.' Historian of fossil legends and author of 'The First Fossil Hunters'. https://en.wikipedia.org/wiki/Adrienne_Mayor",
    "105. [Reference] Wikipedia. 'Griffin.' Including the Protoceratops hypothesis. https://en.wikipedia.org/wiki/Griffin",
    "106. [Reference] Wikipedia. 'Peking Man.' Found after fossils sold as 'dragon bones' led scientists to Zhoukoudian. https://en.wikipedia.org/wiki/Peking_Man",
    "107. [Reference] Wikipedia. 'Chinese dragon.' https://en.wikipedia.org/wiki/Chinese_dragon",
    "108. [Science Education] Glen Kuban. 'The Paluxy Dinosaur/Man Track Controversy.' https://paleo.cc/paluxy/paluxy.htm",
    "109. [Reference] Wikipedia. 'Ica stones.' https://en.wikipedia.org/wiki/Ica_stones",
    "110. [Reference] Wikipedia. 'Acambaro figures.' https://en.wikipedia.org/wiki/Ac%C3%A1mbaro_figures",
    "111. [Reference] Wikipedia. 'Ta Prohm.' Including the so-called stegosaurus carving. https://en.wikipedia.org/wiki/Ta_Prohm",
    "112. [Museum] Smithsonian Human Origins Program. 'Homo sapiens.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens",
    "113. [Museum] Smithsonian Human Origins Program. 'Sahelanthropus tchadensis.' https://humanorigins.si.edu/evidence/human-fossils/species/sahelanthropus-tchadensis",
    "114. [Museum] Smithsonian Human Origins Program. 'Australopithecus afarensis.' https://humanorigins.si.edu/evidence/human-fossils/species/australopithecus-afarensis",
    "115. [Reference] Wikipedia. 'Laetoli.' The 3.66-million-year-old footprints. https://en.wikipedia.org/wiki/Laetoli",
    "116. [Peer-Reviewed Journal] Nature. Harmand et al., '3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya' (2015). https://www.nature.com/articles/nature14464",
    "117. [Reference] Wikipedia. 'Oldowan.' https://en.wikipedia.org/wiki/Oldowan",
    "118. [Museum] Smithsonian Human Origins Program. 'Homo erectus.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-erectus",
    "119. [Reference] Wikipedia. 'Dmanisi hominins.' https://en.wikipedia.org/wiki/Dmanisi_skulls",
    "120. [Reference] Wikipedia. 'Control of fire by early humans.' https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans",
    "121. [Museum] Smithsonian Human Origins Program. 'Homo heidelbergensis.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-heidelbergensis",
    "122. [Museum] Smithsonian Human Origins Program. 'Homo naledi.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-naledi",
    "123. [Reference] Wikipedia. 'Homo naledi.' Including the disputed burial claims. https://en.wikipedia.org/wiki/Homo_naledi",
    "124. [Museum] Smithsonian Human Origins Program. 'Homo floresiensis.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-floresiensis",
    "125. [Museum] Smithsonian Human Origins Program. 'Homo neanderthalensis.' https://humanorigins.si.edu/evidence/human-fossils/species/homo-neanderthalensis",
    "126. [Peer-Reviewed Journal] Nature. Meyer et al., 'Nuclear DNA sequences from the Middle Pleistocene Sima de los Huesos hominins' (2016). https://www.nature.com/articles/nature17405",
    "127. [Peer-Reviewed Journal] Nature. Hublin et al., 'New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens' (2017). https://www.nature.com/articles/nature22336",
    "128. [Museum] Smithsonian Human Origins Program. 'Our species arose at least 300,000 years ago.' https://humanorigins.si.edu/research/whats-hot-human-origins/our-species-arose-least-300000-years-ago",
    "129. [Reference] Wikipedia. 'Blombos Cave.' https://en.wikipedia.org/wiki/Blombos_Cave",
    "130. [Peer-Reviewed Journal] Nature. Oktaviana et al., 'Narrative cave art in Indonesia by 51,200 years ago' (2024). https://www.nature.com/articles/s41586-024-07541-7",
    "131. [Reference] Wikipedia. 'Behavioral modernity.' https://en.wikipedia.org/wiki/Behavioral_modernity",
    "132. [Peer-Reviewed Journal] Nature. Chimpanzee Sequencing and Analysis Consortium, 'Initial sequence of the chimpanzee genome and comparison with the human genome' (2005). https://www.nature.com/articles/nature04072",
    "133. [Reference] Wikipedia. 'Recent African origin of modern humans.' https://en.wikipedia.org/wiki/Recent_African_origin_of_modern_humans",
    "134. [Official] NobelPrize.org. 'Press release: The Nobel Prize in Physiology or Medicine 2022' (Svante Paabo). https://www.nobelprize.org/prizes/medicine/2022/press-release/",
    "135. [Official] NobelPrize.org. 'Advanced information: The Nobel Prize in Physiology or Medicine 2022.' https://www.nobelprize.org/prizes/medicine/2022/advanced-information/",
    "136. [Museum] Smithsonian Human Origins Program. 'Ancient DNA and Neanderthals.' https://humanorigins.si.edu/evidence/genetics/ancient-dna-and-neanderthals",
    "137. [Peer-Reviewed Journal] Nature. Reich et al., 'Genetic history of an archaic hominin group from Denisova Cave in Siberia' (2010). https://www.nature.com/articles/nature09710",
    "138. [Reference] Wikipedia. 'Neanderthal behaviour.' Burials, ornaments and pigments. https://en.wikipedia.org/wiki/Neanderthal_behavior",
    "139. [Reference] Wikipedia. 'Krapina Neanderthal site.' Including the eagle-talon ornaments. https://en.wikipedia.org/wiki/Krapina_Neanderthal_site",
    "140. [Reference] Wikipedia. 'Bruniquel Cave.' The 176,000-year-old stalagmite structures. https://en.wikipedia.org/wiki/Bruniquel_Cave",
    "141. [Young Earth Creationist] Answers in Genesis. 'Neanderthals: Fully Human.' https://answersingenesis.org/human-evolution/neanderthal/neanderthals-fully-human/",
    "142. [Young Earth Creationist] Answers in Genesis (Ken Ham). 'Neanderthals: Descendants of Adam' (2016). https://answersingenesis.org/blogs/ken-ham/2016/02/19/neanderthals-descendants-adam/",
    "143. [Old Earth Creationist] Reasons to Believe. 'Answering Theological Questions on Neanderthal-Human Interbreeding.' https://reasons.org/adam-eve/early-humans/answering-scientific-questions-on-neanderthal-human-interbreeding-part-2",
    "144. [Reference] Wikipedia. 'In Quest of the Historical Adam.' https://en.wikipedia.org/wiki/In_Quest_of_the_Historical_Adam",
    "145. [Publisher] Eerdmans. William Lane Craig, 'In Quest of the Historical Adam' (2021). https://www.eerdmans.com/9780802884909/in-quest-of-the-historical-adam/",
    "146. [Old Earth Creationist] Reasons to Believe. 'Critical Review: In Quest of the Historical Adam.' https://reasons.org/explore/blogs/the-cells-design/critical-review-in-quest-of-the-historical-adam",
    "147. [Publisher] Peaceful Science. S. Joshua Swamidass, 'The Genealogical Adam and Eve' (2019). https://peacefulscience.org/books/genealogical-adam-eve/",
    "148. [Peer-Reviewed Journal] Nature. Rohde, Olson and Chang, 'Modelling the recent common ancestry of all living humans' (2004). https://www.nature.com/articles/nature02842",
    "149. [Christian Science Organisation] Peaceful Science. S. Joshua Swamidass, 'Is evolutionary science in conflict with Adam and Eve?' https://peacefulscience.org/prints/evolution-adam-eve/",
    "150. [Reference] Wikipedia. 'Derek Kidner.' Proposed Adam as the first 'homo divinus' in his Tyndale Genesis commentary (1967). https://en.wikipedia.org/wiki/Derek_Kidner",
    "151. [Blog] Wisdomforlife. 'Stott on evolution and pre-Adamic hominid', quoting John Stott's 'Understanding the Bible'. https://thinkpoint.wordpress.com/2013/08/11/stott-on-evolution-and-pre-adamic-hominid/",
    "152. [Reference] Wikipedia. 'Denis Alexander.' Author of 'Creation or Evolution: Do We Have to Choose?' https://en.wikipedia.org/wiki/Denis_Alexander",
    "153. [Christian Science Organisation] Science and Faith. 'Adam and Eve as Recent Representatives.' https://www.scienceandfaith.org/a-e-recent-representatives",
    "154. [Reference] Wikipedia. 'Neolithic Revolution.' https://en.wikipedia.org/wiki/Neolithic_Revolution",
    "155. [Commentary] Bible Hub. 'Commentaries on Genesis 4:22.' https://biblehub.com/commentaries/genesis/4-22.htm",
    "156. [Reference] Wikipedia. 'Bronze Age.' https://en.wikipedia.org/wiki/Bronze_Age",
    "157. [Commentary] Bible Hub. 'Commentaries on Genesis 4:14.' https://biblehub.com/commentaries/genesis/4-14.htm",
    "158. [Reference] Wikipedia. 'Pre-Adamite.' Including its use in racial theories. https://en.wikipedia.org/wiki/Pre-Adamite",
    "159. [Reference] Wikipedia. 'Isaac La Peyrere.' https://en.wikipedia.org/wiki/Isaac_La_Peyr%C3%A8re",
    "160. [Reference] Wikipedia. 'Image of God.' https://en.wikipedia.org/wiki/Imago_Dei",
    "161. [Commentary] Bible Hub. 'Commentaries on Romans 5:12.' https://biblehub.com/commentaries/romans/5-12.htm",
    "162. [Commentary] Bible Hub. 'Commentaries on 1 Corinthians 15:21.' https://biblehub.com/commentaries/1_corinthians/15-21.htm",
    "163. [Commentary] Bible Hub. 'Commentaries on Luke 3:36.' https://biblehub.com/commentaries/luke/3-36.htm",
    "164. [Commentary] Bible Hub. 'Commentaries on Acts 17:26.' https://biblehub.com/commentaries/acts/17-26.htm",
    "165. [Reference] Wikipedia. 'Human genetic variation.' https://en.wikipedia.org/wiki/Human_genetic_variation",
    "166. [Reference] Wikipedia. 'Population bottleneck.' https://en.wikipedia.org/wiki/Population_bottleneck",
    "167. [Journal] BIO-Complexity. Hossjer and Gauger, 'A Single-Couple Human Origin is Possible' (2019). https://bio-complexity.org/ojs/index.php/main/article/viewArticle/114",
    "168. [Peer-Reviewed Journal] Science. Hu et al., 'Genomic inference of a severe human bottleneck during the Early to Middle Pleistocene transition' (2023). https://www.science.org/doi/10.1126/science.abq7487",
    "169. [Reference] Wikipedia. 'Mitochondrial Eve.' https://en.wikipedia.org/wiki/Mitochondrial_Eve",
    "170. [Reference] Wikipedia. 'Y-chromosomal Adam.' https://en.wikipedia.org/wiki/Y-chromosomal_Adam",
    "171. [Commentary] Bible Hub. 'Commentaries on Genesis 2:7.' https://biblehub.com/commentaries/genesis/2-7.htm",
    "172. [Commentary] Bible Hub. 'Commentaries on Genesis 2:21.' https://biblehub.com/commentaries/genesis/2-21.htm",
    "173. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Evolution.' https://plato.stanford.edu/entries/evolution/",
    "174. [Science Education] TalkOrigins Archive. Douglas Theobald, '29+ Evidences for Macroevolution.' https://www.talkorigins.org/faqs/comdesc/",
    "175. [Reference] Wikipedia. 'Common descent.' https://en.wikipedia.org/wiki/Common_descent",
    "176. [Peer-Reviewed Journal] Nature. Daeschler, Shubin and Jenkins, 'A Devonian tetrapod-like fish and the evolution of the tetrapod body plan' (2006). https://www.nature.com/articles/nature04639",
    "177. [University] University of California Museum of Paleontology. 'Cetaceans.' https://ucmp.berkeley.edu/mammal/cetacea/cetacean.html",
    "178. [Peer-Reviewed Journal] PNAS via PubMed Central. IJdo et al., 'Origin of human chromosome 2: an ancestral telomere-telomere fusion' (1991). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC52649/",
    "179. [Science Education] TalkOrigins Archive. Edward Max, 'Plagiarized Errors and Molecular Genetics.' https://www.talkorigins.org/faqs/molgen/",
    "180. [Reference] Wikipedia. 'Pseudogene.' https://en.wikipedia.org/wiki/Pseudogene",
    "181. [Young Earth Creationist] Answers in Genesis. 'DNA Similarities.' https://answersingenesis.org/genetics/dna-similarities/",
    "182. [Reference] Wikipedia. 'Created kind' (baraminology). https://en.wikipedia.org/wiki/Baraminology",
    "183. [Lexical Resource] Bible Hub. 'Strong's Hebrew 4327: min, kind.' https://biblehub.com/hebrew/4327.htm",
    "184. [Reference] Wikipedia. 'Speciation.' https://en.wikipedia.org/wiki/Speciation",
    "185. [Reference] Wikipedia. 'Ring species.' https://en.wikipedia.org/wiki/Ring_species",
    "186. [Reference] Wikipedia. 'E. coli long-term evolution experiment.' https://en.wikipedia.org/wiki/E._coli_long-term_evolution_experiment",
    "187. [Reference] Wikipedia. 'Richard Lenski.' https://en.wikipedia.org/wiki/Richard_Lenski",
    "188. [Science Education] TalkOrigins Archive. 'CB102: Mutations adding information.' https://www.talkorigins.org/indexcc/CB/CB102.html",
    "189. [Science Education] National Center for Science Education. Resources on creationism and evolution. https://ncse.ngo/creationism",
    "190. [Reference] Wikipedia. 'Evolution as fact and theory.' https://en.wikipedia.org/wiki/Evolution_as_fact_and_theory",
    "191. [Science Education] TalkOrigins Archive. 'CF001: Second Law of Thermodynamics.' https://www.talkorigins.org/indexcc/CF/CF001.html",
    "192. [Science Education] TalkOrigins Archive. 'CC200: Transitional fossils.' https://www.talkorigins.org/indexcc/CC/CC200.html",
    "193. [Science Education] TalkOrigins Archive. 'CB901: No macroevolution.' https://www.talkorigins.org/indexcc/CB/CB901.html",
    "194. [Intelligent Design] Discovery Institute. Michael Behe, 'Introduction and Responses to Criticism of Irreducible Complexity.' https://www.discovery.org/a/3408/",
    "195. [Science Education] TalkOrigins Archive. 'CB200: Irreducible complexity.' https://www.talkorigins.org/indexcc/CB/CB200.html",
    "196. [Science Education] TalkOrigins Archive. 'CB200.1: Bacterial flagella and irreducible complexity.' https://www.talkorigins.org/indexcc/CB/CB200_1.html",
    "197. [Reference] Wikipedia. 'Kitzmiller v. Dover Area School District.' https://en.wikipedia.org/wiki/Kitzmiller_v._Dover_Area_School_District",
    "198. [Science Education] TalkOrigins Archive. 'CB701: Haeckel's embryo pictures.' https://www.talkorigins.org/indexcc/CB/CB701.html",
    "199. [Science Education] TalkOrigins Archive. 'CC001: Piltdown Man.' https://www.talkorigins.org/indexcc/CC/CC001.html",
    "200. [Science Education] TalkOrigins Archive. 'CC002: Nebraska Man.' https://www.talkorigins.org/indexcc/CC/CC002.html",
    "201. [Science Education] TalkOrigins Archive. 'CB601: The peppered moth story.' https://www.talkorigins.org/indexcc/CB/CB601.html",
    "202. [Reference] Wikipedia. 'Cambrian explosion.' https://en.wikipedia.org/wiki/Cambrian_explosion",
    "203. [Reference] Wikipedia. 'Stephen C. Meyer.' Author of 'Darwin's Doubt' (2013). https://en.wikipedia.org/wiki/Stephen_C._Meyer",
    "204. [Science Education] TalkOrigins Archive. 'CC300: Cambrian explosion.' https://www.talkorigins.org/indexcc/CC/CC300.html",
    "205. [Reference] Wikipedia. 'John C. Sanford.' Proponent of 'genetic entropy'. https://en.wikipedia.org/wiki/John_C._Sanford",
    "206. [Reference] Wikipedia. 'Genetic load.' https://en.wikipedia.org/wiki/Genetic_entropy",
    "207. [Peer-Reviewed Journal] Nature. ENCODE Project Consortium, 'An integrated encyclopedia of DNA elements in the human genome' (2012). https://www.nature.com/articles/nature11247",
    "208. [Reference] Wikipedia. 'Junk DNA.' Including the debate over ENCODE's 80 per cent figure. https://en.wikipedia.org/wiki/Junk_DNA",
    "209. [Reference] Wikipedia. 'ENCODE.' https://en.wikipedia.org/wiki/ENCODE",
    "210. [Science Education] TalkOrigins Archive. 'CB010: Probability of abiogenesis.' https://www.talkorigins.org/indexcc/CB/CB010.html",
    "211. [Science Education] TalkOrigins Archive. 'CG001: Darwin recanted.' https://www.talkorigins.org/indexcc/CG/CG001.html",
    "212. [Science Education] TalkOrigins Archive. 'CA111: Scientists reject evolution?' https://www.talkorigins.org/indexcc/CA/CA111.html",
    "213. [Commentary] Bible Hub. 'Commentaries on Genesis 1:16.' https://biblehub.com/commentaries/genesis/1-16.htm",
    "214. [Young Earth Creationist] Answers in Genesis. 'Days of Creation' topic page. https://answersingenesis.org/days-of-creation/",
    "215. [Academic Journal] Evangelical Quarterly. Gerhard F. Hasel, 'The Polemic Nature of the Genesis Cosmology' (1974). https://biblicalstudies.org.uk/pdf/eq/1974-2_081.pdf",
    "216. [Primary Text] StudyLight. John Calvin, 'Commentary on Genesis 1.' https://www.studylight.org/commentaries/eng/cal/genesis-1.html",
    "217. [Reference] Wikipedia. 'Documentary hypothesis.' https://en.wikipedia.org/wiki/Documentary_hypothesis",
    "218. [Reference] Wikipedia. 'Toledot.' The 'generations' headings of Genesis. https://en.wikipedia.org/wiki/Toledot",
    "219. [Academic Journal] Westminster Theological Journal, via Third Millennium Ministries. Mark D. Futato, 'Because It Had Rained: A Study of Gen 2:5-7' (1998). https://thirdmill.org/newfiles/mar_futato/TH.Futato.Rained.1.html",
    "220. [Commentary] Bible Hub. 'Commentaries on Genesis 2:5.' https://biblehub.com/commentaries/genesis/2-5.htm",
    "221. [Commentary] Bible Hub. 'Commentaries on Genesis 2:19.' https://biblehub.com/commentaries/genesis/2-19.htm",
    "222. [Lexical Resource] Bible Hub. 'Strong's Hebrew 7549: raqia, expanse, firmament.' https://biblehub.com/hebrew/7549.htm",
    "223. [Reference] Wikipedia. 'Firmament.' https://en.wikipedia.org/wiki/Firmament",
    "224. [Commentary] Bible Hub. 'Commentaries on Genesis 1:6.' https://biblehub.com/commentaries/genesis/1-6.htm",
    "225. [Commentary] Bible Hub. 'Commentaries on Job 37:18.' https://biblehub.com/commentaries/job/37-18.htm",
    "226. [Reference] Wikipedia. 'Biblical cosmology.' https://en.wikipedia.org/wiki/Biblical_cosmology",
    "227. [Reference] Wikipedia. 'Letter to the Grand Duchess Christina' (Galileo, 1615). https://en.wikipedia.org/wiki/Letter_to_the_Grand_Duchess_Christina",
    "228. [Lexical Resource] Bible Hub. 'Strong's Hebrew 2329: chug, circle, vault.' https://biblehub.com/hebrew/2329.htm",
    "229. [Commentary] Bible Hub. 'Commentaries on Isaiah 40:22.' https://biblehub.com/commentaries/isaiah/40-22.htm",
    "230. [Commentary] Bible Hub. 'Commentaries on Job 26:7.' https://biblehub.com/commentaries/job/26-7.htm",
    "231. [Academic] American Scientific Affiliation. Jeffrey Burton Russell, 'The Myth of the Flat Earth' (1997). https://www.asa3.org/ASA/topics/history/1997Russell.html",
    "232. [Reference] Wikipedia. 'Enuma Elish.' https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1",
    "233. [Reference] Wikipedia. 'Tiamat.' https://en.wikipedia.org/wiki/Tiamat",
    "234. [Reference] Wikipedia. 'Atra-Hasis.' https://en.wikipedia.org/wiki/Atra-Hasis",
    "235. [Primary Text] Ancient Texts. 'Epic of Gilgamesh: Tablet XI.' https://www.ancienttexts.org/library/mesopotamian/gilgamesh/tab11.htm",
    "236. [Primary Text] Electronic Text Corpus of Sumerian Literature, University of Oxford. 'The Sumerian King List: translation.' https://etcsl.orinst.ox.ac.uk/section2/tr211.htm",
    "237. [Academic Book] David Toshio Tsumura, 'The Earth and the Waters in Genesis 1 and 2' (1989), hosted by Rutgers University. https://jewishstudies.rutgers.edu/images/documents/faculty/Rendsburg/Tsumura_Earth_Waters-Genesis_1-2.pdf",
    "238. [Reference] Wikipedia. 'Flood myth.' https://en.wikipedia.org/wiki/Flood_myth",
    "239. [Young Earth Creationist] Answers in Genesis. 'Death Before Sin?' https://answersingenesis.org/death-before-sin/",
    "240. [Commentary] Bible Hub. 'Commentaries on Genesis 1:30.' https://biblehub.com/commentaries/genesis/1-30.htm",
    "241. [Commentary] Bible Hub. 'Commentaries on Romans 8:20.' https://biblehub.com/commentaries/romans/8-20.htm",
    "242. [Commentary] Bible Hub. 'Commentaries on Psalm 104:21.' https://biblehub.com/commentaries/psalms/104-21.htm",
    "243. [Commentary] Bible Hub. 'Commentaries on Job 38:39.' https://biblehub.com/commentaries/job/38-39.htm",
    "244. [Primary Text] New Advent. Thomas Aquinas, 'Summa Theologiae' I, Q. 96, art. 1. https://www.newadvent.org/summa/1096.htm",
    "245. [Commentary] Bible Hub. 'Commentaries on Genesis 3:22.' https://biblehub.com/commentaries/genesis/3-22.htm",
    "246. [Primary Text] Darwin Correspondence Project, University of Cambridge. 'To Asa Gray, 22 May 1860.' https://www.darwinproject.ac.uk/letter/DCP-LETT-2814.xml",
    "247. [Reference] Wikipedia. 'The Problem of Pain.' https://en.wikipedia.org/wiki/The_Problem_of_Pain",
    "248. [Reference] Wikipedia. 'Christopher Southgate.' Author of 'The Groaning of Creation' (2008). https://en.wikipedia.org/wiki/Christopher_Southgate",
    "249. [Commentary] Bible Hub. 'Commentaries on Genesis 7:19.' https://biblehub.com/commentaries/genesis/7-19.htm",
    "250. [Lexical Resource] Bible Hub. 'Strong's Hebrew 776: erets, earth, land.' https://biblehub.com/hebrew/776.htm",
    "251. [Commentary] Bible Hub. 'Commentaries on Genesis 41:57.' https://biblehub.com/commentaries/genesis/41-57.htm",
    "252. [Young Earth Creationist] Answers in Genesis. 'Was There Really a Noah's Ark and Flood?' https://answersingenesis.org/the-flood/global/was-there-really-a-noahs-ark-flood/",
    "253. [Reference] Wikipedia. 'Flood geology.' Including catastrophic plate tectonics. https://en.wikipedia.org/wiki/Flood_geology",
    "254. [Reference] Wikipedia. 'Coconino Sandstone.' https://en.wikipedia.org/wiki/Coconino_Sandstone",
    "255. [Science Education] TalkOrigins Archive. 'CH541: Fish in the Flood.' https://www.talkorigins.org/indexcc/CH/CH541.html",
    "256. [Book] Kregel. Hill, Davidson, Helble and Ranney (eds.), 'The Grand Canyon, Monument to an Ancient Earth' (2016). https://www.kregel.com/biblical-studies/the-grand-canyon-monument-to-an-ancient-earth/",
    "257. [Science Education] National Center for Science Education. 'A glimpse of The Grand Canyon, Monument to an Ancient Earth.' https://ncse.ngo/glimpse-grand-canyon-monument-ancient-earth",
    "258. [Young Earth Creationist] Answers in Genesis. 'What's Wrong With The Grand Canyon, Monument to an Ancient Earth?' https://answersingenesis.org/geology/grand-canyon/whats-wrong-grand-canyon-monument-ancient-earth/",
    "259. [Young Earth Creationist] Ark Encounter. 'How Many Animals Were on Noah's Ark?' https://arkencounter.com/animals/how-many/",
    "260. [Reference] Wikipedia. 'Reasons to Believe.' Including Hugh Ross's regional flood view. https://en.wikipedia.org/wiki/Reasons_to_Believe",
    "261. [Young Earth Creationist] Answers in Genesis. 'Local Flood Theory: Why It Doesn't Work.' https://answersingenesis.org/the-flood/local-flood-theory-why-it-doesnt-work/",
    "262. [Reference] Wikipedia. 'Shuruppak.' Including its flood deposit. https://en.wikipedia.org/wiki/Shuruppak",
    "263. [Reference] Wikipedia. 'Black Sea deluge hypothesis.' https://en.wikipedia.org/wiki/Black_Sea_deluge_hypothesis",
    "264. [Commentary] Bible Hub. 'Commentaries on Matthew 24:37.' https://biblehub.com/commentaries/matthew/24-37.htm",
    "265. [Commentary] Bible Hub. 'Commentaries on 2 Peter 3:6.' https://biblehub.com/commentaries/2_peter/3-6.htm",
    "266. [Commentary] Bible Hub. 'Commentaries on Genesis 9:13.' https://biblehub.com/commentaries/genesis/9-13.htm",
    "267. [Reference] Wikipedia. 'Tower of Babel.' https://en.wikipedia.org/wiki/Tower_of_Babel",
    "268. [Commentary] Bible Hub. 'Commentaries on Genesis 10:5.' https://biblehub.com/commentaries/genesis/10-5.htm",
    "269. [Commentary] Bible Hub. 'Commentaries on Genesis 11:1.' https://biblehub.com/commentaries/genesis/11-1.htm",
    "270. [Reference] Wikipedia. 'Generations of Noah.' The Table of Nations. https://en.wikipedia.org/wiki/Generations_of_Noah",
    "271. [Reference] Wikipedia. 'Genealogies of Genesis.' https://en.wikipedia.org/wiki/Genealogies_of_Genesis",
    "272. [Peer-Reviewed Journal] Church History (Cambridge). 'William Henry Green and the Demise of Ussher's Chronology.' https://www.cambridge.org/core/journals/church-history/article/abs/most-important-biblical-discovery-of-our-time-william-henry-green-and-the-demise-of-usshers-chronology/F2702820583D5BE53E402FF09DA95DED",
    "273. [Reference] Wikipedia. 'Septuagint.' https://en.wikipedia.org/wiki/Septuagint",
    "274. [Reference] Wikipedia. 'Cainan.' Including the second Cainan of the Septuagint and Luke 3:36. https://en.wikipedia.org/wiki/Cainan",
    "275. [Commentary] Bible Hub. 'Commentaries on Genesis 5:5.' https://biblehub.com/commentaries/genesis/5-5.htm",
    "276. [Academic Journal] Perspectives on Science and Christian Faith. Carol A. Hill, 'Making Sense of the Numbers of Genesis' (2003). https://www.asa3.org/ASA/PSCF/2003/PSCF12-03Hill.pdf",
    "277. [Reference] Wikipedia. 'Longevity myths.' https://en.wikipedia.org/wiki/Longevity_myths",
    "278. [Commentary] Bible Hub. 'Commentaries on Genesis 6:3.' https://biblehub.com/commentaries/genesis/6-3.htm",
    "279. [Commentary] Bible Hub. 'Commentaries on Mark 10:6.' https://biblehub.com/commentaries/mark/10-6.htm",
    "280. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Life.' https://plato.stanford.edu/entries/life/",
    "281. [Reference] Wikipedia. 'RNA world.' https://en.wikipedia.org/wiki/RNA_world",
    "282. [Peer-Reviewed Journal] PLOS Computational Biology. 'The Origin of Biological Homochirality Along with the Origin of Life' (2020). https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1007592",
    "283. [Peer-Reviewed Journal] Science Advances. 'Origin of biological homochirality by crystallization of an RNA precursor on a magnetic surface' (2023). https://www.science.org/doi/10.1126/sciadv.adg8274",
    "284. [Peer-Reviewed Journal] Biology Direct. 'On the origin of the translation system and the genetic code in the RNA world' (2007). https://link.springer.com/article/10.1186/1745-6150-2-14",
    "285. [Peer-Reviewed Journal] Biology Direct. 'On the origin of the genetic code and tRNA before translation' (2011). https://link.springer.com/article/10.1186/1745-6150-6-14",
    "286. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Consciousness.' https://plato.stanford.edu/entries/consciousness/",
    "287. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Teleological Arguments for God's Existence.' https://plato.stanford.edu/entries/teleological-arguments/",
    "288. [Reference] Wikipedia. 'On the Origin of Species.' Including its religious reception. https://en.wikipedia.org/wiki/On_the_Origin_of_Species",
    "289. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Catholics and Evolution.' https://www.newadvent.org/cathen/05654a.htm",
    "290. [Reference] Wikipedia. 'Evolutionary argument against naturalism.' https://en.wikipedia.org/wiki/Evolutionary_argument_against_naturalism"
  ],
  lastUpdated: "17-09-2026"
}
