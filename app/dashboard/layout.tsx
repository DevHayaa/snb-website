"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import Image from "next/image"
// Add imports for the new icons
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  FileText,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  X,
} from "lucide-react"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Add state for user view type
  const [viewType, setViewType] = useState<"individual" | "business">("individual")

  // Add useEffect to set initial view type based on user type
  useEffect(() => {
    if (user?.userType === "business") {
      setViewType("business")
    } else {
      setViewType("individual")
    }
  }, [user])

  // Add toggle function for users with both types
  const toggleViewType = () => {
    setViewType(viewType === "individual" ? "business" : "individual")
  }

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#39a3b1]"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button onClick={toggleSidebar} className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100">
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SnB Alliance Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="w-10 h-10 rounded-full bg-[#39a3b1]/10 flex items-center justify-center">
          <User className="h-5 w-5 text-[#39a3b1]" />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:relative md:z-auto transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/logo.png"
                alt="SnB Alliance Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#39a3b1]/10 flex items-center justify-center">
                {viewType === "individual" ? (
                  <User className="h-5 w-5 text-[#39a3b1]" />
                ) : (
                  <Building className="h-5 w-5 text-[#39a3b1]" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-900">
                  {viewType === "individual" ? user.name : user.businessName || "Your Business"}
                </p>
                <p className="text-xs text-gray-500">
                  {viewType === "individual" ? user.email : user.businessRole || "Admin"}
                </p>
              </div>
            </div>

            {user?.userType === "both" && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <button
                  onClick={toggleViewType}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                >
                  {viewType === "individual" ? (
                    <>
                      <Building className="mr-3 h-5 w-5 text-gray-500" />
                      Switch to Business View
                    </>
                  ) : (
                    <>
                      <User className="mr-3 h-5 w-5 text-gray-500" />
                      Switch to Individual View
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link
              href="/dashboard"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Home className="mr-3 h-5 w-5 text-gray-500" />
              {viewType === "individual" ? "Member Dashboard" : "Corporate Dashboard"}
            </Link>

            {viewType === "individual" ? (
              <>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <User className="mr-3 h-5 w-5 text-gray-500" />
                  My Profile
                </Link>
                <Link
                  href="/dashboard/certifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Award className="mr-3 h-5 w-5 text-gray-500" />
                  My Certifications
                </Link>
                <Link
                  href="/dashboard/learning"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <BookOpen className="mr-3 h-5 w-5 text-gray-500" />
                  Course Progress
                </Link>
                <Link
                  href="/dashboard/business-account"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Briefcase className="mr-3 h-5 w-5 text-gray-500" />
                  Business Account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard/team"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Users className="mr-3 h-5 w-5 text-gray-500" />
                  Team Management
                </Link>
                <Link
                  href="/dashboard/team-certifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Award className="mr-3 h-5 w-5 text-gray-500" />
                  Team Certifications
                </Link>
                <Link
                  href="/dashboard/business-profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Building className="mr-3 h-5 w-5 text-gray-500" />
                  Business Profile
                </Link>
              </>
            )}

            {/* Common links for both views */}
            <Link
              href="/dashboard/resources"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <FileText className="mr-3 h-5 w-5 text-gray-500" />
              Resources
            </Link>
            <Link
              href="/dashboard/events"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Calendar className="mr-3 h-5 w-5 text-gray-500" />
              Events
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Settings className="mr-3 h-5 w-5 text-gray-500" />
              Settings
            </Link>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 md:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

