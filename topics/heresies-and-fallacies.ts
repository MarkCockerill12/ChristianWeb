import type { Topic } from './types'

export const HERESIES: Topic = {
  id: "heresies-and-fallacies",
  title: "Heresies and Fallacies",
  description: "The classic errors about the Trinity and about Jesus, why the early church rejected them, and the fallacies behind popular jokes about the Christian faith.",
  icon: "Shield",
  color: "amber",
  tags: ["Theology", "Trinity", "Jesus", "History"],
  verses: [
    { reference: "Deuteronomy 6:4", text: "Hear, O Israel: The LORD our God, the LORD is one." },
    { reference: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
    { reference: "1 John 4:2", text: "Every spirit that acknowledges that Jesus Christ has come in the flesh is from God." },
    { reference: "Jude 1:3", text: "Contend for the faith that was once for all entrusted to God's holy people." },
  ],
  tldr: "Most of the great heresies are attempts to make the Trinity or the person of Christ easier to grasp: three gods, one person in three masks, a created Jesus, a Jesus who only seemed human. The early church rejected each because it denied something Scripture says. Many popular jokes about Christianity, such as God sacrificing himself to himself, depend on these same errors along with some basic logical fallacies.",
  content: `
Heresies are errors about the centre of the faith, and they are still commonly repeated, by Christians as well as by critics. Knowing them helps to clarify what Christians do believe and to expose what popular criticism gets wrong.

<?viz heresies-and-fallacies/table?>
`,
  subtopics: [
    {
      id: "what-is-a-heresy",
      title: "What Is a Heresy?",
      tags: ["Basics"],
      content: `
A heresy is a teaching that denies a central truth of the faith, as distinct from the many secondary questions on which Christians can disagree. Most of the great heresies arose from sincere attempts to explain something hard, and they were answered by the early councils, such as Nicaea in 325[^1][^2] and Chalcedon in 451[^3][^4]. They still matter because they keep coming back, often in sermons, children's talks and popular criticism. The word is about teaching and not about a person's sincerity, and it should be used with care.

What Christians believe about the Trinity is set out in the [Trinity topic](/categories/trinity). The errors below are the ways of getting it wrong.

**See also:** [Branches of Christianity](/categories/branches).
`,
    },
    {
      id: "trinity-heresies",
      title: "Heresies About the Trinity",
      tags: ["Trinity"],
      content: `
* **Tritheism: three gods.** It treats the Father, Son and Spirit as three separate gods[^5][^6]. It contradicts "The LORD our God, the LORD is one" (Deuteronomy 6:4) and the basics of Christian monotheism.
* **Modalism: one person in three masks.** God is one person who appears in different modes, at one time as Father, then as Son, then as Spirit. It is also called Sabellianism, after Sabellius[^7][^8]. It denies the distinct persons: at Jesus' baptism all three act at once, with the Son in the water, the Spirit descending and the Father speaking (Matthew 3:16-17). It bears a resemblance to the Hindu idea of one reality appearing as different gods.
* **Partialism: three parts of God.** Each person is one-third of God, so that only together do they make up God. It contradicts "in Christ all the fullness of the Deity lives in bodily form" (Colossians 2:9). Each person is fully God: Jesus says that "anyone who has seen me has seen the Father" (John 14:9), and lying to the Spirit is lying to God (Acts 5:3-4).
* **Patripassianism: the Father died on the cross.** A form of modalism, in which the Father himself suffered, as Tertullian charged against Praxeas[^9][^10]. Scripture teaches that it was the Son who suffered (Isaiah 53; Luke 23), and that he prayed to the Father from the cross (Luke 23:46).

**Bad analogies.** Many well-meant illustrations fall into these errors. Water as ice, liquid and steam suggests modalism. A shamrock or an egg with three parts suggests partialism. Three separate people suggests tritheism. The Trinity has no exact parallel in creation, which is why every analogy eventually breaks down[^11][^12].
`,
    },
    {
      id: "christ-heresies",
      title: "Heresies About Jesus",
      tags: ["Jesus"],
      content: `
* **Arianism: Jesus was created.** Arius taught that the Son is a created being, the first and greatest of creatures, and not fully God. The Council of Nicaea rejected this in 325[^13][^14]. It is refuted by "the Word was God" (John 1:1) and "through him all things were made" (John 1:3). The Jehovah's Witnesses hold a modern form of it, and their New World Translation renders John 1:1 "the Word was a god", because *theos* (θεός, God) has no article in *theos ēn ho logos* (θεὸς ἦν ὁ λόγος). Greek does not use the article the way English uses "the" and "a": John uses *theos* without the article for the Father in the same chapter (John 1:6, 1:18), and the construction places *theos* first for emphasis, describing what the Word was. Arians also cite Colossians 1:15, "the firstborn over all creation", but *prōtotokos* (πρωτότοκος, firstborn) is a title of rank in the Old Testament, as in "I will appoint him to be my firstborn, the most exalted of the kings of the earth" (Psalm 89:27), and the next verse says all things were created through him[^15][^16][^17].
* **Adoptionism: Jesus became God's Son.** Jesus was an ordinary man whom God adopted, at his baptism or his resurrection[^18][^19]. It denies his eternal Sonship: "the Word became flesh" (John 1:14), and God "sent his Son, born of a woman" (Galatians 4:4).
* **Docetism: Jesus only seemed human.** His body and suffering were an appearance[^20][^21]. John answers it directly: "every spirit that does not acknowledge Jesus is not from God" (1 John 4:2-3), and the risen Jesus has flesh and bones (Luke 24:39).
* **Apollinarianism: a divine mind in a human body.** Jesus had a human body and a divine mind in place of a human one. It was condemned at Constantinople in 381[^22][^23]. The early church answered that what Christ did not take on, he did not heal.
* **Nestorianism: two persons.** The human Jesus and the divine Son are two persons joined together. It was condemned at Ephesus in 431[^24][^25]. It denies the unity of his person: "The Word became flesh" (John 1:14). Whether Nestorius himself taught this is disputed, and the Church of the East rejects the label.
* **Monophysitism: one nature.** The human nature was absorbed into the divine, as taught by Eutyches and rejected at Chalcedon[^26][^27]. The Oriental Orthodox churches, often labelled with this name, reject it, and describe their own view as miaphysite.
* **Monothelitism: one will.** Christ had only a divine will, which would make his humanity a kind of puppet. It was condemned at Constantinople in 681[^28][^29]. "Not my will, but yours be done" (Luke 22:42) shows a human will submitted to the Father's.

**See also:** [Addressing Objections: Verses Where Jesus Differentiates Himself From the Father (Jesus' Claims)](/categories/jesus#section-objections).
`,
    },
    {
      id: "other-heresies",
      title: "Other Major Errors",
      tags: ["Salvation"],
      content: `
* **Pelagianism: we can save ourselves.** People are able to obey God without grace, and Adam's sin harms us only by example. Augustine opposed it, and the Council of Carthage condemned it in 418[^30][^31]. Scripture says that salvation is "by grace... not by works" (Ephesians 2:8-9).
* **Gnosticism: secret knowledge saves.** The material world is evil, made by a lesser god, and salvation comes through hidden knowledge[^32][^33]. Genesis calls creation "very good" (Genesis 1:31). The [canon topic](/categories/canon) covers its writings.
* **Marcionism: two gods.** The God of the Old Testament is a different and lesser one than the Father of Jesus[^34][^35]. The [did God change topic](/categories/did-god-change) answers it.

* **Open theism: God does not know the future.** God knows all that can be known, but future free choices are not yet there to be known[^36][^37]. Isaiah grounds God's uniqueness in declaring "the end from the beginning" (Isaiah 46:10). Its supporters hold to the creeds, so it is a serious error rather than a heresy in the creedal sense. The [free will topic](/categories/free-will#section-open-theism) sets out both sides.

`,
    },
    {
      id: "prosperity-gospel",
      title: "The Prosperity Gospel",
      tags: ["Salvation"],
      content: `
**What it teaches.** The prosperity gospel teaches that God wills health and wealth for every believer, and that faith, positive confession and giving release them. It grew out of the Word of Faith movement of E. W. Kenyon and Kenneth Hagin, and is associated with preachers such as Kenneth Copeland and Creflo Dollar. Giving is often presented as "seed" that God will multiply back to the giver[^38][^39].

It is widespread. In Pew's 2006 survey of Pentecostals in ten countries, most Pentecostals in nine of them said that God will grant material prosperity to all believers who have enough faith[^40][^38].

**The texts used.** "I pray that you may enjoy good health and that all may go well with you" (3 John 2) is the standard greeting of an ancient letter, not a promise. Malachi 3:10 calls Israel to bring its tithe into the temple under the old covenant, and Jesus' promise of "a hundred times as much" (Mark 10:30) comes with "persecutions" in the same sentence[^41][^39].

**The answer.** Paul warns against those "who think that godliness is a means to financial gain" and says "the love of money is a root of all kinds of evil" (1 Timothy 6:5-10)[^42]. Jesus said "Blessed are you who are poor" (Luke 6:20), and Paul knew hunger and need (Philippians 4:12). Hebrews 11 honours believers who were "destitute, persecuted and mistreated"[^43][^39]. The Lausanne Movement's theology working group concluded that the teaching of its leading promoters is "false and gravely distorting of the Bible", and that in some forms it can be described as a false gospel[^44][^38].

**See also:** [Not Healed Because of a Lack of Faith? (Prayer)](/categories/prayer#section-lack-of-faith).
`
    },
    {
      id: "doctrines-to-know",
      title: "Two Doctrines That Clear Up Confusion",
      tags: ["Trinity"],
      content: `
These are not heresies, but truths whose denial lies behind many of the errors above.

**Divine simplicity.** God is not made of separable components or parts[^45][^46]. His justice, love and power are not pieces of him that could pull against each other. The doctrine is complex and Christians discuss how far to take it, and it clears up a number of supposed contradictions, such as justice being set against mercy, as though these were two different parties inside God.

**Divine immutability.** God does not change: "I the LORD do not change" (Malachi 3:6)[^47][^48]. A common reply is that Jesus becoming human is a change. The answer is that he did not lose his divinity but gained a humanity, so that the divine nature remained constant. Nor did sending the Son to earth mean that God had to leave heaven, since God is everywhere. The [did God change topic](/categories/did-god-change) covers this further.

**See also:** [Numbers 23:19 / 1 Samuel 15:29 vs. Genesis 6:6 - God does not repent vs. God repented (Contradictions)](/categories/contradictions#section-GodRepents).
`,
    },
    {
      id: "the-popular-joke",
      title: "\"He Sacrificed Himself to Himself\"",
      tags: ["Fallacies"],
      content: `
A popular comic and internet joke goes roughly like this: God sends himself to earth as himself, to sacrifice himself to himself, to save everyone from himself. It gets laughs because it packs several errors into one line. The fair response is to see what it misrepresents.

**Heresies it assumes.**

* **Tritheism and partialism**, by drawing three separate figures or parts who bargain with each other.
* **Modalism and patripassianism**, in "send you as myself" and "sacrifice myself to myself", as if the Father and Son were one person.
* **Arianism and adoptionism**, by portraying Jesus as a lesser being sent on an errand.
* **Nestorianism and monothelitism**, by showing a Jesus who is merely told what will happen, as if he were a puppet.
* **A botched atonement.** God's justice is satisfied through Christ's willing sacrifice, and no Christian teaches a kind of divine self-harm. The [Jesus topic](/categories/jesus) sets out what the doctrine does say.

**Fallacies it commits.**

* **Strawman.** Attacking a misrepresented version of an argument[^49][^50]. No Christian teaches that God sacrifices himself to himself in this sense.
* **Equivocation.** Using a word in two senses[^49]. "Myself" confuses person with essence. One God in three persons does not mean that the Son and Father are one person.
* **Category mistake.** Treating something as if it belonged to a category it does not[^51][^52]. God's justice is not a separate being standing against God, but an expression of his nature, so "God against God" does not describe it.
* **Composition.** Assuming that what is true of the parts holds for the whole, or the reverse[^49]. The joke treats Father, Son and Spirit as parts whose actions add up to God.
* **Anthropomorphism.** Attributing human traits to what is not human[^53][^54]. Scripture does use human language of God by analogy, but the joke goes further and makes God confused, like a sitcom father. We are made in his image, and he is not made in ours.
* **False analogy.** Comparing unlike things[^49]. God sending the Son is not like one person sending himself.
* **False cause.** Assuming a false link between cause and effect[^49]. "Saving everyone from me" treats God as the cause of the problem. Sin is what brings separation, and God is not arbitrarily punishing.
* **Oversimplification.** Simplifying to the point of distortion[^49]. The Trinity and the atonement are subtle subjects, which cannot be reduced to one line.
* **Begging the question.** Assuming what it sets out to prove[^49]. The joke assumes that the doctrines are absurd, and uses that to show they are absurd. It offers no actual argument.

**What can fairly be asked.** Good questions do lie behind the joke. How can one God be three persons? Why would God need a sacrifice? How can one death deal with the guilt of others? These are real and deserve real answers, and the [Trinity](/categories/trinity) and [Jesus](/categories/jesus) topics take them up.
`,
    },
  ],
    sources: [
    "1. [Primary Source] First Council of Nicaea (325): creed and canons. Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum01.htm",
    "2. [Wikipedia] 'Nicene Creed.' https://en.wikipedia.org/wiki/Nicene_Creed",
    "3. [Primary Source] Council of Chalcedon (451). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum04.htm",
    "4. [Wikipedia] 'Chalcedonian Definition.' https://en.wikipedia.org/wiki/Chalcedonian_Definition",
    "5. [Academic] Stanford Encyclopedia of Philosophy. 'Trinity.' https://plato.stanford.edu/entries/trinity/",
    "6. [Wikipedia] 'Tritheism.' https://en.wikipedia.org/wiki/Tritheism",
    "7. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Monarchians.' https://www.newadvent.org/cathen/10448a.htm",
    "8. [Wikipedia] 'Sabellianism.' https://en.wikipedia.org/wiki/Sabellianism",
    "9. [Primary Source] Tertullian, Against Praxeas. New Advent. https://www.newadvent.org/fathers/0317.htm",
    "10. [Wikipedia] 'Patripassianism.' https://en.wikipedia.org/wiki/Patripassianism",
    "11. [Academic] 'Trinity.' Internet Encyclopedia of Philosophy. https://iep.utm.edu/trinity/",
    "12. [Wikipedia] 'Trinity.' https://en.wikipedia.org/wiki/Trinity",
    "13. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Arianism.' https://www.newadvent.org/cathen/01707c.htm",
    "14. [Wikipedia] 'Arianism.' https://en.wikipedia.org/wiki/Arianism",
    "15. [Reference] Bible Hub Interlinear Bible. 'John 1:1.' https://biblehub.com/interlinear/john/1-1.htm",
    "16. [Commentary] Bible Hub. 'Commentaries on John 1:1.' https://biblehub.com/commentaries/john/1-1.htm",
    "17. [Reference] Bible Hub. Strong's Greek 4416: prótotokos (first-born). https://biblehub.com/greek/4416.htm",
    "18. [Wikipedia] 'Adoptionism.' https://en.wikipedia.org/wiki/Adoptionism",
    "19. [Academic] Lavender. Adoptionism. The Encyclopedia of Ancient History, 2012. https://doi.org/10.1002/9781444338386.wbeah05004",
    "20. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Docetae.' https://www.newadvent.org/cathen/05070c.htm",
    "21. [Wikipedia] 'Docetism.' https://en.wikipedia.org/wiki/Docetism",
    "22. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Apollinarianism.' https://www.newadvent.org/cathen/01615b.htm",
    "23. [Wikipedia] 'Apollinarism.' https://en.wikipedia.org/wiki/Apollinarism",
    "24. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "25. [Wikipedia] 'Nestorianism.' https://en.wikipedia.org/wiki/Nestorianism",
    "26. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Monophysites and Monophysitism.' https://www.newadvent.org/cathen/10489b.htm",
    "27. [Wikipedia] 'Monophysitism.' https://en.wikipedia.org/wiki/Monophysitism",
    "28. [Primary Source] Third Council of Constantinople (680-681). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum06.htm",
    "29. [Wikipedia] 'Monothelitism.' https://en.wikipedia.org/wiki/Monothelitism",
    "30. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Pelagius and Pelagianism.' https://www.newadvent.org/cathen/11604a.htm",
    "31. [Wikipedia] 'Pelagianism.' https://en.wikipedia.org/wiki/Pelagianism",
    "32. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Gnosticism.' https://www.newadvent.org/cathen/06592a.htm",
    "33. [Wikipedia] 'Gnosticism.' https://en.wikipedia.org/wiki/Gnosticism",
    "34. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Marcionites.' https://www.newadvent.org/cathen/09645c.htm",
    "35. [Wikipedia] 'Marcionism.' https://en.wikipedia.org/wiki/Marcionism",
    "36. [Academic] Internet Encyclopedia of Philosophy. 'Open Theism.' https://iep.utm.edu/o-theism/",
    "37. [Apologetics] GotQuestions.org. 'What is open theism?' https://www.gotquestions.org/open-theism.html",
    "38. [Wikipedia] 'Prosperity theology.' https://en.wikipedia.org/wiki/Prosperity_theology",
    "39. [Apologetics] GotQuestions.org. 'What does the Bible say about the prosperity gospel?' https://www.gotquestions.org/prosperity-gospel.html",
    "40. [Survey] Pew Research Center (2006). 'Spirit and Power: A 10-Country Survey of Pentecostals.' https://www.pewresearch.org/religion/2006/10/05/spirit-and-power/",
    "41. [Commentary] Bible Hub. 'Commentaries on 3 John 1:2.' https://biblehub.com/commentaries/3_john/1-2.htm",
    "42. [Commentary] Bible Hub. 'Commentaries on 1 Timothy 6:5.' https://biblehub.com/commentaries/1_timothy/6-5.htm",
    "43. [Commentary] Bible Hub. 'Commentaries on Luke 6:20.' https://biblehub.com/commentaries/luke/6-20.htm",
    "44. [Christian Source] Lausanne Movement. 'A Statement on the Prosperity Gospel.' Lausanne Theology Working Group. https://lausanne.org/content/a-statement-on-the-prosperity-gospel",
    "45. [Academic] Stanford Encyclopedia of Philosophy. 'Divine Simplicity.' https://plato.stanford.edu/entries/divine-simplicity/",
    "46. [Wikipedia] 'Divine simplicity.' https://en.wikipedia.org/wiki/Divine_simplicity",
    "47. [Academic] Stanford Encyclopedia of Philosophy. 'Immutability.' https://plato.stanford.edu/entries/immutability/",
    "48. [Wikipedia] 'Immutability (theology).' https://en.wikipedia.org/wiki/Immutability_(theology)",
    "49. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#StrawMan",
    "50. [Wikipedia] 'Straw man.' https://en.wikipedia.org/wiki/Straw_man",
    "51. [Academic] Stanford Encyclopedia of Philosophy. 'Category Mistakes.' https://plato.stanford.edu/entries/category-mistakes/",
    "52. [Wikipedia] 'Category mistake.' https://en.wikipedia.org/wiki/Category_mistake",
    "53. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Anthropomorphism.' https://www.newadvent.org/cathen/01558c.htm",
    "54. [Wikipedia] 'Anthropomorphism.' https://en.wikipedia.org/wiki/Anthropomorphism"
  ],
  lastUpdated: "30-10-2026"
}
