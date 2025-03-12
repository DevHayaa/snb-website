"use client"

import { useState } from "react"
import Link from "next/link"
import { Award, BookOpen, Video, FileText, Users, Briefcase } from "lucide-react"

type ProgramCategory = "certifications" | "courses" | "careers"

export default function ProgramShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>("certifications")

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveCategory("certifications")}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeCategory === "certifications"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Certifications
          </span>
        </button>
        <button
          onClick={() => setActiveCategory("courses")}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeCategory === "courses" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Types
          </span>
        </button>
        <button
          onClick={() => setActiveCategory("careers")}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeCategory === "careers" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Career Outcomes
          </span>
        </button>
      </div>

      {activeCategory === "certifications" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="bg-blue-600 h-2"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CSBA</h3>
              <p className="text-gray-600 mb-4">Certificate in Staffing & Bidding Associates</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Entry-level certification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  No prerequisites
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Foundation for all paths
                </li>
              </ul>
              <Link href="/certifications/csba" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="bg-teal-600 h-2"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CBMP</h3>
              <p className="text-gray-600 mb-4">Certificate in Bid & Management Professional</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Intermediate certification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Requires CSBA
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Focus on bid management
                </li>
              </ul>
              <Link href="/certifications/cbmp" className="text-teal-600 font-medium hover:text-teal-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="bg-purple-600 h-2"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CSMP</h3>
              <p className="text-gray-600 mb-4">Certified Staffing Management Professional</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Intermediate certification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Requires CSBA
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Focus on staffing management
                </li>
              </ul>
              <Link href="/certifications/csmp" className="text-purple-600 font-medium hover:text-purple-700">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="bg-yellow-500 h-2"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CSBL</h3>
              <p className="text-gray-600 mb-4">Certified Staffing and Bidding Leader</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                  Advanced certification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                  Requires CSBA + experience
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                  Leadership focus
                </li>
              </ul>
              <Link href="/certifications/csbl" className="text-yellow-600 font-medium hover:text-yellow-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeCategory === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Lessons</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive video tutorials taught by industry experts covering all certification topics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  24/7 on-demand access
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Closed captioning
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Downloadable resources
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mock Exams</h3>
              <p className="text-gray-600 mb-4">
                Practice tests designed to simulate the actual certification exam experience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Timed assessments
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Detailed explanations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  Performance analytics
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-600 mb-4">
                Interactive live sessions focused on practical skills and real-world applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Small group format
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Hands-on exercises
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Networking opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeCategory === "careers" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bidding Specialists</h3>
              <p className="text-gray-600 mb-4">
                Professionals who prepare and manage competitive bids for contracts and projects.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900">Potential Roles:</h4>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Proposal Writer
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Bid Manager
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Business Development Manager
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Salary Range:</h4>
                  <p className="text-sm text-gray-600 mt-1">$60,000 - $120,000+</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Recommended Certifications:</h4>
                  <p className="text-sm text-gray-600 mt-1">CSBA, CBMP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recruitment Professionals</h3>
              <p className="text-gray-600 mb-4">
                Experts in sourcing, evaluating, and placing talent for organizations.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900">Potential Roles:</h4>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Recruiter
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Talent Acquisition Specialist
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      Staffing Manager
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Salary Range:</h4>
                  <p className="text-sm text-gray-600 mt-1">$55,000 - $110,000+</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Recommended Certifications:</h4>
                  <p className="text-sm text-gray-600 mt-1">CSBA, CSMP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Positions</h3>
              <p className="text-gray-600 mb-4">Senior roles overseeing bidding and recruitment operations.</p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900">Potential Roles:</h4>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      Director of Consulting
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      VP of Business Development
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                      Chief Operating Officer
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Salary Range:</h4>
                  <p className="text-sm text-gray-600 mt-1">$100,000 - $200,000+</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Recommended Certifications:</h4>
                  <p className="text-sm text-gray-600 mt-1">CSBA, CSBL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consulting Roles</h3>
              <p className="text-gray-600 mb-4">
                Advisory positions helping organizations optimize their bidding and recruitment processes.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-gray-900">Potential Roles:</h4>
                  <ul className="space-y-1 mt-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Bid Strategy Consultant
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Talent Acquisition Consultant
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Process Improvement Specialist
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Salary Range:</h4>
                  <p className="text-sm text-gray-600 mt-1">$80,000 - $150,000+</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Recommended Certifications:</h4>
                  <p className="text-sm text-gray-600 mt-1">CSBA, CBMP, CSMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

