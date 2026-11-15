import type { Topic } from './types'

export const FREE_WILL: Topic = {
  id: "free-will",
  title: "The Defense of Free Will",
  description: "A comprehensive exploration of human free will, moral responsibility, and its harmonious coexistence with the absolute sovereignty of God.",
  icon: "User",
  color: "blue",
  tags: ["Theology", "Apologetics", "Free Will", "Sovereignty", "Philosophy"],
  verses: [
    { reference: "Deuteronomy 30:19", text: "I call heaven and earth to witness against you today, that I have set before you life and death, blessing and curse. Therefore choose life, that you and your offspring may live." },
    { reference: "Joshua 24:15", text: "And if it is evil in your eyes to serve the LORD, choose this day whom you will serve..." },
    { reference: "Proverbs 16:9", text: "The heart of man plans his way, but the LORD establishes his steps." },
    { reference: "Genesis 50:20", text: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives." },
    { reference: "Philippians 2:12-13", text: "Continue to work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfil his good purpose." }
  ],
  tldr: "Human beings possess genuine moral agency, which is essential for responsibility, for love, and for rational thought. Scripture affirms both that human choices are truly ours and that God governs all things. Christians divide over how these fit together, with libertarians, compatibilists and Molinists each offering a model, and each facing substantial objections.",
  content: `
Free will denotes the capacity of human beings to make genuine, uncoerced choices that shape their character, their relationships, and their eternal destinies[^1]. Without that capacity the universe would resemble a mechanistic system devoid of moral significance or authentic personal interaction[^2].

Two separate disputes are usually run together. The philosophical dispute concerns whether free will is compatible with determinism at all, a question debated independently of theology and on which philosophers remain divided[^3][^4]. The theological dispute is narrower, concerning in what sense human choices are ours given that God is sovereign. Both sides of the theological question affirm divine sovereignty and human responsibility, and disagree about the mechanism[^5].

<?viz free-will/spectrum?>
`,
  subtopics: [
    {
      id: "biblical-foundation",
      title: "The Biblical Foundation of Free Will",
      tags: ["Scripture"],
      content: `
The pages of Scripture are replete with commands and appeals that presuppose the reality of human choice[^6].

*   **The garden.** God placed the tree of the knowledge of good and evil in Eden and commanded that it not be eaten from, a command inherently requiring the ability to comply or rebel[^7].
*   **Covenant appeals.** God set before Israel life and death, blessing and curse, and instructed them to choose life. Joshua's challenge to choose this day whom they would serve loses its rhetorical and moral force if the hearers possessed no actual capacity to choose[^8][^9].
*   **The command is not too difficult.** Moses states that the commandment is not beyond reach or too hard, but very near, in the mouth and in the heart, so that it may be obeyed[^10].
*   **Prophetic pleading.** Ezekiel records God calling Israel to repent and turn from their offences, asking why they would die, and stating that He takes no pleasure in the death of anyone[^11].
*   **Apostolic preaching.** The New Testament demands repentance and faith, extends a genuine offer of salvation to whoever will come, and holds each person accountable at judgment, which presumes a real opportunity to have acted otherwise[^12].

These texts establish that humans are genuine agents whose choices are truly theirs and truly matter. They do not by themselves settle the metaphysics, since compatibilists read every one of them as fully consistent with their own position[^13].
`
    },
    {
      id: "case-for-predestination",
      title: "The Case for Predestination",
      tags: ["Scripture"],
      content: `
Reformed theology answers those texts with a second set, which it reads as teaching that God chooses who will be saved before they choose him. The doctrine is called predestination or unconditional election, and it is the confessional position of Presbyterian and Reformed churches[^14][^15][^16].

*   **Romans 9.** Paul cites God's choice of Jacob over Esau "before the twins were born or had done anything good or bad, in order that God's purpose in election might stand", and concludes that "it does not, therefore, depend on human desire or effort, but on God's mercy" (Romans 9:11, 16). He then raises the objection that God is unjust and answers it with the potter and the clay[^17][^18].
*   **Ephesians 1:4-5.** God "chose us in him before the creation of the world" and "predestined us for adoption". The verb is *proorizō* (προορίζω, to decide beforehand), from *pro* (before) and *horizō* (to mark out a boundary)[^19][^20].
*   **John 6:44.** "No one can come to me unless the Father who sent me draws them." The verb *helkō* (ἑλκύω, to draw, drag) is used of hauling a full net (John 21:6, 11) and of dragging Paul and Silas before the magistrates (Acts 16:19), and Reformed interpreters take it as an effective drawing rather than an invitation[^21][^22].
*   **Acts 13:48.** "All who were appointed for eternal life believed." The participle *tetagmenoi* (τεταγμένοι, having been appointed, set in order) places the appointing before the believing[^23][^24].
*   **Pharaoh's heart.** God tells Moses "I will harden his heart" (Exodus 4:21), and Paul quotes God's words to Pharaoh, "I raised you up for this very purpose" (Romans 9:17)[^25][^17].

**The Arminian and Catholic replies.** Those who hold to libertarian freedom read the same passages differently[^26][^27][^28].

*   Romans 9 is read as concerning nations and their roles in history rather than individual salvation. Malachi 1:2-3, which Paul quotes, speaks of Jacob and Esau as the peoples of Israel and Edom, and Romans 9:30-32 explains Israel's failure by its pursuing righteousness "not by faith"[^17][^27].
*   Ephesians 1 elects "in him". On this reading believers are chosen as a body in Christ, and what is predestined is the destiny of adoption for those who are in him, not which individuals will believe[^19].
*   John 12:32 uses the same verb: "I, when I am lifted up from the earth, will draw all people to myself." If *helkō* meant an irresistible drawing, the verse would teach that everyone is saved, so the drawing is taken as necessary but resistible[^21][^22].
*   *Tetagmenoi* in Acts 13:48 can be read as middle rather than passive, "as many as had set themselves towards eternal life", though most translations and commentators prefer the passive[^23][^24].
*   In the Exodus narrative Pharaoh's heart first grows hard and he hardens it himself (Exodus 8:15, 8:32) before the text says that the Lord hardened it (9:12). Three Hebrew verbs are used: *chazaq* (חָזַק, to make strong, firm), *kabed* (כָּבֵד, to make heavy) and *qashah* (קָשָׁה, to make hard). On this reading God's hardening confirms a choice Pharaoh had already made[^25][^29].

The Catholic Church teaches that God predestines no one to go to hell, and that his eternal plan includes each person's free response to grace[^30][^31]. The Reformed confessions hold that election is unconditional, but that those not elected are condemned for their own sin. The Canons of Dort (1619) were written against the five articles of the Remonstrants, the followers of Jacobus Arminius[^15][^14][^26].

Both sides accept that the Bible speaks of predestination. They disagree over whether election rests on faith God foresees or on his choice alone, and the question has divided careful interpreters since Augustine and Pelagius and again since Calvin and Arminius[^16][^27][^28].
`
    },
    {
      id: "philosophical-arguments",
      title: "Philosophical Arguments for Free Will",
      tags: ["Philosophy"],
      content: `
Several arguments are offered for libertarian freedom, each carrying force and each contested[^32].



**The argument from reason.** If every belief is the inevitable product of prior physical causes, then beliefs are caused rather than justified, including the belief in determinism itself. Versions of this argument were pressed by C.S. Lewis and later by Alvin Plantinga[^33]. Determinists reply that a causal process can be truth-tracking, since natural selection plausibly produces reliable cognitive faculties because accuracy aids survival[^34].

**The argument from deliberation.** Every human being experiences weighing alternatives, predicting outcomes, and reaching decisions. That universal and persistent intuition provides prima facie evidence of real agency[^35]. Compatibilists accept that the experience is veridical while denying that it demonstrates libertarian freedom, since a compatibilist account predicts the same felt sense of deliberating[^36].

**The argument from moral responsibility.** Praise and blame apply only to agents who could have done otherwise, which is why a falling rock is not held culpable for the damage it causes[^37][^38]. Frankfurt-style cases were designed to challenge exactly this, presenting scenarios in which an agent seems responsible despite being unable to do otherwise, and the resulting literature remains unresolved[^39][^40].

**The argument from creativity.** Composition and artistic expression bring something new into existence, which is difficult to reduce to mechanistic causes and reflects the creative freedom of the God in whose image humans are made[^41][^42].
`
    },
    {
      id: "moral-responsibility",
      title: "Moral Responsibility and Accountability",
      tags: ["Philosophy"],
      content: `
The most significant implication of free will concerns moral responsibility[^38][^39].

*   **Justice presupposes agency.** Human legal systems distinguish the culpable from the coerced and the sane from the incapacitated, distinctions that make sense only if some agents genuinely control their actions[^43][^38].
*   **Divine judgment presupposes it.** Scripture depicts God assessing thoughts, intentions and deliberate acts, judging with equity, which requires that the acts be genuinely the person's own[^44].
*   **Final separation as ratification.** Eternal separation from God is widely read as the confirmation of a sustained and freely maintained rejection rather than an arbitrary sentence, a reading more natural on libertarian assumptions than on compatibilist ones[^45].

Neither camp holds that humans are puppets. Compatibilists insist as strongly as libertarians that people act, deliberate and are rightly held responsible, and the disagreement concerns what makes that so[^46][^36].
`
    },
    {
      id: "the-choice-of-love",
      title: "The Choice of Love",
      tags: ["Love"],
      content: `
A theological argument distinct from the philosophical ones turns on the nature of love. Authentic love cannot be forced, programmed or coerced, and must be freely given[^47][^48].

God, who is love in His essence, created human beings for relationship with Him. A relationship guaranteed by construction would be something other than love, and a programmed affirmation offers no intimacy[^49]. The freedom to accept therefore entails the freedom to reject, and the risk of rebellion was the price of a universe containing creatures capable of genuine devotion[^50].

The strongest objection holds that God could have created beings who freely love Him without exception, since a choice freely made for good once is possible always. Plantinga answers by appealing to transworld depravity, the claim that such a world may not have been feasible for God to actualise, and whether that reply succeeds remains disputed[^51].

**See also:** [Why a Prohibition Was Necessary (The Tree of Knowledge)](/categories/tree-of-knowledge#section-why-a-prohibition).
`
    },
    {
      id: "free-will-defense",
      title: "The Free Will Defense against the Problem of Evil",
      tags: ["Problem of evil"],
      content: `
The most influential apologetic use of free will is Alvin Plantinga's Free Will Defense[^52][^51].

A world containing significantly free creatures is more valuable than one containing none, and God cannot create genuinely free creatures while determining that they never choose wrongly. To make moral good possible, God must permit the possibility of moral evil, and the source of that evil is the creature's misuse of freedom rather than God[^53][^54]. Scripture states directly that God tempts no one[^55].

The argument is a defense rather than a theodicy, aiming only to show that the existence of God and the existence of evil are not logically contradictory. It does not claim to state God's actual reasons for permitting any particular evil, and Plantinga was explicit on that point[^56].

It is widely regarded as having succeeded against the logical problem of evil, with most philosophers of religion including many atheists accepting that the bare incompatibility charge fails. The evidential problem, concerning whether the amount and distribution of suffering makes God's existence improbable, remains fully live and is where the contemporary debate sits[^53].

**See also:** [The Free Will Defense (The Problem of Evil)](/categories/problem-of-evil#section-free-will-defense).
`
    },
    {
      id: "libertarian-vs-compatibilism",
      title: "Libertarian Free Will vs. Compatibilism",
      tags: ["Philosophy"],
      content: `
This is the central disagreement within Christian theology, and both positions are held by serious orthodox theologians[^57][^58].

**Libertarian free will** asserts that a choice is genuinely free only if, given identical prior circumstances and internal states, the agent could have chosen otherwise. Choices are not fully determined by prior causes, including divine decree[^59][^60]. The principal objection is that a choice not determined by the agent's character and reasons appears random rather than authored, which is the luck objection and a serious difficulty for libertarian accounts[^60].

**Compatibilism** holds that a person acts freely when acting according to their own desires without external coercion, even if those desires were themselves determined. It is associated with the Reformed tradition and was defended in various forms by Francis Turretin and Jonathan Edwards, with Calvin often read the same way, though scholars debate whether his view fits the modern category[^61]. The principal objection is that if God determines the desires producing sinful choices, distancing God from the authorship of sin becomes difficult, and compatibilists answer with distinctions between primary and secondary causation and between permitting and causing[^62].

The Reformed position developed within a longer controversy running from Pelagianism and the response to it through to the Synod of Dort, and the categories of prevenient grace, total depravity and irresistible grace belong to that history[^63][^64][^65]. Arminian theology occupies the corresponding position on the other side, affirming that grace enables a genuine choice that can be resisted[^26][^66].
`
    },
    {
      id: "molinism",
      title: "The Molinist Approach and Middle Knowledge",
      tags: ["Sovereignty"],
      content: `
Molinism, developed by the sixteenth-century Jesuit Luis de Molina, proposes a third way[^67][^68].

<?viz free-will/molinist-order?>


God possesses three kinds of knowledge. Natural knowledge covers everything that could be, free knowledge covers everything that will be, and between them lies middle knowledge, covering what any free creature would freely do in any given circumstance. These are the counterfactuals of creaturely freedom[^69][^70].

By choosing to actualise a world whose full set of counterfactuals He knows, God ensures that His purposes are achieved entirely through genuinely free decisions[^71]. Applied to prophecy, this explains how God could know with certainty that Peter would deny Christ three times without causing it, since God knew what Peter would freely do in exactly those circumstances[^72].

The principal objection is the grounding problem. What makes a counterfactual of creaturely freedom true prior to God's decision to create? It cannot be God's will, or the choices are determined after all, and it cannot be the creature's actual choice, since the creature does not yet exist[^70][^73]. The debate traces back to medieval discussions of future contingents and the longstanding puzzle of reconciling infallible foreknowledge with freedom[^73][^74].
`
    },
    {
      id: "open-theism",
      title: "Open Theism",
      tags: ["Sovereignty"],
      content: `
Open theism takes the opposite route to Molinism. It was set out in *The Openness of God* (1994) by Clark Pinnock, Richard Rice, John Sanders, William Hasker and David Basinger, and popularised by Gregory Boyd. It holds that the future free choices of creatures do not yet exist to be known, so God knows the future partly as a range of possibilities rather than as a settled fact[^75][^76].

The case rests on texts read at face value[^75][^77]:

*   **God tests in order to find out.** After Abraham raises the knife, God says "now I know that you fear God" (Genesis 22:12)[^78].
*   **God is disappointed.** In Jeremiah 3:7 God says "I thought that after she had done all this she would return to me but she did not"[^79].
*   **God changes course.** God regretted making Saul king (1 Samuel 15:11) and relented over Nineveh when it repented (Jonah 3:10). The Hebrew verb in both is *nacham* (נָחַם, to be sorry, to relent)[^80][^81].

**The objections.** Classical theists, Calvinist and Arminian alike, raise four main replies[^77][^75].

*   Isaiah grounds God's uniqueness in his knowledge of the future: "I make known the end from the beginning, from ancient times, what is still to come" (Isaiah 46:10). The same book challenges idols to predict what will happen as proof that they are gods (Isaiah 41:21-23)[^82].
*   Jesus predicted free acts in detail, including Peter's three denials before the cock crowed and Judas' betrayal[^77].
*   The chapter that says God regretted making Saul king also says that God "is not a human being, that he should change his mind" (1 Samuel 15:29), using the same verb *nacham*. The passage signals that its language of regret describes God's response to events and is not meant to deny that he knew they would happen[^80][^81].
*   Read the open theist way, some texts would also limit God's knowledge of the present. In Genesis 3:9 God asks Adam "Where are you?", and in Genesis 18:21 he goes down to see whether the outcry against Sodom is true[^77][^75].

In 2003 the Evangelical Theological Society voted on expelling Pinnock and Sanders, on the charge that their views did not fit its statement on the inerrancy of Scripture. Expulsion needed a two-thirds majority. Pinnock was retained by a wide margin, and the motion against Sanders fell 27 votes short[^75][^83][^84]. Open theism remains a minority view within evangelicalism. Its supporters hold to the Trinity and the creeds, so critics usually class it as a serious error rather than a heresy in the creedal sense[^76][^77].

**See also:** [Other Major Errors (Heresies)](/categories/heresies-and-fallacies#section-other-heresies).
`
    },
    {
      id: "concurrence",
      title: "Sovereignty and Concurrence",
      tags: ["Sovereignty"],
      content: `
Scripture asserts both truths without resolving the mechanism, and the doctrine of concurrence names that fact[^85][^86].

<?viz free-will/tulip?>


<?viz free-will/systems?>


*   **Joseph.** His brothers acted from genuine malice and bear the guilt, and Joseph nonetheless states that what they intended for harm God intended for good. One event receives two complete descriptions[^87].
*   **The cross.** Acts 2:23 holds together God's deliberate plan and foreknowledge and the culpability of those who carried out the execution in a single sentence, and Acts 4:27-28 states that they did what God's power and will had decided beforehand[^20].
*   **Paul's instruction.** Believers are told to work out their own salvation with fear and trembling precisely because it is God who works in them to will and to act, so the human effort is grounded in divine working rather than opposed to it[^88].

God is described as doing whatever pleases Him and as declaring the end from the beginning, while human beings are treated throughout as fully responsible agents whose choices have real effect[^89][^82]. Concurrence holds that an action is entirely the agent's own and simultaneously entirely under God's providential governance, which describes what Scripture affirms rather than explaining how it operates[^48].

Collapsing the tension in either direction carries practical cost. Fatalism breeds passivity, and a God whose purposes depend on human cooperation is not the God of Scripture. Holding both sustains urgent action alongside genuine rest[^90].

**See also:** [Why Pray if God Already Has a Plan? (Prayer)](/categories/prayer#section-why-pray).
`
    }
  ],
              sources: [
    "1. [Academic] Stanford Encyclopedia of Philosophy. Free Will. The standard academic survey. https://plato.stanford.edu/entries/freewill/",
    "2. [Apologetics] C.S. Lewis Institute. Reflections: The Problem of Evil and the Necessity of Choice (quoting Mere Christianity). https://www.cslewisinstitute.org/resources/reflections-august-2007/",
    "3. [Academic] Internet Encyclopedia of Philosophy. Free Will. Survey of libertarian, compatibilist and hard determinist positions. https://iep.utm.edu/freewill/",
    "4. [Academic] Stanford Encyclopedia of Philosophy. Causal Determinism. The thesis at the centre of the dispute. https://plato.stanford.edu/entries/determinism-causal/",
    "5. [Apologetics] The Gospel Coalition. Divine Sovereignty and Human Freedom. Essay on efficacious divine control alongside human freedom. https://www.thegospelcoalition.org/essay/divine-sovereignty-human-freedom/",
    "6. [Apologetics] GotQuestions.org. What does the Bible say about free will? Overview of the biblical case for volitional choice. https://www.gotquestions.org/free-will.html",
    "7. [Commentary] Bible Hub. Genesis 2:17 Commentaries. https://biblehub.com/commentaries/genesis/2-17.htm",
    "8. [Commentary] Bible Hub. 'Commentaries on Deuteronomy 30:19.' https://biblehub.com/commentaries/deuteronomy/30-19.htm",
    "9. [Commentary] Bible Hub. 'Commentaries on Joshua 24:15.' https://biblehub.com/commentaries/joshua/24-15.htm",
    "10. [Commentary] Bible Hub. Deuteronomy 30:11 Commentaries. https://biblehub.com/commentaries/deuteronomy/30-11.htm",
    "11. [Commentary] Bible Hub. Ezekiel 18:32 Commentaries. https://biblehub.com/commentaries/ezekiel/18-32.htm",
    "12. [Commentary] Bible Hub. Acts 17:30 Commentaries. https://biblehub.com/commentaries/acts/17-30.htm",
    "13. [Christian Source] Monergism. Compatibilism. Collected Reformed treatments of freedom under divine sovereignty. https://www.monergism.com/topics/free-will/compatibilism",
    "14. [Primary Source] Orthodox Presbyterian Church. Westminster Confession of Faith, chapter 3: Of God's Eternal Decree. https://www.opc.org/wcf.html",
    "15. [Primary Source] Christian Reformed Church in North America. 'Canons of Dort.' https://www.crcna.org/welcome/beliefs/confessions/canons-dort",
    "16. [Wikipedia] 'Predestination in Calvinism.' https://en.wikipedia.org/wiki/Predestination_in_Calvinism",
    "17. [Commentary] Bible Hub. 'Commentaries on Romans 9:11.' https://biblehub.com/commentaries/romans/9-11.htm",
    "18. [Commentary] Bible Hub. 'Commentaries on Romans 9:16.' https://biblehub.com/commentaries/romans/9-16.htm",
    "19. [Commentary] Bible Hub. 'Commentaries on Ephesians 1:5.' https://biblehub.com/commentaries/ephesians/1-5.htm",
    "20. [Lexicon] Bible Hub. Greek 4309, proorizo, the verb rendered predestine. https://biblehub.com/greek/4309.htm",
    "21. [Commentary] Bible Hub. 'Commentaries on John 6:44.' https://biblehub.com/commentaries/john/6-44.htm",
    "22. [Lexicon] Bible Hub. Greek 1670, helkuo (to drag, draw). https://biblehub.com/greek/1670.htm",
    "23. [Commentary] Bible Hub. 'Commentaries on Acts 13:48.' https://biblehub.com/commentaries/acts/13-48.htm",
    "24. [Reference] Bible Hub Interlinear Bible. 'Acts 13:48.' https://biblehub.com/interlinear/acts/13-48.htm",
    "25. [Commentary] Bible Hub. 'Commentaries on Exodus 4:21.' https://biblehub.com/commentaries/exodus/4-21.htm",
    "26. [Wikipedia] Five Articles of Remonstrance. The Arminian statement of the disputed points. https://en.wikipedia.org/wiki/Five_Articles_of_Remonstrance",
    "27. [Wikipedia] 'Arminianism.' https://en.wikipedia.org/wiki/Arminianism",
    "28. [Apologetics] GotQuestions.org. 'Calvinism vs. Arminianism: which view is correct?' https://www.gotquestions.org/Calvinism-vs-Arminianism.html",
    "29. [Lexicon] Bible Hub. Hebrew 2388, chazaq (to be or grow firm, strong). https://biblehub.com/hebrew/2388.htm",
    "30. [Primary Source] Catechism of the Catholic Church 1020-1060. I believe in life everlasting, including 1037 on predestination to hell. https://www.vatican.va/archive/ENG0015/__P2O.HTM",
    "31. [Primary Source] Catechism of the Catholic Church 599-605. Christ's redemptive death in God's plan of salvation, including 600 on predestination and free response. https://www.vatican.va/archive/ENG0015/__P1O.HTM",
    "32. [Academic] Stanford Encyclopedia of Philosophy. Arguments for Incompatibilism. Includes the luck objection. https://plato.stanford.edu/entries/incompatibilism-arguments/",
    "33. [Wikipedia] Argument from reason. https://en.wikipedia.org/wiki/Argument_from_reason",
    "34. [Wikipedia] Evolutionary argument against naturalism. https://en.wikipedia.org/wiki/Evolutionary_argument_against_naturalism",
    "35. [Academic] Stanford Encyclopedia of Philosophy. Practical Reason. Deliberation as the exercise of rational agency. https://plato.stanford.edu/entries/practical-reason/",
    "36. [Academic] Stanford Encyclopedia of Philosophy. Compatibilism. The case that freedom and determinism are compatible. https://plato.stanford.edu/entries/compatibilism/",
    "37. [Wikipedia] Frankfurt cases (the principle of alternate possibilities). https://en.wikipedia.org/wiki/Frankfurt_cases",
    "38. [Academic] Stanford Encyclopedia of Philosophy. Moral Responsibility. Conditions for praise and blame. https://plato.stanford.edu/entries/moral-responsibility/",
    "39. [Academic] 'Moral Responsibility and the Principle of Alternative Possibilities.' Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/alternative-possibilities/",
    "40. [Wikipedia] 'Harry Frankfurt.' https://en.wikipedia.org/wiki/Harry_Frankfurt",
    "41. [Primary Source] 'Communion and Stewardship: Human Persons Created in the Image of God, 2004.' Holy See. https://www.vatican.va/roman_curia/congregations/cfaith/cti_documents/rc_con_cfaith_doc_20040723_communion-stewardship_en.html",
    "42. [Wikipedia] 'Image of God.' https://en.wikipedia.org/wiki/Image_of_God",
    "43. [Wikipedia] Culpability. The legal standard tracking degrees of responsibility. https://en.wikipedia.org/wiki/Culpability",
    "44. [Commentary] Bible Hub. Romans 2:6 Commentaries. https://biblehub.com/commentaries/romans/2-6.htm",
    "45. [Academic] Stanford Encyclopedia of Philosophy. Heaven and Hell in Christian Thought (free will theodicies of hell). https://plato.stanford.edu/entries/heaven-hell/",
    "46. [Wikipedia] Soft determinism. The compatibilist position under its older name. https://en.wikipedia.org/wiki/Soft_determinism",
    "47. [Apologetics] Greg Boyd, ReKnew. Why Did God Allow Evil? https://reknew.org/2015/02/why-did-god-allow-evil/",
    "48. [Academic] Stanford Encyclopedia of Philosophy. Divine Providence. How divine governance relates to creaturely action. https://plato.stanford.edu/entries/providence-divine/",
    "49. [Commentary] Bible Hub. 'Commentaries on 1 John 4:19.' https://biblehub.com/commentaries/1_john/4-19.htm",
    "50. [Commentary] Bible Hub. What is the purpose of God granting free will? https://biblehub.com/q/why_does_god_grant_free_will.htm",
    "51. [Wikipedia] Alvin Plantinga's free-will defense. https://en.wikipedia.org/wiki/Alvin_Plantinga%27s_free-will_defense",
    "52. [Academic] Internet Encyclopedia of Philosophy. The Logical Problem of Evil. Assesses the standing of the Free Will Defense. https://iep.utm.edu/evil-log/",
    "53. [Academic] 'Evidential Problem of Evil, The.' Internet Encyclopedia of Philosophy. https://www.iep.utm.edu/evil-evi/",
    "54. [Wikipedia] 'Theodicy.' https://en.wikipedia.org/wiki/Theodicy",
    "55. [Commentary] Bible Hub. James 1:13 Commentaries. https://biblehub.com/commentaries/james/1-13.htm",
    "56. [Academic] Stanford Encyclopedia of Philosophy. The Problem of Evil. The standard survey. https://plato.stanford.edu/entries/evil/",
    "57. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Controversies on Grace.' https://www.newadvent.org/cathen/06710a.htm",
    "58. [Wikipedia] Domingo Banez. The Dominican who opposed Molina on divine causality. https://en.wikipedia.org/wiki/Domingo_B%C3%A1%C3%B1ez",
    "59. [Wikipedia] Libertarianism (metaphysics). https://en.wikipedia.org/wiki/Libertarianism_(metaphysics)",
    "60. [Academic] Stanford Encyclopedia of Philosophy. Incompatibilist Theories of Free Will. The positive libertarian accounts. https://plato.stanford.edu/entries/incompatibilism-theories/",
    "61. [Apologetics] The Gospel Coalition (Themelios). Christological Arguments for Compatibilism in Reformed Theology. Calvin, Turretin and Edwards. https://www.thegospelcoalition.org/themelios/article/christological-arguments-for-compatibilism-in-reformed-theology/",
    "62. [Apologetics] Ligonier Ministries. The Westminster Confession of Faith (chapters 3 and 5). https://learn.ligonier.org/articles/westminster-confession-faith",
    "63. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Semipelagianism.' https://www.newadvent.org/cathen/13703a.htm",
    "64. [Wikipedia] Synod of Dort. The assembly that formalised the Reformed response to Arminianism. https://en.wikipedia.org/wiki/Synod_of_Dort",
    "65. [Wikipedia] 'Semi-Pelagianism.' https://en.wikipedia.org/wiki/Semi-Pelagianism",
    "66. [Apologetics] What is Arminianism? GotQuestions.org. https://www.gotquestions.org/arminianism.html",
    "67. [Academic] Freddoso. Molina, Luis de (1535–1600). Routledge Encyclopedia of Philosophy https://doi.org/10.4324/9780415249126-c024-1",
    "68. [Wikipedia] 'Luis de Molina.' https://en.wikipedia.org/wiki/Luis_de_Molina",
    "69. [Apologetics] GotQuestions.org. What is Molinism? Introduction to middle knowledge. https://www.gotquestions.org/Molinism.html",
    "70. [Academic] Internet Encyclopedia of Philosophy. Middle Knowledge (the grounding objection). https://iep.utm.edu/middlekn/",
    "71. [Academic] Stanford Encyclopedia of Philosophy. Foreknowledge and Free Will. The problem of infallible foreknowledge. https://plato.stanford.edu/entries/free-will-foreknowledge/",
    "72. [Encyclopedia] New Advent, Catholic Encyclopedia. 'Molinism.' https://www.newadvent.org/cathen/10437a.htm",
    "73. [Academic] Stanford Encyclopedia of Philosophy. Medieval Theories of Future Contingents. Historical background. https://plato.stanford.edu/entries/medieval-futcont/",
    "74. [Academic] Internet Encyclopedia of Philosophy. Foreknowledge and Free Will. Academic treatment of the surrounding problems. https://iep.utm.edu/foreknow/",
    "75. [Academic] Internet Encyclopedia of Philosophy. 'Open Theism.' https://iep.utm.edu/o-theism/",
    "76. [Wikipedia] 'Open theism.' https://en.wikipedia.org/wiki/Open_theism",
    "77. [Apologetics] GotQuestions.org. 'What is open theism?' https://www.gotquestions.org/open-theism.html",
    "78. [Commentary] Bible Hub. 'Commentaries on Genesis 22:12.' https://biblehub.com/commentaries/genesis/22-12.htm",
    "79. [Commentary] Bible Hub. 'Commentaries on Jeremiah 3:7.' https://biblehub.com/commentaries/jeremiah/3-7.htm",
    "80. [Commentary] Bible Hub. 'Commentaries on 1 Samuel 15:29.' https://biblehub.com/commentaries/1_samuel/15-29.htm",
    "81. [Lexicon] Bible Hub. Hebrew 5162, nacham (to be sorry, console oneself, relent). https://biblehub.com/hebrew/5162.htm",
    "82. [Commentary] Commentaries on Isaiah 46:10. Bible Hub. https://biblehub.com/commentaries/isaiah/46-10.htm",
    "83. [News] Southern Baptist Theological Seminary (Baptist Press). 'Theological society retains open theists Pinnock, Sanders.' https://www.sbts.edu/news/theological-society-retains-open-theists-pinnock-sanders/",
    "84. [News] The Gospel Coalition. 'Is Open Theism Still a Factor 10 Years after ETS Vote?' https://www.thegospelcoalition.org/article/is-open-theism-still-a-factor-10-years-after-ets-vote/",
    "85. [Wikipedia] Divine providence (concursus dei). https://en.wikipedia.org/wiki/Divine_providence",
    "86. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Divine Providence.' https://www.newadvent.org/cathen/12510a.htm",
    "87. [Commentary] Bible Hub. Genesis 50:20 Commentaries. https://biblehub.com/commentaries/genesis/50-20.htm",
    "88. [Commentary] Bible Hub. 'Commentaries on Philippians 2:13.' https://biblehub.com/commentaries/philippians/2-13.htm",
    "89. [Wikipedia] Attributes of God in Christianity. The classical attributes and their scriptural basis. https://en.wikipedia.org/wiki/Attributes_of_God_in_Christianity",
    "90. [Wikipedia] Fatalism. The position distinguished from providence, and its practical effect. https://en.wikipedia.org/wiki/Fatalism"
  ],
  lastUpdated: "30-10-2026"
}
