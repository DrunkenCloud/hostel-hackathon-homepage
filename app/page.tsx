"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Users, Code, Trophy, Clock, MapPin, Lightbulb, Utensils, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950/30 via-slate-950 to-orange-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-sm font-medium">
              January 31 - February 1, 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              SNUC Hostel Hacks
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 text-pretty">Shiv Nadar University Chennai</p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto text-pretty">
              Transform hostel life with innovative automation solutions. Build the future of campus living through
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() => window.open("https://bit.ly/hostel-hacks", "_blank")}
              >
                Register Your Team Now
              </Button>
              <Link href="/rules">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent w-full"
                >
                  View Rules & Guidelines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-slate-100">Event Timeline</h2>
            <p className="text-lg text-slate-400 text-pretty">Two days of innovation, coding, and competition</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden border-l-4 border-l-cyan-500 bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                    Day 1
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-100">Ideation Phase</CardTitle>
                <CardDescription className="text-base text-slate-400">Up to January 31st, 2026 (Saturday)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Submit your innovative ideas through online presentation submissions.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Submissions close at 6:00 PM on January 31st</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Shortlisting results at 9:00 PM on January 31st</span>
                </div>
                <Link href="/ideation">
                  <Button
                    size="sm"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white w-full"
                  >
                    View Ideation Instructions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-orange-500 bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Code className="h-5 w-5 text-orange-400" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                    Day 2
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-100">Coding Day</CardTitle>
                <CardDescription className="text-base text-slate-400">February 1st, 2026 (Sunday)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">Bring your ideas to life. At least 1 team member must be present offline; others can participate online.</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>Hackathon: 9:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-slate-100">Team Requirements</h2>
            <p className="text-lg text-slate-400 text-pretty">
              Form your dream team and tackle hostel automation challenges
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-cyan-950/30 to-orange-950/20 border-cyan-500/20 bg-slate-900">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-cyan-500/10 rounded-full">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">3 Members Per Team</h3>
              <p className="text-lg text-slate-400 mb-6 text-pretty">
                Collaborate with fellow Shiv Nadar University Chennai hostel students to create innovative solutions
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Developer</h4>
                  <p className="text-sm text-slate-400">Backend & Frontend</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Designer</h4>
                  <p className="text-sm text-slate-400">UI/UX & Graphics</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Strategist</h4>
                  <p className="text-sm text-slate-400">Planning & Presentation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Themes */}
      <section className="py-16 bg-slate-900/50" id="problems">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-slate-100">Problem Themes</h2>
            <p className="text-lg text-slate-400 text-pretty">Focus areas for hostel automation and improvement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-cyan-500/50 cursor-pointer bg-slate-900 border-slate-800">
                  <CardHeader>
                    <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-3 group-hover:bg-cyan-500/20 transition-colors">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Room Allocator System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">
                      Smart room allocation based on preferences, compatibility, and availability.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-cyan-600 group-hover:text-white transition-colors bg-transparent border-cyan-500 text-cyan-400"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-cyan-400 text-xl">Room Allocator System</DialogTitle>
                  <DialogDescription className="text-slate-300 text-base">
                    Build an intelligent room allocation system that matches students based on compatibility and
                    preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-slate-300">
                  <p className="text-base">
                    <strong>Key Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Compatibility matching algorithm based on lifestyle preferences</li>
                    <li>Room preference selection with virtual tours</li>
                    <li>Automated room change request processing</li>
                    <li>Conflict resolution and mediation tools</li>
                    <li>Integration with academic department data</li>
                    <li>Real-time room availability tracking</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-orange-500/50 cursor-pointer bg-slate-900 border-slate-800">
                  <CardHeader>
                    <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-3 group-hover:bg-orange-500/20 transition-colors">
                      <Utensils className="h-6 w-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Mess Leave Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">
                      Automate mess leave applications and meal planning for better resource management.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-orange-600 group-hover:text-white transition-colors bg-transparent border-orange-500 text-orange-400"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-orange-400 text-xl">Mess Leave Automation</DialogTitle>
                  <DialogDescription className="text-slate-300 text-base">
                    Develop an intelligent system to manage mess leaves and optimize food preparation based on
                    attendance predictions.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-slate-300">
                  <p className="text-base">
                    <strong>Key Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Easy leave application with calendar integration</li>
                    <li>Automatic refund calculations for missed meals</li>
                    <li>Predictive analytics for food quantity planning</li>
                    <li>Integration with hostel fee management system</li>
                    <li>Bulk leave applications for holidays/events</li>
                    <li>Real-time mess attendance tracking</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-green-500/50 cursor-pointer bg-slate-900 border-slate-800">
                  <CardHeader>
                    <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-3 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-100">Hostel Internal Chat App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">
                      A dedicated communication platform for hostel residents to connect and collaborate.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-green-600 group-hover:text-white transition-colors bg-transparent border-green-500 text-green-400"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-slate-100 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-green-400 text-xl">Hostel Internal Chat App</DialogTitle>
                  <DialogDescription className="text-slate-300 text-base">
                    Create a secure and feature-rich communication platform specifically designed for hostel residents.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-slate-300">
                  <p className="text-base">
                    <strong>Key Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Floor-wise and block-wise group chats</li>
                    <li>Anonymous feedback and suggestion channels</li>
                    <li>Event announcements and reminders</li>
                    <li>Lost and found marketplace</li>
                    <li>Study group formation and collaboration tools</li>
                    <li>Emergency broadcast system for urgent notifications</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>

            <Card className="md:col-span-2 lg:col-span-3 p-8 text-center bg-gradient-to-br from-purple-950/30 to-pink-950/20 border-purple-500/20 bg-slate-900">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-500/10 rounded-full">
                  <Lightbulb className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Have Your Own Idea?</h3>
              <p className="text-lg text-slate-400 mb-6 max-w-3xl mx-auto text-pretty">
                Participants can propose their own innovative solutions to problems they have personally faced in hostel
                life. Think beyond the suggested themes and create something that addresses real pain points you've
                experienced.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Identify</h4>
                  <p className="text-sm text-slate-400">Real problems you've faced</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Innovate</h4>
                  <p className="text-sm text-slate-400">Create unique solutions</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-100">Impact</h4>
                  <p className="text-sm text-slate-400">Make hostel life better</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-slate-100">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-400 text-pretty">Common questions about the SNUC Hostel Hacks</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-slate-100">I am a non CS student, can I join?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  The hackathon is open to students from all disciplines. We encourage diverse teams with different
                  academic backgrounds as they often bring unique perspectives to problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-slate-100">
                  I have no development experience, can I still participate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Yes! While coding experience is helpful, teams need diverse skills including design, strategy,
                  presentation, and domain knowledge. You can contribute through UI/UX design, business planning, user
                  research, or presentation skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-slate-100">Can we use AI tools during the hackathon?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Yes! AI tools and assistants are allowed and encouraged. Feel free to use ChatGPT, GitHub Copilot, or any other AI tools to help you build your solution faster and more efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg text-slate-100">Do I need to bring my own laptop?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Yes, please bring your own laptop with necessary software installed. We'll provide power outlets,
                  internet connectivity, and workspace, but personal devices are required for development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Transform Hostel Life?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join the SNUC Hostel Hacks and be part of the innovation that shapes the future of campus living.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-slate-900 hover:bg-white/90"
            onClick={() => window.open("https://bit.ly/hostel-hacks", "_blank")}
          >
            Register Your Team Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-slate-100">SNUC Hostel Hacks</h3>
              <p className="text-slate-400 text-sm">
                Shiv Nadar University Chennai's premier hackathon focused on hostel automation and campus innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-100">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#problems" className="hover:text-cyan-400 transition-colors">
                    Problem Statements
                  </a>
                </li>
                <li>
                  <Link href="/rules" className="hover:text-cyan-400 transition-colors">
                    Rules & Guidelines
                  </Link>
                </li>
                <li>
                  <a href="#faq" className="hover:text-cyan-400 transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-100">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hostelhacks@snuchennai.edu.in</li>
                <li>Shiv Nadar University Chennai</li>
                <li>Chennai, TN</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
