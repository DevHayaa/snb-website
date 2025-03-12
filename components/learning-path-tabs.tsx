"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Briefcase, BookOpen, Users, ClipboardCheck, Shield } from "lucide-react"

export default function LearningPathTabs() {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">("individuals")
  const [activeIndividualTab, setActiveIndividualTab] = useState<"self-paced" | "instructor-led" | "career-prep">(
    "self-paced",
  )
  const [activeBusinessTab, setActiveBusinessTab] = useState<"corporate" | "team" | "compliance">("corporate")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Individuals Section */}
      <div
        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${activeTab === "individuals" ? "ring-2 ring-blue-500 transform scale-105" : "opacity-90"}`}
      >
        <div
          className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 cursor-pointer"
          onClick={() => setActiveTab("individuals")}
        >
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold text-white">For Individuals</h3>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeIndividualTab === "self-paced" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveIndividualTab("self-paced")}
            >
              Self-Paced Study
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeIndividualTab === "instructor-led" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveIndividualTab("instructor-led")}
            >
              Instructor-Led
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeIndividualTab === "career-prep" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              onClick={() => setActiveIndividualTab("career-prep")}
            >
              Career Prep
            </button>
          </div>

          <div className="min-h-[300px]">
            {activeIndividualTab === "self-paced" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Learn at Your Own Pace</h4>
                    <p className="text-gray-600">
                      Access course materials 24/7 and progress through the curriculum on your schedule.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Interactive Assessments</h4>
                    <p className="text-gray-600">Test your knowledge with quizzes, assignments, and practice exams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Personalized Learning Path</h4>
                    <p className="text-gray-600">
                      Customize your learning experience based on your goals and interests.
                    </p>
                  </div>
                </div>
                <Link
                  href="/learning/self-paced"
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Explore Self-Paced Courses
                </Link>
              </div>
            )}

            {activeIndividualTab === "instructor-led" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Live Virtual Classes</h4>
                    <p className="text-gray-600">
                      Join interactive sessions led by industry experts and engage with peers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Direct Instructor Support</h4>
                    <p className="text-gray-600">
                      Get personalized feedback and guidance from experienced instructors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Structured Learning Schedule</h4>
                    <p className="text-gray-600">Follow a set timeline with deadlines to keep you on track.</p>
                  </div>
                </div>
                <Link
                  href="/learning/instructor-led"
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Instructor-Led Programs
                </Link>
              </div>
            )}

            {activeIndividualTab === "career-prep" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Career-Focused Curriculum</h4>
                    <p className="text-gray-600">
                      Learn skills that directly apply to roles in bidding and recruitment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Resume Building</h4>
                    <p className="text-gray-600">
                      Get guidance on showcasing your certifications and skills to employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Interview Preparation</h4>
                    <p className="text-gray-600">
                      Practice with mock interviews and get feedback to improve your performance.
                    </p>
                  </div>
                </div>
                <Link
                  href="/learning/career-prep"
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Explore Career Resources
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Businesses Section */}
      <div
        className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${activeTab === "businesses" ? "ring-2 ring-blue-500 transform scale-105" : "opacity-90"}`}
      >
        <div
          className="bg-gradient-to-r from-teal-700 to-teal-900 p-6 cursor-pointer"
          onClick={() => setActiveTab("businesses")}
        >
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold text-white">For Businesses</h3>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeBusinessTab === "corporate" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600 hover:text-teal-600"}`}
              onClick={() => setActiveBusinessTab("corporate")}
            >
              Corporate Training
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeBusinessTab === "team" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600 hover:text-teal-600"}`}
              onClick={() => setActiveBusinessTab("team")}
            >
              Team Certification
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeBusinessTab === "compliance" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600 hover:text-teal-600"}`}
              onClick={() => setActiveBusinessTab("compliance")}
            >
              Compliance
            </button>
          </div>

          <div className="min-h-[300px]">
            {activeBusinessTab === "corporate" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Customized Learning Programs</h4>
                    <p className="text-gray-600">
                      Training solutions tailored to your organization's specific needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Scalable Solutions</h4>
                    <p className="text-gray-600">
                      Programs designed to accommodate teams of all sizes across multiple locations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Progress Tracking</h4>
                    <p className="text-gray-600">Comprehensive reporting and analytics to monitor team performance.</p>
                  </div>
                </div>
                <Link
                  href="/learning/businesses/corporate"
                  className="mt-4 inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  Explore Corporate Training
                </Link>
              </div>
            )}

            {activeBusinessTab === "team" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Group Certification Packages</h4>
                    <p className="text-gray-600">Cost-effective solutions for certifying multiple team members.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Cohort-Based Learning</h4>
                    <p className="text-gray-600">
                      Teams progress through the program together, fostering collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Team Assessment</h4>
                    <p className="text-gray-600">Evaluate skill gaps and track improvement across your organization.</p>
                  </div>
                </div>
                <Link
                  href="/learning/businesses/team"
                  className="mt-4 inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  View Team Certification Options
                </Link>
              </div>
            )}

            {activeBusinessTab === "compliance" && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Standards Compliance</h4>
                    <p className="text-gray-600">Ensure your team follows best practices and industry regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Compliance Reporting</h4>
                    <p className="text-gray-600">Generate reports to demonstrate compliance with industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Regular Updates</h4>
                    <p className="text-gray-600">Stay current with changing regulations and industry requirements.</p>
                  </div>
                </div>
                <Link
                  href="/learning/businesses/compliance"
                  className="mt-4 inline-block px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
                >
                  Learn About Compliance Solutions
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

