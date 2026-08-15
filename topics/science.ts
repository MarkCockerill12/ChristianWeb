import type { Topic } from './types'

export const science: Topic = {
  id: "science",
  title: "Does Christianity Conflict with Science?",
  description: "Where the idea of a war between faith and science came from, why Christian theology helped make natural science possible, and what the two have to do with each other now.",
  icon: "Atom",
  color: "blue",
  tags: ["Science", "Historical"],
  tldr: "The claim that Christianity and science have always been at war is a nineteenth-century invention that historians of science abandoned decades ago. The stronger claim is also defensible: Christian doctrines of a contingent, orderly creation made by a rational God helped make natural science thinkable, the medieval Church founded the universities in which it was first practised, and a long line of working scientists from Copernicus to Collins held the faith seriously. Real friction did occur, Galileo above all, and the honest account names it rather than explaining it away.",
  content: `
The claim that Christianity and science are natural enemies is a specific historical thesis with a traceable origin, and historians of science do not hold it[^1][^2]. It was assembled in the late nineteenth century by two American writers, and its collapse under scholarly examination is one of the better documented reversals in the field[^3].

Abandoning the warfare story is not the same as claiming that relations were always smooth. Galileo was condemned for holding a proposition that turned out to be true, and the American courtroom fights over evolution were real fights[^4]. Historians now describe the pattern as complexity rather than conflict: religious people stood on both sides of nearly every dispute, and in most of them no party set out to discredit faith or to discredit science[^5].

A stronger claim than bare compatibility is also defensible. Christian theology supplied several of the assumptions the scientific enterprise runs on, the institutions in which it was first practised were Church foundations, and the disagreement that actually divides the field runs between theism and metaphysical naturalism rather than between faith and scientific method[^6].
`,
  timeline: [
    {
      id: 1,
      date: "c. 401-415 AD",
      title: "Augustine writes On the Literal Meaning of Genesis",
      period: "Patristic",
      color: "#7C2D12",
      description: "Augustine warns Christians against making confident pronouncements about the natural world that an unbeliever can demonstrate to be false, because the credibility of Scripture suffers when its defenders talk nonsense about nature.",
      significance: "Establishes early the principle that apparent conflict between Scripture and nature is a failure of interpretation rather than a failure of one of the two."
    },
    {
      id: 2,
      date: "c. 725 AD",
      title: "Bede links the tides to the moon",
      period: "Early Medieval",
      color: "#9A3412",
      description: "Writing at Jarrow, Bede produced On the Reckoning of Time, which set out the computus for dating Easter and recorded that tides follow the moon and vary by locality.",
      significance: "A monastic scholar doing quantitative natural observation four centuries before the universities existed."
    },
    {
      id: 3,
      date: "1088",
      title: "University of Bologna founded",
      period: "High Medieval",
      color: "#B45309",
      description: "The first European university takes shape, followed by Paris and Oxford. All three are Church foundations, chartered under ecclesiastical authority and staffed by clerics.",
      significance: "Creates the permanent, self-governing institution with a fixed curriculum in which natural philosophy could be taught continuously for centuries."
    },
    {
      id: 4,
      date: "c. 1225",
      title: "Grosseteste writes De luce",
      period: "High Medieval",
      color: "#CA8A04",
      description: "Robert Grosseteste, later Bishop of Lincoln, describes the origin of the cosmos as an expansion of light from a single point according to a consistent set of physical principles.",
      significance: "The earliest known attempt to describe the whole universe with one coherent physical law, and an early statement of experimental method."
    },
    {
      id: 5,
      date: "1277",
      title: "The Condemnation of 219 propositions at Paris",
      period: "High Medieval",
      color: "#65A30D",
      description: "Bishop Tempier condemns propositions asserting that God could not have made the world otherwise, including the claim that a vacuum or multiple worlds were impossible.",
      significance: "Intended as a restriction, it licensed speculation beyond Aristotle: if God is free, what nature is actually like has to be found out rather than deduced."
    },
    {
      id: 6,
      date: "c. 1330-1360",
      title: "The Oxford Calculators and Nicole Oresme",
      period: "Late Medieval",
      color: "#0D9488",
      description: "Merton College mathematicians state the mean speed theorem for uniform acceleration; Oresme proves it geometrically and uses velocity-time graphs two centuries before analytic geometry.",
      significance: "The kinematics Galileo would later use for falling bodies was worked out first by clerics in Church-funded colleges."
    },
    {
      id: 7,
      date: "1543",
      title: "Copernicus publishes De revolutionibus",
      period: "Scientific Revolution",
      color: "#0891B2",
      description: "A canon of Frombork cathedral publishes the heliocentric model, dedicating it to Pope Paul III. It circulated for over seventy years without ecclesiastical objection.",
      significance: "Heliocentrism was not condemned on arrival. The conflict came later and for reasons that were as much political as doctrinal."
    },
    {
      id: 8,
      date: "1609-1619",
      title: "Kepler publishes the laws of planetary motion",
      period: "Scientific Revolution",
      color: "#2563EB",
      description: "Kepler, a Lutheran who had trained for ministry, replaces circular orbits with ellipses and treats astronomy as the study of a cosmos ordered by its Creator.",
      significance: "The first mathematical laws of celestial motion, produced by someone who understood the work as a religious vocation."
    },
    {
      id: 9,
      date: "1633",
      title: "Galileo condemned by the Roman Inquisition",
      period: "Scientific Revolution",
      color: "#7C3AED",
      description: "Galileo is convicted of holding and defending a censured doctrine, made to abjure, and placed under house arrest for the remaining nine years of his life.",
      significance: "The one episode where a church court punished a scientist for a true scientific claim. It is a genuine failure, not a myth."
    },
    {
      id: 10,
      date: "1660-1691",
      title: "Royal Society founded; Boyle endows his Lectures",
      period: "Scientific Revolution",
      color: "#9333EA",
      description: "The Royal Society is founded in London. Robert Boyle, a founding fellow, leaves money in his will for annual lectures defending Christianity, and wrote The Christian Virtuoso to argue that experimental science suits a believer.",
      significance: "The founding institution of organised experimental science treated natural philosophy and Christian apologetics as one project."
    },
    {
      id: 11,
      date: "1669",
      title: "Steno publishes the Prodromus",
      period: "Scientific Revolution",
      color: "#C026D3",
      description: "Nicolas Steno states the principles of stratigraphy, including superposition. He converted to Catholicism in 1667, was ordained, became a bishop in 1677, and was beatified in 1988.",
      significance: "Geology's founding principles were set out by a man who left science for the priesthood."
    },
    {
      id: 12,
      date: "1713",
      title: "Newton adds the General Scholium to the Principia",
      period: "Scientific Revolution",
      color: "#DB2777",
      description: "Newton appends an argument that the order of the solar system could only proceed from an intelligent and powerful Being. His private papers show he also rejected the Trinity.",
      significance: "The most influential physicist in history took natural theology to be part of physics, while holding views the Church of England would have judged heretical."
    },
    {
      id: 13,
      date: "1866",
      title: "Mendel publishes his experiments on plant hybrids",
      period: "Nineteenth Century",
      color: "#E11D48",
      description: "Gregor Mendel, an Augustinian friar at Brno, publishes the breeding results that establish the laws of inheritance. The work is ignored until 1900.",
      significance: "Genetics begins in a monastery garden, with a friar keeping records for eight years."
    },
    {
      id: 14,
      date: "1925",
      title: "The Scopes trial at Dayton, Tennessee",
      period: "Twentieth Century",
      color: "#DC2626",
      description: "John Scopes is convicted of teaching evolution against the Butler Act and fined, and the conviction is overturned on appeal on a technicality while the Act is upheld.",
      significance: "The episode that fixed the warfare image in American public memory, and the one most distorted by its later dramatisation."
    },
    {
      id: 15,
      date: "1927",
      title: "Lemaitre proposes an expanding universe",
      period: "Twentieth Century",
      color: "#EA580C",
      description: "Georges Lemaitre, a Belgian priest, derives an expanding solution to Einstein's equations and later proposes the primeval atom. In 1952 he asked Pius XII to stop presenting it as proof of creation.",
      significance: "The Big Bang model came from a priest who insisted it be argued as physics rather than used as apologetics."
    },
    {
      id: 16,
      date: "2003",
      title: "Human Genome Project completed",
      period: "Twenty-First Century",
      color: "#16A34A",
      description: "The reference human genome is finished under Francis Collins, who came to Christian faith as an adult and later directed the National Institutes of Health.",
      significance: "The largest biological project ever undertaken was led by a Christian who has written publicly about the reasons for his faith."
    }
  ],
  subtopics: [
    {
      id: "conflict-thesis",
      title: "Where the Warfare Story Came From",
      tags: ["history", "conflict thesis", "myths"],
      content: `
Two books built the idea. John William Draper's *History of the Conflict between Religion and Science* appeared in 1874, written in the wake of the First Vatican Council and its definition of papal infallibility, and Andrew Dickson White's *A History of the Warfare of Science with Theology in Christendom* followed in 1896[^7]. White was the founding president of Cornell, a university established without religious affiliation, and his history served partly to defend that founding against clerical criticism[^8][^9].

Both books were polemics with footnotes, and neither survived examination. Draper's is no longer treated as a reliable secondary source, and specialists in nineteenth-century German material have shown that even the details of the conflict narrative were assembled to fit the argument rather than drawn from it[^10].

Acceptance of the thesis declined across the twentieth century and was effectively finished by the 1970s. The decisive publication was *God and Nature*, an eighteen-essay collection edited by David Lindberg and Ronald Numbers in 1986, which reassessed the trial of Galileo, the Newtonian synthesis and the reception of Darwin using the available archival scholarship instead of the warfare frame[^11][^12].

**A worked example of how such a myth forms.** The story that medieval Christians thought the earth flat, and that Columbus faced down hooded theologians at Salamanca, is an invention of Washington Irving's fictionalised 1828 life of Columbus. Educated Europeans had held the earth to be a sphere since antiquity; Cosmas Indicopleustes is the only medieval European known to have argued otherwise, and his work had almost no influence[^13][^14].

The corresponding picture of the medieval period as a scientific blank is equally hard to sustain. Bede tied the tides to the lunar cycle and noted their local variation in the eighth century, and Gerbert of Aurillac, who became Pope Sylvester II in 999, reintroduced the abacus and the armillary sphere to western Europe and taught Arabic numerals[^15][^16].

None of this makes the record clean. Galileo's condemnation stands, the reception of Darwin was genuinely hostile in places, and the twentieth-century American disputes over school curricula were fought in earnest. The point is narrower: those episodes are the exceptions from which a general law was wrongly inferred[^17].
`
    },
    {
      id: "theological-roots",
      title: "Why Christian Theology Made Science Thinkable",
      tags: ["theology", "philosophy of science", "creation"],
      content: `
Natural science needs assumptions it cannot itself establish. It needs nature to be orderly, that order to be intelligible to human minds, and the actual order to be discoverable only by looking. Christian doctrine supplied all three[^18].

**Creation is orderly because its maker is rational.** A universe made by a single rational God, and not the by-product of a struggle among capricious deities, is the kind of thing that can have laws at all. The very concept of a law of nature carries this theological ancestry: the language of divine legislation over matter runs through Descartes, Boyle and Newton before it becomes the neutral technical term now in use[^19][^20].

**Creation is contingent, so nature must be investigated rather than deduced.** If God was free to make the world one way rather than another, no amount of reasoning from first principles will tell you which way he chose. That is an argument for going and looking, and it cuts directly against the Aristotelian confidence that the structure of nature could be derived from self-evident premises[^21].

**Human minds are fitted to the task.** Being made in the image of God grounds the expectation that creatures can understand the creation they are set in, which is the assumption every experiment silently relies on[^22].

**Nature is not divine.** Genesis presents the sun and moon as objects that God made rather than as gods, which removes the religious objection to dissecting, measuring and experimenting on the natural world[^23].

**Both books have the same author.** The doctrine of general and special revelation treats Scripture and nature as two divine books, so that a genuine contradiction between them is impossible in principle and any apparent one is an error in reading one book or the other[^24].

Peter Harrison has pressed a further and more specific version of the argument: the Reformation's insistence on the literal sense of the biblical text broke the medieval habit of reading natural objects as symbols pointing beyond themselves, and a nature no longer read allegorically became available for description and measurement[^25][^26].

**Where the argument should stop.** The claim that Christianity is a sufficient cause of modern science, or that no other civilisation could have produced it, goes past the evidence. Greek natural philosophy, Islamic mathematics, astronomy and optics, and Chinese technical achievement all did real work, and much of the medieval Latin recovery of Aristotle came through Arabic translation and commentary. The defensible claim is narrower and still substantial: Christian doctrine made a set of assumptions available and normal that the scientific enterprise turned out to need[^27][^28].

The assumptions have not gone away, and none of them has a scientific proof. That nature will continue to behave tomorrow as it did today is the problem of induction, unresolved since Hume, and it is presupposed by every experiment ever run[^29].
`
    },
    {
      id: "medieval-groundwork",
      title: "Monasteries, Universities and the Medieval Groundwork",
      tags: ["medieval", "universities", "history"],
      content: `
The institutions came first. Benedictine houses copied and preserved classical texts through the collapse of Roman administration, and the Carolingian reform of the eighth and ninth centuries built a network of cathedral and monastic schools with a fixed curriculum in the liberal arts[^30][^31].

Out of those schools came the university, which is a medieval Christian invention with no ancient precedent: a self-governing corporation of masters and students, holding a charter, awarding degrees, and teaching a syllabus that continued after any individual teacher had gone. Bologna dates from 1088, Paris and Oxford follow within a century, and all three were ecclesiastical foundations staffed largely by clerics[^32][^33][^34][^35].

Their arts faculties made Aristotle's natural philosophy compulsory reading for every student of theology, law or medicine. For roughly four centuries, the largest sustained investment in the study of nature anywhere in the world was funded by the Church[^36].

**A restriction that opened things up.** In 1277 the Bishop of Paris condemned 219 propositions, among them the claim that God could not have created a vacuum, or more than one world. The condemnation was meant to curb Aristotelian necessitarianism, and its effect was to license enquiry: if God could have made things otherwise, the way things actually are becomes a question for investigation rather than deduction[^37].

**Individual work worth naming.**

*   **Robert Grosseteste** (c. 1168 to 1253), Bishop of Lincoln, wrote *De luce* around 1225, describing the cosmos as an expansion of light from a single point governed by one consistent set of principles. A Durham-led project that produced a new Latin edition and worked his account through modern mathematics found it internally coherent as physics. He also set out a method of resolution and composition, generalising from observation and then testing the generalisation, which is recognisably experimental[^38][^39][^40][^41].
*   **Albertus Magnus** (c. 1200 to 1280), a Dominican, wrote detailed botanical and zoological observation and stated plainly that in matters of nature the aim is to establish what happens by experience rather than to repeat authority[^42].
*   **Roger Bacon** (c. 1219 to 1292), a Franciscan, argued for mathematics and *scientia experimentalis* as the route to knowledge of nature, and did original work on optics and the rainbow[^43].
*   **Jean Buridan** (c. 1300 to 1361), rector at Paris, developed the theory of impetus, an ancestor of momentum, and used it to argue that a projectile continues because a quality imparted to it persists rather than because air pushes it[^44].
*   **The Oxford Calculators** at Merton College, and **Thomas Bradwardine** among them, applied mathematics to motion and stated the mean speed theorem: a uniformly accelerating body covers the same distance as one moving steadily at half its final speed[^45][^46].
*   **Nicole Oresme** (c. 1320 to 1382), Bishop of Lisieux, gave the mean speed theorem a geometric proof using what amount to velocity-time graphs, two centuries before analytic geometry, and argued that the daily rotation of the earth could not be ruled out by any available observation[^47][^48].

That is the body of work Galileo inherited. The kinematics of falling bodies did not begin in 1600; it began in fourteenth-century Church-funded colleges and was carried forward by men in holy orders[^49].
`
    },
    {
      id: "founders",
      title: "Christians Who Built Modern Science",
      tags: ["scientists", "history", "biography"],
      content: `
The list below is not offered as an argument that Christianity is true. Many able scientists have held other views or none, and counting heads settles nothing. It is offered against a narrower claim, namely that serious scientific work and Christian conviction do not sit together in the same head[^50].

**Nicolaus Copernicus** (1473 to 1543) was a canon of the cathedral chapter at Frombork, and held that post while working out the heliocentric model. *De revolutionibus* was dedicated to Pope Paul III and circulated for seventy-three years before the Congregation of the Index took any action against it[^51][^52].

**Johannes Kepler** (1571 to 1630) trained for the Lutheran ministry at Tubingen before turning to astronomy, and treated the mathematical structure of the heavens as the ordering of a creation. He replaced circular orbits with ellipses, stated the three laws of planetary motion, and wrote his religious motivation into the prefaces rather than keeping it separate from the work[^53][^54].

**Blaise Pascal** (1623 to 1662) established the principles of hydrostatics and, with Fermat, the mathematics of probability, then devoted his last years to the *Pensees*, an unfinished defence of the Christian faith[^55][^56].

**Robert Boyle** (1627 to 1691) is the founder of experimental chemistry and a founding fellow of the Royal Society. He wrote *The Christian Virtuoso* to argue that experimental enquiry suits a believer rather than threatening him, and left fifty pounds a year in his will to fund annual lectures defending Christianity, a series that still runs[^57][^58][^59].

**The Royal Society** itself, chartered in 1660, was founded by men who took the study of creation to be a religious as well as an intellectual undertaking, and its early membership was drawn overwhelmingly from serious churchmen[^60].

**Isaac Newton** (1643 to 1727) wrote more on theology and biblical chronology than on physics. He added the General Scholium to the second edition of the *Principia* in 1713, arguing that the arrangement of the solar system could only proceed from the counsel and dominion of an intelligent and powerful Being. His private manuscripts also show a settled rejection of the doctrine of the Trinity, which he regarded as a fourth-century corruption, so he is properly described as a devout anti-Trinitarian rather than as an orthodox Christian[^61][^62][^63][^64].

**Nicolas Steno** (1638 to 1686) founded stratigraphy with the *Prodromus* of 1669, stating the principle of superposition on which historical geology rests. He converted to Catholicism in 1667, was ordained in 1675, was made a bishop two years later, and was beatified by John Paul II in 1988[^65][^66].

**John Ray** (1627 to 1705) laid the groundwork of systematic botany and wrote *The Wisdom of God Manifested in the Works of the Creation*, the book that set the pattern for English natural theology for the next century and a half[^67].

**Carl Linnaeus** (1707 to 1778) produced the binomial system still used to name every species, and understood the task as cataloguing the works of a creator[^68].

**Leonhard Euler** (1707 to 1783), the most prolific mathematician on record, was a lifelong Reformed Christian who held family prayers and wrote in defence of the reliability of Scripture[^69].

**Alessandro Volta** (1745 to 1827) built the first electric battery, and **Luigi Galvani** (1737 to 1798) discovered bioelectricity; both were practising Catholics, and Volta wrote a public profession of faith[^70][^71]. **Lazzaro Spallanzani** (1729 to 1799), a priest, disproved spontaneous generation by experiment a century before Pasteur[^72].

**Michael Faraday** (1791 to 1867) discovered electromagnetic induction and the laws of electrolysis, and served as an elder and lay preacher in the Sandemanian church, a small and strict sect he never left[^73].

**James Clerk Maxwell** (1831 to 1879) unified electricity, magnetism and light in four equations. He was an evangelical Presbyterian elder who had the inscription from Psalm 111:2, on the great works of the Lord being sought out by those who delight in them, placed at the entrance to the Cavendish Laboratory[^74][^75].

**Gregor Mendel** (1822 to 1884), an Augustinian friar and later abbot at Brno, ran eight years of breeding experiments on pea plants and published the laws of inheritance in 1866, work that founded genetics once it was rediscovered in 1900[^76].

**William Thomson, Lord Kelvin** (1824 to 1907) established absolute temperature and much of classical thermodynamics, and **George Gabriel Stokes** (1819 to 1903), his contemporary in fluid dynamics and optics, was president of the Royal Society and also of the Victoria Institute, a society for the discussion of science and Scripture[^77][^78].

**Louis Pasteur** (1822 to 1895) established germ theory, developed vaccination against rabies and anthrax, and remained a practising Catholic[^79].

The pattern extends much further than one section can hold, through Bernhard Riemann, Augustin-Louis Cauchy, Nicholas of Cusa, Andreas Vesalius and a great many others[^80][^81][^82]. What it does not show is that faith produced the discoveries. What it shows is that for most of the history of modern science, being a believing Christian was the ordinary condition of the people doing the work[^83].
`
    },
    {
      id: "modern-scientists",
      title: "The Twentieth Century and the Present",
      tags: ["modern", "scientists", "astronomy"],
      content: `
The pattern did not stop in 1900.

**The Vatican Observatory** is among the oldest astronomical institutions still operating. Its lineage runs through Gregory XIII's commission for the calendar reform of 1582, and it was refounded in its present form by Leo XIII in 1891; it now runs a telescope on Mount Graham in Arizona in partnership with the University of Arizona[^84][^85].

**Angelo Secchi** (1818 to 1878), a Jesuit, directed the observatory of the Roman College and effectively founded astrophysics. He asked what stars are made of, took spectra of some four thousand of them, and produced the first spectral classification, the ancestor of the scheme still used today[^86][^87].

**Georges Lemaitre** (1894 to 1966), a Belgian priest and professor at Louvain, derived an expanding solution to Einstein's field equations in 1927, related the recession of galaxies to that expansion two years before Hubble's paper, and in 1931 proposed that the universe began from what he called the primeval atom[^88][^89].

Lemaitre's conduct afterwards is the most instructive part of the story. When Pius XII told the Pontifical Academy in 1951 that the model demonstrated a Creator, Lemaitre, who did believe in the Creator, was alarmed that his cosmology would be taken to have been built for apologetic purposes. He travelled to Rome and asked the Pope to stop citing it. The primeval atom was a physical hypothesis, revisable like any other, and he refused to let it be fused with the doctrine of creation[^90][^91].

**Ernest Walton** (1903 to 1995) shared the 1951 Nobel Prize in Physics for the first artificial disintegration of an atomic nucleus, and spoke throughout his life of scientific research as an exploration of the works of God[^92].

**Charles Townes** (1915 to 2015) won the 1964 Nobel Prize for the maser and the underlying work behind the laser, and argued in print that science and religion are converging rather than diverging enterprises[^93]. **William Phillips** (born 1948), a Nobel laureate in 1997 for laser cooling of atoms, is a practising Methodist who has written on why he sees no tension in that[^94].

**Francis Collins** (born 1950) directed the Human Genome Project to its completion in 2003, went on to lead the National Institutes of Health, and came to Christian faith as an adult after training as a physical chemist and physician[^95].

**Jennifer Wiseman** is Senior Project Scientist for the Hubble Space Telescope at NASA Goddard, having discovered a comet as an undergraduate, and directed the American Association for the Advancement of Science programme on Dialogue on Science, Ethics and Religion from 2010 to 2022[^96][^97].

**John Polkinghorne** (1930 to 2021) held the chair of mathematical physics at Cambridge and worked on the quark model, then resigned in his late forties to train for Anglican orders and spent the rest of his career writing on the relation between the two disciplines[^98].

Professional bodies exist for the overlap. The American Scientific Affiliation has served Christians in the sciences in North America since 1941, and the Society of Catholic Scientists was founded in 2016[^99].

**Allan Sandage** (1926 to 2010), Hubble's assistant and the observational cosmologist who did more than anyone to measure the expansion rate, became a Christian in his fifties and said that he found it improbable that such order came out of chaos and that there had to be some organising principle[^100].
`
    },
    {
      id: "belief-among-scientists",
      title: "What Scientists Actually Believe",
      tags: ["statistics", "surveys", "sociology"],
      content: `
Two claims circulate here, and both are unreliable. One holds that essentially all serious scientists are atheists. The other, common in apologetic material, holds that around 65 per cent of Nobel laureates between 1901 and 2000 were Christians, a figure taken from a single reference book that classified laureates largely by cultural and family background rather than by stated personal conviction. The second figure should not be used as evidence of belief, and it is dropped here for that reason[^101].

The survey evidence is more modest and more interesting.

**In the United States, scientists are markedly less religious than the general population.** A Pew survey of members of the American Association for the Advancement of Science in 2009 found 33 per cent believing in God and a further 18 per cent in a universal spirit or higher power, so 51 per cent in some form of deity, against 95 per cent of the American public at the time[^102][^103].

**The gap is not universal, and it is not global.** The Religion Among Scientists in International Context study, run by Elaine Howard Ecklund from 2012 to 2015, surveyed biologists and physicists in France, Hong Kong, India, Italy, Taiwan, Turkey, the United Kingdom and the United States. It received 9,422 completed questionnaires from a sample of 22,525 and conducted 609 face-to-face interviews. In several of those regions scientists were as religious as, or more religious than, the surrounding population, and the picture of a uniformly secular global scientific class did not survive the data[^104][^105][^106].

**Scientists themselves mostly do not report conflict.** In the same study, no region had more than 22 per cent of scientists saying that their exposure to science had made them less religious, and the United States was the region where that figure was highest. A majority in most regions described the relationship between science and religion as independence or collaboration rather than conflict[^107][^108].

What the numbers support is narrow. American academic science is unusually secular by American standards, for reasons that include selection, discipline and social environment as much as anything intrinsic to the work. What they do not support is the claim that doing science well pushes a person away from faith[^109].
`
    },
    {
      id: "galileo",
      title: "The Galileo Affair, Told Straight",
      tags: ["galileo", "history", "church"],
      content: `
This is the hard case, and the honest verdict is that the Church was wrong. A tribunal of the Roman Catholic Church convicted a man for holding a physical proposition that is true, extracted an abjuration, and confined him for the rest of his life. No account of the relationship between Christianity and science is complete without conceding that[^110].

The details still matter, because the popular version gets most of them wrong.

**Heliocentrism was not condemned on arrival.** Copernicus published in 1543 and dedicated the book to the Pope. It was read, taught and used for calendar work for decades. *De revolutionibus* was suspended pending correction only in 1616, seventy-three years later, and the trouble came when Galileo insisted on the physical truth of the system rather than its usefulness as calculation[^111].

**1616 was a warning, not a trial.** Cardinal Bellarmine informed Galileo that the Copernican opinion had been declared contrary to Scripture and so could not be held or defended. At Galileo's own request Bellarmine wrote a certificate stating that no abjuration or penalty had been imposed. A separate and more restrictive precept, forbidding Galileo to teach the doctrine in any way whatsoever, is recorded in the file, and historians have argued since the nineteenth century over whether it was properly served. Galileo produced Bellarmine's certificate at his trial and said he did not remember the stronger wording[^112][^113].

**The 1633 trial was as much about a broken agreement and a personal insult as about astronomy.** Galileo had permission to treat the two systems hypothetically. The *Dialogue Concerning the Two Chief World Systems* of 1632 does not do that: the Copernican speaks well, the Aristotelian is named Simplicio and is made to look foolish, and the argument Urban VIII had personally asked Galileo to include was placed in Simplicio's mouth. Urban had been Galileo's patron and admirer, and he took it as a betrayal. He then insisted on a formal sentence, a rigorous examination and a public abjuration[^114][^115].

**Galileo's scientific case was not yet decisive, and part of it was wrong.** His principal physical argument for the earth's motion was a theory of the tides that does not work. Stellar parallax, the direct observational proof, was not measured until Bessel in 1838. The scholarly consensus of the day, Aristotelian and Ptolemaic, was against him, and the demand for proof was not in itself unreasonable. That the Church's tribunal was entitled to settle the question by decree, however, is the error, and it is not made better by his having been short of a proof[^116].

**Galileo's theology was better than his judges'.** In the *Letter to the Grand Duchess Christina* of 1615 he argued, following Augustine, that Scripture accommodates itself to ordinary speech about the natural world and does not aim to teach astronomy, and he quoted Cardinal Baronius to the effect that the intention of the Holy Spirit is to teach how one goes to heaven, not how heaven goes. That is essentially the position the Church would later adopt[^117][^118][^119].

**What actually happened to him.** Galileo was never tortured and never held in a dungeon. He was lodged in the Tuscan embassy and in the Holy Office's apartments during proceedings, then confined to the villa at Arcetri, where he completed the *Discourses on Two New Sciences*, the work that founded the modern science of materials and motion. He died in 1642 a professed Catholic, and his daughter Maria Celeste was a nun[^120].

**And it stayed wrong for a long time.** The condemnation was not formally set aside until the nineteenth century, and John Paul II only closed the matter in 1992, acknowledging that Galileo's theologian-critics had failed to distinguish the interpretation of Scripture from a question of physics. Three and a half centuries is a poor showing, and saying so costs the Christian case nothing[^121].
`
    },
    {
      id: "courtroom",
      title: "Scopes, Dover and the Courtroom Fights",
      tags: ["scopes", "law", "education"],
      content: `
The second episode carrying the whole weight of the warfare story is the American dispute over teaching evolution. The scientific questions of origins and design are treated under evolution and fine-tuning. The courtroom history is a separate matter, and popular memory of it derives largely from a stage play rather than from the transcripts[^122].

**Scopes, 1925.** John Scopes was tried at Dayton, Tennessee for teaching evolution in breach of the Butler Act, convicted, and fined one hundred dollars. The Tennessee Supreme Court then overturned the conviction on a technicality about who had set the fine, while upholding the Act itself, which stood until 1967. The trial was arranged as a test case with local cooperation, and Scopes was never in jeopardy of anything worse than the fine[^123].

**The textbook complicates the story.** The book Scopes taught from was George Hunter's *A Civic Biology* of 1914, the state-approved text. Alongside evolution it taught eugenics in explicit terms, ranked human races, and recommended that people it called defective be prevented from reproducing. William Jennings Bryan's opposition to the teaching of evolution was tied to exactly that: he read Darwinism as underwriting eugenics and the ruthlessness he had seen argued for in Germany. This does not vindicate the Butler Act, and Bryan's biblical arguments at Dayton were weak. It does mean the confrontation was not simply ignorance against enlightenment[^124][^125].

*Inherit the Wind*, the 1955 play and 1960 film, is a fiction written as an allegory of McCarthyism, and much of what people believe about Dayton comes from it rather than from the transcript[^126].

**Later cases went the other way, and on constitutional grounds.** *Epperson v. Arkansas* struck down a similar ban in 1968, *McLean v. Arkansas* rejected balanced-treatment creation science in 1982, and *Edwards v. Aguillard* did the same at the Supreme Court in 1987[^127].

**Kitzmiller v. Dover, 2005.** A federal district court held that requiring a statement on intelligent design in Dover's biology classes was unconstitutional, finding that intelligent design is not science, that it cannot be separated from its creationist antecedents, and that some board members had lied under oath about their motives. Judge Jones, appointed by a Republican president and a churchgoer himself, wrote a 139-page opinion that is worth reading in full by anyone who wants to argue about it[^128][^129][^130].

**How much this settles.** Legally, a great deal; theologically, almost nothing. A court ruling about what may be taught in a public school in Pennsylvania is a judgment about a curriculum and an establishment clause, not about whether God made the world. An argument for design failing in court leaves the doctrine of creation exactly where it was, and the reverse would have been true as well[^131].
`
    },
    {
      id: "working-together",
      title: "How the Two Work Together Now",
      tags: ["methodology", "naturalism", "two books"],
      content: `
The practical relationship turns on one distinction that is easy to state and constantly missed.

**Methodological naturalism is a working rule. Metaphysical naturalism is a claim about reality.** The working rule says that when investigating a physical process you look for physical causes, do not invoke divine action as an explanatory term, and hold your hypothesis open to test. The metaphysical claim says that physical causes are all there are. The first is what scientists do; the second is a philosophical position that no experiment can establish, since it is a claim about the whole of reality made from inside a part of it[^132].

A Christian can hold the working rule without difficulty, and has a reason to hold it that the naturalist does not: a creation upheld by a faithful God is expected to behave consistently, so a natural mechanism is exactly what you should expect to find when you look at a natural process. Finding one is not finding an absence of God, any more than explaining how an engine works removes the engineer[^133].

**The two books, applied.** Since Scripture and creation have one author, an apparent conflict is a signal that something has been misread. The discipline this imposes runs in both directions. It rules out treating a passage written in the idiom of ancient cosmology as a technical claim about planetary mechanics, and it equally rules out treating a contested scientific model as settling what a text is teaching. Augustine warned in the fifth century that Christians making confident and false claims about the natural world bring Scripture itself into disrepute, which is as good a statement of the rule as has been written since[^134].

**Science leans on things it cannot supply.** That the universe is intelligible at all, that mathematics developed for its own sake keeps turning out to describe physical reality, and that the future will resemble the past are all assumptions rather than results. Eugene Wigner called the second of these unreasonable and could offer no account of it, which is the honest position for a physicist and an interesting one for a theist[^135][^136].

**Against the God of the gaps.** The bad habit is to locate God in whatever science has not yet explained, which makes faith a hostage to the next result and has been steadily losing ground for three centuries. Bonhoeffer put the alternative sharply in a letter from prison in 1944: we should find God in what we do know, not in what we do not know. The Christian claim is about the ground of the whole intelligible order, not about the residue[^137][^138].

**Where the real disagreement sits.** Alvin Plantinga's argument is that there is superficial conflict but deep concord between science and theistic religion, and superficial concord but deep conflict between science and naturalism. Whether or not his full case succeeds, the location of the dispute is right. Nineteenth-century materialism and positivism were philosophical programmes that claimed scientific authority, and it is those programmes, not the practice of science, that Christian theology is actually arguing with[^139][^140][^141].
`
    },
    {
      id: "limits",
      title: "What Science Is Not Equipped to Ask",
      tags: ["scientism", "limits", "philosophy"],
      content: `
Science is a method for investigating the natural world, and an extraordinarily successful one. Scientism is the further claim that it is the only route to knowledge, and that claim is not itself a scientific result. It cannot be tested, and it fails its own standard, which is why it is treated in the philosophical literature as a position to be argued for rather than as a finding[^142][^143].

Several classes of question lie outside the method rather than merely unanswered by it[^144].

*   **Logic and mathematics.** Science uses both and presupposes their validity. No experiment establishes the law of non-contradiction, and none could, because the experiment's interpretation would already depend on it[^145].
*   **Ethics.** Empirical work can establish what a policy will cost, whom it will harm, and what people in fact approve of. The step from what is the case to what ought to be done is not an empirical step, and no amount of measurement supplies it[^146].
*   **Metaphysical questions.** Why there is a universe rather than nothing, whether other minds exist, whether the past was real: these are not resolved by better instruments[^147].
*   **Consciousness.** Why physical processing is accompanied by subjective experience remains unresolved, and it is unclear what a solution in physical terms would even look like[^148][^149].
*   **Aesthetic and personal knowledge.** Nothing in the method quantifies the goodness of a piece of music or the trustworthiness of a friend, and the absence of a measurement is not evidence of nothing being there[^150].

Where the boundary of science falls is itself a live philosophical question, the demarcation problem, and it has no agreed solution. Stephen Jay Gould's proposal of non-overlapping magisteria, with science taking the empirical realm and religion the moral one, is one attempt at a settlement, and it is unsatisfactory from both ends: Christianity makes historical claims that are not confined to the moral realm, and scientists routinely make pronouncements about meaning and value[^151][^152][^153].

The Christian position is not that science has limits and God lives in them. It is that the intelligibility of the universe, the applicability of mathematics to it, and the existence of minds capable of following the argument are the sort of thing that calls for explanation, and that the explanation on offer is neither a rival to physics nor a substitute for doing it properly[^154].
`
    }
  ],
  verses: [
    { reference: "Psalm 19:1", text: "The heavens declare the glory of God; the skies proclaim the work of his hands." },
    { reference: "Psalm 111:2", text: "Great are the works of the Lord; they are pondered by all who delight in them." },
    { reference: "Proverbs 25:2", text: "It is the glory of God to conceal a matter; to search out a matter is the glory of kings." },
    { reference: "Romans 1:20", text: "For since the creation of the world God's invisible qualities - his eternal power and divine nature - have been clearly seen, being understood from what has been made, so that people are without excuse." },
    { reference: "Colossians 1:16-17", text: "For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him. He is before all things, and in him all things hold together." },
    { reference: "Job 12:7-9", text: "But ask the animals, and they will teach you, or the birds in the sky, and they will tell you; or speak to the earth, and it will teach you, or let the fish in the sea inform you. Which of all these does not know that the hand of the Lord has done this?" },
    { reference: "Hebrews 11:3", text: "By faith we understand that the universe was formed at God's command, so that what is seen was not made out of what was visible." }
  ],
  sources: [
    "1. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Religion and Science.' The standard academic survey of the relationship and of the models used to describe it. https://plato.stanford.edu/entries/religion-science/",
    "2. [Academic] AAAS Dialogue on Science, Ethics and Religion. 'Science and Religion: The Draper-White Conflict Thesis.' https://sciencereligiondialogue.org/resources/science-and-religion-the-draper-white-conflict-thesis-2/",
    "3. [Academic] Colin A. Russell. 'The Conflict of Science and Religion.' Reprinted essay assessing the thesis and Draper's standing as a source. https://joelvelasco.net/teaching/3330/russell-conflict_science_religion.pdf",
    "4. [Peer-Reviewed Journal] Religions (MDPI). 'Evaluating Warfare Myths: The Conflict Thesis and the Dark Ages.' https://www.mdpi.com/2077-1444/12/2/132",
    "5. [Academic] Church Life Journal, University of Notre Dame. 'Peter Harrison's Challenge to the Secular Mythos.' https://churchlifejournal.nd.edu/articles/a-challenge-to-the-secular-mythos-part-one/",
    "6. [Academic Review] Notre Dame Philosophical Reviews. Review of Alvin Plantinga, 'Where the Conflict Really Lies: Science, Religion, and Naturalism.' https://ndpr.nd.edu/reviews/where-the-conflict-really-lies-science-religion-and-naturalism/",
    "7. [Reference] Wikipedia. Conflict thesis. Origins of the thesis in Draper and White and its decline among historians. https://en.wikipedia.org/wiki/Conflict_thesis",
    "8. [Reference] Wikipedia. A History of the Warfare of Science with Theology in Christendom. White's 1896 work and the circumstances of its composition. https://en.wikipedia.org/wiki/A_History_of_the_Warfare_of_Science_with_Theology_in_Christendom",
    "9. [Historical] First Things. 'Modern Science's Christian Sources.' Historical essay on the theological presuppositions of the scientific enterprise. https://firstthings.com/modern-sciences-christian-sources/",
    "10. [Peer-Reviewed Journal] Annals of Science. 'The Many Histories of the Conflict Thesis: The Science vs. Religion Narrative in Nineteenth-Century Germany.' https://www.tandfonline.com/doi/abs/10.1080/00033790.2023.2187086",
    "11. [Academic Press] University of California Press. David C. Lindberg and Ronald L. Numbers, eds. 'God and Nature: Historical Essays on the Encounter between Christianity and Science' (1986). https://www.ucpress.edu/books/god-and-nature/paper",
    "12. [Academic Review] Project MUSE. Review of 'God and Nature: Historical Essays on the Encounter Between Christianity and Science.' https://muse.jhu.edu/article/638018",
    "13. [Academic] American Scientific Affiliation. Jeffrey Burton Russell, 'The Myth of the Flat Earth.' Paper tracing the myth to Washington Irving and later writers. https://www.asa3.org/ASA/topics/history/1997Russell.html",
    "14. [Reference] Wikipedia. Myth of the flat Earth. The historical evidence for medieval belief in a spherical earth. https://en.wikipedia.org/wiki/Myth_of_the_flat_Earth",
    "15. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Bede.' On the Reckoning of Time, the computus and the lunar theory of tides. https://www.newadvent.org/cathen/02383b.htm",
    "16. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Pope Sylvester II.' Gerbert of Aurillac and the reintroduction of the abacus and armillary sphere. https://www.newadvent.org/cathen/14371a.htm",
    "17. [Reference] Wikipedia. Inventing the Flat Earth. Jeffrey Burton Russell's 1991 study of how the myth was manufactured. https://en.wikipedia.org/wiki/Inventing_the_Flat_Earth",
    "18. [Academic] The Faraday Institute for Science and Religion, University of Cambridge. 'The Christian Roots of Modern Science.' https://www.faraday.cam.ac.uk/churches/church-resources/posts/the-christian-roots-of-modern-science/",
    "19. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Creation.' The doctrine of creation out of nothing and its implications for the order of nature. https://www.newadvent.org/cathen/04470a.htm",
    "20. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Laws of Nature.' Includes the theological ancestry of the concept in Descartes, Boyle and Newton. https://plato.stanford.edu/entries/laws-of-nature/",
    "21. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Condemnation of 1277.' Divine freedom against Aristotelian necessity, and its consequences for natural philosophy. https://plato.stanford.edu/entries/condemnation/",
    "22. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Reason.' The scope and reliability of human reason in Christian thought. https://www.newadvent.org/cathen/12673b.htm",
    "23. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Natural Theology and Natural Religion.' Reasoning from the created order to its Creator. https://plato.stanford.edu/entries/natural-theology/",
    "24. [Theology] Ligonier Ministries. 'General and Special Revelation: A Reformed Approach to Science and Scripture.' https://learn.ligonier.org/articles/general-and-special-revelation-reformed-approach-science-and-scripture",
    "25. [Academic Press] Cambridge University Press. Peter Harrison, 'The Bible, Protestantism, and the Rise of Natural Science.' https://www.cambridge.org/core/books/bible-protestantism-and-the-rise-of-natural-science/78CAF2F941CB88FBC9C3B1AB0F63AA47",
    "26. [University] University of Queensland, School of Historical and Philosophical Inquiry. Emeritus Professor Peter Harrison. Research profile and publications. https://hpi.uq.edu.au/profile/1644/peter-harrison",
    "27. [Reference] Wikipedia. Natural philosophy. The discipline from which modern natural science emerged, and its non-Christian antecedents. https://en.wikipedia.org/wiki/Natural_philosophy",
    "28. [Historical] Christian Research Institute. 'Christianity Led to the Rise of Modern Science.' Sets out the linear-time and contingency arguments. https://www.equip.org/articles/christianity-led-rise-modern-science/",
    "29. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'The Problem of Induction.' Why the uniformity of nature cannot be established empirically. https://plato.stanford.edu/entries/induction-problem/",
    "30. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Western Monasticism.' The Benedictine houses and their copying and teaching work. https://www.newadvent.org/cathen/10472a.htm",
    "31. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Carolingian Schools.' The eighth- and ninth-century network of cathedral and monastic schools. https://www.newadvent.org/cathen/03349c.htm",
    "32. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Universities.' Origins, charters and constitution of the medieval university. https://www.newadvent.org/cathen/15188a.htm",
    "33. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The University of Bologna.' The earliest of the European universities, from 1088. https://www.newadvent.org/cathen/02641b.htm",
    "34. [Catholic Reference] New Advent, Catholic Encyclopedia. 'University of Paris.' https://www.newadvent.org/cathen/11495a.htm",
    "35. [Catholic Reference] New Advent, Catholic Encyclopedia. 'University of Oxford.' https://www.newadvent.org/cathen/11365c.htm",
    "36. [Catholic Reference] New Advent, Catholic Encyclopedia. 'History of Physics.' Survey of natural philosophy from the medieval faculties onward. https://www.newadvent.org/cathen/12047a.htm",
    "37. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Medieval Political Philosophy.' Context for the authority of the Paris faculties and the 1277 condemnation. https://plato.stanford.edu/entries/medieval-political/",
    "38. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Robert Grosseteste.' His optics, cosmology and account of scientific method. https://plato.stanford.edu/entries/grosseteste/",
    "39. [University Project] Ordered Universe Project, Durham University. Grosseteste Manuscripts. The critical editions behind the modern reassessment of his science. https://ordered-universe.com/manuscripts/",
    "40. [Academic] The Conversation. 'Medieval Bishop's Theory Resembles Modern Concept of Multiple Universes.' Report by the Durham team on De luce. https://theconversation.com/medieval-bishops-theory-resembles-modern-concept-of-multiple-universes-25460",
    "41. [Research Council] Science in Culture (AHRC). 'The Ordered Universe.' Project description and methodology. https://www.sciculture.ac.uk/2014/03/07/the-ordered-universe/",
    "42. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Albert the Great.' His natural philosophy and insistence on observation in the study of nature. https://plato.stanford.edu/entries/albert-great/",
    "43. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Roger Bacon.' Scientia experimentalis, optics and the argument for mathematics. https://www.newadvent.org/cathen/13111b.htm",
    "44. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'John Buridan.' Impetus theory and fourteenth-century Parisian natural philosophy. https://plato.stanford.edu/entries/buridan/",
    "45. [Reference] Wikipedia. Oxford Calculators. The Merton College mathematicians and their work on motion. https://en.wikipedia.org/wiki/Oxford_Calculators",
    "46. [Academic] Scientus. 'The Calculatores: Bradwardine and the Oxford Calculators.' https://www.scientus.org/Calculatores-Bradwardine.html",
    "47. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Nicole Oresme.' The geometric proof of the mean speed theorem and the argument on terrestrial rotation. https://plato.stanford.edu/entries/nicole-oresme/",
    "48. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Nicole Oresme.' https://www.newadvent.org/cathen/11296a.htm",
    "49. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Thomas Bradwardine.' https://mathshistory.st-andrews.ac.uk/Biographies/Bradwardine/",
    "50. [Reference] Wikipedia. List of Christians in science and technology. https://en.wikipedia.org/wiki/List_of_Christians_in_science_and_technology",
    "51. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Nicolaus Copernicus.' https://plato.stanford.edu/entries/copernicus/",
    "52. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Nicolaus Copernicus.' His canonry at Frombork and the reception of De revolutionibus. https://www.newadvent.org/cathen/04352b.htm",
    "53. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Johannes Kepler.' https://plato.stanford.edu/entries/kepler/",
    "54. [Research Library] Linda Hall Library of Science, Engineering and Technology. 'Johannes Kepler.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/johannes-kepler/",
    "55. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Blaise Pascal.' https://www.newadvent.org/cathen/11511a.htm",
    "56. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Blaise Pascal.' https://mathshistory.st-andrews.ac.uk/Biographies/Pascal/",
    "57. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Robert Boyle.' https://plato.stanford.edu/entries/boyle/",
    "58. [Academic Institution] Gresham College. 'The Boyle Lecture: The Legacy of Robert Boyle, Then and Now.' https://gresham.ac.uk/lectures-and-events/the-boyle-lecture-the-legacy-of-robert-boyle-then-and-now",
    "59. [Reference] Wikipedia. Boyle Lectures. The terms of Boyle's bequest and the history of the series. https://en.wikipedia.org/wiki/Boyle_Lectures",
    "60. [Learned Society] The Royal Society. History of the Royal Society. https://royalsociety.org/about-us/history/",
    "61. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Newton's Philosophy.' https://plato.stanford.edu/entries/newton-philosophy/",
    "62. [University Project] The Newton Project, University of Oxford. 'Newton's Religious Life and Work.' Editorial introduction to the theological manuscripts. https://www.newtonproject.ox.ac.uk/view/contexts/CNTX00001",
    "63. [Reference] Wikipedia. General Scholium. The 1713 appendix to the Principia and its argument from design. https://en.wikipedia.org/wiki/General_Scholium",
    "64. [Academic] Stephen D. Snobelen. 'The Theology of Isaac Newton's General Scholium to the Principia.' Study of the anti-Trinitarian argument in the text. https://isaac-newton.org/wp-content/uploads/2013/06/theology-of-general-scholium.pdf",
    "65. [Research Library] Linda Hall Library. 'Nicolaus Steno, Danish Physician and Anatomist.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/nicolaus-steno/",
    "66. [Reference] EBSCO Research Starters. 'Nicolaus Steno.' Stratigraphy, ordination, episcopal appointment and beatification. https://www.ebsco.com/research-starters/history/nicolaus-steno",
    "67. [Research Library] Linda Hall Library. 'John Ray, English Naturalist and Cleric.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/john-ray/",
    "68. [Research Library] Linda Hall Library. 'Carl Linnaeus, Swedish Botanist.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/carl-linnaeus/",
    "69. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Leonhard Euler.' https://mathshistory.st-andrews.ac.uk/Biographies/Euler/",
    "70. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Alessandro Volta.' https://www.newadvent.org/cathen/15503a.htm",
    "71. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Luigi Galvani.' https://www.newadvent.org/cathen/06371c.htm",
    "72. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Lazzaro Spallanzani.' The experimental refutation of spontaneous generation. https://www.newadvent.org/cathen/14209a.htm",
    "73. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Michael Faraday.' https://mathshistory.st-andrews.ac.uk/Biographies/Faraday/",
    "74. [Academic] MacTutor History of Mathematics, University of St Andrews. 'James Clerk Maxwell.' https://mathshistory.st-andrews.ac.uk/Biographies/Maxwell/",
    "75. [Research Library] Linda Hall Library. 'James Clerk Maxwell.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/james-clerk-maxwell/",
    "76. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Mendel, Mendelism.' The Brno experiments and the laws of inheritance. https://www.newadvent.org/cathen/10180b.htm",
    "77. [Academic] MacTutor History of Mathematics, University of St Andrews. 'William Thomson, Lord Kelvin.' https://mathshistory.st-andrews.ac.uk/Biographies/Thomson/",
    "78. [Academic] MacTutor History of Mathematics, University of St Andrews. 'George Gabriel Stokes.' https://mathshistory.st-andrews.ac.uk/Biographies/Stokes/",
    "79. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Louis Pasteur.' https://www.newadvent.org/cathen/11536a.htm",
    "80. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Bernhard Riemann.' https://mathshistory.st-andrews.ac.uk/Biographies/Riemann/",
    "81. [Academic] MacTutor History of Mathematics, University of St Andrews. 'Augustin-Louis Cauchy.' https://mathshistory.st-andrews.ac.uk/Biographies/Cauchy/",
    "82. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Andreas Vesalius.' The founder of modern human anatomy. https://www.newadvent.org/cathen/15378c.htm",
    "83. [Reference] Wikipedia. Scientific Revolution. The period in which modern natural science took shape. https://en.wikipedia.org/wiki/Scientific_Revolution",
    "84. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Vatican Observatory.' Its foundation and early programme. https://www.newadvent.org/cathen/15309a.htm",
    "85. [Catholic Reference] New Advent, Catholic Encyclopedia. 'The Vatican as a Scientific Institute.' https://www.newadvent.org/cathen/15286a.htm",
    "86. [Jesuit Publication] America. 'Angelo Secchi, the Jesuit Father of Astrophysics.' https://www.americamagazine.org/arts-culture/2018/07/26/angelo-secchi-jesuit-father-astrophysics/",
    "87. [UNESCO] Portal to the Heritage of Astronomy. Observatory of the Roman College and Secchi's spectroscopic work. https://web.astronomicalheritage.net/show-entity?identity=270&idsubentity=1",
    "88. [Research Library] Linda Hall Library. 'Georges Lemaitre.' Scientist of the Day. https://www.lindahall.org/about/news/scientist-of-the-day/georges-lemaitre/",
    "89. [Peer-Reviewed Preprint] Jean-Pierre Luminet. 'Lemaitre's Big Bang.' arXiv 1503.08304. Detailed account of the 1927 and 1931 papers. https://arxiv.org/pdf/1503.08304",
    "90. [Academic] Society of Catholic Scientists. 'Monsignor Georges Lemaitre, Originator of the Big Bang Theory.' Includes the 1951-1952 exchange with Pius XII. https://catholicscientists.org/articles/monsignor-georges-lemaitre-originator-of-big-bang-theory/",
    "91. [Peer-Reviewed Preprint] 'Georges Lemaitre and the Foundations of Big Bang Cosmology.' arXiv 2007.09459. https://arxiv.org/pdf/2007.09459",
    "92. [Primary] The Nobel Prize. Ernest T. S. Walton, Nobel Prize in Physics 1951. https://www.nobelprize.org/prizes/physics/1951/walton/facts/",
    "93. [Primary] The Nobel Prize. Charles H. Townes, Nobel Prize in Physics 1964. https://www.nobelprize.org/prizes/physics/1964/townes/facts/",
    "94. [Primary] The Nobel Prize. William D. Phillips, Nobel Prize in Physics 1997. https://www.nobelprize.org/prizes/physics/1997/phillips/facts/",
    "95. [Government] National Human Genome Research Institute. Francis S. Collins, M.D., Ph.D. https://www.genome.gov/staff/Francis-S-Collins-MD-PhD",
    "96. [Learned Society] American Association for the Advancement of Science. Dr Jennifer Wiseman. https://www.aaas.org/person/dr-jennifer-wiseman",
    "97. [Government] NASA Goddard Space Flight Center, Sciences and Exploration Directorate. Jennifer J. Wiseman. https://science.gsfc.nasa.gov/sci/bio/jennifer.j.wiseman",
    "98. [Foundation] Templeton Prize. John Polkinghorne, 2002 laureate. https://www.templetonprize.org/laureates/john-polkinghorne/",
    "99. [Professional Body] American Scientific Affiliation. Network of Christians in the sciences, founded 1941. https://network.asa3.org/",
    "100. [Biography] C. S. Lewis Institute. 'Science and Faith: Friendly Allies, Not Hostile Enemies.' Documents Allan Sandage's account of his own conversion. https://www.cslewisinstitute.org/resources/science-and-faith-friendly-allies-not-hostile-enemies/",
    "101. [Statistics] Wikipedia. List of Christian Nobel laureates. Notes that the underlying figures derive from Baruch Shalev's classification by background rather than by stated belief. https://en.wikipedia.org/wiki/List_of_Christian_Nobel_laureates",
    "102. [Survey Data] Pew Research Center. 'Scientists and Belief.' Survey of AAAS members, May and June 2009. https://www.pewresearch.org/religion/2009/11/05/scientists-and-belief/",
    "103. [Survey Data] Pew Research Center. 'An Overview of Religion and Science in the United States.' https://www.pewresearch.org/religion/2009/11/05/an-overview-of-religion-and-science-in-the-united-states/",
    "104. [Peer-Reviewed Journal] Socius (SAGE). Ecklund, Johnson, Scheitle, Matthews and Lewis. 'Religion among Scientists in International Context: A New Study of Scientists in Eight Regions.' https://journals.sagepub.com/doi/10.1177/2378023116664353",
    "105. [University Institute] Rice University, Baker Institute for Public Policy. 'Religion among International Scientists.' Study overview and regional findings. https://www.bakerinstitute.org/research/religion-among-international-scientists",
    "106. [Academic] Elaine Howard Ecklund. Research studies, including Religion among Scientists in International Context. https://www.elainehowardecklund.com/research-studies",
    "107. [Conference Report] Interdisciplinary Encyclopedia of Religion and Science. 'A Global Lab: Religion among Scientists in International Context.' Summary report of findings. https://inters.org/files/global-lab-conference-summary-report_2015_1201.pdf",
    "108. [Academic] The Faraday Institute for Science and Religion, University of Cambridge. 'What Scientists Believe.' Summary of the survey literature. https://www.faraday.cam.ac.uk/churches/church-resources/posts/what-scientists-believe/",
    "109. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Scientific Progress.' On what the growth of scientific knowledge does and does not establish. https://plato.stanford.edu/entries/scientific-progress/",
    "110. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Galileo Galilei.' His science, his theological arguments and the proceedings against him. https://plato.stanford.edu/entries/galileo/",
    "111. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Galileo Galilei.' A Catholic account of the affair, written before the twentieth-century archival work. https://www.newadvent.org/cathen/06342b.htm",
    "112. [University] University of Navarra, Science, Reason and Faith group. 'The Galileo Affair.' Detailed reconstruction of 1616 and 1633. https://en.unav.edu/web/ciencia-razon-y-fe/the-galileo-affair",
    "113. [University Archive] The Galileo Project, Rice University. 'The (False?) Injunction.' The disputed 1616 precept and the arguments over its service. http://galileo.rice.edu/lib/student_work/trial95/injuction.html",
    "114. [Academic] Famous Trials, University of Missouri-Kansas City School of Law. 'The Trial of Galileo: An Account.' https://famous-trials.com/galileotrial/1014-home",
    "115. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Pope Urban VIII.' His patronage of Galileo and his reaction to the Dialogue. https://www.newadvent.org/cathen/15218b.htm",
    "116. [Peer-Reviewed Journal] Church History (Cambridge University Press). 'Galileo's Non-Trial (1616), Pre-Trial (1632-1633), and Trial (May 10, 1633): A Review of Procedure.' https://www.cambridge.org/core/journals/church-history/article/galileos-nontrial-1616-pretrial-16321633-and-trial-may-10-1633-a-review-of-procedure-featuring-routine-violations-of-the-forum-of-conscience/F5BB9632FA3F4C34B33C119A401EB3BC",
    "117. [Primary Source] Hanover Historical Texts Project. Galileo Galilei, 'Letter to the Grand Duchess Christina of Tuscany' (1615), excerpts. https://history.hanover.edu/courses/excerpts/111gal2.html",
    "118. [Primary Source] Ohio State University, History Teaching Institute. Galileo Galilei, Letter to the Grand Duchess Christina of Tuscany, 1615. Full text. https://hti.osu.edu/sites/default/files/galileo_galilei.pdf",
    "119. [University Archive] University of Oklahoma, Galileo's World. 'The Ancient and Modern Doctrines of the Holy Fathers.' Galileo on scriptural accommodation. https://galileo.ou.edu/node/1780.html",
    "120. [Reference] Wikipedia. Letter to the Grand Duchess Christina. Composition, argument and reception, with the terms of Galileo's later confinement. https://en.wikipedia.org/wiki/Letter_to_the_Grand_Duchess_Christina",
    "121. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Creationism.' Includes the legal and ecclesiastical aftermath of disputes over science and Scripture. https://plato.stanford.edu/entries/creationism/",
    "122. [Science Education] National Center for Science Education. 'Kitzmiller v. Dover: Intelligent Design on Trial.' Case archive and documents. https://ncse.ngo/kitzmiller-v-dover-intelligent-design-trial",
    "123. [Academic] Middle Tennessee State University, The First Amendment Encyclopedia. 'Scopes Monkey Trial.' https://firstamendment.mtsu.edu/article/scopes-monkey-trial/",
    "124. [Academic] Society of Catholic Scientists. 'The New Scopes-Trial Myth: Eugenics and Evolution at Dayton.' Assesses the eugenics content of A Civic Biology and Bryan's motives. https://catholicscientists.org/articles/the-new-scopes-trial-myth-eugenics-and-evolution-at-dayton/",
    "125. [Academic] Famous Trials, University of Missouri-Kansas City School of Law. 'Evolution Controversy: Selected Essays on Eugenics, the Rise of Fundamentalism, and the Courts.' https://famous-trials.com/scopesmonkey/2138-evolutioncontroversy",
    "126. [Reference] Wikipedia. Inherit the Wind (play). The 1955 dramatisation and its intended subject. https://en.wikipedia.org/wiki/Inherit_the_Wind_(play)",
    "127. [Academic] Middle Tennessee State University, The First Amendment Encyclopedia. 'Kitzmiller v. Dover Area School District.' With the earlier establishment clause cases. https://firstamendment.mtsu.edu/article/kitzmiller-v-dover-area-school-district-m-d-pa/",
    "128. [Primary Source] Justia. Kitzmiller v. Dover Area School District, 400 F. Supp. 2d 707 (M.D. Pa. 2005). Full memorandum opinion. https://law.justia.com/cases/federal/district-courts/FSupp2/400/707/2414073/",
    "129. [Reference] Wikipedia. Kitzmiller v. Dover Area School District. Procedural history and findings. https://en.wikipedia.org/wiki/Kitzmiller_v._Dover_Area_School_District",
    "130. [Primary Source] Talk Origins Archive. Kitzmiller v. Dover: Decision of the Court. Transcribed opinion. http://www.talkorigins.org/faqs/dover/kitzmiller_v_dover_decision.html",
    "131. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Science and the Church.' On the relationship between ecclesiastical authority and scientific enquiry. https://www.newadvent.org/cathen/13598b.htm",
    "132. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Naturalism.' Distinguishes the methodological rule from the metaphysical thesis. https://plato.stanford.edu/entries/naturalism/",
    "133. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Scientific Method.' What the method assumes and what it delivers. https://plato.stanford.edu/entries/scientific-method/",
    "134. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Augustine of Hippo.' Including his rule for interpreting Scripture against established natural knowledge. https://plato.stanford.edu/entries/augustine/",
    "135. [Primary Source] Eugene P. Wigner. 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences.' Communications in Pure and Applied Mathematics 13, no. 1 (1960). https://web.njit.edu/~akansu/PAPERS/The%20Unreasonable%20Effectiveness%20of%20Mathematics%20(EP%20Wigner).pdf",
    "136. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Indispensability Arguments in the Philosophy of Mathematics.' Why mathematical applicability calls for explanation. https://plato.stanford.edu/entries/mathphil-indis/",
    "137. [Reference] Wikipedia. God of the gaps. The fallacy and Bonhoeffer's 1944 prison-letter formulation of the alternative. https://en.wikipedia.org/wiki/God_of_the_gaps",
    "138. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Atheism.' The classical theistic arguments and the objections to them. https://www.newadvent.org/cathen/02040a.htm",
    "139. [Reference] Wikipedia. Metaphysical naturalism. The claim that nature is all there is. https://en.wikipedia.org/wiki/Metaphysical_naturalism",
    "140. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Materialism.' The nineteenth-century programme and its philosophical commitments. https://www.newadvent.org/cathen/10041b.htm",
    "141. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Positivism.' Comte's system and the claim that science exhausts knowledge. https://www.newadvent.org/cathen/12312c.htm",
    "142. [Academic] Internet Encyclopedia of Philosophy. 'Scientism.' The position, its varieties and the self-refutation objection. https://iep.utm.edu/scientism/",
    "143. [Reference] Wikipedia. Scientism. https://en.wikipedia.org/wiki/Scientism",
    "144. [Academic] University of California Museum of Paleontology, Understanding Science. 'Science Has Limits: A Few Things That Science Does Not Do.' https://undsci.berkeley.edu/understanding-science-101/what-is-science/science-has-limits-a-few-things-that-science-does-not-do/",
    "145. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Logic.' The status of logical principles relative to empirical enquiry. https://www.newadvent.org/cathen/09324a.htm",
    "146. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Metaphysics.' The questions that lie outside empirical method. https://www.newadvent.org/cathen/10226a.htm",
    "147. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Scientific Research and Big Data.' On what expanded data collection does and does not settle. https://plato.stanford.edu/entries/science-big-data/",
    "148. [Academic] Internet Encyclopedia of Philosophy. 'Hard Problem of Consciousness.' https://iep.utm.edu/hard-problem-of-conciousness/",
    "149. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Consciousness.' https://plato.stanford.edu/entries/consciousness/",
    "150. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Neo-Scholasticism.' The revival of a philosophy treating knowledge as wider than empirical measurement. https://www.newadvent.org/cathen/10746a.htm",
    "151. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. 'Science and Pseudo-Science.' The demarcation problem and its lack of an agreed solution. https://plato.stanford.edu/entries/pseudo-science/",
    "152. [Reference] Wikipedia. Demarcation problem. https://en.wikipedia.org/wiki/Demarcation_problem",
    "153. [Reference] Wikipedia. Non-overlapping magisteria. Gould's proposal and the objections to it. https://en.wikipedia.org/wiki/Non-overlapping_magisteria",
    "154. [Catholic Reference] New Advent, Catholic Encyclopedia. 'Astronomy.' On the study of the heavens as a Christian intellectual tradition. https://www.newadvent.org/cathen/02025a.htm"
  ],
  lastUpdated: "08-08-2026",
}
