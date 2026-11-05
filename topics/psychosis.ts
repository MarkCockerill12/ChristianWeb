import type { Topic } from './types'

export const PSYCHOSIS: Topic = {
  id: "psychosis",
  title: "What If I Have Psychosis? Faith, Voices and Mental Illness",
  description: "Whether Christian faith is safe for someone who hears voices or has schizophrenia: what is true in the worry, why faith and treatment belong together, why atheism does not prevent psychosis, and the Christians who lived through it.",
  icon: "HeartPulse",
  color: "teal",
  tags: ["Mental health", "Psychosis", "Schizophrenia", "Discernment", "Pastoral"],
  verses: [
    { reference: "1 John 4:1", text: "Dear friends, do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world." },
    { reference: "1 Thessalonians 5:21", text: "But test them all; hold on to what is good, reject every kind of evil." },
    { reference: "Matthew 9:12", text: "On hearing this, Jesus said, \"It is not the healthy who need a doctor, but the sick.\"" },
    { reference: "Colossians 4:14", text: "Our dear friend Luke, the doctor, and Demas send greetings." },
    { reference: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
    { reference: "Daniel 4:34", text: "At the end of that time, I, Nebuchadnezzar, raised my eyes toward heaven, and my sanity was restored. Then I praised the Most High." },
    { reference: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
  ],
  tldr: "The worry is fair and half right. Psychosis is a medical condition, treatment works, and a person who hears voices should see a doctor, not rely on faith alone. But the claim that religion is unsafe for such a person is not what the evidence shows. Psychosis happens at similar rates in religious and secular societies, so giving up faith does not prevent it. Christianity does not tell anyone to trust every voice: it commands testing, and its tradition treats the sick as the reason Jesus came. For many people faith provides meaning, community and hope alongside medicine. And many Christians have lived through severe mental illness and kept their faith, including poets, pastors and hymn writers.",
  content: `
**Anyone hearing voices that tell them to hurt themselves or someone else, or who is in danger now, should call emergency services. In the United States, call or text 988. In the UK and Ireland, Samaritans is on 116 123. A psychosis that is untreated can be dangerous, and treatment is available and works.**[^1][^2]

A video circulating online argues that it is "not safe" for someone with schizophrenia to hold a religion. The reasoning goes like this: in a religious community, someone who sees or hears what is not there may be praised as a prophet or a saint, whereas in a secular setting the same experience is treated with concern and sent to a doctor. Religion, on this view, delays care and feeds the illness.

What follows takes that argument seriously. It looks at what is true in it, where it goes wrong, why Christian faith and psychiatric care are meant to work together, why leaving faith behind does not stop psychosis, and what the lives of Christians who suffered this way show.

**Nothing here replaces medical care.** It is not a diagnosis or treatment plan. It is an account of what Christianity actually teaches and what the evidence actually says, so that no one has to choose between God and their doctor.
`,
  subtopics: [
    {
      id: "what-is-psychosis",
      title: "What Psychosis Is, and What It Is Not",
      tags: ["Mental health"],
      content: `**Psychosis** is a state in which a person loses some contact with shared reality. It usually involves hallucinations (hearing, seeing or sensing what others do not) or delusions (fixed false beliefs), and may include disorganised speech or behaviour[^3][^4]. **Schizophrenia** is a long-term condition in which psychosis is a main feature. Psychosis also appears in bipolar disorder, severe depression, sleep loss, substance use, some medical illnesses and after childbirth.

**How common it is.** Between 15 and 100 people in every 100,000 develop psychosis each year, usually from the late teens to the mid-twenties[^3]. Lifetime prevalence of schizophrenia is well under 1 per cent worldwide, and heritability is high: a Danish study of more than 31,000 twin pairs put it at about 79 per cent[^5][^6]. Heritability of that size does not make it fate: identical twins share the illness only about a third of the time, so other causes matter too[^6].

**Hearing a voice is not the same as being ill.** A large World Health Organization survey of 31,261 adults in 18 countries found that about 5.8 per cent had experienced a hallucination or delusion at some point, mostly hallucinations[^7]. Many such people never need treatment. Clinicians therefore look at the whole picture: distress, loss of function, disorganisation, whether the person can still question the experience, and what the voices say[^3][^4].

**Treatment works.** Antipsychotic medication is the usual core treatment, and "coordinated specialty care", a team approach that includes therapy, family support and help with work or study, is the standard of care for early psychosis[^3][^8]. Early treatment improves outcomes. The older picture of schizophrenia as hopeless is wrong; many people recover or live full lives with ongoing care[^3][^8].

**It is not a sign of weak faith, and it is not a moral failing.** Christianity has always held that bodies and minds are part of a fallen creation, subject to illness (Romans 8:20-23), and that sickness is not simply punishment for sin (John 9:1-3).
`,
    },
    {
      id: "what-is-true",
      title: "What Is True in the Worry",
      tags: ["Evidence"],
      content: `A fair answer begins with what the video gets right.

**1. Religious content is common in psychosis.** Reviews report that about a third of people with psychosis have delusions with religious themes, though the figure varies widely by country and by how the delusion is defined[^9][^10]. A person may come to believe they are a prophet, that God has given them a special mission, or that they are being punished.

**2. Religion can delay treatment.** If a community praises a frightening experience as a gift, or insists on prayer in place of a doctor, care can be delayed. Some groups discourage medication or treat mental illness only as spiritual warfare. These cases are real and serious, and Christian leaders should say so plainly.

**3. Religious delusions can be harmful.** A systematic review found that patients with religious delusions tended to have more severe positive symptoms, poorer social functioning and more negative religious coping, such as feeling abandoned or punished by God[^10]. Whether religious content causes this or simply accompanies a more severe illness is unclear: some reviews find that once other factors are accounted for, religious content does not independently predict worse outcomes[^10].

**4. Faith can be used badly.** Misused, spiritual language can make an ill person feel guilty, ashamed or unwilling to seek help. That is a failure of those who misuse faith. It is not what the faith teaches.

**What this shows.** The danger is a faith that refuses medicine or praises every experience without testing it. It is not Christianity as the Bible and the historic church teach it. What follows sets out what that is.
`,
    },
    {
      id: "culture-and-voices",
      title: "\"Religion Praises What Others Treat with Worry\": Does the Argument Hold?",
      tags: ["Evidence"],
      content: `The claim contains a real observation, so it can be tested against the research.

**What the research shows.** The anthropologist Tanya Luhrmann and colleagues (published 2015) interviewed 60 people with psychosis in the United States (California), India (Chennai) and Ghana (Accra), twenty at each site. The voices were broadly similar in kind. What differed was the relationship: the Americans more often reported harsh, violent voices and none described a mainly positive experience, whereas many in Chennai heard relatives and friends, and in Accra many heard God, with about half describing a mainly good experience[^11][^12]. The authors suggested that how a culture teaches people to understand voices shapes how distressing they become. The study was small and the Accra group was younger and more severely ill, so it cannot show that a religious framework is a cure[^11].

**What this does and does not prove.** It does not show that a religious community should celebrate every voice. It does show that the meaning a community gives to an experience matters, and that a secular framework which treats voices only as a threat is not obviously better for the person. The relevant question is not whether voices are treated with worry or with praise, but whether they are treated with care, testing and treatment.

**The false choice in the video.** The video sets "religious praise" against "secular worry" as if there were only two options. Historic Christianity offers a third: **discernment**. The New Testament does not tell anyone to believe every voice or vision. It commands the opposite (1 John 4:1; 1 Thessalonians 5:21; 1 Corinthians 14:29). The church has always held that many claimed experiences are not from God, and it has a long practice of examining them[^13][^14].

**Hearing voices is also not unique to religious settings.** The WHO survey above covered many countries and found these experiences in every country surveyed[^7].
`,
    },
    {
      id: "discernment",
      title: "How Christianity Tests Experiences",
      tags: ["Discernment"],
      content: `Christian teaching gives tests, and these protect against the very danger the video describes.

**Scripture is the standard.**
- Any message claiming to come from God is judged against what God has already revealed (Isaiah 8:20; Galatians 1:8-9; Acts 17:11)[^13].
- A voice that contradicts the Bible, commands harm to oneself or others, or encourages pride, secrecy or isolation is not from God (1 John 4:1-3; James 3:17)[^13][^14].
- A prophecy that fails is not from God (Deuteronomy 18:20-22).

**The fruit is examined.** "By their fruit you will recognise them" (Matthew 7:16-20). The fruit of the Spirit is love, joy, peace, patience, kindness and self-control (Galatians 5:22-23). Terror, confusion, grandiosity and commands to harm are not on the list.

**Others judge, not only the individual.** Paul says that prophecies are to be weighed by others (1 Corinthians 14:29) and that God is "not a God of disorder but of peace" (1 Corinthians 14:33). Proverbs says that "in an abundance of counsellors there is safety" (Proverbs 11:14; 24:6). A person in the middle of an episode is poorly placed to judge their own experience, and Scripture does not ask them to.

**The church has treated mental illness medically for a long time.** The Catechism of the Catholic Church says that psychological illness is a matter for medical science, and that before an exorcism is performed it must be established that the person is not simply ill[^15]. Many Protestant, Orthodox and evangelical bodies have formal mental health ministries, and large Christian hospitals have treated the mentally ill for centuries.

**Mainstream Christian teaching on medicine.** Jesus said the sick need a doctor (Matthew 9:12). Luke, who wrote the Gospel and Acts, was a physician (Colossians 4:14). Paul told Timothy to take a little wine for his stomach and frequent illnesses (1 Timothy 5:23). The Book of Sirach, which is Scripture for Catholic and Orthodox Christians, says that God created the physician and that the sick should pray and also give the doctor a place (Sirach 38:1-15). The Bible never presents medical care as a lack of faith.

**A practical rule many pastors give:** a person who believes God has told them to stop their medicine, to leave their family, or to harm anyone should treat that thought as one to be tested with a doctor and a trusted pastor before acting on it. Nothing in Scripture requires abandoning treatment.
`,
    },
    {
      id: "bible-and-madness",
      title: "What the Bible Says About Distress, Madness and Healing",
      tags: ["Scripture"],
      content: `The Bible does not treat mental suffering as shameful, and it gives examples of faithful people in anguish.

- **King Nebuchadnezzar** lost his reason for a period and later wrote, "my sanity was restored. Then I praised the Most High" (Daniel 4:28-37). Sanity and praise return together.
- **King Saul** was tormented by a troubled spirit, and David's music brought relief (1 Samuel 16:14-23). The text itself leaves open how the affliction is to be described.
- **David** wrote psalms of terror and despair (Psalms 6, 31, 38, 42-43, 88). Psalm 88 ends in darkness with no resolution, and it is in the Bible. Faith includes lament.
- **Elijah** asked to die, was fed and allowed to sleep, and was then spoken to in a "gentle whisper" (1 Kings 19:1-18). The first response to his despair was food and rest.
- **Job**, **Jeremiah** and **Paul** describe deep distress (Job 3; Jeremiah 20:7-18; 2 Corinthians 1:8-9).
- **Jesus' own family** thought he was "out of his mind" (Mark 3:21), some leaders said he was demon-possessed and "raving mad" (John 10:20), and the governor Festus told Paul he was "out of his mind" (Acts 26:24). The Gospels show that sane people can be accused of madness. They also show that the question of how to tell the difference was already a live one, and that the answer was to examine the evidence: Paul replied, "What I am saying is true and reasonable" (Acts 26:25).
- **Not every illness is demonic.** The Gospels list the demon-possessed, the epileptic and the paralysed as separate groups (Matthew 4:24). The New Testament does not treat every disorder as a spiritual attack, and most mainstream Christian traditions say the first response to mental illness should be medical care.
- **Paul's thorn.** Paul asked three times for relief and was told, "My grace is sufficient for you" (2 Corinthians 12:7-10). Grace does not always remove the affliction, but it is present within it.

**What this adds up to.** Distress of the mind does not disqualify a person from faith, from God's love, or from the church. The Psalms were written for people in pain.
`,
    },
    {
      id: "compatible",
      title: "Why Faith and Treatment Are Compatible",
      tags: ["Argument"],
      content: `Several lines of argument point the same way.

**1. Christian doctrine requires it.** If God made the body, and the body can be damaged, then healing the body is a good work. Medicine is among the ways God cares for people (Matthew 9:12; Colossians 4:14; Sirach 38). A believer who takes medicine does not deny God's power any more than one who eats bread.

**2. Faith can supply what medicine does not.** Antipsychotics treat symptoms. They do not answer the questions that illness raises: why this has happened, whether life still has purpose, whether the person is loved. Many with severe mental illness report that religious belief gave them meaning, hope and a place to belong. Reviews of the research find that for many people with schizophrenia, religion provides hope and comfort and is one of the ways they cope, while for others it can add despair, so the effect depends on how the faith is held and on the community around the person[^9][^10].

**3. Community is a protective factor.** Isolation is among the heaviest burdens of psychotic illness. A local church can provide visits, meals, rides to appointments, friends who stay when the illness is at its worst, and a community that remembers the person as more than a diagnosis. Organisations such as NAMI's FaithNet help congregations do this well[^16].

**4. Wider evidence on religion and mental health.** Large reviews, including one by the psychiatrist Harold Koenig, report that on average religious involvement is associated with better coping, lower rates of depression and a lower risk of suicide, with the exception of faith practised in punishing or fearful ways[^17]. These are associations, not proof of cause, and they depend on the kind of faith.

**5. The brain is involved in everything, and that does not make belief false.** Religious experience, like every experience, involves the brain. A scan showing activity does not show that what a person perceives is unreal, any more than the brain activity of a person seeing a tree shows the tree is unreal. Christians hold that God works through the body, including the brain. What matters is whether the content is true and the experience is tested.

**6. Faith and treatment tend to work together in practice.** The best Christian counselling and chaplaincy do both: they tell the person to keep taking their medicine and attending appointments, and they pray with them and sit with them. The founder of clinical pastoral education, himself a minister who had been hospitalised for psychosis, built a movement on that approach (see the case studies below)[^18][^19].
`,
    },
    {
      id: "atheism-no-shield",
      title: "Why Leaving Religion Does Not Prevent Psychosis",
      tags: ["Evidence"],
      content: `A natural thought is that dropping faith removes the risk. It does not, for several reasons.

**1. Psychosis occurs in every society studied, religious or secular.** Schizophrenia has been recorded in every region studied, in strongly religious and strongly secular societies alike[^5][^7]. If faith were the cause, rates would differ sharply with religiosity. They do not.

**2. The main drivers are biological.** Heritability of schizophrenia is about 79 per cent in the largest twin study, and other factors include prenatal conditions, cannabis use, trauma and sleep loss[^6][^3]. None of these depends on whether the person believes in God.

**3. The content follows the culture, and the illness persists.** Delusions take whatever themes surround the person. In religious settings they may be religious. In secular and technological settings they are about governments, surveillance, implants and the internet. Psychiatrist Victor Tausk described in 1919 the "influencing machine" that patients believed controlled them. More recently, clinicians have described the "Truman Show delusion", in which a person believes their life is being filmed as entertainment[^20][^21][^22]. A person without religion does not escape the illness. They get a different story.

**4. Voices do not need God to be frightening.** The Luhrmann study found that the American participants were more likely than those in India to report violent, commanding voices[^11][^12]. A secular framework that treats them only as symptoms does not by that fact make them less distressing.

**5. Atheism removes some supports.** It cannot offer the hope of resurrection, the claim that suffering is not the last word, or a community whose purpose includes caring for the sick. Secular communities can and do support the ill, and many atheists with mental illness do well. But the evidence that religious involvement is on average protective against depression and suicide suggests that dropping it does not carry a safety dividend[^17].

**6. The treatment is the same.** An atheist and a Christian with schizophrenia need the same thing: antipsychotic medication, therapy, family support and early intervention[^3][^8]. What differs is the story each tells about suffering, and whether the person has a God to whom to bring it.

**A fair caution.** Some people find that a particular church harmed them, and leaving it was a relief. Their experience should be respected. It is a reason to find a better church, not a proof that faith is dangerous.
`,
    },
    {
      id: "case-studies",
      title: "Christians Who Lived Through It",
      tags: ["History"],
      content: `A note on method. Many of these people lived before modern diagnosis, so the labels below are later, retrospective and often disputed. The point is not to diagnose them. It is to show that serious mental illness and Christian faith have often coexisted, and that the faith did not make the illness worse in the way the video claims.

**William Cowper (1731-1800), poet and hymn writer.** Cowper suffered repeated breakdowns, attempted suicide, and for long periods believed God had condemned him. He lived in Olney under the care and friendship of the curate John Newton, who encouraged him to write hymns. Even in his bleakest years he produced "God Moves in a Mysterious Way" and "There Is a Fountain Filled with Blood", hymns still sung. Newton regarded his friend's condition as in part physical, and Cowper was cared for by friends, doctors and the church[^23][^24]. His life shows that faith and severe illness can coexist, and that the church can be a refuge.

**Christopher Smart (1722-1771), poet.** Smart was confined to asylums in the late 1750s and early 1760s with what contemporaries called religious mania, and wrote much of his great poem *Jubilate Agno* in that period. Samuel Johnson, as Boswell recorded, said he did not think Smart ought to have been shut up, since his infirmities were not harmful to society, and that Smart insisted on people praying with him. He recovered enough to publish again, and his devotional verse is still read[^25][^26][^27].

**John Thomas Perceval (1803-1876).** A devout man who for a time followed a charismatic movement in Scotland, Perceval suffered a breakdown in 1830 with voices, spirits and religious delusions, and was confined in two asylums. After his release he wrote *A Narrative of the Treatment Experienced by a Gentleman* (1838-1840) and in 1845 co-founded the Alleged Lunatics' Friend Society, which campaigned against abuses in asylums. He named bereavement, mercury poisoning and an excess of religious study among the causes of his collapse, and he later lost his enthusiasm for the movement he had joined. His case shows two points: religious language did take over his illness, and recovery involved good care, time and testing. It did not require abandoning the search for God[^28][^29].

**Anton Boisen (1876-1965), minister and founder of clinical pastoral education.** Boisen, a Presbyterian minister, was hospitalised for psychotic breakdowns in the early 1920s. He recovered, became a hospital chaplain, and in 1925 began training theological students to work with patients at Worcester State Hospital. His book *The Exploration of the Inner World* (1936) drew on his own illness. The movement he started now trains chaplains across the world, and it works alongside psychiatrists rather than against them[^18][^19].

**Charles Spurgeon (1834-1892), preacher.** The most famous Baptist preacher of his century wrote openly of repeated depression, saying he knew "by most painful experience what deep depression of spirit means". His depression was not psychosis, but he preached about it, used rest and doctors, and told pastors that it should not shame them[^30][^31].

**Gerard Manley Hopkins (1844-1889), Jesuit priest and poet.** His "terrible sonnets" describe a desolation so deep that he felt cut off from God, yet they end in or return to faith. He is sometimes cited as proof that the dark night is part of the Christian life, not an exit from it[^32][^33].

**Vincent van Gogh (1853-1890), painter.** He began as a lay preacher and missionary among miners in Belgium, and his later paintings are full of religious imagery. He was hospitalised at Saint-Rémy in 1889 after severe episodes; modern scholars disagree about the diagnosis, which has been proposed as epilepsy, bipolar disorder or other conditions. His faith is a contested subject and he should not be claimed simply as a believer. His letters show a man who kept searching for God through his illness[^34][^35].

**What the case studies show.**
- The church and its members, at their best, offered care, not condemnation.
- None of these people was helped by being told that their experience was a gift to follow without question.
- Several were helped by medicine, rest, friends and a faith that gave a reason to go on.
- Some of their work, the hymns, the poems, the chaplaincy movement, came out of the suffering, which Christians read as an echo of God bringing good from pain (Genesis 50:20; Romans 8:28).
`,
    },
    {
      id: "objections",
      title: "Questions People Raise",
      tags: ["Argument"],
      content: `**"Moses, Isaiah and Paul saw and heard God. Why aren't they psychotic?"**
The accounts differ in ways that matter. The biblical encounters were not private, disorganised or self-destructive. Several were public (Exodus 19; Acts 2) or shared (Acts 9:7). They aligned with what God had already revealed and they produced moral change, not harm. The resurrection appearances were to groups, including a gathering of more than five hundred at once (1 Corinthians 15:6), which hallucination does not explain, since hallucinations are individual. See [The Resurrection](/categories/resurrection). This does not mean that every present-day claim to hear God is false, only that claims are tested.

**"Is mental illness demonic?"**
Christians differ on how to understand the demonic, but the mainstream view across Catholic, Orthodox and Protestant traditions is that mental illness should first be treated medically, and that the Gospels distinguish illness from possession (Matthew 4:24). Exorcism, where practised, is a rare step taken after medical evaluation[^15].

**"Does taking medication show a lack of faith?"**
No. Jesus said the sick need a doctor, and Paul recommended a remedy to Timothy (Matthew 9:12; 1 Timothy 5:23). A person who takes medication for schizophrenia is in the same position as a person who takes insulin for diabetes.

**"What if God really did speak?"**
Then the message will survive testing. It will agree with Scripture, bear good fruit, be confirmed by wise and trusted others, and will not require harming anyone or abandoning treatment. A true word from God loses nothing by being examined, and the Bible asks for examination.

**"Is psychosis proof that all religious experience is just brain chemistry?"**
No. Showing that illness can produce false experiences does not show that every experience is false, just as the existence of optical illusions does not show that all seeing is illusion. See the philosophy page on the [genetic fallacy](/categories/philosophy#section-freud).

**"What if a church or family says to stop the medication?"**
That advice does not come from Scripture, and no Christian teaching requires it. A person in this position should talk to a doctor first and ask for a second pastoral opinion, and can say that the Bible itself endorses medicine.

**"Will God still love someone with psychosis?"**
Yes. "The LORD is close to the brokenhearted" (Psalm 34:18), "neither death nor life... nor anything else in all creation will be able to separate us from the love of God" (Romans 8:38-39). Nothing in the illness changes that.
`,
    },
    {
      id: "practical",
      title: "What Helps: For the Person, the Family and the Church",
      tags: ["Pastoral"],
      content: `**For a person who is struggling now.**
- See a doctor and say honestly what is being experienced. Early treatment gives the best outcomes[^3][^8].
- Keep taking prescribed medicine and do not stop without medical advice. Stopping suddenly is a common cause of relapse.
- Tell one trusted person, a pastor, friend or relative, so that they can help test the experience. This is what Scripture itself advises.
- Keep sleep, food and routine steady. Avoid cannabis and heavy alcohol, which can trigger or worsen psychosis[^3].
- Prayer, Scripture, worship and sitting with others are allowed, and often help. They are for company with God, not for replacing care.
- A crisis line is available at any hour (988 in the United States; 116 123 in the UK and Ireland)[^1][^2].

**For family and friends.**
- Listen without arguing about whether the voices are real; stay calm and kind.
- Encourage treatment and offer to go along. Remember that the illness is not the person's fault or lack of faith.
- Look after themselves too, and seek support[^16].

**For churches and pastors.**
- Learn the basic signs and do not wait. Refer to a doctor at once, and walk alongside.
- Never tell someone to stop medication or treat the illness only as sin or spiritual attack.
- Keep the person in the community. Isolation does harm.
- Offer help with practical needs: rides, meals, visits, and company in hospital.
- Resources for congregations are available through NAMI FaithNet and other mental health organisations[^16].
`,
    },
  ],
  sources: [
    "1. [Reference] 988 Suicide and Crisis Lifeline. https://988lifeline.org/",
    "2. [Reference] Samaritans. Talk to us. https://www.samaritans.org/how-we-can-help/contact-samaritan/",
    "3. [Academic] National Institute of Mental Health. 'Understanding Psychosis.' https://www.nimh.nih.gov/health/publications/understanding-psychosis",
    "4. [Reference] NHS. 'Psychosis.' https://www.nhs.uk/mental-health/conditions/psychosis/overview/",
    "5. [Academic] Saha S, et al. A Systematic Review of the Prevalence of Schizophrenia. PLoS Medicine, 2005. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1140956/",
    "6. [Academic] Hilker R, et al. Heritability of Schizophrenia and Schizophrenia Spectrum Based on the Nationwide Danish Twin Register. Biological Psychiatry, 2018. https://pubmed.ncbi.nlm.nih.gov/28987712/",
    "7. [Academic] McGrath JJ, et al. Psychotic Experiences in the General Population: A Cross-National Analysis Based on 31,261 Respondents From 18 Countries. JAMA Psychiatry, 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4744794",
    "8. [Reference] NICE. Psychosis and schizophrenia in adults: prevention and management (CG178). https://www.nice.org.uk/guidance/cg178",
    "9. [Academic] Koenig HG. Religion, spirituality and psychotic disorders. Revista de Psiquiatria Clinica, 2007. https://www.scielo.br/j/rpc/a/WQtchtzDZGPMs4p9mdz3PWb/abstract/?lang=en",
    "10. [Academic] Systematic review of religious delusions and clinical features in psychosis. University of Porto repository. https://repositorio-aberto.up.pt/handle/10216/134503",
    "11. [Academic] Luhrmann TM, Padmavati R, Tharoor H, Osei A. Differences in voice-hearing experiences of people with psychosis in the USA, India and Ghana: interview-based study. British Journal of Psychiatry, 2015. https://dci.stanford.edu/wp-content/uploads/sites/2/2016/12/Luhrmann.bjp-print.pdf",
    "12. [Reference] British Psychological Society Research Digest. 'Voices heard by people with schizophrenia are friendlier in India and Africa than in the US.' https://www.bps.org.uk/research-digest/voices-heard-people-schizophrenia-are-friendlier-india-and-africa-us",
    "13. [Commentary] Commentaries on 1 John 4:1. Bible Hub. https://biblehub.com/commentaries/1_john/4-1.htm",
    "14. [Commentary] Commentaries on 1 Thessalonians 5:21. Bible Hub. https://biblehub.com/commentaries/1_thessalonians/5-21.htm",
    "15. [Primary Source] Catechism of the Catholic Church, section 1673 on exorcism and illness. https://www.scborromeo.org/ccc/p2s2c4a1.htm",
    "16. [Reference] NAMI FaithNet. https://www.nami.org/support-education/mental-health-education/nami-faithnet/",
    "17. [Academic] Koenig HG. Religion, Spirituality, and Health: The Research and Clinical Implications. ISRN Psychiatry, 2012. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3671693/",
    "18. [Academic] Association for Clinical Pastoral Education. A Brief History of CPE. https://acpe.edu/docs/default-source/acpe-history/acpe-brief-history",
    "19. [Wikipedia] Anton Boisen. https://en.wikipedia.org/wiki/Anton_Boisen",
    "20. [Wikipedia] Influencing machine. https://en.wikipedia.org/wiki/Influencing_machine",
    "21. [Wikipedia] Truman Show delusion. https://en.wikipedia.org/wiki/Truman_Show_delusion",
    "22. [Academic] Gold J, Gold I. The 'Truman Show' delusion: psychosis in the global village. Cognitive Neuropsychiatry, 2012. https://pubmed.ncbi.nlm.nih.gov/22640240/",
    "23. [Wikipedia] William Cowper. https://en.wikipedia.org/wiki/William_Cowper",
    "24. [Reference] William Cowper. Hymnary.org. https://hymnary.org/person/Cowper_William",
    "25. [Wikipedia] Asylum confinement of Christopher Smart. https://en.wikipedia.org/wiki/Asylum_confinement_of_Christopher_Smart",
    "26. [Reference] Christopher Smart. Poetry Foundation. https://www.poetryfoundation.org/poets/christopher-smart",
    "27. [Wikipedia] Christopher Smart. https://en.wikipedia.org/wiki/Christopher_Smart",
    "28. [Wikipedia] John Thomas Perceval. https://en.wikipedia.org/wiki/John_Thomas_Perceval",
    "29. [Reference] Wellcome Collection. A Narrative of the Treatment Experienced by a Gentleman. https://wellcomecollection.org/works/zpxg9zj7",
    "30. [Primary Source] Charles Spurgeon, Lectures to My Students, 'The Minister's Fainting Fits.' https://baptisthistoryhomepage.com/spurgeon.lectr.faint.fits.html",
    "31. [Wikipedia] Charles Spurgeon. https://en.wikipedia.org/wiki/Charles_Spurgeon",
    "32. [Wikipedia] Gerard Manley Hopkins. https://en.wikipedia.org/wiki/Gerard_Manley_Hopkins",
    "33. [Reference] Gerard Manley Hopkins. Poetry Foundation. https://www.poetryfoundation.org/poets/gerard-manley-hopkins",
    "34. [Wikipedia] Vincent van Gogh. https://en.wikipedia.org/wiki/Vincent_van_Gogh",
    "35. [Reference] Van Gogh Museum. Van Gogh's letters. https://www.vangoghletters.org/vg/"
  ],
  lastUpdated: "05-11-2026",
}
