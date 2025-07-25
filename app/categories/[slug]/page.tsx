"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, ExternalLink, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { getTopicById } from "@/lib/getTopics"

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
            "{fullVerse}"
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
  const resolvedParams = use(params)
  const category = getTopicById(resolvedParams.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
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
            <CardTitle className="text-3xl md:text-4xl">{category.title}</CardTitle>
            <CardDescription className="text-lg">{category.description}</CardDescription>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <Calendar className="h-4 w-4" />
              Last updated: {category.lastUpdated}
            </div>
          </CardHeader>
        </Card>

        {/* Main Content */}
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

        {/* Bible Verses */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Key Bible Verses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {category.verses.map((verse) => (
                <BibleVerse key={verse} verse={verse} />
              ))}
            </div>
          </CardContent>
        </Card>

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
              {category.sources.filter(source => source.trim() !== "").map((source, index) => (
                <li key={`source-${index}-${source.substring(0, 20)}`} className="flex items-start gap-2">
                  <ExternalLink className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{source}</span>
                </li>
              ))}
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
