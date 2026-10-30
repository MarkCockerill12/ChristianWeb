import type { Topic } from './types'

export const BAPTISM: Topic = {
  id: "baptism",
  title: "Do You Need to Be Baptized to Be Saved?",
  description: "Exploring the biblical relationship between faith, works, and the role of baptism in salvation.",
  icon: "Droplet",
  color: "blue",
  tags: ["Salvation", "Sacraments", "Theology"],
  verses: [
    { reference: "Ephesians 2:8-9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." },
    { reference: "Acts 2:38", text: "Repent and be baptised, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit." },
    { reference: "1 Peter 3:21", text: "and this water symbolises baptism that now saves you also, not the removal of dirt from the body but the pledge of a clear conscience towards God. It saves you by the resurrection of Jesus Christ." },
    { reference: "Luke 23:42-43", text: "And he said, 'Jesus, remember me when you come into your kingdom.' And he said to him, 'Truly, I say to you, today you will be with me in paradise.'" },
    { reference: "Romans 6:3-4", text: "Or don't you know that all of us who were baptised into Christ Jesus were baptised into his death? We were therefore buried with him through baptism into death." }
  ],
  tldr: "Christian traditions divide on this question. Catholics, Orthodox, Lutherans and the Churches of Christ hold that baptism is instrumental in salvation, while Baptists and most evangelicals hold that it follows saving faith as an act of obedience, and Reformed and Presbyterian churches treat it as a sign and seal of God's covenant that is not strictly necessary for salvation. Both positions affirm that baptism is commanded and that salvation originates in God's grace, and both draw on the same body of texts.",
  content: `
The question of whether baptism is necessary for salvation divides Christian traditions along some of the oldest fault lines in the church, and both sides argue from the same passages[^1].

Both affirm that Christ commanded baptism, that it carries real significance, and that salvation originates in God's grace rather than human merit. The dispute concerns what baptism does[^2].

<?viz baptism/traditions?>

`,
  subtopics: [
    {
      id: "faith-alone-case",
      title: "The Case That Baptism Follows Salvation",
      tags: ["Salvation"],
      content: `
The Protestant argument rests on the structure of justification[^3].

*   **Justification by grace through faith.** Ephesians 2:8-9 grounds salvation in grace received through faith, and explicitly excludes works so that no one may boast. Treating baptism as necessary for salvation would place it among the works Paul rules out[^4].
*   **The thief on the cross.** The man crucified beside Jesus was promised paradise the same day, with no opportunity for baptism. Whatever baptism accomplishes, it cannot be strictly necessary if a man was saved without it[^5].
*   **Cornelius receives the Spirit first.** In Acts 10 the household of Cornelius receives the Holy Spirit before being baptised, and the baptism follows as recognition of what God has already done[^6].

<?viz baptism/acts-order?>

*   **Reading Acts 2:38.** The Greek preposition *eis*, translated "for the forgiveness of your sins," is argued by some to carry a causal sense meaning "because of," making baptism the response to forgiveness rather than its cause[^7].

The causal reading of *eis* is a minority position among Greek grammarians and is widely disputed, and most standard lexicons do not list a clearly causal sense. Sacramental interpreters also answer that the thief died before the resurrection and the command of Matthew 28:19, so his case is exceptional rather than normative[^8].
`
    },
    {
      id: "baptism-instrumental-case",
      title: "The Case That Baptism Is Instrumental",
      tags: ["Salvation"],
      content: `
The sacramental argument is that Scripture repeatedly links baptism to salvation in direct language[^9].

*   **Acts 2:38.** Peter's answer to the question of what the crowd should do is to repent and be baptised for the forgiveness of sins. On the natural reading, repentance and baptism together lead to forgiveness[^10].
*   **1 Peter 3:21.** The text states that baptism now saves. The qualification that it is not the removal of dirt from the body excludes a mechanical reading without withdrawing the claim[^11].
*   **John 3:5.** Being born of water and the Spirit was read as a reference to baptism from the patristic period onward[^12].
*   **Titus 3:5.** Salvation comes through the washing of rebirth and renewal by the Holy Spirit[^13].
*   **Romans 6:3-4 and Galatians 3:27.** Baptism is where believers are buried with Christ and clothed with Him, which is participatory language rather than symbolic description[^14].
*   **Mark 16:16.** Whoever believes and is baptised will be saved. This verse sits in the longer ending of Mark, absent from the earliest manuscripts, which reduces its evidential weight[^15].

The Catholic Catechism teaches that baptism is necessary for salvation for those to whom the gospel has been proclaimed, while affirming that God is not bound by His sacraments, allowing for baptism of desire and of blood[^16]. The Augsburg Confession states that baptism is necessary to salvation and that grace is offered through it[^17].

The sacramental position must account for Ephesians 2:8-9 and for Cornelius. The traditional answers are that baptism is God's appointed means of applying grace rather than a human work earning it, and that God can save apart from the ordinary means He has established[^18].
`
    },
    {
      id: "contested-texts",
      title: "The Contested Texts",
      tags: ["Salvation"],
      content: `
The disagreement concentrates on a small number of passages, each read differently by the two sides.

*   **Acts 2:38.** The sacramental reading takes baptism as directed toward forgiveness, which is the plain sense of the preposition. The Protestant reading takes *eis* as meaning "with reference to" or "because of." The causal sense is contested and is not the default lexical meaning, so this text is stronger for the sacramental side than popular Protestant treatments acknowledge[^19].
*   **1 Peter 3:21.** The sacramental reading takes the statement as direct, with the qualifier ruling out a mechanical view rather than efficacy. The Protestant reading identifies the saving element as the pledge of a clear conscience, meaning faith. Both readings are available from the Greek[^20].
*   **Ephesians 2:8-9.** The Protestant reading excludes any required act, baptism included. The sacramental reading holds that "works" in Paul refers to works of the law performed to earn standing, not to receiving a gift God offers through an appointed means[^21].
*   **Acts 22:16.** Ananias tells Paul to be baptised and wash away his sins, calling on the name of the Lord, which combines both elements in a single instruction[^22].

Neither side is straining the text. The two operate with different frameworks for how grace is conveyed, and each framework handles some passages more comfortably than others[^23].
`
    },
    {
      id: "infant-baptism",
      title: "Who Should Be Baptised",
      tags: ["Who and how"],
      content: `
The question of necessity is entangled with a second question concerning the proper subject of baptism.

*   **Paedobaptism.** Practised by Catholics, Orthodox, Lutherans, Anglicans, Presbyterians and Methodists. The argument draws on the household baptisms recorded in Acts, on the parallel between baptism and circumcision as a covenant sign, and on the practice of the early church[^24][^25].
*   **The circumcision parallel.** Colossians 2:11-12 places circumcision and baptism side by side, and Genesis 17 establishes circumcision as a sign applied to infants within the covenant community[^26][^27].
*   **Household baptisms.** Lydia's household and the household of Stephanas are baptised as units, without the text specifying whether children were included[^28].
*   **Credobaptism.** Practised by Baptists, Anabaptists, Pentecostals and most non-denominational churches. The argument draws on the consistent New Testament pattern of belief preceding baptism, and on baptism as a personal profession an infant cannot make[^29].
*   **The Ethiopian official.** In Acts 8 the official asks for baptism as soon as Philip has proclaimed Jesus to him. The explicit confession of faith in verse 37 is absent from the earliest manuscripts, but the sequence of hearing and believing before baptism is the pattern credobaptists take as normative[^30].

A person's answer to the question of what baptism does largely determines the answer to who should receive it. If baptism conveys regenerating grace, baptising infants follows naturally. If it expresses a faith already present, it presupposes someone able to profess that faith[^31].
`
    },
    {
      id: "common-ground",
      title: "Common Ground",
      tags: ["Agreement"],
      content: `
The shared ground between the positions is larger than popular treatments suggest.

*   **Baptism is commanded.** Christ commanded it in the Great Commission, and no major tradition treats it as optional for a believer[^32].
*   **Salvation originates in grace.** No mainstream tradition teaches that a person earns salvation by being baptised. The sacramental view holds that baptism is a means God uses rather than a payment rendered[^33].
*   **Faith is required.** Sacramental traditions require faith, whether the church's and the parents' in the case of infants or the individual's in adult converts. Baptism without any faith is not the position of anyone in the debate[^34].
*   **Water does not save mechanically.** Peter's own qualification in 1 Peter 3:21 is common to all sides[^35].
*   **Early practice confirms the seriousness.** The Didache, dating to the late first or early second century, gives detailed instructions for baptism including fasting beforehand, showing how early the church treated it as a defined and weighty act[^36].

<?viz baptism/dura?>


For an individual asking the question, every tradition gives the same instruction, which is to trust Christ and be baptised. The doctrinal dispute concerns the mechanism rather than the practice.

Presenting one of these positions as simply what the Bible teaches requires the claim that Augustine, Aquinas, Luther and the entire Eastern church misread the New Testament on a basic point, which is a claim requiring argument rather than assumption[^37][^38].
`
    }
  ],
            sources: [
    "1. [Reference] Wikipedia. Baptism. Overview of the practice and the doctrinal differences between traditions. https://en.wikipedia.org/wiki/Baptism",
    "2. [Evangelical] The Gospel Coalition. Baptism. Theological essay on the meaning and practice of baptism. https://www.thegospelcoalition.org/essay/baptism/",
    "3. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Justification.' https://www.newadvent.org/cathen/08573a.htm",
    "4. [Commentary] Bible Hub. 'Commentaries on Ephesians 2:8.' https://biblehub.com/commentaries/ephesians/2-8.htm",
    "5. [Commentary] Bible Hub. 'Commentaries on Luke 23:43.' https://biblehub.com/commentaries/luke/23-43.htm",
    "6. [Reference] Wikipedia. Cornelius the Centurion. The household that received the Spirit before baptism. https://en.wikipedia.org/wiki/Cornelius_the_Centurion",
    "7. [Peer-Reviewed] Mantey, J. R. The Causal Use of Eis in the New Testament. Journal of Biblical Literature 70.1 (1951): 45-48. https://doi.org/10.2307/3262042",
    "8. [Peer-Reviewed] Marcus, Ralph. The Elusive Causal Eis. Journal of Biblical Literature 71.1 (1952): 43-44. https://doi.org/10.2307/3261847",
    "9. [Catholic] New Advent, Catholic Encyclopedia. Baptism. Historical and theological treatment of the sacrament. https://www.newadvent.org/cathen/02258b.htm",
    "10. [Commentary] Bible Hub. 'Commentaries on Acts 2:38.' https://biblehub.com/commentaries/acts/2-38.htm",
    "11. [Commentary] Bible Hub. 'Commentaries on 1 Peter 3:21.' https://biblehub.com/commentaries/1_peter/3-21.htm",
    "12. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Regeneration.' https://www.newadvent.org/cathen/12714a.htm",
    "13. [Commentary] Bible Hub. 'Commentaries on Titus 3:5.' https://biblehub.com/commentaries/titus/3-5.htm",
    "14. [Commentary] Bible Hub. 'Commentaries on Romans 6:4.' https://biblehub.com/commentaries/romans/6-4.htm",
    "15. [Commentary] Bible Hub. 'Commentaries on Mark 16:16.' https://biblehub.com/commentaries/mark/16-16.htm",
    "16. [Catholic] Catechism of the Catholic Church 1257-1261. The Necessity of Baptism. Official teaching on necessity and on baptism of desire and blood. https://www.vatican.va/archive/ENG0015/__P3M.HTM",
    "17. [Lutheran] Book of Concord, Augsburg Confession Article IX: Of Baptism. Baptism is necessary to salvation. https://bookofconcord.org/augsburg-confession/article-ix/",
    "18. [Primary Source] Thomas Aquinas. Summa Theologiae III, Q. 68: Those Who Receive Baptism. Article 2 on whether a man can be saved without baptism. https://www.newadvent.org/summa/4068.htm",
    "19. [Lexical] Bible Hub. Greek 1519, eis, the preposition at issue in Acts 2:38. https://biblehub.com/greek/1519.htm",
    "20. [Lexical Resource] Bible Hub. Greek 1906, eperotema (inquiry, appeal, pledge), the noun at issue in 1 Peter 3:21. https://biblehub.com/greek/1906.htm",
    "21. [Commentary] Bible Hub. 'Commentaries on Ephesians 2:9.' https://biblehub.com/commentaries/ephesians/2-9.htm",
    "22. [Commentary] Bible Hub. 'Commentaries on Acts 22:16.' https://biblehub.com/commentaries/acts/22-16.htm",
    "23. [Reference] Wikipedia. Sacrament. The category and the traditions' differing counts and definitions. https://en.wikipedia.org/wiki/Sacrament",
    "24. [Reference] Wikipedia. Infant baptism. The paedobaptist case from covenant continuity and early practice. https://en.wikipedia.org/wiki/Infant_baptism",
    "25. [Reference] Wikipedia. Origen. The father who reported infant baptism as apostolic custom. https://en.wikipedia.org/wiki/Origen",
    "26. [Commentary] Bible Hub. 'Commentaries on Colossians 2:12.' https://biblehub.com/commentaries/colossians/2-12.htm",
    "27. [Commentary] Bible Hub. 'Commentaries on Genesis 17:9.' https://biblehub.com/commentaries/genesis/17-9.htm",
    "28. [Commentary] Bible Hub. 'Commentaries on Acts 16:15.' https://biblehub.com/commentaries/acts/16-15.htm",
    "29. [Primary Source] Schaff, Creeds of Christendom. 'The New Hampshire Baptist Confession, on Baptism.' https://www.ccel.org/ccel/schaff/creeds3.v.ii.ii.html",
    "30. [Commentary] Bible Hub. 'Commentaries on Acts 8:37.' Notes on the verse's absence from most manuscripts. https://biblehub.com/commentaries/acts/8-37.htm",
    "31. [Reference] Wikipedia. Pelagius. The figure whose controversy sharpened Augustine's case for infant baptism. https://en.wikipedia.org/wiki/Pelagius",
    "32. [Commentary] Bible Hub. 'Commentaries on Matthew 28:19.' https://biblehub.com/commentaries/matthew/28-19.htm",
    "33. [Primary Source] Council of Trent. 'Sixth Session, on Justification.' https://www.ccel.org/ccel/schaff/creeds2.v.i.i.iv.html",
    "34. [Catholic] Catechism of the Catholic Church 1246-1255. Who Can Receive Baptism? Including infant baptism and faith and baptism. https://www.vatican.va/archive/ENG0015/__P3K.HTM",
    "35. [Primary Source] Book of Concord. Luther's Small Catechism, Part IV: The Sacrament of Holy Baptism. https://bookofconcord.org/small-catechism/part-iv/",
    "36. [Primary Source] New Advent, Church Fathers. The Didache, chapter 7: Concerning Baptism. https://www.newadvent.org/fathers/0714.htm",
    "37. [Historical] Wikipedia. Augustine of Hippo. His defence of infant baptism against the Pelagians. https://en.wikipedia.org/wiki/Augustine_of_Hippo",
    "38. [Reference] Wikipedia. Eastern Orthodox Church. The tradition's practice and theology of initiation. https://en.wikipedia.org/wiki/Eastern_Orthodox_Church"
  ],
  lastUpdated: "30-10-2026"
}
