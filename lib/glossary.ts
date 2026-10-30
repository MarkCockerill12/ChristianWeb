/**
 * Short definitions for technical terms that recur across topics. The first use
 * of a term in each rendered block gets a dotted underline and a hover/tap
 * definition (components/topic-popover.tsx), so a page can use "homoousios" or
 * "Septuagint" without stopping to define it every time.
 *
 * Keys are matched case-insensitively on word boundaries. Longer keys are tried
 * first so "Masoretic Text" wins over a shorter overlapping term.
 */
export const GLOSSARY: Record<string, string> = {
  "homoousios": "Greek, \"of the same substance\". The Nicene Creed's word (325) for the Son's relation to the Father: fully God in the same sense the Father is.",
  "homoiousios": "Greek, \"of like substance\". A fourth-century compromise term saying the Son is similar to the Father in being, set aside when the Council of Constantinople reaffirmed homoousios in 381.",
  "hypostasis": "Greek term the Cappadocian Fathers used for each of the three persons of the Trinity, as distinct from the one shared ousia (being).",
  "ousia": "Greek, \"being\" or \"essence\". In Trinitarian theology, the one divine nature shared fully by Father, Son and Spirit.",
  "perichoresis": "Greek, \"mutual indwelling\". The teaching that the three persons of the Trinity exist in and through one another without merging.",
  "filioque": "Latin, \"and the Son\". Western addition to the Nicene Creed saying the Spirit proceeds from the Father and the Son; a cause of the 1054 East-West split.",
  "arsenokoitai": "Greek compound (arsen, \"male\" + koite, \"bed\") in 1 Corinthians 6:9 and 1 Timothy 1:10, apparently formed from the Septuagint wording of Leviticus 20:13.",
  "malakoi": "Greek, literally \"soft ones\". Used in 1 Corinthians 6:9 beside arsenokoitai; its exact sexual sense is debated.",
  "herem": "Hebrew, \"devoted to destruction\" or \"the ban\". The giving over of a city or people wholly to God, used in the conquest narratives.",
  "Gehenna": "Greek form of the Hebrew Ge Hinnom, the Valley of Hinnom south of Jerusalem, once a site of child sacrifice; Jesus' usual word for final judgment.",
  "Sheol": "Hebrew word for the realm of the dead in the Old Testament, used for the grave and the place of all the dead.",
  "Hades": "Greek word for the realm of the dead; the Septuagint uses it to translate Sheol.",
  "Tartarus": "In Greek myth the deepest pit of the underworld. The verb form appears once in the New Testament, 2 Peter 2:4, for the fallen angels.",
  "Septuagint": "The Greek translation of the Hebrew Scriptures made in Alexandria from the third century BC; the Old Testament most New Testament writers quote. Abbreviated LXX.",
  "LXX": "Abbreviation for the Septuagint, the ancient Greek translation of the Hebrew Scriptures (from the tradition that seventy scholars produced it).",
  "Masoretic Text": "The standard Hebrew text of the Old Testament, copied and vocalised by Jewish scribes (the Masoretes) between about the 6th and 10th centuries AD.",
  "Textus Receptus": "\"Received text\": the printed Greek New Testament descended from Erasmus (1516), the basis of the KJV New Testament.",
  "Vulgate": "Jerome's Latin translation of the Bible (late 4th century), the standard Bible of the Western church for a thousand years.",
  "deuterocanonical": "\"Second canon\": books such as Tobit, Judith, Wisdom and 1-2 Maccabees, accepted as Scripture by Catholics and Orthodox but not by most Protestants.",
  "pseudepigrapha": "Ancient writings falsely attributed to a famous figure, such as 1 Enoch or the Apocalypse of Peter, generally outside the biblical canon.",
  "Gnostic": "From gnosis, \"knowledge\". Second-century movements teaching salvation through secret knowledge; many held that the world was made by a lower god distinct from the true God.",
  "theodicy": "An attempt to explain God's actual reasons for permitting evil, as opposed to a defense, which only shows God and evil are logically compatible.",
  "Molinism": "View named after Luis de Molina (1535-1600) that God knows what every free creature would do in any circumstance (middle knowledge) and plans accordingly.",
  "middle knowledge": "In Molinism, God's knowledge of what free creatures would do in every possible circumstance, logically prior to his decision to create.",
  "compatibilism": "The view that free will and determinism are compatible: an act is free if it flows from the agent's own desires without external compulsion.",
  "libertarian free will": "The view that a free choice is not determined by prior causes: in the same circumstances the agent could have chosen otherwise.",
  "eschatology": "The study of the last things: death, judgment, the return of Christ, resurrection and the new creation.",
  "amillennialism": "The view that the thousand years of Revelation 20 symbolise the present church age between Christ's first and second comings.",
  "premillennialism": "The view that Christ returns before a literal thousand-year reign on earth.",
  "postmillennialism": "The view that Christ returns after a long golden age in which the gospel spreads and transforms society.",
  "preterist": "Reading of prophecy (especially Revelation and Matthew 24) as largely fulfilled in the first century, chiefly in the fall of Jerusalem in AD 70.",
  "dispensationalism": "A 19th-century system (J.N. Darby) dividing history into distinct eras, keeping Israel and the church separate and teaching a pre-tribulation rapture.",
  "rapture": "The catching up of believers to meet Christ (1 Thessalonians 4:17). Its timing relative to the tribulation is disputed.",
  "sola scriptura": "Latin, \"Scripture alone\". The Reformation principle that Scripture is the only infallible rule of faith, above church tradition.",
  "sola fide": "Latin, \"faith alone\". The Reformation teaching that justification is received through faith, not through works.",
  "transubstantiation": "Catholic teaching that the substance of the bread and wine becomes the body and blood of Christ while the outward appearances remain.",
  "consubstantiation": "Term often used, though Lutherans themselves avoid it, for the view that Christ's body and blood are present in, with and under the bread and wine.",
  "credobaptism": "Baptism of believers only, after a personal profession of faith.",
  "paedobaptism": "Baptism of infants of believing parents.",
  "ex opere operato": "Latin, \"by the work performed\". Catholic teaching that a sacrament conveys grace through the rite itself, not the minister's holiness.",
  "imago Dei": "Latin, \"image of God\". Genesis 1:27's description of humanity, the basis of the Christian teaching of equal human dignity.",
  "kenosis": "Greek, \"emptying\", from Philippians 2:7: the Son's humbling of himself in taking human nature.",
  "Christology": "The study of the person and nature of Jesus Christ.",
  "miaphysite": "Oriental Orthodox Christology: Christ has one united nature that is both divine and human, rejecting Chalcedon's \"two natures\" formula.",
  "modalism": "The heresy that Father, Son and Spirit are three modes or roles of one person rather than three distinct persons. Also called Sabellianism.",
  "Arianism": "Arius's 4th-century teaching that the Son was the first and highest created being, not eternal God; condemned at Nicaea in 325.",
  "tritheism": "The error of treating Father, Son and Spirit as three separate gods.",
  "annihilationism": "The view that the unsaved are finally destroyed and cease to exist rather than suffering consciously forever. Also called conditional immortality.",
  "conditional immortality": "The view that immortality is God's gift to the saved only, so the unsaved are finally destroyed rather than suffering forever.",
  "universalism": "The view that all people will finally be saved.",
  "purgatory": "Catholic teaching of a state of final purification after death for those who die in God's grace but are not yet fully purified.",
  "abiogenesis": "The origin of life from non-living chemistry.",
  "isochron": "A radiometric dating method that plots several minerals from one rock; the slope of the line gives the age and checks for contamination.",
  "half-life": "The time it takes for half of a sample of a radioactive isotope to decay, fixed for each isotope.",
  "anthropic principle": "The observation that the universe must allow observers, since otherwise no one would be here to observe it.",
  "multiverse": "The hypothesis that our universe is one of a vast number of universes with different physical constants.",
  "cubit": "Ancient unit of length, the forearm from elbow to fingertip, roughly 45 cm (the long royal cubit about 52 cm).",
  "ossuary": "A stone box for the bones of the dead, used by Jews in and around Jerusalem mainly between about 20 BC and AD 70.",
  "stele": "An upright stone slab carved with an inscription, used in the ancient Near East for royal records and boundary markers.",
  "codex": "A book with bound pages, as opposed to a scroll. Christians adopted it early for their Scriptures.",
  "uncial": "A manuscript written in capital letters, typical of Greek Bibles from the 4th to the 9th centuries.",
  "minuscule": "A manuscript written in a joined lower-case script, the usual form for Greek Bibles from the 9th century on.",
  "textual criticism": "The scholarly comparison of manuscripts to establish the original wording of a text.",
  "Synoptic": "From \"seeing together\": Matthew, Mark and Luke, which share much of their material and order.",
  "Tetragrammaton": "The four Hebrew letters YHWH, the personal name of God in the Old Testament.",
  "Tanakh": "Jewish name for the Hebrew Bible, from Torah (Law), Nevi'im (Prophets) and Ketuvim (Writings).",
  "Pentateuch": "The first five books of the Bible, Genesis to Deuteronomy, the Torah.",
  "Sanhedrin": "The supreme Jewish council in Jerusalem under Roman rule, led by the high priest.",
  "merism": "A figure of speech naming two extremes to mean everything between, as in \"heaven and earth\" for all creation.",
  "progressive revelation": "The teaching that God revealed himself gradually through history, so later Scripture fills out earlier Scripture without contradicting it.",
  "Marcion": "Second-century teacher (d. c. 160) who rejected the Old Testament God as a lesser deity and kept only an edited Luke and ten letters of Paul.",
  "covenant": "A binding relationship established by solemn promise. Scripture is organised around God's covenants with Noah, Abraham, Israel at Sinai, David and the New Covenant.",
}

const KEYS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length)
const LOOKUP = new Map(KEYS.map((k) => [k.toLowerCase(), k]))
const TERM = new RegExp(
  String.raw`(?<![\w-])(${KEYS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![\w-])`,
  "gi",
)

/** Glossary key for a matched term, case-insensitively. */
export function glossaryKey(term: string): string | undefined {
  return LOOKUP.get(term.toLowerCase())
}

/**
 * Wrap the first occurrence of each glossary term in a text node of `html`.
 * Never inside a tag, an anchor or a heading, since a definition popup on a
 * link or title gets in the way of the thing being clicked.
 */
export function markGlossaryTerms(html: string): string {
  const seen = new Set<string>()
  let skipDepth = 0

  return html
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<")) {
        if (/^<(a|h[1-6])\b/i.test(part)) skipDepth++
        else if (/^<\/(a|h[1-6])>/i.test(part)) skipDepth = Math.max(0, skipDepth - 1)
        return part
      }
      if (skipDepth > 0 || !part.trim()) return part
      return part.replace(TERM, (match: string) => {
        const key = glossaryKey(match)
        if (!key || seen.has(key)) return match
        seen.add(key)
        return `<span class="gloss" tabindex="0" data-gloss="${key}">${match}</span>`
      })
    })
    .join("")
}
