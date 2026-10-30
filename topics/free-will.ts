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
      id: "philosophical-arguments",
      title: "Philosophical Arguments for Free Will",
      tags: ["Philosophy"],
      content: `
Several arguments are offered for libertarian freedom, each carrying force and each contested[^14].



**The argument from reason.** If every belief is the inevitable product of prior physical causes, then beliefs are caused rather than justified, including the belief in determinism itself. Versions of this argument were pressed by C.S. Lewis and later by Alvin Plantinga[^15]. Determinists reply that a causal process can be truth-tracking, since natural selection plausibly produces reliable cognitive faculties because accuracy aids survival[^16].

**The argument from deliberation.** Every human being experiences weighing alternatives, predicting outcomes, and reaching decisions. That universal and persistent intuition provides prima facie evidence of real agency[^17]. Compatibilists accept that the experience is veridical while denying that it demonstrates libertarian freedom, since a compatibilist account predicts the same felt sense of deliberating[^18].

**The argument from moral responsibility.** Praise and blame apply only to agents who could have done otherwise, which is why a falling rock is not held culpable for the damage it causes[^19]. Frankfurt-style cases were designed to challenge exactly this, presenting scenarios in which an agent seems responsible despite being unable to do otherwise, and the resulting literature remains unresolved[^20].

**The argument from creativity.** Composition and artistic expression bring something new into existence, which is difficult to reduce to mechanistic causes and reflects the creative freedom of the God in whose image humans are made[^21].
`
    },
    {
      id: "moral-responsibility",
      title: "Moral Responsibility and Accountability",
      tags: ["Philosophy"],
      content: `
The most significant implication of free will concerns moral responsibility[^22].

*   **Justice presupposes agency.** Human legal systems distinguish the culpable from the coerced and the sane from the incapacitated, distinctions that make sense only if some agents genuinely control their actions[^23].
*   **Divine judgment presupposes it.** Scripture depicts God assessing thoughts, intentions and deliberate acts, judging with equity, which requires that the acts be genuinely the person's own[^24].
*   **Final separation as ratification.** Eternal separation from God is widely read as the confirmation of a sustained and freely maintained rejection rather than an arbitrary sentence, a reading more natural on libertarian assumptions than on compatibilist ones[^25].

Neither camp holds that humans are puppets. Compatibilists insist as strongly as libertarians that people act, deliberate and are rightly held responsible, and the disagreement concerns what makes that so[^26].
`
    },
    {
      id: "the-choice-of-love",
      title: "The Choice of Love",
      tags: ["Love"],
      content: `
A theological argument distinct from the philosophical ones turns on the nature of love. Authentic love cannot be forced, programmed or coerced, and must be freely given[^27].

God, who is love in His essence, created human beings for relationship with Him. A relationship guaranteed by construction would be something other than love, and a programmed affirmation offers no intimacy[^28]. The freedom to accept therefore entails the freedom to reject, and the risk of rebellion was the price of a universe containing creatures capable of genuine devotion[^29].

The strongest objection holds that God could have created beings who freely love Him without exception, since a choice freely made for good once is possible always. Plantinga answers by appealing to transworld depravity, the claim that such a world may not have been feasible for God to actualise, and whether that reply succeeds remains disputed[^30].
`
    },
    {
      id: "free-will-defense",
      title: "The Free Will Defense against the Problem of Evil",
      tags: ["Problem of evil"],
      content: `
The most influential apologetic use of free will is Alvin Plantinga's Free Will Defense[^31].

A world containing significantly free creatures is more valuable than one containing none, and God cannot create genuinely free creatures while determining that they never choose wrongly. To make moral good possible, God must permit the possibility of moral evil, and the source of that evil is the creature's misuse of freedom rather than God[^32]. Scripture states directly that God tempts no one[^33].

The argument is a defense rather than a theodicy, aiming only to show that the existence of God and the existence of evil are not logically contradictory. It does not claim to state God's actual reasons for permitting any particular evil, and Plantinga was explicit on that point[^34].

It is widely regarded as having succeeded against the logical problem of evil, with most philosophers of religion including many atheists accepting that the bare incompatibility charge fails. The evidential problem, concerning whether the amount and distribution of suffering makes God's existence improbable, remains fully live and is where the contemporary debate sits[^35].
`
    },
    {
      id: "libertarian-vs-compatibilism",
      title: "Libertarian Free Will vs. Compatibilism",
      tags: ["Philosophy"],
      content: `
This is the central disagreement within Christian theology, and both positions are held by serious orthodox theologians[^36][^37].

**Libertarian free will** asserts that a choice is genuinely free only if, given identical prior circumstances and internal states, the agent could have chosen otherwise. Choices are not fully determined by prior causes, including divine decree[^38]. The principal objection is that a choice not determined by the agent's character and reasons appears random rather than authored, which is the luck objection and a serious difficulty for libertarian accounts[^39].

**Compatibilism** holds that a person acts freely when acting according to their own desires without external coercion, even if those desires were themselves determined. It is associated with the Reformed tradition and was defended in various forms by Francis Turretin and Jonathan Edwards, with Calvin often read the same way, though scholars debate whether his view fits the modern category[^40]. The principal objection is that if God determines the desires producing sinful choices, distancing God from the authorship of sin becomes difficult, and compatibilists answer with distinctions between primary and secondary causation and between permitting and causing[^41].

The Reformed position developed within a longer controversy running from Pelagianism and the response to it through to the Synod of Dort, and the categories of prevenient grace, total depravity and irresistible grace belong to that history[^42][^43]. Arminian theology occupies the corresponding position on the other side, affirming that grace enables a genuine choice that can be resisted[^44].
`
    },
    {
      id: "molinism",
      title: "The Molinist Approach and Middle Knowledge",
      tags: ["Sovereignty"],
      content: `
Molinism, developed by the sixteenth-century Jesuit Luis de Molina, proposes a third way[^45].

<?viz free-will/molinist-order?>


God possesses three kinds of knowledge. Natural knowledge covers everything that could be, free knowledge covers everything that will be, and between them lies middle knowledge, covering what any free creature would freely do in any given circumstance. These are the counterfactuals of creaturely freedom[^46].

By choosing to actualise a world whose full set of counterfactuals He knows, God ensures that His purposes are achieved entirely through genuinely free decisions[^47]. Applied to prophecy, this explains how God could know with certainty that Peter would deny Christ three times without causing it, since God knew what Peter would freely do in exactly those circumstances[^48].

The principal objection is the grounding problem. What makes a counterfactual of creaturely freedom true prior to God's decision to create? It cannot be God's will, or the choices are determined after all, and it cannot be the creature's actual choice, since the creature does not yet exist[^49]. The debate traces back to medieval discussions of future contingents and the longstanding puzzle of reconciling infallible foreknowledge with freedom[^50][^51].
`
    },
    {
      id: "concurrence",
      title: "Sovereignty and Concurrence",
      tags: ["Sovereignty"],
      content: `
Scripture asserts both truths without resolving the mechanism, and the doctrine of concurrence names that fact[^52].

<?viz free-will/tulip?>


<?viz free-will/systems?>


*   **Joseph.** His brothers acted from genuine malice and bear the guilt, and Joseph nonetheless states that what they intended for harm God intended for good. One event receives two complete descriptions[^53].
*   **The cross.** Acts 2:23 holds together God's deliberate plan and foreknowledge and the culpability of those who carried out the execution in a single sentence, and Acts 4:27-28 states that they did what God's power and will had decided beforehand[^54].
*   **Paul's instruction.** Believers are told to work out their own salvation with fear and trembling precisely because it is God who works in them to will and to act, so the human effort is grounded in divine working rather than opposed to it[^55].

God is described as doing whatever pleases Him and as declaring the end from the beginning, while human beings are treated throughout as fully responsible agents whose choices have real effect[^56]. Concurrence holds that an action is entirely the agent's own and simultaneously entirely under God's providential governance, which describes what Scripture affirms rather than explaining how it operates[^57].

Collapsing the tension in either direction carries practical cost. Fatalism breeds passivity, and a God whose purposes depend on human cooperation is not the God of Scripture. Holding both sustains urgent action alongside genuine rest[^58].
`
    }
  ],
          sources: [
    "1. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Free Will. The standard academic survey. https://plato.stanford.edu/entries/freewill/",
    "2. [Apologetics] C.S. Lewis Institute. Reflections: The Problem of Evil and the Necessity of Choice (quoting Mere Christianity). https://www.cslewisinstitute.org/resources/reflections-august-2007/",
    "3. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Free Will. Survey of libertarian, compatibilist and hard determinist positions. https://iep.utm.edu/freewill/",
    "4. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Causal Determinism. The thesis at the centre of the dispute. https://plato.stanford.edu/entries/determinism-causal/",
    "5. [Evangelical] The Gospel Coalition. Divine Sovereignty and Human Freedom. Essay on efficacious divine control alongside human freedom. https://www.thegospelcoalition.org/essay/divine-sovereignty-human-freedom/",
    "6. [Apologetics] GotQuestions.org. What does the Bible say about free will? Overview of the biblical case for volitional choice. https://www.gotquestions.org/free-will.html",
    "7. [Commentary] Bible Hub. Genesis 2:17 Commentaries. https://biblehub.com/commentaries/genesis/2-17.htm",
    "8. [Commentary] Bible Hub. 'Commentaries on Deuteronomy 30:19.' https://biblehub.com/commentaries/deuteronomy/30-19.htm",
    "9. [Commentary] Bible Hub. 'Commentaries on Joshua 24:15.' https://biblehub.com/commentaries/joshua/24-15.htm",
    "10. [Commentary] Bible Hub. Deuteronomy 30:11 Commentaries. https://biblehub.com/commentaries/deuteronomy/30-11.htm",
    "11. [Commentary] Bible Hub. Ezekiel 18:32 Commentaries. https://biblehub.com/commentaries/ezekiel/18-32.htm",
    "12. [Commentary] Bible Hub. Acts 17:30 Commentaries. https://biblehub.com/commentaries/acts/17-30.htm",
    "13. [Reformed] Monergism. Compatibilism. Collected Reformed treatments of freedom under divine sovereignty. https://www.monergism.com/topics/free-will/compatibilism",
    "14. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Arguments for Incompatibilism. Includes the luck objection. https://plato.stanford.edu/entries/incompatibilism-arguments/",
    "15. [Encyclopedia] Wikipedia. Argument from reason. https://en.wikipedia.org/wiki/Argument_from_reason",
    "16. [Encyclopedia] Wikipedia. Evolutionary argument against naturalism. https://en.wikipedia.org/wiki/Evolutionary_argument_against_naturalism",
    "17. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Practical Reason. Deliberation as the exercise of rational agency. https://plato.stanford.edu/entries/practical-reason/",
    "18. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Compatibilism. The case that freedom and determinism are compatible. https://plato.stanford.edu/entries/compatibilism/",
    "19. [Encyclopedia] Wikipedia. Frankfurt cases (the principle of alternate possibilities). https://en.wikipedia.org/wiki/Frankfurt_cases",
    "20. [Reference] Wikipedia. Harry Frankfurt. The philosopher behind the counterexamples. https://en.wikipedia.org/wiki/Harry_Frankfurt",
    "21. [Encyclopedia] Wikipedia. Image of God. https://en.wikipedia.org/wiki/Image_of_God",
    "22. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Moral Responsibility. Conditions for praise and blame. https://plato.stanford.edu/entries/moral-responsibility/",
    "23. [Reference] Wikipedia. Culpability. The legal standard tracking degrees of responsibility. https://en.wikipedia.org/wiki/Culpability",
    "24. [Commentary] Bible Hub. Romans 2:6 Commentaries. https://biblehub.com/commentaries/romans/2-6.htm",
    "25. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Heaven and Hell in Christian Thought (free will theodicies of hell). https://plato.stanford.edu/entries/heaven-hell/",
    "26. [Reference] Wikipedia. Soft determinism. The compatibilist position under its older name. https://en.wikipedia.org/wiki/Soft_determinism",
    "27. [Apologetics] Greg Boyd, ReKnew. Why Did God Allow Evil? https://reknew.org/2015/02/why-did-god-allow-evil/",
    "28. [Commentary] Bible Hub. 'Commentaries on 1 John 4:19.' https://biblehub.com/commentaries/1_john/4-19.htm",
    "29. [Apologetics] Bible Hub. What is the purpose of God granting free will? https://biblehub.com/q/why_does_god_grant_free_will.htm",
    "30. [Encyclopedia] Wikipedia. Alvin Plantinga's free-will defense. https://en.wikipedia.org/wiki/Alvin_Plantinga%27s_free-will_defense",
    "31. [Peer-Reviewed] Internet Encyclopedia of Philosophy. The Logical Problem of Evil. Assesses the standing of the Free Will Defense. https://iep.utm.edu/evil-log/",
    "32. [Reference] Wikipedia. Theodicy. The main attempts to reconcile God's goodness with evil. https://en.wikipedia.org/wiki/Theodicy",
    "33. [Commentary] Bible Hub. James 1:13 Commentaries. https://biblehub.com/commentaries/james/1-13.htm",
    "34. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. The Problem of Evil. The standard survey. https://plato.stanford.edu/entries/evil/",
    "35. [Peer-Reviewed] Internet Encyclopedia of Philosophy. The Evidential Problem of Evil. https://iep.utm.edu/evil-evi/",
    "36. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Controversies on Grace.' https://www.newadvent.org/cathen/06710a.htm",
    "37. [Reference] Wikipedia. Domingo Banez. The Dominican who opposed Molina on divine causality. https://en.wikipedia.org/wiki/Domingo_B%C3%A1%C3%B1ez",
    "38. [Encyclopedia] Wikipedia. Libertarianism (metaphysics). https://en.wikipedia.org/wiki/Libertarianism_(metaphysics)",
    "39. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Incompatibilist Theories of Free Will. The positive libertarian accounts. https://plato.stanford.edu/entries/incompatibilism-theories/",
    "40. [Peer-Reviewed] The Gospel Coalition (Themelios). Christological Arguments for Compatibilism in Reformed Theology. Calvin, Turretin and Edwards. https://www.thegospelcoalition.org/themelios/article/christological-arguments-for-compatibilism-in-reformed-theology/",
    "41. [Primary Source] Ligonier Ministries. The Westminster Confession of Faith (chapters 3 and 5). https://learn.ligonier.org/articles/westminster-confession-faith",
    "42. [Reference] Wikipedia. Semi-Pelagianism. The intermediate position and its rejection. https://en.wikipedia.org/wiki/Semi-Pelagianism",
    "43. [Reference] Wikipedia. Synod of Dort. The assembly that formalised the Reformed response to Arminianism. https://en.wikipedia.org/wiki/Synod_of_Dort",
    "44. [Reference] Wikipedia. Five Articles of Remonstrance. The Arminian statement of the disputed points. https://en.wikipedia.org/wiki/Five_Articles_of_Remonstrance",
    "45. [Reference] Wikipedia. Luis de Molina. The Jesuit theologian who developed the system. https://en.wikipedia.org/wiki/Luis_de_Molina",
    "46. [Apologetics] GotQuestions.org. What is Molinism? Introduction to middle knowledge. https://www.gotquestions.org/Molinism.html",
    "47. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Foreknowledge and Free Will. The problem of infallible foreknowledge. https://plato.stanford.edu/entries/free-will-foreknowledge/",
    "48. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Molinism.' https://www.newadvent.org/cathen/10437a.htm",
    "49. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Middle Knowledge (the grounding objection). https://iep.utm.edu/middlekn/",
    "50. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Medieval Theories of Future Contingents. Historical background. https://plato.stanford.edu/entries/medieval-futcont/",
    "51. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Foreknowledge and Free Will. Academic treatment of the surrounding problems. https://iep.utm.edu/foreknow/",
    "52. [Encyclopedia] Wikipedia. Divine providence (concursus dei). https://en.wikipedia.org/wiki/Divine_providence",
    "53. [Commentary] Bible Hub. Genesis 50:20 Commentaries. https://biblehub.com/commentaries/genesis/50-20.htm",
    "54. [Lexical] Bible Hub. Greek 4309, proorizo, the verb rendered predestine. https://biblehub.com/greek/4309.htm",
    "55. [Commentary] Bible Hub. 'Commentaries on Philippians 2:13.' https://biblehub.com/commentaries/philippians/2-13.htm",
    "56. [Reference] Wikipedia. Attributes of God in Christianity. The classical attributes and their scriptural basis. https://en.wikipedia.org/wiki/Attributes_of_God_in_Christianity",
    "57. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Divine Providence. How divine governance relates to creaturely action. https://plato.stanford.edu/entries/providence-divine/",
    "58. [Reference] Wikipedia. Fatalism. The position distinguished from providence, and its practical effect. https://en.wikipedia.org/wiki/Fatalism"
  ],
  lastUpdated: "30-10-2026"
}
