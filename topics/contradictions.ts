import type { Topic } from './types'

export const contradictions: Topic = {
  id: 'contradictions',
  title: 'Contradictions in the Bible?',
  description: `Are there any contradictions in the Bible?`,
  icon: 'AlertTriangle',
  color: 'orange',
  tags: ['Historical', 'Scripture'],
  verses: [
    { reference: "Numbers 23:19", text: "God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill?" },
    { reference: "John 17:17", text: "Sanctify them by the truth; your word is truth." },
    { reference: "Proverbs 30:5", text: "Every word of God is flawless; he is a shield to those who take refuge in him." }
  ],
  tldr: `Apparent contradictions in the Bible often resolve when considering context, literary genre, and translation nuances. Differences in perspective or details between accounts usually point to independent verification rather than error.`,
  content: `
Many apparent contradictions in the Bible can be resolved through careful examination of context, language, literary genre, and historical background[^1][^2][^3]. Most perceived contradictions arise from:

- **Different perspectives**: Multiple authors describing the same event from different viewpoints or with different theological goals[^4][^5][^6].
  - **Literary devices**: Use of approximation, rounding, or different ancient measurement systems, which were not intended for modern precision[^7][^8][^9].
  - **Translation issues**: Hebrew and Greek terms that don't have exact one-to-one English equivalents, requiring interpretation by translators[^10][^11][^12].
  - **Genre differences**: Treating historical narrative, poetry, and apocalyptic literature all with the same literalness[^13][^14][^15].
  - **Complementary accounts**: Details that supplement rather than contradict each other, like two witnesses describing different parts of the same event[^16][^17][^18].
  - **Scribal transmission**: Minor errors in manual copying over millennia (e.g., miscopying a number), which are identifiable and correctable through textual criticism[^19][^20][^21].

The principle of "Scripture interprets Scripture" suggests that when apparent contradictions arise, we should look at the broader biblical context and allow clearer passages to illuminate more difficult ones[^22][^23][^24].
`,
  subtopics: [
    {
      id: 'GenAnimals',
      title: 'Genesis 1:25-27 vs Genesis 2:7-19 - man created after vs before the animals',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** Genesis 1:25-27 states that animals were created before man on the sixth day, whereas Genesis 2:7-19 seems to describe God creating man first, then creating the animals afterward to find a suitable companion for him.

**Clarification:** This apparent contradiction resolves when we understand that [Genesis 1](https://www.biblegateway.com/passage/?search=Genesis+1&version=NIV) and [Genesis 2](https://www.biblegateway.com/passage/?search=Genesis+2&version=NIV) serve different literary purposes; Genesis 1 has a cosmological focus providing a chronological "global overview" of all creation, while Genesis 2 "zooms in" on the sixth day with an anthropological (human-centered) focus to detail humanity's creation[^25]. The Hebrew verb *yatsar* ('formed') in [Genesis 2:19](https://www.biblegateway.com/passage/?search=Genesis+2%3A19&version=NIV) can be translated in the pluperfect tense as "had formed," indicating a past action; God had already formed the animals before bringing them to Adam[^26][^27][^28]. Furthermore, Genesis 2 refers specifically to the local 'beasts of the field' brought to Adam, focusing not on chronological ordering but on man's need for companionship[^29][^30][^31].`,
    },
    {
      id: 'GenArk',
      title: 'Genesis 6:19-20 vs Genesis 7:2-3 - two animals per species vs seven pairs of clean animals',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** Genesis 6:19-20 commands Noah to bring two of every kind of animal onto the Ark, whereas Genesis 7:2-3 commands him to take seven pairs of clean animals and birds.

**Clarification:** These passages are complementary, not contradictory[^32]. [Genesis 6:19-20](https://www.biblegateway.com/passage/?search=Genesis+6%3A19-20&version=NIV) gives the general command for preserving animal life (a minimum of two of every kind)[^33][^34][^35]. [Genesis 7:2-3](https://www.biblegateway.com/passage/?search=Genesis+7%3A2-3&version=NIV) then provides a more specific, layered instruction for clean animals and birds (seven pairs)[^36][^37][^38]. The 'two of every kind' establishes the minimum for species preservation, while the extra clean animals were taken specifically for post-flood sacrifices, which Noah indeed offers in [Genesis 8:20](https://www.biblegateway.com/passage/?search=Genesis+8%3A20&version=NIV)[^39][^40].`,
    },
    {
      id: 'GenFlood',
      title: 'Genesis 7:17 vs Genesis 7:24 - flood lasts 40 days vs waters prevail for 150 days',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** Genesis 7:17 states that the flood was on the earth for 40 days, whereas Genesis 7:24 states that the waters prevailed upon the earth for 150 days.

**Clarification:** These verses describe different phases of the same flood event. [Genesis 7:17](https://www.biblegateway.com/passage/?search=Genesis+7%3A17&version=NIV) refers specifically to the initial period of rising waters and active rainfall[^41][^42]. [Genesis 7:24](https://www.biblegateway.com/passage/?search=Genesis+7%3A24&version=NIV) uses the Hebrew verb *gabar* ('prevailed'), meaning 'to be strong' or 'have power over'[^43][^44][^45]. This 150-day period refers to the entire time the waters remained at their peak level, which includes the initial 40 days of rain, before they finally began to recede[^46][^47].`,
    },
    {
      id: 'CainsWife',
      title: 'Genesis 4:17 - Where did Cain get his wife?',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** Genesis 4:17 mentions Cain's wife, yet the narrative has only recorded the creation of Adam, Eve, Cain, and Abel, leaving no clear origin for another woman.

**Clarification:** This is resolved by reading the surrounding genealogy. [Genesis 5:4](https://www.biblegateway.com/passage/?search=Genesis+5%3A4&version=NIV) states that Adam lived for hundreds of years and 'had other sons and daughters.' Cain married one of his sisters or, depending on the timeline, a niece[^48][^49]. The laws prohibiting close-relative marriage were not given until the time of Moses ([Leviticus 18:6-18](https://www.biblegateway.com/passage/?search=Leviticus+18%3A6-18&version=NIV))[^50][^51][^52]. Creationist writers add that the accumulated genetic load which makes such unions dangerous now had not yet built up in the first generations, an argument that follows from a recent common ancestry and is not shared by those who date humanity differently[^53][^54][^55]. The 'city' Cain built was a small, fortified family settlement populated by his growing household over several decades[^56][^57].`,
    },
    {
      id: 'chariots',
      title: '2 Samuel 10:18 vs 1 Chronicles 19:18 - 700 chariots vs 7,000 charioteers',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** 2 Samuel 10:18 records that David killed the men of 700 Syrian chariots, whereas 1 Chronicles 19:18 states that David killed 7,000 men who fought in chariots.

**Clarification:** Two explanations are available, and the second is the stronger[^58]. [2 Samuel 10:18](https://www.biblegateway.com/passage/?search=2+Samuel+10%3A18&version=NIV) may count chariot units while [1 Chronicles 19:18](https://www.biblegateway.com/passage/?search=1+Chronicles+19%3A18&version=NIV) counts the men who crewed and supported them, though the ratio of ten men to a chariot that this reading requires is not attested in Near Eastern sources[^59][^60][^61]. More probably a number was miscopied: Hebrew numerals were written in forms that scribes confused readily, and the Chronicles parallels contain several such divergences[^62][^63][^64]. Neither reading changes the outcome of the battle that both texts report[^65].`,
    },
    {
      id: 'jehoiachin',
      title: '2 Kings 24:8 vs 2 Chronicles 36:9 - Jehoiachin is 18 years old vs 8 years old when king',
      tags: ['old testament', 'history'],
      content: `**Supposed Contradiction:** 2 Kings 24:8 states that Jehoiachin was 18 years old when he became king of Judah, whereas 2 Chronicles 36:9 states he was only 8 years old.

**Clarification:** This is a well-documented scribal transmission error in the Masoretic Hebrew text of 2 Chronicles, where the symbol or word for ten was omitted during copying[^66][^67][^68]. Most ancient manuscripts, including the Septuagint (Greek translation) and the Syriac and Arabic versions, read '18' in both passages, matching [2 Kings](https://www.biblegateway.com/passage/?search=2+Kings&version=NIV)[^69]. The historical context also supports 18, as Jehoiachin had multiple wives ([2 Kings 24:15](https://www.biblegateway.com/passage/?search=2+Kings+24%3A15&version=NIV)) and made independent, responsible decisions that are described as 'evil in the sight of the Lord'[^70][^71].`,
    },
    {
      id: 'genealogies',
      title: 'Matthew 1 vs Luke 3 - two different genealogies of Jesus',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** Matthew 1 and Luke 3 provide two entirely different lists of ancestors for Jesus between King David and Joseph.

**Clarification:** Three explanations are in circulation, and no one of them commands agreement[^72][^73][^74]. The first, popular since Annius of Viterbo in the fifteenth century, is that [Matthew 1](https://www.biblegateway.com/passage/?search=Matthew+1&version=NIV) traces Joseph's legal lineage while [Luke 3](https://www.biblegateway.com/passage/?search=Luke+3&version=NIV) traces Mary's, since 'son of' could cover a son-in-law; its weakness is that Luke never mentions Mary in the list and names Joseph outright[^75][^76]. The second, reported by Julius Africanus in the third century, is levirate marriage: Joseph's legal and biological fathers differed because a childless brother's widow was married by his kinsman[^77][^78][^79]. The third takes both lines through Joseph, one by legal royal succession and one by natural descent[^80][^81]. What the two lists agree on is the point each writer is making: descent from David through the royal line, Matthew arranging his in three sets of fourteen for a Jewish readership and Luke running his back to Adam for a Gentile one[^82].`,
    },
    {
      id: 'DavidSin',
      title: '2 Samuel 24:1 vs 1 Chronicles 21:1 - God incites David to sin vs Satan incites David',
      tags: ['old testament', 'theology'],
      content: `**Supposed Contradiction:** 2 Samuel 24:1 states that the anger of the Lord burned against Israel and He incited David to count the fighting men, whereas 1 Chronicles 21:1 states that Satan rose up against Israel and incited David to take a census.

**Clarification:** This reflects different theological perspectives on divine sovereignty and secondary causes[^83][^84]. Both are true: God ultimately permitted Satan to tempt David (similar to the book of Job)[^85][^86]. 2 Samuel emphasizes God's primary sovereignty (allowing the event to proceed in judgment), whereas 1 Chronicles identifies the immediate spiritual agent (Satan) who tempted David to act out of pride rather than trust in God[^87][^88].`,
    },
    {
      id: 'BlindMen',
      title: 'Matthew 20:29-30 vs Mark 10:46 vs Luke 18:35 - two blind men healed vs one blind man',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** Matthew 20:29-30 states that Jesus healed two blind men as He left Jericho, whereas Mark 10:46 and Luke 18:35 mention only one blind man (named Bartimaeus in Mark).

**Clarification:** This is a case of selective reporting, not a contradiction[^89]. Stating there were two blind men (Matthew) does not contradict stating there was one (Mark/Luke), especially if one of them (Bartimaeus) was far more prominent or later became well-known in the early church[^90][^91]. Additionally, the healings may have occurred at different points of Jesus' journey around Jericho, as the area had multiple city sites (an old ruins site and a newer Herod-built Roman city)[^92][^93][^94].`,
    },
    {
      id: 'JudasDeath',
      title: 'Matthew 27:5 vs Acts 1:18 - Judas hangs himself vs Judas falls and bursts open',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** Matthew 27:5 states that Judas went and hanged himself, whereas Acts 1:18 states that Judas fell headlong, and his body burst open.

**Clarification:** The usual answer is that the accounts describe different stages of the same event: Matthew records the method of death, and Acts the state of the body afterwards, the rope or branch having given way so that the corpse fell and ruptured[^95]. That reconstruction is not stated by either writer and has to be supplied[^96][^97][^98]. A second difference is harder: Matthew has the priests buy the field with the returned money, while Acts says Judas acquired it, which is best read as the priests buying it in his name with what was legally still his[^99][^100]. The two writers are pursuing different ends, Matthew the fulfilment of prophecy and Luke the vacancy among the Twelve, and neither is attempting a full account of the death[^101].`,
    },
    {
      id: 'CrucifixionTiming',
      title: 'Mark 15:25 vs John 19:14-15 - crucifixion at 9 a.m. vs condemnation at noon',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** Mark 15:25 states that Jesus was crucified at the "third hour" (9 a.m.), whereas John 19:14-15 states that Jesus was still standing trial before Pilate at the "sixth hour" (noon).

**Clarification:** Two answers are given, and this remains one of the harder harmonisations[^102]. On the first, Mark uses Jewish reckoning from sunrise, so the "third hour" is 9 a.m., while John uses Roman civil reckoning from midnight, so his "sixth hour" is 6 a.m., leaving time for the sentence to be carried out[^103][^104][^105]. Against it, John elsewhere appears to use the Jewish system, as at [John 4:6](https://www.biblegateway.com/passage/?search=John+4%3A6&version=NIV)[^106]. On the second, both writers use Jewish hours and are dividing the day into rough three-hour blocks rather than clock times, so a death sequence running through the middle of the day could be reported by one as the third hour and by the other as approaching the sixth[^107][^108]. Ancient timekeeping without clocks worked in quarters of the day, and precision of the modern sort is not what either writer is offering[^109][^110].`,
    },
    {
      id: 'CrossCarrying',
      title: 'John 19:17 vs Matthew 27:32 - Jesus carries his cross vs Simon of Cyrene carries it',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** John 19:17 states that Jesus went out bearing His own cross, whereas Matthew 27:32 (and Mark and Luke) state that the Roman soldiers forced Simon of Cyrene to carry it.

**Clarification:** These accounts describe different stages of the journey to Golgotha[^111]. Jesus initially carried the crossbeam (patibulum) Himself as He went out (John)[^112][^113][^114]. However, severely weakened by the preceding Roman scourging, blood loss, and exhaustion, Jesus collapsed along the way, forcing the soldiers to conscript Simon to carry it the rest of the distance (Matthew)[^115].`,
    },
    {
      id: 'FinalCry',
      title: 'Matthew 27:46 vs Luke 23:46 vs John 19:30 - "My God, why have you forsaken me?" vs "Father, into your hands I commit my spirit" vs "It is finished"',
      tags: ['new testament', 'gospels'],
      content: `**Supposed Contradiction:** The Gospels record different final words spoken by Jesus on the cross, with none of them recording all of them.

**Clarification:** Jesus survived for six hours on the cross, giving Him ample time to make several statements[^116][^117]. The chronological sequence is: 1) "My God, why have you forsaken me?" (Matthew/Mark), representing His spiritual suffering; 2) "It is finished" (John), declaring His work complete; and 3) "Father, into your hands I commit my spirit" (Luke), His final act of trust[^118]. Each author selected the statement that aligned best with their theological focus[^119].`,
    },
    {
      id: 'GodSeen',
      title: 'John 1:18 / Exodus 33:20 vs Genesis 32:30 - God invisible vs Jacob sees God face to face',
      tags: ['old testament', 'theology'],
      content: `**Supposed Contradiction:** John 1:18 and Exodus 33:20 state that no one has ever seen God, whereas Genesis 32:30 states that Jacob saw God face to face at Peniel.

**Clarification:** The verses stating God is invisible refer to His full, unshielded essence and glory as the Father ([1 Timothy 6:16](https://www.biblegateway.com/passage/?search=1+Timothy+6%3A16&version=NIV))[^120]. However, God chose to appear in accommodated, localized forms (theophanies or Christophanies) to individuals like Jacob[^121][^122][^123]. The phrase "face to face" is also a Hebrew idiom meaning "directly" or "intimately," rather than literally gazing upon God's full, infinite glory[^124][^125].`,
    },
    {
      id: 'FaithAlone',
      title: 'Ephesians 2:8-9 vs James 2:24 - salvation by faith alone vs salvation by works too',
      tags: ['new testament', 'theology'],
      content: `**Supposed Contradiction:** Paul in Ephesians 2:8-9 states that salvation is by grace through faith, not of works, whereas James 2:24 states that a person is justified by works and not by faith alone.

**Clarification:** These passages address different contexts and use the word "justified" in different ways[^126][^127][^128]. Paul is discussing the *root* of salvation, how a sinner is declared righteous before God solely by faith ([Ephesians 2:8-9](https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV))[^129]. James is discussing the *fruit* of salvation, how a believer's claim of faith is vindicated or demonstrated as genuine before men ([James 2:24](https://www.biblegateway.com/passage/?search=James+2%3A24&version=NIV))[^130]. Both agree that saving faith inevitably produces good works.`,
    },
    {
      id: 'AhaziahsAge',
      title: '2 Kings 8:26 vs 2 Chronicles 22:2 - Ahaziah\'s age: 22 vs 42',
      tags: ['old testament', 'history', 'scribal'],
      content: `**Supposed Contradiction:** 2 Kings 8:26 states that Ahaziah was 22 years old when he became king, whereas 2 Chronicles 22:2 states he was 42 years old.

**Clarification:** This is a clear copyist error in the Masoretic Hebrew text of 2 Chronicles, as Ahaziah's father died at age 40, making a 42-year-old son chronologically impossible[^131][^132]. Older manuscript traditions, including the Septuagint, Syriac, and Arabic versions, correctly read '22' in [2 Chronicles 22:2](https://www.biblegateway.com/passage/?search=2+Chronicles+22%3A2&version=NIV), matching the age in [2 Kings](https://www.biblegateway.com/passage/?search=2+Kings&version=NIV)[^133].`,
    },
    {
      id: 'TempleCleansing',
      title: 'John 2:13-17 vs Matthew 21:12-13 - Temple cleansing at start vs end of ministry',
      tags: ['new testament', 'gospels', 'chronology'],
      content: `**Supposed Contradiction:** John places the cleansing of the Temple at the start of Jesus' ministry, whereas the Synoptic Gospels place it at the very end of His ministry.

**Clarification:** There are two main resolutions. First, Jesus may have cleansed the Temple twice: once at the start of His ministry (John) as a warning, and once at the end (Synoptics) as a final judgment[^134][^135]. Second, John may have arranged the event thematically at the beginning of his Gospel for theological impact rather than strict chronological order[^136][^137].`,
    },
    {
      id: 'HighPriest',
      title: 'Mark 2:26 vs 1 Samuel 21:1 - Abiathar vs Ahimelech the High Priest',
      tags: ['new testament', 'gospels', 'scribal'],
      content: `**Supposed Contradiction:** Mark 2:26 states that David entered the house of God and ate the showbread "in the days of Abiathar the high priest," whereas 1 Samuel 21:1 records that the high priest was actually Ahimelech.

**Clarification:** The Greek phrase *epi Abiathar* in Mark 2:26 means "in the time of Abiathar" or "during the lifetime of Abiathar," rather than "at the exact moment he was high priest."[^138][^139]. Since the event led immediately to the death of Ahimelech and the rise of his son Abiathar, who served as David's primary high priest for decades, it was historically appropriate to reference the entire epoch under Abiathar's name[^140][^141].`,
    },
    {
      id: 'ResurrectionAccounts',
      title: 'Gospel Resurrection Accounts - Multiple discrepancies in timing, women, and angels',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** The four Gospels differ on the details of the resurrection morning, including who visited the tomb, what time they arrived, and how many angels were present.

**Clarification:** These variations represent independent eyewitness accounts rather than collusion[^142][^143][^144]. 1) *Women:* John focuses on Mary Magdalene, while the other Gospels include her companions; focusing on one does not deny the others were present[^145]. 2) *Timing:* The women left "while it was still dark" (John) and arrived at dawn "as the sun was rising" (Mark)[^146]. 3) *Angels:* Stating there was one angel (Matthew/Mark) does not deny the presence of a second angel who remained silent (Luke/John)[^147].`,
    },
    {
      id: 'GodRepents',
      title: 'Numbers 23:19 / 1 Samuel 15:29 vs. Genesis 6:6 - God does not repent vs. God repented',
      tags: ['old testament', 'theology', 'linguistics'],
      content: `**Supposed Contradiction:** Numbers 23:19 states that God is not a man that He should repent, whereas Genesis 6:6 states that God repented that He had made man.

**Clarification:** This resolves by examining the Hebrew word נָחַם (niham - "grief/relenting")[^148][^149]. Numbers 23 refers to God's immutable character; He does not change His mind or break His word[^150]. Genesis 6 uses an anthropomorphism to express God's emotional grief over sin[^151][^152][^153]. It describes a change in God's *dealings* with man (judgment instead of favor) in perfect *consistency* with His unchanging holy character[^154].`,
    },
    {
      id: 'LexTalionis',
      title: "Exodus 21:24 vs Matthew 5:38-39 - 'An eye for an eye' vs 'Turn the other cheek'",
      tags: ['old testament', 'new testament', 'theology', 'ethics'],
      content: `**Supposed Contradiction:** Exodus 21:24 commands retaliation ("an eye for an eye"), whereas Jesus in Matthew 5:38-39 commands non-retaliation ("turn the other cheek").

**Clarification:** These commands address different contexts. The *Lex Talionis* ("eye for an eye") in Exodus was a *civil law* for judges to ensure punishments were proportional, thereby preventing excessive revenge[^155][^156]. Jesus in Matthew 5 was speaking to individuals about *personal relationships*, forbidding personal vengeance and insults ("a slap on the right cheek"), while leaving civil justice to the state ([Romans 13:4](https://www.biblegateway.com/passage/?search=Romans+13%3A4&version=NIV))[^157].`,
    },
    {
      id: 'CrossInscription',
      title: 'Matthew 27:37 vs Mark 15:26 vs Luke 23:38 vs John 19:19 - The inscription on the cross',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** The four Gospels record different wordings for the inscription on the cross.

**Clarification:** All four accounts agree on the core charge: "The King of the Jews"[^158]. None of the authors claim to quote the entire sign verbatim; they summarize or select the part relevant to their focus[^159][^160]. Furthermore, Luke and John note that the sign was written in three languages (Hebrew, Latin, Greek), meaning minor variations reflect translations from different languages on the sign[^161][^162].`,
    },
    {
      id: 'PetersDenial',
      title: 'Mark 14:30 vs Matthew 26:34 - Rooster crows twice vs once',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** Mark records Jesus predicting the rooster will crow twice, whereas Matthew (and Luke and John) records the rooster crowing once.

**Clarification:** This is an example of precision against summary[^163]. Mark, on the early tradition that his Gospel carries Peter's testimony, records two crowings[^164][^165]. The others report the crowing that mattered, the one that broke Peter, and pass over the first; a prediction of a single crowing is not denied by a record of two, since the second crowing is also a crowing[^166].`,
    },
    {
      id: 'PaulsConversion',
      title: 'Acts 9 vs Acts 22 vs Acts 26 - Paul\'s conversion account discrepancies',
      tags: ['new testament', 'acts', 'harmonization'],
      content: `**Supposed Contradiction:** The three conversion accounts of Paul in Acts differ on whether his companions stood or fell, and whether they heard the voice.

**Clarification:** The Greek terms resolve these details[^167][^168]. In Acts 9, the men "heard the sound" (general noise), while Acts 22 notes they did not "understand the voice" (comprehend the words)[^169][^170]. Regarding posture, they all fell initially to the ground (Acts 26) and then stood up or remained frozen in speechless terror (Acts 9)[^171][^172].`,
    },
    {
      id: 'Quirinius',
      title: 'Luke 2:2 vs History - The Census of Quirinius',
      tags: ['new testament', 'history', 'gospels'],
      content: `**Supposed Contradiction:** Luke links Jesus' birth to the reign of Herod (who died in 4 BC) and a census under Quirinius (who became governor of Syria in 6 AD).

**Clarification:** This is the most substantial historical objection in the list, and none of the answers is free of difficulty[^173][^174]. The Greek of Luke 2:2 can be read as "this registration was before Quirinius was governing Syria", which removes the clash, though the construction is unusual and most translators have not taken it that way[^175][^176][^177]. A second answer proposes an earlier commission for Quirinius in the east under Herod, which is possible but not directly attested; the Lapis Tiburtinus inscription naming an unnamed official twice made legate is often cited and does not name him[^178][^179][^180]. Josephus places the census of Quirinius in 6 AD and treats it as a novelty that provoked revolt, which is the weight of evidence on the other side[^181][^182][^183]. What can be said is that Luke knew of that 6 AD census and refers to it in [Acts 5:37](https://www.biblegateway.com/passage/?search=Acts+5%3A37&version=NIV), which tells against the idea that he simply confused its date[^184].`,
    },
    {
      id: 'StaffOrNoStaff',
      title: 'Mark 6:8 vs Matthew 10:9 / Luke 9:3 - Take a staff vs do not take a staff',
      tags: ['new testament', 'gospels', 'linguistics'],
      content: `**Supposed Contradiction:** Mark 6:8 records Jesus telling the disciples to take a staff, whereas Matthew and Luke record Him telling them not to take a staff.

**Clarification:** Matthew uses the Greek verb *ktaomai*, meaning "to acquire" or "to buy extra." Jesus was commanding them not to buy *new* gear for the trip[^185][^186]. Mark uses *airo*, meaning "to take what you have." Jesus wanted them to take their existing staff but avoid procuring extra supplies, emphasizing reliance on God[^187][^188].`,
    },
    {
      id: 'CenturionServant',
      title: 'Matthew 8:5 vs Luke 7:3 - Centurion came personally vs sent elders',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** Matthew records that the centurion came personally to Jesus, whereas Luke records that he sent Jewish elders on his behalf.

**Clarification:** This employs the standard ancient and modern legal principle of agency, that what a person does through their representative is described as being done by themselves[^189][^190]. Matthew highlights the centurion as the source of the request for brevity, while Luke provides the precise historical mechanism of his messengers[^191][^192].`,
    },
    {
      id: 'SaulsDeath',
      title: '1 Samuel 31:4 vs 2 Samuel 1:10 - Saul falls on his sword vs Amalekite kills him',
      tags: ['old testament', 'history', 'narrative'],
      content: `**Supposed Contradiction:** 1 Samuel records Saul committing suicide by falling on his own sword, whereas 2 Samuel records an Amalekite claiming he killed Saul.

**Clarification:** 1 Samuel records the actual historical event[^193]. 2 Samuel records a character telling a lie: the Amalekite found Saul's dead body, stole his crown, and fabricated the story of a mercy-killing to gain a reward from David[^194][^195].`,
    },
    {
      id: 'WhoKilledGoliath',
      title: '1 Samuel 17 vs 2 Samuel 21:19 - David vs Elhanan killed Goliath',
      tags: ['old testament', 'history', 'scribal'],
      content: `**Supposed Contradiction:** 1 Samuel records David killing Goliath, whereas 2 Samuel 21:19 records that Elhanan killed Goliath.

**Clarification:** This is a minor copyist error in 2 Samuel, which is corrected by the parallel passage in 1 Chronicles 20:5[^196]. 1 Chronicles preserves the original reading: Elhanan killed Lahmi, the *brother of* Goliath[^197][^198][^199]. A scribe in 2 Samuel misread the Hebrew letters for "brother of" as "Bethlehemite" and omitted Lahmi's name[^200][^201].`,
    },
    {
      id: 'MichalsChildren',
      title: '2 Samuel 6:23 vs 2 Samuel 21:8 - Michal had no children vs five sons',
      tags: ['old testament', 'history', 'scribal'],
      content: `**Supposed Contradiction:** 2 Samuel 6:23 states Michal had no children, whereas 2 Samuel 21:8 mentions her five sons.

**Clarification:** This is a copyist slip where Michal's name was written instead of her sister Merab[^202]. 1 Samuel 18:19 records that Merab married Adriel, the father of the five sons[^203][^204]. Alternatively, Michal may have adopted and raised her deceased sister Merab's five sons[^205][^206][^207].`,
    },
    {
      id: 'SolomonsStalls',
      title: '1 Kings 4:26 vs 2 Chronicles 9:25 - 40,000 vs 4,000 stalls for horses',
      tags: ['old testament', 'history', 'scribal'],
      content: `**Supposed Contradiction:** 1 Kings records Solomon having 40,000 stalls for horses, whereas 2 Chronicles records 4,000 stalls.

**Clarification:** This is a scribal transcription error where a copyist added a plural ending to the Hebrew word for 'four,' multiplying the original number 4,000 by ten[^208]. The number 4,000 matches the proportional 12,000 horsemen and is logistically realistic[^209][^210].`,
    },
    {
      id: 'PunishingSons',
      title: 'Exodus 20:5 vs Ezekiel 18:20 - Punishing children vs individual responsibility',
      tags: ['old testament', 'theology', 'ethics'],
      content: `**Supposed Contradiction:** Exodus records God visiting the sins of the fathers on their children, whereas Ezekiel records that children will not bear their fathers' iniquity.

**Clarification:** Exodus describes the *earthly, natural consequences* of sin affecting future generations within a family[^211][^212]. Ezekiel describes *eternal, spiritual guilt* before God, where every individual is judged solely for their own choices[^213].`,
    },
    {
      id: 'CaptivityLength',
      title: 'Exodus 12:40 vs Galatians 3:17 - 430 years in Egypt vs 430 from Abraham',
      tags: ['old testament', 'new testament', 'chronology'],
      content: `**Supposed Contradiction:** Exodus states the Israelites lived in Egypt for 430 years, whereas Galatians states the Law came 430 years after Abraham.

**Clarification:** Older manuscripts like the Septuagint and Samaritan Pentateuch read in Exodus 12:40 that they lived in Egypt *and Canaan* for 430 years[^214][^215]. The 430-year period began with the promise to Abraham, spanning 215 years in Canaan and 215 in Egypt[^216][^217].`,
    },
    {
      id: 'JacobsFamily',
      title: 'Genesis 46:27 vs Acts 7:14 - 70 vs 75 people going to Egypt',
      tags: ['old testament', 'new testament', 'chronology'],
      content: `**Supposed Contradiction:** Genesis records 70 people of Jacob's household going to Egypt, whereas Stephen in Acts records 75 people.

**Clarification:** Genesis uses the Hebrew Masoretic count of 70 (direct descendants)[^218]. Stephen quoted the Septuagint Greek translation, which counts 75 by including five additional grandsons of Joseph born in Egypt[^219][^220]. Both are correct under their respective criteria.`,
    },
    {
      id: 'PostResurrection',
      title: 'Matthew 28:16 vs Luke 24:49 - Appearances in Galilee vs Jerusalem',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** Matthew records Jesus commanding the disciples to meet Him in Galilee, whereas Luke records Him telling them to stay in Jerusalem.

**Clarification:** These accounts describe different parts of a 40-day sequence[^221]. The disciples remained in Jerusalem initially, then traveled to Galilee where Jesus appeared to them (Matthew), and finally returned to Jerusalem prior to the Ascension and Pentecost (Luke)[^222].`,
    },
    {
      id: 'PassoverTiming',
      title: 'Synoptics vs John 19:14 - Crucified after Passover meal vs before',
      tags: ['new testament', 'gospels', 'chronology'],
      content: `**Supposed Contradiction:** The Synoptics place the Last Supper as the Passover meal (Thursday), whereas John places the crucifixion on the Preparation of the Passover (Friday).

**Clarification:** Two answers carry weight[^223]. The first appeals to competing calendars, with Galileans and Pharisees keeping the meal on Thursday evening and Judeans and Sadducees on Friday evening, so that both writers describe a real Passover[^224][^225][^226]. The second reads John's "day of Preparation" as Friday of Passover week, the day before the Sabbath, rather than preparation for the Seder itself, which removes the clash without positing two calendars[^227][^228]. A third position holds that John has moved the day deliberately so that Jesus dies as the lambs are killed, a theological arrangement rather than a chronological claim, and this reading is common among critical scholars[^229][^230].`,
    },
    {
      id: 'TemptationOrder',
      title: 'Matthew 4 vs Luke 4 - The order of the three temptations',
      tags: ['new testament', 'gospels', 'harmonization'],
      content: `**Supposed Contradiction:** Matthew and Luke record different orders for the second and third temptations of Jesus.

**Clarification:** Matthew uses chronological conjunctions ("then," "again"), representing the historical order[^231][^232]. Luke uses the simple "and," presenting the temptations in a thematic order ending at the Jerusalem Temple for theological emphasis[^233][^234].`,
    },
    {
      id: 'MosesDeath',
      title: 'Deuteronomy 34 - Did Moses write about his own death?',
      tags: ['old testament', 'authorship', 'history'],
      content: `**Supposed Contradiction:** Deuteronomy 34 records the death and burial of Moses, yet the book is traditionally attributed to him.

**Clarification:** Moses wrote the vast majority of the Pentateuch, and his successor Joshua (or a later inspired scribe) added the final transition chapter as an obituary[^235][^236]. This was standard practice in the ancient Near East and does not negate Mosaic authorship[^237][^238][^239].`,
    },
    {
      id: 'FatherGreater',
      title: 'John 14:28 vs Philippians 2:6 / John 5:18 / John 10:30 - the Father is greater than Jesus vs Jesus is equal with God',
      tags: ['new testament', 'theology', 'christology'],
      content: `**Supposed Contradiction:** In John 14:28 Jesus says \"the Father is greater than I,\" implying He is inferior to God. Yet Philippians 2:6 says He existed \"in the form of God\" and did not regard \"equality with God\" as something to exploit, and in John 5:18 His opponents tried to kill Him because He \"was making himself equal with God.\" John 10:30 has Him declare \"I and the Father are one.\" Is Jesus equal to God or not?

**Clarification:** The resolution lies in the distinction Christian theology draws between **who Jesus is by nature** (ontological equality) and **what role He accepted during the incarnation** (economic or functional subordination)[^240][^241].

**The Greek of Philippians 2:6-8** makes this explicit. Paul says Jesus existed in the *morphē theou* (μορφῇ θεοῦ, \"form of God\"), where the Greek *morphē* (Strong's 3444) does not mean outward shape but the essential, defining characteristics that make something what it is[^242][^243]. Being in the very form of God, He possessed full deity. The word \"equality\" here is the Greek *isos* (ἴσος, Strong's 2470), meaning identical or equivalent in degree[^244]. Paul's point is that Jesus did not cling to the *privileges* of that equality but voluntarily emptied Himself (*kenosis*) by taking the form of a servant and being made in human likeness[^245][^246]. The self-emptying was not a subtraction from His divine nature but an addition of human nature and a voluntary setting aside of the independent exercise of His divine prerogatives[^247].

**John 14:28 in its immediate context** is about Jesus' departure. He tells the disciples: \"You heard me say, 'I am going away and I am coming back to you.' If you loved me, you would be glad that I am going to the Father, for the Father is greater than I\"[^248]. The reason they should be glad is that Jesus is about to leave His present state of humiliation, suffering, and limitation as a man walking toward the cross, and return to the glory He had with the Father before the world began ([John 17:5](https://www.biblegateway.com/passage/?search=John+17%3A5&version=NIV))[^249]. \"Greater\" here (*meizōn*, Strong's 3187) refers to the Father's position, not His nature. A king is \"greater\" than a soldier on the battlefield in rank and station, but they share the same human nature. In the same way, the Father was \"greater\" than the incarnate Son in positional glory and authority, while they remained equal in divine essence[^250][^251].

**Other passages confirm the equality of essence.** In John 5:18, the Jewish leaders understood exactly what Jesus was claiming, that by calling God His own Father He was \"making himself equal with God\", and they sought to kill Him for it[^252]. In John 10:30, \"I and the Father are one\" (Greek *hen*, neuter, meaning one in essence or nature, not one person) prompted the same reaction: the crowd picked up stones for blasphemy ([John 10:33](https://www.biblegateway.com/passage/?search=John+10%3A33&version=NIV))[^253]. Hebrews 1:3 calls the Son \"the exact representation of [God's] being,\" and Colossians 2:9 states that \"in Christ all the fullness of the Deity lives in bodily form\"[^254].

**In summary:** \"Equal\" describes Jesus' divine nature, *what* He is. \"Greater\" describes the Father's position relative to the incarnate Son, a difference in *role*, not in *being*. There is no contradiction because the two statements are not made in the same sense. One speaks of eternal essence, the other of the voluntary, temporary arrangement of the incarnation[^255].`,
    },
  ],

            sources: [
    "1. 'How to Handle Bible Contradictions,' The Domain for Truth (2016). https://veritasdomain.wordpress.com/2016/11/16/how-to-handle-bible-contradictions/",
    "2. [Evangelical] The Gospel Coalition. 'Does the Census Account in Luke 2 Contain Errors?.' https://www.thegospelcoalition.org/article/apparent-contradictions-gospels/",
    "3. [Encyclopedia] Wikipedia. 'Internal Consistency of the Bible.' https://en.wikipedia.org/wiki/Internal_consistency_of_the_Bible",
    "4. 'The Literary Worlds of Genesis,' The Cambridge Companion to Biblical Narrative (Cambridge University Press, 2012). https://www.cambridge.org/core/books/cambridge-companion-to-biblical-narrative/literary-worlds-of-genesis/77834B88F89710F239C549025F9E028A",
    "5. [Scholarly Blog] Psephizo, Ian Paul. 'Do the Gospels Contradict Each Other on Holy Week?.' https://www.psephizo.com/biblical-studies/do-the-gospels-contradict-each-other-on-holy-week/",
    "6. [Bible Study Resource] JesusWalk. 'Parallel Accounts of the Resurrection.' https://www.jesuswalk.com/resurrection/resurrection-parallels.htm",
    "7. 'Weights and Measures in Ancient Israel,' American Bible Society (2010). https://www.americanbible.org/engage/bible-resources/articles/weights-and-measures-in-ancient-israel/",
    "8. [Apologetics] Tekton Apologetics. 'Copyist Errors and Estimations in the Bible.' https://www.tektonics.org/af/copyisterrors.php",
    "9. [Encyclopedia] Wikipedia. 'Biblical and Talmudic Units of Measurement.' https://en.wikipedia.org/wiki/Biblical_and_Talmudic_units_of_measurement",
    "10. 'Problems of Bible Translation,' Translation Journal (2018). https://translationjournal.net/journal/18bible.htm",
    "11. [Encyclopedia] Wikipedia. 'Bible Translations.' https://en.wikipedia.org/wiki/Bible_translations",
    "12. [Lexical Resource] Bible Hub. 'Interlinear Bible: Greek, Hebrew, Transliterated, English.' https://biblehub.com/interlinear/",
    "13. Diana Gruver, 'Literary Genres in the Bible and Why They Matter for Bible Study' (2017). https://www.dianagruver.com/blog/biblical-genres-bible-study",
    "14. [Encyclopedia] Encyclopaedia Britannica. 'Biblical Literature.' https://www.britannica.com/topic/biblical-literature",
    "15. [Encyclopedia] Wikipedia. 'Biblical Hermeneutics.' https://en.wikipedia.org/wiki/Biblical_hermeneutics",
    "16. 'Gospel harmony - Principles of Harmonization,' Wikipedia. https://en.wikipedia.org/wiki/Gospel_harmony",
    "17. [Apologetics] Compelling Truth. 'Do the Gospel Resurrection Accounts Contradict Each Other?.' https://www.compellingtruth.org/resurrection-accounts.html",
    "18. [Bible Study Resource] Equipped Servant. 'Studying the Resurrection Accounts.' https://www.equippedservant.com/blog/studying-resurrection-accounts-harmonizing-gospels",
    "19. David C. Parker, 'Textual Criticism: What It Is And Why You Need It,' Modern Reformation (2019). https://www.modernreformation.org/resources/articles/the-mod-textual-criticism-what-it-is-and-why-you-need-it",
    "20. [Encyclopedia] Wikipedia. 'Textual Criticism.' https://en.wikipedia.org/wiki/Textual_criticism",
    "21. [Academic Resource] Text and Canon Institute. 'Who Really Killed Goliath?.' https://textandcanon.org/who-really-killed-goliath/",
    "22. [Theological Resource] Ligonier Ministries. 'Scripture Alone – Interpreting the Bible (Video).' https://www.youtube.com/watch?v=c-iVqkkndFc",
    "23. [Scholarly Blog] Psephizo, Ian Paul. 'Are the Gospel Accounts of Holy Week Contradictory?.' https://www.psephizo.com/biblical-studies/are-the-gospel-accounts-of-holy-week-contradictory/",
    "24. [Encyclopedia] Wikipedia. 'Biblical Inerrancy.' https://en.wikipedia.org/wiki/Biblical_inerrancy",
    "25. [Creation Ministry] Creation Theology Fellowship. 'Does Genesis 2:19 Contradict Genesis 1?.' https://creationtheologyfellowship.org/2022/06/17/does-genesis-219-contradict-genesis-1/",
    "26. Henry M. Morris, 'Adam and the Animals,' Institute for Creation Research (1974). https://www.icr.org/article/339/",
    "27. [Bible Study Resource] NET Bible. 'Translators' Notes on Genesis 2:19-20.' https://classic.net.bible.org/passage.php?passage=Gen+2:19-20",
    "28. [Creation Ministry] Creation Science Association of BC. 'Pluperfect, the Right Solution for the Genesis 2:19 Problem.' https://creationbc.org/index.php/pluperfect-the-right-solution-for-the-genesis-219-problem/",
    "29. [Scholarly Blog] Claude Mariottini, Professor of Old Testament. 'Translating Genesis 2:19.' https://claudemariottini.com/2011/07/05/translating-genesis-219/",
    "30. [Scholarly Blog] Theological Sushi. 'Why Genesis 2:19 Should Not Be Translated as a Pluperfect.' https://theologicalsushi.blogspot.com/2024/08/why-genesis-219-should-not-be.html",
    "31. [Reference] Answersingenesis. 'Genesis 2 Defending Supernatural Creation Adam.' https://answersingenesis.org/adam-and-eve/genesis-2-defending-supernatural-creation-adam/",
    "32. [Bible Study Resource] Bible Hub. 'How Many Animals Were on Noah's Ark?.' https://biblehub.com/q/animals_on_noah's_ark.htm",
    "33. 'Ask a Priest: Why 7 Pairs of Clean Animals on Noah's Ark?,' Regnum Christi (2024). https://regnumchristi.com/ask-a-priest-why-7-pairs-of-clean-animals-on-noahs-ark/",
    "34. [Apologetics] Apologetics Press. 'How Many Animals of Each Kind Did Noah Take into the Ark?.' https://apologeticspress.org/how-many-animals-of-each-kind-did-noah-take-into-the-ark-656/",
    "35. [Bible Study Resource] BibleRef. 'What Does Genesis 7:2 Mean?.' https://www.bibleref.com/Genesis/7/Genesis-7-2.html",
    "36. [Ministry Blog] Bible2Blog. 'Why did Noah take unclean animals on the Ark?' https://bible2blog.wordpress.com/2019/02/23/why-did-noah-take-unclean-animals-on-the-ark/",
    "37. [Reference] Answersingenesis. 'Did Noah Bring Fourteen or Seven Animals.' https://answersingenesis.org/noahs-ark/did-noah-bring-fourteen-or-seven-animals/",
    "38. [Bible Study Resource] Got Questions. 'Animals Clean Unclean.' https://www.gotquestions.org/animals-clean-unclean.html",
    "39. [Academic Resource] Intertextual Bible. 'Genesis 6:19 Compared with Genesis 7:2.' https://intertextual.bible/text/genesis-6.19-genesis-7.2",
    "40. [Bible Study Resource] Unchanging Word. 'Two Pairs or Seven Pairs?.' https://unchangingword.com/en/references/two-or-seven-pairs",
    "41. [Commentary] Bible Hub. 'Commentaries on Genesis 7:17.' https://biblehub.com/commentaries/genesis/7-17.htm",
    "42. [Creation Ministry] Creation Research Society. 'Exegetical and Geological Notes on Genesis Chapter 7.' https://www.creationresearch.org/god-floods-earth-yet-preserves-ark-borne-humans-and-animals-exegetical-and-geological-notes-on-genesis-chapter-7-featured-article",
    "43. [Academic Conference] Cedarville Digital Commons. 'Hebrew and Geologic Analysis of the Flood Chronology.' https://digitalcommons.cedarville.edu/icc_proceedings/vol5/iss1/29/",
    "44. [Bible Study Resource] BibleRef. 'What Does Genesis 7:24 Mean?.' https://www.bibleref.com/Genesis/7/Genesis-7-24.html",
    "45. [Lexical Resource] Bible Hub. 'Strong's Hebrew 1396, gabar, to prevail or be strong.' https://biblehub.com/hebrew/1396.htm",
    "46. [Creation Ministry] Creation Ministries International. 'Scriptural Constraints on the Variation of Water Level During the Flood.' https://creation.com/en/articles/scriptural-constraints-on-the-variation-of-water-level-during-the-genesis-flood",
    "47. [Bible Study Resource] Updated American Standard Version. 'How Long Did the Flood Last According to Genesis 7:11-8:5?.' https://uasvbible.org/2025/01/25/how-long-did-the-flood-last-according-to-genesis-711-85-and-how-was-time-measured/",
    "48. 'Who Was Cain's Wife?,' Answers in Genesis (2007). https://answersingenesis.org/bible-characters/cain/who-was-cains-wife/",
    "49. [Bible Study Resource] Got Questions. 'Cains Wife.' https://www.gotquestions.org/Cains-wife.html",
    "50. [Apologetics] Christian Research Institute. 'Who Was Cain's Wife?.' https://www.equip.org/bible_answers/who-was-cains-wife/",
    "51. [Bible Study Resource] Blue Letter Bible. 'Don Stewart, Where Did Cain Get His Wife?.' https://www.blueletterbible.org/faq/don_stewart/don_stewart_717.cfm",
    "52. [Catholic Apologetics] Catholic Answers. 'Why Marriage Between Close Relatives in Genesis Was Permitted.' https://www.catholic.com/qa/why-incest-in-genesis-was-ok",
    "53. [Bible Study Resource] Christianity.com. 'Did Cain Marry His Sister?.' https://www.christianity.com/wiki/bible/did-cain-marry-his-sister-what-are-the-consequences-of-incest.html",
    "54. [Encyclopedia] Wikipedia. 'Inbreeding Depression.' https://en.wikipedia.org/wiki/Inbreeding_depression",
    "55. [Encyclopedia] Wikipedia. 'Cain and Abel.' https://en.wikipedia.org/wiki/Cain_and_Abel",
    "56. [Bible Study Resource] Bible Study Tools. 'Genesis 4:17 with Commentary.' https://www.biblestudytools.com/genesis/4-17.html",
    "57. [Encyclopedia] Wikipedia. 'Cain.' https://en.wikipedia.org/wiki/Cain",
    "58. [Apologetics] Defending Inerrancy. 'Is There a Bible Contradiction in 1 Kings 4:26?.' https://defendinginerrancy.com/bible-solutions/1_Kings_4.26.php",
    "59. [Encyclopedia] Wikipedia. 'Chariot.' https://en.wikipedia.org/wiki/Chariot",
    "60. [Apologetics] Evidence Unseen. '1 Kings 4:26, How Many Stalls Did Solomon Have?.' https://www.evidenceunseen.com/bible-difficulties-2/ot-difficulties/1-samuel-2-chronicles/1-kings-426-how-many-stalls-did-solomon-have/",
    "61. [Encyclopedia] Wikipedia. 'Books of Chronicles.' https://en.wikipedia.org/wiki/Books_of_Chronicles",
    "62. [Bible Study Resource] Bible Hub. 'Reconciling 2 Samuel 10:18 and 1 Chronicles 19:18.' https://biblehub.com/q/how_to_reconcile_2_sam_10_18_and_1_chr_19_18.htm",
    "63. [Encyclopedia] Wikipedia. 'Hebrew Numerals.' https://en.wikipedia.org/wiki/Hebrew_numerals",
    "64. [Encyclopedia] Wikipedia. 'Masoretic Text.' https://en.wikipedia.org/wiki/Masoretic_Text",
    "65. [Commentary] Bible Hub. 'Commentaries on 2 Samuel 10:18.' https://biblehub.com/commentaries/2_samuel/10-18.htm",
    "66. [Bible Study Resource] Got Questions. 'Jehoiachin Age.' https://www.gotquestions.org/Jehoiachin-age.html",
    "67. [Apologetics] The Domain for Truth. 'How Old Was Jehoiachin When He Began to Reign?.' https://veritasdomain.wordpress.com/2021/04/16/bible-contradiction-how-old-was-jehoiachin-when-he-began-to-reign/",
    "68. [Encyclopedia] Wikipedia. 'Jeconiah.' https://en.wikipedia.org/wiki/Jeconiah",
    "69. [Bible Study Resource] Christian Publishing House. 'How Old Was Jehoiachin When He Became King?.' https://christianpublishinghouse.co/2020/11/30/2-kings-248-2-chronicles-369-otbdc-how-old-was-jehoiachin-when-he-became-king/",
    "70. [Encyclopedia] Wikipedia. 'Chronicles 36.' https://en.wikipedia.org/wiki/2_Chronicles_36",
    "71. [Bible Society] Bible League Trust. 'A Discrepancy? Jehoiachin's Age.' https://www.bibleleaguetrust.org/a-discrepancy/",
    "72. 'Why are Jesus' genealogies in Matthew and Luke so different?,' Got Questions (2025). https://gotquestions.org/Jesus-genealogy.html",
    "73. [Encyclopedia] Wikipedia. 'Genealogy of Jesus.' https://en.wikipedia.org/wiki/Genealogy_of_Jesus",
    "74. [Evangelical] The Gospel Coalition Canada. 'Why Do Matthew and Luke's Genealogies of Jesus Differ?.' https://ca.thegospelcoalition.org/columns/detrinitate/why-do-matthew-and-lukes-genealogies-of-jesus-differ/",
    "75. [Catholic Resource] The Scott Smith Blog. 'Why Are Jesus' Genealogies in Matthew and Luke Different?' https://www.thescottsmithblog.com/2021/06/why-are-jesus-genealogies-in-matthew.html",
    "76. [Bible Study Resource] Bible.org. 'The Genealogy of Jesus, Luke 3:23-38.' https://bible.org/seriespage/lesson-14-genealogy-jesus-luke-323-38",
    "77. [Primary Source] New Advent, Church Fathers. 'Eusebius, Church History Book I, quoting Julius Africanus on the genealogies.' https://www.newadvent.org/fathers/250101.htm",
    "78. [Creation Ministry] Creation Ministries International. 'Tracing the Sceptre, Reconciling Views on the Genealogies of Jesus.' https://creation.com/en/articles/jesus-genealogies-royal-vs-biological-lines",
    "79. [Encyclopedia] Wikipedia. 'Levirate Marriage.' https://en.wikipedia.org/wiki/Levirate_marriage",
    "80. [Reformed Resource] The Reformed Classicalist. 'Why Are There Two Different Genealogies of Jesus?.' https://www.reformedclassicalist.com/home/why-are-there-two-different-genealogies-of-jesus",
    "81. [Bible Study Resource] Logos Bible Study. 'The Genealogy of Jesus, Part 2.' https://www.logosbiblestudy.com/blog/2021/5/27/the-genealogy-of-jesus-part-2",
    "82. [Theology Blog] Staseos. 'On Matthew and Luke's Genealogies.' https://www.staseos.net/post/on-matthew-and-luke-s-contradictory-genealogies",
    "83. [Apologetics Resource] Got Questions. 'Why was God so angry at David for taking the census?' https://www.gotquestions.org/David-census.html",
    "84. [Evangelical] Ligonier Ministries. 'Who Called David's Census, God or Satan?.' https://learn.ligonier.org/articles/davids-census",
    "85. [Bible Study Resource] Bible Hub. 'Why Do 1 Chronicles 21:1 and 2 Samuel 24:1 Differ?.' https://biblehub.com/q/why_do_1_chr_21_1_and_2_sam_24_1_differ.htm",
    "86. [Reference] Answersingenesis. 'Contradiction Who Incited David to Count the Fighting Men of Israel.' https://answersingenesis.org/contradictions-in-the-bible/contradiction-who-incited-david-to-count-the-fighting-men-of-israel/",
    "87. [Commentary] Enduring Word, David Guzik. '2 Samuel 24, David and the Census.' https://enduringword.com/bible-commentary/2-samuel-24/",
    "88. [Theology Blog] Why Theology. 'Difficult Passages, 2 Samuel 24 and 1 Chronicles 21.' https://whytheology.wordpress.com/2012/10/15/difficult-passages-2-samuel-24-vs-1-chronicles-21/",
    "89. [Bible Study Resource] Got Questions. 'One Two Blind Men.' https://www.gotquestions.org/one-two-blind-men.html",
    "90. [Scholarly Blog] Peter Goeman. 'Does Blind Bartimaeus Expose a Contradiction in the Gospels?.' https://petergoeman.com/does-blind-bartimaeus-expose-a-contradiction-in-the-gospels/",
    "91. [Scholarly Blog] Psephizo, Ian Paul. 'Blind Bartimaeus Is Healed in Mark 10.' https://www.psephizo.com/biblical-studies/blind-bartimaeus-is-healed-in-mark-10/",
    "92. [Encyclopedia] Wikipedia. 'Jericho.' https://en.wikipedia.org/wiki/Jericho",
    "93. [Archaeology Resource] BiblePlaces. 'Jericho.' https://www.bibleplaces.com/jericho/",
    "94. [Commentary] Werner Bible Commentary. 'Blind Bartimaeus and His Companion.' https://wernerbiblecommentary.org/?q=book%2Fprint%2F426",
    "95. [Evangelical] The Gospel Coalition. 'Judas's Demise in Matthew 27 and Acts 1.' https://www.thegospelcoalition.org/article/judas-demise-matthew-1-acts-1/",
    "96. [Reference] Answersingenesis. 'How Did Judas Die.' https://answersingenesis.org/contradictions-in-the-bible/how-did-judas-die/",
    "97. [Bible Study Resource] Bible Hub. 'How Do Matthew 27:5 and Acts 1:18 Align?.' https://biblehub.com/q/how_do_matthew_27_5_and_acts_1_18_align.htm",
    "98. [Scholarly Blog] James Bishop. 'Against Inerrancy: The Death of Judas Iscariot.' https://jamesbishopblog.com/2024/09/15/against-inerrancy-the-death-of-judas-iscariot-matthew-275-v-acts-118/",
    "99. [Encyclopedia] Wikipedia. 'Akeldama.' https://en.wikipedia.org/wiki/Akeldama",
    "100. [Encyclopedia] Wikipedia. 'Matthew 27:8.' https://en.wikipedia.org/wiki/Matthew_27:8",
    "101. [Encyclopedia] Wikipedia. 'Judas Iscariot.' https://en.wikipedia.org/wiki/Judas_Iscariot",
    "102. [Bible Study Resource] Got Questions. 'What Time was Jesus Crucified.' https://www.gotquestions.org/what-time-was-Jesus-crucified.html",
    "103. [Apologetics] Evidence Unseen. 'Was Jesus Crucified at the Third Hour or the Sixth Hour?.' https://evidenceunseen.com/new-testament/john/difficulties/was-jesus-crucified-on-the-third-hour-or-the-sixth-hour",
    "104. [Catholic Apologetics] Catholic Fidelity, Steve Ray. 'What Time of Day Was Christ Crucified?.' https://www.catholicfidelity.com/apologetics-topics/misc/what-time-of-the-day-was-chrsit-crucified-by-steve-ray/",
    "105. [Apologetics] Truth in My Days. 'Sixth Hour or Third Hour? A Discrepancy Examined.' https://www.truthinmydays.com/post/sixth-hour-john-19-14-or-third-hour-mark-15-25-an-intractable-discrepancy-solved",
    "106. [Reference] Thebiblemadeplain. 'What is the Sixth Hour in John 1914.' https://thebiblemadeplain.com/what-is-the-sixth-hour-in-john-1914/",
    "107. [Reference] Ebcelkhorn. 'About the Sixth Hour.' https://ebcelkhorn.com/about-the-sixth-hour/",
    "108. [Encyclopedia] Wikipedia. 'Roman Timekeeping.' https://en.wikipedia.org/wiki/Roman_timekeeping",
    "109. [Encyclopedia] Wikipedia. 'Sundial.' https://en.wikipedia.org/wiki/Sundial",
    "110. [Encyclopedia] Wikipedia. 'Hour.' https://en.wikipedia.org/wiki/Hour",
    "111. 'Who Helped Jesus Carry the Cross?,' Bart Ehrman (2024). https://www.bartehrman.com/who-helped-jesus-carry-the-cross/",
    "112. [Encyclopedia] Wikipedia. 'Simon of Cyrene.' https://en.wikipedia.org/wiki/Simon_of_Cyrene",
    "113. [Academic Review] Bryn Mawr Classical Review. 'Cook, Crucifixion in the Mediterranean World.' https://bmcr.brynmawr.edu/2017/2017.01.19/",
    "114. [Seminary Publication] BJU Seminary. 'The Man from Cyrene.' https://seminary.bju.edu/theology-in-3d/the-man-from-cyrene/",
    "115. [Reference] Answersingenesis. 'Who Really Carried the Cross of Jesus.' https://answersingenesis.org/contradictions-in-the-bible/who-really-carried-the-cross-of-jesus/",
    "116. [Encyclopedia] Wikipedia. 'Sayings of Jesus on the Cross.' https://en.wikipedia.org/wiki/Sayings_of_Jesus_on_the_cross",
    "117. [Encyclopedia] Encyclopedia.com. 'Seven Last Words.' https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/seven-last-words",
    "118. [Bible Study Resource] JesusWalk. 'The Seven Last Words of Christ from the Cross.' https://www.jesuswalk.com/7-last-words/",
    "119. [Scholarly Blog] Eric Redmond. 'Seven Last Words of Christ: Order, Placement, Significance.' https://ericredmond.wordpress.com/2011/04/21/seven-last-words-of-christ-order-placement-significance/",
    "120. [Commentary] Bible Hub. 'Commentaries on 1 Timothy 6:16.' https://biblehub.com/commentaries/1_timothy/6-16.htm",
    "121. [Encyclopedia] Wikipedia. 'Theophany.' https://en.wikipedia.org/wiki/Theophany",
    "122. [Reference] Answersingenesis. 'Has Anyone Seen God.' https://answersingenesis.org/contradictions-in-the-bible/has-anyone-seen-god/",
    "123. [Evangelical] Ligonier Ministries. 'Seeing God Face to Face.' https://learn.ligonier.org/devotionals/seeing-god-face-face",
    "124. [Bible Study Resource] Bible Hub. 'Is It a Contradiction That Jacob Saw God?.' https://biblehub.com/q/is_it_a_contradiction_that_jacob_saw_god.htm",
    "125. [Lexical Resource] Bible Hub. 'Strong's Hebrew 6440, panim, face or presence.' https://biblehub.com/hebrew/6440.htm",
    "126. [Evangelical] The Gospel Coalition. 'Do Paul and James Disagree on Justification by Faith Alone?.' https://www.thegospelcoalition.org/article/do-paul-james-disagree-on-justification-by-faith-alone/",
    "127. [Encyclopedia] Wikipedia. 'Justification (theology).' https://en.wikipedia.org/wiki/Justification_(theology)",
    "128. [Lexical Resource] Bible Hub. 'Strong's Greek 1344, dikaioo, to justify.' https://biblehub.com/greek/1344.htm",
    "129. [Bible Study Resource] Got Questions. 'Faith Alone.' https://www.gotquestions.org/faith-alone.html",
    "130. [Bible Study Resource] Bible Hub. 'Reconciling James 2:24 with Ephesians 2:8-9.' https://biblehub.com/q/Reconciling_James_2_24_Eph_2_8-9.htm",
    "131. [Bible Study Resource] Got Questions. 'Ahaziah 22 42.' https://www.gotquestions.org/Ahaziah-22-42.html",
    "132. [Apologetics] Christian Courier. 'Is There a Bible Contradiction Regarding Ahaziah's Age?.' https://christiancourier.com/articles/is-there-a-bible-contradiction-regarding-ahaziahs-age",
    "133. [Bible Study Resource] Updated American Standard Version. 'Textual Commentary on 2 Chronicles 22:2.' https://uasvbible.org/2025/08/15/textual-commentary-on-2-chronicles-222/",
    "134. [Apologetics] Apologetics Press. 'Chronology and the Cleansing of the Temple.' https://apologeticspress.org/chronology-and-the-cleansing-of-the-temple-660/",
    "135. [Bible Study Resource] Reasonable Theology. 'Did Jesus Cleanse the Temple Once or Twice?.' https://reasonabletheology.org/did-jesus-cleanse-the-temple-once-or-twice-evidence-for-twice/",
    "136. [Encyclopedia] Wikipedia. 'Cleansing of the Temple.' https://en.wikipedia.org/wiki/Cleansing_of_the_Temple",
    "137. [Bible Study Resource] Bible Hub. 'Did the Temple Cleansing Occur Twice?.' https://biblehub.com/q/did_the_temple_cleansing_occur_twice.htm",
    "138. [Peer-Reviewed Journal] Themelios. 'Revisiting the Time of Abiathar the High Priest.' https://www.thegospelcoalition.org/themelios/article/revisiting-the-time-of-abiathar-the-high-priest/",
    "139. [Bible Study Resource] Bible.org. 'Mark 2:26 and the Problem of Abiathar.' https://bible.org/article/mark-226-and-problem-abiathar",
    "140. [Bible Study Resource] Got Questions. 'Abiathar Ahimelech.' https://www.gotquestions.org/Abiathar-Ahimelech.html",
    "141. [Apologetics] CARM. 'Was Abiathar or Ahimelech the High Priest?.' https://carm.org/bible-difficulties/was-abiathar-or-ahimelech-the-high-priest-mark-226-and-1-samuel-211/",
    "142. [Bible Study Resource] Got Questions. 'Resurrection Accounts.' https://www.gotquestions.org/resurrection-accounts.html",
    "143. [Bible Study Resource] Kathy Howard. 'How to Harmonize the Gospel Resurrection Accounts.' https://www.kathyhoward.org/how-to-harmonize-the-gospel-resurrection-accounts/",
    "144. [Scholarly Blog] Bart Ehrman. 'A Fuller Account of the Resurrection Discrepancies.' https://ehrmanblog.org/fuller-account-of-resurrection-discrepancies/",
    "145. [Bible Study Resource] JesusWalk. 'A Possible Harmonization of the Resurrection Accounts.' https://www.jesuswalk.com/john/appendix_11.htm",
    "146. [Bible Study Resource] Christian Publishing House. 'Harmonizing the Post-Resurrection Appearances.' https://christianpublishinghouse.co/2025/01/06/how-can-we-harmonize-the-post-resurrection-appearances-and-confirm-the-integrity-of-the-gospel-accounts/",
    "147. [Commentary] Bible Hub. 'Commentaries on Luke 24:4.' https://biblehub.com/commentaries/luke/24-4.htm",
    "148. [Lexical Resource] Bible Hub. 'Strong's Hebrew 5162, nacham, to be sorry or relent.' https://biblehub.com/hebrew/5162.htm",
    "149. [Bible Study Resource] Sola. 'What Does Nacham Mean in Genesis 6:6?.' https://www.solabibleapp.com/blog/2026-02-24-what-does-nacham-mean",
    "150. [Commentary] Bible Hub. 'Commentaries on Numbers 23:19.' https://biblehub.com/commentaries/numbers/23-19.htm",
    "151. [Encyclopedia] Wikipedia. 'Anthropomorphism.' https://en.wikipedia.org/wiki/Anthropomorphism",
    "152. [Bible Study Resource] Reasons for Hope. 'What About the Verses That Say God Repented?.' https://reasonsforhopejesus.com/verses-god-repented/",
    "153. [Catholic Resource] Catholic Productions, Brant Pitre. 'Does God Change His Mind?.' https://catholicproductions.com/blogs/blog/god-repents-in-the-bible",
    "154. [Encyclopedia] Wikipedia. 'Immutability (theology).' https://en.wikipedia.org/wiki/Immutability_(theology)",
    "155. [Encyclopedia] Wikipedia. 'Eye for an Eye.' https://en.wikipedia.org/wiki/Eye_for_an_eye",
    "156. [Academic Reference] EBSCO Research Starters. 'Eye for an Eye, Talion.' https://www.ebsco.com/research-starters/history/eye-eye-talion",
    "157. [Encyclopedia] Wikipedia. 'Matthew 5:38.' https://en.wikipedia.org/wiki/Matthew_5:38",
    "158. [Apologetics] Apologetics Press. 'What Was the Inscription on the Cross?.' https://apologeticspress.org/what-was-the-inscription-on-the-cross-1424/",
    "159. [Apologetics] ChristianAnswers.Net. 'Why Do the Four Gospels Give Different Versions of the Inscription?.' https://christiananswers.net/q-aig/aig-t001.html",
    "160. [Reference] Answersingenesis. 'Crossed Messages.' https://answersingenesis.org/jesus/crucifixion/crossed-messages/",
    "161. [Scholarly Blog] Bart Ehrman. 'INRI: The Hebrew, Greek and Latin Writing on the Cross.' https://www.bartehrman.com/inri-meaning/",
    "162. [Creation Ministry] Creation Ministries International. 'Inscriptions on the Cross.' https://creation.com/en/articles/inscriptions-on-the-cross",
    "163. [Encyclopedia] Wikipedia. 'Denial of Peter.' https://en.wikipedia.org/wiki/Denial_of_Peter",
    "164. [Primary Source] New Advent, Church Fathers. 'Eusebius, Church History Book III, on Mark as Peter's interpreter.' https://www.newadvent.org/fathers/250103.htm",
    "165. [Encyclopedia] Wikipedia. 'Gospel of Mark.' https://en.wikipedia.org/wiki/Gospel_of_Mark",
    "166. [Encyclopedia] Wikipedia. 'Gospel of Luke.' https://en.wikipedia.org/wiki/Gospel_of_Luke",
    "167. [Bible Study Resource] Got Questions. 'Acts 9 7 22 9.' https://www.gotquestions.org/Acts-9-7-22-9.html",
    "168. [Lexical Resource] Bible Hub. 'Strong's Greek 191, akouo, to hear or understand.' https://biblehub.com/greek/191.htm",
    "169. [Bible Study Resource] Bible.org. 'On the Apparent Contradiction Between Acts 9:7 and Acts 22:9.' https://bible.org/question/i%E2%80%99m-troubled-contradiction-between-acts-97-and-229-where-it-unclear-whether-men-paul-his-co",
    "170. [Catholic Apologetics] Catholic Answers. 'What Happened at Paul's Conversion?.' https://www.catholic.com/magazine/online-edition/resolving-a-bible-difficulty-what-happened-at-pauls-conversion",
    "171. [Apologetics] Is Jesus Alive. 'Do the Three Accounts of Paul's Conversion Contradict?.' https://isjesusalive.com/three-stories-of-pauls-conversion-in-acts/",
    "172. [Apologetics] M. D. Harris Institute. 'Paul's Conversion, Why Three Accounts?.' https://mdharrismd.com/2011/12/19/pauls-conversion-why-three-accounts-and-how-do-they-differ/",
    "173. [Encyclopedia] Wikipedia. 'Census of Quirinius.' https://en.wikipedia.org/wiki/Census_of_Quirinius",
    "174. [Scholarly Blog] Psephizo, Ian Paul. 'Was Luke Mistaken About the Date of Jesus' Birth?.' https://www.psephizo.com/biblical-studies/was-luke-mistaken-about-the-date-of-jesus-birth-2/",
    "175. [Research Institute] Interdisciplinary Biblical Research Institute. 'The Census of Quirinius: The Historicity of Luke 2:1-5.' https://ibri.org/RRs/RR004/04census.htm",
    "176. [Lexical Resource] Bible Hub. 'Strong's Greek 4413, protos, first or before.' https://biblehub.com/greek/4413.htm",
    "177. [Apologetics] Tough Questions Answered. 'Did the Census Reported in Luke 2 Actually Occur?.' https://www.toughquestionsanswered.org/2016/09/01/did-the-census-reported-in-luke-2-actually-occur/",
    "178. [Archaeology Organisation] Associates for Biblical Research. 'Once More: Quirinius's Census.' https://biblearchaeology.org/research/new-testament-era/2839-once-more-quiriniuss-census",
    "179. [Archaeology Resource] Bible Archaeology Report. 'Quirinius: An Archaeological Biography.' https://biblearchaeologyreport.com/2019/12/19/quirinius-an-archaeological-biography/",
    "180. [Encyclopedia] Wikipedia. 'Publius Sulpicius Quirinius.' https://en.wikipedia.org/wiki/Publius_Sulpicius_Quirinius",
    "181. [Primary Source] LacusCurtius, University of Chicago. 'Josephus, Antiquities of the Jews Book 18.' https://penelope.uchicago.edu/josephus/ant-18.html",
    "182. [Scholarly Blog] Psephizo, Ian Paul. 'Did Luke Get His Nativity History Wrong?.' https://www.psephizo.com/biblical-studies/did-luke-get-his-nativity-history-wrong/",
    "183. [Encyclopedia] Wikipedia. 'Judas of Galilee.' https://en.wikipedia.org/wiki/Judas_of_Galilee",
    "184. [Bible Study Resource] Life, Hope and Truth. 'Was Luke Wrong About the Census of Quirinius?.' https://lifehopeandtruth.com/bible/is-the-bible-true/how-do-we-know-the-bible-is-true/contradictions-in-the-bible/census-of-quirinius/",
    "185. [Apologetics] Apologetics Press. 'Take It or Leave It, the Staff of Mark 6 and Matthew 10.' https://apologeticspress.org/take-it-or-leave-it-295/",
    "186. [Lexical Resource] Bible Hub. 'Strong's Greek 2932, ktaomai, to acquire or procure.' https://biblehub.com/greek/2932.htm",
    "187. [Lexical Resource] Bible Hub. 'Strong's Greek 142, airo, to take up or carry.' https://biblehub.com/greek/142.htm",
    "188. [Apologetics] Christian Think Tank. 'Did Jesus Tell Them to Take a Staff or Not?.' https://www.christian-thinktank.com/nostaff.html",
    "189. [Reference] Answersingenesis. 'Centurion Contradiction.' https://answersingenesis.org/contradictions-in-the-bible/centurion-contradiction/",
    "190. [Encyclopedia] Wikipedia. 'Shaliah.' https://en.wikipedia.org/wiki/Shaliah",
    "191. [Bible Study Resource] Updated American Standard Version. 'Who Actually Came to Jesus, the Centurion or the Jewish Elders?.' https://uasvbible.org/2025/05/12/when-the-centurions-servant-was-ill-who-actually-came-to-jesus-the-centurion-matthew-85-13-or-the-jewish-elders-luke-72-11/",
    "192. [Apologetics] Defending Inerrancy. 'Is There a Bible Contradiction in Matthew 8:5-13?.' https://defendinginerrancy.com/bible-solutions/Matthew_8.5-13_(cf._Luke_7.2-10).php",
    "193. [Commentary] Enduring Word, David Guzik. '1 Samuel 31, The Death of Saul and His Sons.' https://enduringword.com/bible-commentary/1-samuel-31/",
    "194. [Bible Study Resource] Got Questions. 'Death of Saul.' https://www.gotquestions.org/death-of-Saul.html",
    "195. [Evangelical] Ligonier Ministries. 'A Lying Amalekite.' https://learn.ligonier.org/devotionals/lying-amalekite",
    "196. [Research Institute] Tyndale House, Cambridge. 'Who Killed Goliath? The Puzzling Text of 2 Samuel 21:19.' https://tyndalehouse.com/2022/04/14/who-killed-goliath/",
    "197. [Bible Study Resource] Got Questions. 'Goliath David Elhanan.' https://www.gotquestions.org/Goliath-David-Elhanan.html",
    "198. [Encyclopedia] Wikipedia. 'Elhanan, Son of Jaare Oregim.' https://en.wikipedia.org/wiki/Elhanan,_son_of_Jaare-oregim",
    "199. [Bible Study Resource] Bible Hub. 'Why Does Elhanan Kill Goliath's Brother?.' https://biblehub.com/q/why_does_elhanan_kill_goliath's_brother.htm",
    "200. [Bible Study Resource] Christian Publishing House. 'Resolving the Elhanan Enigma.' https://christianpublishinghouse.co/2023/09/17/resolving-the-elhanan-enigma-a-close-examination-of-2-samuel-2119-and-1-chronicles-205/",
    "201. [Bible Study Resource] NeverThirsty. 'Who Killed Goliath, David or Elhanan?.' https://www.neverthirsty.org/bible-qa/qa-archives/question/who-killed-goliath-david-elhanan/",
    "202. [Apologetics] Institute for Religious Research. 'Did Michal Have Children or Not?.' https://bib.irr.org/did-michal-have-children-or-not-2-samuel-623-and-218",
    "203. [Encyclopedia] Wikipedia. 'Merab.' https://en.wikipedia.org/wiki/Merab",
    "204. [Encyclopedia] Wikipedia. 'Adriel.' https://en.wikipedia.org/wiki/Adriel",
    "205. [Commentary] Bible Apps. 'Commentary on 2 Samuel 21:8.' https://bibleapps.com/commentaries/2_samuel/21-8.htm",
    "206. [Commentary] StudyLight. 'Verse-by-Verse Commentary on 2 Samuel 21:8.' https://www.studylight.org/commentary/2-samuel/21-8.html",
    "207. [Encyclopedia] Wikipedia. 'Michal.' https://en.wikipedia.org/wiki/Michal",
    "208. [Textual Resource] KJV Today. '40,000 or 4,000 in 1 Kings 4:26?.' https://sites.google.com/site/kjvtoday/home/40000-or-4000-in-1-kings-426",
    "209. [Commentary] Bible Hub. 'Commentaries on 1 Kings 4:26.' https://biblehub.com/commentaries/1_kings/4-26.htm",
    "210. [Apologetics] Mark Tabata. 'How Many Stalls Did Solomon Have?.' https://marktabata.com/2023/04/27/how-many-stalls-did-solomon-have/",
    "211. [Apologetics] Stand to Reason. 'Does God Visit the Iniquities of the Fathers on the Third and Fourth Generations?.' https://www.str.org/w/does-god-visit-the-iniquities-of-the-fathers-on-the-third-fourth-generations-",
    "212. [Bible Study Resource] Bible Hub. 'Do Children Suffer for Their Fathers' Sins?.' https://biblehub.com/q/do_children_suffer_for_fathers'_sins.htm",
    "213. [Commentary] Bible Hub. 'Study Bible on Ezekiel 18:20.' https://biblehub.com/study/ezekiel/18-20.htm",
    "214. [Academic Resource] Intertextual Bible. 'Exodus 12:40 Compared with the Samaritan Pentateuch.' https://intertextual.bible/text/exodus-12.40-samaritan-exodus-12.40",
    "215. [Bible Study Resource] Updated American Standard Version. 'Old Testament Textual Commentary on Exodus 12:40.' https://uasvbible.org/2025/09/04/old-testament-textual-commentary-on-exodus-1240/",
    "216. [Archaeology Organisation] Associates for Biblical Research. 'The Duration of the Israelite Sojourn in Egypt.' https://biblearchaeology.org/research/patriarchal-era/3228-the-duration-of-the-israelite-sojourn-in-egypt",
    "217. [Jewish Scholarship] TheTorah.com. 'How Many Years Were the Israelites in Egypt?.' https://www.thetorah.com/article/how-many-years-were-the-israelites-in-egypt",
    "218. [Bible Study Resource] Christian Publishing House. 'How Many Persons Were in Jacob's Household?.' https://christianpublishinghouse.co/2019/09/01/genesis-4626-27-otbdc-how-many-persons-were-in-jacobs-household-when-they-moved-into-egypt/",
    "219. [Academic Resource] Intertextual Bible. 'Genesis 46:27 Compared with the Septuagint.' https://intertextual.bible/text/genesis-46.27/lxx-genesis-46.27",
    "220. [Apologetics] Defending Inerrancy. 'Is There a Bible Contradiction in Acts 7:14?.' https://defendinginerrancy.com/bible-solutions/Acts_7.14.php",
    "221. [Apologetics] Apologetics Press. 'To Galilee or Jerusalem?.' https://apologeticspress.org/to-galilee-or-jerusalem-730/",
    "222. [Catholic Resource] St Paul Center. 'Did Jesus Appear to His Disciples in Jerusalem or Galilee?.' https://stpaulcenter.com/posts/did-jesus-appear-to-his-disciples-in-jerusalem-or-galilee",
    "223. [Evangelical] Ligonier Ministries. 'Does John's Last Supper Chronology Differ from the Other Gospels?.' https://learn.ligonier.org/articles/does-last-supper-chronology-differ",
    "224. [Scholarly Blog] The Jesus Blog. 'Was the Last Supper on Wednesday? A Review of Humphreys.' https://historicaljesusresearch.blogspot.com/2016/01/was-last-supper-on-wednesday-review-of.html",
    "225. [Scholarly Blog] NT Weblog, Mark Goodacre. 'Dating the Last Supper a Day Early?.' https://ntweblog.blogspot.com/2011/04/dating-last-supper-day-early.html",
    "226. [Encyclopedia] Wikipedia. 'Chronology of Jesus.' https://en.wikipedia.org/wiki/Chronology_of_Jesus",
    "227. [University] Biola University. 'Chronology of Easter in John and the Synoptic Gospels.' https://www.biola.edu/blogs/good-book-blog/2015/chronology-of-easter-in-john-and-the-synoptic-gospels",
    "228. [Bible Study Resource] JesusWalk. 'The Chronology of Holy Week in John's Gospel.' https://www.jesuswalk.com/john/appendix_7.htm",
    "229. [Encyclopedia] Wikipedia. 'Passover Sacrifice.' https://en.wikipedia.org/wiki/Passover_sacrifice",
    "230. [Encyclopedia] Wikipedia. 'Last Supper.' https://en.wikipedia.org/wiki/Last_Supper",
    "231. [Apologetics] Apologetics Press. 'In What Order Did Satan Tempt Jesus?.' https://apologeticspress.org/in-what-order-did-satan-tempt-jesus-746/",
    "232. [Bible Study Resource] Bible Hub. 'Why Do Luke and Matthew Differ on the Temptations?.' https://biblehub.com/q/why_do_luke_and_matthew_differ_in_temptations.htm",
    "233. [Reformed Resource] Reformed Wiki. 'Is the Order of the Temptations of Jesus Contradictory?.' https://reformedwiki.com/order-temptations",
    "234. [Encyclopedia] Wikipedia. 'Temptation of Christ.' https://en.wikipedia.org/wiki/Temptation_of_Christ",
    "235. [Evangelical] The Gospel Coalition. 'Who Wrote Moses's Obituary in Deuteronomy 34?.' https://www.thegospelcoalition.org/article/wrote-mosess-obituary-deuteronomy-34/",
    "236. [Apologetics] Christian Research Institute. 'The Death of Moses in Deuteronomy 34 and Authorship.' https://www.equip.org/articles/death-of-moses-in-deut-34-and-authorship/",
    "237. [Primary Source] Sefaria. 'Bava Batra 14b, on the authorship of the biblical books.' https://www.sefaria.org/Bava_Batra.14b",
    "238. [Bible Study Resource] BibleAsk. 'Who Wrote the Last Five Verses of Deuteronomy 34?.' https://bibleask.org/who-wrote-the-last-5-verses-of-deuteronomy-34/",
    "239. [Encyclopedia] Wikipedia. 'Mosaic Authorship.' https://en.wikipedia.org/wiki/Mosaic_authorship",
    "240. [Bible Study Resource] Got Questions. 'Is the Father Greater than Jesus?' - Explains John 14:28 as referring to position during the incarnation rather than nature. https://www.gotquestions.org/Father-greater-Jesus.html",
    "241. [Evangelical] The Gospel Coalition Canada. 'Is the Father Greater than the Son?' - Theological explanation of John 14:28 and Jesus' functional subordination in the Incarnation. https://ca.thegospelcoalition.org/columns/detrinitate/is-the-father-greater-than-the-son/",
    "242. [Lexical Resource] Bible Hub. 'Strong's Greek 3444, morphē, form or nature.' https://biblehub.com/greek/3444.htm",
    "243. [Commentary] Bible Hub. 'Commentaries on Philippians 2:6.' https://biblehub.com/commentaries/philippians/2-6.htm",
    "244. [Lexical Resource] Bible Hub. 'Strong's Greek 2470, isos, equal or identical.' https://biblehub.com/greek/2470.htm",
    "245. [Encyclopedia] Wikipedia. 'Kenosis.' - Overview of the theological concept of Christ's self-emptying in the incarnation. https://en.wikipedia.org/wiki/Kenosis",
    "246. [Bible Study Resource] Got Questions. 'What is the kenosis? What is kenotic theology?' - Explanation of kenosis as addition of human nature, not subtraction of divine nature. https://www.gotquestions.org/kenosis.html",
    "247. [Evangelical] Ligonier Ministries. 'The Humiliation of Christ.' - Theological treatment of Philippians 2 and the self-emptying of Christ. https://learn.ligonier.org/articles/humiliation-christ",
    "248. [Commentary] Bible Hub. 'Commentaries on John 14:28.' https://biblehub.com/commentaries/john/14-28.htm",
    "249. [Commentary] Bible Hub. 'Commentaries on John 17:5.' https://biblehub.com/commentaries/john/17-5.htm",
    "250. [Apologetics] CARM. 'John 14:28, The Father Is Greater Than I.' - Distinguishes positional greatness from ontological equality. https://carm.org/about-jesus/john-1428-the-father-is-greater-than-i/",
    "251. [Encyclopedia] Wikipedia. 'Economic Trinity.' - Distinction between the immanent Trinity (God in Himself) and the economic Trinity (God's activity in creation and salvation). https://en.wikipedia.org/wiki/Economic_Trinity",
    "252. [Commentary] Bible Hub. 'Commentaries on John 5:18.' https://biblehub.com/commentaries/john/5-18.htm",
    "253. [Commentary] Bible Hub. 'Commentaries on John 10:30.' https://biblehub.com/commentaries/john/10-30.htm",
    "254. [Commentary] Bible Hub. 'Commentaries on Hebrews 1:3.' https://biblehub.com/commentaries/hebrews/1-3.htm",
    "255. [Bible Study Resource] Got Questions. 'What does Philippians 2:5-8 mean?' - Explanation of the Christ hymn and its implications for Jesus' divine nature and incarnation. https://www.gotquestions.org/Philippians-2-5-8.html"
  ],
  lastUpdated: '07-08-2026',
}