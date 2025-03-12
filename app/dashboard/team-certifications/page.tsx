"use client"

import { useState } from "react"
import { Award, ChevronRight, Download, FileText, Plus, Search, Users } from "lucide-react"
import Link from "next/link"

export default function TeamCertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock certification programs
  const certificationPrograms = [
    {
      id: "csba",
      name: "CSBA",
      fullName: "Certified in Staffing & Bidding Associate",
      description: "Foundation level certification for staffing and bidding professionals.",
      enrolled: 6,
      completed: 3,
      inProgress: 2,
      notStarted: 1,
    },
    {
      id: "cbmp",
      name: "CBMP",
      fullName: "Certified in Bid & Management Professional",
      description: "Intermediate level certification for bid management professionals.",
      enrolled: 4,
      completed: 1,
      inProgress: 1,
      notStarted: 2,
    },
    {
      id: "csmp",
      name: "CSMP",
      fullName: "Certified Staffing Management Professional",
      description: "Advanced level certification for staffing management professionals.",
      enrolled: 2,
      completed: 0,
      inProgress: 1,
      notStarted: 1,
    },
  ]

  // Mock team members with certifications
  const teamCertifications = [
    {
      certId: "csba",
      members: [
        { id: 1, name: "John Smith", status: "Completed", completionDate: "Mar 10, 2023", score: "92%" },
        { id: 2, name: "Emily Johnson", status: "Completed", completionDate: "Apr 22, 2023", score: "88%" },
        { id: 3, name: "Michael Brown", status: "In Progress", progress: 45 },
        { id: 4, name: "Sarah Davis", status: "Completed", completionDate: "Jan 15, 2023", score: "95%" },
        { id: 5, name: "David Wilson", status: "Not Started" },
        { id: 6, name: "Jennifer Lee", status: "In Progress", progress: 75 },
      ],
    },
    {
      certId: "cbmp",
      members: [
        { id: 1, name: "John Smith", status: "In Progress", progress: 65 },
        { id: 2, name: "Sarah Davis", status: "Completed", completionDate: "Apr 30, 2023", score: "91%" },
        { id: 3, name: "Jennifer Lee", status: "Not Started" },
        { id: 4, name: "Robert Taylor", status: "Not Started" },
      ],
    },
    {
      certId: "csmp",
      members: [
        { id: 3, name: "Michael Brown", status: "In Progress", progress: 25 },
        { id: 4, name: "Sarah Davis", status: "Completed", completionDate: "Jun 10, 2023", score: "89%" },
      ],
    },
  ]

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Certifications</h1>
          <p className="text-gray-600">Manage and track your team's certification progress</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/dashboard/team-certifications/enroll"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#39a3b1] hover:bg-[#2d8a96] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Enroll Team Members
          </Link>
          <Link
            href="/dashboard/team-certifications/report"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
            placeholder="Search certifications or team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Certification Programs */}
      <div className="space-y-6">
        {certificationPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#39a3b1]/10 flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{program.name}</h2>
                    <p className="text-gray-500">{program.fullName}</p>
                  </div>
                </div>
                <Link
                  href={`/dashboard/team-certifications/${program.id}`}
                  className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
                >
                  View Details <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <p className="mt-4 text-gray-600">{program.description}</p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">Enrolled</p>
                  <p className="text-xl font-bold text-gray-900">{program.enrolled}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="text-xl font-bold text-green-600">{program.completed}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">In Progress</p>
                  <p className="text-xl font-bold text-blue-600">{program.inProgress}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">Not Started</p>
                  <p className="text-xl font-bold text-gray-500">{program.notStarted}</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Team Members</h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Progress
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Completion Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamCertifications
                    .find((cert) => cert.certId === program.id)
                    ?.members.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              member.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : member.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {member.status === "In Progress" ? (
                            <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
                              <div
                                className="bg-[#39a3b1] h-2.5 rounded-full"
                                style={{ width: `${member.progress}%` }}
                              ></div>
                            </div>
                          ) : member.status === "Completed" ? (
                            <span className="text-sm text-gray-500">100%</span>
                          ) : (
                            <span className="text-sm text-gray-500">0%</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.completionDate || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.score || "-"}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  href={`/dashboard/team-certifications/${program.id}/resources`}
                  className="inline-flex items-center text-sm text-[#39a3b1] hover:text-[#2d8a96]"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Certification Resources
                </Link>
                <Link
                  href={`/dashboard/team-certifications/${program.id}/enroll`}
                  className="inline-flex items-center text-sm text-[#39a3b1] hover:text-[#2d8a96]"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Enroll More Team Members
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

