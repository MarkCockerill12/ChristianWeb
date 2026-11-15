import type { Topic } from './types'

export const problemOfEvil: Topic = {
  id: "problem-of-evil",
  title: "If God, Why Evil?",
  description: "Addressing the problem of evil and suffering in a world created by a good God.",
  icon: "AlertTriangle",
  color: "red",
  tags: ["Philosophy", "Scripture", "Morality"],
  verses: [
    { reference: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
    { reference: "Job 1:21", text: "Naked I came from my mother’s womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised." },
    { reference: "2 Corinthians 1:3-4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
    { reference: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
    { reference: "Genesis 1:26-27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
    { reference: "Genesis 2:16-17", text: "And the Lord God commanded the man, 'You are free to eat from any tree in the garden; but you must not eat from the tree of the knowledge of good and evil, for when you eat from it you will certainly die.'" },
    { reference: "Genesis 3:6-7", text: "When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it. Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves." }
  ],
  tldr: "The logical problem of evil has largely been answered: God and evil are not contradictory if God could have a good reason to allow it, such as creating free creatures. The harder question is why there is so much suffering, and Christians point to human freedom, a fallen creation, soul-making and God\’s own suffering at the cross. None of these answers everything, and Scripture does not claim to explain each case. It promises instead that God is not indifferent, and that evil will end.",
  content: `

One of the most prominent objections to Christianity is the logical problem of evil. The argument, often attributed to Epicurus (the attribution comes from the Christian writer Lactantius and is uncertain) and made famous by David Hume, goes as follows:

If God is all-powerful, He can stop evil. If God is all-loving, He wants to stop evil. Yet evil exists. Therefore, an all-powerful and all-loving God cannot exist[^1][^2].

<?viz problem-of-evil/triad?>


Christians reply that the argument depends on two premises they deny: first, that an all-powerful God can do the logically impossible (like forcing someone to freely choose good), and second, that an all-loving God would have no higher purpose for allowing temporary suffering[^3][^4].

Christian philosophers also point out that "evil" is a moral judgment. On the moral argument, objective moral values, concepts of true "good" and "bad", cannot exist without a moral lawgiver (God), so that the objection presupposes a standard that is hard to ground without God. Non-theistic moral realists dispute that premise, and the evidential problem of evil can be stated without it[^5][^6].

<?viz problem-of-evil/responses?>
`,
  subtopics: [
    {
      id: "logical-vs-probabilistic",
      title: "Logical vs. Probabilistic Problems of Evil",
      tags: ["The argument"],
      content: `**The Philosophical Challenge:** Theologians separate the problem of evil into two distinct intellectual categories[^7]:

• **The Logical Problem:** Asserts that the existence of God and the existence of any evil are logically incompatible. This version is widely regarded as resolved by Alvin Plantinga's Free Will Defense, which demonstrated that God could have morally sufficient reasons for creating a world containing free creatures who commit evil[^8][^9].

• **The Probabilistic (Evidential) Problem:** Concedes that God and evil are logically compatible, but argues that the sheer amount of gratuitous, unexplained suffering makes the existence of a good God highly improbable. Traditionalists reply that humans, being finite, are not in a position to judge whether a particular instance of suffering is truly gratuitous or if it serves a greater redemptive purpose in the grand scope of history[^10][^11].

**See also:** [The Moral Argument, Premise by Premise (Morality)](/categories/morality#section-the-moral-argument).
`
    },
    {
      id: "what-is-evil",
      title: "What Is Evil? The Privation Account",
      tags: ["The argument"],
      content: `
The argument from evil assumes that evil is something real. The classical Christian answer, worked out by Augustine, is that evil is real but is a lack rather than a thing. Evil is a privation, *privatio boni* (the absence of a good), meaning the absence of a good that ought to be there. Blindness is the lack of sight in an eye made to see, and a lie is the lack of truth in speech made to convey it[^12][^13][^14].

Augustine reached this view while leaving Manichaeism, which taught that evil is a substance and a power as old as good. If God made everything and everything he made is good (Genesis 1:31), evil cannot be a created substance, so it must be the corruption of things that are good in themselves[^15][^13]. In the *Enchiridion* he asks what evil is "but the absence of good", and says that in the body disease and wounds mean only the absence of health, not a substance of their own[^12]. Thomas Aquinas adopted the same account: "evil is the absence of good"[^16][^14].

Three things follow from the account.

*   **God did not create evil.** Everything God made is good, and evil exists only as a defect in what he made, so God is the creator of all things without being the creator of evil[^12][^15].
*   **Evil is parasitic.** It cannot exist on its own. A lie depends on language, and cruelty depends on persons with the power to act. Nothing can be wholly evil, since a complete privation would mean ceasing to exist[^13][^12].
*   **Evil is not ultimate.** Good can exist without evil, but evil cannot exist without good. This rules out the dualism of two equal and opposed powers[^12][^14].

The account explains what evil is, not why God permits it. Critics also argue that pain does not feel like an absence. Defenders reply that the capacity for pain is itself a good warning system, and that the evil lies in the disorder that causes it. The privation account is therefore a metaphysics of evil rather than a full answer, and Christian thinkers pair it with the free will and soul-making arguments[^14][^13].
`
    },
    {
      id: "free-will-defense",
      title: "The Free Will Defense",
      tags: ["Moral evil"],
      content: `
The Bible teaches that God created humanity with the capacity for genuine love, which requires free will. Love that is programmed or forced is not love at all.

1.  **Created in God's Image:** "So God created mankind in his own image, in the image of God he created them; male and female he created them" ([Genesis 1:26-27](https://www.biblegateway.com/passage/?search=Genesis+1%3A26-27&version=NIV)). Being made in His image implies moral agency, the ability to make meaningful choices[^17].

2.  **The Choice:** God provided a choice to Adam and Eve to ensure their love was voluntary. "You are free to eat from any tree in the garden; but you must not eat from the tree of the knowledge of good and evil" ([Genesis 2:16-17](https://www.biblegateway.com/passage/?search=Genesis+2%3A16-17&version=NIV)).

3.  **The Fall:** Humanity chose rebellion. "When the woman saw that the fruit of the tree was good for food... she took some and ate it" ([Genesis 3:6](https://www.biblegateway.com/passage/?search=Genesis+3%3A6&version=NIV)).

The philosopher Alvin Plantinga argues that it is *possible* that God could not have created a world of free creatures who always choose good, because whether free creatures sin is up to them, not to God. If God forced us to choose good, we would not be free. If that possibility holds, God and evil are logically compatible, and the potential for evil is the cost of creating a world with free will and genuine love[^1]. God values our freedom to choose Him: "Choose for yourselves this day whom you will serve" ([Joshua 24:15](https://www.biblegateway.com/passage/?search=Joshua+24%3A15&version=NIV)).


• **The Limits of Omnipotence:** Omnipotence means God can do anything that is logically possible, but creating a creature with genuine free will who is forced to always choose good is a logical contradiction, like drawing a square circle[^18][^19].

**See also:** [The Free Will Defense against the Problem of Evil (Free Will)](/categories/free-will#section-free-will-defense).
`
    },
    {
      id: "natural-evil",
      title: "The Mystery of Natural Evil",
      tags: ["Natural evil"],
      content: `
But what about earthquakes, cancer, and tsunamis? These are "natural evils" not directly caused by human choice. Many Christians explain this as the result of the Fall: when sin entered the world, it fractured not just human nature, but creation itself. Christians who accept an old earth note that earthquakes, disease and animal death long predate humans, and so explain natural evil instead through the necessity of a stable, law-governed world, through a prior fall of angelic powers, or through God's purposes for a creation still in progress.

"Cursed is the ground because of you" ([Genesis 3:17](https://www.biblegateway.com/passage/?search=Genesis+3%3A17&version=NIV)). The Apostle Paul writes that "the whole creation has been groaning as in the pains of childbirth right up to the present time" ([Romans 8:22](https://www.biblegateway.com/passage/?search=Romans+8%3A22&version=NIV)). We live in a broken world where the laws of nature, which sustain life, can also cause suffering[^20].

C.S. Lewis argued that for souls to interact, there must be a neutral "nature" with fixed laws (like gravity). These laws allow us to walk and build, but they also mean that if we fall, we get hurt. A world where the laws of nature constantly changed to prevent pain would be a world without consequences or meaningful action[^21].

**See also:** [Animal Death Before the Fall (Evolution vs Creation)](/categories/evolution#section-death-before-the-fall).
`
    },
    {
      id: "animal-suffering",
      title: "Animal Suffering",
      tags: ["Natural evil"],
      content: `
The suffering of animals is often counted the hardest form of the problem. Animals are not morally responsible, and on the scientific timeline predation, disease and extinction went on for hundreds of millions of years before human beings existed. William Rowe's example is a fawn trapped in a forest fire caused by lightning, which lies in agony for several days before it dies, unseen by anyone. He offered it as a case of suffering with no apparent point[^7][^22][^8].

Christian responses take several lines.

*   **The Fall and creation.** On a young-earth reading there was no animal death before Adam's sin, and Romans 8:20-22 describes the whole creation as subjected to frustration and groaning. Christians who accept an old earth, and with it animal death long before humanity, read the curse as falling on humanity's relationship to the ground rather than bringing death into the animal world[^23][^22].
*   **The capacity to suffer.** Some philosophers, drawing on neuroscience, argue that many animals lack the higher-order awareness that makes pain something suffered rather than merely registered. Michael Murray's *Nature Red in Tooth and Claw* (2008) sets out this view and others. The argument is contested, and it does not apply to apes and other mammals with developed brains[^24][^22].
*   **A world with its own laws.** A creation that develops by stable natural processes, including predation and natural selection, may be the only kind of world in which complex, conscious life can arise. On this view the cost is bound up with the good of a world that has its own order[^24][^8].
*   **Creation's renewal.** Isaiah's picture of the wolf living with the lamb (Isaiah 11:6-9) and Paul's hope that creation itself "will be liberated from its bondage to decay" (Romans 8:21) place animals within God's redemption. C. S. Lewis, in *The Problem of Pain*, gave a chapter to animal pain and speculated that animals may share in it[^25][^23][^26].
*   **God's care for animals.** Scripture describes God providing food for lions and ravens (Psalm 104:21, Job 38:39-41), and Jesus says that not one sparrow falls to the ground apart from the Father (Matthew 10:29)[^27][^28].

None of these answers is offered as complete. Most writers on the subject combine several partial answers and leave the remainder to the hope that creation will be renewed[^24][^8].
`
    },
    {
      id: "why-sin-continues",
      title: "Why God Permits Sin to Continue",
      tags: ["Moral evil"],
      content: `
If God is all-powerful and plans to defeat evil, why does He allow sin and suffering to continue in the present day? Why not eradicate it immediately? The Bible reveals several key reasons for this delay:

*   **God's Patient Mercy:** If God were to eradicate all sin and evil tonight at midnight, none of us would be alive tomorrow. God delays His final judgment to allow time for people to repent and receive His grace: "The Lord is not slow in keeping his promise... Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance" ([2 Peter 3:9](https://www.biblegateway.com/passage/?search=2+Peter+3%3A9&version=NIV)).

*   **Refinement of Believers:** In a world with no trials, sin, or pain, it would be impossible to cultivate virtues like courage, mercy, self-sacrifice, and forgiveness. God uses the presence of moral struggle to mature His people: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope" ([Romans 5:3-4](https://www.biblegateway.com/passage/?search=Romans+5%3A3-4&version=NIV))[^29][^30].

*   **Preservation of Human Freedom:** Instantly vaporizing or blocking every sinful act would destroy the moral agency God gave us. By allowing sin to run its course for a season, God honors the integrity of human choice while working within it.

*   **The Manifestation of His Glory:** The existence of sin allows for the display of God's most glorious attributes, such as His mercy, patience, justice, and self-sacrificing love, which would never be understood in a world that never fell. The supreme example is the cross: the greatest evil (killing the Son of God) was used by God to bring about the greatest good (the redemption of humanity) ([Genesis 50:20](https://www.biblegateway.com/passage/?search=Genesis+50%3A20&version=NIV))[^31]. Joseph's words in that verse use one verb for both intentions: *chashavtem alai ra'ah, Elohim chashavah letovah* (חֲשַׁבְתֶּם עָלַי רָעָה אֱלֹהִים חֲשָׁבָהּ לְטֹבָה, you planned evil against me; God planned it for good). The same event carries two purposes at once, the brothers' and God's[^32].


`
    },
    {
      id: "hiddenness-of-god",
      title: "If God Exists, Why Is He So Hidden?",
      tags: ["Suffering"],
      content: `
**The argument.** Closely related to the problem of evil is the objection pressed by J. L. Schellenberg: a loving God would make himself available to anyone who was open to a relationship, yet some people sincerely seek and do not believe, so a loving God does not exist[^33].

**The replies.**

* **Overwhelming evidence would remove something.** Philosophers such as Michael Murray and others argue that a God who was undeniably obvious would crush human freedom and moral development, because a person who could not doubt would obey out of fear or self-interest. Pascal argued in the same spirit that God gives enough light for those who want to see, and enough obscurity for those who do not.
* **God wants more than bare belief.** "You believe that there is one God. Good! Even the demons believe that, and shudder" (James 2:19). Israel saw the plagues and the sea divided and made a golden calf within weeks. Jesus says that some "will not be convinced even if someone rises from the dead" (Luke 16:31). Knowing that God exists is not the same as loving him, and Scripture cares about the second.
* **God is not as hidden as the objection supposes.** Scripture says he can be seen in creation (Romans 1:20) and is "not far from any one of us" (Acts 17:27), and promises that "you will seek me and find me when you seek me with all your heart" (Jeremiah 29:13). He came in person in Jesus. The cumulative evidence from creation, history and prophecy is one answer.

**What remains hard.** The objection has real force for those who have prayed sincerely and heard nothing, and Scripture does not conceal this experience: "Truly you are a God who has been hiding himself" (Isaiah 45:15), and "My God, my God, why have you forsaken me?" (Psalm 22:1). Those words are in the Bible's own prayers, and Jesus prayed the second from the cross. Faith in this sense is trust in the character of a God who has shown himself in Christ, in the absence of an explanation of each silence.

**See also:** [Why Do People Leave the Faith? (Is Belief in God Reasonable?)](/categories/is-belief-reasonable#section-why-people-leave).
`,
    },
    {
      id: "soul-making-theodicy",
      title: "The Soul-Making Theodicy",
      tags: ["Suffering"],
      content: `**Growth through trials:** God uses suffering to refine human souls[^34][^35].

• **The vale of soul-making:** A phrase from the poet John Keats, adopted by the philosopher John Hick for his Irenaean theodicy, this perspective views the world not as a perfect paradise, but as a classroom designed to develop moral and spiritual virtues[^36][^8].

• **The Joseph Principle:** What others intend for harm, God intends for a greater redemptive good ([Genesis 50:20](https://www.biblegateway.com/passage/?search=Genesis+50%3A20&version=NIV)).`
    },
    {
      id: "book-of-job",
      title: "The Book of Job",
      tags: ["Suffering"],
      content: `
The Book of Job is the Bible's longest treatment of innocent suffering, and it refuses the easy answers. Job is introduced as "blameless and upright" (Job 1:1), and God himself calls him so (1:8), so the book rules out from the start the idea that his suffering is a punishment[^37][^38].

*   **The question in heaven.** The accuser, *ha-satan* (הַשָּׂטָן, the adversary, with the article, so a title rather than a name), asks "Does Job fear God for nothing?" (1:9). The book tests whether a person can love God for God's sake rather than for his gifts[^39][^40].
*   **The friends' theology.** Eliphaz, Bildad and Zophar argue at length that suffering always follows sin, so Job must repent of something. God's verdict at the end is that they "have not spoken the truth about me, as my servant Job has" (42:7). The simple equation of suffering with guilt is the position the book condemns[^41][^38].
*   **Job's protest.** Job complains, accuses God and demands a hearing, and he is not condemned for it. His lament is treated as faithful speech addressed to God, in the same tradition as the psalms of lament[^41][^42].
*   **God's answer.** When God speaks from the storm (chapters 38 to 41) he does not explain the exchange in heaven. He asks Job where he was when the earth's foundations were laid, and takes him through creation from the stars to the wild animals and the great creatures Behemoth and Leviathan. The world is vaster than Job can see and God governs it. Job's response is "My ears had heard of you but now my eyes have seen you" (42:5)[^43][^42].
*   **Restoration.** God gives Job twice as much as he had before (42:10), but the book never presents this as payment that explains the suffering. The children who died are not brought back; Job has ten more[^38][^41].

The book supports the reply that limited human beings are not in a position to judge that suffering is pointless, since Job is never told the reason given in chapter 1[^10][^42]. It also sets a pattern for comforting the suffering: the friends did best in the first seven days, when they sat with Job in silence (2:13)[^44].

**See also:** [Job's Children and Psalm 137 (Is God Evil?)](/categories/god-evil#section-psalm-137-and-jobs-children).
`
    },
    {
      id: "gods-solidarity",
      title: "God's Solidarity in Suffering",
      tags: ["Suffering"],
      content: `**He is with us:** God did not remain detached; He entered our pain[^45].

• **The suffering savior:** Through the Incarnation, Jesus Christ experienced physical torture, emotional betrayal, and death on the cross, showing that God is not indifferent to our tears[^46][^47].

• **The future hope:** The empty tomb guarantees that suffering is not the final chapter. Revelation 21:4 promises the complete, eternal eradication of pain and death[^48].

**See also:** [Is It Just for an Innocent Man to Die for the Guilty? (Jesus' Claims)](/categories/jesus#section-is-the-atonement-just).
`
    }
  ],
              sources: [
    "1. [Academic] Internet Encyclopedia of Philosophy. 'The Logical Problem of Evil.' https://iep.utm.edu/evil-log/",
    "2. [Apologetics] The Gospel Coalition. The Problem of Evil. https://www.thegospelcoalition.org/essay/the-problem-of-evil/",
    "3. [Apologetics] Reasonable Faith. 'The Problem of Evil.' https://www.reasonablefaith.org/writings/popular-writings/existence-natureof-god/the-problem-of-evil",
    "4. [Apologetics] GotQuestions.org. Why does God allow evil? https://www.gotquestions.org/God-allow-evil.html",
    "5. [Apologetics] Reasonable Faith. 'Can We Be Good Without God?' https://www.reasonablefaith.org/writings/popular-writings/existence-natureof-god/can-we-be-good-without-god",
    "6. [Apologetics] GotQuestions.org. What is the problem of evil? Overview of the objection and the standard replies. https://www.gotquestions.org/problem-of-evil.html",
    "7. [Academic] Internet Encyclopedia of Philosophy. The Evidential Problem of Evil. The probabilistic form of the objection. https://iep.utm.edu/evil-evi/",
    "8. [Academic] Stanford Encyclopedia of Philosophy. 'The Problem of Evil.' https://plato.stanford.edu/entries/evil/",
    "9. [Wikipedia] 'Alvin Plantinga's free-will defense.' https://en.wikipedia.org/wiki/Alvin_Plantinga%27s_free-will_defense",
    "10. [Academic] Stanford Encyclopedia of Philosophy. Skeptical Theism. The reply from limits on human insight into divine reasons. https://plato.stanford.edu/entries/skeptical-theism/",
    "11. [Commentary] Bible Hub. 'Commentaries on Isaiah 55:8.' https://biblehub.com/commentaries/isaiah/55-8.htm",
    "12. [Primary Source] New Advent, Church Fathers. Augustine, Enchiridion, chapters 10 to 14. https://www.newadvent.org/fathers/1302.htm",
    "13. [Wikipedia] 'Absence of good.' The privation theory of evil from Augustine to Aquinas. https://en.wikipedia.org/wiki/Absence_of_good",
    "14. [Academic] Stanford Encyclopedia of Philosophy. 'The Concept of Evil.' https://plato.stanford.edu/entries/concept-evil/",
    "15. [Primary Source] New Advent, Church Fathers. Augustine, Confessions, Book 7. https://www.newadvent.org/fathers/110107.htm",
    "16. [Primary Source] Thomas Aquinas. Summa Theologiae I, Q. 48: The Distinction of Things in Particular (evil). https://www.newadvent.org/summa/1048.htm",
    "17. [Apologetics] GotQuestions. 'What is Free Will?' https://www.gotquestions.org/free-will.html",
    "18. [Academic] Stanford Encyclopedia of Philosophy. 'Omnipotence.' https://plato.stanford.edu/entries/omnipotence/",
    "19. [Wikipedia] 'Omnipotence.' https://en.wikipedia.org/wiki/Omnipotence",
    "20. [Apologetics] GotQuestions. 'What is the difference between natural evil and moral evil?' https://www.gotquestions.org/natural-moral-evil.html",
    "21. [Christian Source] C.S. Lewis Institute. 'C.S. Lewis on the Problem of Pain.' https://www.cslewisinstitute.org/resources/c-s-lewis-on-the-problem-of-pain/",
    "22. [Wikipedia] 'Problem of evil.' Including Rowe's fawn and the problem of animal suffering. https://en.wikipedia.org/wiki/Problem_of_evil",
    "23. [Commentary] Bible Hub. 'Commentaries on Romans 8:20.' https://biblehub.com/commentaries/romans/8-20.htm",
    "24. [Academic] Notre Dame Philosophical Reviews. Review of Michael J. Murray, Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering. https://ndpr.nd.edu/reviews/nature-red-in-tooth-and-claw-theism-and-the-problem-of-animal-suffering/",
    "25. [Commentary] Bible Hub. 'Commentaries on Isaiah 11:6.' https://biblehub.com/commentaries/isaiah/11-6.htm",
    "26. [Wikipedia] 'The Problem of Pain.' Lewis's 1940 book, including its chapter on animal pain. https://en.wikipedia.org/wiki/The_Problem_of_Pain",
    "27. [Commentary] Bible Hub. 'Commentaries on Matthew 10:29.' https://biblehub.com/commentaries/matthew/10-29.htm",
    "28. [Commentary] Bible Hub. 'Commentaries on Psalm 104:21.' https://biblehub.com/commentaries/psalms/104-21.htm",
    "29. [Apologetics] Ligonier Ministries. 'The Eternal Weight of Glory.' https://learn.ligonier.org/devotionals/eternal-weight-of-glory",
    "30. [Commentary] Commentaries on Romans 5:3. Bible Hub. https://biblehub.com/commentaries/romans/5-3.htm",
    "31. [Apologetics] Desiring God. 'Suffering and the Sovereignty of God (John Piper).' https://www.desiringgod.org/books/suffering-and-the-sovereignty-of-god",
    "32. [Reference] Bible Hub Interlinear Bible. 'Genesis 50:20.' https://biblehub.com/interlinear/genesis/50-20.htm",
    "33. [Academic] Stanford Encyclopedia of Philosophy. 'Divine Hiddenness.' https://plato.stanford.edu/entries/divine-hiddenness/",
    "34. [Commentary] Bible Hub. 'Commentaries on Hebrews 12:5.' https://biblehub.com/commentaries/hebrews/12-5.htm",
    "35. [Commentary] Bible Hub. What is the purpose of God granting free will? https://biblehub.com/q/why_does_god_grant_free_will.htm",
    "36. [Wikipedia] Theodicy. The main attempts to reconcile divine goodness with evil. https://en.wikipedia.org/wiki/Theodicy",
    "37. [Commentary] Bible Hub. 'Commentaries on Job 1:1.' https://biblehub.com/commentaries/job/1-1.htm",
    "38. [Wikipedia] 'Book of Job.' https://en.wikipedia.org/wiki/Book_of_Job",
    "39. [Commentary] Bible Hub. 'Commentaries on Job 1:9.' https://biblehub.com/commentaries/job/1-9.htm",
    "40. [Lexicon] Bible Hub. Hebrew 7854, satan (adversary). https://biblehub.com/hebrew/7854.htm",
    "41. [Commentary] Bible Hub. 'Commentaries on Job 42:7.' https://biblehub.com/commentaries/job/42-7.htm",
    "42. [Christian Source] BibleProject. 'Book of Job Summary.' https://bibleproject.com/explore/video/job/",
    "43. [Commentary] Bible Hub. 'Commentaries on Job 38:4.' https://biblehub.com/commentaries/job/38-4.htm",
    "44. [Commentary] Bible Hub. 'Commentaries on Job 2:13.' https://biblehub.com/commentaries/job/2-13.htm",
    "45. [Commentary] Bible Hub. 'Commentaries on Psalm 46:1.' https://biblehub.com/commentaries/psalms/46-1.htm",
    "46. [Wikipedia] Crucifixion of Jesus. The claim that God enters the suffering rather than standing outside it. https://en.wikipedia.org/wiki/Crucifixion_of_Jesus",
    "47. [Commentary] Commentaries on Hebrews 4:15. Bible Hub. https://biblehub.com/commentaries/hebrews/4-15.htm",
    "48. [Commentary] Bible Hub. Revelation 21:4 Commentaries. https://biblehub.com/commentaries/revelation/21-4.htm"
  ],
  lastUpdated: "30-10-2026",
}