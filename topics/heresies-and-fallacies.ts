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
A heresy is a teaching that denies a central truth of the faith, as distinct from the many secondary questions on which Christians can disagree. Most of the great heresies arose from sincere attempts to explain something hard, and they were answered by the early councils, such as Nicaea in 325[^1] and Chalcedon in 451[^2]. They still matter because they keep coming back, often in sermons, children's talks and popular criticism. The word is about teaching and not about a person's sincerity, and it should be used with care.

What Christians believe about the Trinity is set out in the [Trinity topic](/categories/trinity). The errors below are the ways of getting it wrong.

**See also:** [Branches of Christianity](/categories/branches).
`,
    },
    {
      id: "trinity-heresies",
      title: "Heresies About the Trinity",
      tags: ["Trinity"],
      content: `
* **Tritheism: three gods.** It treats the Father, Son and Spirit as three separate gods[^3]. It contradicts "The LORD our God, the LORD is one" (Deuteronomy 6:4) and the basics of Christian monotheism.
* **Modalism: one person in three masks.** God is one person who appears in different modes, at one time as Father, then as Son, then as Spirit. It is also called Sabellianism, after Sabellius[^4]. It denies the distinct persons: at Jesus' baptism all three act at once, with the Son in the water, the Spirit descending and the Father speaking (Matthew 3:16-17). It bears a resemblance to the Hindu idea of one reality appearing as different gods.
* **Partialism: three parts of God.** Each person is one-third of God, so that only together do they make up God. It contradicts "in Christ all the fullness of the Deity lives in bodily form" (Colossians 2:9). Each person is fully God: Jesus says that "anyone who has seen me has seen the Father" (John 14:9), and lying to the Spirit is lying to God (Acts 5:3-4).
* **Patripassianism: the Father died on the cross.** A form of modalism, in which the Father himself suffered, as Tertullian charged against Praxeas[^5]. Scripture teaches that it was the Son who suffered (Isaiah 53; Luke 23), and that he prayed to the Father from the cross (Luke 23:46).

**Bad analogies.** Many well-meant illustrations fall into these errors. Water as ice, liquid and steam suggests modalism. A shamrock or an egg with three parts suggests partialism. Three separate people suggests tritheism. The Trinity has no exact parallel in creation, which is why every analogy eventually breaks down[^6].
`,
    },
    {
      id: "christ-heresies",
      title: "Heresies About Jesus",
      tags: ["Jesus"],
      content: `
* **Arianism: Jesus was created.** Arius taught that the Son is a created being, the first and greatest of creatures, and not fully God. The Council of Nicaea rejected this in 325[^7]. It is refuted by "the Word was God" (John 1:1) and "through him all things were made" (John 1:3). The Jehovah's Witnesses hold a modern form of it.
* **Adoptionism: Jesus became God's Son.** Jesus was an ordinary man whom God adopted, at his baptism or his resurrection[^8]. It denies his eternal Sonship: "the Word became flesh" (John 1:14), and God "sent his Son, born of a woman" (Galatians 4:4).
* **Docetism: Jesus only seemed human.** His body and suffering were an appearance[^9]. John answers it directly: "every spirit that does not acknowledge Jesus is not from God" (1 John 4:2-3), and the risen Jesus has flesh and bones (Luke 24:39).
* **Apollinarianism: a divine mind in a human body.** Jesus had a human body and a divine mind in place of a human one. It was condemned at Constantinople in 381[^10]. The early church answered that what Christ did not take on, he did not heal.
* **Nestorianism: two persons.** The human Jesus and the divine Son are two persons joined together. It was condemned at Ephesus in 431[^11]. It denies the unity of his person: "The Word became flesh" (John 1:14). Whether Nestorius himself taught this is disputed, and the Church of the East rejects the label.
* **Monophysitism: one nature.** The human nature was absorbed into the divine, as taught by Eutyches and rejected at Chalcedon[^12]. The Oriental Orthodox churches, often labelled with this name, reject it, and describe their own view as miaphysite.
* **Monothelitism: one will.** Christ had only a divine will, which would make his humanity a kind of puppet. It was condemned at Constantinople in 681[^13]. "Not my will, but yours be done" (Luke 22:42) shows a human will submitted to the Father's.

**See also:** [Addressing Objections: Verses Where Jesus Differentiates Himself From the Father (Jesus' Claims)](/categories/jesus#section-objections).
`,
    },
    {
      id: "other-heresies",
      title: "Other Major Errors",
      tags: ["Salvation"],
      content: `
* **Pelagianism: we can save ourselves.** People are able to obey God without grace, and Adam's sin harms us only by example. Augustine opposed it, and the Council of Carthage condemned it in 418[^14]. Scripture says that salvation is "by grace... not by works" (Ephesians 2:8-9).
* **Gnosticism: secret knowledge saves.** The material world is evil, made by a lesser god, and salvation comes through hidden knowledge[^15]. Genesis calls creation "very good" (Genesis 1:31). The [canon topic](/categories/canon) covers its writings.
* **Marcionism: two gods.** The God of the Old Testament is a different and lesser one than the Father of Jesus[^16]. The [did God change topic](/categories/did-god-change) answers it.
`,
    },
    {
      id: "doctrines-to-know",
      title: "Two Doctrines That Clear Up Confusion",
      tags: ["Trinity"],
      content: `
These are not heresies, but truths whose denial lies behind many of the errors above.

**Divine simplicity.** God is not made of separable components or parts[^17]. His justice, love and power are not pieces of him that could pull against each other. The doctrine is complex and Christians discuss how far to take it, and it clears up a number of supposed contradictions, such as justice being set against mercy, as though these were two different parties inside God.

**Divine immutability.** God does not change: "I the LORD do not change" (Malachi 3:6)[^18]. A common reply is that Jesus becoming human is a change. The answer is that he did not lose his divinity but gained a humanity, so that the divine nature remained constant. Nor did sending the Son to earth mean that God had to leave heaven, since God is everywhere. The [did God change topic](/categories/did-god-change) covers this further.

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

* **Strawman.** Attacking a misrepresented version of an argument[^19]. No Christian teaches that God sacrifices himself to himself in this sense.
* **Equivocation.** Using a word in two senses[^20]. "Myself" confuses person with essence. One God in three persons does not mean that the Son and Father are one person.
* **Category mistake.** Treating something as if it belonged to a category it does not[^21]. God's justice is not a separate being standing against God, but an expression of his nature, so "God against God" does not describe it.
* **Composition.** Assuming that what is true of the parts holds for the whole, or the reverse[^22]. The joke treats Father, Son and Spirit as parts whose actions add up to God.
* **Anthropomorphism.** Attributing human traits to what is not human[^23]. Scripture does use human language of God by analogy, but the joke goes further and makes God confused, like a sitcom father. We are made in his image, and he is not made in ours.
* **False analogy.** Comparing unlike things[^24]. God sending the Son is not like one person sending himself.
* **False cause.** Assuming a false link between cause and effect[^25]. "Saving everyone from me" treats God as the cause of the problem. Sin is what brings separation, and God is not arbitrarily punishing.
* **Oversimplification.** Simplifying to the point of distortion[^26]. The Trinity and the atonement are subtle subjects, which cannot be reduced to one line.
* **Begging the question.** Assuming what it sets out to prove[^27]. The joke assumes that the doctrines are absurd, and uses that to show they are absurd. It offers no actual argument.

**What can fairly be asked.** Good questions do lie behind the joke. How can one God be three persons? Why would God need a sacrifice? How can one death deal with the guilt of others? These are real and deserve real answers, and the [Trinity](/categories/trinity) and [Jesus](/categories/jesus) topics take them up.
`,
    },
  ],
  sources: [
    "1. [Primary Source] First Council of Nicaea (325): creed and canons. Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum01.htm",
    "2. [Primary Source] Council of Chalcedon (451). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum04.htm",
    "3. [Academic] Stanford Encyclopedia of Philosophy. 'Trinity.' https://plato.stanford.edu/entries/trinity/",
    "4. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Monarchians.' https://www.newadvent.org/cathen/10448a.htm",
    "5. [Primary Source] Tertullian, Against Praxeas. New Advent. https://www.newadvent.org/fathers/0317.htm",
    "6. [Wikipedia] 'Trinity.' https://en.wikipedia.org/wiki/Trinity",
    "7. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Arianism.' https://www.newadvent.org/cathen/01707c.htm",
    "8. [Wikipedia] 'Adoptionism.' https://en.wikipedia.org/wiki/Adoptionism",
    "9. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Docetae.' https://www.newadvent.org/cathen/05070c.htm",
    "10. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Apollinarianism.' https://www.newadvent.org/cathen/01615b.htm",
    "11. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Nestorius and Nestorianism.' https://www.newadvent.org/cathen/10755a.htm",
    "12. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Monophysites and Monophysitism.' https://www.newadvent.org/cathen/10489b.htm",
    "13. [Primary Source] Third Council of Constantinople (680-681). Papal Encyclicals Online. https://www.papalencyclicals.net/councils/ecum06.htm",
    "14. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Pelagius and Pelagianism.' https://www.newadvent.org/cathen/11604a.htm",
    "15. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Gnosticism.' https://www.newadvent.org/cathen/06592a.htm",
    "16. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Marcionites.' https://www.newadvent.org/cathen/09645c.htm",
    "17. [Academic] Stanford Encyclopedia of Philosophy. 'Divine Simplicity.' https://plato.stanford.edu/entries/divine-simplicity/",
    "18. [Academic] Stanford Encyclopedia of Philosophy. 'Immutability.' https://plato.stanford.edu/entries/immutability/",
    "19. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#StrawMan",
    "20. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#Equivocation",
    "21. [Academic] Stanford Encyclopedia of Philosophy. 'Category Mistakes.' https://plato.stanford.edu/entries/category-mistakes/",
    "22. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#Composition",
    "23. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'Anthropomorphism.' https://www.newadvent.org/cathen/01558c.htm",
    "24. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#FaultyComparison",
    "25. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#FalseCause",
    "26. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#Oversimplification",
    "27. [Academic] Internet Encyclopedia of Philosophy. 'Fallacies.' https://iep.utm.edu/fallacy/#BeggingtheQuestion"
  ],
  lastUpdated: "30-10-2026"
}
