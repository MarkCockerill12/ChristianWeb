"use client"

import { InlineFigure, type ImageCredit } from "@/components/visuals/figure"
import type { VisualSource } from "@/components/visuals/kit"

/**
 * Photographs placed one at a time beside the point they illustrate, with
 * `<?viz img/<key>?>` on its own line in a topic's prose. Keep each caption to
 * what the picture shows; the argument belongs in the prose around it.
 */
type Entry = ImageCredit & { readonly sources?: readonly VisualSource[] }

const BY_SA_3 = { license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0" } as const
const BY_SA_4 = { license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0" } as const
const CC0 = { license: "CC0", licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en" } as const
const PD = { license: "Public domain" } as const

const SINAITICUS = {
  src: "/images/canon/codex-sinaiticus-matthew.jpg",
  width: 800,
  height: 774,
  alt: "Page of a Greek uncial manuscript in four columns",
  credit: "British Library",
  ...PD,
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Codex_Sinaiticus_Matthew_1,1-2,5.JPG",
} as const

const ISAIAH_SCROLL = {
  src: "/images/prophecy/isaiah-scroll-53.jpg",
  width: 1000,
  height: 1137,
  alt: "Columns of Hebrew text on a Dead Sea Scroll",
  credit: "Ardon Bar-Hama, Israel Museum",
  ...PD,
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Isaiah_Scroll_Ch53.jpg",
} as const

const P52 = {
  src: "/images/jesus/p52-recto.jpg",
  width: 500,
  height: 787,
  alt: "Small papyrus fragment with Greek writing",
  caption: "Papyrus P52, a fragment of John 18, usually dated to the first half of the second century and held at the John Rylands Library, Manchester.",
  credit: "John Rylands University Library",
  ...PD,
  sourceUrl: "https://commons.wikimedia.org/wiki/File:P52_recto.jpg",
} as const

export const IMAGES: Record<string, Entry> = {
  // Archaeology
  "tel-dan": { src: "/images/archaeology/tel-dan.jpg", width: 700, height: 677, alt: "Fragments of a basalt stele with Aramaic writing", caption: "The Tel Dan Stele, Israel Museum: an Aramaean king boasting of victory over the \"House of David\".", credit: "Oren Rozen", ...BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:JRSLM_300116_Tel_Dan_Stele_01.jpg" },
  "mesha-stele": { src: "/images/archaeology/mesha-stele.jpg", width: 800, height: 1067, alt: "Black basalt stele covered in Moabite script", caption: "The Mesha Stele (c. 840 BC), Louvre: Moab's own account of its revolt against Israel.", credit: "Tangopaso", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Mesha_stele_(Louvre,_AO_5066).jpg" },
  "merneptah-stele": { src: "/images/archaeology/merneptah-stele.jpg", width: 800, height: 1251, alt: "Tall granite stele with hieroglyphic inscription", caption: "The Merneptah Stele (c. 1208 BC), Egyptian Museum, Cairo. The name Israel appears near the bottom of the text.", credit: "Webscribe", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Merenptah_Israel_Stele_Cairo.jpg" },
  "black-obelisk": { src: "/images/archaeology/black-obelisk.jpg", width: 700, height: 1053, alt: "Black stone obelisk with carved relief panels", caption: "The Black Obelisk of Shalmaneser III, British Museum. One panel shows Jehu, or his envoy, bowing before the Assyrian king.", credit: "Osama Shukir Muhammed Amin", ...BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Black_Obelisk_of_Shalmaneser_III,_9th_century_BC,_from_Nimrud,_Iraq._The_British_Museum.jpg" },
  "siloam-inscription": { src: "/images/archaeology/siloam-inscription.jpg", width: 700, height: 525, alt: "Stone slab with an ancient Hebrew inscription", caption: "The Siloam Inscription, cut where the two tunnelling crews met inside Hezekiah's Tunnel, now in the Istanbul Archaeology Museums.", credit: "Yong Woo Park", ...CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Siloam_Inscription_from_Hezekiahs_Tunnel_Istanbul_Archaeology_Museums.jpg" },
  "sennacherib-prism": { src: "/images/archaeology/sennacherib-prism.jpg", width: 700, height: 933, alt: "Six-sided clay prism covered in cuneiform", caption: "A prism of Sennacherib's annals in the Israel Museum, a copy of the account also preserved on the Taylor Prism in the British Museum.", credit: "Hanay", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Sennacherib%27s_Prism_in_the_Israel_Museum_(1).JPG" },
  "cyrus-cylinder": { src: "/images/archaeology/cyrus-cylinder.jpg", width: 700, height: 422, alt: "Barrel-shaped clay cylinder covered in cuneiform", caption: "The Cyrus Cylinder, British Museum.", credit: "Prioryman", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyrus_Cylinder_front.jpg" },
  "ketef-hinnom": { src: "/images/archaeology/ketef-hinnom.jpg", width: 700, height: 493, alt: "Small unrolled silver amulet with faint engraved letters", caption: "A Ketef Hinnom silver scroll, inscribed with the priestly blessing around 600 BC.", credit: "Israel Museum (Wikimedia Commons)", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Kettef_Hinnom_scrolls1.jpg" },
  "pilate-stone": { src: "/images/archaeology/pilate-stone.jpg", width: 700, height: 467, alt: "Limestone block with a Latin inscription", caption: "The Pilate Stone from Caesarea: \"[Pon]tius Pilatus, [Praef]ectus Iuda[eae]\".", credit: "BRBurton", ...CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Pontius_Pilate_Inscription.JPG" },
  "caiaphas-ossuary": { src: "/images/archaeology/caiaphas-ossuary.jpg", width: 700, height: 525, alt: "Ornately carved limestone bone box", caption: "The ossuary inscribed \"Joseph son of Caiaphas\", found in Jerusalem in 1990.", credit: "Deror Avi", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Ossuary_of_the_high_priest_Joseph_Caiaphas_P1180839.JPG" },
  "warning-stone": { src: "/images/archaeology/warning-stone.jpg", width: 700, height: 471, alt: "Stone block with a Greek inscription", caption: "The Temple warning stone: no foreigner to enter within the barrier, on pain of death.", credit: "Oncenawhile", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Jerusalem_Temple_Warning_Inscription.jpg" },

  // Manuscripts
  "codex-sinaiticus": { ...SINAITICUS, caption: "Codex Sinaiticus (c. 350), the opening of Matthew." },
  "codex-sinaiticus-barnabas": { ...SINAITICUS, caption: "Codex Sinaiticus, the opening of Matthew. Copied around 350, it is the oldest complete New Testament, and also contains the Epistle of Barnabas and part of the Shepherd of Hermas.", sources: [{ label: "Wikipedia, \"Codex Sinaiticus\"", url: "https://en.wikipedia.org/wiki/Codex_Sinaiticus" }] },
  "isaiah-scroll": { ...ISAIAH_SCROLL, caption: "The Great Isaiah Scroll from Qumran, open at Isaiah 53, about a thousand years older than the medieval Masoretic manuscripts." },
  "nag-hammadi-thomas": { src: "/images/canon/nag-hammadi-thomas.jpg", width: 700, height: 1263, alt: "Coptic papyrus page with the end of the Gospel of Thomas", caption: "Nag Hammadi Codex II, page 51: the end of the Gospel of Thomas in Coptic. The codices were buried in Egypt in the fourth century and found in 1945.", credit: "Coptic Museum, Cairo", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Gospel_of_Thomas_-_Nag_Hammadi_II-51.jpg", sources: [{ label: "Wikipedia, \"Nag Hammadi library\"", url: "https://en.wikipedia.org/wiki/Nag_Hammadi_library" }] },
  p52: P52,

  // Evolution
  "ice-core": { src: "/images/evolution/ice-core.jpg", width: 700, height: 467, alt: "Section of an ice core showing banding", caption: "An ice core section. In the cold interior of Greenland and Antarctica, annual layers are identified by several independent seasonal signals.", credit: "Lonnie Thompson, Byrd Polar Research Center", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Icecore_4.jpg" },
  bristlecone: { src: "/images/evolution/bristlecone.jpg", width: 700, height: 873, alt: "Gnarled ancient bristlecone pine", caption: "A Great Basin bristlecone pine on the Methuselah Trail, California.", credit: "Dcrjsr", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Big_bristlecone_pine_Pinus_longaeva.jpg" },
  varves: { src: "/images/evolution/varves.jpg", width: 700, height: 467, alt: "Striped layers of sediment in a cliff", caption: "Varves, annual layers of lake sediment, from a glacial lake at Sandend Bay, Scotland.", credit: "Anne Burgess (geograph.org.uk)", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pleistocene_Glacial_Lake_Varves_at_Sandend_Bay_in_Scotland_-_geograph_4175519.jpg" },
  tiktaalik: { src: "/images/evolution/tiktaalik.jpg", width: 700, height: 330, alt: "Fossil of a flat-headed fish with sturdy fins", caption: "Tiktaalik (about 375 million years old), a fish with a neck and limb-like fins, Field Museum, Chicago.", credit: "Eduard Solà", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Tiktaalik_Chicago.JPG" },
  archaeopteryx: { src: "/images/evolution/archaeopteryx.jpg", width: 700, height: 946, alt: "Fossil of a feathered creature with teeth and a long tail", caption: "Archaeopteryx, the Berlin specimen: feathers and wings with teeth and a bony tail.", credit: "H. Raab", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Archaeopteryx_lithographica_(Berlin_specimen).jpg" },
  lucy: { src: "/images/evolution/lucy.jpg", width: 700, height: 1689, alt: "Reconstructed skeleton of a small upright hominin", caption: "A cast of \"Lucy\" (Australopithecus afarensis, 3.2 million years), who walked upright with a chimpanzee-sized brain.", credit: "Wikimedia Commons user 120", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Reconstruction_of_the_fossil_skeleton_of_%22Lucy%22_the_Australopithecus_afarensis.jpg" },

  // Jesus
  "alexamenos-graffito": { src: "/images/jesus/alexamenos-graffito.jpg", width: 800, height: 907, alt: "Scratched plaster graffito of a man saluting a crucified figure with a donkey's head", caption: "The Alexamenos graffito from the Palatine Hill, Rome: a man raises his hand to a crucified figure with a donkey's head, captioned \"Alexamenos worships his god\".", credit: "Justin Benttinen", ...BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Alexamenos_graffito.jpg", sources: [{ label: "Wikipedia, \"Alexamenos graffito\"", url: "https://en.wikipedia.org/wiki/Alexamenos_graffito" }] },
  "megiddo-mosaic": { src: "/images/jesus/megiddo-mosaic.jpg", width: 900, height: 554, alt: "Floor mosaic with a Greek inscription inside a decorative border", caption: "The Megiddo mosaic, found in 2005 in a prayer hall near Megiddo: \"The God-loving Akeptous has offered the table to God Jesus Christ as a memorial.\" Dated c. 230 by the excavator; some archaeologists argue for a later date.", credit: "Vassilios Tzaferis", ...BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Akeptous_Inscription_2.jpg", sources: [{ label: "Wikipedia, \"Megiddo church (Israel)\"", url: "https://en.wikipedia.org/wiki/Megiddo_church_(Israel)" }] },

  // Pagan origins
  "flood-tablet": { src: "/images/pagan-origins/flood-tablet.jpg", width: 900, height: 1018, alt: "Cracked clay tablet covered in cuneiform writing", caption: "Tablet XI of the *Epic of Gilgamesh*, the \"Flood Tablet\", from the library of Ashurbanipal at Nineveh, seventh century BC, British Museum.", credit: "BabelStone", ...CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:British_Museum_Flood_Tablet.jpg" },
  amenemope: { src: "/images/pagan-origins/amenemope.jpg", width: 900, height: 438, alt: "Papyrus sheet with columns of Egyptian hieratic script", caption: "Papyrus of the *Instruction of Amenemope*, copied by the scribe Senu in the Third Intermediate Period, British Museum.", credit: "Scribe Senu, son of Pemu", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Papyrus_with_the_Instruction_of_Amenemope.jpg" },

  // Religions
  "sumerian-worshipper": { src: "/images/religions/worshipper.jpg", width: 800, height: 1267, alt: "Small stone statue of a standing man with clasped hands and wide eyes", caption: "A Sumerian worshipper statue, Early Dynastic period (c. 2900-2350 BC), placed in a temple to pray on the owner's behalf. Metropolitan Museum of Art.", credit: "Metropolitan Museum of Art", license: "CC0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Standing_male_worshiper_MET_DT850.jpg" },
  hunefer: { src: "/images/religions/hunefer.jpg", width: 1000, height: 771, alt: "Egyptian papyrus painting of a heart being weighed against a feather", caption: "The weighing of the heart, Papyrus of Hunefer, c. 1300 BC, British Museum.", credit: "Hunefer", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:BD_Hunefer_cropped_1.jpg" },

  // Resurrection
  "holy-sepulchre-aedicule": { src: "/images/resurrection/holy-sepulchre-aedicule.jpg", width: 1000, height: 667, alt: "The Aedicule shrine inside the Church of the Holy Sepulchre", caption: "The Aedicule in the Church of the Holy Sepulchre, Jerusalem, built over the rock-cut tomb identified as Jesus' burial place since Constantine's excavation in the 320s.", credit: "Gary Todd", ...CC0, sourceUrl: "https://commons.wikimedia.org/wiki/File:Church_of_the_Holy_Sepulchre_The_Aedicule,_Which_Contains_the_Holy_Sepulchre_Itself_(28431087277).jpg", sources: [{ label: "Wikipedia, \"Church of the Holy Sepulchre\"", url: "https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre" }] },
  "nazareth-inscription": { src: "/images/resurrection/nazareth-inscription.jpg", width: 800, height: 1233, alt: "Marble slab bearing the Greek text of the Nazareth Inscription", caption: "The Nazareth Inscription, an imperial edict making tomb-robbing a capital offence, long linked to reports of Jesus' empty tomb. A 2020 isotope study traced the marble to the Greek island of Kos, which makes that link unlikely.", credit: "F. Cumont (1930)", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nazareth_Inscription.jpg", sources: [{ label: "Harper et al., \"Establishing the provenance of the Nazareth Inscription\", Journal of Archaeological Science: Reports 30 (2020)", url: "https://hal.univ-lorraine.fr/hal-02934970v1/document" }, { label: "Science News, \"The Nazareth Inscription's origins may refute ties to Jesus' resurrection\"", url: "https://www.sciencenews.org/article/nazareth-inscription-origins-may-refute-ties-jesus-resurrection" }] },

  // Slavery
  "slave-bible": { src: "/images/slavery/slave-bible.jpg", width: 700, height: 1139, alt: "Title page of Select Parts of the Holy Bible for the use of the Negro Slaves, 1807", caption: "*Select Parts of the Holy Bible, for the Use of the Negro Slaves* (London, 1807), the \"Slave Bible\", which left out the exodus and Galatians 3:28.", credit: "Law & Gilbert, digitised by Oxford University", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Select_Parts_of_the_Holy_Bible_for_use_of_the_Negro_Slaves.jpg", sources: [{ label: "TheTorah.com, \"The Slave Bible: For Slavery or Salvation?\"", url: "https://www.thetorah.com/article/the-slave-bible-for-slavery-or-salvation" }] },
  "wedgwood-medallion": { src: "/images/slavery/wedgwood-medallion.jpg", width: 700, height: 810, alt: "Wedgwood jasperware medallion of a kneeling man in chains, inscribed Am I not a man and a brother", caption: "Josiah Wedgwood's 1787 medallion for the Society for Effecting the Abolition of the Slave Trade. Its motto, \"Am I not a man and a brother?\", became the emblem of the campaign.", credit: "Josiah Wedgwood, Walters Art Museum", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Wedgwood_-_Anti-Slavery_Medallion_-_Walters_482597.jpg", sources: [{ label: "Wikipedia, \"Am I Not a Man and a Brother?\"", url: "https://en.wikipedia.org/wiki/Am_I_Not_a_Man_and_a_Brother%3F" }] },
  wilberforce: { src: "/images/slavery/wilberforce.jpg", width: 700, height: 615, alt: "Unfinished oil portrait of William Wilberforce", caption: "William Wilberforce, the evangelical MP who led the parliamentary campaign that ended the British slave trade in 1807. Unfinished portrait by Thomas Lawrence, 1828.", credit: "Thomas Lawrence, National Portrait Gallery", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:William_Wilberforce_by_Thomas_Lawrence_1828.jpg" },

  // Canon
  "muratorian-fragment": { src: "/images/canon/muratorian-fragment.jpg", width: 770, height: 581, alt: "Two pages of a Latin manuscript written in a dense hand", caption: "The Muratorian Fragment, a Latin list of New Testament books in a seventh or eighth century copy at the Biblioteca Ambrosiana, Milan. Most scholars date the list it preserves to the late second century; a minority place it in the fourth.", credit: "Biblioteca Ambrosiana", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Muratorian_Fragment.jpg", sources: [{ label: "Wikipedia, \"Muratorian fragment\"", url: "https://en.wikipedia.org/wiki/Muratorian_fragment" }, { label: "Early Christian Writings, \"The Muratorian Canon\"", url: "https://www.earlychristianwritings.com/muratorian.html" }] },

  // Christianity and the world
  "xian-stele": { src: "/images/christianity-and-the-world/xian-stele.jpg", width: 900, height: 642, alt: "Carved stone head of a stele with dragons around a panel of Chinese characters", caption: "The head of the Xi'an Stele, set up in 781 and now in the Beilin Museum, Xi'an. Its title records the spread in China of the \"Luminous Religion\" from Daqin, the Church of the East.", credit: "David Castor", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nestorian_stele_1.jpg", sources: [{ label: "Wikipedia, \"Xi'an Stele\"", url: "https://en.wikipedia.org/wiki/Xi%27an_Stele" }, { label: "Catholic Encyclopedia (1913), \"Nestorius and Nestorianism\"", url: "https://www.newadvent.org/cathen/10755a.htm" }] },

  // Prophecy
  "nabonidus-chronicle": { src: "/images/prophecy/nabonidus-chronicle.jpg", width: 900, height: 866, alt: "Clay tablet covered in cuneiform writing", caption: "The Nabonidus Chronicle, a Babylonian tablet in the British Museum that records Cyrus's capture of Babylon in 539 BC.", credit: "ChrisO", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nabonidus_chronicle.jpg" },
  "arch-of-titus": { src: "/images/prophecy/arch-of-titus.jpg", width: 900, height: 597, alt: "Marble relief of Roman soldiers carrying a large menorah", caption: "Relief inside the Arch of Titus in Rome, built after AD 81: soldiers carry the menorah and other spoils of the Jerusalem temple in the triumph of AD 71.", credit: "José Luiz", ...BY_SA_3, sourceUrl: "https://commons.wikimedia.org/wiki/File:Spoils_from_Jerusalem_-_Arch_of_Titus_-_Rome_2008.jpg" },
  "antiochus-coin": { src: "/images/prophecy/antiochus-coin.jpg", width: 900, height: 900, alt: "Silver coin showing the head of a king with a diadem", caption: "A silver tetradrachm of Antiochus IV Epiphanes (reigned 175 to 164 BC), struck at Antioch.", credit: "Samu0450", ...BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Antiochos_IV_Epiphanes_tetradrachm.jpg" },

  // Bible translations
  "tyndale-john": { src: "/images/bible-translations/tyndale-john.jpg", width: 720, height: 1168, alt: "Printed page in black-letter type headed The Gospell off Sancte Jhon", caption: "The opening of John's Gospel in Tyndale's New Testament, printed by Peter Schöffer at Worms in 1526: \"In the begynnynge was that worde\".", credit: "Peter Schöffer (printer), William Tyndale", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Tyndale_Bible_-_Gospel_of_John.jpg" },
  "kjv-1611": { src: "/images/bible-translations/kjv-1611.jpg", width: 900, height: 1407, alt: "Engraved title page reading The Holy Bible, flanked by Moses and Aaron", caption: "The title page of the first edition of the King James Version, printed in London by Robert Barker in 1611.", credit: "Robert Barker, printer", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:KJV-King-James-Version-Bible-first-edition-title-page-1611.jpg" },

  // Archaeology
  "shroud-face": { src: "/images/archaeology/shroud-face.jpg", width: 520, height: 689, alt: "Two full-length views of the Shroud of Turin side by side, one in photographic negative", caption: "The Shroud of Turin in a photographic negative (left), where the figure shows natural light and shade, and as it appears on the cloth (right).", credit: "Wikimedia Commons user אסף.צ", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Turin_shroud_negative-positive.JPG" },

  // Trinity
  "baptism-of-christ": { src: "/images/trinity/baptism-of-christ.jpg", width: 900, height: 1293, alt: "Painting of John baptising Jesus in a river, with a white dove above", caption: "Piero della Francesca, *The Baptism of Christ* (1450s), National Gallery, London: the Son in the Jordan with the Spirit descending above him as a dove.", credit: "Piero della Francesca", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Piero_della_Francesca_-_Battesimo_di_Cristo_(National_Gallery,_London).jpg" },

  // Philosophy
  "plato-aristotle": { src: "/images/philosophy/plato-aristotle.jpg", width: 804, height: 1052, alt: "Fresco of two philosophers walking, one pointing up, the other holding his hand out level", caption: "Plato and Aristotle in Raphael's *School of Athens* (1509 to 1511). Plato points upward, toward the Forms; Aristotle holds his hand level, toward the world around him.", credit: "Raphael", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Sanzio_01_Plato_Aristotle.jpg" },
  "nietzsche": { src: "/images/philosophy/nietzsche.jpg", width: 900, height: 1221, alt: "Black and white portrait of a man with a large moustache", caption: "Friedrich Nietzsche, about 1875.", credit: "Friedrich Hermann Hartmann", ...PD, sourceUrl: "https://commons.wikimedia.org/wiki/File:Nietzsche187a.jpg" },
}

export default function Images({ name }: { readonly name: string }) {
  const entry = IMAGES[name]
  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      return <div className="my-4 rounded border border-red-400 p-2 text-sm text-red-700">Unknown image: {name}</div>
    }
    return null
  }
  const { sources, ...image } = entry
  return <InlineFigure image={image} sources={sources} />
}
