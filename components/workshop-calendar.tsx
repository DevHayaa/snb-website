"use client"

import { useState } from "react"
import { Calendar, Clock, Users, Video, MapPin } from "lucide-react"

type WorkshopType = "all" | "webinar" | "workshop" | "certification"
type ExpertiseLevel = "all" | "beginner" | "intermediate" | "advanced"

// Sample workshop data
const workshops = [
  {
    id: 1,
    title: "Introduction to Bidding Strategies",
    type: "webinar",
    date: "2025-03-15",
    time: "10:00 AM - 11:30 AM EST",
    instructor: "Sarah Johnson",
    level: "beginner",
    format: "virtual",
  },
  {
    id: 2,
    title: "Advanced Proposal Writing Techniques",
    type: "workshop",
    date: "2025-03-20",
    time: "1:00 PM - 4:00 PM EST",
    instructor: "Michael Chen",
    level: "advanced",
    format: "virtual",
  },
  {
    id: 3,
    title: "CSBA Certification Prep Session",
    type: "certification",
    date: "2025-03-25",
    time: "9:00 AM - 12:00 PM EST",
    instructor: "David Rodriguez",
    level: "intermediate",
    format: "virtual",
  },
  {
    id: 4,
    title: "Talent Acquisition Strategies for 2025",
    type: "webinar",
    date: "2025-04-05",
    time: "11:00 AM - 12:30 PM EST",
    instructor: "Emily Watson",
    level: "intermediate",
    format: "virtual",
  },
  {
    id: 5,
    title: "Hands-on Bid Management Workshop",
    type: "workshop",
    date: "2025-04-10",
    time: "9:00 AM - 4:00 PM EST",
    instructor: "Robert Kim",
    level: "advanced",
    format: "in-person",
  },
  {
    id: 6,
    title: "CSMP Certification Exam Review",
    type: "certification",
    date: "2025-04-15",
    time: "1:00 PM - 4:00 PM EST",
    instructor: "Jennifer Martinez",
    level: "advanced",
    format: "virtual",
  },
]

export default function WorkshopCalendar() {
  const [typeFilter, setTypeFilter] = useState<WorkshopType>("all")
  const [levelFilter, setLevelFilter] = useState<ExpertiseLevel>("all")

  const filteredWorkshops = workshops.filter((workshop) => {
    if (typeFilter !== "all" && workshop.type !== typeFilter) return false
    if (levelFilter !== "all" && workshop.level !== levelFilter) return false
    return true
  })

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTypeFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  typeFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setTypeFilter("webinar")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  typeFilter === "webinar" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Webinars
              </button>
              <button
                onClick={() => setTypeFilter("workshop")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  typeFilter === "workshop" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => setTypeFilter("certification")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  typeFilter === "certification"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Certification Prep
              </button>
            </div>
            <div className="flex gap-2">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as ExpertiseLevel)}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 border-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredWorkshops.length > 0 ? (
            filteredWorkshops.map((workshop) => (
              <div key={workshop.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          workshop.type === "webinar"
                            ? "bg-blue-100 text-blue-800"
                            : workshop.type === "workshop"
                              ? "bg-teal-100 text-teal-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {workshop.type.charAt(0).toUpperCase() + workshop.type.slice(1)}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          workshop.level === "beginner"
                            ? "bg-green-100 text-green-800"
                            : workshop.level === "intermediate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {workshop.level.charAt(0).toUpperCase() + workshop.level.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{workshop.title}</h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {new Date(workshop.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        Instructor: {workshop.instructor}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        {workshop.format === "virtual" ? (
                          <Video className="h-4 w-4 mr-2 text-gray-400" />
                        ) : (
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        )}
                        {workshop.format === "virtual" ? "Virtual Event" : "In-Person Event"}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
                      Watch Sample
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600">No workshops match your current filters. Please try different criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

