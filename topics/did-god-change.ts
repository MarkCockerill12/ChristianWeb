import type { Topic } from './types'

export const DID_GOD_CHANGE: Topic = {
  id: "did-god-change",
  title: "Did God Change Between the Testaments?",
  description: "Exploring the perceived differences between the God of the Old Testament and the New Testament.",
  icon: "BookOpen",
  color: "purple",
  tags: ["Theology", "God's Character", "Old Testament", "New Testament"],
  verses: [
    { reference: "Malachi 3:6", text: "For I the LORD do not change; therefore you, O children of Jacob, are not consumed." },
    { reference: "Hebrews 13:8", text: "Jesus Christ is the same yesterday and today and forever." },
    { reference: "James 1:17", text: "Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change." },
    { reference: "Numbers 23:19", text: "God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?" },
    { reference: "Exodus 34:6-7", text: "The LORD, the LORD, the compassionate and gracious God, slow to anger, abounding in love and faithfulness, maintaining love to thousands, and forgiving wickedness, rebellion and sin. Yet he does not leave the guilty unpunished." }
  ],
  tldr: "God did not change between the Old and New Testaments. The perceived difference arises from progressive revelation and from a change in covenant administration, while His character of perfect love and uncompromising justice remains immutable. The Old Testament's own summary of God is that He is compassionate and slow to anger, and the New Testament contains Scripture's most severe judgment language.",
  content: `
A common criticism holds that the God of the Old Testament appears drastically different from the God revealed in the New. Sceptics characterise the former as wrathful and vindictive, demanding bloody sacrifice and violent conquest, while the latter is seen as characterised exclusively by grace and unconditional love[^1][^2].

This dichotomy has a name. Marcion of Sinope taught in the second century that the two testaments featured two different gods, and the position was examined and rejected by the early church[^3]. The Christian claim is not that God evolved or revised His intentions, but that He is immutable in nature, character, and purpose, and that the apparent differences are explained by a change in humanity's redemptive timeline rather than in God[^4].
`,
  subtopics: [
    {
      id: "marcion",
      title: "Marcion and the Two Gods Proposal",
      tags: ["marcion", "heresy", "canon", "history"],
      content: `
The two gods reading was formulated, tested, and rejected within the second century[^5].

*   **Marcion's position.** He distinguished the creator of the Hebrew scriptures, whom he regarded as just but harsh, from the previously unknown God of love revealed in Jesus. He assembled a canon consisting of an edited Luke and ten Pauline letters, removing the Jewish material[^6].
*   **The church's response.** Marcion was excommunicated around AD 144. The controversy pressed the early church toward defining its own canon, one that deliberately retained the Hebrew scriptures and affirmed that the same God stood behind both testaments[^7].
*   **The method it required.** Sustaining the division forced Marcion to cut a great deal of Luke and Paul, which is itself evidence of how strongly the texts resist being separated in that way[^8].

The modern objection is a version of Marcion's and inherits the same method, which is a selective reading of each testament[^9].
`
    },
    {
      id: "old-testament-mercy",
      title: "The Old Testament's Own Description of God",
      tags: ["mercy", "exodus 34", "old testament"],
      content: `
The caricature struggles against the Old Testament's most repeated statement about God's character[^10].

*   **The Sinai formula.** Exodus 34:6-7, given immediately after the golden calf, describes God as compassionate and gracious, slow to anger, abounding in love and faithfulness. This formula is then quoted or echoed throughout the Old Testament, functioning as Israel's creedal summary of who God is[^11].
*   **Repeated across the canon.** The same description appears in Nehemiah, the Psalms, Joel, and Nahum, spanning history, worship, and prophecy alike[^12].
*   **Jonah as the sharpest case.** The prophet becomes angry that God spares Nineveh, and complains that he knew this would happen precisely because God is gracious and compassionate. The mercy is presented as God's known and characteristic behaviour[^13].
*   **Judgment as the reluctant last resort.** Hosea and Ezekiel present God pleading with Israel to return, stating explicitly that He takes no pleasure in the death of the wicked[^14].

Old Testament judgment is severe and real. The wrath-only reading requires ignoring the material the Old Testament itself treats as its headline description of God[^15].
`
    },
    {
      id: "new-testament-severity",
      title: "The New Testament's Judgment Language",
      tags: ["judgment", "new testament", "jesus"],
      content: `
The inverse half of the caricature fails just as badly[^16][^17].

*   **Jesus speaks about judgment more than anyone else in Scripture.** The warnings about Gehenna, outer darkness, and weeping and gnashing of teeth are overwhelmingly on His lips rather than in the Old Testament prophets[^18].
*   **Judgment inside the church.** Ananias and Sapphira fall dead in Acts 5, after Pentecost and within the earliest Christian community[^19].
*   **Apostolic teaching.** Paul writes of the wrath of God being revealed from heaven against all godlessness, and of everlasting destruction for those who reject the gospel[^20].
*   **Revelation.** The book contains the most sustained judgment imagery in Scripture, with Christ depicted treading the winepress of the fury of the wrath of God Almighty[^21].

Anyone reading the New Testament as uniformly gentle applies to it exactly the selectivity that the wrathful Old Testament reading applies in the other direction[^22].
`
    },
    {
      id: "god-relented",
      title: "Texts Where God Relents",
      tags: ["objection", "immutability", "anthropopathism"],
      content: `
The strongest counter-evidence to divine immutability comes from passages describing God relenting[^23].

Numbers 23:19 states that God is not a son of man that He should change His mind. Yet Exodus 32:14 says the LORD relented, Jonah 3:10 says He relented and did not bring the threatened destruction, and Genesis 6:6 says He regretted making humanity. These are not marginal texts[^24].

Three responses are offered, in ascending order of exegetical weight.

*   **Conditional announcements.** Jonah's message that Nineveh would be overthrown in forty days functions as a warning whose implicit condition is repentance, not an unconditional decree. God's response to Nineveh's repentance is exactly what an unchanging commitment to mercy toward the penitent predicts, so the constancy lies in the principle and the change lies in Nineveh[^25].
*   **Anthropopathism.** Scripture routinely ascribes human emotions and reactions to God in order to convey the moral significance of human conduct in terms creatures can grasp, in the same way it ascribes hands, eyes, and a face. The Hebrew verb *nacham* covers a range including grief, comfort, and relenting[^26].
*   **Immutability properly defined.** The doctrine claims that God is unchanging in nature, character, and purpose, not that He is static or unresponsive. A fixed disposition to show mercy to the repentant necessarily produces different treatment of the same person before and after repentance[^27][^28].

The anthropopathism answer can be applied so broadly that it drains the texts of content, and open theists argue that classical immutability owes more to Greek philosophy than to Hebrew scripture. That debate remains live within orthodox Christianity, and the conditional-announcement reading carries the most exegetical weight without requiring a heavy philosophical apparatus[^29].
`
    },
    {
      id: "progressive-revelation",
      title: "Progressive Revelation and Covenant",
      tags: ["progressive revelation", "covenant", "law"],
      content: `
The standard Christian explanation is that revelation unfolded in stages while its author did not change[^30].

*   **The claim.** God disclosed His character and purposes progressively, accommodating each stage to its recipients and culminating in Christ. Hebrews opens by making exactly this argument, stating that God spoke at many times and in various ways through the prophets, and in these last days through His Son[^31].
*   **What it does not mean.** It is not the claim that earlier revelation was mistaken and later corrected, which would concede the objection. Earlier revelation was partial and preparatory[^32].
*   **Ceremonial law fulfilled.** The food laws, purity regulations, and sacrificial system marked Israel as distinct and pointed forward to a decisive sacrifice. Mark 7:19 and Peter's vision in Acts 10 present these as fulfilled rather than abolished arbitrarily[^33].
*   **The mechanism stated explicitly.** Hebrews declares that by calling the covenant new, God made the first one obsolete. The change is legislated by the same authority that gave the earlier covenant, which is the opposite of that authority changing its mind[^34].
*   **Moral law continues and intensifies.** The commands against murder, theft, adultery, and idolatry are reaffirmed, and Jesus extends prohibitions from actions to the intentions behind them[^35].

If God had genuinely changed, the moral standards would be expected to relax. They do not; they tighten. What relaxes is the ceremonial apparatus whose stated purpose was to point toward Christ[^36].

How completely the new covenant replaces the old, and what that means for Israel's ongoing status, remains contested among Christians, so covenant change describes a family of positions rather than a single one[^37].
`
    },
    {
      id: "assessment",
      title: "Assessment",
      tags: ["conclusion", "summary"],
      content: `
The objection depends on a selective reading of both testaments. The Old Testament's own creedal self-description is of a God slow to anger and abounding in love, while the New Testament contains Scripture's most severe judgment material. Removing the selectivity causes the two portraits to converge sharply[^38].

The texts in which God relents are genuine data, and the classical doctrine of immutability requires careful statement to accommodate them[^39].

What changed was the covenant, the ceremonial apparatus, and the stage of revelation, administered by the same God toward the same ends. On the historic Christian account the incarnation is not a change in God's character but its clearest expression, displaying the same holiness and the same mercy now visible in a person[^40].
`
    }
  ],
            sources: [
    "1. [Apologetics] GotQuestions.org. What is progressive revelation as it relates to salvation? https://www.gotquestions.org/progressive-revelation.html",
    "2. [Evangelical] The Gospel Coalition. The Immutability of God. Theological essay on God's unchanging character across Scripture. https://www.thegospelcoalition.org/essay/the-immutability-of-god/",
    "3. [Encyclopedia] Britannica. Marcion. Biography and the church's rejection of his teaching. https://www.britannica.com/biography/Marcion",
    "4. [Peer-Reviewed] Stanford Encyclopedia of Philosophy. Immutability. Academic treatment of the doctrine. https://plato.stanford.edu/entries/immutability/",
    "5. [Catholic] New Advent, Catholic Encyclopedia. Immutability of God. Classical formulation of the doctrine. https://www.newadvent.org/cathen/09645c.htm",
    "6. [Peer-Reviewed] Internet Encyclopedia of Philosophy. Concepts of God in Western Thought. Divine attributes including immutability. https://iep.utm.edu/god-west/",
    "7. [Reference] Wikipedia. Divine simplicity. The classical doctrine underlying immutability. https://en.wikipedia.org/wiki/Divine_simplicity",
    "8. [Reference] Wikipedia. Tetragrammaton. The divine name disclosed at the burning bush. https://en.wikipedia.org/wiki/Tetragrammaton",
    "9. [Commentary] Bible Hub. 'Commentaries on Hebrews 13:8.' https://biblehub.com/commentaries/hebrews/13-8.htm",
    "10. [Theology] Sam Storms. The Immutability of God. Distinguishes unconditional decrees from conditional announcements. https://www.samstorms.org/all-articles/post/the-immutability-of-god/",
    "11. [Commentary] Bible Hub. 'Commentaries on Exodus 34:6.' https://biblehub.com/commentaries/exodus/34-6.htm",
    "12. [Commentary] Bible Hub. 'Commentaries on Nehemiah 9:17.' https://biblehub.com/commentaries/nehemiah/9-17.htm",
    "13. [Commentary] Bible Hub. 'Commentaries on Jonah 3:10.' https://biblehub.com/commentaries/jonah/3-10.htm",
    "14. [Commentary] Bible Hub. 'Commentaries on Ezekiel 33:11.' https://biblehub.com/commentaries/ezekiel/33-11.htm",
    "15. [Reference] Wikipedia. Anthropopathism. Ascribing human emotion to God as accommodated description. https://en.wikipedia.org/wiki/Anthropopathism",
    "16. [Apologetics] GotQuestions.org. Does God change His mind? Treatment of the relenting texts. https://www.gotquestions.org/God-change-mind.html",
    "17. [Academic] Bob Jones University Seminary. Greater Is He Than Man Can Know: Divine Repentance. Journal article on the relenting texts. https://seminary.bju.edu/files/2022/03/JBTW2.2_Article05_GreaterIsHeThanManCanKnow.pdf",
    "18. [Commentary] Bible Hub. 'Commentaries on Matthew 23:33.' https://biblehub.com/commentaries/matthew/23-33.htm",
    "19. [Commentary] Bible Hub. 'Commentaries on Acts 5:1.' https://biblehub.com/commentaries/acts/5-1.htm",
    "20. [Reference] Wikipedia. Supersessionism. The disputed question of how far the new covenant replaces the old. https://en.wikipedia.org/wiki/Supersessionism",
    "21. [Commentary] Bible Hub. 'Commentaries on Numbers 23:19.' https://biblehub.com/commentaries/numbers/23-19.htm",
    "22. [Lexical] Bible Hub. Hebrew 5162, nacham, the verb behind relent, regret, and comfort. https://biblehub.com/hebrew/5162.htm",
    "23. [Reference] Wikipedia. Open theism. The position that classical immutability overstates the biblical data. https://en.wikipedia.org/wiki/Open_theism",
    "24. [Commentary] Bible Hub. 'Commentaries on Acts 10:9.' https://biblehub.com/commentaries/acts/10-9.htm",
    "25. [Commentary] Bible Hub. 'Commentaries on Jeremiah 18:7.' https://biblehub.com/commentaries/jeremiah/18-7.htm",
    "26. [Commentary] Bible Hub. 'Commentaries on 1 Samuel 15:11.' https://biblehub.com/commentaries/1_samuel/15-11.htm",
    "27. [Lexical] Bible Hub. Hebrew 2617, chesed, the covenant love in the Sinai formula. https://biblehub.com/hebrew/2617.htm",
    "28. [Lexical] Bible Hub. Hebrew 639, aph, the noun behind slow to anger. https://biblehub.com/hebrew/639.htm",
    "29. [Reference] Wikipedia. Attributes of God in Christianity. The classical attributes and their scriptural basis. https://en.wikipedia.org/wiki/Attributes_of_God_in_Christianity",
    "30. [Commentary] Bible Hub. 'Commentaries on 2 Peter 3:9.' https://biblehub.com/commentaries/2_peter/3-9.htm",
    "31. [Commentary] Bible Hub. 'Commentaries on Micah 7:18.' https://biblehub.com/commentaries/micah/7-18.htm",
    "32. [Commentary] Bible Hub. 'Commentaries on 1 John 4:8.' https://biblehub.com/commentaries/1_john/4-8.htm",
    "33. [Commentary] Bible Hub. 'Commentaries on Exodus 20:5.' https://biblehub.com/commentaries/exodus/20-5.htm",
    "34. [Reference] Wikipedia. Biblical law in Christianity. How Christians have distinguished moral, civil and ceremonial law. https://en.wikipedia.org/wiki/Biblical_law_in_Christianity",
    "35. [Reference] Wikipedia. Ceremonial law. The category of law understood as fulfilled in Christ. https://en.wikipedia.org/wiki/Ceremonial_law",
    "36. [Reference] Wikipedia. New Covenant. The promised covenant and its Christian interpretation. https://en.wikipedia.org/wiki/New_Covenant",
    "37. [Commentary] Bible Hub. 'Commentaries on Acts 17:30.' https://biblehub.com/commentaries/acts/17-30.htm",
    "38. [Commentary] Bible Hub. 'Commentaries on Luke 12:5.' https://biblehub.com/commentaries/luke/12-5.htm",
    "39. [Commentary] Bible Hub. 'Commentaries on Hebrews 10:31.' https://biblehub.com/commentaries/hebrews/10-31.htm",
    "40. [Commentary] Bible Hub. 'Commentaries on Genesis 18:25.' https://biblehub.com/commentaries/genesis/18-25.htm"
  ],
  lastUpdated: "06-08-2026"
}
