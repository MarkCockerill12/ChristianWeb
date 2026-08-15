import Link from "next/link"
import Image from "next/image"
import { BookOpen, Clock, Heart, Search, TimerIcon as Timeline } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UpdatesFeed, type UpdateItem } from "./updates-feed"

const whatsNewItems: UpdateItem[] = [
  {
    id: 5,
    title: "Citation Rebuild & 9 New Topics",
    description:
      "Rebuilt citations across the entire site. Added 9 new topics: Baptism, Bible Books, Did God Change, End Times, Evolution, Free Will, Homosexuality, Lazarus, and Tree of Knowledge. Multiple UI components were also enhanced.",
    date: "15/08/2026",
    category: "Citations & Sources",
    link: "/categories",
  },
  {
    id: 4,
    title: "All Page expanded and sources updated",
    description:
      "Went through every page on the website to add content and fix broken sources. Every source should now be relevant and work.",
    date: "14/09/2025",
    category: "Update Sources",
    link: "/categories",
  },
  {
    id: 3,
    title: "14 New Topic Pages Added!",
    description:
      "Added: Archaeological Evidence, Biblical Canon (with timeline), Branches of Christianity (with timeline), Biblical Contradictions, Fine-Tuning, God & Evil, Hell, Jesus Historicity, Miracles, Morality, NASA & Space, Problem of Evil, Religions Comparison, Slavery (with timeline), Trinity, and Women in Christianity. Enhanced existing Prophecy and Resurrection pages with comprehensive research and sources.",
    date: "14/09/2025",
    category: "Major Expansion",
    link: "/categories",
  },
  {
    id: 2,
    title: "The second update",
    description:
      'Updated the "resurrection" page and added "religions" and "branches" pages to topics.',
    date: "09/08/2025",
    category: "Updates",
    link: "/categories",
  },
  {
    id: 1,
    title: "The first update",
    description:
      "Add everything to the website as a starting point. This will be the timeline, as well as any apologetic topics, personal testimony, and resource sections.",
    date: "25/07/2025",
    category: "Create",
  },
]

const bibleVerses = [
  {
    verse:
      "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes",
    reference: "Romans 1:16",
    greek: "οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον",
  },
  {
    verse:
      "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have",
    reference: "1 Peter 3:15",
    greek: "ἕτοιμοι ἀεὶ πρὸς ἀπολογίαν παντὶ τῷ αἰτοῦντι",
  },
  {
    verse: "In the beginning was the Word, and the Word was with God, and the Word was God",
    reference: "John 1:1",
    greek: "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν",
  },
]

const exploreCards = [
  {
    icon: Timeline,
    iconClass: "text-blue-600",
    title: "Biblical Timeline",
    description: "Journey through biblical history with archaeological evidence",
    href: "/timeline",
    cta: "Explore Timeline",
    buttonClass: "",
  },
  {
    icon: Search,
    iconClass: "text-green-600",
    title: "Apologetics Topics",
    description: "Comprehensive answers to common questions and objections",
    href: "/categories",
    cta: "Browse Topics",
    buttonClass: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Heart,
    iconClass: "text-red-600",
    title: "Personal Journey",
    description: "Why I believe: A personal testimony and reasoning",
    href: "/personal",
    cta: "My Story",
    buttonClass: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: BookOpen,
    iconClass: "text-purple-600",
    title: "Resources",
    description: "Books, articles, and scholarly references",
    href: "/resources",
    cta: "View Resources",
    buttonClass: "bg-purple-600 hover:bg-purple-700",
  },
]

export default function HomePage() {
  const sortedUpdates = [...whatsNewItems].sort((a, b) => b.id - a.id)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10 rounded-3xl mx-4 mt-4"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/cross.jpg"
              width={250}
              height={250}
              priority
              className="rounded-lg"
              alt="The Milky Way cross"
            />
          </div>
          <p className="text-gray-500 text-xs mb-6">
            Image from{" "}
            <a
              href="https://science.nasa.gov/asset/hubble/x-structure-at-core-of-whirlpool-galaxy-m51/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NASA
            </a>{" "}
            of the center of spiral galaxy M51
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cross <span className="text-blue-600">✝</span> Examination
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            A website containing evidence for Christianity, including a biblical timeline,
            apologetic topics and a personal account.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/categories">
                <Search className="mr-2 h-5 w-5" />
                Explore Topics
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline">
                <Timeline className="mr-2 h-5 w-5" />
                Biblical Timeline
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Clock className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What&apos;s New?</h2>
          </div>
          <UpdatesFeed items={sortedUpdates} />
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Scripture &amp; Truth</h2>
          </div>
          <div className="space-y-8">
            {bibleVerses.map((item) => (
              <Card key={item.reference} className="p-6 bg-white/80 backdrop-blur-sm">
                <blockquote className="text-lg md:text-xl text-gray-800 mb-4 italic">
                  &quot;{item.verse}&quot;
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <cite className="text-blue-600 font-semibold">- {item.reference}</cite>
                  <div className="text-sm text-gray-600 font-mono bg-gray-100 px-3 py-1 rounded">
                    {item.greek}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore the Evidence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map(({ icon: Icon, ...card }) => (
              <Card
                key={card.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <Icon className={`h-12 w-12 ${card.iconClass} mx-auto mb-4`} />
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className={`w-full ${card.buttonClass}`}>
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Seek Truth with an Open Heart</h2>
          <p className="text-xl mb-8 opacity-90">
            &quot;You will seek me and find me when you seek me with all your heart.&quot; - Jeremiah
            29:13
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/categories">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
