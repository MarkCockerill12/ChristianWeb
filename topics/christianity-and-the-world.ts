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

**See also:** [The Image of God as Moral Foundation (Morality)](/categories/morality#section-image-of-god).
`,
    },
    {
      id: "hospitals",
      title: "Hospitals and Care of the Sick",
      tags: ["Medicine", "Charity"],
      content: `
**The first public hospitals.** In the Roman world, public hospitals as such did not exist until the Christian period. Late in the fourth century Basil of Caesarea founded a great complex for strangers, the sick and the poor, the Basiliad, and within decades such hospitals were common across the Byzantine world[^7][^8].

**Plague.** When plague struck Alexandria in the third century, Bishop Dionysius wrote that Christians visited and nursed the sick without thought of danger, many dying as a result, while others fled from their own relatives[^9]. He was a partisan witness, and the point is what his people were expected to do.

**The enemy's testimony.** The pagan emperor Julian tried to revive the old religion, and complained that "the impious Galilaeans support not only their own poor but ours as well"[^10].

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
* **World relief.** World Vision[^22][^23] and Compassion International[^24] work among children in poverty, and Millard and Linda Fuller founded Habitat for Humanity on Christian principles[^25].

Charity is not uniquely Christian. Islam, Judaism and secular humanitarians all give generously. The claim is that this was central to the faith from the start, that the ancient world had nothing like it in scale, and that it has lasted.
`,
    },
    {
      id: "children-and-the-weak",
      title: "Children, Women and the Arena",
      tags: ["Rights"],
      content: `
**Unwanted babies.** Abandoning newborns was common in the ancient world. Christianity forbade infanticide from its earliest times: the Didache commands, "you shall not murder a child by abortion nor kill that which is begotten"[^26]. This led Constantine and Valentinian I to ban it across the Roman Empire[^27].

**The arena.** Athenagoras wrote in the second century that Christians, "deeming that to see a man put to death is much the same as killing him, have abjured such spectacles"[^28]. Tertullian scorned the thought that Christians should "regale ourselves there with human blood"[^29]. Christian emperors moved against the shows, and Honorius legally ended them in 399 and again in 404[^30].

**Women.** Christian communities refused to let husbands keep a double standard, and they supported widows, as the [women topic](/categories/women) sets out with its evidence and its failures. Missionaries also campaigned against practices that harmed women and children: William Carey against widow burning in India[^31][^32], others against foot binding in China[^33], and Mary Slessor against the killing of twin babies in Calabar[^34][^35].

**See also:** [What Christianity Did to the Status of Women (Women)](/categories/women#section-church-history), [What the Early Church Taught (Abortion)](/categories/abortion#section-early-church).
`,
    },
    {
      id: "reform",
      title: "Slavery, Prisons and Factories",
      tags: ["Rights", "Reform"],
      content: `
**Abolishing the slave trade.** English Quakers and evangelicals led the campaign, and William Wilberforce and the Clapham Sect carried it through Parliament on explicitly Christian grounds[^36]. Other Christians defended slavery from the Bible. The [slavery topic](/categories/slavery) sets out both sides.

**Prisons.** John Howard, a Calvinist, exposed conditions in English jails[^37], and the Quaker Elizabeth Fry worked among women prisoners at Newgate and pressed for reform[^38].

**Factories.** Lord Shaftesbury, an evangelical, drove the laws that limited child labour in mines and mills[^39].

**Civil rights.** Martin Luther King Jr. was a Baptist minister, and the organisation he led was the Southern Christian Leadership Conference[^40][^41]. Archbishop Desmond Tutu opposed apartheid in South Africa[^42]. Dietrich Bonhoeffer, a Lutheran pastor, opposed Hitler and was executed in 1945[^43].

**See also:** [Historical Impact of Christianity on Slavery (Slavery)](/categories/slavery#section-historical-impact).
`,
    },
    {
      id: "education",
      title: "Schools, Literacy and Language",
      tags: ["Education"],
      content: `
**Preserving learning.** After Rome's fall, monasteries under the Rule of Benedict copied and kept classical and Christian texts[^44]. The medieval universities grew from Church schools, as the [science topic](/categories/science) sets out.

**Teaching the poor to read.** Robert Raikes's Sunday schools taught poor children to read on the one day they were not working[^45].

**New colleges.** Most of the early American colleges, among them Harvard, Yale and Princeton, were founded by churches, largely to train ministers[^46][^47].

**Alphabets.** Cyril and Methodius created the Glagolitic alphabet so that Slavic peoples could read Scripture[^48]. SIL, a Christian organisation, has studied and written down languages around the world, many of which had no written form[^49].

**The blind.** Louis Braille, a devout Catholic who played the organ for churches, invented the reading system that bears his name[^50].

**Democracy.** The sociologist Robert Woodberry argued in the *American Political Science Review* in 2012 that conversionary Protestant missions, through mass literacy, printing and voluntary groups, heavily influenced the spread of stable democracy[^51]. Other researchers have replicated his analysis with different measures and argue that the result breaks down, so this is contested[^52].

**See also:** [Monasteries, Universities and the Medieval Groundwork (Christianity and Science)](/categories/science#section-medieval-groundwork).
`,
    },
    {
      id: "the-numbers-today",
      title: "What the Numbers Show Today",
      tags: ["Research"],
      content: `
**Happiness and civic life.** A 2019 Pew study of 26 countries found that in the United States 36 per cent of actively religious people called themselves "very happy", against 25 per cent of others, and that they were more likely to vote. It found no clear link with better overall health after adjusting for other factors, and it cautioned that the figures do not prove religion is the cause[^53].

**Deaths of despair.** A Harvard study of more than 100,000 American health professionals found that women who attended services at least weekly had a 68 per cent lower risk of death from suicide, drug or alcohol poisoning and liver disease than those who never attended, and men a 33 per cent lower risk[^54]. It is an association among one group of people, which cannot show why.

These results cover religious people generally, not Christians alone. They do not show that Christianity is true. They do tell against the claim that religion makes people's lives worse.
`,
    },
    {
      id: "the-churchs-record",
      title: "The Church's Own Record",
      tags: ["History", "Failures"],
      content: `
None of the good above cancels what follows, all of which was done by Christians, often in Christ's name.

**The Crusades.** Whatever their origins as a response to conquest, crusaders massacred the Jews of the Rhineland in 1096 on their way east[^55], massacred Muslims and Jews when they took Jerusalem in 1099[^56], and sacked Christian Constantinople in 1204, against the Pope's orders[^57][^58].

**The Inquisition.** The Spanish Inquisition prosecuted an estimated 150,000 people over three and a half centuries, and 3,000 to 5,000 were executed. That is far below the popular figures in the millions, and it is still thousands of people killed for their beliefs[^59]. Protestants did this too: Calvin's Geneva burned Michael Servetus for his views on the Trinity in 1553[^60], and both Catholics and Protestants persecuted Anabaptists.

**Witch trials.** Between 40,000 and 60,000 people were executed for witchcraft in early modern Europe and America, most of them women, by Catholic and Protestant courts alike[^61].

**Wars of religion.** Catholics and Protestants fought the Thirty Years' War, in which an estimated 4.5 to 8 million died, though politics drove it as well as faith[^62].

**The Jews.** Christians persecuted Jews for centuries, and Martin Luther's *On the Jews and Their Lies* urged burning synagogues[^63][^64]. In Nazi Germany the "German Christians" backed Hitler[^65], while the much smaller Confessing Church resisted[^66]. The Catholic Church rejected the charge of collective Jewish guilt for Christ's death at the Second Vatican Council in 1965[^67].

**Colonialism.** Papal decrees of the fifteenth century were used to justify seizing non-Christian lands[^68], and the Spanish read out the *Requerimiento*, demanding submission on pain of war[^69]. In Canada, churches ran residential schools that took Indigenous children from their families, which the national Truth and Reconciliation Commission called cultural genocide[^70].

**Rwanda.** In the 1994 genocide in a largely Christian country, some priests and nuns took part, and victims were killed in the churches where they had sheltered[^71].

**Sexual abuse.** The John Jay study found 4,392 American Catholic priests and deacons accused of abuse between 1950 and 2002, and the *Boston Globe* exposed in 2002 how bishops moved offenders and hid what they had done[^72]. An Australian Royal Commission documented abuse across many institutions, Catholic and others[^73]. A 2022 independent report found that leaders of the Southern Baptist Convention had mishandled abuse claims[^74]. Children were harmed, and the people meant to protect them protected the institution.

**Admission.** On 12 March 2000 Pope John Paul II led a public Day of Pardon, asking forgiveness for the sins, past and present, of the Church's members[^75]. Critics said it was too general. Many Protestant bodies have made similar confessions. "Judgment", Peter says, is to "begin with God's household" (1 Peter 4:17).

**See also:** [Why Do People Leave the Faith? (Is Belief in God Reasonable?)](/categories/is-belief-reasonable#section-why-people-leave), [The Galileo Affair, Told Straight (Christianity and Science)](/categories/science#section-galileo).
`,
    },
    {
      id: "white-mans-religion",
      title: "Isn't Christianity the White Man's Religion?",
      tags: ["Objections", "History"],
      content: `
**The objection.** Christianity is a European religion, imposed by colonisers and slave-owners, and Black and colonised peoples should reject it. The history behind this is real, and it is set out above. The conclusion does not follow, because the faith did not begin in Europe.

**Where it began.** Jesus was a Jew from the Middle East who never set foot in Europe. Those present at Pentecost came from Egypt, Libya, Arabia and Mesopotamia (Acts 2:9-11). A man from Cyrene in North Africa carried Jesus' cross (Mark 15:21), and one of the first converts Acts describes is an official from Ethiopia (Acts 8:26-39).

**Africa and Asia before most of Europe.**

* **Armenia** became the first state to adopt Christianity, in 301[^76].
* **Ethiopia.** King Ezana of Aksum embraced Christianity in the fourth century[^77][^78], and his church has an unbroken history to this day, long before most of northern Europe converted.
* **North Africa** produced Tertullian, Cyprian and Augustine, among the most influential thinkers in Christian history[^79].
* **India.** The Saint Thomas Christians trace their origin to the apostle Thomas in the first century, though historians dispute that visit[^80].
* **China.** A stone stele set up in 781 records the Church of the East at work in Tang China[^81].

**What the enslaved saw.** Enslaved Africans in America met in secret to worship, in what were known as hush harbours[^82]. They knew the difference between Christ and their masters' religion. Frederick Douglass, who escaped slavery, wrote: "between the Christianity of this land, and the Christianity of Christ, I recognize the widest possible difference"[^83]. The Black church went on to lead the American civil rights movement.

**Today.** Christians are now a majority in every region of the world except Asia-Pacific and the Middle East and North Africa[^84], and the faith is held by people of every colour.

**What is fair in the objection.** Missionaries often carried colonial assumptions with the gospel, and some churches blessed conquest and slavery, including through the [misuse of the curse of Ham](/categories/slavery). That is a charge against those Christians, and the New Testament is the ground on which it can be made: "there is neither Jew nor Gentile, neither slave nor free" (Galatians 3:28).
`,
    },
    {
      id: "weighing-the-record",
      title: "Has Christianity Done More Harm Than Good?",
      tags: ["History", "Objections"],
      content: `
**"Religion causes most wars."** It does not. The *Encyclopedia of Wars* classifies 121 of 1,763 recorded conflicts, about 7 per cent, as primarily religious[^85]. Many wars have mixed motives, and counts of this sort are rough, but the claim as stated is false.

**Removing Christianity did not remove the killing.** Regimes committed to state atheism killed on a scale no religious persecution matched. *The Black Book of Communism* estimates more than 94 million deaths, a figure that scholars dispute, while no one disputes that the toll ran to many millions[^86]. This does not excuse a single Christian crime. It shows that the problem lies in human beings, which is what Christianity has always said.

**"Those weren't real Christians."** This is too easy, and it should not be used. Many were sincere believers, and Scripture has an uncomfortable word for them all the same: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven" (Matthew 7:21). "Whoever claims to love God yet hates a brother or sister is a liar" (1 John 4:20). The fair point is narrower. Critics condemn these acts by a standard, and Christ's own teaching condemns them too: love your enemies (Matthew 5:44), put away the sword (Matthew 26:52), and let the children come to him (Matthew 19:14). The reformers who ended these evils appealed to that same teaching.

**"Christians are hypocrites."** Many are. Jesus' harshest words were for religious hypocrites (Matthew 23). Christianity does not claim its followers are good, but that they need a saviour. A hypocrite's failure tells us about the hypocrite and leaves open whether Jesus rose from the dead, which is what the faith rests on.

**What the record shows.** Christians have done immense good and terrible harm. The harm was a betrayal of what Christ taught, while the good followed from it. Neither column proves or disproves the faith, which stands or falls on the [resurrection](/categories/resurrection).
`,
    },
  ],
  sources: [
    "1. [Wikipedia] 'Dominion: How the Christian Revolution Remade the World.' https://en.wikipedia.org/wiki/Dominion:_How_the_Christian_Revolution_Remade_the_World",
    "2. [Academic] 'Bartolomé de las Casas and 500 Years of Racial Injustice | Origins.' Origins, Ohio State University. https://origins.osu.edu/milestones/july-2015-bartolom-de-las-casas-and-500-years-racial-injustice",
    "3. [Primary Source] Pope Paul III, Sublimis Deus (1537). Papal Encyclicals Online. https://www.papalencyclicals.net/paul03/p3subli.htm",
    "4. [Academic] 'The Cardinals of the Holy Roman Church - Biographical Dictionary - Consistory of 1205.' Florida International University. https://cardinals.fiu.edu/bios1205.htm",
    "5. [Academic] Roth. P.C. Chang and Charles Malik: The Two Philosophers of the Universal Declaration of Human Rights. Human Rights Quarterly, 2023. https://doi.org/10.1353/hrq.2023.a910487",
    "6. [Reference] United Nations. History of the Declaration, naming Charles Malik as Committee Rapporteur. https://www.un.org/en/about-us/udhr/history-of-the-declaration",
    "7. [Wikipedia] 'History of hospitals.' https://en.wikipedia.org/wiki/History_of_hospitals",
    "8. [Primary Source] Basil of Caesarea, Letter 94, defending his building for strangers and the sick. New Advent. https://www.newadvent.org/fathers/3202094.htm",
    "9. [Primary Source] Eusebius, Church History VII.22, quoting Dionysius of Alexandria. New Advent. https://www.newadvent.org/fathers/250107.htm",
    "10. [Primary Source] Julian, Letter to Arsacius, trans. W. C. Wright. Tertullian Project. https://www.tertullian.org/fathers/julian_apostate_letters_1_trans.htm",
    "11. [Encyclopedia] World History Encyclopedia. 'Knights Hospitaller.' https://www.worldhistory.org/Knights_Hospitaller/",
    "12. [Academic] 'Florence Nightingale: The Mother of Nursing.' PubMed Central. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4557413",
    "13. [Wikipedia] 'Henry Dunant.' https://en.wikipedia.org/wiki/Henry_Dunant",
    "14. [Academic] British Medical Journal Publishing Group. Dame Cicely Saunders. BMJ, 2005. https://doi.org/10.1136/bmj.331.7510.238",
    "15. [Wikipedia] 'Catholic Church and health care.' https://en.wikipedia.org/wiki/Catholic_Church_and_health_care",
    "16. [Wikipedia] 'George Muller.' https://en.wikipedia.org/wiki/George_M%C3%BCller",
    "17. [Wikipedia] 'Thomas John Barnardo.' https://en.wikipedia.org/wiki/Thomas_John_Barnardo",
    "18. [Reference] 'BBC - Religions - Christianity: Salvation Army.' BBC. https://www.bbc.co.uk/religion/religions/christianity/subdivisions/salvationarmy_1.shtml",
    "19. [Wikipedia] 'Mother Teresa.' https://en.wikipedia.org/wiki/Mother_Teresa",
    "20. [Wikipedia] 'YMCA.' https://en.wikipedia.org/wiki/YMCA",
    "21. [Academic] Wilson. How Alcoholics Anonymous came about. Australian Drug and Alcohol Review, 1988. https://doi.org/10.1080/09595238880000781",
    "22. [Wikipedia] 'World Vision International.' https://en.wikipedia.org/wiki/World_Vision_International",
    "23. [Academic] Erica Bornstein. Child Sponsorship, Evangelism, and Belonging in the Work of World Vision Zimbabwe. American Ethnologist, 2001. https://doi.org/10.1525/ae.2001.28.3.595",
    "24. [Wikipedia] 'Compassion International.' https://en.wikipedia.org/wiki/Compassion_International",
    "25. [Wikipedia] 'Habitat for Humanity.' https://en.wikipedia.org/wiki/Habitat_for_Humanity",
    "26. [Primary Source] The Didache 2:2. New Advent. https://www.newadvent.org/fathers/0714.htm",
    "27. [Wikipedia] 'Infanticide.' https://en.wikipedia.org/wiki/Infanticide",
    "28. [Primary Source] Athenagoras, A Plea for the Christians, chapter 35. New Advent. https://www.newadvent.org/fathers/0205.htm",
    "29. [Primary Source] Tertullian, On the Spectacles. New Advent. https://www.newadvent.org/fathers/0303.htm",
    "30. [Wikipedia] 'Gladiator.' https://en.wikipedia.org/wiki/Gladiator",
    "31. [Wikipedia] 'William Carey (missionary).' https://en.wikipedia.org/wiki/William_Carey_(missionary)",
    "32. [Academic] 'The Representation of Sati.' University of Texas at Austin. https://www.laits.utexas.edu/solvyns-project/Satiart.rft.html",
    "33. [Wikipedia] 'Foot binding.' https://en.wikipedia.org/wiki/Foot_binding",
    "34. [Wikipedia] 'Mary Slessor.' https://en.wikipedia.org/wiki/Mary_Slessor",
    "35. [Academic] Obinna. Bridging the Divide: The Legacies of Mary Slessor, ‘Queen’ of Calabar, Nigeria. Studies in World Christianity, 2011. https://doi.org/10.3366/swc.2011.0029",
    "36. [Wikipedia] 'Abolitionism in the United Kingdom.' https://en.wikipedia.org/wiki/Abolitionism_in_the_United_Kingdom",
    "37. [Wikipedia] 'John Howard (prison reformer).' https://en.wikipedia.org/wiki/John_Howard_(prison_reformer)",
    "38. [Primary Source] 'The Project Gutenberg eBook of ELIZABETH FRY, by MRS. E.R. PITMAN.' Project Gutenberg. https://www.gutenberg.org/files/16606/16606-h/16606-h.htm",
    "39. [Academic] The Diaries of Anthony Ashley-Cooper, the Seventh Earl of Shaftesbury., 2023. https://doi.org/10.5871/bacad/9780197267417.001.0001",
    "40. [Reference] The Nobel Prize. 'Martin Luther King Jr.: Biographical.' https://www.nobelprize.org/prizes/peace/1964/king/biographical/",
    "41. [Academic] Arnone. Southern Christian Leadership Conference (SCLC) (United States). The Wiley-Blackwell Encyclopedia of Social and Political Movements, 2022. https://doi.org/10.1002/9780470674871.wbespm393.pub2",
    "42. [Reference] The Nobel Prize. 'Desmond Tutu: Biographical.' https://www.nobelprize.org/prizes/peace/1984/tutu/biographical/",
    "43. [Academic] United States Holocaust Memorial Museum, Holocaust Encyclopedia. 'Dietrich Bonhoeffer.' https://encyclopedia.ushmm.org/content/en/article/dietrich-bonhoeffer",
    "44. [Encyclopedia] Catholic Encyclopedia (1913), New Advent. 'St. Benedict of Nursia.' https://www.newadvent.org/cathen/02467b.htm",
    "45. [Reference] 'BBC - Gloucestershire - History - Historic building reopens.' BBC. https://www.bbc.co.uk/gloucestershire/content/articles/2008/11/19/robert_raikes_house_feature.shtml",
    "46. [Wikipedia] 'Colonial colleges.' https://en.wikipedia.org/wiki/Colonial_colleges",
    "47. [Academic] Hoeveler. Creating the American Mind. 2002. https://doi.org/10.5040/9798881834111",
    "48. [Academic] 'The Significance of the Missions of Cyril and Methodius | Slavic Review | Cambridge Core.' Cambridge University Press. https://www.cambridge.org/core/journals/slavic-review/article/abs/significance-of-the-missions-of-cyril-and-methodius/BA6950F8E7B59143643C69310833AD20",
    "49. [Wikipedia] 'SIL Global.' https://en.wikipedia.org/wiki/SIL_Global",
    "50. [Wikipedia] 'Louis Braille.' https://en.wikipedia.org/wiki/Louis_Braille",
    "51. [Academic] Robert D. Woodberry, 'The Missionary Roots of Liberal Democracy', American Political Science Review (2012), summary. New Directions in the Anthropology of Christianity, University of Edinburgh. https://www.new-directions.sps.ed.ac.uk/woodberry-the-missionary-roots-of-liberal-democracy/",
    "52. [Reference] Nikolova and Polansky, 'Conversionary Protestants Do Not Cause Democracy'. EconPapers. https://econpapers.repec.org/RePEc:zbw:glodps:480",
    "53. [Academic] Pew Research Center. 'Religion's Relationship to Happiness, Civic Engagement and Health Around the World' (2019). https://www.pewresearch.org/religion/2019/01/31/religions-relationship-to-happiness-civic-engagement-and-health-around-the-world/",
    "54. [Academic] Harvard Gazette. 'Religious services may lower risk of deaths of despair' (2020). https://news.harvard.edu/gazette/story/2020/05/religious-services-may-lower-risk-of-deaths-of-despair/",
    "55. [Wikipedia] 'Rhineland massacres.' https://en.wikipedia.org/wiki/Rhineland_massacres",
    "56. [Wikipedia] 'Siege of Jerusalem (1099).' https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1099)",
    "57. [Wikipedia] 'Sack of Constantinople.' https://en.wikipedia.org/wiki/Sack_of_Constantinople",
    "58. [Reference] Pope sorrow over Constantinople sacking. BBC News. https://news.bbc.co.uk/2/hi/europe/3850789.stm",
    "59. [Wikipedia] 'Spanish Inquisition.' https://en.wikipedia.org/wiki/Spanish_Inquisition",
    "60. [Academic] 'Complaint Against Servetus.' Hanover Historical Texts Project. https://history.hanover.edu/texts/comserv.html",
    "61. [Wikipedia] 'Witch trials in the early modern period.' https://en.wikipedia.org/wiki/Witch_trials_in_the_early_modern_period",
    "62. [Wikipedia] 'Thirty Years' War.' https://en.wikipedia.org/wiki/Thirty_Years%27_War",
    "63. [Wikipedia] 'On the Jews and Their Lies.' https://en.wikipedia.org/wiki/On_the_Jews_and_Their_Lies",
    "64. [Academic] Wendebourg. Martin Luther, Jews, and Judaism. Oxford Research Encyclopedia of Religion, 2017. https://doi.org/10.1093/acrefore/9780199340378.013.278",
    "65. [Academic] United States Holocaust Memorial Museum, Holocaust Encyclopedia. 'The German Churches and the Nazi State.' https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state",
    "66. [Academic] Hockenos. The Church Struggle and the Confessing Church: An Introduction to Bonhoeffer's Context. Studies in Christian-Jewish Relations, 2011. https://doi.org/10.6017/scjr.v2i1.1399",
    "67. [Primary Source] Second Vatican Council, Nostra Aetate (1965). Holy See. https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html",
    "68. [Primary Source] Pope Alexander VI, Inter Caetera (1493). Papal Encyclicals Online. https://www.papalencyclicals.net/alex06/alex06inter.htm",
    "69. [Academic] Requerimiento. Milestone Documents in World History, 2024. https://doi.org/10.3735/9781961844056.book-part-060",
    "70. [Academic] 'The Prevalence and Correlates of Residential School Denialism in Canada | Canadian Journal of Political Science/Revue canadienne de science politique.' Cambridge University Press. https://www.cambridge.org/core/product/identifier/S0008423925100899/type/journal_article",
    "71. [Wikipedia] 'Rwandan genocide.' https://en.wikipedia.org/wiki/Rwandan_genocide",
    "72. [Academic] 'Catholic Priest Sex Abuse Scandals: How the Media Shapes the Public Perception of Child Abuse in the Catholic Church.' Duquesne University School of Law. https://sites.law.duq.edu/juris/2019/03/16/catholic-priest-sex-abuse-scandals-how-the-media-shapes-the-public-perception-of-child-abuse-in-the-catholic-church/",
    "73. [Academic] Wright K et al. The Australian Royal Commission into Institutional Responses to Child Sexual Abuse., 2017. https://pubmed.ncbi.nlm.nih.gov/29037437/",
    "74. [Wikipedia] 'Southern Baptist Convention.' https://en.wikipedia.org/wiki/Southern_Baptist_Convention",
    "75. [Primary Source] Holy See. 'Presentation of the Day of Pardon' (12 March 2000). https://www.vatican.va/news_services/liturgy/documents/ns_lit_doc_20000312_presentation-day-pardon_en.html",
    "76. [Wikipedia] 'Religion in Armenia.' https://en.wikipedia.org/wiki/Christianity_in_Armenia",
    "77. [Wikipedia] 'Ezana of Axum.' https://en.wikipedia.org/wiki/Ezana_of_Axum",
    "78. [Academic] Butts. Ezana of Aksum: The First Christian African King. Aethiopica, 2026. https://doi.org/10.15460/gfj9t143",
    "79. [Wikipedia] 'Early African Church.' https://en.wikipedia.org/wiki/Early_African_Church",
    "80. [Academic] Przemysław Turek. Syriac Heritage of the Saint Thomas Christians: Language and Liturgical Tradition Saint Thomas Christians – origins, language and liturgy. Orientalia Christiana Cracoviensia, 2011. https://doi.org/10.15633/ochc.1038",
    "81. [Wikipedia] 'Xi'an Stele.' https://en.wikipedia.org/wiki/Xi%27an_Stele",
    "82. [Wikipedia] 'Black church.' https://en.wikipedia.org/wiki/Black_church",
    "83. [Primary Source] Frederick Douglass, Narrative of the Life of Frederick Douglass (1845), Appendix. Project Gutenberg. https://www.gutenberg.org/files/23/23-h/23-h.htm",
    "84. [Academic] Pew Research Center. 'Countries with the most Christians and global Christian population change, 2010-2020' (2025). https://www.pewresearch.org/religion/2025/06/09/christian-population-change/",
    "85. [Wikipedia] 'Religious war.' https://en.wikipedia.org/wiki/Religious_war",
    "86. [Wikipedia] 'The Black Book of Communism.' https://en.wikipedia.org/wiki/The_Black_Book_of_Communism"
  ],
  lastUpdated: "30-10-2026"
}
