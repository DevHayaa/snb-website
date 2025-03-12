"use client"

import { useAuth } from "@/contexts/auth-context"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [viewType, setViewType] = useState<"individual" | "business">("individual")

  // Set initial view type based on user type
  useEffect(() => {
    if (user?.userType === "business") {
      setViewType("business")
    } else {
      setViewType("individual")
    }
  }, [user])

  // Mock data for individual dashboard
  const certifications = [
    { name: "CSBA", progress: 25, status: "In Progress" },
    { name: "CBMP", progress: 0, status: "Not Started" },
    { name: "CSMP", progress: 0, status: "Not Started" },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to Bidding Strategies",
      type: "Webinar",
      date: "July 15, 2023",
      time: "10:00 AM EST",
    },
    {
      id: 2,
      title: "CSBA Exam Preparation Workshop",
      type: "Workshop",
      date: "July 22, 2023",
      time: "2:00 PM EST",
    },
  ]

  const recentResources = [
    {
      id: 1,
      title: "Bidding Process Template",
      type: "Template",
      downloadCount: 245,
    },
    {
      id: 2,
      title: "Recruitment Best Practices Guide",
      type: "PDF",
      downloadCount: 189,
    },
    {
      id: 3,
      title: "Proposal Writing Checklist",
      type: "Checklist",
      downloadCount: 312,
    },
  ]

  const communityDiscussions = [
    {
      id: 1,
      title: "Tips for passing the CSBA exam",
      author: "Sarah Johnson",
      replies: 24,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "Best tools for bid management",
      author: "Michael Chen",
      replies: 18,
      lastActivity: "1 day ago",
    },
  ]

  // Mock data for business dashboard
  const teamMembers = [
    { id: 1, name: "John Smith", role: "Bid Manager", certifications: 2, inProgress: 1 },
    { id: 2, name: "Emily Johnson", role: "Proposal Writer", certifications: 1, inProgress: 1 },
    { id: 3, name: "Michael Brown", role: "Staffing Coordinator", certifications: 0, inProgress: 2 },
    { id: 4, name: "Sarah Davis", role: "Account Manager", certifications: 3, inProgress: 0 },
  ]

  const teamCertifications = [
    { name: "CSBA", completed: 3, inProgress: 2, notStarted: 1 },
    { name: "CBMP", completed: 1, inProgress: 1, notStarted: 4 },
    { name: "CSMP", completed: 2, inProgress: 0, notStarted: 4 },
  ]

  const businessMetrics = [
    { label: "Team Members", value: 6, change: "+2 this month" },
    { label: "Total Certifications", value: 8, change: "+3 this quarter" },
    { label: "Completion Rate", value: "78%", change: "+12% from last quarter" },
    { label: "Resource Usage", value: 45, change: "+15 this month" },
  ]

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#39a3b1] to-[#2d8a96] rounded-lg shadow-sm p-6 mb-6 text-white">
        <h1 className="text-2xl font-bold">
          {viewType === "individual"
            ? `Welcome back, ${user?.name}!`
            : `Welcome to ${user?.businessName || "Your Business"} Dashboard!`}
        </h1>
        <p className="mt-1 text-white/90">
          {viewType === "individual"
            ? "Track your certifications, access learning resources, and connect with the community."
            : "Manage your team's certifications, track progress, and optimize your staffing capabilities."}
        </p>
      </div>

      {/* Dashboard Grid - Individual View */}
      {viewType === "individual" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certification Progress */}
          <div className="bg-white rounded-lg shadow-sm p-6 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">My Certification Progress</h2>
              <Link
                href="/dashboard/certifications"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-[#39a3b1] mr-2" />
                      <h3 className="font-medium">{cert.name}</h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        cert.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1 text-xs text-gray-500">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${cert.progress > 0 ? "bg-[#39a3b1]" : "bg-gray-300"}`}
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/dashboard/certifications/explore"
                className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium"
              >
                Explore more certification options
              </Link>
            </div>
          </div>

          {/* Activity Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Activity Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Learning Hours</p>
                  <p className="text-sm text-gray-500">12 hours this month</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Resources Accessed</p>
                  <p className="text-sm text-gray-500">8 resources this month</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Community Engagement</p>
                  <p className="text-sm text-gray-500">5 posts and comments</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Progress Trend</p>
                  <p className="text-sm text-gray-500">15% increase from last month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
              <Link href="/dashboard/events" className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-[#39a3b1] pl-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/dashboard/events/calendar"
                className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium"
              >
                View full calendar
              </Link>
            </div>
          </div>

          {/* Recent Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Popular Resources</h2>
              <Link
                href="/dashboard/resources"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {recentResources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <span className="text-xs text-gray-500">{resource.type}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{resource.downloadCount} downloads</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/dashboard/resources/search"
                className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium"
              >
                Search all resources
              </Link>
            </div>
          </div>

          {/* Community Discussions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Community Discussions</h2>
              <Link
                href="/dashboard/community"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {communityDiscussions.map((discussion) => (
                <div key={discussion.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium">{discussion.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Started by {discussion.author}</span>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-gray-500">{discussion.replies} replies</span>
                    <span className="text-gray-500">Last activity: {discussion.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/dashboard/community/new" className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium">
                Start a new discussion
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Grid - Business View */}
      {viewType === "business" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Business Metrics */}
          <div className="bg-white rounded-lg shadow-sm p-6 col-span-1 lg:col-span-3">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Business Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-lg shadow-sm p-6 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Team Members</h2>
              <Link href="/dashboard/team" className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center">
                Manage Team <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
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
                      Role
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
                      In Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamMembers.map((member) => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{member.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.certifications}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{member.inProgress}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/dashboard/team/invite" className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium">
                Invite team members
              </Link>
            </div>
          </div>

          {/* Team Certification Status */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Team Certification Status</h2>
              <Link
                href="/dashboard/team-certifications"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View Details <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {teamCertifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-[#39a3b1] mr-2" />
                    <h3 className="font-medium">{cert.name}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">{cert.completed}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">{cert.inProgress}</div>
                      <div className="text-xs text-gray-500">In Progress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">{cert.notStarted}</div>
                      <div className="text-xs text-gray-500">Not Started</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
              <Link href="/dashboard/events" className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-[#39a3b1] pl-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/dashboard/events/calendar"
                className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium"
              >
                View full calendar
              </Link>
            </div>
          </div>

          {/* Recent Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Popular Resources</h2>
              <Link
                href="/dashboard/resources"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {recentResources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <span className="text-xs text-gray-500">{resource.type}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{resource.downloadCount} downloads</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/dashboard/resources/search"
                className="text-[#39a3b1] hover:text-[#2d8a96] text-sm font-medium"
              >
                Search all resources
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

