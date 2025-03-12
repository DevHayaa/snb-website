"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

type Role = "student" | "professional" | "manager"
type Goal = "upskill" | "certification" | "team-training"
type Timeline = "1-month" | "3-months" | "6-months"

interface RecommendationProps {
  role: Role
  goal: Goal
  timeline: Timeline
}

const recommendations: Record<Role, Record<Goal, Record<Timeline, string[]>>> = {
  student: {
    upskill: {
      "1-month": ["Self-paced CSBA Foundations Course", "Bidding Basics Workshop"],
      "3-months": ["CSBA Certification Program", "Proposal Writing Fundamentals"],
      "6-months": ["CSBA Certification Program", "Introduction to CBMP", "Career Mentorship Program"],
    },
    certification: {
      "1-month": ["CSBA Accelerated Program", "Intensive Exam Prep Workshop"],
      "3-months": ["CSBA Standard Program", "Mock Exams Package"],
      "6-months": ["CSBA Extended Program with Mentorship", "Practical Skills Workshops"],
    },
    "team-training": {
      "1-month": ["Group Study Program", "Collaborative Learning Workshop"],
      "3-months": ["Team CSBA Certification Track", "Group Discount Package"],
      "6-months": ["Comprehensive Team Learning Path", "Peer Review Sessions"],
    },
  },
  professional: {
    upskill: {
      "1-month": ["Advanced Bidding Techniques Workshop", "Specialized Skills Module"],
      "3-months": ["CBMP or CSMP Foundations", "Industry-Specific Training"],
      "6-months": ["Full CBMP or CSMP Certification", "Professional Development Track"],
    },
    certification: {
      "1-month": ["Certification Bootcamp", "Accelerated Exam Prep"],
      "3-months": ["Standard Certification Program", "Practice Labs and Simulations"],
      "6-months": ["Comprehensive Certification Path", "Specialization Modules"],
    },
    "team-training": {
      "1-month": ["Team Skills Assessment", "Collaborative Workshop Series"],
      "3-months": ["Department Certification Program", "Team Building Modules"],
      "6-months": ["Cross-Functional Team Certification", "Leadership Development"],
    },
  },
  manager: {
    upskill: {
      "1-month": ["Executive Leadership Workshop", "Strategic Management Module"],
      "3-months": ["CSBL Foundations", "Advanced Management Techniques"],
      "6-months": ["Full CSBL Certification", "Executive Coaching Program"],
    },
    certification: {
      "1-month": ["CSBL Fast Track Program", "Executive Assessment Preparation"],
      "3-months": ["CSBL Standard Program", "Leadership Case Studies"],
      "6-months": ["Comprehensive CSBL with Specialization", "Executive Mentorship"],
    },
    "team-training": {
      "1-month": ["Team Performance Workshop", "Department Assessment"],
      "3-months": ["Corporate Training Program", "Team Certification Roadmap"],
      "6-months": ["Enterprise-Wide Learning Solution", "Organizational Development Program"],
    },
  },
}

export default function SmartEnrollment() {
  const [role, setRole] = useState<Role>("professional")
  const [goal, setGoal] = useState<Goal>("certification")
  const [timeline, setTimeline] = useState<Timeline>("3-months")
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowRecommendations(true)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        {!showRecommendations ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">I am a:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    role === "student"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Student / New to the Field
                </button>
                <button
                  type="button"
                  onClick={() => setRole("professional")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    role === "professional"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Working Professional
                </button>
                <button
                  type="button"
                  onClick={() => setRole("manager")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    role === "manager"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Manager / Leader
                </button>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">I want to:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setGoal("upskill")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    goal === "upskill"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Upskill / Learn New Things
                </button>
                <button
                  type="button"
                  onClick={() => setGoal("certification")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    goal === "certification"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Certified
                </button>
                <button
                  type="button"
                  onClick={() => setGoal("team-training")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    goal === "team-training"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Train My Team
                </button>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">In the next:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setTimeline("1-month")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    timeline === "1-month"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  1 Month
                </button>
                <button
                  type="button"
                  onClick={() => setTimeline("3-months")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    timeline === "3-months"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  3 Months
                </button>
                <button
                  type="button"
                  onClick={() => setTimeline("6-months")}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    timeline === "6-months"
                      ? "bg-white text-blue-900 font-medium"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  6 Months
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-50 transition-colors text-lg"
              >
                Get My Recommendations
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Your Personalized Recommendations</h3>
              <p className="text-blue-100">
                Based on your profile as a {role} looking to{" "}
                {goal === "upskill" ? "upskill" : goal === "certification" ? "get certified" : "train your team"} in the
                next {timeline === "1-month" ? "1 month" : timeline === "3-months" ? "3 months" : "6 months"}.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Recommended Programs</h4>
              <ul className="space-y-4">
                {recommendations[role][goal][timeline].map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowRecommendations(false)}
                className="py-3 px-6 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors"
              >
                Start Over
              </button>
              <a
                href="/learning/contact"
                className="py-3 px-6 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-50 transition-colors text-center"
              >
                Speak with a Learning Advisor
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

