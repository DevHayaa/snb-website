"use client"

import Link from "next/link"
import { Award, BookOpen, Calendar, CheckCircle, Clock, Download, ExternalLink, FileText } from "lucide-react"

export default function CertificationsPage() {
  // Mock certification data
  const certifications = [
    {
      id: "csba",
      name: "CSBA",
      fullName: "Certified in Staffing & Bidding Associate",
      status: "In Progress",
      progress: 25,
      startDate: "June 15, 2023",
      estimatedCompletion: "September 15, 2023",
      nextMilestone: "Complete Module 3: Proposal Writing Basics",
    },
    {
      id: "cbmp",
      name: "CBMP",
      fullName: "Certified in Bid & Management Professional",
      status: "Not Started",
      progress: 0,
      startDate: "Not Started",
      estimatedCompletion: "N/A",
      nextMilestone: "Enroll in certification program",
      prerequisites: ["CSBA Certification"],
    },
    {
      id: "csmp",
      name: "CSMP",
      fullName: "Certified Staffing Management Professional",
      status: "Not Started",
      progress: 0,
      startDate: "Not Started",
      estimatedCompletion: "N/A",
      nextMilestone: "Enroll in certification program",
      prerequisites: ["CSBA Certification"],
    },
  ]

  // Mock certification resources
  const certificationResources = [
    {
      id: 1,
      title: "CSBA Study Guide",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "CSBA Practice Exam",
      type: "Interactive",
      size: "Online",
    },
    {
      id: 3,
      title: "Bidding Terminology Glossary",
      type: "PDF",
      size: "1.1 MB",
    },
  ]

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Certifications</h1>
        <p className="text-gray-600">Track your certification progress and access related resources</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Certification */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#39a3b1] px-6 py-4 text-white">
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-bold">Active Certification</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{certifications[0].name}</h3>
                  <p className="text-gray-600">{certifications[0].fullName}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {certifications[0].status}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress</span>
                  <span>{certifications[0].progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#39a3b1] h-2.5 rounded-full"
                    style={{ width: `${certifications[0].progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Start Date</p>
                    <p className="text-sm text-gray-600">{certifications[0].startDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Estimated Completion</p>
                    <p className="text-sm text-gray-600">{certifications[0].estimatedCompletion}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700">Next Milestone</h4>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">{certifications[0].nextMilestone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <Link
                    href="/dashboard/learning/csba"
                    className="inline-flex items-center text-sm font-medium text-[#39a3b1] hover:text-[#2d8a96]"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Link>
                  <Link
                    href="/dashboard/certifications/csba"
                    className="inline-flex items-center text-sm font-medium text-[#39a3b1] hover:text-[#2d8a96]"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other Certifications */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Other Certifications</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {certifications.slice(1).map((cert) => (
                <div key={cert.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-gray-600">{cert.fullName}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {cert.status}
                    </span>
                  </div>

                  {cert.prerequisites && cert.prerequisites.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700">Prerequisites</h4>
                      <ul className="mt-2 space-y-1">
                        {cert.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-gray-400 mr-2" />
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Next Step</h4>
                    <p className="mt-1 text-sm text-gray-600">{cert.nextMilestone}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href={`/certifications/${cert.id}`}
                      className="inline-flex items-center text-sm font-medium text-[#39a3b1] hover:text-[#2d8a96]"
                    >
                      Learn more about {cert.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Certification Resources */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Certification Resources</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {certificationResources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{resource.title}</p>
                        <p className="text-xs text-gray-500">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <button className="text-[#39a3b1] hover:text-[#2d8a96]">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/dashboard/resources" className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium">
                  View all resources
                </Link>
              </div>
            </div>
          </div>

          {/* Certification Benefits */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Certification Benefits</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3" />
                  <span className="text-gray-600">Industry-recognized credentials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3" />
                  <span className="text-gray-600">Enhanced career opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3" />
                  <span className="text-gray-600">Access to exclusive resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3" />
                  <span className="text-gray-600">Professional network opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3" />
                  <span className="text-gray-600">Increased earning potential</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

