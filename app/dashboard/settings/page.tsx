"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Lock, Save, Shield, User } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [isSaving, setIsSaving] = useState(false)

  // Mock settings data
  const [settings, setSettings] = useState({
    account: {
      email: "john.doe@example.com",
      name: "John Doe",
      language: "English",
      timezone: "Eastern Time (ET)",
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      newsletter: true,
      eventReminders: true,
      certificationUpdates: true,
      communityActivity: false,
    },
    privacy: {
      profileVisibility: "public",
      showEmail: false,
      showPhone: false,
      allowMessaging: true,
      dataSharing: false,
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: "30 minutes",
      loginNotifications: true,
    },
  })

  const handleChange = (section: string, field: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSaving(false)
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("account")}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "account"
                  ? "border-[#39a3b1] text-[#39a3b1]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <User className="inline-block h-5 w-5 mr-2 -mt-0.5" />
              Account
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "notifications"
                  ? "border-[#39a3b1] text-[#39a3b1]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Bell className="inline-block h-5 w-5 mr-2 -mt-0.5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "privacy"
                  ? "border-[#39a3b1] text-[#39a3b1]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Shield className="inline-block h-5 w-5 mr-2 -mt-0.5" />
              Privacy
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "security"
                  ? "border-[#39a3b1] text-[#39a3b1]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Lock className="inline-block h-5 w-5 mr-2 -mt-0.5" />
              Security
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Account Settings */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Account Information</h3>
                  <p className="mt-1 text-sm text-gray-500">Update your account information and preferences.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={settings.account.name}
                      onChange={(e) => handleChange("account", "name", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={settings.account.email}
                      onChange={(e) => handleChange("account", "email", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    />
                  </div>

                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={settings.account.language}
                      onChange={(e) => handleChange("account", "language", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      name="timezone"
                      value={settings.account.timezone}
                      onChange={(e) => handleChange("account", "timezone", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    >
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Pacific Time (PT)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage how and when you receive notifications.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Notification Channels</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="email-notifications"
                            name="email-notifications"
                            type="checkbox"
                            checked={settings.notifications.email}
                            onChange={(e) => handleChange("notifications", "email", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-notifications" className="font-medium text-gray-700">
                            Email Notifications
                          </label>
                          <p className="text-gray-500">Receive notifications via email.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="push-notifications"
                            name="push-notifications"
                            type="checkbox"
                            checked={settings.notifications.push}
                            onChange={(e) => handleChange("notifications", "push", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="push-notifications" className="font-medium text-gray-700">
                            Push Notifications
                          </label>
                          <p className="text-gray-500">Receive notifications in your browser.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="sms-notifications"
                            name="sms-notifications"
                            type="checkbox"
                            checked={settings.notifications.sms}
                            onChange={(e) => handleChange("notifications", "sms", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="sms-notifications" className="font-medium text-gray-700">
                            SMS Notifications
                          </label>
                          <p className="text-gray-500">Receive notifications via text message.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700">Notification Types</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            checked={settings.notifications.newsletter}
                            onChange={(e) => handleChange("notifications", "newsletter", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="font-medium text-gray-700">
                            Newsletter
                          </label>
                          <p className="text-gray-500">Receive monthly newsletter and updates.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="event-reminders"
                            name="event-reminders"
                            type="checkbox"
                            checked={settings.notifications.eventReminders}
                            onChange={(e) => handleChange("notifications", "eventReminders", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="event-reminders" className="font-medium text-gray-700">
                            Event Reminders
                          </label>
                          <p className="text-gray-500">Receive reminders for upcoming events and webinars.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="certification-updates"
                            name="certification-updates"
                            type="checkbox"
                            checked={settings.notifications.certificationUpdates}
                            onChange={(e) => handleChange("notifications", "certificationUpdates", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="certification-updates" className="font-medium text-gray-700">
                            Certification Updates
                          </label>
                          <p className="text-gray-500">Receive updates about your certification progress.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="community-activity"
                            name="community-activity"
                            type="checkbox"
                            checked={settings.notifications.communityActivity}
                            onChange={(e) => handleChange("notifications", "communityActivity", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="community-activity" className="font-medium text-gray-700">
                            Community Activity
                          </label>
                          <p className="text-gray-500">Receive notifications about community discussions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Privacy Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage your privacy preferences and data sharing options.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="profile-visibility" className="block text-sm font-medium text-gray-700">
                      Profile Visibility
                    </label>
                    <select
                      id="profile-visibility"
                      name="profile-visibility"
                      value={settings.privacy.profileVisibility}
                      onChange={(e) => handleChange("privacy", "profileVisibility", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    >
                      <option value="public">Public - Visible to everyone</option>
                      <option value="members">Members Only - Visible to SnB Alliance members</option>
                      <option value="connections">Connections Only - Visible to your connections</option>
                      <option value="private">Private - Visible only to you</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700">Contact Information Visibility</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="show-email"
                            name="show-email"
                            type="checkbox"
                            checked={settings.privacy.showEmail}
                            onChange={(e) => handleChange("privacy", "showEmail", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="show-email" className="font-medium text-gray-700">
                            Show Email Address
                          </label>
                          <p className="text-gray-500">Allow others to see your email address on your profile.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="show-phone"
                            name="show-phone"
                            type="checkbox"
                            checked={settings.privacy.showPhone}
                            onChange={(e) => handleChange("privacy", "showPhone", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="show-phone" className="font-medium text-gray-700">
                            Show Phone Number
                          </label>
                          <p className="text-gray-500">Allow others to see your phone number on your profile.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700">Communication Preferences</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="allow-messaging"
                            name="allow-messaging"
                            type="checkbox"
                            checked={settings.privacy.allowMessaging}
                            onChange={(e) => handleChange("privacy", "allowMessaging", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="allow-messaging" className="font-medium text-gray-700">
                            Allow Messaging
                          </label>
                          <p className="text-gray-500">Allow other members to send you direct messages.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700">Data Sharing</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="data-sharing"
                            name="data-sharing"
                            type="checkbox"
                            checked={settings.privacy.dataSharing}
                            onChange={(e) => handleChange("privacy", "dataSharing", e.target.checked)}
                            className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="data-sharing" className="font-medium text-gray-700">
                            Data Sharing for Improvement
                          </label>
                          <p className="text-gray-500">
                            Allow SnB Alliance to use your non-personal data to improve services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage your account security and authentication options.</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700">Password</h4>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="current-password"
                        id="current-password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="sm:col-span-2 border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                            New Password
                          </label>
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                            placeholder="••••••••"
                          />
                        </div>

                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Password must be at least 8 characters and include a number and a special character.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700">Two-Factor Authentication</h4>
                  <div className="mt-4 flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="two-factor-auth"
                        name="two-factor-auth"
                        type="checkbox"
                        checked={settings.security.twoFactorAuth}
                        onChange={(e) => handleChange("security", "twoFactorAuth", e.target.checked)}
                        className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="two-factor-auth" className="font-medium text-gray-700">
                        Enable Two-Factor Authentication
                      </label>
                      <p className="text-gray-500">
                        Add an extra layer of security to your account by requiring a verification code in addition to
                        your password.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700">Session Management</h4>
                  <div className="mt-4">
                    <label htmlFor="session-timeout" className="block text-sm font-medium text-gray-700">
                      Session Timeout
                    </label>
                    <select
                      id="session-timeout"
                      name="session-timeout"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleChange("security", "sessionTimeout", e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#39a3b1] focus:border-[#39a3b1]"
                    >
                      <option value="15 minutes">15 minutes</option>
                      <option value="30 minutes">30 minutes</option>
                      <option value="1 hour">1 hour</option>
                      <option value="4 hours">4 hours</option>
                      <option value="8 hours">8 hours</option>
                    </select>
                    <p className="mt-2 text-sm text-gray-500">Automatically log out after a period of inactivity.</p>
                  </div>

                  <div className="mt-4 flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="login-notifications"
                        name="login-notifications"
                        type="checkbox"
                        checked={settings.security.loginNotifications}
                        onChange={(e) => handleChange("security", "loginNotifications", e.target.checked)}
                        className="h-4 w-4 text-[#39a3b1] focus:ring-[#39a3b1] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="login-notifications" className="font-medium text-gray-700">
                        Login Notifications
                      </label>
                      <p className="text-gray-500">
                        Receive email notifications when your account is accessed from a new device or location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="pt-6 border-t border-gray-200 mt-6">
              <div className="flex justify-end">
                <button
                  type="submit"
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

