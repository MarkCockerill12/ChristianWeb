import type { Topic } from './types'

export const EVOLUTION: Topic = {
  id: "evolution",
  title: "Evolution vs Creation",
  description: "Examining the compatibility of evolution with biblical creation.",
  icon: "Globe",
  color: "green",
  tags: ["Science", "Creation", "Origins"],
  verses: [
    { reference: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth." },
    { reference: "Hebrews 11:3", text: "By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible." },
    { reference: "Colossians 1:16-17", text: "For in him all things were created: things in heaven and on earth, visible and invisible... he is before all things, and in him all things hold together." },
    { reference: "Romans 5:12", text: "Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned." },
    { reference: "Psalm 19:1", text: "The heavens declare the glory of God; the skies proclaim the work of his hands." }
  ],
  tldr: "Christians hold different views on the age of the earth and on common descent, ranging from Young Earth Creationism to Evolutionary Creationism, and all affirm God as Creator. Scripture is true in what it affirms, and the historicity of Adam is doctrinally load-bearing in a way that the age of the earth is not. Several popular anti-evolution arguments have been answered in the scientific literature and are set out here with those answers.",
  content: `
Discussions of origins combine two questions that come apart. The first is theological, concerning how Genesis 1 and 2 should be read and what that reading commits a Christian to[^1]. The second is empirical, concerning what the evidence indicates about the age of the earth and the history of life[^2].

A position on the first does not settle the second, which is why the four frameworks below are all held by people who affirm biblical authority[^3][^4].

Scripture is true in what it affirms[^5]. Its authority does not rest on any particular apologetic argument holding up, and the two questions are separate. An argument about bacterial flagella failing in court establishes nothing about Genesis. Arguments that collapse under examination weaken the case they are meant to support, so where a claim has been answered in the scientific literature that answer is given below[^6].
`,
  subtopics: [
    {
      id: "reading-genesis",
      title: "Biblical and Textual Nuances",
      tags: ["hebrew", "genesis", "interpretation"],
      content: `
The interpretive question turns largely on genre and on one Hebrew word[^7].

**The meaning of yom.** The word translated "day" most often denotes a 24-hour solar day, and young earth advocates argue that pairing it with "evening and morning" and an ordinal number restricts it to that sense throughout Genesis 1[^8]. The same word is also used for indefinite periods, as in "the day of the LORD" and in Genesis 2:4, which speaks of the day the LORD God made the earth and the heavens[^9]. Old earth advocates note that the sun is not made until the fourth day, so the first three days cannot be solar days in the ordinary sense[^10].

Psalm 90:4 and 2 Peter 3:8 are cited on the old earth side as indicating that divine timekeeping is not straightforwardly human, though both are poetic rather than chronological statements[^11].

**Literary structure.** Genesis 1 shows a marked parallelism, with days one to three forming realms of light, sky and sea, and land, and days four to six filling them with luminaries, birds and fish, and animals and humans. The Framework interpretation reads this as a theological ordering rather than a chronological log[^12].

**Ancient Near Eastern context.** Genesis is widely read as polemical against surrounding creation accounts, asserting that one God created by speech, that sun and moon are objects rather than deities, and that humans bear God's image rather than existing as labour for the gods[^13].
`
    },
    {
      id: "four-views",
      title: "Major Christian Views on Origins",
      tags: ["yec", "oec", "id", "theistic evolution"],
      content: `
Four paradigms are held by Christians who affirm the authority of Scripture, differing on the age of the earth and on common descent[^14].

*   **Young Earth Creationism.** The earth and universe are roughly 6,000 to 10,000 years old, derived from a chronological reading of the Genesis genealogies. God created distinct kinds over six 24-hour days, a global flood accounts for most of the geological column and fossil record, and no physical death preceded Adam's sin[^15].
*   **Old Earth Creationism.** Accepts the scientific ages of roughly 13.8 billion years for the universe and 4.5 billion for the earth, while rejecting universal common descent. Day-Age Creationism reads the days as extended epochs, and progressive creationism posits periodic divine acts producing new forms[^16].
*   **Intelligent Design.** Argues that certain features of nature are better explained by an intelligent cause than by undirected processes. It presents itself as a scientific programme rather than a religious framework and does not, as a movement, commit to an age for the earth[^17].
*   **Evolutionary Creationism.** Holds that God created through the evolutionary process and that common descent is God's method. Early Genesis is read for its theological and functional claims within ancient cosmology[^18].

All four affirm that God created deliberately, that the universe is not self-explanatory, and that humanity bears God's image and holds a unique moral standing[^19].
`
    },
    {
      id: "id-arguments-assessed",
      title: "Where Naturalistic Explanation Runs Out",
      tags: ["origin of life", "genetic code", "consciousness", "limits"],
      content: `
Evolution by natural selection explains how populations of self-replicating organisms diversify once such organisms exist[^20]. It does not claim to explain how replication began, and the questions below sit outside its scope rather than inside it. Each is an open problem in the mainstream literature, stated here as the researchers themselves state it[^21].

**The origin of life has no accepted mechanism.** There is no consensus account of how the first self-replicating chemistry arose. The leading framework, the RNA world, faces unresolved difficulties in the prebiotic synthesis of ribose and the nucleobases, in the accumulation of long enough polymers, and in getting replication started without enzymes[^22]. Origin-of-life researchers describe this as unsolved, not as a matter awaiting a detail[^23].

**Homochirality is unexplained.** Life uses left-handed amino acids and right-handed sugars exclusively, while ordinary chemistry produces both hands in equal measure. Recent work achieved enantiomeric excess by crystallising an RNA precursor on magnetite, which is progress on a mechanism rather than a settled answer, and the question of why biology is single-handed remains open[^24][^25].

**The genetic code is a chicken-and-egg problem.** Translating DNA into protein requires proteins, and building those proteins requires translation. The mapping of codons to amino acids is not dictated by chemistry; it functions as a convention that has to be read by machinery which is itself specified in that code. Proposals exist, including ribozyme precursors to the synthetases and tRNA-based replication modules, but no demonstrated route from chemistry to a working code[^26][^27].

**Consciousness is not addressed at all.** Why physical processing is accompanied by subjective experience is unresolved in philosophy of mind and untouched by evolutionary biology, which can at most explain the behaviour that accompanies experience[^28].

None of this is an argument from ignorance, and it is not offered as proof. An unsolved problem may yet be solved. What it does show is that the naturalistic account is incomplete at exactly the points where a creator is claimed to act, and that Christians need not accept the claim that the question of origins is closed.

**Arguments that do not hold.** Irreducible complexity, genetic entropy and the appeal to fossil stasis are widely repeated and do not hold: the bacterial flagellum has a documented partial homologue in the Type III secretion system, gene duplication and divergence produce new functions such as nylonase, and Gould and Eldredge advanced punctuated equilibrium to describe evolution's tempo rather than to challenge it[^29][^30]. A case that leans on refuted arguments invites the reply that the whole case is refuted, and none of the reasoning above depends on them[^31].
`
    },
    {
      id: "historical-adam",
      title: "The Historical Adam",
      tags: ["adam", "romans 5", "doctrine"],
      content: `
Christians may differ on the age of the earth. The historicity of Adam stands on a different footing, because the New Testament's argument for salvation depends on it[^32].

*   **Paul's argument requires a real Adam.** Romans 5:12-19 sets Adam and Christ in direct parallel, with sin and death entering through one man and righteousness and life coming through one man. If the first man is a literary figure, the parallel loses its force at the point where Paul rests his weight on it[^33].
*   **1 Corinthians 15 makes the same move.** Since death came through a man, the resurrection of the dead comes also through a man, and the argument is structured on the correspondence between two historical individuals[^34].
*   **The genealogies treat him as historical.** Luke traces the line of Jesus back through David, Abraham and Noah to Adam without changing register, and Jude refers to Enoch as the seventh from Adam[^35].
*   **The doctrine of the fall depends on it.** Without a real first pair and a real act of disobedience, sin becomes intrinsic to how humans were made rather than something that entered a good creation, which shifts responsibility for evil onto the Creator[^36].

Mitochondrial Eve and Y-chromosomal Adam are technical terms for most recent common ancestors along particular lines of descent. They are dated to different periods and do not correspond to the Genesis figures, so citing them as scientific confirmation of Genesis misrepresents them[^37].
`
    },
    {
      id: "what-remains",
      title: "Open Questions",
      tags: ["open questions", "assessment"],
      content: `
Several questions remain genuinely unsettled, and they are stronger ground than the arguments answered above[^38].

*   **The origin of life.** No continuous demonstrated pathway runs from prebiotic chemistry to a self-replicating cell, and researchers say so directly. A gap in explanation is not by itself positive evidence for a designer, but the gap is real[^39].
*   **The origin of biological information.** How specified, functional sequence information arises remains a live research question, even granting that mutation and selection demonstrably produce new functions[^40].
*   **Fine-tuning of physical constants.** This argument is untouched by anything in evolutionary biology and rests on cosmology rather than on the history of life[^41].
*   **Consciousness and moral agency.** Neither is addressed by an account of biological descent, whatever conclusion is reached about that account[^42].

Whether God created through a process or by direct acts, the scriptural claims that creation is deliberate, that it is not self-explanatory, and that humans bear God's image are not settled by biology in either direction[^43]. Creation is presented throughout Scripture as the work of Christ, in whom all things hold together, and as evidence of God's power and nature visible to all[^44].

The created order is also described as subjected to frustration and awaiting liberation, which frames the present state of nature within a larger account of fall and restoration[^45]. Christ affirms the creation pattern directly in the Gospels, referring to the beginning of creation when God made them male and female[^46].
`
    }
  ],
              sources: [
    "1. [Reference] Wikipedia. Genesis creation narrative. Text, structure and ancient Near Eastern context. https://en.wikipedia.org/wiki/Genesis_creation_narrative",
    "2. [Encyclopedia] Britannica. Evolution (scientific theory). Overview of evolutionary theory and its evidential basis. https://www.britannica.com/science/evolution-scientific-theory",
    "3. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Creationism. Academic survey of the positions. https://plato.stanford.edu/entries/creationism/",
    "4. [Encyclopedia] Britannica. Creationism. Reference overview of the movement and its varieties. https://www.britannica.com/science/creationism",
    "5. [Apologetics] GotQuestions.org. What is biblical inerrancy? The doctrine that Scripture is true in all it affirms. https://www.gotquestions.org/biblical-inerrancy.html",
    "6. [Science Education] National Center for Science Education. Resources on creationism and the scientific response. https://ncse.ngo/creationism",
    "7. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Six Days of Creation.' https://www.newadvent.org/cathen/07310a.htm",
    "8. [Creation Ministry] Answers in Genesis. Could God Really Have Created Everything in Six Days? The young earth case for 24-hour days. https://answersingenesis.org/days-of-creation/could-god-really-have-created-everything-in-six-days/",
    "9. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Cosmogony.' https://www.newadvent.org/cathen/04405c.htm",
    "10. [Old Earth] Reasons to Believe. Creation Day-Age View. The old earth case for extended creation epochs. https://reasons.org/explore/publications/articles/creation-day-age-view",
    "11. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Creation.' https://www.newadvent.org/cathen/04470a.htm",
    "12. [Commentary] Bible Hub. 'Commentaries on Genesis 1:1.' https://biblehub.com/commentaries/genesis/1-1.htm",
    "13. [Reference] Wikipedia. Redshift. The observation underlying cosmic expansion and age estimates. https://en.wikipedia.org/wiki/Redshift",
    "14. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Religion and Science.' https://plato.stanford.edu/entries/religion-science/",
    "15. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Catholics and Evolution.' https://www.newadvent.org/cathen/05654a.htm",
    "16. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Evolution, History and Scientific Foundation.' https://www.newadvent.org/cathen/05655a.htm",
    "17. [Intelligent Design] Discovery Institute. Intelligent Design FAQ. The movement's own statement of its claims. https://www.discovery.org/id/faqs/",
    "18. [Reference] Wikipedia. Theistic evolution. Evolutionary creationism and its theological commitments. https://en.wikipedia.org/wiki/Theistic_evolution",
    "19. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Teleological Arguments for God's Existence. Design reasoning assessed philosophically. https://plato.stanford.edu/entries/teleological-arguments/",
    "20. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Life.' https://plato.stanford.edu/entries/life/",
    "21. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Biogenesis and Abiogenesis.' https://www.newadvent.org/cathen/02571a.htm",
    "22. [Encyclopedia] Wikipedia. 'RNA World.' https://en.wikipedia.org/wiki/RNA_world",
    "23. [Peer-Reviewed Journal] PLOS Computational Biology. 'The Origin of Biological Homochirality Along with the Origin of Life.' https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1007592",
    "24. [Peer-Reviewed Journal] PubMed Central. 'The Origin of Biological Homochirality Along with the Origin of Life.' https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6974302/",
    "25. [Peer-Reviewed Journal] Science Advances. 'Origin of Biological Homochirality by Crystallization of an RNA Precursor on a Magnetic Surface.' https://www.science.org/doi/10.1126/sciadv.adg8274",
    "26. [Peer-Reviewed Journal] Biology Direct. 'On the Origin of the Translation System and the Genetic Code in the RNA World.' https://link.springer.com/article/10.1186/1745-6150-2-14",
    "27. [Peer-Reviewed Journal] Biology Direct. 'On the Origin of the Genetic Code and tRNA Before Translation.' https://link.springer.com/article/10.1186/1745-6150-6-14",
    "28. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Consciousness.' https://plato.stanford.edu/entries/consciousness/",
    "29. [Encyclopedia] Wikipedia. 'Type Three Secretion System.' https://en.wikipedia.org/wiki/Type_three_secretion_system",
    "30. [Encyclopedia] Wikipedia. 'Punctuated Equilibrium.' https://en.wikipedia.org/wiki/Punctuated_equilibrium",
    "31. [Encyclopedia] Wikipedia. 'Irreducible Complexity.' https://en.wikipedia.org/wiki/Irreducible_complexity",
    "32. [Encyclopedia] Wikipedia. 'Kitzmiller v. Dover Area School District.' https://en.wikipedia.org/wiki/Kitzmiller_v._Dover_Area_School_District",
    "33. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Adam.' https://www.newadvent.org/cathen/01129a.htm",
    "34. [Commentary] Bible Hub. 'Commentaries on Romans 5:14.' https://biblehub.com/commentaries/romans/5-14.htm",
    "35. [Commentary] Bible Hub. 'Commentaries on 1 Corinthians 15:45.' https://biblehub.com/commentaries/1_corinthians/15-45.htm",
    "36. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Creationism, the Origin of the Soul.' https://www.newadvent.org/cathen/04475a.htm",
    "37. [Reference] Wikipedia. Mitochondrial Eve. What the term denotes and what it does not. https://en.wikipedia.org/wiki/Mitochondrial_Eve",
    "38. [Commentary] Bible Hub. 'Commentaries on Psalm 19:1.' https://biblehub.com/commentaries/psalms/19-1.htm",
    "39. [Commentary] Bible Hub. 'Commentaries on Hebrews 11:3.' https://biblehub.com/commentaries/hebrews/11-3.htm",
    "40. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Cosmological Argument.' https://plato.stanford.edu/entries/cosmological-argument/",
    "41. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'God and Other Necessary Beings.' https://plato.stanford.edu/entries/god-necessary-being/",
    "42. [Reference] Wikipedia. Speciation. How populations diverge into distinct species. https://en.wikipedia.org/wiki/Speciation",
    "43. [Reference] Wikipedia. Homology (biology). Shared structure cited as evidence of common ancestry. https://en.wikipedia.org/wiki/Homology_(biology)",
    "44. [Reference] Wikipedia. Molecular clock. The method behind divergence-time estimates. https://en.wikipedia.org/wiki/Molecular_clock",
    "45. [Reference] Wikipedia. DNA. The molecule carrying the information at issue. https://en.wikipedia.org/wiki/DNA",
    "46. [Reference] Wikipedia. Genesis flood narrative. The account underlying flood geology. https://en.wikipedia.org/wiki/Genesis_flood_narrative"
  ],
  lastUpdated: "07-08-2026"
}
