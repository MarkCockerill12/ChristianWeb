import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Users, Lightbulb, Target } from "lucide-react"

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why I Believe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My account and reasoning for choosing Christianity.
          </p>
        </div>

        {/* Personal Story */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              My Journey to Faith
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              To start, I have always been a christian, always gone to church and always believed in God and the bible, so my personal story isn&apos;t one with a huge turn around and lots of drama but nontheless, a path is not any less of a path if there are less obstacles in the way.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Growing up as a christian meant that i grew up taking a lot of things for granted, a strong tightly-knit family, defined morals and a respect for God. And this was something i didnt think too much about until my teenage years.
              I attended a christian concert event with my youth group, and at one point during this they asked us to stand up (in front of the hundreds of people there) if we hadn&apos;t declared our faith in Jesus yet and we would go to a seperate room where someone would pray for us. 
              This was the first concious decision I made to choose him on my own, and since then I dedicated more critical thinking to my religion, asking lots of questions and learning as much as possible. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am grateful for my upbringing, I consider myself to be the luckiest and most fortunate person on the plant. I never had to face the problems in the household that so many of my friends had and it has given me a the chance to become well educated. 
              I have seen and heard many stories of other people coming to faith from difficult backgrounds, single parent households, drug and alcohol abuse and crime. And i have watched Jesus make real change to these people in real time. 
              However, even in the face of all my personal experiences, I believe that Christianity is the rationally best choice, and studying it leads to convicing that it is the truth. Whatever i reserach, i am determined to find the truth, whether it means i am right or wrong in my points.
              I believe that the truth is objectively good. So here is my case for why Christianity is correct:
            </p>
          </CardContent>
        </Card>

        {/* Key Reasons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-500" />
                Historical Evidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Early dating of New Testament manuscripts</li>
                <li>• Multiple independent sources for Jesus&apos; existence</li>
                <li>• Historical evidence for the resurrection</li>
                <li>• Rapid spread of Christianity despite persecution</li>
                <li>• 66,779 cross references between 66 books written by 40 different authors over 1500 years on 3 different continents</li>
                <li>• Fulfilled prophecies about Jesus and the Old Testament</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
                Philosophical Arguments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• The cosmological argument (first cause)</li>
                <li>• Fine-tuning of the universe for life</li>
                <li>• The argument for objective morality</li>
                <li>• The problem of evil addressed</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-green-500" />
                Personal Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Answered prayers</li>
                <li>• Peace, purpose and comfort found in relationship with God</li>
                <li>• Community and love within the church</li>
                <li>• Sense of forgiveness and redemption</li>
                <li>• Noticeable difference between those who have been saved and those who haven&apos;t</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-500" />
                Archaelogical Evidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Nasa confirming an eclipse on both the day of Jesus death as well as the day in the old testament where the &quot;sun stood still&quot; for a day.</li>
                <li>• Confirmed findings of Sodom and Gomorrah as well as sulfur deposits in the area.</li>
                <li>• Places like Shiloh, Jericho, and Capernaum being found from Biblical accounts.</li>
                <li>• Dead Sea Scrolls found</li>
                <li>• Locations of worship found proving that Jesus was declared as God in early Christianity.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* The Turning Point */}
        <Card className="mb-8">
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-800 italic">
                &quot;For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the
                future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to
                separate us from the love of God that is in Christ Jesus our Lord.&quot; - Romans 8:38-39
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Addressing Doubts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Addressing My Own Doubts</CardTitle>
            <CardDescription>
              Faith doesn&apos;t mean believing blindly, it means trusting based on what we know.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">&quot;What about other religions?&quot;</h4>
                <p className="text-gray-700 text-sm">
                  I have studied other religions, both abrahamic and non. And I have found them left wanting. They fail to meet satisfying criteria, either for seeming rationally feasible, explaining the world and circumstances, or having any evidence to back them up.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">&quot;What about suffering and evil?&quot;</h4>
                <p className="text-gray-700 text-sm">
                  The world is undoubtedly full of evil and suffering. But that itself is evidence we do not live in a universe of just matter and energy, where it is the survival of the fittest. We recognise unfairness. And i believe that death is not the end, especially not for those who have suffered unfairly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">&quot;What about science?&quot;</h4>
                <p className="text-gray-700 text-sm">
                  Exactly. What ABOUT science? We wouldn&apos;t have the vast majority of modern science if it wasnt for christians, who believed God made the world with rules in place. If there was no intelligence behind the universe, then we couldnt possibly expect it to be comprehensible. Yet as even Einstein said &quot;The most incomprehensible thing about the universe is that it is comprehensible.&quot; Science doesn&apos;t contradict Christianity, but it is simply how God&apos;s creation operates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Perspective */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Where I Stand Today</h3>
            <p className="text-center opacity-90 mb-6">
              On the ground, usually wearing shoes. The same can be said with my faith in christianity, my feet are firmly grounded in what I know to be real, and what keeps me anchored to reality. I continue to dedicate myself to learning more, and I don&apos;t shy away from the difficult converastions or objections.
            </p>
            <div className="text-center">
              <Badge variant="secondary" className="text-blue-600">
                &quot;I believe; help my unbelief!&quot; - Mark 9:24
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
