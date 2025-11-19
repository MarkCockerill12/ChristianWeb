"use client"

import React, { use, useState } from "react"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Heart, ExternalLink, CheckCircle2, ChevronUp, ChevronDown, ArrowLeft, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { getTopicById } from "@/lib/getTopics"

import { branchBeliefs, branchBeliefMap, branchTimeline } from "@/topics/branches"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { canonTimeline } from "@/topics/canon"

const iconMap = {
  BookOpen,
  Clock,
  Heart,
  ExternalLink,
  CheckCircle2,
  Users,
} as const;


interface PageProps {
  readonly params: Promise<{
    slug: string
  }>
}

// Component for expandable Bible verse
function BibleVerse({ verse }: { readonly verse: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [fullVerse, setFullVerse] = useState<string>("")
  
  const getFullVerse = async (reference: string) => {
    const mockFullVerses: Record<string, string> = {
      // if God why Evil
      "Romans 8:28": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      "Job 1:21": "Naked I came from my mother’s womb, and naked I will depart. The Lord gave and the Lord has taken away; may the name of the Lord be praised.",
      "2 Corinthians 1:3-4": "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.",
      "Revelation 21:4": "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
      "Genesis 1:26-27": "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
      "Genesis 1:27-28": "God blessed them and said to them, 'Be fruitful and increase in number; fill the earth and subdue it.'",
      "Genesis 2:16-17": "And the Lord God commanded the man, 'You are free to eat from any tree in the garden; but you must not eat from the tree of the knowledge of good and evil, for when you eat from it you will certainly die.'",
      "Genesis 3:6-7": "When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it. Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.",

       //Hell
      "Matt. 8:12": "But the subjects of the kingdom will be thrown outside, into the darkness, where there will be weeping and gnashing of teeth.",
      "Matt. 13:41–42": "The Son of Man will send out his angels, and they will weed out of his kingdom everything that causes sin and all who do evil. They will throw them into the blazing furnace, where there will be weeping and gnashing of teeth.",
      "Matt. 5:22": "But I tell you that anyone who is angry with a brother or sister will be subject to judgment. Again, anyone who says to a brother or sister, 'Raca,' is answerable to the court. And anyone who says, 'You fool!' will be in danger of the fire of hell.",
      "Matt. 25:41": "Then he will say to those on his left, 'Depart from me, you who are cursed, into the eternal fire prepared for the devil and his angels.'",
      "Mark 9:43": "If your hand causes you to stumble, cut it off. It is better for you to enter life maimed than with two hands to go into hell, where the fire never goes out.",
      "Matt. 25:46": "Then they will go away to eternal punishment, but the righteous to eternal life.",
      "John 3:16": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      

      //Jesus
      "John 10:30": "I and the Father are one.",
      "John 8:58": "“Very truly I tell you,” Jesus answered, “before Abraham was born, I am!”",
      "John 14:9": "Jesus answered: “Don’t you know me, Philip, even after I have been among you such a long time? Anyone who has seen me has seen the Father. How can you say, ‘Show us the Father’?",
      "Revelation 1:8": "I am the Alpha and the Omega, says the Lord God, who is and who was and who is to come, the Almighty.",
      "John 5:18": "For this reason they tried all the more to kill him; not only was he breaking the Sabbath, but he was even calling God his own Father, making himself equal with God.",
      "Exodus 3:14": "God said to Moses, 'I AM WHO I AM.' And he said, 'Say this to the people of Israel: I AM has sent me to you.'",
      

      //resurrection
      "1 Corinthians 15:3-8": " For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, and then to the Twelve. After that, he appeared to more than five hundred of the brothers and sisters at the same time, most of whom are still living, though some have fallen asleep. Then he appeared to James, then to all the apostles, and last of all he appeared to me also, as to one abnormally born",
      "1 Corinthians 15:17": "And if Christ has not been raised, your faith is futile; you are still in your sins.",
      "John 19:34": "Instead, one of the soldiers pierced Jesus’ side with a spear, bringing a sudden flow of blood and water.",

      
      // "Matthew 28:19-20": "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
      // "1 Peter 3:15": "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect,",
      // "Romans 1:20": "For since the creation of the world God's invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse.",
      // "John 14:6": "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
      // "Romans 3:23": "for all have sinned and fall short of the glory of God,",
      // "Romans 6:23": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
      // "Ephesians 2:8-9": "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.",
      
      // // Added from topics
      
    }
    return mockFullVerses[reference] || "Too Long for the website! Please read in full context.";
  }

  const handleToggleExpansion = async () => {
    if (!isExpanded && !fullVerse) {
      const fullText = await getFullVerse(verse)
      setFullVerse(fullText)
    }
    setIsExpanded(!isExpanded)
  }

  const getBibleGatewayUrl = (reference: string) => {
    const encodedReference = encodeURIComponent(reference)
    return `https://www.biblegateway.com/passage/?search=${encodedReference}&version=NIV`
  }

  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
      <Badge variant="outline" className="mb-2">
        {verse}
      </Badge>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggleExpansion}
        className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto font-normal mb-2"
      >
        {isExpanded ? "Hide full verse" : "Click to show full verse"}
        {isExpanded ? (
          <ChevronUp className="ml-1 h-3 w-3" />
        ) : (
          <ChevronDown className="ml-1 h-3 w-3" />
        )}
      </Button>
      
      {isExpanded && (
        <div className="mt-3 space-y-3">
          <p className="text-sm text-gray-700 italic leading-relaxed border-l-2 border-blue-300 pl-3">
            &quot;{fullVerse}&quot;
          </p>
          <Button asChild size="sm" variant="outline">
            <Link 
              href={getBibleGatewayUrl(verse)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <ExternalLink className="mr-1 h-3 w-3" />
              Read in full context
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default function CategoryPage({ params }: PageProps) {

  // Badge Cluster Component (icons only, tooltip on hover)
  function BranchBadgeCluster({ branchId }: { branchId: string }) {
    const beliefs = branchBeliefMap[branchId]
    return (
      <div className="flex gap-2 flex-wrap mt-2">
        {branchBeliefs.map(belief => {
          const IconComponent = iconMap[belief.icon as keyof typeof iconMap]
          return (
            <span key={belief.key} className="relative group" title={belief.description}>
              {beliefs[belief.key]
                ? <IconComponent className="h-5 w-5 text-green-600" />
                : <IconComponent className="h-5 w-5 text-red-600" />}
            </span>
          )
        })}
      </div>
    )
  }

  const resolvedParams = use(params)
  const baseCategory = getTopicById(resolvedParams.slug)

  if (!baseCategory) {
    notFound()
  }

  const category = baseCategory.id === "canon" ? { ...baseCategory, timeline: canonTimeline } : baseCategory

  const [search, setSearch] = useState("")
  const [expandedSubtopics, setExpandedSubtopics] = useState<Set<string>>(new Set())
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const toggleSubtopic = (id: string) => {
    setExpandedSubtopics(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Auto-expand subtopic when text is found via browser search (Ctrl+F)
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      // Check if any text in collapsed sections is highlighted by browser find
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const container = range.commonAncestorContainer
        const element = container.nodeType === Node.TEXT_NODE ? container.parentElement : container as HTMLElement
        
        // Find the closest subtopic container
        const subtopicContent = element?.closest('[data-subtopic-id]')
        if (subtopicContent) {
          const subtopicId = subtopicContent.getAttribute('data-subtopic-id')
          if (subtopicId && !expandedSubtopics.has(subtopicId)) {
            setExpandedSubtopics(prev => new Set(prev).add(subtopicId))
          }
        }
      }
    })

    // Observe selection changes
    document.addEventListener('selectionchange', () => {
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
        const range = selection.getRangeAt(0)
        const container = range.commonAncestorContainer
        const element = container.nodeType === Node.TEXT_NODE ? container.parentElement : container as HTMLElement
        
        const subtopicContent = element?.closest('[data-subtopic-id]')
        if (subtopicContent) {
          const subtopicId = subtopicContent.getAttribute('data-subtopic-id')
          if (subtopicId && !expandedSubtopics.has(subtopicId)) {
            setExpandedSubtopics(prev => new Set(prev).add(subtopicId))
          }
        }
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      observer.disconnect()
    }
  }, [expandedSubtopics])

  // Only show subtopic UI for these topics
  const showSubtopics = ["religions", "branches", "contradictions", "canon", "god-evil", "miracles", "fine-tuning", "nasa", "prophecy", "archaeological"].includes(category.id)

  // Collect all unique tags for tag filter display
  const allTags = showSubtopics && category.subtopics
    ? Array.from(new Set(category.subtopics.flatMap(sub => sub.tags)))
    : []

  // Filter subtopics by search or selected tag
  const filteredSubtopics = showSubtopics && category.subtopics
    ? category.subtopics.filter(sub => {
        if (selectedTag) {
          return sub.tags.includes(selectedTag)
        }
        const q = search.toLowerCase()
        return (
          sub.title.toLowerCase().includes(q) ||
          sub.content.toLowerCase().includes(q) ||
          sub.tags.some(tag => tag.toLowerCase().includes(q))
        )
      })
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Topics
            </Link>
          </Button>
        </div>

        {/* Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {category.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-fluid-3xl break-words hyphens-auto leading-tight">{category.title}</CardTitle>
            <CardDescription className="text-lg">{category.description}</CardDescription>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4" />
              Last updated: {category.lastUpdated}
            </div>
          </CardHeader>
        </Card>

        {/* TL;DR Section */}
        <Card className="mb-8 border-l-4 border-blue-600 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">TL;DR</CardTitle>
            <CardDescription className="text-md text-gray-700">
              {category.tldr}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Main Content Section - Always show if content exists */}
        {category.content && category.content.trim() && (
          <Card className="mb-8">
            <CardContent className="py-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{
                __html: category.content
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4 - level}xl font-bold mt-8 mb-4 text-gray-900">`
                  })
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </CardContent>
          </Card>
        )}

        {/* Timeline Sections */}
        {category.timeline && (category.id === "canon" || category.id === "slavery") && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                {category.id === "canon" ? "Biblical Canon Timeline" : "Biblical Slavery Timeline"}
              </CardTitle>
              <CardDescription>
                {category.id === "canon" 
                  ? "Key events in the development and recognition of biblical canon from Moses to modern era"
                  : "How Christianity transformed slavery from ancient times through abolition movements"}
              </CardDescription>
              
              {/* Important Disclaimer */}
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="text-amber-600 font-semibold text-sm">⚠️ Important Note:</div>
                </div>
                <p className="text-sm text-amber-800 mt-1">
                  {category.id === "canon" ? (
                    <>
                      <strong>The dates shown indicate when these books were written down, not when the events they describe occurred.</strong> For example, Moses wrote Genesis around 1445 BC, but it records events from Creation through Joseph&apos;s death (c. 1805 BC). Similarly, the Gospels were written 15-65 years after Christ&apos;s ministry but record His life and teachings from 30-33 AD.
                    </>
                  ) : (
                    <>
                      <strong>This timeline shows Christianity&apos;s progressive transformation of slavery from regulation to abolition.</strong> Rather than immediately abolishing slavery in ancient times (which would have caused economic collapse as well as social protest as seen with Israel&apos;s constant flip-flopping of beliefs), God worked through progressive revelation to plant principles of human dignity that ultimately led to slavery&apos;s complete abolition by Christian movements.
                    </>
                  )}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              {/* Timeline */}
              <div className="relative py-8">
                {/* Timeline line - positioned to avoid date overlap */}
                <div className="hidden md:block absolute left-[136px] lg:left-[166px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400 z-0 rounded-full"></div>

                {/* Timeline events */}
                <div className="flex flex-col gap-8 md:gap-12">
                  {category.timeline.map((event) => (
                    <div key={event.id} className="relative">
                      {/* Mobile Layout - only on screens smaller than md */}
                      <div className="block md:hidden">
                        <div className="mb-3">
                          <span className={`bg-white border-2 border-${event.color}-400 text-${event.color}-700 font-bold px-2 py-1 rounded-full shadow-md text-xs`}>
                            {event.date}
                          </span>
                        </div>
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex flex-col gap-2">
                              <div>
                                <CardTitle className="text-lg" dangerouslySetInnerHTML={{ __html: event.title }}></CardTitle>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                  <Badge variant="secondary" className="text-xs">{event.period}</Badge>
                                </div>
                              </div>
                            </div>
                            <CardDescription
                              className="text-sm"
                              dangerouslySetInnerHTML={{ __html: event.description }}
                            />
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="space-y-3">
                              {/* Significance */}
                              <div>
                                <h4 className="font-semibold text-xs text-gray-700 mb-1">Significance</h4>
                                <p
                                  className="text-xs text-gray-600"
                                  dangerouslySetInnerHTML={{ __html: event.significance }}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Desktop Layout - fixed positioning to prevent overlapping */}
                      <div className="hidden md:flex items-center w-full relative">
                        {/* Date badge - fixed width with proper spacing */}
                        <div className="flex-shrink-0 w-32 lg:w-40 text-right pr-4">
                          <span className={`bg-white border-2 border-${event.color}-400 text-${event.color}-700 font-bold px-2 lg:px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap inline-block`}>
                            {event.date}
                          </span>
                        </div>
                        
                        {/* Timeline dot - centered on the line */}
                        <div className="absolute left-[132px] lg:left-[162px] z-10">
                          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg bg-${event.color}-500`}></div>
                        </div>
                        
                        {/* Event card - positioned after dot with margin */}
                        <div className="flex-1 max-w-4xl ml-8 lg:ml-12">
                          <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="pb-3">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                  <CardTitle className="text-lg" dangerouslySetInnerHTML={{ __html: event.title }}></CardTitle>
                                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                    <Badge variant="secondary" className="text-xs">{event.period}</Badge>
                                  </div>
                                </div>
                              </div>
                              <CardDescription
                                className="text-sm"
                                dangerouslySetInnerHTML={{ __html: event.description }}
                              />
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="space-y-3">
                                {/* Significance */}
                                <div>
                                  <h4 className="font-semibold text-xs text-gray-700 mb-1">Significance</h4>
                                  <p
                                    className="text-xs text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: event.significance }}
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Subtopic Search & Sections */}
        {showSubtopics ? (
          <>
            <div className="mb-6 space-y-4">
              <input
                type="text"
                value={search}
                onChange={e => {
                  setSearch(e.target.value)
                  setSelectedTag(null)
                }}
                placeholder="Search sections or tags..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
              />
              {/* Tag filter buttons */}
              {allTags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {allTags.map(tag => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      size="sm"
                      className={`text-xs sm:text-sm ${selectedTag === tag ? "bg-blue-600 text-white" : ""}`}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {/* Timeline layout for branches, regular layout for others */}
            {category.id === "branches" ? (
              <div className="space-y-4">
                {/* Mobile layout for branches */}
                <div className="md:hidden space-y-4">
                  {filteredSubtopics
                    .toSorted((a, b) => {
                      const timelineA = branchTimeline.find(t => t.id === a.id);
                      const timelineB = branchTimeline.find(t => t.id === b.id);
                      if (!timelineA || !timelineB) return 0;
                      
                      // Extract year from date for sorting
                      const getYear = (date: string) => {
                        const regexResult = /(\d+)/.exec(date);
                        return regexResult ? parseInt(regexResult[1]) : 0;
                      };
                      
                      return getYear(timelineA.date) - getYear(timelineB.date);
                    })
                    .map(sub => {
                      const timelineData = branchTimeline.find(t => t.id === sub.id);
                      return (
                        <Card 
                          key={sub.id} 
                          className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                          onClick={() => toggleSubtopic(sub.id)}
                        >
                          <CardHeader className="flex flex-col">
                            <div className="mb-3">
                              <span className={`bg-white border-2 border-purple-400 text-purple-700 font-bold px-2 py-1 rounded-full shadow-md text-xs`}>
                                {timelineData?.date || 'Unknown'}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg text-purple-700 flex-1">{sub.title}</CardTitle>
                                <Button variant="ghost" size="sm" className="ml-2 pointer-events-none" tabIndex={-1}>
                                  {expandedSubtopics.has(sub.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </Button>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {sub.tags.map(tag => (
                                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                ))}
                              </div>
                              {/* Branch badges */}
                              {branchBeliefMap[sub.id] && (
                                <div className="mt-2">
                                  <BranchBadgeCluster branchId={sub.id} />
                                </div>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent 
                            data-subtopic-id={sub.id}
                            className={`text-gray-800 transition-all duration-300 ${
                              expandedSubtopics.has(sub.id) 
                                ? 'py-4 max-h-[50000px]' 
                                : 'max-h-0 py-0'
                            } overflow-hidden`}
                          >
                            <div
                              className="prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ __html: sub.content }}
                            />
                          </CardContent>
                        </Card>
                      );
                    })
                  }
                </div>

                {/* Desktop timeline layout - fixed positioning */}
                <div className="hidden md:block relative py-8">
                  {/* Timeline line - positioned to avoid date overlap */}
                  <div className="absolute left-[136px] lg:left-[166px] top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 z-0 rounded-full"></div>
                  
                  {/* Timeline events */}
                  <div className="flex flex-col gap-8">
                    {filteredSubtopics
                      .toSorted((a, b) => {
                        const timelineA = branchTimeline.find(t => t.id === a.id);
                        const timelineB = branchTimeline.find(t => t.id === b.id);
                        if (!timelineA || !timelineB) return 0;
                        
                        // Extract year from date for sorting
                        const getYear = (date: string) => {
                          const regexResult = /(\d+)/.exec(date);
                          return regexResult ? parseInt(regexResult[1]) : 0;
                        };
                        
                        return getYear(timelineA.date) - getYear(timelineB.date);
                      })
                      .map(sub => {
                        const timelineData = branchTimeline.find(t => t.id === sub.id);
                        return (
                          <div key={sub.id} className="relative flex items-start w-full">
                            {/* Date badge - fixed width with proper spacing */}
                            <div className="flex-shrink-0 w-32 lg:w-40 text-right pr-4">
                              <span className={`bg-white border-2 border-${timelineData?.color || 'purple'}-400 text-${timelineData?.color || 'purple'}-700 font-bold px-2 lg:px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap inline-block`}>
                                {timelineData?.date || 'Unknown'}
                              </span>
                            </div>
                            
                            {/* Timeline dot - centered on the line */}
                            <div className="absolute left-[132px] lg:left-[162px] z-10">
                              <div className="w-3 h-3 rounded-full border-2 border-white shadow-lg bg-black"></div>
                            </div>
                            
                            {/* Event card - positioned after dot with margin */}
                            <div className="flex-1 max-w-4xl ml-8 lg:ml-12">
                              <Card 
                                className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => toggleSubtopic(sub.id)}
                              >
                                <CardHeader className="flex flex-col">
                                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <CardTitle className="text-lg text-purple-700">{sub.title}</CardTitle>
                                    {/* Branch badges to the right of the title */}
                                    {branchBeliefMap[sub.id] && (
                                      <span className="hidden lg:inline"><BranchBadgeCluster branchId={sub.id} /></span>
                                    )}
                                    {sub.tags.map(tag => (
                                      <Badge key={tag} variant="outline" className="ml-1 text-xs">{tag}</Badge>
                                    ))}
                                    <Button variant="ghost" size="sm" className="ml-auto pointer-events-none" tabIndex={-1}>
                                      {expandedSubtopics.has(sub.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                    </Button>
                                  </div>
                                  {/* Show branch badges below title on medium screens */}
                                  {branchBeliefMap[sub.id] && (
                                    <div className="lg:hidden">
                                      <BranchBadgeCluster branchId={sub.id} />
                                    </div>
                                  )}
                                </CardHeader>
                                <CardContent 
                                  data-subtopic-id={sub.id}
                                  className={`text-gray-800 transition-all duration-300 ${
                                    expandedSubtopics.has(sub.id) 
                                      ? 'py-4 max-h-[50000px]' 
                                      : 'max-h-0 py-0'
                                  } overflow-hidden`}
                                >
                                  <div
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: sub.content }}
                                  />
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSubtopics.map(sub => (
                  <Card 
                    key={sub.id} 
                    className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => toggleSubtopic(sub.id)}
                  >
                    <CardHeader className="flex flex-col">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg text-purple-700 flex-1 leading-tight">{sub.title}</CardTitle>
                          <Button variant="ghost" size="sm" className="ml-2 flex-shrink-0 pointer-events-none" tabIndex={-1}>
                            {expandedSubtopics.has(sub.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {sub.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent 
                      data-subtopic-id={sub.id}
                      className={`text-gray-800 transition-all duration-300 ${
                        expandedSubtopics.has(sub.id) 
                          ? 'py-4 max-h-[50000px]' 
                          : 'max-h-0 py-0'
                      } overflow-hidden`}
                    >
                      <div
                        className="prose prose-sm sm:prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: sub.content }}
                      />
                    </CardContent>
                  </Card>
                ))}
                {filteredSubtopics.length === 0 && (
                  <div className="text-gray-500 text-center py-8">No matching sections found.</div>
                )}
              </div>
            )}
          </>
        ) : null}

        {/* Bible Verses - Only show if verses exist and are not empty */}
        {category.verses && category.verses.length > 0 && category.verses.some(verse => verse.trim() !== "") && (
          <Card className="mb-8 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Key Bible Verses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.verses.filter(verse => verse.trim() !== "").map((verse) => (
                  <BibleVerse key={verse} verse={verse} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-6 w-6 text-green-600" />
              Sources & Further Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.sources.filter(source => source.trim() !== "").map((source, index) => {
                // Extract URL from source text (format: "1. [Type] Description. URL")
                const urlRegex = /(https?:\/\/[^\s]+)/;
                const urlMatch = urlRegex.exec(source);
                const url = urlMatch ? urlMatch[1] : null;
                
                // Extract the descriptive part (everything before the URL)
                const description = url ? source.replace(url, '').trim() : source;
                
                return (
                  <li key={`source-${index}-${source.substring(0, 20)}`} className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {url ? (
                      <div className="flex flex-col">
                        <span className="text-gray-700 text-sm">{description}</span>
                        <Link 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline text-sm break-all"
                        >
                          {url}
                        </Link>
                      </div>
                    ) : (
                      <span className="text-gray-700 text-sm">{source}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/categories">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Topics
            </Link>
          </Button>
          <Button asChild>
            <Link href="/personal">Personal Journey</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}