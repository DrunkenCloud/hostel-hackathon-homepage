"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Download, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function IdeationPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">Ideation Phase Instructions</h1>
          <p className="text-lg text-slate-400 mt-2">
            How to prepare and submit your innovative idea for the Hostel Hackathon
          </p>
        </div>
      </section>

      {/* Instructions Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Overview */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <FileText className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">What to Submit</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  You need to submit a presentation (PPT/PDF) that clearly explains your idea for solving a hostel-related problem. 
                  Your presentation should be concise, well-structured, and demonstrate the potential impact of your solution.
                </p>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-cyan-400 mb-2">Submission Deadline</h4>
                  <p className="text-slate-300">January 10th, 2026 at 7:00 PM sharp</p>
                  <p className="text-sm text-slate-400 mt-2">Late submissions will not be accepted</p>
                </div>
              </CardContent>
            </Card>

            {/* Presentation Structure */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Presentation Structure</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 mb-4">
                  Your presentation should include the following sections:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">1. Problem Statement (1-2 slides)</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• What problem are you solving?</li>
                      <li>• Why is this problem important?</li>
                      <li>• Who does it affect?</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-orange-400 mb-2">2. Proposed Solution (2-3 slides)</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• What is your solution?</li>
                      <li>• How does it work?</li>
                      <li>• What makes it innovative?</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-purple-400 mb-2">3. Key Features (1-2 slides)</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• List the main features of your solution</li>
                      <li>• Explain how each feature addresses the problem</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-yellow-400 mb-2">4. Impact & Benefits (1 slide)</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• How will this improve hostel life?</li>
                      <li>• What are the expected benefits?</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-green-400 mb-2">5. Team Introduction (1 slide)</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• Team name and members</li>
                      <li>• Brief background of each member</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-cyan-950/30 rounded-lg border border-cyan-500/20">
                  <p className="text-sm text-slate-300">
                    <strong className="text-cyan-400">Recommended:</strong> Keep your presentation between 6-10 slides. 
                    Focus on clarity and impact rather than length.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Tips for a Great Presentation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use clear, readable fonts and avoid cluttered slides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Include visuals, diagrams, or mockups to illustrate your idea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Be specific about how your solution works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Show that you understand the problem from personal experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Highlight what makes your solution unique or better than existing alternatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sample & Submission */}
            <Card className="bg-gradient-to-br from-cyan-950/30 to-orange-950/20 border-cyan-500/20 bg-slate-900">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Download className="h-5 w-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Sample Presentation & Submission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-100 mb-3">Download Sample Presentation</h4>
                  <p className="text-slate-300 mb-4">
                    Check out our sample presentation to understand the format and structure we're looking for.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    onClick={() => window.open("https://placeholder-sample-ppt-link.com", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Sample PPT
                  </Button>
                </div>
                
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="font-semibold text-slate-100 mb-3">Submit Your Presentation</h4>
                  <p className="text-slate-300 mb-4">
                    Once your presentation is ready, submit it through our Google Form. Make sure to submit before the deadline!
                  </p>
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white"
                    onClick={() => window.open("https://forms.google.com/placeholder", "_blank")}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Your Idea
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="bg-slate-900 border-slate-800 border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-100">Important Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Only one submission per team is allowed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Ensure all team member names are included in the presentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>File format must be PPT or PDF (max size: 10MB)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Late submissions will not be accepted under any circumstances</span>
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
