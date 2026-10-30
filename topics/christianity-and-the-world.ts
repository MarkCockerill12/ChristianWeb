import type { Topic } from './types'

export const CHRISTIANITY_AND_THE_WORLD: Topic = {
  id: "christianity-and-the-world",
  title: "What Has Christianity Done for the World?",
  description: "The practical good Christianity has brought, from hospitals and charity to human rights, schools and reform, and an honest account of the harm done in its name.",
  icon: "Heart",
  color: "emerald",
  tags: ["History", "Charity", "Rights", "Failures"],
  verses: [
    { reference: "Matthew 25:40", text: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me." },
    { reference: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world." },
    { reference: "Matthew 7:21", text: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven." },
    { reference: "1 Peter 4:17", text: "For it is time for judgment to begin with God's household." },
  ],
  tldr: "Christians founded the first public hospitals of the Roman world, built orphanages and relief agencies on a vast scale, opposed infanticide and the arena, led the campaign against the slave trade, and taught millions to read. Christians also massacred Jews and Muslims in the Crusades, burned heretics and witches, fought wars of religion, took part in colonial abuses and hid the sexual abuse of children. Both columns are real. The good followed from what Christ taught, the harm betrayed it, and neither settles whether the faith is true.",
  content: `
Critics often say that Christianity has done more harm than good. Both the good and the harm can be documented, and they are set out here from the historical record, with the failures stated as plainly as the achievements.

<?viz christianity-and-the-world/reforms?>
`,
  subtopics: [
    {
      id: "human-worth",
      title: "Human Worth and Rights",
      tags: ["Rights"],
      content: `
**The idea.** The ancient world did not assume that every person had equal worth. Christianity taught that every human being bears God's image (Genesis 1:27), that Christ died for all, and that "there is neither Jew nor Gentile, neither slave nor free, nor is there male and female" (Galatians 3:28). The historian Tom Holland, who does not write as a believer, argues in *Dominion* that many Western assumptions about human dignity and the care of the weak descend from this revolution[^1].

**Defending the conquered.** Bartolome de las Casas, a Dominican friar who had held enslaved labourers himself, spent his life opposing the treatment of the Indigenous peoples of the Americas, and argued their case against Sepulveda at Valladolid[^2]. In 1537 Pope Paul III's *Sublimis Deus* declared that they were not to be enslaved or deprived of their property[^3]. Spanish practice often ignored both, and the Church's own part in that is set out below.

**Law over rulers.** Stephen Langton, Archbishop of Canterbury, played a central part in the negotiation of Magna Carta in 1215, which limited the power of the king[^4].

**Modern human rights.** Charles Malik, a Lebanese Orthodox Christian philosopher, was a leading drafter of the Universal Declaration of Human Rights of 1948[^5][^6]. The drafters came from many traditions, and the Declaration was a shared achievement, not a Christian document.
`,
    },
    {
      id: "hospitals",
      title: "Hospitals and Care of the Sick",
      tags: ["Medicine", "Charity"],
      content: `
**The first public hospitals.** In the Roman world, public hospitals as such did not exist until the Christian period. Late in the fourth century Basil of Caesarea founded a great complex for the sick and poor, the Basiliad, and within decades such hospitals were common across the Byzantine world[^7][^8].

**Plague.** When plague struck Alexandria in the third century, Bishop Dionysius wrote that Christians visited and nursed the sick without thought of danger, many dying as a result, while others fled from their own relatives[^9]. He was a partisan witness, and the point is what his people were expected to do.

**The enemy's testimony.** The pagan emperor Julian tried to revive the old religion, and complained that "these impious Galileans not only feed their own poor but ours also"[^10].

**The medieval and modern hospital.** The Knights Hospitaller began with a hospital for pilgrims in Jerusalem[^11]. Florence Nightingale, who founded modern nursing, believed God had called her to the work[^12]. Henry Dunant, a devout Calvinist, founded the Red Cross after seeing the wounded at Solferino[^13]. Cicely Saunders, a Christian doctor, founded the modern hospice movement[^14].

**Today.** The Catholic Church is the largest non-government provider of health care in the world, with some 18,000 clinics and 16,000 homes for the elderly and disabled[^15].
`,
    },
    {
      id: "charity",
      title: "Charity and the Poor",
      tags: ["Charity"],
      content: `
Jesus taught that whatever is done for the hungry, the stranger, the sick and the prisoner is done for him (Matthew 25:35-40), and his followers built institutions on those words.

* **Orphans.** George Muller housed and educated thousands of orphans in Bristol without ever appealing for funds[^16]. Thomas Barnardo, an evangelical, founded homes for destitute children in London[^17].
* **The poorest.** Catherine and William Booth's Salvation Army became one of the largest charities in the world[^18]. Mother Teresa's Missionaries of Charity worked among the dying of Calcutta, though critics have questioned the quality of the medical care they gave[^19].
* **Young people and addiction.** George Williams founded the Young Men's Christian Association in 1844[^20]. Alcoholics Anonymous grew out of the Christian revivalist Oxford Group[^21].
* **World relief.** World Vision[^22] and Compassion International[^23] work among children in poverty, and Millard and Linda Fuller founded Habitat for Humanity on Christian principles[^24].

Charity is not uniquely Christian. Islam, Judaism and secular humanitarians all give generously. The claim is that this was central to the faith from the start, that the ancient world had nothing like it in scale, and that it has lasted.
`,
    },
    {
      id: "children-and-the-weak",
      title: "Children, Women and the Arena",
      tags: ["Rights"],
      content: `
**Unwanted babies.** Abandoning newborns was common in the ancient world. Christianity forbade infanticide from its earliest times, which led Constantine and Valentinian I to ban it across the Roman Empire[^25].

**The arena.** Tertullian condemned the gladiatorial shows as murder, and Christian emperors moved against them. Honorius legally ended the games in 399 and again in 404[^26].

**Women.** Christian communities refused to let husbands keep a double standard, and they supported widows, as the [women topic](/categories/women) sets out with its evidence and its failures. Missionaries also campaigned against practices that harmed women and children: William Carey against widow burning in India[^27][^28], others against foot binding in China[^29], and Mary Slessor against the killing of twin babies in Calabar[^30].
`,
    },
    {
      id: "reform",
      title: "Slavery, Prisons and Factories",
      tags: ["Rights", "Reform"],
      content: `
**Abolishing the slave trade.** English Quakers and evangelicals led the campaign, and William Wilberforce and the Clapham Sect carried it through Parliament on explicitly Christian grounds[^31]. Other Christians defended slavery from the Bible. The [slavery topic](/categories/slavery) sets out both sides.

**Prisons.** John Howard, a Calvinist, exposed conditions in English jails[^32], and the Quaker Elizabeth Fry worked among women prisoners at Newgate and pressed for reform[^33].

**Factories.** Lord Shaftesbury, an evangelical, drove the laws that limited child labour in mines and mills[^34].

**Civil rights.** Martin Luther King Jr. was a Baptist minister, and the organisation he led was the Southern Christian Leadership Conference[^35][^36]. Archbishop Desmond Tutu opposed apartheid in South Africa[^37]. Dietrich Bonhoeffer, a Lutheran pastor, opposed Hitler and was executed in 1945[^38].
`,
    },
    {
      id: "education",
      title: "Schools, Literacy and Language",
      tags: ["Education"],
      content: `
**Preserving learning.** After Rome's fall, monasteries under the Rule of Benedict copied and kept classical and Christian texts[^39]. The medieval universities grew from Church schools, as the [science topic](/categories/science) sets out.

**Teaching the poor to read.** Robert Raikes's Sunday schools taught poor children to read on the one day they were not working[^40].

**New colleges.** Most of the early American colleges, among them Harvard, Yale and Princeton, were founded by churches, largely to train ministers[^41].

**Alphabets.** Cyril and Methodius created the Glagolitic alphabet so that Slavic peoples could read Scripture[^42]. SIL, a Christian organisation, has studied and written down languages around the world, many of which had no written form[^43].

**The blind.** Louis Braille, a devout Catholic who played the organ for churches, invented the reading system that bears his name[^44].

**Democracy.** The sociologist Robert Woodberry argued in the *American Political Science Review* in 2012 that conversionary Protestant missions, through mass literacy, printing and voluntary groups, heavily influenced the spread of stable democracy[^45]. Other researchers have replicated his analysis with different measures and argue that the result breaks down, so this is contested[^46].
`,
    },
    {
      id: "the-numbers-today",
      title: "What the Numbers Show Today",
      tags: ["Research"],
      content: `
**Happiness and civic life.** A 2019 Pew study of 26 countries found that in the United States 36 per cent of actively religious people called themselves "very happy", against 25 per cent of others, and that they were more likely to vote. It found no clear link with better overall health after adjusting for other factors, and it cautioned that the figures do not prove religion is the cause[^47].

**Deaths of despair.** A Harvard study of more than 100,000 American health professionals found that women who attended services at least weekly had a 68 per cent lower risk of death from suicide, drug or alcohol poisoning and liver disease than those who never attended, and men a 33 per cent lower risk[^48]. It is an association among one group of people, which cannot show why.

These results cover religious people generally, not Christians alone. They do not show that Christianity is true. They do tell against the claim that religion makes people's lives worse.
`,
    },
    {
      id: "the-churchs-record",
      title: "The Church's Own Record",
      tags: ["History", "Failures"],
      content: `
None of the good above cancels what follows, all of which was done by Christians, often in Christ's name.

**The Crusades.** Whatever their origins as a response to conquest, crusaders massacred the Jews of the Rhineland in 1096 on their way east[^49], massacred Muslims and Jews when they took Jerusalem in 1099[^50], and sacked Christian Constantinople in 1204, against the Pope's orders[^51].

**The Inquisition.** The Spanish Inquisition prosecuted an estimated 150,000 people over three and a half centuries, and 3,000 to 5,000 were executed. That is far below the popular figures in the millions, and it is still thousands of people killed for their beliefs[^52]. Protestants did this too: Calvin's Geneva burned Michael Servetus for his views on the Trinity in 1553[^53], and both Catholics and Protestants persecuted Anabaptists.

**Witch trials.** Between 40,000 and 60,000 people were executed for witchcraft in early modern Europe and America, most of them women, by Catholic and Protestant courts alike[^54].

**Wars of religion.** Catholics and Protestants fought the Thirty Years' War, in which an estimated 4.5 to 8 million died, though politics drove it as well as faith[^55].

**The Jews.** Christians persecuted Jews for centuries, and Martin Luther's *On the Jews and Their Lies* urged burning synagogues[^56]. In Nazi Germany the "German Christians" backed Hitler[^57], while the much smaller Confessing Church resisted[^58]. The Catholic Church rejected the charge of collective Jewish guilt for Christ's death at the Second Vatican Council in 1965[^59].

**Colonialism.** Papal decrees of the fifteenth century were used to justify seizing non-Christian lands[^60], and the Spanish read out the *Requerimiento*, demanding submission on pain of war[^61]. In Canada, churches ran residential schools that took Indigenous children from their families, which the national Truth and Reconciliation Commission called cultural genocide[^62].

**Rwanda.** In the 1994 genocide in a largely Christian country, some priests and nuns took part, and victims were killed in the churches where they had sheltered[^63].

**Sexual abuse.** The John Jay study found 4,392 American Catholic priests and deacons accused of abuse between 1950 and 2002, and the *Boston Globe* exposed in 2002 how bishops moved offenders and hid what they had done[^64]. An Australian Royal Commission documented abuse across many institutions, Catholic and others[^65]. A 2022 independent report found that leaders of the Southern Baptist Convention had mishandled abuse claims[^66]. Children were harmed, and the people meant to protect them protected the institution.

**Admission.** On 12 March 2000 Pope John Paul II led a public Day of Pardon, asking forgiveness for the sins, past and present, of the Church's members[^67]. Critics said it was too general. Many Protestant bodies have made similar confessions. "Judgment", Peter says, is to "begin with God's household" (1 Peter 4:17).
`,
    },
    {
      id: "weighing-the-record",
      title: "Has Christianity Done More Harm Than Good?",
      tags: ["History", "Objections"],
      content: `
**"Religion causes most wars."** It does not. The *Encyclopedia of Wars* classifies 121 of 1,763 recorded conflicts, about 7 per cent, as primarily religious[^68]. Many wars have mixed motives, and counts of this sort are rough, but the claim as stated is false.

**Removing Christianity did not remove the killing.** Regimes committed to state atheism killed on a scale no religious persecution matched. *The Black Book of Communism* estimates more than 94 million deaths, a figure that scholars dispute, while no one disputes that the toll ran to many millions[^69]. This does not excuse a single Christian crime. It shows that the problem lies in human beings, which is what Christianity has always said.

**"Those weren't real Christians."** This is too easy, and it should not be used. Many were sincere believers, and Scripture has an uncomfortable word for them all the same: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven" (Matthew 7:21). "Whoever claims to love God yet hates a brother or sister is a liar" (1 John 4:20). The fair point is narrower. Critics condemn these acts by a standard, and Christ's own teaching condemns them too: love your enemies (Matthew 5:44), put away the sword (Matthew 26:52), and let the children come to him (Matthew 19:14). The reformers who ended these evils appealed to that same teaching.

**"Christians are hypocrites."** Many are. Jesus' harshest words were for religious hypocrites (Matthew 23). Christianity does not claim its followers are good, but that they need a saviour. A hypocrite's failure tells us about the hypocrite and leaves open whether Jesus rose from the dead, which is what the faith rests on.

**What the record shows.** Christians have done immense good and terrible harm. The harm was a betrayal of what Christ taught, while the good followed from it. Neither column proves or disproves the faith, which stands or falls on the [resurrection](/categories/resurrection).
`,
    },
  ],
  sources: [
    "1. [Encyclopedia] Wikipedia. 'Dominion: How the Christian Revolution Remade the World.' https://en.wikipedia.org/wiki/Dominion:_How_the_Christian_Revolution_Remade_the_World",
    "2. [Encyclopedia] Wikipedia. 'Bartolome de las Casas.' https://en.wikipedia.org/wiki/Bartolom%C3%A9_de_las_Casas",
    "3. [Encyclopedia] Wikipedia. 'Sublimis Deus.' https://en.wikipedia.org/wiki/Sublimis_Deus",
    "4. [Encyclopedia] Wikipedia. 'Stephen Langton.' https://en.wikipedia.org/wiki/Stephen_Langton",
    "5. [Encyclopedia] Wikipedia. 'Charles Malik.' https://en.wikipedia.org/wiki/Charles_Malik",
    "6. [Encyclopedia] Wikipedia. 'Universal Declaration of Human Rights.' https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights",
    "7. [Encyclopedia] Wikipedia. 'History of hospitals.' https://en.wikipedia.org/wiki/History_of_hospitals",
    "8. [Encyclopedia] Wikipedia. 'Basil of Caesarea.' https://en.wikipedia.org/wiki/Basil_of_Caesarea",
    "9. [Primary Source] Eusebius, Church History VII.22, quoting Dionysius of Alexandria. New Advent. https://www.newadvent.org/fathers/250107.htm",
    "10. [Encyclopedia] Wikipedia. 'Julian (emperor).' https://en.wikipedia.org/wiki/Julian_(emperor)",
    "11. [Encyclopedia] Wikipedia. 'Knights Hospitaller.' https://en.wikipedia.org/wiki/Knights_Hospitaller",
    "12. [Encyclopedia] Wikipedia. 'Florence Nightingale.' https://en.wikipedia.org/wiki/Florence_Nightingale",
    "13. [Encyclopedia] Wikipedia. 'Henry Dunant.' https://en.wikipedia.org/wiki/Henry_Dunant",
    "14. [Encyclopedia] Wikipedia. 'Cicely Saunders.' https://en.wikipedia.org/wiki/Cicely_Saunders",
    "15. [Encyclopedia] Wikipedia. 'Catholic Church and health care.' https://en.wikipedia.org/wiki/Catholic_Church_and_health_care",
    "16. [Encyclopedia] Wikipedia. 'George Muller.' https://en.wikipedia.org/wiki/George_M%C3%BCller",
    "17. [Encyclopedia] Wikipedia. 'Thomas John Barnardo.' https://en.wikipedia.org/wiki/Thomas_John_Barnardo",
    "18. [Encyclopedia] Wikipedia. 'Salvation Army.' https://en.wikipedia.org/wiki/Salvation_Army",
    "19. [Encyclopedia] Wikipedia. 'Mother Teresa.' https://en.wikipedia.org/wiki/Mother_Teresa",
    "20. [Encyclopedia] Wikipedia. 'YMCA.' https://en.wikipedia.org/wiki/YMCA",
    "21. [Encyclopedia] Wikipedia. 'Alcoholics Anonymous.' https://en.wikipedia.org/wiki/Alcoholics_Anonymous",
    "22. [Encyclopedia] Wikipedia. 'World Vision International.' https://en.wikipedia.org/wiki/World_Vision_International",
    "23. [Encyclopedia] Wikipedia. 'Compassion International.' https://en.wikipedia.org/wiki/Compassion_International",
    "24. [Encyclopedia] Wikipedia. 'Habitat for Humanity.' https://en.wikipedia.org/wiki/Habitat_for_Humanity",
    "25. [Encyclopedia] Wikipedia. 'Infanticide.' https://en.wikipedia.org/wiki/Infanticide",
    "26. [Encyclopedia] Wikipedia. 'Gladiator.' https://en.wikipedia.org/wiki/Gladiator",
    "27. [Encyclopedia] Wikipedia. 'William Carey (missionary).' https://en.wikipedia.org/wiki/William_Carey_(missionary)",
    "28. [Encyclopedia] Wikipedia. 'Sati (practice).' https://en.wikipedia.org/wiki/Sati_(practice)",
    "29. [Encyclopedia] Wikipedia. 'Foot binding.' https://en.wikipedia.org/wiki/Foot_binding",
    "30. [Encyclopedia] Wikipedia. 'Mary Slessor.' https://en.wikipedia.org/wiki/Mary_Slessor",
    "31. [Encyclopedia] Wikipedia. 'Abolitionism in the United Kingdom.' https://en.wikipedia.org/wiki/Abolitionism_in_the_United_Kingdom",
    "32. [Encyclopedia] Wikipedia. 'John Howard (prison reformer).' https://en.wikipedia.org/wiki/John_Howard_(prison_reformer)",
    "33. [Encyclopedia] Wikipedia. 'Elizabeth Fry.' https://en.wikipedia.org/wiki/Elizabeth_Fry",
    "34. [Encyclopedia] Wikipedia. 'Anthony Ashley-Cooper, 7th Earl of Shaftesbury.' https://en.wikipedia.org/wiki/Anthony_Ashley-Cooper,_7th_Earl_of_Shaftesbury",
    "35. [Encyclopedia] Wikipedia. 'Martin Luther King Jr..' https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
    "36. [Encyclopedia] Wikipedia. 'Southern Christian Leadership Conference.' https://en.wikipedia.org/wiki/Southern_Christian_Leadership_Conference",
    "37. [Encyclopedia] Wikipedia. 'Desmond Tutu.' https://en.wikipedia.org/wiki/Desmond_Tutu",
    "38. [Encyclopedia] Wikipedia. 'Dietrich Bonhoeffer.' https://en.wikipedia.org/wiki/Dietrich_Bonhoeffer",
    "39. [Encyclopedia] Wikipedia. 'Benedict of Nursia.' https://en.wikipedia.org/wiki/Benedict_of_Nursia",
    "40. [Encyclopedia] Wikipedia. 'Robert Raikes.' https://en.wikipedia.org/wiki/Robert_Raikes",
    "41. [Encyclopedia] Wikipedia. 'Colonial colleges.' https://en.wikipedia.org/wiki/Colonial_colleges",
    "42. [Encyclopedia] Wikipedia. 'Saints Cyril and Methodius.' https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius",
    "43. [Encyclopedia] Wikipedia. 'SIL Global.' https://en.wikipedia.org/wiki/SIL_Global",
    "44. [Encyclopedia] Wikipedia. 'Louis Braille.' https://en.wikipedia.org/wiki/Louis_Braille",
    "45. [Peer-Reviewed] Robert D. Woodberry, 'The Missionary Roots of Liberal Democracy', American Political Science Review (2012), summary. New Directions in the Anthropology of Christianity, University of Edinburgh. https://www.new-directions.sps.ed.ac.uk/woodberry-the-missionary-roots-of-liberal-democracy/",
    "46. [Working Paper] Nikolova and Polansky, 'Conversionary Protestants Do Not Cause Democracy'. EconPapers. https://econpapers.repec.org/RePEc:zbw:glodps:480",
    "47. [Research] Pew Research Center. 'Religion's Relationship to Happiness, Civic Engagement and Health Around the World' (2019). https://www.pewresearch.org/religion/2019/01/31/religions-relationship-to-happiness-civic-engagement-and-health-around-the-world/",
    "48. [University] Harvard Gazette. 'Religious services may lower risk of deaths of despair' (2020). https://news.harvard.edu/gazette/story/2020/05/religious-services-may-lower-risk-of-deaths-of-despair/",
    "49. [Encyclopedia] Wikipedia. 'Rhineland massacres.' https://en.wikipedia.org/wiki/Rhineland_massacres",
    "50. [Encyclopedia] Wikipedia. 'Siege of Jerusalem (1099).' https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1099)",
    "51. [Encyclopedia] Wikipedia. 'Sack of Constantinople.' https://en.wikipedia.org/wiki/Sack_of_Constantinople",
    "52. [Encyclopedia] Wikipedia. 'Spanish Inquisition.' https://en.wikipedia.org/wiki/Spanish_Inquisition",
    "53. [Encyclopedia] Wikipedia. 'Michael Servetus.' https://en.wikipedia.org/wiki/Michael_Servetus",
    "54. [Encyclopedia] Wikipedia. 'Witch trials in the early modern period.' https://en.wikipedia.org/wiki/Witch_trials_in_the_early_modern_period",
    "55. [Encyclopedia] Wikipedia. 'Thirty Years' War.' https://en.wikipedia.org/wiki/Thirty_Years%27_War",
    "56. [Encyclopedia] Wikipedia. 'On the Jews and Their Lies.' https://en.wikipedia.org/wiki/On_the_Jews_and_Their_Lies",
    "57. [Encyclopedia] Wikipedia. 'German Christians.' https://en.wikipedia.org/wiki/German_Christians",
    "58. [Encyclopedia] Wikipedia. 'Confessing Church.' https://en.wikipedia.org/wiki/Confessing_Church",
    "59. [Encyclopedia] Wikipedia. 'Nostra aetate.' https://en.wikipedia.org/wiki/Nostra_aetate",
    "60. [Encyclopedia] Wikipedia. 'Discovery doctrine.' https://en.wikipedia.org/wiki/Discovery_doctrine",
    "61. [Encyclopedia] Wikipedia. 'Requerimiento.' https://en.wikipedia.org/wiki/Requerimiento",
    "62. [Encyclopedia] Wikipedia. 'Canadian Indian residential school system.' https://en.wikipedia.org/wiki/Canadian_Indian_residential_school_system",
    "63. [Encyclopedia] Wikipedia. 'Rwandan genocide.' https://en.wikipedia.org/wiki/Rwandan_genocide",
    "64. [Encyclopedia] Wikipedia. 'Catholic Church sexual abuse cases.' https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases",
    "65. [Encyclopedia] Wikipedia. 'Royal Commission into Institutional Responses to Child Sexual Abuse.' https://en.wikipedia.org/wiki/Royal_Commission_into_Institutional_Responses_to_Child_Sexual_Abuse",
    "66. [Encyclopedia] Wikipedia. 'Southern Baptist Convention.' https://en.wikipedia.org/wiki/Southern_Baptist_Convention",
    "67. [Primary Source] Holy See. 'Presentation of the Day of Pardon' (12 March 2000). https://www.vatican.va/news_services/liturgy/documents/ns_lit_doc_20000312_presentation-day-pardon_en.html",
    "68. [Encyclopedia] Wikipedia. 'Religious war.' https://en.wikipedia.org/wiki/Religious_war",
    "69. [Encyclopedia] Wikipedia. 'The Black Book of Communism.' https://en.wikipedia.org/wiki/The_Black_Book_of_Communism"
  ],
  lastUpdated: "30-10-2026"
}
