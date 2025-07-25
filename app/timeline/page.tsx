"use client"

import Link from "next/link"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen } from "lucide-react"

// Biblical timeline data
const timelineEvents = [
  {
    id: 1,
    title: "Creation",
    date: "Beginning of Time",
    period: "Pre-History",
    description: "God creates the heavens and the earth, and all living things.",
    verses: ["Genesis 1:1", "Genesis 1:27", "Genesis 2:7"],
    archaeological:
      "While creation itself predates archaeological evidence, the Genesis account provides the theological foundation for understanding human origins.",
    significance: "Establishes God as Creator and humans as made in His image",
    color: "purple",
  },
  {
    id: 2,
    title: "The Fall",
    date: "Early Human History",
    period: "Pre-History",
    description: "Adam and Eve disobey God, introducing sin into the world.",
    verses: ["Genesis 3:1-24", "Romans 5:12"],
    archaeological:
      "Archaeological evidence shows early human moral awareness and religious practices across cultures.",
    significance: "Explains the origin of evil and humanity's need for redemption",
    color: "red",
  },
  {
    id: 3,
    title: "Noah's Flood",
    date: "c. 2500-2300 BC",
    period: "Pre-History",
    description: "God judges the world with a great flood, saving Noah and his family.",
    verses: ["Genesis 6-9", "2 Peter 3:6"],
    archaeological:
      "Flood narratives exist in many ancient cultures. Geological evidence for regional flooding in Mesopotamia.",
    significance: "Demonstrates God's judgment and mercy",
    color: "blue",
  },
  {
    id: 4,
    title: "Call of Abraham",
    date: "c. 2100 BC",
    period: "Patriarchal",
    description: "God calls Abraham to leave Ur and promises to make him a great nation.",
    verses: ["Genesis 12:1-3", "Hebrews 11:8"],
    archaeological:
      "Archaeological evidence for Ur of the Chaldees and ancient Mesopotamian culture matches biblical descriptions.",
    significance: "Beginning of God's covenant people and promise of blessing to all nations",
    color: "green",
  },
  {
    id: 5,
    title: "Joseph in Egypt",
    date: "c. 1900-1700 BC",
    period: "Patriarchal",
    description: "Joseph rises to power in Egypt, saving his family during famine.",
    verses: ["Genesis 37-50", "Acts 7:9-16"],
    archaeological:
      "Egyptian records show Semitic peoples in positions of authority. Evidence of seven-year famines in ancient Egypt.",
    significance: "God's providence and preparation for Israel's time in Egypt",
    color: "yellow",
  },
  {
    id: 6,
    title: "The Exodus",
    date: "c. 1446 BC",
    period: "Mosaic",
    description: "God delivers Israel from slavery in Egypt through Moses.",
    verses: ["Exodus 12:31-42", "1 Corinthians 10:1-4"],
    archaeological:
      "Evidence of Semitic slaves in Egypt. Possible archaeological evidence for Israelite presence in Sinai.",
    significance: "God's power over earthly kingdoms and deliverance of His people",
    color: "orange",
  },
  {
    id: 7,
    title: "Mount Sinai & The Law",
    date: "c. 1446 BC",
    period: "Mosaic",
    description: "God gives the Ten Commandments and the Law to Moses at Mount Sinai.",
    verses: ["Exodus 19-20", "Deuteronomy 5:1-22"],
    archaeological:
      "Traditional site of Mount Sinai shows evidence of ancient worship. Ancient law codes provide context for biblical law.",
    significance: "Establishment of God's moral law and covenant with Israel",
    color: "purple",
  },
  {
    id: 8,
    title: "Conquest of Canaan",
    date: "c. 1406-1400 BC",
    period: "Conquest",
    description: "Joshua leads Israel in conquering the Promised Land.",
    verses: ["Joshua 1:1-9", "Joshua 6:1-27"],
    archaeological:
      "Archaeological evidence for destruction layers at Jericho and other Canaanite cities during this period.",
    significance: "Fulfillment of God's promise to Abraham regarding the land",
    color: "red",
  },
  {
    id: 9,
    title: "Period of Judges",
    date: "c. 1400-1050 BC",
    period: "Judges",
    description: "Israel cycles through sin, oppression, repentance, and deliverance.",
    verses: ["Judges 2:16-19", "Judges 21:25"],
    archaeological: "Archaeological evidence shows cultural instability and conflict in Canaan during this period.",
    significance: "Demonstrates human need for godly leadership and God's faithfulness despite human failure",
    color: "brown",
  },
  {
    id: 10,
    title: "King David",
    date: "c. 1010-970 BC",
    period: "United Kingdom",
    description: "David becomes king of Israel and establishes Jerusalem as capital.",
    verses: ["2 Samuel 7:8-16", "Psalm 23"],
    archaeological:
      "Tel Dan inscription mentions 'House of David.' Archaeological evidence for 10th century Jerusalem expansion.",
    significance: "Messianic lineage established; model of godly leadership",
    color: "gold",
  },
  {
    id: 11,
    title: "Solomon's Temple",
    date: "c. 966-959 BC",
    period: "United Kingdom",
    description: "Solomon builds the first temple in Jerusalem.",
    verses: ["1 Kings 6:1-38", "2 Chronicles 3-4"],
    archaeological:
      "Archaeological evidence for Solomon's building projects. Phoenician architectural parallels to temple description.",
    significance: "Central place of worship established; foreshadows Christ as true temple",
    color: "gold",
  },
  {
    id: 12,
    title: "Kingdom Divided",
    date: "c. 930 BC",
    period: "Divided Kingdom",
    description: "Israel splits into northern (Israel) and southern (Judah) kingdoms.",
    verses: ["1 Kings 12:1-24", "2 Chronicles 10"],
    archaeological: "Archaeological evidence for two distinct kingdoms with different material cultures.",
    significance: "Consequences of disobedience; God's patience with His people",
    color: "orange",
  },
  {
    id: 13,
    title: "Assyrian Conquest",
    date: "722 BC",
    period: "Divided Kingdom",
    description: "Assyria conquers the northern kingdom of Israel.",
    verses: ["2 Kings 17:1-23", "Isaiah 10:5-11"],
    archaeological:
      "Assyrian records confirm conquest of Samaria. Archaeological evidence of destruction in northern Israel.",
    significance: "Fulfillment of prophetic warnings about judgment",
    color: "red",
  },
  {
    id: 14,
    title: "Babylonian Exile",
    date: "586 BC",
    period: "Exile",
    description: "Babylon destroys Jerusalem and takes Judah into exile.",
    verses: ["2 Kings 25:1-21", "Jeremiah 52"],
    archaeological:
      "Babylonian records mention Jewish exiles. Archaeological evidence for Jerusalem's destruction in 586 BC.",
    significance: "Judgment for covenant unfaithfulness; hope for restoration",
    color: "black",
  },
  {
    id: 15,
    title: "Return from Exile",
    date: "538 BC",
    period: "Post-Exile",
    description: "Cyrus of Persia allows Jews to return and rebuild Jerusalem.",
    verses: ["Ezra 1:1-4", "Isaiah 44:28"],
    archaeological:
      "Cyrus Cylinder confirms his policy of allowing exiled peoples to return. Archaeological evidence for Persian period rebuilding.",
    significance: "God's faithfulness to restore His people",
    color: "green",
  },
  {
    id: 16,
    title: "Second Temple Built",
    date: "516 BC",
    period: "Post-Exile",
    description: "The second temple is completed under Zerubbabel's leadership.",
    verses: ["Ezra 6:13-18", "Haggai 2:1-9"],
    archaeological: "Archaeological evidence for Second Temple period construction in Jerusalem.",
    significance: "Restoration of worship; preparation for Messiah's coming",
    color: "blue",
  },
  {
    id: 17,
    title: "Birth of Jesus",
    date: "c. 6-4 BC",
    period: "New Testament",
    description: "Jesus Christ is born in Bethlehem during the reign of Herod the Great.",
    verses: ["Matthew 1:18-25", "Luke 2:1-20"],
    archaeological:
      "Archaeological evidence for Herod's building projects. Historical records of Roman census practices.",
    significance: "Fulfillment of messianic prophecies; God becomes man",
    color: "gold",
  },
  {
    id: 18,
    title: "Jesus' Ministry",
    date: "c. 30-33 AD",
    period: "New Testament",
    description: "Jesus begins His public ministry, teaching and performing miracles.",
    verses: ["Mark 1:14-15", "John 3:16"],
    archaeological:
      "Archaeological evidence for first-century Galilee and Jerusalem. Synagogue remains from Jesus' time.",
    significance: "God's kingdom proclaimed; salvation offered to all",
    color: "blue",
  },
  {
    id: 19,
    title: "Crucifixion & Resurrection",
    date: "c. 33 AD",
    period: "New Testament",
    description: "Jesus is crucified and rises from the dead on the third day.",
    verses: ["Matthew 27-28", "1 Corinthians 15:3-8"],
    archaeological: "Archaeological evidence for Roman crucifixion practices. Empty tomb traditions in Jerusalem.",
    significance: "Atonement for sin accomplished; victory over death",
    color: "red",
  },
  {
    id: 20,
    title: "Pentecost & Early Church",
    date: "c. 33 AD",
    period: "New Testament",
    description: "The Holy Spirit comes upon the apostles, and the church begins.",
    verses: ["Acts 2:1-47", "Acts 4:32-37"],
    archaeological: "Archaeological evidence for early Christian communities. First-century Jerusalem remains.",
    significance: "Birth of the church; gospel spreads to all nations",
    color: "orange",
  },
  {
    id: 21,
    title: "Paul's Missionary Journeys",
    date: "c. 46-67 AD",
    period: "New Testament",
    description: "Paul spreads the gospel throughout the Roman Empire.",
    verses: ["Acts 13-28", "Romans 1:16"],
    archaeological: "Archaeological evidence for cities Paul visited. Roman road system that facilitated travel.",
    significance: "Gospel reaches the Gentiles; church established globally",
    color: "green",
  },
  {
    id: 22,
    title: "Destruction of Jerusalem",
    date: "70 AD",
    period: "New Testament",
    description: "Romans destroy Jerusalem and the second temple.",
    verses: ["Matthew 24:1-2", "Luke 21:20-24"],
    archaeological:
      "Archaeological evidence for Roman siege and destruction of Jerusalem. Josephus' historical accounts.",
    significance: "Jesus' prophecy fulfilled; end of temple-based Judaism",
    color: "black",
  },
]

const periods = [
  "All",
  "Pre-History",
  "Patriarchal",
  "Mosaic",
  "Conquest",
  "Judges",
  "United Kingdom",
  "Divided Kingdom",
  "Exile",
  "Post-Exile",
  "New Testament",
]

export default function TimelinePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("All")
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [search, setSearch] = useState("")

  // Filter by period first, then by search
  const periodFiltered =
    selectedPeriod === "All" ? timelineEvents : timelineEvents.filter((event) => event.period === selectedPeriod)
  const filteredEvents = periodFiltered.filter((event) => {
    const q = search.toLowerCase()
    return (
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.significance.toLowerCase().includes(q) ||
      event.period.toLowerCase().includes(q) ||
      event.date.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Biblical Timeline</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of important biblical and Christian related events, from Creation to the early church.
          </p>

        {/* Search and Period Filter */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Period filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {periods.map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className="mb-2"
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative py-16 pl-4">
          {/* Timeline line - positioned further to the right */}
          <div className="absolute left-44 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 z-0 rounded-full"></div>

          {/* Timeline events */}
          <div className="flex flex-col gap-20">
            {filteredEvents.map((event) => (
              <div key={event.id} className="relative flex items-center w-full">
                {/* Date badge - positioned to the left */}
                <div className="flex-shrink-0 w-36 text-right pr-4">
                  <span className="bg-white border-2 border-blue-400 text-blue-700 font-bold px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap inline-block">
                    {event.date}
                  </span>
                </div>
                
                {/* Timeline dot - small circle on the line */}
                <div className="flex-shrink-0 relative z-10 mr-6">
                  <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg bg-${event.color}-500`}></div>
                </div>
                
                {/* Event card - positioned further to the right */}
                <div className="flex-1 max-w-2xl ml-4">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <Badge variant="secondary" className="text-xs">{event.period}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-sm">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {/* Bible verses */}
                        <div>
                          <h4 className="font-semibold text-xs text-gray-700 mb-1 flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            Key Verses
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {event.verses.map((verse) => (
                              <Badge key={verse} variant="outline" className="text-xs px-2 py-0">
                                {verse}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* Significance */}
                        <div>
                          <h4 className="font-semibold text-xs text-gray-700 mb-1">Significance</h4>
                          <p className="text-xs text-gray-600">{event.significance}</p>
                        </div>
                        {/* Expandable archaeological evidence */}
                        <div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                            className="p-0 h-auto font-semibold text-xs text-blue-600 hover:text-blue-800"
                          >
                            Archaeological Evidence {expandedEvent === event.id ? "▼" : "▶"}
                          </Button>
                          {expandedEvent === event.id && (
                            <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                              <p className="text-xs text-gray-700">{event.archaeological}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">Explore the Evidence Further</h3>
                <p className="mb-6 opacity-90">
                  Each event in biblical history is supported by archaeological and historical evidence. Dive deeper into
                  specific topics and discover how history confirms Scripture.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/categories">Browse Apologetics Topics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
