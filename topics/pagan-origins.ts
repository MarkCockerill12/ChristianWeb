import type { Topic } from './types'

export const PAGAN_ORIGINS: Topic = {
  id: "pagan-origins",
  title: "Was Christianity Copied From Pagan Myths?",
  description: "Did the Bible and Jesus borrow from Egyptian, Roman, Persian and Babylonian religion, and are Christmas, Easter and Halloween pagan?",
  icon: "Scroll",
  color: "amber",
  tags: ["History", "Jesus", "Holidays", "Old Testament", "Objections"],
  verses: [
    { reference: "2 Peter 1:16", text: "For we did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of his majesty." },
    { reference: "1 Corinthians 15:3-4", text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures." },
    { reference: "Acts 17:28", text: "For 'In him we live and move and have our being'; as even some of your own poets have said, 'For we are indeed his offspring.'" },
    { reference: "Romans 14:5-6", text: "One person esteems one day as better than another, while another esteems all days alike. Each one should be fully convinced in his own mind. The one who observes the day, observes it in honor of the Lord." },
    { reference: "Colossians 2:16-17", text: "Therefore let no one pass judgment on you in questions of food and drink, or with regard to a festival or a new moon or a Sabbath. These are a shadow of the things to come, but the substance belongs to Christ." },
  ],
  tldr: "Most claimed parallels between Jesus and pagan gods, such as Horus being born of a virgin on 25 December or Mithras rising from the dead, are not found in any ancient source, and several others come from texts written after the Gospels. The Old Testament does share real forms and images with its neighbours, from the flood story to parts of Proverbs, but uses them to say something different about one God. Christmas and Easter were dated from the Gospels and the Jewish calendar; customs such as Christmas trees and the Easter hare came much later from European folk practice, and popular claims such as Easter being named after Ishtar are false.",
  content: `
## The Claim

Since the nineteenth century, popular books have argued that the story of Jesus was assembled from older myths. Kersey Graves's *The World's Sixteen Crucified Saviors* (1875) argued that the gospel writers borrowed from pagan legends, and the book is still quoted despite being dismissed by biblical scholars[^1]. The online film *Zeitgeist* (2007) brought the idea to a new audience, presenting Jesus as a literary and astrological hybrid. Chris Forbes, an ancient historian at Macquarie University, judged that the film has no basis in serious scholarship and that "it is extraordinary how many claims it makes which are simply not true"[^2].

The claim usually comes in three forms:

*   **Jesus was copied** from gods such as Horus, Mithras, Krishna or Dionysus, so his story is myth and perhaps he never existed.
*   **The Old Testament was copied** from Babylonian, Egyptian and Canaanite texts.
*   **Christian holidays are pagan festivals** renamed: Christmas from the winter solstice, Easter from a spring goddess, Halloween from Samhain.

Each needs its own answer, because the evidence differs. Some proposed parallels do not exist in any ancient source. Some are real but come from texts written after the Gospels. And some are real and older: the Old Testament shares language and forms with its neighbours, and several holiday customs grew from European folk practice.

### How to Test a Parallel

In 1961 the scholar Samuel Sandmel warned colleagues against "parallelomania": noticing a similarity, overdosing on analogy, and then treating the likeness as proof of a literary connection[^3]. A parallel shows borrowing only when it passes four tests.

<?viz pagan-origins/parallel-test?>

Almost all historians of the period, religious or not, accept that Jesus existed and reject the theory that he was invented from myths[^4]. The earliest Christian summary of belief, the creed Paul quotes in 1 Corinthians 15:3-7, is commonly dated to within a few years of the crucifixion, which leaves little time for foreign myths to grow into a new religion[^5]. Its framework is Jewish: the hope of a bodily resurrection at the end of the age, held by the Pharisees and found in Daniel 12:2[^6].

<?viz pagan-origins/source-dates?>

<?viz pagan-origins/claim-checker?>
`,
  subtopics: [
    {
      id: "horus-and-osiris",
      title: "Horus and the Egyptian Gods",
      tags: ["Pagan gods"],
      content: `
Egyptian religion is genuinely ancient. Horus and his father Osiris already appear in the Pyramid Texts of the third millennium BC, among the oldest religious writings in the world[^7]. The question is not whether Horus is older than Jesus, but whether the popular list of parallels is found in Egyptian sources.

### What the Myth Says

The fullest connected telling comes from the Greek writer Plutarch, who lived from about AD 46 until after 119[^8]. Osiris is murdered by his brother Set. Isis recovers his body, restores him by magic and conceives Horus by him, then hides the child in the marshes of the Nile Delta; Horus grows up to fight Set for the throne. Osiris does not return to life on earth: he becomes king of the dead[^9].

### The Popular Claims

Egyptian sources support none of the best-known claims[^10]:

*   **Born of a virgin.** Isis conceives Horus by her husband Osiris. The story is strange, but it is not a virgin birth.
*   **Born on 25 December.** No native Egyptian source says so. A winter-solstice festival of Horus is reported only by Macrobius and Epiphanius, writers of the Christian era.
*   **Twelve disciples, crucifixion and rising after three days.** No Egyptian text gives Horus disciples, a crucifixion or a three-day burial. Horus is not killed in the myth; the god who dies is Osiris, and he remains in the underworld.

The comparison was popularised by William R. Cooper in 1877 and by Acharya S in the 2000s, and it remains disputed by specialists.


### Isis and Mary

One genuine link runs later in time. Images of Isis nursing the infant Horus are often suggested as an influence on pictures of Mary nursing Jesus. The latest images of Isis nursing date to the fourth century AD and the earliest of Mary nursing to the seventh; Sabrina Higgins argues that any connection is limited to Egypt and shows influence on images, not Christian adoption of the cult of Isis[^11]. It concerns how artists drew Mary centuries later, not what the Gospels say about Jesus.

<?viz pagan-origins/isis?>

**See also:** [Ancient Egyptian Religion (Other Religions)](/categories/religions#section-egyptian).
`,
    },
    {
      id: "mithras",
      title: "Mithras and the Roman Mysteries",
      tags: ["Pagan gods"],
      content: `
Mithras is the most often cited parallel, and the evidence can be dated. Mithra was an old Indo-Iranian god of covenant and light, worshipped in Persia[^12]. The Roman cult of Mithras was something else: a secret religion for initiated men, popular in the army, whose meeting places appear suddenly in the archaeology in the last quarter of the first century AD and which was suppressed by the end of the fourth. Since the 1970s most scholars have rejected Franz Cumont's view that it was Persian religion moved west, and many think that, apart from the god's name, it developed within Roman culture. Its monuments show Mithras born from a rock as a youth, holding a dagger and a torch, and every Mithraic temple centred on a scene of Mithras killing a bull. Vermaseren held that 25 December was Mithras's birthday; Roger Beck disagreed strongly, and Manfred Clauss notes that the mysteries had no public festivals of their own and that the December feast was a general solar one[^13].

### No Death and Resurrection

No Mithraic myth of the god's death or rising is known, and Mithras was not believed to bring salvation by suffering and dying. Similarities between the two religions are better explained by a shared cultural setting than by direct borrowing, and Bart Ehrman argues that second- and third-century Christian apologists exaggerated the likenesses in arguments with pagan officials[^14].

### The Sacred Meal

The one real overlap is a ritual meal. Justin Martyr, writing in the mid-second century, complained that "the wicked devils have imitated" the Lord's Supper "in the mysteries of Mithras", in which "bread and a cup of water are placed with certain incantations in the mystic rites"[^15]. Paul had described the Lord's Supper a century earlier (1 Corinthians 11:23-26), before Roman Mithraism is attested. If one group influenced the other, the dates do not favour the Mithraists, and a shared culture of sacred meals explains both.

<?viz pagan-origins/tauroctony?>

**See also:** [The Resurrection](/categories/resurrection).
`,
    },
    {
      id: "dying-and-rising-gods",
      title: "Dying and Rising Gods",
      tags: ["Pagan gods"],
      content: `
The broader theory comes from James Frazer's *The Golden Bough* (1890), which grouped Osiris, Tammuz, Adonis, Attis, Dionysus and Jesus as gods who die and rise with the yearly cycle of the crops. By the late twentieth century most scholars had concluded that many of Frazer's examples died but did not rise[^16]. Jonathan Z. Smith, writing the entry for the *Encyclopedia of Religion* (1987), concluded that "there is no unambiguous instance in the history of religions of a dying and rising deity", and that the resurrections of Adonis and Attis appear only in late, often Christian, reports[^17].

The debate reopened with Tryggve Mettinger's *The Riddle of Resurrection* (2001), which argued that a few West Semitic gods, such as Baal of Ugarit and Melqart, really were believed to die and return, in myths with seasonal associations. Mettinger did not count Osiris, a dead god who rules the underworld, and he almost entirely set aside the question of influence on Christianity[^18].

### Attis

The earliest recorded myth of Attis, told by Pausanias, has him die after castrating himself; violets grow from his blood and his body is kept from decaying. A Roman festival of the imperial period, the Hilaria, celebrated his rebirth in March, and the Christian writers Tertullian and Lactantius linked the date to the crucifixion[^19].

### How the Resurrection Accounts Differ

Even where a god does return, the shape of the story is different:

*   **A cycle against a single event.** The gods' returns mirror the farming year and repeat. The Gospels describe one death, under a named Roman governor, at a Passover in Jerusalem (Mark 15:1; John 19:14).
*   **A god against a man.** The myths are about gods in a timeless past. The Gospels are about a Jewish teacher whose family, followers and executioners are named.
*   **The underworld against a body.** Osiris reigns among the dead. The Gospels describe an empty tomb and a body that can be touched and that eats (Luke 24:39-43).
*   **Jewish categories.** The first Christians described the event with the Jewish hope of the resurrection of the dead at the end of the age (1 Corinthians 15:20), not in the language of seasonal rebirth.

The detailed historical case is set out in [the resurrection topic](/categories/resurrection).
`,
    },
    {
      id: "dionysus-krishna-and-others",
      title: "Dionysus, Krishna and Apollonius",
      tags: ["Pagan gods"],
      content: `
### Dionysus

Dionysus was the son of Zeus and a mortal woman, Semele, and was called "twice-born" because Zeus sewed the unborn child into his thigh. He is sometimes classed as a dying-and-rising god through the Orphic story of Zagreus, torn apart by the Titans and reborn, though scholars note that the differences make direct comparison with Jesus difficult[^20]. No ancient account makes Semele a virgin.

The wine miracles are real. Pausanias, writing in the second century AD, reports a festival at Elis in which three empty jars were sealed overnight in the sanctuary of Dionysus and found full of wine the next day; he adds that he did not witness it himself[^21]. The miracle at Cana is different in kind: water drawn for Jewish purification at a village wedding becomes wine at a word, as the first of Jesus' signs (John 2:6-11).

### Krishna

Krishna was the eighth child of Devaki and Vasudeva, a married couple, born in prison and hidden from the tyrant Kamsa, who had been warned that the eighth child would kill him. He died when a hunter named Jara mistook him for a deer and shot an arrow into his foot[^22]. No Hindu text has him crucified or born of a virgin. The main account of his childhood, the Bhagavata Purana, is dated by scholars to between the fourth and tenth centuries AD, well after the Gospels[^23].

### Apollonius of Tyana

Apollonius, a wandering Pythagorean philosopher of the first century, is often presented as a pagan rival to Jesus. His life was written by Philostratus at the request of the empress Julia Domna and finished probably in the 220s or 230s, more than a century after the Gospels. Under the emperor Diocletian, the governor Hierocles used Apollonius's miracles to argue that those of Jesus were nothing special[^24]. The comparison was made by opponents of Christianity in the third century, from a text written after the Gospels.
`,
    },
    {
      id: "rome-and-the-emperor",
      title: "Rome and the Emperor",
      tags: ["Pagan gods"],
      content: `
The Roman world supplied much of the vocabulary Christians used. After the Senate declared Julius Caesar a god in 42 BC, his adopted son Octavian, the future Augustus, styled himself *divi filius*, "son of the deified one", and put the title on his coins[^25]. An inscription from Priene in Asia Minor (9 BC) praises Augustus as a saviour sent by Providence and calls his birthday "the beginning of the good tidings" for the world, using the Greek *euangelion* (εὐαγγέλιον, good news), the word translated "gospel". The wording has often been compared with the opening of Mark, "The beginning of the gospel of Jesus Christ, the Son of God" (Mark 1:1)[^26]. Across the provinces emperors received temples, priests and sacrifices[^27].

The overlap is in titles, and it cuts against borrowing: Christians gave "Lord", "Saviour" and "Son of God" to a man the empire had crucified, and refused to offer sacrifice to the emperor. Shared words in common use are not a shared story.

**See also:** [Early Christian Worship of Jesus (Jesus' Claims)](/categories/jesus#section-early-christian-worship).
`,
    },
    {
      id: "old-testament-and-its-neighbours",
      title: "The Old Testament and Its Neighbours",
      tags: ["Old Testament"],
      content: `
Unlike most of the parallels to Jesus, the Old Testament parallels are real, ancient and accepted by scholars of every persuasion. Israel lived among Egyptians, Babylonians and Canaanites, and its writings share their languages, poetic forms, legal styles and images. The question is what Israel did with them.

<?viz pagan-origins/ot-parallels?>

### Creation

The Babylonian *Enūma Eliš*, whose earliest copy dates to the ninth century BC, opens with watery chaos. The god Marduk kills the sea goddess Tiamat, splits her body in two and makes the sky from one half, and humans are made to serve the gods. Alexander Heidel listed the parallels with Genesis 1 (a watery deep before creation, the separation of the waters, a sequence of seven) and the differences: many gods against one, combat against command, and humans made as slaves against humans given dominion. Conrad Hyers reads Genesis as a deliberate polemic that strips nature of divinity[^28].

### The Flood

The flood is the clearest literary parallel. In the Babylonian *Atrahasis*, copied in the reign of Ammi-Saduqa (1646 to 1626 BC), the gods send a flood because people have grown so many and so noisy that the gods cannot sleep[^29]. Tablet XI of the *Epic of Gilgamesh*, in a seventh-century BC copy read by George Smith in 1872, retells it: a man warned in secret builds a boat for his family and animals, the boat grounds on a mountain, he sends out a dove, a swallow and a raven, and when he sacrifices, the gods "gathered like flies over the sacrifice"[^30]. Genesis has the same sequence (Genesis 8:6-12, 20-21), and scholars widely accept that it is related to the Mesopotamian accounts[^31]. But in Genesis one God sends the flood in judgment on violence and corruption (Genesis 6:11-13), saves Noah because he is righteous (Genesis 6:9), and binds himself by covenant never to repeat it (Genesis 9:11).

### Moses in the Basket

A Neo-Assyrian text of the seventh century BC has Sargon of Akkad say that his mother, a priestess, bore him in secret, "set me in a basket of rushes, with bitumen she sealed my lid", and put him in the river, where Akki the water-drawer found and raised him. Stephanie Dalley notes the resemblance to Exodus 2, and the abandoned infant who becomes a leader is a wider motif, told also of Karna and Oedipus[^32]. The two stories run in opposite directions: Sargon, of unknown father, rises from commoner to king, while Moses, a Hebrew slave's son with named parents, is raised by Pharaoh's daughter and sides with his enslaved people[^33].

### Law

The Code of Hammurabi (about 1753 BC) and the Covenant Code of Exodus 20:22 to 23:19 share the "if a man" format of case law, the principle of an eye for an eye, and strikingly similar laws on an ox that gores (Hammurabi 250 to 252; Exodus 21:28-32). David P. Wright argues for direct dependence; the consensus is that both inherit a common legal tradition[^34]. [The slavery topic](/categories/slavery) compares the two in detail.

### Wisdom and Psalms

The Egyptian *Instruction of Amenemope*, from the Ramesside period (about 1300 to 1075 BC), is arranged in thirty chapters, and Proverbs 22:20 asks, "Have I not written for you thirty sayings?" Adolf Erman showed in 1924 how closely Proverbs 22:17 to 23:11 follows it: "Give thine ear, and hear what I say" against "Incline your ear"; "Remove not the landmark from the bounds of the field" against "Do not move the ancient landmark" (Proverbs 23:10). Most scholars hold that the Proverbs passage depends on Amenemope, though a minority disputes it[^35]. Proverbs gives the borrowed advice a new purpose: "that your trust may be in the LORD" (Proverbs 22:19).

The *Great Hymn to the Aten*, composed under Akhenaten in the fourteenth century BC, resembles Psalm 104 in its picture of night, lions, ships and creatures waiting on their creator. James Henry Breasted thought the psalm was inspired by it, Miriam Lichtheim put the likeness down to the general similarity of Egyptian hymns and biblical psalms, and Jan Assmann and Donald Redford still argue for influence[^36]. In the psalm the sun is a creature that "knows its time for setting" (Psalm 104:19), not the god being praised.

### Leviathan

At Ugarit, the *Baal Cycle* describes Lotan, "the fugitive serpent", possibly seven-headed, defeated by the storm god. Isaiah 27:1 promises that the LORD will punish "Leviathan the fleeing serpent, Leviathan the twisting serpent", and W.G. Lambert argued that the verse directly echoes the Ugaritic wording[^37]. Psalm 74:14 speaks of crushing "the heads of Leviathan", but Psalm 104:26 makes Leviathan a creature God formed to play in the sea.

### What the Parallels Show

Historic Christian teaching holds that Scripture is inspired through human authors writing in their own languages and genres (2 Timothy 3:16; 2 Peter 1:21). Shared forms are therefore expected. Where the texts differ is in what they say about God: one Creator rather than a family of warring gods, a flood sent in moral judgment rather than irritation, laws given within a covenant, and borrowed wisdom redirected to trust in the LORD.

<?viz pagan-origins/ane-gallery?>

**See also:** [Borrowed Myths? Genesis and the Mesopotamian Parallels (Evolution vs Creation)](/categories/evolution#section-ancient-near-eastern-parallels).
`,
    },
    {
      id: "persia-and-zoroastrianism",
      title: "Persia and Zoroastrianism",
      tags: ["Old Testament"],
      content: `
After Cyrus of Persia took Babylon, he allowed the Jewish exiles to return, and Isaiah 45:1 calls him the LORD's anointed[^38]. The Persian state religion, Zoroastrianism, taught a final saviour (the Saoshyant), a last battle between good and evil, judgment, heaven and hell, and the resurrection of the body.

Many scholars think that Jews under Persian rule absorbed Zoroastrian ideas about angels, demons and the end of the age, visible in later writings such as Tobit and 1 Enoch. Others reject direct influence, holding that no link can be found in Jewish or Christian texts, or propose Greek thought as the channel; Lester Grabbe accepts that Persian influence occurred but asks which developments can be attributed to Iran rather than Greece. The question is harder because the surviving Avesta dates at the oldest from the Sasanian empire, and the Pahlavi texts were composed or rewritten in the eighth to tenth centuries AD[^39].

Within the Old Testament the hope of resurrection appears in Isaiah 26:19 and Daniel 12:2. Whatever the history of the idea, the Christian claim was not that resurrection could happen, which many Jews already believed, but that it had happened to one man ahead of everyone else (1 Corinthians 15:20-23).

**See also:** [Zoroastrianism (Other Religions)](/categories/religions#section-zoroastrianism).
`,
    },
    {
      id: "christmas",
      title: "Christmas",
      tags: ["Holidays"],
      content: `
The Gospels give no date for the birth of Jesus. The earliest known reference to 25 December as the date of the nativity is in the Chronograph of 354, a Roman almanac[^40]. Two explanations compete.

### The Solstice Theory

The emperor Aurelian revived the cult of the sun god Sol Invictus and dedicated a temple to him on 25 December 274, and the same almanac marks that day as the birthday of the Unconquered, *Natalis Invicti*. On this view the church placed Christ's birthday on a pagan feast to absorb it. Steven Hijmans, however, finds no clear evidence for a winter-solstice feast of Sol before the emperor Julian in the 360s and doubts that Aurelian created one; he argues the pagan feast may have been a response to the Christian date rather than its source[^41].

### The Calculation Theory

Many early Christians believed Jesus was conceived on the same day of the year on which he died. Tertullian equated the date of the crucifixion with 25 March, and nine months later is 25 December; in the East the same reasoning with a different calendar produced 6 January. Andrew McGowan notes that no ancient Christian writer says the date was chosen to replace a pagan festival, that Christians of the time were anxious to keep apart from public pagan worship, and that the feast seems to predate Constantine. He concludes that "we cannot be entirely sure", but that the date "might really derive more from Judaism"[^42].

### Saturnalia

Saturnalia, Rome's festival of Saturn, began on 17 December and by the first century BC ran until the 23rd, with feasting, gambling, role reversal between masters and slaves, and small gifts on the day called the Sigillaria. Medieval Christmas inherited some of its riotousness, and scholars generally treat Saturnalia as one possible influence on Christmas customs, not their origin. The story that Pope Julius I set 25 December to replace it rests on a spurious source[^43].

<?viz pagan-origins/christmas-timeline?>

### The Christmas Tree

Decorated trees first appear in Renaissance guild halls in northern Germany and Livonia: the Brotherhood of Blackheads put up trees in Reval (Tallinn) and Riga in 1441, 1442, 1510 and 1514, and the earliest firmly dated picture is a keystone carved in 1576 at Turckheim in Alsace. Medieval mystery plays on 24 December, the feast of Adam and Eve, used a "paradise tree" hung with apples and wafers, which some researchers see as its forerunner, and others point to older evergreen customs. The tree reached most British homes after the *Illustrated London News* pictured the royal tree at Windsor in 1848[^44].

Jeremiah 10:3-4 describes cutting a tree, decorating it with silver and gold and fastening it with nails, and is sometimes read as a ban on Christmas trees. The passage is about making idols: the next verse compares the finished object to a scarecrow that cannot speak or walk (Jeremiah 10:5).

### Santa Claus

Santa Claus comes from a Christian bishop. Nicholas of Myra, traditionally 270 to 343, was remembered for secretly giving bags of gold as dowries to three poor sisters, and his feast on 6 December became a day of gifts. The Dutch Sinterklaas went with settlers to New Amsterdam and grew into the American Santa Claus[^45]. Many features of his modern image go back to the poem "A Visit from St. Nicholas", first published in 1823, which brings him by sleigh with eight reindeer[^46].

<?viz pagan-origins/nicholas?>
`,
    },
    {
      id: "easter",
      title: "Easter",
      tags: ["Holidays"],
      content: `
### The Name

In most languages Easter is named after Passover. The Greek and Latin *Pascha* comes through Aramaic from the Hebrew *Pesach*, the name of the Jewish festival at which the Gospels place the crucifixion (Mark 14:12). The Council of Nicaea in 325 set a common date for all Christians, the first Sunday after the first full moon on or after the spring equinox[^47]. Easter falls in spring because Passover does.

<?viz pagan-origins/easter-names?>

English and German are the exceptions. The only evidence for the English name is the monk Bede, who wrote in *The Reckoning of Time* that the month around April was once named after a goddess called Ēostre. Scholars long debated whether Bede invented her, but her name appears in place names and personal names and in Roman-era inscriptions to the *matronae Austriahenae* found in 1958, and modern scholars generally accept that she was a genuine pagan goddess[^48]. The popular claim that Easter is named after the Babylonian goddess Ishtar has no basis: the words only sound alike in modern English, and the festival is called Pascha or a form of it almost everywhere else[^49].

### Eggs and the Easter Bunny

Eating eggs was forbidden during Lent in medieval western Europe, so they returned at Easter, and Christians in Mesopotamia were reported to dye eggs red in memory of the blood of Christ. Jacob Grimm speculated in the nineteenth century that the eggs came from rites of Ēostre or "Ostara", but no link between eggs and that goddess can be traced before him[^50]. The Easter Hare is first recorded in the late seventeenth century, by Georg Franck von Franckenau, as a custom of German Lutherans. Grimm tied it to Ēostre as well, but the Oxford *Dictionary of English Folklore* says "there is no shred of evidence for this", and Bede does not connect her with any animal[^51].
`,
    },
    {
      id: "halloween",
      title: "Halloween",
      tags: ["Holidays"],
      content: `
"Halloween" is a contraction of All Hallows' Eve, the evening before All Saints' Day. On 13 May 609 or 610 Pope Boniface IV consecrated the Pantheon in Rome as a church of Mary and the martyrs; by 800 churches in Ireland and Northumbria kept a feast of all saints on 1 November, and in 835 the Frankish Empire adopted that date with the backing of Pope Gregory IV[^52].

Samhain, the Gaelic festival of 31 October to 1 November, marked the end of the harvest and the start of the darker half of the year. Scholars disagree about how far Samhain and the new Christian feasts influenced each other, and some argue that its influence on modern Halloween has been exaggerated[^53].

Some historians think the church Christianised Samhain as All Hallows; others argue Halloween began independently as the Christian vigil of All Saints, and Ronald Hutton finds no evidence that Samhain was originally a festival of the dead. The customs have mixed roots. Souling, documented from at least the fifteenth century, sent the poor, often children, from door to door on All Souls' Day collecting soul cakes in return for praying for the givers' dead. Costumed house visits called guising in Scotland and Ireland are another forerunner, and the phrase "trick or treat" is first found in print in Ontario in 1917. Souls and guisers carried lanterns of hollowed turnips; Irish and Scottish immigrants in North America switched to pumpkins, and pumpkin carving is recorded there by 1837[^54].
`,
    },
    {
      id: "sunday-and-valentines",
      title: "Sunday, Valentine's Day and Other Claims",
      tags: ["Holidays"],
      content: `
### Sunday

Christians met on the first day of the week from the start, because it was the day of the resurrection (Acts 20:7; 1 Corinthians 16:2; Revelation 1:10). The Didache, one of the earliest Christian manuals, tells believers: "every Lord's day gather yourselves together, and break bread, and give thanksgiving"[^55]. Justin Martyr, in the mid-second century, used the Roman name: "on the day called Sunday, all who live in cities or in the country gather together to one place"[^56]. The name comes from the Roman planetary week, *dies solis*, the day of the Sun, and Constantine's law of 7 March 321 made it a day of rest for city courts and workshops, nearly three centuries after Christians began meeting on it[^57].

### Valentine's Day

Lupercalia was a Roman festival of purification held on 15 February. The popular idea that Pope Gelasius I abolished it and replaced it with a Christian feast has no contemporary evidence[^58]. The feast of St Valentine is attested from at least the eighth century, but its link with romantic love began with Geoffrey Chaucer and his circle in fourteenth-century England, and scholars have dismissed the eighteenth-century suggestion that it was created to replace Lupercalia[^59].
`,
    },
    {
      id: "what-christianity-did-borrow",
      title: "What Christianity Did Borrow",
      tags: ["Borrowing"],
      content: `
Christianity grew up inside the Roman world, and some borrowing is clear. Most of it is in art and custom rather than in what Christians believed about Jesus.

*   **The halo.** Haloes came from Greek and Roman images of sun gods and deified emperors, and entered Christian art in the fourth century, at first only for Christ[^60].
*   **The Good Shepherd.** The early image of Christ carrying a lamb adapts the old Greek figure of Hermes carrying a ram, the *kriophoros*[^61].
*   **Christ as the Sun.** In a tomb beneath St Peter's Basilica, a third-century ceiling mosaic shows a haloed sun god driving a chariot, framed by Christian scenes of Jonah, a shepherd and fishermen, and is usually read as Christ pictured as the Sun[^62]. Malachi 4:2 had already called the coming saviour "the sun of righteousness".
*   **Mary nursing Jesus.** Images of Isis and Horus probably shaped some Egyptian pictures of Mary, as described in the Horus section.
*   **Folk customs.** Christmas trees, Halloween lanterns and the Easter hare grew from European folk practice, some of it with older seasonal roots, long after the festivals themselves were fixed.

The line historians draw is between form and content. Shared images, words and customs show that Christians lived in their world, as Paul did when he quoted Greek poets at Athens (Acts 17:28). They do not show that the claims about Jesus, a crucifixion under Pontius Pilate and an empty tomb in Jerusalem, were taken from it.

<?viz pagan-origins/custom-scorecard?>

<?viz pagan-origins/christ-sol?>
`,
    },
    {
      id: "objections",
      title: "Objections and Responses",
      tags: ["Objections"],
      content: `
<?viz pagan-origins/objections?>
`,
    },
  ],
  sources: [
    "1. [Wikipedia] Kersey Graves. https://en.wikipedia.org/wiki/Kersey_Graves",
    "2. [Wikipedia] Zeitgeist: The Movie. https://en.wikipedia.org/wiki/Zeitgeist:_The_Movie",
    "3. [Wikipedia] Parallelomania. https://en.wikipedia.org/wiki/Parallelomania",
    "4. [Academic] 'Rankled by Wrangling over Rank-Raglan Rankings: Jesus and the Mythic Hero Archetype | Bible Interp.' The Bible and Interpretation. https://bibleinterp.arizona.edu/articles/2014/12/mcg388023",
    "5. [Wikipedia] 1 Corinthians 15. https://en.wikipedia.org/wiki/1_Corinthians_15",
    "6. [Academic] Cohn-Sherbok. Jesus' Defence of the Resurrection of the Dead. Journal for the Study of the New Testament, 1981. https://doi.org/10.1177/0142064x8100401104",
    "7. [Encyclopedia] 'The Pyramid Texts: Guide to the Afterlife.' World History Encyclopedia. https://www.worldhistory.org/article/148/the-pyramid-texts-guide-to-the-afterlife/",
    "8. [Academic] 'Plutarch.' Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/plutarch/",
    "9. [Encyclopedia] World History Encyclopedia. 'Osiris.' https://www.worldhistory.org/Osiris/",
    "10. [Encyclopedia] World History Encyclopedia. 'Horus.' https://www.worldhistory.org/Horus/",
    "11. [Wikipedia] Isis (Isis nursing Horus and Marian iconography). https://en.wikipedia.org/wiki/Isis",
    "12. [Encyclopedia] World History Encyclopedia. 'Mithra.' https://www.worldhistory.org/Mithra/",
    "13. [Academic] 'MITHRAISM.' Encyclopaedia Iranica. https://www.iranicaonline.org/articles/mithraism",
    "14. [Wikipedia] Jesus in comparative mythology. https://en.wikipedia.org/wiki/Jesus_in_comparative_mythology",
    "15. [Primary Source] New Advent. Justin Martyr, First Apology, chapters 21, 54 and 66. https://www.newadvent.org/fathers/0126.htm",
    "16. [Wikipedia] Dying-and-rising god. https://en.wikipedia.org/wiki/Dying-and-rising_god",
    "17. [Encyclopedia] Jonathan Z. Smith. Dying and Rising Gods. Encyclopedia of Religion (1987), via Encyclopedia.com. https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/dying-and-rising-gods",
    "18. [Academic] David Frankfurter. Review of Tryggve Mettinger, The Riddle of Resurrection (2001). Bryn Mawr Classical Review 2002.09.07. https://bmcr.brynmawr.edu/2002/2002.09.07/",
    "19. [Wikipedia] Attis. https://en.wikipedia.org/wiki/Attis",
    "20. [Wikipedia] Dionysus. https://en.wikipedia.org/wiki/Dionysus",
    "21. [Primary Source] Pausanias. Description of Greece 6.26.1-2 (Perseus Digital Library). https://www.perseus.tufts.edu/hopper/text?doc=Paus.+6.26.1",
    "22. [Wikipedia] Krishna. https://en.wikipedia.org/wiki/Krishna",
    "23. [Wikipedia] Bhagavata Purana. https://en.wikipedia.org/wiki/Bhagavata_Purana",
    "24. [Wikipedia] Apollonius of Tyana. https://en.wikipedia.org/wiki/Apollonius_of_Tyana",
    "25. [Wikipedia] Divi filius. https://en.wikipedia.org/wiki/Divi_filius",
    "26. [Wikipedia] Priene calendar inscription. https://en.wikipedia.org/wiki/Priene_calendar_inscription",
    "27. [Encyclopedia] World History Encyclopedia. 'Roman Imperial Cult.' https://www.worldhistory.org/Roman_Imperial_Cult/",
    "28. [Wikipedia] Enūma Eliš. https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1",
    "29. [Wikipedia] Atra-Hasis. https://en.wikipedia.org/wiki/Atra-Hasis",
    "30. [Wikipedia] Gilgamesh flood myth. https://en.wikipedia.org/wiki/Gilgamesh_flood_myth",
    "31. [Wikipedia] Genesis flood narrative. https://en.wikipedia.org/wiki/Genesis_flood_narrative",
    "32. [Wikipedia] Sargon of Akkad (birth legend). https://en.wikipedia.org/wiki/Sargon_of_Akkad",
    "33. [Commentary] AlHaTorah.org. Moshe's Birth and the Legend of Sargon. https://alhatorah.org/Moshe's_Birth_and_the_Legend_of_Sargon",
    "34. [Wikipedia] Code of Hammurabi (relationship to the Covenant Code). https://en.wikipedia.org/wiki/Code_of_Hammurabi",
    "35. [Wikipedia] Instruction of Amenemope. https://en.wikipedia.org/wiki/Instruction_of_Amenemope",
    "36. [Wikipedia] Great Hymn to the Aten. https://en.wikipedia.org/wiki/Great_Hymn_to_the_Aten",
    "37. [Wikipedia] Lotan. https://en.wikipedia.org/wiki/Lotan",
    "38. [Wikipedia] Cyrus the Great in the Bible. https://en.wikipedia.org/wiki/Cyrus_the_Great_in_the_Bible",
    "39. [Academic] 'ZOROASTRIANISM i. HISTORICAL REVIEW UP TO THE ARAB CONQUEST.' Encyclopaedia Iranica. https://www.iranicaonline.org/articles/zoroastrianism-i-historical-review",
    "40. [Wikipedia] Christmas. https://en.wikipedia.org/wiki/Christmas",
    "41. [Wikipedia] Sol Invictus. https://en.wikipedia.org/wiki/Sol_Invictus",
    "42. [Archaeology] Andrew McGowan. How December 25 Became Christmas. Biblical Archaeology Society. https://www.biblicalarchaeology.org/daily/people-cultures-in-the-bible/jesus-historical-jesus/how-december-25-became-christmas/",
    "43. [Encyclopedia] 'Christmas.' Catholic Encyclopedia (1913), New Advent. https://www.newadvent.org/cathen/03724b.htm",
    "44. [Wikipedia] Christmas tree. https://en.wikipedia.org/wiki/Christmas_tree",
    "45. [Wikipedia] Saint Nicholas. https://en.wikipedia.org/wiki/Saint_Nicholas",
    "46. [Primary Source] 'Twas the Night before Christmas: A Visit from St. Nicholas by Clement Clarke Moore | Project Gutenberg.' Project Gutenberg. https://www.gutenberg.org/ebooks/17135",
    "47. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Easter.' https://www.newadvent.org/cathen/05224d.htm",
    "48. [Reference] 'Ostara and the Hare: Not Ancient, but Not As Modern As Some Skeptics Think | Folklife Today.' Library of Congress, Folklife Today. https://blogs.loc.gov/folklife/2016/04/ostara-and-the-hare/",
    "49. [Reference] AAP FactCheck. No, Easter wasn't named after a Mesopotamian goddess. https://www.aap.com.au/factcheck/no-easter-wasnt-named-after-a-mesopotamian-goddess/",
    "50. [Wikipedia] Easter egg. https://en.wikipedia.org/wiki/Easter_egg",
    "51. [Reference] 'On the Bunny Trail: In Search of the Easter Bunny | Folklife Today.' Library of Congress, Folklife Today. https://blogs.loc.gov/folklife/2016/03/easter-bunny/",
    "52. [Wikipedia] All Saints' Day. https://en.wikipedia.org/wiki/All_Saints%27_Day",
    "53. [Wikipedia] Samhain. https://en.wikipedia.org/wiki/Samhain",
    "54. [Wikipedia] Halloween. https://en.wikipedia.org/wiki/Halloween",
    "55. [Primary Source] New Advent. The Didache, chapter 14. https://www.newadvent.org/fathers/0714.htm",
    "56. [Primary Source] Early Christian Writings. Justin Martyr, First Apology, chapter 67. https://www.earlychristianwritings.com/text/justinmartyr-firstapology.html",
    "57. [Wikipedia] Sunday. https://en.wikipedia.org/wiki/Sunday",
    "58. [Wikipedia] Lupercalia. https://en.wikipedia.org/wiki/Lupercalia",
    "59. [Wikipedia] Saint Valentine. https://en.wikipedia.org/wiki/Saint_Valentine",
    "60. [Encyclopedia] 'Nimbus.' Catholic Encyclopedia (1913), New Advent. https://www.newadvent.org/cathen/11080b.htm",
    "61. [Primary Source] 'Boston 99.489 (Sculpture).' Perseus Digital Library. https://www.perseus.tufts.edu/cgi-bin/ptext?doc=Perseus:text:1999.04.0041&query=Boston%2099.489",
    "62. [Wikipedia] Tomb of the Julii. https://en.wikipedia.org/wiki/Tomb_of_the_Julii"
  ],
  lastUpdated: "30-10-2026",
}
