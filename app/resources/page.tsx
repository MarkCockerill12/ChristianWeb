import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Video, Headphones, GraduationCap } from "lucide-react"
import Link from "next/link"

const resources = {
  books: [
    {
      title: "Mere Christianity",
      author: "C.S. Lewis",
      description: "A classic defense of the Christian faith, originally delivered as radio talks during WWII.",
      category: "Apologetics",
    },
    {
      title: "The Case for Christ",
      author: "Lee Strobel",
      description: "A journalist's investigation into the evidence for Jesus Christ.",
      category: "Historical Evidence",
    },
    {
      title: "Reasonable Faith",
      author: "William Lane Craig",
      description: "Philosophical arguments for Christian theism and the truth of Christianity.",
      category: "Philosophy",
    },
    {
      title: "The Reason for God",
      author: "Timothy Keller",
      description: "Addressing doubts and questions about Christianity in a postmodern context.",
      category: "Apologetics",
    },
    {
      title: "Cold-Case Christianity",
      author: "J. Warner Wallace",
      description: "A detective applies investigative techniques to examine the claims of the Gospels.",
      category: "Historical Evidence",
    },
    {
      title: "The Historical Reliability of the Gospels",
      author: "Craig Blomberg",
      description: "Scholarly examination of the historical credibility of the Gospel accounts.",
      category: "Biblical Scholarship",
    },
    {
      title: "God's Not Dead",
      author: "Rice Broocks",
      description: "Evidence for God in an age of uncertainty, addressing modern objections to faith.",
      category: "Apologetics",
    },
    {
      title: "The Problem of Pain",
      author: "C.S. Lewis",
      description: "A thoughtful exploration of why God allows suffering in the world.",
      category: "Theodicy",
    },
  ],
  websites: [
    {
      title: "Reasonable Faith",
      url: "https://www.reasonablefaith.org",
      description: "William Lane Craig's ministry featuring articles, debates, and resources on Christian apologetics.",
      category: "Apologetics",
    },
    {
      title: "Stand to Reason",
      url: "https://www.str.org",
      description: "Greg Koukl's ministry providing training in apologetics and critical thinking.",
      category: "Training",
    },
    {
      title: "Cold Case Christianity",
      url: "https://coldcasechristianity.com",
      description: "J. Warner Wallace's site applying detective work to Christian truth claims.",
      category: "Evidence",
    },
    {
      title: "Bible.org",
      url: "https://bible.org",
      description: "Comprehensive biblical resources, commentaries, and scholarly articles.",
      category: "Biblical Studies",
    },
    {
      title: "Christian Apologetics Alliance",
      url: "https://christianapologeticsalliance.com",
      description: "Community of apologists sharing resources and engaging in discussions.",
      category: "Community",
    },
  ],
  videos: [
    {
      title: "The Case for Christ Movie",
      creator: "Pure Flix",
      description: "Film adaptation of Lee Strobel's investigative journey to faith.",
      category: "Documentary",
      platform: "Various",
    },
    {
      title: "William Lane Craig Debates",
      creator: "Various Universities",
      description: "Academic debates on God's existence and Christian truth claims.",
      category: "Debates",
      platform: "YouTube",
    },
    {
      title: "The Bible Project",
      creator: "Tim Mackie & Jon Collins",
      description: "Animated videos explaining biblical themes and books.",
      category: "Biblical Education",
      platform: "YouTube",
    },
    {
      title: "Cross Examined",
      creator: "Frank Turek",
      description: "Apologetics presentations addressing common objections to Christianity.",
      category: "Apologetics",
      platform: "YouTube",
    },
  ],
  podcasts: [
    {
      title: "Reasonable Faith Podcast",
      host: "William Lane Craig",
      description: "Weekly discussions on apologetics, theology, and philosophy.",
      category: "Apologetics",
    },
    {
      title: "Stand to Reason Podcast",
      host: "Greg Koukl",
      description: "Call-in show addressing questions about Christianity and apologetics.",
      category: "Q&A",
    },
    {
      title: "Cold Case Christianity Podcast",
      host: "J. Warner Wallace",
      description: "Investigating Christianity using detective principles.",
      category: "Evidence",
    },
    {
      title: "Unbelievable?",
      host: "Justin Brierley",
      description: "Conversations between Christians and skeptics on faith and doubt.",
      category: "Dialogue",
    },
  ],
}



export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & References</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Books, websites, videos, and podcasts to help teach you about Christian
            apologetics and biblical truth.
          </p>
        </div>

        {/* Books Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Essential Books</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.books.map((book) => (
              <Card key={book.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{book.category}</Badge>
                    <Badge className="secondary">
                      "Resource"
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">by {book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Websites Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Helpful Websites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.websites.map((site) => (
              <Card key={site.url} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{site.category}</Badge>
                    <Button asChild size="sm" variant="outline">
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-lg">{site.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{site.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Video className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Video Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.videos.map((video) => (
              <Card key={video.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{video.category}</Badge>
                    <Badge variant="outline">{video.platform}</Badge>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">by {video.creator}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Podcasts Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Headphones className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Podcasts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.podcasts.map((podcast) => (
              <Card key={podcast.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{podcast.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{podcast.title}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">hosted by {podcast.host}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{podcast.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Resources */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Academic Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Journal Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Philosophia Christi</li>
                  <li>• Journal of the Evangelical Theological Society</li>
                  <li>• Faith and Philosophy</li>
                  <li>• Religious Studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Universities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Biola University</li>
                  <li>• Trinity Evangelical Divinity School</li>
                  <li>• Westminster Theological Seminary</li>
                  <li>• Dallas Theological Seminary</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Discovery Institute</li>
                  <li>• Reasons to Believe</li>
                  <li>• Institute for Creation Research</li>
                  <li>• Answers in Genesis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Continue Your Journey</h3>
            <p className="mb-6 opacity-90">
              These resources are just the beginning. The pursuit of truth is a lifelong journey that requires both
              intellectual rigor and spiritual openness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/categories">Explore Topics</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/timeline">Biblical Timeline</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

