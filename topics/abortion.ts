import type { Topic } from './types'

export const ABORTION: Topic = {
  id: "abortion",
  title: "Abortion: What the Bible Teaches, and the Grace It Offers",
  description: "Why Scripture and the early church treat the unborn as human lives, why saving a mother's life is not murder, how the hard cases are weighed, and why no Christian has any business being harsh.",
  icon: "Heart",
  color: "rose",
  tags: ["Ethics", "Life", "Grace", "Medicine"],
  verses: [
    { reference: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made." },
    { reference: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart." },
    { reference: "Luke 1:44", text: "As soon as the sound of your greeting reached my ears, the baby in my womb leaped for joy." },
    { reference: "John 8:11", text: "\"Then neither do I condemn you,\" Jesus declared. \"Go now and leave your life of sin.\"" },
    { reference: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
    { reference: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  ],
  tldr: "The Bible is pro-life. It treats the child in the womb as someone God already knows and forbids murder, and the church has opposed abortion since its earliest writings. Forbidding murder is not the same as forbidding every act that ends a pregnancy. When a mother's life is truly in danger and a doctor must act to save her, this is not murder, because the aim is to save a life and not to take one. Many women who have had abortions were frightened, pressured or desperate, and forgiveness in Christ is complete. A Christian who is harsh towards them has misunderstood the gospel.",
  content: `
Around 73 million abortions take place worldwide each year[^1]. Behind each is a person, usually under great pressure, and many people have lived through this. Two things hold together in Christian teaching: the unborn child is a human life that may not be deliberately destroyed, and there is no condemnation for anyone who comes to Christ, whatever they have done.

<?viz abortion/development?>

<?viz abortion/cases?>

<?viz abortion/positions?>
`,
  subtopics: [
    {
      id: "what-scripture-says",
      title: "What Scripture Says About the Unborn",
      tags: ["Scripture"],
      content: `
The Bible has no verse containing the word "abortion". Its teaching comes from how it speaks about the unborn and about the taking of life.

**God knows the person before birth.** David says, "you knit me together in my mother's womb", and that God saw "my unformed body" (Psalm 139:13-16). Jeremiah is told, "Before I formed you in the womb I knew you" (Jeremiah 1:5), and the Servant was called "before I was born" (Isaiah 49:1). In these texts the same person continues from the womb onward.

**The same word for born and unborn.** When Elizabeth hears Mary, "the baby in my womb leaped for joy" (Luke 1:44). The Greek word *brephos* (βρέφος, baby) is the ordinary word for a baby or infant[^2], and Luke uses it again for the newborn Jesus (Luke 2:12). When Mary visits, both children are still in the womb, and one of them is already the Messiah. Christians confess that God became a human being from the moment of his conception.

**Human life bears God's image.** Murder is forbidden because of what a human being is: "in the image of God has God made mankind" (Genesis 9:6). The commandment is "You shall not murder" (Exodus 20:13), using the Hebrew *ratsach* (רָצַח, murder), the term for murder and slaying[^3]. Scripture condemns "hands that shed innocent blood" (Proverbs 6:17) and the sacrifice of children to Molech (Leviticus 18:21). No one in the womb has done anything to deserve death.

These texts do not give a medical definition or a date. Their combined force is that the Bible treats the unborn child as a person known to God, and gives no ground for treating that child as a thing.
`,
    },
    {
      id: "when-life-begins",
      title: "When Does a Human Life Begin?",
      tags: ["Medicine", "Philosophy"],
      content: `
**The biology.** A new human organism begins at fertilisation, when egg and sperm unite to form a zygote with its own genetic identity[^4]. From there development is continuous. By the end of the fifth week of pregnancy the heart tube is pulsing, by week 8 all the major organs are developing, and by week 10 fingers and toes are formed[^5]. A child may survive from about week 23 with intensive care[^6]. The early pulsing is that of a heart tube and not yet a fully formed heart, and the child is called an embryo for eight weeks after fertilisation and a foetus from then until birth[^7].

**The philosophical question.** Few dispute that the embryo is biologically human. The serious debate is over whether every human being is a person with a right to life. Philosophers such as Mary Anne Warren have argued that personhood requires capacities such as consciousness, reasoning and self-awareness, which a foetus lacks[^8].

**Why that does not hold.** The argument proves more than its supporters want. A newborn has no reason or self-awareness either, and two bioethicists following this line published a defence of what they called "after-birth abortion" in 2012[^9]. The differences between an unborn child and a born one are of size, level of development, location and dependence. None of these decides anyone's worth anywhere else: a small child has no less right to life than an adult, a toddler is less developed than a teenager, a patient on a ventilator depends on others, and moving down a birth canal does not change what a person is. The Christian answer is that human worth is given by God and not earned by ability, which is the principle on which disabled, elderly and vulnerable people are also protected. The [morality topic](/categories/morality) sets out that foundation.
`,
    },
    {
      id: "early-church",
      title: "What the Early Church Taught",
      tags: ["History"],
      content: `
Abortion and exposing unwanted infants were both common in the Roman world. Christians were known for refusing both.

* **The Didache**, one of the oldest Christian documents outside the New Testament, says: "you shall not murder a child by abortion nor kill that which is born"[^10].
* **The Letter to Diognetus** describes Christians to a pagan reader: they marry and have children, "but they do not destroy their offspring"[^11].
* **Athenagoras**, around AD 177, told the emperor that Christians hold that women who use drugs to bring on abortion commit murder and will answer to God[^12].
* **Tertullian**, around AD 197, wrote that "we may not destroy even the foetus in the womb"[^13].

**A qualification.** Later theologians, following Aristotle's biology, debated when the soul entered the body. Augustine thought an early abortion was not murder for that reason, and Aquinas held a similar view of ensoulment[^14]. They still condemned the act. Their question was how grave it was, not whether it was acceptable, and the biology on which they depended has since been superseded.

**Practice as well as teaching.** Christians in the Roman Empire became known for rescuing and raising exposed infants[^15]. The church's opposition has always been tied to the care of the child and the mother.
`,
    },
    {
      id: "hard-texts",
      title: "The Texts Used Against This Position",
      tags: ["Scripture", "Objections"],
      content: `
**Exodus 21:22-25.** Men who are fighting strike a pregnant woman and her child comes out. If there is no serious injury there is a fine, and if there is injury, "life for life". Some translations read the event as a miscarriage, which would suggest that the unborn child was valued less than the mother; others read it as a premature birth, with the penalty applying to harm to either. Old commentators divide over it[^16]. The Hebrew verb is the ordinary one for coming out, not for miscarrying, and the noun is the ordinary word for a child, so the premature birth reading is a strong one. The passage concerns an accidental injury in any case, not a deliberate killing, and it cannot carry a permission for abortion on either reading.

**Numbers 5.** The ritual for a wife suspected of adultery speaks of her abdomen swelling and her thigh wasting away[^17], and one translation makes this a miscarriage. The Hebrew is obscure, the rite concerned a suspected crime before God and not a medical procedure, and the [women topic](/categories/women) treats its difficulties in detail. It gives no warrant for a person to end a pregnancy.

**Genesis 2:7.** God breathes into Adam, so it is argued that life begins with the first breath. The verse describes the creation of the first man and sets no rule for how later people begin. Luke 1:44 and Psalm 139 describe living persons before they breathe.

**The silence of the New Testament.** Paul and Jesus do not mention abortion by name. The Didache shows the first Christians did regard it as forbidden. A command need not be repeated where no one in the community disputed it.
`,
    },
    {
      id: "life-of-the-mother",
      title: "When a Mother's Life Is in Danger",
      tags: ["Medicine", "Life"],
      content: `
**The commandment forbids murder, and this is not murder.** The sixth commandment prohibits the unjust taking of innocent life. A doctor who finds that a mother will die, and that the child cannot be saved, or that only one of them can be, and who acts to save the life that can be saved, is not murdering anyone. The aim is to preserve life, and the child's death is the tragic result of a situation no one chose. It is done out of necessity, and it deserves grief and never accusation.

**The clearest case.** In an ectopic pregnancy the embryo implants outside the womb, in more than nine cases out of ten in a fallopian tube, and as it grows the tube can rupture and cause life-threatening bleeding[^18]. With very rare exceptions the child cannot survive[^19], and it is not possible to save the pregnancy[^20]. Treating it saves the mother and costs no life that could otherwise have been kept. Others include severe pre-eclampsia and sepsis, when the pregnancy is too early for the baby to live outside the womb.

**How Christian traditions reason about it.**

* **Roman Catholic teaching** forbids direct abortion as an end or a means[^21], while allowing treatment of the mother's condition that has the child's death as an unintended result, under the principle of double effect[^22]. Removing a damaged fallopian tube is the standard example, and Catholic commentators argue about other treatments such as methotrexate[^23].
* **Southern Baptists**, in their resolutions from 1982 onward, supported prohibiting abortion "except to save the physical life of the mother"[^24][^25]. When a 2021 resolution dropped that wording, the ethicists Ben Mitchell and Richard Land objected that it offered no exception for the mother's life[^26].
* **Lutheran** theologian Gifford Grobien distinguishes murder, the direct taking of innocent life, from killing and from death, and concludes that in cases such as ectopic pregnancy, pre-eclampsia and sepsis, "treating the mother to preserve her life is not immoral". Removing the baby in an ectopic pregnancy "is not murder". If the baby could survive, every effort must be made to keep him alive[^27].

The traditions differ on the framework and agree on the principle: a doctor may act to save the mother's life.

**Keeping the exception honest.** This reasoning applies to a real threat to the mother's life. It does not turn into a general permission, and the same care applies in the other direction: law and practice must not leave doctors afraid to act. In Ireland in 2012, Savita Halappanavar died of sepsis during a prolonged miscarriage after being refused a termination on legal grounds[^28]. A true pro-life ethic counts her life too.

**Miscarriage is not abortion.** Around 10 in 100 known pregnancies end in early loss[^29]. A woman who has lost a child has done nothing wrong, and treating a miscarriage to remove a child who has already died is not an abortion. She needs comfort and no suspicion.
`,
    },
    {
      id: "rape-and-hard-cases",
      title: "Rape, Disability and Other Hard Cases",
      tags: ["Ethics", "Life"],
      content: `
**Rape.** This is the most painful question, and no argument makes it easy. In a large American survey, about 1 per cent of women who had abortions said they had become pregnant through rape[^30]. The historic Christian position is that the child is innocent and also bears God's image, and Scripture does not punish children for their fathers' crimes: "each will die for their own sin" (Deuteronomy 24:16; Ezekiel 18:20). A woman in that position has suffered a terrible wrong, and the church owes her protection, justice against the attacker, and all the practical support she needs, with no quick answers. Anyone who responds to her with a lecture has failed her.

**A diagnosis of disability.** The reasoning that human worth is given by God applies here most of all. "Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the LORD?" (Exodus 4:11). Parents receiving such news need accurate information and long-term support.

**Poverty, fear and being alone.** These are the most common situations. In the same survey, 74 per cent said a baby would interfere with work, education or caring for dependants, 73 per cent said they could not afford one, and 48 per cent did not want to be a single mother or were having relationship problems[^31]. These are real pressures, and most of them are things a church can actually do something about.
`,
    },
    {
      id: "objections",
      title: "Common Objections",
      tags: ["Objections"],
      content: `
**"It's my body."** A woman's right over her own body is real, and pregnancy makes unique demands on it. The dispute is whether the child is a second body. The child has separate DNA and, from early on, a separate heartbeat, and can be of a different sex. Judith Jarvis Thomson's famous argument grants the foetus personhood and compares pregnancy to being connected to a famous violinist who needs your kidneys: you may unplug[^32]. The comparison is a stranger to whom you have no relation. A mother is the child's own parent, and most pregnancies follow an act that is known to lead to them. Nor is abortion mere unplugging, since it usually involves killing the child.

**"It's just a clump of cells."** Every person is a clump of cells. The question is what kind, and a human embryo is a living member of the species at an early stage of development.

**"You can't impose your religion."** The claim that innocent human beings may not be killed is not a uniquely religious claim, and the argument about human worth can be made without Scripture. Laws against murder are not an imposition of religion.

**"Better not to be born than unwanted."** Being unwanted by someone at one moment is a circumstance that can change, and adoption exists. No one can say of another person's life that it would have been better ended.

**"Men have no right to speak."** The argument stands or falls on its reasons, whoever gives them, and many women hold this view. Men do have a duty to bear responsibility for their children and to support the mothers. Often a man's pressure or absence is part of why the abortion happens, and he bears his own share of it.

**"Christians care only until birth."** Where that is true it is a real failure, and James 1:27 condemns it. Christians run adoption services, pregnancy centres and care for mothers in very large numbers[^33], and the honest answer is to do more.
`,
    },
    {
      id: "grace",
      title: "Grace for Those Who Have Had an Abortion",
      tags: ["Grace"],
      content: `
**There is no sin the cross did not cover.** "Therefore, there is now no condemnation for those who are in Christ Jesus" (Romans 8:1). Paul called himself the worst of sinners, a man who had approved the killing of Christians, and said Christ's patience with him was an example for everyone (1 Timothy 1:15-16). "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness" (1 John 1:9). Abortion is not a special category of sin outside that promise.

**How Jesus treated people in their worst moment.** To the woman about to be stoned, he said to her accusers, "Let any one of you who is without sin be the first to throw a stone", and to her, "Then neither do I condemn you. Go now and leave your life of sin" (John 8:7, 11). Both parts belong to him: the wrong is named, and the woman is sent away free. He let a woman known as a sinner weep at his feet, and defended her against the host (Luke 7:36-50).

**A true Christian does not judge.** Many women who have had an abortion were frightened, abandoned, coerced or desperate, and they often carry it silently for decades. To treat them with contempt is to deny the gospel, since every Christian is someone forgiven at the same cross. Holding that abortion is wrong and being gentle with those who have had one are not in tension: the first is why the grace is needed, and the second is what the grace looks like. Nobody can know from outside what another person faced.

**Churches have often failed here.** In a 2015 LifeWay survey of women who had had abortions, more than 4 in 10 were churchgoers at the time, about two-thirds said church members judge single women who are pregnant, and most thought a church would gossip about a woman considering abortion rather than help her[^34]. When Christians make it safer for a woman to end a pregnancy in secret than to tell her church she is pregnant, part of the blame is theirs.

**Words written to these women.** John Paul II wrote in *Evangelium Vitae* one of the clearest pastoral passages on the subject: "The Church is aware of the many factors which may have influenced your decision, and she does not doubt that in many cases it was a painful and even shattering decision." He said that what happened was "terribly wrong", then went on, "do not give in to discouragement and do not lose hope", and "the Father of mercies is ready to give you his forgiveness and his peace"[^35]. Christians of every tradition can use those words.

**The same applies to men, doctors and everyone else involved.** Forgiveness is on offer on the same terms to the fathers who pressed for it or walked away, and to everyone who took part. "The LORD is close to the brokenhearted and saves those who are crushed in spirit" (Psalm 34:18).
`,
    },
  ],
  sources: [
    "1. [Reference] World Health Organization. 'Abortion.' https://www.who.int/news-room/fact-sheets/detail/abortion",
    "2. [Lexicon] Bible Hub. 'Strong's Greek 1025: brephos.' https://biblehub.com/greek/1025.htm",
    "3. [Lexicon] Bible Hub. 'Strong's Hebrew 7523: ratsach.' https://biblehub.com/hebrew/7523.htm",
    "4. [Encyclopedia] Wikipedia. 'Human embryonic development.' https://en.wikipedia.org/wiki/Human_embryonic_development",
    "5. [Medical] Cleveland Clinic. 'Fetal Development: Stages of Growth.' https://my.clevelandclinic.org/health/articles/7247-fetal-development-stages-of-growth",
    "6. [Medical] American College of Obstetricians and Gynecologists. 'Periviable Birth.' https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2017/10/periviable-birth",
    "7. [Medical] American College of Obstetricians and Gynecologists. 'How Your Fetus Grows During Pregnancy.' https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy",
    "8. [Academic] Internet Encyclopedia of Philosophy. 'Abortion.' https://iep.utm.edu/abortion/",
    "9. [Encyclopedia] Wikipedia. 'After-birth abortion.' https://en.wikipedia.org/wiki/After-birth_abortion",
    "10. [Primary Source] The Didache 2, trans. Roberts and Donaldson. Early Christian Writings. https://www.earlychristianwritings.com/text/didache-roberts.html",
    "11. [Primary Source] Letter to Diognetus 5. New Advent. https://www.newadvent.org/fathers/0101.htm",
    "12. [Primary Source] Athenagoras, A Plea for the Christians 35. New Advent. https://www.newadvent.org/fathers/0205.htm",
    "13. [Primary Source] Tertullian, Apology 9. New Advent. https://www.newadvent.org/fathers/0301.htm",
    "14. [Encyclopedia] Wikipedia. 'Christian views on abortion.' https://en.wikipedia.org/wiki/Christian_views_on_abortion",
    "15. [Encyclopedia] Wikipedia. 'Exposure (infant).' https://en.wikipedia.org/wiki/Exposure_(infant)",
    "16. [Commentary] Bible Hub. 'Exodus 21:22 Commentaries.' https://biblehub.com/commentaries/exodus/21-22.htm",
    "17. [Commentary] Bible Hub. 'Numbers 5:27 Commentaries.' https://biblehub.com/commentaries/numbers/5-27.htm",
    "18. [Medical] American College of Obstetricians and Gynecologists. 'Ectopic Pregnancy.' https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
    "19. [Encyclopedia] Wikipedia. 'Ectopic pregnancy.' https://en.wikipedia.org/wiki/Ectopic_pregnancy",
    "20. [Medical] NHS. 'Ectopic pregnancy.' https://www.nhs.uk/conditions/ectopic-pregnancy/",
    "21. [Primary Source] Catechism of the Catholic Church 2270-2275. Vatican. https://www.vatican.va/archive/ENG0015/__P7Z.HTM",
    "22. [Academic] Stanford Encyclopedia of Philosophy. 'Doctrine of Double Effect.' https://plato.stanford.edu/entries/double-effect/",
    "23. [Theology] Catholic Answers. 'Ectopic Pregnancy and Double Effect.' https://catholic.com/qa/ectopic-pregnancy-and-double-effect",
    "24. [Primary Source] Southern Baptist Convention. 'Resolution on Abortion and Infanticide.' https://www.sbc.net/resource-library/resolutions/resolution-on-abortion-and-infanticide/",
    "25. [Reference] Johnston's Archive. 'Southern Baptist Convention Resolutions on Abortion.' https://johnstonsarchive.net/baptist/sbcabres.html",
    "26. [Theology] Ben Mitchell and Richard Land. 'Why We Opposed an Anti-Abortion Resolution at the Southern Baptist Convention.' Public Discourse (2021). https://www.thepublicdiscourse.com/2021/06/76465/",
    "27. [Academic] Logia: A Journal of Lutheran Theology. 'Moral Action in the Face of Life-Threatening Pregnancies.' https://logia.org/logia-online/511",
    "28. [Encyclopedia] Wikipedia. 'Death of Savita Halappanavar.' https://en.wikipedia.org/wiki/Death_of_Savita_Halappanavar",
    "29. [Medical] American College of Obstetricians and Gynecologists. 'Early Pregnancy Loss.' https://www.acog.org/womens-health/faqs/early-pregnancy-loss",
    "30. [Research] Finer et al. 'Reasons U.S. Women Have Abortions.' Perspectives on Sexual and Reproductive Health (2005). https://www.guttmacher.org/journals/psrh/2005/reasons-us-women-have-abortions-quantitative-and-qualitative-perspectives",
    "31. [Research] Finer et al. 'Reasons U.S. Women Have Abortions' (PDF). https://www.guttmacher.org/sites/default/files/pdfs/journals/3711005.pdf",
    "32. [Encyclopedia] Wikipedia. 'A Defense of Abortion.' https://en.wikipedia.org/wiki/A_Defense_of_Abortion",
    "33. [Encyclopedia] Wikipedia. 'Crisis pregnancy center.' https://en.wikipedia.org/wiki/Crisis_pregnancy_center",
    "34. [Research] Lifeway Research. 'Women Distrust Church on Abortion' (2015). https://research.lifeway.com/2015/11/23/women-distrust-church-on-abortion/",
    "35. [Primary Source] John Paul II. Evangelium Vitae 99 (1995). Vatican. https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_25031995_evangelium-vitae.html"
  ],
  lastUpdated: "30-10-2026"
}
