import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Clock, Code, Trophy, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <section className="py-8 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-slate-700 text-slate-400 hover:bg-slate-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">Rules & Guidelines</h1>
          <p className="text-lg text-slate-400 mt-2">
            Everything you need to know about participating in the Hostel Hackathon
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Eligibility */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Open to all Chennai students residing in hostels
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Teams must consist of exactly 3 members
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    All team members must be from the same university
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Cross-disciplinary teams are encouraged
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Timeline Rules */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Timeline & Deadlines</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">Ideation Phase - Up to January 10th, 2026</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Submit presentation slides (PPT/PDF) online</li>
                      <li>• Deadline: 7:00 PM sharp on January 10th</li>
                      <li>• Late submissions will not be accepted</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-orange-400 mb-2">Coding Day - January 11th, 2026</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Hackathon: 11:00 AM - 6:00 PM</li>
                      <li>• Code submission deadline: 6:00 PM</li>
                      <li>• Presentations & Results: 6:00 PM - 7:30 PM</li>
                      <li>• At least 1 team member must be present offline; others can participate online</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Rules */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Code className="h-5 w-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Technical Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Use any programming language, framework, or technology stack
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Open source libraries and APIs are allowed
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    AI tools and assistants are allowed and encouraged
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    Pre-written code is not allowed - start fresh during the hackathon
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Code must be submitted via GitHub repository
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    Include a comprehensive README with setup instructions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Judging Criteria */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Judging Criteria</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">Innovation (25%)</h4>
                    <p className="text-sm text-slate-300">Creativity and uniqueness of the solution</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-orange-400 mb-2">Technical Implementation (25%)</h4>
                    <p className="text-sm text-slate-300">Code quality, architecture, and functionality</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-purple-400 mb-2">Problem Solving (25%)</h4>
                    <p className="text-sm text-slate-300">How well the solution addresses hostel challenges</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-yellow-400 mb-2">Presentation (25%)</h4>
                    <p className="text-sm text-slate-300">Demo quality and team communication</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code of Conduct */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Code of Conduct</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    Respect all participants, organizers, and judges
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    No plagiarism or copying from existing solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    Follow university guidelines and maintain decorum
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    Violation of rules may result in disqualification
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
