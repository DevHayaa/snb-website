"use client"

import { useState } from "react"
import { Building, Check, ChevronRight, CreditCard, FileText, LinkIcon, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function BusinessAccountPage() {
  const [hasBusinessAccount, setHasBusinessAccount] = useState(false)

  // Mock business account data
  const businessAccount = {
    name: "Acme Corporation",
    role: "Member",
    joinDate: "June 15, 2023",
    plan: "Team Basic",
    teamSize: 5,
    admin: "John Smith (john.smith@acmecorp.com)",
  }

  // Mock business benefits
  const businessBenefits = [
    "Team certification tracking and management",
    "Bulk enrollment discounts",
    "Dedicated account manager",
    "Custom learning paths for your team",
    "Priority support",
    "Team analytics and reporting",
  ]

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Business Account Management</h1>
        <p className="text-gray-600">Connect with your organization or create a new business account</p>
      </div>

      {!hasBusinessAccount ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Join Existing Business */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Building className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Join Existing Business</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Connect your account to your organization's business account to access team benefits and resources.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="business-code" className="block text-sm font-medium text-gray-700">
                  Business Invitation Code
                </label>
                <input
                  type="text"
                  id="business-code"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                  placeholder="Enter your invitation code"
                />
              </div>
              <div>
                <label htmlFor="business-email" className="block text-sm font-medium text-gray-700">
                  Business Email
                </label>
                <input
                  type="email"
                  id="business-email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                  placeholder="your.name@company.com"
                />
              </div>
              <button
                type="button"
                onClick={() => setHasBusinessAccount(true)}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#39a3b1] hover:bg-[#2d8a96] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
              >
                Join Business Account
              </button>
            </form>
          </div>

          {/* Create New Business */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Plus className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Create Business Account</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Create a new business account for your organization to manage team certifications and access business
              benefits.
            </p>
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">Business Benefits</h3>
              <ul className="space-y-2">
                {businessBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard/business-account/create"
                className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
              >
                Explore Business Plans
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Business Account Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#39a3b1]/10 flex items-center justify-center mr-4">
                <Building className="h-6 w-6 text-[#39a3b1]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{businessAccount.name}</h2>
                <p className="text-gray-500">
                  Joined: {businessAccount.joinDate} • Role: {businessAccount.role}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Business Plan</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{businessAccount.plan}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Team Size</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{businessAccount.teamSize} members</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Account Administrator</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{businessAccount.admin}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <Link
                  href="/dashboard/business-account/team"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
                >
                  <Users className="mr-2 h-4 w-4" />
                  View Team Members
                </Link>
                <Link
                  href="/dashboard/business-account/billing"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  View Billing Information
                </Link>
              </div>
            </div>
          </div>

          {/* Business Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Business Resources</h2>
              <Link
                href="/dashboard/resources/business"
                className="text-sm text-[#39a3b1] hover:text-[#2d8a96] flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Team Certification Guide</h3>
                  <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
                </div>
                <button className="text-[#39a3b1] hover:text-[#2d8a96]">
                  <LinkIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Business Account FAQ</h3>
                  <p className="text-xs text-gray-500">PDF • 1.8 MB</p>
                </div>
                <button className="text-[#39a3b1] hover:text-[#2d8a96]">
                  <LinkIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Team Enrollment Process</h3>
                  <p className="text-xs text-gray-500">PDF • 3.2 MB</p>
                </div>
                <button className="text-[#39a3b1] hover:text-[#2d8a96]">
                  <LinkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

