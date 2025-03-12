"use client"

import type React from "react"

import { useState } from "react"
import { AtSign, Building, Globe, MapPin, Phone, Save } from "lucide-react"

export default function BusinessProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Mock business profile data
  const [profile, setProfile] = useState({
    name: "Acme Corporation",
    industry: "Staffing & Recruitment",
    size: "51-200 employees",
    website: "https://acmecorp.example.com",
    phone: "+1 (555) 123-4567",
    email: "info@acmecorp.example.com",
    address: "123 Business Ave, Suite 500, New York, NY 10001",
    description:
      "Acme Corporation is a leading staffing and recruitment firm specializing in technical and professional placements. We help organizations find the right talent for their projects and help professionals advance their careers.",
    primaryContact: "John Smith",
    primaryContactTitle: "Director of Operations",
    primaryContactEmail: "john.smith@acmecorp.example.com",
    primaryContactPhone: "+1 (555) 987-6543",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Business Profile</h1>
        <p className="text-gray-600">Manage your organization's information and settings</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#39a3b1] to-[#2d8a96] h-32 relative">
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full bg-[#39a3b1]/10 flex items-center justify-center">
                <Building className="h-12 w-12 text-[#39a3b1]" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="pt-16 pb-4 px-6 flex justify-end">
          {isEditing ? (
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#39a3b1] hover:bg-[#2d8a96] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1] disabled:opacity-50"
            >
              {isSaving ? (
                "Saving..."
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39a3b1]"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Form */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Information */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Business Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Business Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={profile.industry}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      <option>Staffing & Recruitment</option>
                      <option>Information Technology</option>
                      <option>Healthcare</option>
                      <option>Finance & Banking</option>
                      <option>Manufacturing</option>
                      <option>Retail</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                      Company Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={profile.size}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>501-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        value={profile.website}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <AtSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Address</h2>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Business Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={profile.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Primary Contact */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Primary Contact</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="primaryContact" className="block text-sm font-medium text-gray-700">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="primaryContact"
                      id="primaryContact"
                      value={profile.primaryContact}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="primaryContactTitle" className="block text-sm font-medium text-gray-700">
                      Title/Position
                    </label>
                    <input
                      type="text"
                      name="primaryContactTitle"
                      id="primaryContactTitle"
                      value={profile.primaryContactTitle}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div className="md:col-span-2">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Business Description</h2>
                <div>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={profile.description}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1] disabled:bg-gray-50 disabled:text-gray-500"
                  />
                  <p className="mt-2 text-sm text-gray-500">Brief description of your organization and its services.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

