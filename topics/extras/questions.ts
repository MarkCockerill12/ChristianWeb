import type { ChallengeQuestion } from "../types"

/**
 * "Questions to ask" for topics that answer a challenge, keyed by topic id. Topics that
 * make a positive case (prophecy, fine-tuning, archaeology and so on) deliberately have
 * none. `section` is checked against the topic's subtopics by scripts/check_extras.ts.
 */
export const QUESTIONS: Record<string, ChallengeQuestion[]> = {
  abortion: [
    {
      claim: "It's my body, my choice.",
      asks: ["Is the child's body your body, when it has its own genetic code and heartbeat?", "Does a right over your own body include ending another person's life?"],
      point: "The dispute is whether a second person is involved. Everything turns on that question, so it is the one to ask about, with compassion.",
      section: "objections",
    },
    {
      claim: "It's just a clump of cells.",
      asks: ["What kind of cells, and what are they developing into?", "At what point does it become a person, and what changes at that moment?"],
      point: "Any line drawn after fertilisation, whether size, ability or dependence, would also exclude people everyone agrees are persons.",
      section: "when-life-begins",
    },
    {
      claim: "Pro-lifers would let a woman die rather than end a pregnancy.",
      asks: ["What do you think historic Christian teaching says about an ectopic pregnancy?", "Is a doctor who saves a dying mother doing the same thing as an elective abortion?"],
      point: "Christian ethics has long distinguished murder from acting to save a life. A mother whose life is in danger is not the case in dispute.",
      section: "life-of-the-mother",
    },
    {
      claim: "What about rape?",
      asks: ["What would actually help her most, and who is going to provide it?", "Does the child share the guilt of the attacker?"],
      point: "This calls for gentleness first and argument second. She has suffered a terrible wrong, and any answer that overlooks this fails her.",
      section: "rape-and-hard-cases",
    },
    {
      claim: "Christians only care until the baby is born.",
      asks: ["Have you seen what your local churches and pregnancy centres do?", "What would you want them to do that they are not doing?"],
      point: "Where the charge is true it needs to be fixed, not argued with. Listening to the answer is more important than winning the point.",
      section: "objections",
    },
    {
      claim: "Christians just want to judge women who have had abortions.",
      asks: ["What did Jesus say to the woman about to be stoned?", "What does the Christian teach about his own sin?"],
      point: "Anyone who judges has misunderstood the gospel. Every Christian stands forgiven at the same cross, on the same terms.",
      section: "grace",
    },
  ],
  islam: [
    {
      claim: "The Quran has no errors.",
      asks: ["Where does Quran 86:6-7 say semen comes from, and where does it come from?", "Where did Muhammad say the sun goes at night, in Bukhari 3199?", "Who else saw the moon split in two?"],
      point: "These are plain statements about the world, and the hadith settles what was meant. Reinterpreting them concedes the plain reading was wrong.",
      section: "factual-errors",
    },
    {
      claim: "The Quran has been perfectly preserved.",
      asks: ["Why did Uthman burn the other copies (Bukhari 4987)?", "Where is the stoning verse that Umar said was revealed and recited (Bukhari 6830)?"],
      point: "Islam's most trusted collections are the source of these reports, so a Muslim cannot wave them away as Christian slander.",
      section: "preservation",
    },
    {
      claim: "The Bible has been corrupted.",
      asks: ["When, by whom, and with which manuscripts as evidence?", "Why does Quran 5:47 tell Christians to judge by the Gospel, and 6:115 say no one can change God's words?", "Codex Sinaiticus predates Muhammad by three centuries. What differs in it from today's text?"],
      point: "Either the Bible of Muhammad's day was reliable, and it contradicts the Quran, or it was not, and the Quran told people to follow a corrupted book.",
      section: "gospel-dilemma",
    },
    {
      claim: "Jesus was not crucified.",
      asks: ["Which first-century source says so?", "What is your evidence, other than a verse written six hundred years later?", "If God made someone else look like Jesus, who is responsible for Christianity?"],
      point: "Every early source, including hostile ones, reports the crucifixion. The denial rests on Quran 4:157 alone.",
      section: "jesus-in-the-quran",
    },
    {
      claim: "Islam is a religion of peace, spread peacefully.",
      asks: ["What did Muhammad's followers do at Badr, and to the Banu Qurayza?", "What does Quran 9:29 command?", "How did Syria, Egypt and Persia come under Muslim rule within thirty years?"],
      point: "Many Muslims are peaceful people, which is a different question from how the religion began and what its founder did.",
      section: "history-and-war",
    },
    {
      claim: "The Bible predicts Muhammad.",
      asks: ["Who does John 14:26 say the Advocate is?", "How could one sent to Jesus' disciples, and who \"will be in you\", be a man born centuries later?"],
      point: "Reading the verses in context answers the claim, and asking the person to read them aloud is often enough.",
      section: "muslim-objections",
    },
  ],
  contradictions: [
    {
      claim: "The Bible is full of contradictions.",
      asks: ["Which one do you have in mind?", "Have you read both passages in their context?", "Could both statements be true at once, given who wrote them and why?"],
      point: "The charge is often a slogan until a passage is named. A contradiction needs two claims that cannot both be true in the same sense at the same time.",
    },
    {
      claim: "The Gospels disagree, so they cannot be trusted.",
      asks: ["Does a difference in detail amount to a contradiction?", "Would four word-for-word accounts make you more confident, or suspect collusion?"],
      point: "Independent witnesses normally differ in what they include. Mentioning one angel does not deny a second.",
      section: "ResurrectionAccounts",
    },
    {
      claim: "Samuel and Chronicles give different numbers, so the Bible has errors.",
      asks: ["How do you know the difference goes back to the authors, and not to a later copyist?", "What do the other manuscripts read?"],
      point: "Most of these are numerals, which were easy to miscopy and which other manuscripts often correct.",
      section: "chariots",
    },
    {
      claim: "Matthew and Luke give two different family trees for Jesus.",
      asks: ["What would each writer have to be claiming for the two to conflict?", "How did ancient genealogies treat adoption and levirate marriage?"],
      point: "Several explanations exist and none commands agreement, so this one remains a hard case. An unresolved difficulty is still not a demonstrated error.",
      section: "genealogies",
    },
  ],
  "did-god-change": [
    {
      claim: "The Old Testament God is wrathful and the New Testament God is love.",
      asks: ["How do you read God's description of himself in Exodus 34:6?", "Who speaks most about hell in the Bible?", "Which book has the most severe judgments, and which Testament is it in?"],
      point: "Mercy runs through the Old Testament and judgment through the New, and the most graphic warnings come from Jesus and Revelation.",
      section: "new-testament-severity",
    },
    {
      claim: "Christians pick and choose which Old Testament laws to keep.",
      asks: ["Which law do you mean, and under which covenant was it given?", "What does the New Testament itself say about that law?"],
      point: "The question moves the conversation from selective reading to how the covenants relate.",
      section: "progressive-revelation",
    },
  ],
  evolution: [
    {
      claim: "Evolution disproves Christianity.",
      asks: ["Which Christian doctrine does it contradict, and how?", "Does explaining a process remove the need for someone behind it?"],
      point: "Christians who accept evolution and those who reject it both affirm God as Creator. The conflict is with naturalism, a philosophical claim added to the science.",
      section: "theological-objections",
    },
    {
      claim: "Genesis says the earth is 6,000 years old, and science has shown otherwise.",
      asks: ["Where does Genesis state an age?", "How have Christians read the days of Genesis 1, including before modern geology?"],
      point: "The figure comes from adding up genealogies, and the church has never had a single reading of the days. The dating evidence itself is set out in full.",
      section: "history-of-interpretation",
    },
    {
      claim: "Genesis was copied from Babylonian myths.",
      asks: ["Does a shared form show borrowing, or a shared world?", "What does Genesis say differently, and what is the point of the difference?"],
      point: "Likeness of form sits alongside a sharply different view of God and humanity.",
      section: "ancient-near-eastern-parallels",
    },
    {
      claim: "Dinosaurs prove the Bible wrong.",
      asks: ["Where does the Bible address the dinosaurs at all?", "Which reading of Genesis does the argument assume?"],
      point: "The objection only bites against one reading of Genesis. Other Christian views accept the standard dates.",
      section: "dinosaurs",
    },
  ],
  "free-will": [
    {
      claim: "If God knows what I will do, I am not free.",
      asks: ["Does knowing that something will happen cause it to happen?", "If you know a friend will order coffee, did you make the choice for them?"],
      point: "The challenge runs knowledge and causation together, though the harder version concerns God's sovereignty, on which Christians themselves divide.",
      section: "concurrence",
    },
    {
      claim: "Free will is an illusion. It is all brain chemistry.",
      asks: ["If your conclusion was fixed by chemistry, what makes it rational and not just inevitable?", "Do you hold people responsible for what they do?"],
      point: "Strict determinism has trouble with the reasoning used to argue for it, and with the responsibility people assume in practice.",
      section: "philosophical-arguments",
    },
    {
      claim: "A good God would have made people who cannot sin.",
      asks: ["Could a person who is unable to refuse you really love you?", "Would you prefer that world, and what would be missing from it?"],
      point: "It tests whether the objector values free love more than a guarantee against harm.",
      section: "free-will-defense",
    },
  ],
  "god-evil": [
    {
      claim: "The God of the Old Testament is a moral monster.",
      asks: ["By what standard are you judging him?", "Is that standard objective, or a preference?", "What reason and warning does the account itself give?"],
      point: "Calling an act evil appeals to a standard beyond personal preference, so the charge has to say where the standard comes from.",
      section: "principles-of-divine-justice",
    },
    {
      claim: "The conquest of Canaan was genocide.",
      asks: ["How do you read Joshua's \"no survivors\" beside Judges 1, where the same peoples remain?", "Why are Rahab's family and the Gibeonites spared?", "Is there another ancient war report you read literally?"],
      point: "Ancient war language was often hyperbolic, though 1 Samuel 15 means that reading does not remove the difficulty entirely.",
      section: "canaanite-conquest",
    },
    {
      claim: "Only a monster would kill Egypt's firstborn.",
      asks: ["What had Egypt done to Israel's children in Exodus 1?", "How many warnings came before the last plague?"],
      point: "The account presents the last plague as judgment after generations of oppression and nine warnings. It does not make the event easy, and the section does not pretend it is.",
      section: "egyptian-plagues",
    },
  ],
  hell: [
    {
      claim: "A loving God would not send anyone to hell.",
      asks: ["What should a loving God do about evil that is never repented of?", "Would a judge who overlooked every crime be loving?", "Would heaven be welcome to someone who wants nothing to do with God?"],
      point: "The objection assumes love and justice compete. It also needs an account of what a good God would do with unrepentant evil.",
      section: "why-would-a-loving-god",
    },
    {
      claim: "Eternal punishment for finite sins is unjust.",
      asks: ["Is the seriousness of a wrong measured by how long it took to commit?", "Does the wrong depend on whom it is done against?", "What makes you think sinning stops after death?"],
      point: "Punishment does not usually match the length of the crime. Annihilationists press the objection differently, and their case is set out as well.",
      section: "the-justice-of-hell",
    },
    {
      claim: "Gehenna was only Jerusalem's rubbish dump.",
      asks: ["Which ancient source says so?", "How old is the earliest mention of it?"],
      point: "The claim first appears around AD 1200, and the valley's real association was with child sacrifice and judgment.",
      section: "the-words-behind-hell",
    },
  ],
  homosexuality: [
    {
      claim: "The Bible only condemns pederasty and exploitation.",
      asks: ["Where does the text make that limit?", "Why does Romans 1:26 include women, when pederasty was a male practice?"],
      point: "The inclusion of women and the mutual language of Romans 1:27 sit awkwardly with a pederasty-only reading.",
      section: "romans-1",
    },
    {
      claim: "Arsenokoitai has been mistranslated.",
      asks: ["Where do you think Paul got the word?", "Have you compared it with the Greek of Leviticus 18:22 and 20:13?"],
      point: "The word appears to be built from the Greek Old Testament's own prohibition.",
      section: "greek-terms",
    },
    {
      claim: "Jesus never said anything about it.",
      asks: ["What did Jesus say marriage is in Matthew 19:4-6?", "Does silence on a subject imply approval of it?"],
      point: "Jesus' stated teaching on marriage quotes Genesis, and an argument from silence works in both directions.",
      section: "genesis-design",
    },
    {
      claim: "Holding this view is hateful.",
      asks: ["What do you mean by hateful?", "Can someone disagree with what you do and still love you?"],
      point: "The historic teaching separates temptation from act and calls for compassion, a distinction the charge tends to skip.",
      section: "truth-and-grace",
    },
  ],
  jesus: [
    {
      claim: "Jesus never claimed to be God.",
      asks: ["Why did his hearers pick up stones in John 8:58-59?", "What was the charge at his trial, and why was it blasphemy?"],
      point: "His opponents understood him, and they acted on what they understood.",
      section: "direct-claims",
    },
    {
      claim: "His divinity was invented at Nicaea.",
      asks: ["When was Philippians 2 written?", "What did Pliny report Christians doing around AD 112?"],
      point: "Worship of Jesus is attested centuries before 325.",
      section: "early-christian-worship",
    },
    {
      claim: "He said the Father is greater than he is.",
      asks: ["Is greater in role the same as greater in nature?", "What does the same Gospel say about him in John 1:1 and 20:28?"],
      point: "A verse has to be read with its neighbours, and Christian doctrine already distinguishes the persons.",
      section: "objections",
    },
    {
      claim: "He was a good teacher and nothing more.",
      asks: ["Would a good teacher forgive sins committed against other people?", "Would you call someone good who said what he said about himself, if it were false?"],
      point: "Lewis's trilemma presses this, and critics add a fourth option, that the sayings are legend.",
      section: "trilemma",
    },
  ],
  miracles: [
    {
      claim: "Miracles break the laws of nature, so they cannot happen.",
      asks: ["What do you mean by a law of nature?", "Does a law describe what happens when nothing outside the system intervenes?", "How do you know nothing outside it exists?"],
      point: "Ruling miracles out in advance assumes the conclusion being argued about.",
      section: "what-is-a-miracle",
    },
    {
      claim: "No amount of testimony could ever establish a miracle.",
      asks: ["What evidence would change your mind, if any?", "If the answer is none, is that a finding or a commitment?"],
      point: "The question shows whether the position can be tested at all. Hume's argument has critics who are not believers.",
      section: "what-is-a-miracle",
    },
    {
      claim: "Miracles stopped once there were cameras and doctors.",
      asks: ["Which investigated cases have you looked at?", "What would you make of a case with records from before and after?"],
      point: "Many claims fail on examination and some remain unexplained, so the question has to be settled case by case.",
      section: "how-claims-are-assessed",
    },
    {
      claim: "Studies have proved prayer does not work.",
      asks: ["What did those trials measure?", "Could a controlled trial test a God who answers as he chooses?"],
      point: "The trials give mixed or negative results for distant prayer, which is a real finding, and what it shows about God is a further question.",
      section: "prayer-studies",
    },
  ],
  morality: [
    {
      claim: "You don't need God to be good.",
      asks: ["Who says otherwise?", "What makes something good, whoever is doing it?"],
      point: "The moral argument is not about whether atheists behave well. It asks what grounds goodness in the first place.",
      section: "the-moral-argument",
    },
    {
      claim: "Morality is just evolution.",
      asks: ["Does explaining how a belief arose tell us whether it is true?", "If cruelty had helped survival, would it have been right?"],
      point: "An account of origin is a different thing from an account of obligation.",
      section: "naturalism-and-nihilism",
    },
    {
      claim: "Morality is relative to culture.",
      asks: ["Was a culture that practised slavery wrong, or merely different?", "On what grounds did reformers oppose their own societies?"],
      point: "Calling a society's moral progress progress assumes a standard outside that society.",
      section: "moral-intuition",
    },
    {
      claim: "The Euthyphro dilemma defeats divine morality.",
      asks: ["Are those the only two options?", "What if goodness is God's own nature, and neither a command nor a rule above him?"],
      point: "The classical reply rejects the choice the dilemma offers.",
      section: "euthyphro-dilemma",
    },
  ],
  "pagan-origins": [
    {
      claim: "Jesus was copied from Horus, Mithras or Krishna.",
      asks: ["Which ancient text says that?", "Was it written before the Gospels?", "How exactly is the story the same?"],
      point: "Most of the popular parallels are not in any ancient source, or come from texts later than the Gospels.",
      section: "horus-and-osiris",
    },
    {
      claim: "Christmas and Easter are pagan festivals with new names.",
      asks: ["What is the earliest evidence for the festival, and for the Christian date?", "If a custom was borrowed, what would that show about the events themselves?"],
      point: "Some customs are late and folk in origin, which is different from the dates or the events being borrowed.",
      section: "christmas",
    },
    {
      claim: "The Old Testament was copied from older religions.",
      asks: ["Does a shared form show borrowing, or a shared world?", "What does the Bible do differently with it?"],
      point: "These parallels are real and well documented, and the argument turns on what the differences mean.",
      section: "old-testament-and-its-neighbours",
    },
    {
      claim: "Jesus never existed. He is a myth.",
      asks: ["Which historians of the period hold that view?", "How long after the crucifixion was the creed in 1 Corinthians 15 formed?"],
      point: "Almost all historians of the period, religious or not, reject the mythicist view.",
    },
  ],
  "problem-of-evil": [
    {
      claim: "If God were good and all-powerful, evil would not exist.",
      asks: ["Could a good God have any reason to allow it?", "How would you know there could not be one?"],
      point: "The logical version needs to show no such reason is possible, which is why philosophers now mostly debate the evidential version.",
      section: "logical-vs-probabilistic",
    },
    {
      claim: "This world is too full of evil for God to exist.",
      asks: ["What do you mean by evil?", "Evil compared with what standard?", "Where does that standard come from if there is no God?"],
      point: "The question draws out a tension between calling the world evil and denying any objective standard, though non-theistic moral realists dispute this.",
    },
    {
      claim: "Earthquakes and disease show nobody good is in charge.",
      asks: ["Could there be a stable physical world without any danger in it?", "What would it take to prevent every such event?"],
      point: "This is the harder half of the problem, and the responses are partial. Animal suffering before humans remains a real objection.",
      section: "natural-evil",
    },
    {
      claim: "If God is going to end evil, why not now?",
      asks: ["If he ended all evil tonight, who would be left tomorrow?", "How long would you allow people to change?"],
      point: "The delay is presented in Scripture as patience, not indifference.",
      section: "why-sin-continues",
    },
  ],
  religions: [
    {
      claim: "All religions teach basically the same thing.",
      asks: ["Which ones have you compared?", "Do they agree about who Jesus is, or whether there is one God?", "Which of them would agree with that statement?"],
      point: "Religions differ on the basic questions, and the claim itself is a position most of them reject.",
      section: "how-the-comparisons-work",
    },
    {
      claim: "Religions like Sumerian and Egyptian are older, so the Bible copied them.",
      asks: ["Does the first written record of something date its origin?", "Does being older make a claim truer?", "What would an older religion being wrong or right depend on?"],
      point: "The records put Israel later, and the Bible says other gods were worshipped before it. Age measures who wrote first, not who is right.",
      section: "how-old-are-the-religions",
    },
    {
      claim: "It is arrogant to say one religion is right.",
      asks: ["Do you think the view that all religions are wrong to claim this is itself correct?", "Is it the claim that is arrogant, or the manner of holding it?"],
      point: "Each position on religion makes truth claims, including the view that none is exclusively true.",
      section: "why-christianity",
    },
  ],
  science: [
    {
      claim: "Science has disproved Christianity.",
      asks: ["Which finding disproves which doctrine?", "Can a scientific method test what lies outside nature?"],
      point: "The clash is usually with philosophical naturalism, which goes beyond what science measures.",
      section: "limits",
    },
    {
      claim: "Science and religion have always been at war.",
      asks: ["Where does that story come from?", "Why did so many founders of modern science believe in God?"],
      point: "The warfare thesis dates from two nineteenth-century writers, and historians of science do not hold it.",
      section: "conflict-thesis",
    },
    {
      claim: "What about Galileo?",
      asks: ["What was he actually condemned for, and in what circumstances?", "Is one case enough to establish a general law?"],
      point: "The condemnation was real and wrong. It is also more tangled than the popular story, and it does not support a rule of permanent conflict.",
      section: "galileo",
    },
    {
      claim: "Real scientists do not believe in God.",
      asks: ["Which survey shows that?", "Does it show that belief causes bad science, or something else?"],
      point: "Belief is less common among American scientists than the public, and about half still report some belief in God or a higher power.",
      section: "belief-among-scientists",
    },
  ],
  slavery: [
    {
      claim: "The Bible condones slavery.",
      asks: ["What do you mean by slavery: debt servitude, or chattel slavery of the Atlantic kind?", "Which passage are you thinking of?", "Does regulating a practice mean approving of it?"],
      point: "The words cover different institutions. The permanent slavery of foreigners in Leviticus 25 remains the hardest text, and the section says so.",
      section: "key-distinctions",
    },
    {
      claim: "Christians used the Bible to defend slavery.",
      asks: ["Who led the campaigns to end it, and on what grounds?", "Which reading fits Exodus 21:16 and Galatians 3:28?"],
      point: "Both sides cited Scripture, and the abolition movements drew heavily on Christian conviction.",
      section: "historical-impact",
    },
    {
      claim: "If it was wrong, why did Jesus and Paul not abolish it?",
      asks: ["What could a tiny persecuted movement have done against Roman law?", "What does Paul's letter to Philemon ask Philemon to do?"],
      point: "It separates what the first Christians could legislate from what their teaching set in motion.",
      section: "new-testament-teaching",
    },
  ],
  "tree-of-knowledge": [
    {
      claim: "God set Adam and Eve up to fail.",
      asks: ["Would it be a choice at all if there were no alternative?", "How many other trees could they eat from?"],
      point: "The restriction is narrow and the provision vast. The harder objection, why God would allow the fall at all, is taken up as well.",
      section: "why-a-prohibition",
    },
    {
      claim: "God was keeping knowledge from them.",
      asks: ["What do you think \"the knowledge of good and evil\" means?", "Did the serpent's account of it turn out to be true?"],
      point: "The phrase is usually read as deciding good and evil for oneself, not as ordinary knowledge.",
      section: "what-the-phrase-means",
    },
    {
      claim: "God lied: they did not die that day.",
      asks: ["What do you take \"die\" to mean in Genesis 2:17?", "What happens to them that day, and what do they lose?"],
      point: "Commentators answer in several ways, and this is a real difficulty for the text.",
      section: "surely-die",
    },
  ],
  trinity: [
    {
      claim: "The word Trinity is not in the Bible.",
      asks: ["Is the question the word or the teaching?", "How do you read Matthew 28:19 and 2 Corinthians 13:14?"],
      point: "The word summarises what the texts say, and the argument turns on the texts.",
      section: "biblical-foundation",
    },
    {
      claim: "Three cannot be one. It is a contradiction.",
      asks: ["Three of what, and one of what?", "Do you mean three in the same sense as one?"],
      point: "The doctrine says one in essence and three in person, so it is not contradictory on its face.",
      section: "objections",
    },
    {
      claim: "It was invented centuries after Jesus.",
      asks: ["When was the language defined, and when was the belief first held?", "What were the councils responding to?"],
      point: "The vocabulary came later and the belief it describes came earlier, which is the point in dispute with Arian and Unitarian readers.",
      section: "history-and-heresies",
    },
  ],
  women: [
    {
      claim: "The Bible treats women as property.",
      asks: ["Which passage do you mean?", "How does it compare with the law codes around it?", "How does Genesis 1:27 fit that description?"],
      point: "Equal worth is stated at the start. Some legislation still assumes a patriarchal household, and the sections say so.",
      section: "ane-comparison",
    },
    {
      claim: "Deuteronomy 22 forces a woman to marry her rapist.",
      asks: ["Which translation and which Hebrew verb are you relying on?", "Who bears the penalty, and who can refuse?"],
      point: "The reading is contested and part of the difficulty stands, so the answers are given with their weaknesses.",
      section: "sexual-violence-laws",
    },
    {
      claim: "Paul told women to be silent.",
      asks: ["How does that fit women praying and prophesying in 1 Corinthians 11:5?", "What do you make of the women named in Romans 16?"],
      point: "The hard texts have to be read with the rest of Paul, and complementarians and egalitarians read them differently.",
      section: "paul-hard-texts",
    },
    {
      claim: "Christianity kept women down.",
      asks: ["What was a woman's position in the Greco-Roman world by comparison?", "Compared with what, and when?"],
      point: "Historians record both a rise in status in the early church and real harm later, including the witch trials.",
      section: "church-history",
    },
  ],
  canon: [
    {
      claim: "Constantine chose the books of the Bible at Nicaea.",
      asks: ["Which ancient source says so?", "What do the surviving records of Nicaea say it decided?", "What do lists from before 325 contain?"],
      point: "The claim has no support in the records of the council, and the core of the New Testament was in use long before it.",
    },
    {
      claim: "The church suppressed the real gospels.",
      asks: ["When was each of those gospels written?", "Who wrote them, and how would they know?"],
      point: "The best-known excluded gospels date from the second century or later.",
      section: "gnostic-gospels",
    },
    {
      claim: "Protestants removed books from the Bible.",
      asks: ["Which canon was in use when, and in which church?", "What did Jerome and the early lists say about these books?"],
      point: "The disagreement is older than the Reformation, and the traditions still differ on it.",
      section: "deuterocanonical-books",
    },
  ],
  "bible-translations": [
    {
      claim: "The Bible has been translated so many times that it cannot be trusted.",
      asks: ["What do you think translators work from?", "Is a modern version a translation of a translation?"],
      point: "Modern versions go back to the Hebrew and Greek directly, and those manuscripts can be compared.",
      section: "manuscripts",
    },
    {
      claim: "Modern Bibles have removed verses.",
      asks: ["Removed from what, and when was that text compiled?", "What do the oldest manuscripts have at that verse?"],
      point: "The question is whether the verses were added later or removed later. The manuscripts decide it, and major doctrine does not depend on the difference.",
      section: "missing-verses",
    },
    {
      claim: "Only the King James Version is the true Bible.",
      asks: ["Which edition of the KJV?", "Which Bible was the true one before 1611?", "What did the KJV's own translators say about translation?"],
      point: "The KJV translators' own preface did not claim what the KJV-only position claims for them.",
      section: "king-james-only",
    },
  ],
}
