"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Heart, Search, TimerIcon as Timeline } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const whatsNewItems = [
{
    id: 2,
    title: "The second update",
    description:
      'Updated the "resurrection" page and added "religions" and "branches" pages to topics.',
    date: "09/08/2025",
    category: "Updates",
    link: "/categories/historical-evidence",
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

import { useState } from "react"

export default function HomePage() {
  // Sort updates by id descending
  const sortedUpdates = [...whatsNewItems].sort((a, b) => b.id - a.id)
  const topThree = sortedUpdates.slice(0, 3)
  const rest = sortedUpdates.slice(3)
  const [showAll, setShowAll] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl mx-4 mt-4"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center ">
            <Image src={"/cross.jpg"} width={250} height={250} className="rounded-lg" alt="The milky way cross" />
          </div>
          <p className="text-gray-500 text-xs mb-6  ">Image from <a href="https://science.nasa.gov/asset/hubble/x-structure-at-core-of-whirlpool-galaxy-m51/" className="text-blue-600 hover:underline">NASA</a> of the center of spiral galaxy M51</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Faith &amp; <span className="text-blue-600">Reason</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A website containing evidence for Christianity, including a biblical timeline, apologetic topics and a personal account.
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

      {/* What's New Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Clock className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">What&apos;s New?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topThree.map((item) => {
              const CardComponent = (
                <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed min-h-fit">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
              
              return (
                <div key={item.id}>
                  {item.link ? (
                    <Link href={item.link} className="block">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  )}
                </div>
              );
            })}
            {/* Show the rest if toggled */}
            {showAll && rest.map((item) => {
              const CardComponent = (
                <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed min-h-fit">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
              
              return (
                <div key={item.id}>
                  {item.link ? (
                    <Link href={item.link} className="block">
                      {CardComponent}
                    </Link>
                  ) : (
                    CardComponent
                  )}
                </div>
              );
            })}
          </div>
          {/* Toggle button if there are more than 3 updates */}
          {rest.length > 0 && (
            <div className="flex justify-center mt-8">
              <Button onClick={() => setShowAll((v) => !v)} variant="outline">
                {showAll ? "Show Less" : `Show ${rest.length} More Updates`}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bible Verses Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Scripture & Truth</h2>
          </div>
          <div className="space-y-8">
            {bibleVerses.map((item) => (
              <Card key={item.reference} className="p-6 bg-white/80 backdrop-blur-sm">
                <blockquote className="text-lg md:text-xl text-gray-800 mb-4 italic">&quot;{item.verse}&quot;</blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <cite className="text-blue-600 font-semibold">— {item.reference}</cite>
                  <div className="text-sm text-gray-600 font-mono bg-gray-100 px-3 py-1 rounded">{item.greek}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore the Evidence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Timeline className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Biblical Timeline</CardTitle>
                <CardDescription>Journey through biblical history with archaeological evidence</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/timeline">Explore Timeline</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Apologetics Topics</CardTitle>
                <CardDescription>Comprehensive answers to common questions and objections</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/categories">Browse Topics</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Personal Journey</CardTitle>
                <CardDescription>Why I believe: A personal testimony and reasoning</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/personal">My Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Resources</CardTitle>
                <CardDescription>Books, articles, and scholarly references</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/resources">View Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Seek Truth with an Open Heart</h2>
          <p className="text-xl mb-8 opacity-90">
            &quot;You will seek me and find me when you seek me with all your heart.&quot; - Jeremiah 29:13
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/categories">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
