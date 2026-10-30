import type { Topic } from './types'

export const TREE_OF_KNOWLEDGE: Topic = {
  id: "tree-of-knowledge",
  title: "The Tree of Knowledge of Good and Evil",
  description: "Why did God place the tree of knowledge in the Garden of Eden?",
  icon: "TreePine",
  color: "green",
  tags: ["Genesis", "Creation", "Free Will"],
  verses: [
    { reference: "Genesis 2:16-17", text: "And the LORD God commanded the man, saying, 'You may surely eat of every tree of the garden, but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.'" },
    { reference: "Genesis 3:4-5", text: "'You will not certainly die,' the serpent said to the woman. 'For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil.'" },
    { reference: "Genesis 3:22-24", text: "And the LORD God said, 'Behold, the man has become like one of us in knowing good and evil. Now, lest he reach out his hand and take also of the tree of life and eat, and live forever' therefore the LORD God sent him out from the garden of Eden." },
    { reference: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." },
    { reference: "Revelation 22:1-2", text: "Then the angel showed me the river of the water of life... On each side of the river stood the tree of life, bearing twelve crops of fruit, yielding its fruit every month. And the leaves of the tree are for the healing of the nations." }
  ],
  tldr: "God placed the tree of the knowledge of good and evil in the garden to provide Adam and Eve with a genuine choice to love and obey Him. Without the possibility of disobedience, their devotion would have been mechanical rather than relational. The narrative closes not with the tree of knowledge but with access to the tree of life restored.",
  content: `
## The Purpose of the Tree

The presence of the tree of the knowledge of good and evil in the Garden of Eden served several profound theological purposes regarding human nature and relationship with God. God created Adam and Eve as free beings rather than programmed entities, requiring a context in which that freedom could be exercised[^1].

### A Genuine Choice and Test of Love

To have a genuine relationship rooted in love, there must be the possibility of choice[^2].

*   By placing the tree in the garden with a specific prohibition, God provided a clear opportunity for Adam and Eve to exercise their free will[^3].
*   The tree functioned as a test of their love, faith, and obedience toward their Creator[^4].
*   The restriction was narrow and the provision vast, since every other tree in the garden was permitted[^5].

### Dependence Rather Than Autonomy

The prohibition served as a continuous reminder of the Creator-creature distinction. Abstaining from the fruit was a daily demonstration of reliance on God as the source of wisdom, rather than an attempt to define good and evil on independent terms[^6].
`,
  subtopics: [
    {
      id: "what-the-phrase-means",
      title: "The Meaning of 'Knowledge of Good and Evil'",
      tags: ["hebrew", "scholarship", "interpretation"],
      content: `
The English phrase suggests simple information, as though Adam and Eve were ignorant of ethics until they ate. The Hebrew *da'at tov wara'* carries considerably more weight, and three main readings appear in the scholarly literature[^7][^8].

*   **Merism.** "Good and evil" names two extremes in order to indicate everything between them, in the way that "young and old" indicates everyone. On this reading the tree represents comprehensive moral discernment, a prerogative reserved to God[^9].

<?viz tree-of-knowledge/merism?>

*   **Moral autonomy.** To know good and evil is to claim the right to define them, becoming the standard rather than living under it. This reading fits the serpent's offer precisely, since the promise was that they would "be like God, knowing good and evil"[^10].
*   **Judicial authority.** Nathan French argues from the distribution of the phrase across the Hebrew Bible that it denotes the knowledge for administering reward and punishment, meaning the wisdom for wielding ultimate power rather than the ability to tell right from wrong[^11][^12].

None of these readings makes the tree a source of magic, and none makes ignorance the pre-fall condition. Adam already exercised moral judgment, since he obeyed a command, named the animals, and recognised Eve[^13].

The tree itself was not evil, and there was nothing corrupting in the fruit. Genesis 1:31 records God calling everything He had made "very good," so the prohibition cannot mean the tree was wicked by nature. The moral weight lay entirely in the command attached to it[^14].
`
    },
    {
      id: "why-a-prohibition",
      title: "Why a Prohibition Was Necessary",
      tags: ["free will", "philosophy", "love"],
      content: `
Love that cannot be withheld is not love. A creature with no capacity to refuse God has no capacity to choose Him either, and its obedience carries no more moral weight than a stone falling[^15].

*   For a command to be meaningful there must be a real possibility of breaking it. A garden without any prohibition would have offered no way to express allegiance at all[^16].
*   Alvin Plantinga's Free Will Defense argues that a world containing significantly free creatures is more valuable than one containing none, and that God cannot create genuinely free creatures while determining that they never choose wrongly. To make moral good possible, God must make moral evil possible[^17][^18].
*   Plantinga's argument establishes that God and evil are logically compatible. It does not claim to identify God's actual reasons. Philosophers widely regard it as having settled the logical problem of evil, while the evidential problem remains actively debated[^19].

Critics respond that God could have created beings who freely choose good every time, since a merely possible wrong choice is not a necessary one. Plantinga answers by appealing to transworld depravity, the claim that God may not have had a feasible world of that kind available. The exchange remains live philosophy rather than a settled matter[^20].
`
    },
    {
      id: "two-trees",
      title: "The Two Trees: Life and Knowledge",
      tags: ["tree of life", "biblical theology", "revelation"],
      content: `
The garden held two named trees, and reading only one of them distorts the account[^21].

<?viz tree-of-knowledge/parallels?>


*   The tree of life was never forbidden. Before the fall Adam and Eve had free access to it, and God's prohibition covered exactly one tree out of a garden full of them[^22].
*   Expulsion was protective rather than merely punitive. Genesis 3:22-24 gives the stated reason, which was to prevent humanity eating from the tree of life in a fallen condition and so fixing that condition permanently[^23].
*   The choice lay between two kinds of life. The tree of life represented received, dependent life sustained by fellowship with God, while the tree of knowledge represented self-derived life on self-defined terms[^24].

Scripture closes where it began. The tree of life reappears in Revelation 22, unguarded, at the centre of the New Jerusalem, its leaves "for the healing of the nations." What the fall closed, redemption reopens, and Eden is not merely restored but surpassed[^25].

<?viz tree-of-knowledge/bookends?>

`
    },
    {
      id: "surely-die",
      title: "'You Shall Surely Die'",
      tags: ["objection", "hebrew", "death"],
      content: `
God said that in the day they ate of it they would surely die, yet Adam lived to 930. Sceptics argue that the serpent told the truth and God did not. Three responses are offered, and they are not mutually exclusive[^26].

<?viz tree-of-knowledge/art?>


*   **The Hebrew idiom.** The construction *môt tāmût*, "dying you shall die," is an infinitive absolute used elsewhere in legal contexts to pronounce a sentence. It marks the certainty of the penalty rather than its timing, closer to "you shall surely be doomed to die" than to a promise of death within a single day[^27].
*   **Death as separation.** The death threatened was primarily relational. Fellowship with God was severed the same day, evidenced by hiding, shame, and expulsion, and physical death followed as the outworking of that rupture[^28].
*   **Mortality commenced immediately.** Access to the tree of life was cut off at once, so whatever had sustained unending life ended at once. Adam began dying the day he ate, even though the process took centuries[^29].

The philological answer carries the most weight. The second and third are theological readings consistent with the wider narrative.
`
    },
    {
      id: "creator-creature",
      title: "The Creator-Creature Distinction",
      tags: ["theology", "image of God", "autonomy"],
      content: `
The prohibition marked a boundary that the image of God does not erase. Genesis grants humanity extraordinary dignity through representation, rule, and relationship, while maintaining that the creature is never the Creator[^30][^31].

*   The serpent's offer inverted this precisely. "You will be like God" was an offer of illegitimate Godlikeness, deciding good and evil for oneself instead of receiving them from the one who defines them[^32].
*   Because humanity is made, humanity is answerable. There is no neutral third position, since moral authority is either received from God or asserted autonomously[^33].
*   Proverbs 9:10 places the fear of the LORD at the beginning of wisdom, which is the exact inverse of the tree's offer. Wisdom arrives through dependence, not through seizing the right to define[^34].

Temptation follows the same pattern in the New Testament, where desire conceives and gives birth to sin. The mechanism visible in Eden recurs throughout Scripture[^35].
`
    }
  ],
            sources: [
    "1. [Apologetics] GotQuestions.org. Why did God put the tree of the knowledge of good and evil in the Garden of Eden? https://www.gotquestions.org/tree-knowledge-good-evil.html",
    "2. [Commentary] Tim Challies. Reading Classics: Mere Christianity (III). Discusses C. S. Lewis's argument that free will is the only thing that makes possible any love worth having. https://www.challies.com/articles/reading-classics-mere-christianity-iii/",
    "3. [Creation Ministry] Answers in Genesis. The Tree of the Knowledge of Good and Evil: Evil or Good? https://answersingenesis.org/bible-questions/tree-knowledge-good-and-evil/",
    "4. [Commentary] Bible Hub. 'Commentaries on Genesis 2:17.' Matthew Henry and Benson on the prohibition as a trial of obedience. https://biblehub.com/commentaries/genesis/2-17.htm",
    "5. [Evangelical] The Gospel Coalition. The Tree of Life and the Tree of the Knowledge of Good and Evil. https://www.thegospelcoalition.org/blogs/justin-taylor/the-tree-of-life-and-the-tree-of-the-knowledge-of-god-and-evil/",
    "6. [Academic] Biblical Research Institute. Genesis 2:17. Exegetical treatment of the prohibition. https://www.adventistbiblicalresearch.org/materials/genesis-217/",
    "7. [Lexical] Bible Hub. Hebrew 3045, yada (to know). The verb behind knowledge in Genesis 2:17. https://biblehub.com/hebrew/3045.htm",
    "8. [Lexical] Bible Hub. Hebrew 2896, tov (good). https://biblehub.com/hebrew/2896.htm",
    "9. [Reference] Wikipedia. Tree of the knowledge of good and evil. Survey of the competing scholarly interpretations. https://en.wikipedia.org/wiki/Tree_of_the_knowledge_of_good_and_evil",
    "10. [Reformed Study] Knowing Scripture. What Was the Tree of the Knowledge of Good and Evil For? https://knowingscripture.com/articles/what-was-the-tree-of-the-knowledge-of-good-and-evil-for",
    "11. [Peer-Reviewed] French, Nathan S. A Theocentric Interpretation of the Knowledge of Good and Evil. Bulletin for Biblical Research 32.3 (2022). https://scholarlypublishingcollective.org/psup/biblical-research/article-pdf/32/3/322/1656031/bullbiblrese.32.3.0322.pdf",
    "12. [Academic] Evangelical Theological Society. Publication record for French's theocentric interpretation. https://etsjets.org/publication/a-theocentric-interpretation-of-%D7%94%D7%93%D7%A2%D7%AA-%D7%98%D7%95%D7%91-%D7%95%D7%A8%D7%A2-the-knowledge-of-good-and-evil-as-the-knowledge-for-administering-reward-and-punishment/",
    "13. [Commentary] Bible Hub. 'Commentaries on Genesis 2:19.' https://biblehub.com/commentaries/genesis/2-19.htm",
    "14. [Reference] Wikipedia. Augustinian theodicy. Evil as privation rather than created substance. https://en.wikipedia.org/wiki/Augustinian_theodicy",
    "15. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Moral Responsibility. Conditions under which agents are accountable. https://plato.stanford.edu/entries/moral-responsibility/",
    "16. [Commentary] Bible Hub. 'Commentaries on Genesis 2:16.' The reserve as the necessary test of a moral being's obedience. https://biblehub.com/commentaries/genesis/2-16.htm",
    "17. [Philosophy] Wikipedia. Alvin Plantinga's free-will defense. The argument and its reception. https://en.wikipedia.org/wiki/Alvin_Plantinga%27s_free-will_defense",
    "18. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. The Problem of Evil. https://plato.stanford.edu/entries/evil/",
    "19. [Peer-Reviewed] Internet Encyclopedia of Philosophy. The Logical Problem of Evil. Assesses the reception of the Free Will Defense. https://iep.utm.edu/evil-log/",
    "20. [Reference] Wikipedia. Problem of evil. The logical and evidential formulations and the replies to them. https://en.wikipedia.org/wiki/Problem_of_evil",
    "21. [Reference] Wikipedia. Tree of life (biblical). The tree of life across Genesis and Revelation. https://en.wikipedia.org/wiki/Tree_of_life_(biblical)",
    "22. [Apologetics] GotQuestions.org. What is the tree of life? https://www.gotquestions.org/tree-of-life.html",
    "23. [Evangelical] Ligonier Ministries. The Future Tree of Life. https://learn.ligonier.org/devotionals/future-tree-life",
    "24. [Academic] Lausanne Movement. A Theology of the Human Person. Occasional paper on the imago Dei and human accountability. https://lausanne.org/occasional-paper/a-theology-of-the-human-person",
    "25. [Reference] Wikipedia. New Jerusalem. The restored city in which the tree of life stands. https://en.wikipedia.org/wiki/New_Jerusalem",
    "26. [Primary Source] Sefaria. Genesis Rabbah 19, rabbinic commentary on the serpent and the sentence. https://www.sefaria.org/Genesis_Rabbah.19",
    "27. [Lexical] Bible Hub. Hebrew 4191, muth (to die). The infinitive absolute construction of Genesis 2:17. https://biblehub.com/hebrew/4191.htm",
    "28. [Commentary] Bible Hub. 'Commentaries on Genesis 3:8.' https://biblehub.com/commentaries/genesis/3-8.htm",
    "29. [Commentary] Bible Hub. 'Commentaries on Romans 5:12.' https://biblehub.com/commentaries/romans/5-12.htm",
    "30. [Creation Ministry] Answers in Genesis. What Is the Image of God? https://answersingenesis.org/genesis/what-is-image-of-god/",
    "31. [Reference] Wikipedia. Image of God. The imago Dei and its bearing on human standing. https://en.wikipedia.org/wiki/Image_of_God",
    "32. [Commentary] Bible Hub. 'Commentaries on Genesis 3:5.' The serpent's promise of divinity. https://biblehub.com/commentaries/genesis/3-5.htm",
    "33. [Theology] Association of Certified Biblical Counselors. Because I Am Not God: Three Reflections on the Creator-Creature Distinction. https://biblicalcounseling.com/resource-library/articles/because-i-am-not-god-three-reflections-on-the-creator-creature-distinction/",
    "34. [Commentary] Bible Hub. 'Commentaries on Proverbs 9:10.' https://biblehub.com/commentaries/proverbs/9-10.htm",
    "35. [Commentary] Bible Hub. 'Commentaries on James 1:15.' https://biblehub.com/commentaries/james/1-15.htm"
  ],
  lastUpdated: "26-10-2026"
}
