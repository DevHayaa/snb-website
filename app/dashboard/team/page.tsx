"use client"

import { useState } from "react"
import { Award, ChevronDown, Download, Mail, MoreHorizontal, Plus, Search, Trash, User } from "lucide-react"
import Link from "next/link"

export default function TeamManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@acmecorp.com",
      role: "Bid Manager",
      status: "Active",
      joinDate: "Jan 15, 2023",
      certifications: [
        { name: "CSBA", status: "Completed", date: "Mar 10, 2023" },
        { name: "CBMP", status: "In Progress", progress: 65 },
      ],
    },
    {
      id: 2,
      name: "Emily Johnson",
      email: "emily.johnson@acmecorp.com",
      role: "Proposal Writer",
      status: "Active",
      joinDate: "Feb 3, 2023",
      certifications: [{ name: "CSBA", status: "Completed", date: "Apr 22, 2023" }],
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@acmecorp.com",
      role: "Staffing Coordinator",
      status: "Active",
      joinDate: "Mar 20, 2023",
      certifications: [
        { name: "CSBA", status: "In Progress", progress: 45 },
        { name: "CSMP", status: "Not Started" },
      ],
    },
    {
      id: 4,
      name: "Sarah Davis",
      email: "sarah.davis@acmecorp.com",
      role: "Account Manager",
      status: "Active",
      joinDate: "Nov 5, 2022",
      certifications: [
        { name: "CSBA", status: "Completed", date: "Jan 15, 2023" },
        { name: "CBMP", status: "Completed", date: "Apr 30, 2023" },
        { name: "CSMP", status: "Completed", date: "Jun 10, 2023" },
      ],
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@acmecorp.com",
      role: "Bid Specialist",
      status: "Invited",
      joinDate: "Pending",
      certifications: [],
    },
  ]

  // Filter team members based on search query
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600">Manage your team members and their certifications</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/dashboard/team/invite"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#39a3b1] hover:bg-[#2d8a96] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Link>
          <Link
            href="/dashboard/team/report"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]">
              Status <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]">
              Certification <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Team Members List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Member
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
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
                  Certifications
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Joined
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#39a3b1]/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-[#39a3b1]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      {member.certifications.length > 0 ? (
                        member.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">{cert.name}</span>
                            <span
                              className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                cert.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : cert.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                        ))
                      ) : (
                        <span className="text-sm text-gray-500">No certifications</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Invitations */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Pending Invitations</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">david.wilson@acmecorp.com</p>
                  <p className="text-sm text-gray-500">Invited on July 1, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium">Resend Invitation</button>
                <button className="text-red-500 hover:text-red-600">
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

