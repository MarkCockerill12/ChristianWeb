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
Free will denotes the capacity of human beings to make genuine, uncoerced choices that shape their character, their relationships, and their eternal destinies[^1][^2]. Without that capacity the universe would resemble a mechanistic system devoid of moral significance or authentic personal interaction[^3].

Two separate disputes are usually run together. The philosophical dispute concerns whether free will is compatible with determinism at all, a question debated independently of theology and on which philosophers remain divided[^4][^5]. The theological dispute is narrower, concerning in what sense human choices are ours given that God is sovereign. Both sides of the theological question affirm divine sovereignty and human responsibility, and disagree about the mechanism[^6].
`,
  subtopics: [
    {
      id: "biblical-foundation",
      title: "The Biblical Foundation of Free Will",
      tags: ["scripture", "responsibility", "old testament"],
      content: `
The pages of Scripture are replete with commands and appeals that presuppose the reality of human choice[^7].

*   **The garden.** God placed the tree of the knowledge of good and evil in Eden and commanded that it not be eaten from, a command inherently requiring the ability to comply or rebel[^8].
*   **Covenant appeals.** God set before Israel life and death, blessing and curse, and instructed them to choose life. Joshua's challenge to choose this day whom they would serve loses its rhetorical and moral force if the hearers possessed no actual capacity to choose[^9].
*   **The command is not too difficult.** Moses states that the commandment is not beyond reach or too hard, but very near, in the mouth and in the heart, so that it may be obeyed[^10].
*   **Prophetic pleading.** Ezekiel records God calling Israel to repent and turn from their offences, asking why they would die, and stating that He takes no pleasure in the death of anyone[^11].
*   **Apostolic preaching.** The New Testament demands repentance and faith, extends a genuine offer of salvation to whoever will come, and holds each person accountable at judgment, which presumes a real opportunity to have acted otherwise[^12].

These texts establish that humans are genuine agents whose choices are truly theirs and truly matter. They do not by themselves settle the metaphysics, since compatibilists read every one of them as fully consistent with their own position[^13].
`
    },
    {
      id: "philosophical-arguments",
      title: "Philosophical Arguments for Free Will",
      tags: ["philosophy", "argument from reason", "determinism"],
      content: `
Several arguments are offered for libertarian freedom, each carrying force and each contested[^14].

**The argument from reason.** If every belief is the inevitable product of prior physical causes, then beliefs are caused rather than justified, including the belief in determinism itself. Versions of this argument were pressed by C.S. Lewis and later by Alvin Plantinga[^15]. Determinists reply that a causal process can be truth-tracking, since natural selection plausibly produces reliable cognitive faculties because accuracy aids survival[^16].

**The argument from deliberation.** Every human being experiences weighing alternatives, predicting outcomes, and reaching decisions. That universal and persistent intuition provides prima facie evidence of real agency[^17][^18][^19]. Compatibilists accept that the experience is veridical while denying that it demonstrates libertarian freedom, since a compatibilist account predicts the same felt sense of deliberating[^20].

**The argument from moral responsibility.** Praise and blame apply only to agents who could have done otherwise, which is why a falling rock is not held culpable for the damage it causes[^21]. Frankfurt-style cases were designed to challenge exactly this, presenting scenarios in which an agent seems responsible despite being unable to do otherwise, and the resulting literature remains unresolved[^22].

**The argument from creativity.** Composition and artistic expression bring something new into existence, which is difficult to reduce to mechanistic causes and reflects the creative freedom of the God in whose image humans are made[^23].
`
    },
    {
      id: "moral-responsibility",
      title: "Moral Responsibility and Accountability",
      tags: ["ethics", "justice", "judgment"],
      content: `
The most significant implication of free will concerns moral responsibility[^24].

*   **Justice presupposes agency.** Human legal systems distinguish the culpable from the coerced and the sane from the incapacitated, distinctions that make sense only if some agents genuinely control their actions[^25].
*   **Divine judgment presupposes it.** Scripture depicts God assessing thoughts, intentions and deliberate acts, judging with equity, which requires that the acts be genuinely the person's own[^26].
*   **Final separation as ratification.** Eternal separation from God is widely read as the confirmation of a sustained and freely maintained rejection rather than an arbitrary sentence, a reading more natural on libertarian assumptions than on compatibilist ones[^27].

Neither camp holds that humans are puppets. Compatibilists insist as strongly as libertarians that people act, deliberate and are rightly held responsible, and the disagreement concerns what makes that so[^28][^29].
`
    },
    {
      id: "the-choice-of-love",
      title: "The Choice of Love",
      tags: ["love", "relationship", "theology"],
      content: `
A theological argument distinct from the philosophical ones turns on the nature of love. Authentic love cannot be forced, programmed or coerced, and must be freely given[^30].

God, who is love in His essence, created human beings for relationship with Him. A relationship guaranteed by construction would be something other than love, and a programmed affirmation offers no intimacy[^31]. The freedom to accept therefore entails the freedom to reject, and the risk of rebellion was the price of a universe containing creatures capable of genuine devotion[^32].

The strongest objection holds that God could have created beings who freely love Him without exception, since a choice freely made for good once is possible always. Plantinga answers by appealing to transworld depravity, the claim that such a world may not have been feasible for God to actualise, and whether that reply succeeds remains disputed[^33].
`
    },
    {
      id: "free-will-defense",
      title: "The Free Will Defense against the Problem of Evil",
      tags: ["problem of evil", "plantinga", "philosophy"],
      content: `
The most influential apologetic use of free will is Alvin Plantinga's Free Will Defense[^34].

A world containing significantly free creatures is more valuable than one containing none, and God cannot create genuinely free creatures while determining that they never choose wrongly. To make moral good possible, God must permit the possibility of moral evil, and the source of that evil is the creature's misuse of freedom rather than God[^35]. Scripture states directly that God tempts no one[^36].

The argument is a defense rather than a theodicy, aiming only to show that the existence of God and the existence of evil are not logically contradictory. It does not claim to state God's actual reasons for permitting any particular evil, and Plantinga was explicit on that point[^37].

It is widely regarded as having succeeded against the logical problem of evil, with most philosophers of religion including many atheists accepting that the bare incompatibility charge fails. The evidential problem, concerning whether the amount and distribution of suffering makes God's existence improbable, remains fully live and is where the contemporary debate sits[^38].
`
    },
    {
      id: "libertarian-vs-compatibilism",
      title: "Libertarian Free Will vs. Compatibilism",
      tags: ["libertarian", "compatibilism", "reformed"],
      content: `
This is the central disagreement within Christian theology, and both positions are held by serious orthodox theologians[^39].

**Libertarian free will** asserts that a choice is genuinely free only if, given identical prior circumstances and internal states, the agent could have chosen otherwise. Choices are not fully determined by prior causes, including divine decree[^40]. The principal objection is that a choice not determined by the agent's character and reasons appears random rather than authored, which is the luck objection and a serious difficulty for libertarian accounts[^41].

**Compatibilism** holds that a person acts freely when acting according to their own desires without external coercion, even if those desires were themselves determined. It is associated with the Reformed tradition and was defended christologically by Calvin, Turretin and Edwards[^42]. The principal objection is that if God determines the desires producing sinful choices, distancing God from the authorship of sin becomes difficult, and compatibilists answer with distinctions between primary and secondary causation and between permitting and causing[^43].

The Reformed position developed within a longer controversy running from Pelagianism and the response to it through to the Synod of Dort, and the categories of prevenient grace, total depravity and irresistible grace belong to that history[^44]. Arminian theology occupies the corresponding position on the other side, affirming that grace enables a genuine choice that can be resisted[^45].
`
    },
    {
      id: "molinism",
      title: "The Molinist Approach and Middle Knowledge",
      tags: ["molinism", "middle knowledge", "foreknowledge"],
      content: `
Molinism, developed by the sixteenth-century Jesuit Luis de Molina, proposes a third way[^46][^47].

God possesses three kinds of knowledge. Natural knowledge covers everything that could be, free knowledge covers everything that will be, and between them lies middle knowledge, covering what any free creature would freely do in any given circumstance. These are the counterfactuals of creaturely freedom[^48].

By choosing to actualise a world whose full set of counterfactuals He knows, God ensures that His purposes are achieved entirely through genuinely free decisions[^49]. Applied to prophecy, this explains how God could know with certainty that Peter would deny Christ three times without causing it, since God knew what Peter would freely do in exactly those circumstances[^50].

The principal objection is the grounding problem. What makes a counterfactual of creaturely freedom true prior to God's decision to create? It cannot be God's will, or the choices are determined after all, and it cannot be the creature's actual choice, since the creature does not yet exist[^51]. The debate traces back to medieval discussions of future contingents and the longstanding puzzle of reconciling infallible foreknowledge with freedom[^52].
`
    },
    {
      id: "concurrence",
      title: "Sovereignty and Concurrence",
      tags: ["sovereignty", "providence", "concurrence"],
      content: `
Scripture asserts both truths without resolving the mechanism, and the doctrine of concurrence names that fact[^53].

*   **Joseph.** His brothers acted from genuine malice and bear the guilt, and Joseph nonetheless states that what they intended for harm God intended for good. One event receives two complete descriptions[^54].
*   **The cross.** Acts 2:23 holds together God's deliberate plan and foreknowledge and the culpability of those who carried out the execution in a single sentence, and Acts 4:27-28 states that they did what God's power and will had decided beforehand[^55].
*   **Paul's instruction.** Believers are told to work out their own salvation with fear and trembling precisely because it is God who works in them to will and to act, so the human effort is grounded in divine working rather than opposed to it[^56].

God is described as doing whatever pleases Him and as declaring the end from the beginning, while human beings are treated throughout as fully responsible agents whose choices have real effect[^57]. Concurrence holds that an action is entirely the agent's own and simultaneously entirely under God's providential governance, which describes what Scripture affirms rather than explaining how it operates[^58].

Collapsing the tension in either direction carries practical cost. Fatalism breeds passivity, and a God whose purposes depend on human cooperation is not the God of Scripture. Holding both sustains urgent action alongside genuine rest[^59].
`
    }
  ],
          sources: [
    "1. [Apologetics] GotQuestions.org. What does the Bible say about free will? Overview of the biblical case for volitional choice. https://www.gotquestions.org/free-will.html",
    "2. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Causal Determinism. The thesis at the centre of the dispute. https://plato.stanford.edu/entries/determinism-causal/",
    "3. [Reference] Wikipedia. Determinism. The thesis that every event is necessitated by prior causes. https://en.wikipedia.org/wiki/Determinism",
    "4. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Free Will. The standard academic survey. https://plato.stanford.edu/entries/freewill/",
    "5. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Free Will. Survey of libertarian, compatibilist and hard determinist positions. https://iep.utm.edu/freewill/",
    "6. [Evangelical] The Gospel Coalition. Divine Sovereignty and Human Freedom. Essay on efficacious divine control alongside human freedom. https://www.thegospelcoalition.org/essay/divine-sovereignty-human-freedom/",
    "7. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Action. The philosophy of what makes something an action rather than an event. https://plato.stanford.edu/entries/action/",
    "8. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Intention. The mental state distinguishing action from mere behaviour. https://plato.stanford.edu/entries/intention/",
    "9. [Commentary] Bible Hub. 'Commentaries on Deuteronomy 30:19.' https://biblehub.com/commentaries/deuteronomy/30-19.htm",
    "10. [Commentary] Bible Hub. 'Commentaries on Joshua 24:15.' https://biblehub.com/commentaries/joshua/24-15.htm",
    "11. [Reference] Wikipedia. Boethius. The philosopher who framed the foreknowledge problem for the medievals. https://en.wikipedia.org/wiki/Boethius",
    "12. [Reference] Wikipedia. Anselm of Canterbury. A further medieval treatment of freedom and grace. https://en.wikipedia.org/wiki/Anselm_of_Canterbury",
    "13. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Compatibilism. The case that freedom and determinism are compatible. https://plato.stanford.edu/entries/compatibilism/",
    "14. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Arguments for Incompatibilism. Includes the luck objection. https://plato.stanford.edu/entries/incompatibilism-arguments/",
    "15. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Omniscience. The attribute at issue in the foreknowledge debate. https://plato.stanford.edu/entries/omniscience/",
    "16. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Foreknowledge and Free Will. Academic treatment of the surrounding problems. https://iep.utm.edu/foreknow/",
    "17. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Moral Responsibility. Conditions for praise and blame. https://plato.stanford.edu/entries/moral-responsibility/",
    "18. [Lexical] Bible Hub. Greek 2309, thelo, the verb of willing and choosing. https://biblehub.com/greek/2309.htm",
    "19. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Fatalism. The position distinguished from determinism and providence. https://plato.stanford.edu/entries/fatalism/",
    "20. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Divine Providence. How divine governance relates to creaturely action. https://plato.stanford.edu/entries/providence-divine/",
    "21. [Reference] Wikipedia. Harry Frankfurt. The philosopher behind the counterexamples. https://en.wikipedia.org/wiki/Harry_Frankfurt",
    "22. [Lexical] Bible Hub. Greek 4309, proorizo, the verb rendered predestine. https://biblehub.com/greek/4309.htm",
    "23. [Reference] Wikipedia. Soft determinism. The compatibilist position under its older name. https://en.wikipedia.org/wiki/Soft_determinism",
    "24. [Reformed] Monergism. Compatibilism. Collected Reformed treatments of freedom under divine sovereignty. https://www.monergism.com/topics/free-will/compatibilism",
    "25. [Reference] Wikipedia. Benjamin Libet. The researcher whose experiments are most cited in that debate. https://en.wikipedia.org/wiki/Benjamin_Libet",
    "26. [Reference] Wikipedia. Quantum indeterminacy. The physical indeterminism sometimes invoked for freedom. https://en.wikipedia.org/wiki/Quantum_indeterminacy",
    "27. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Practical Reason. Deliberation as the exercise of rational agency. https://plato.stanford.edu/entries/practical-reason/",
    "28. [Peer-Reviewed] The Gospel Coalition (Themelios). Christological Arguments for Compatibilism in Reformed Theology. Calvin, Turretin and Edwards. https://www.thegospelcoalition.org/themelios/article/christological-arguments-for-compatibilism-in-reformed-theology/",
    "29. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Weakness of Will. Acting against one's own judgment. https://plato.stanford.edu/entries/weakness-will/",
    "30. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Controversies on Grace.' https://www.newadvent.org/cathen/06710a.htm",
    "31. [Lexical] Bible Hub. Greek 1586, eklegomai, the verb rendered choose or elect. https://biblehub.com/greek/1586.htm",
    "32. [Commentary] Bible Hub. 'Commentaries on 1 John 4:19.' https://biblehub.com/commentaries/1_john/4-19.htm",
    "33. [Peer-Reviewed] Internet Encyclopedia of Philosophy. The Logical Problem of Evil. Assesses the standing of the Free Will Defense. https://iep.utm.edu/evil-log/",
    "34. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. The Problem of Evil. The standard survey. https://plato.stanford.edu/entries/evil/",
    "35. [Reference] Wikipedia. Theodicy. The main attempts to reconcile God's goodness with evil. https://en.wikipedia.org/wiki/Theodicy",
    "36. [Reference] Wikipedia. Five Articles of Remonstrance. The Arminian statement of the disputed points. https://en.wikipedia.org/wiki/Five_Articles_of_Remonstrance",
    "37. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. The Concept of Evil. Philosophical analysis of what evil is. https://plato.stanford.edu/entries/concept-evil/",
    "38. [Reference] Wikipedia. Open theism. The position that the future is partly open even to God. https://en.wikipedia.org/wiki/Open_theism",
    "39. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Semipelagianism.' https://www.newadvent.org/cathen/13703a.htm",
    "40. [Reference] Wikipedia. Predestination in Calvinism. The doctrine as formulated in the Reformed tradition. https://en.wikipedia.org/wiki/Predestination_in_Calvinism",
    "41. [Reference] Wikipedia. Corporate election. A further proposal on how election operates. https://en.wikipedia.org/wiki/Corporate_election",
    "42. [Reference] Wikipedia. Synod of Dort. The assembly that formalised the Reformed response to Arminianism. https://en.wikipedia.org/wiki/Synod_of_Dort",
    "43. [Reference] Wikipedia. Semi-Pelagianism. The intermediate position and its rejection. https://en.wikipedia.org/wiki/Semi-Pelagianism",
    "44. [Apologetics] GotQuestions.org. What is Molinism? Introduction to middle knowledge. https://www.gotquestions.org/Molinism.html",
    "45. [Reference] Wikipedia. Luis de Molina. The Jesuit theologian who developed the system. https://en.wikipedia.org/wiki/Luis_de_Molina",
    "46. [Apologetics] Reasonable Faith. Molinism and the Soteriological Problem of Evil. A leading Molinist's treatment. https://www.reasonablefaith.org/writings/question-answer/molinism-and-the-soteriological-problem-of-evil",
    "47. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Foreknowledge and Free Will. The problem of infallible foreknowledge. https://plato.stanford.edu/entries/free-will-foreknowledge/",
    "48. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Medieval Theories of Future Contingents. Historical background. https://plato.stanford.edu/entries/medieval-futcont/",
    "49. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Molinism.' https://www.newadvent.org/cathen/10437a.htm",
    "50. [Reference] Wikipedia. Domingo Banez. The Dominican who opposed Molina on divine causality. https://en.wikipedia.org/wiki/Domingo_B%C3%A1%C3%B1ez",
    "51. [Reference] Wikipedia. Divine simplicity. The classical doctrine constraining accounts of divine knowledge. https://en.wikipedia.org/wiki/Divine_simplicity",
    "52. [Reference] Wikipedia. Attributes of God in Christianity. The classical attributes and their scriptural basis. https://en.wikipedia.org/wiki/Attributes_of_God_in_Christianity",
    "53. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. God and Other Necessary Beings. The metaphysics underlying divine knowledge. https://plato.stanford.edu/entries/god-necessary-being/",
    "54. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Jansenius and Jansenism.' https://www.newadvent.org/cathen/08285a.htm",
    "55. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Incompatibilist Theories of Free Will. The positive libertarian accounts. https://plato.stanford.edu/entries/incompatibilism-theories/",
    "56. [Commentary] Bible Hub. 'Commentaries on Philippians 2:13.' https://biblehub.com/commentaries/philippians/2-13.htm",
    "57. [Reference] Wikipedia. Culpability. The legal standard tracking degrees of responsibility. https://en.wikipedia.org/wiki/Culpability",
    "58. [Reference] Wikipedia. Occasionalism. The rejected account making God the sole efficient cause. https://en.wikipedia.org/wiki/Occasionalism",
    "59. [Reference] Wikipedia. Fatalism. The position distinguished from providence, and its practical effect. https://en.wikipedia.org/wiki/Fatalism"
  ],
  lastUpdated: "07-08-2026"
}
