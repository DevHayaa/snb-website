"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  userType: "individual" | "business" | "both" // Add userType field
  businessName?: string // Optional for business users
  businessRole?: string // Optional for business users
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage on initial load
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      // This is a mock login - in a real app, you would call an API
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any email with a valid format and password length > 6
      if (email && password.length >= 6) {
        const mockUser: User = {
          id: "1",
          name: email.split("@")[0],
          email: email,
          userType: email.includes("business") ? "business" : email.includes("both") ? "both" : "individual",
          businessName: email.includes("business") || email.includes("both") ? "Acme Corporation" : undefined,
          businessRole: email.includes("business") || email.includes("both") ? "Admin" : undefined,
        }
        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true)
      // This is a mock registration - in a real app, you would call an API
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, accept any valid inputs
      if (name && email && password.length >= 6) {
        const user = {
          id: "1",
          name,
          email,
          userType: email.includes("business") ? "business" : email.includes("both") ? "both" : "individual",
          businessName: email.includes("business") || email.includes("both") ? "Acme Corporation" : undefined,
          businessRole: email.includes("business") || email.includes("both") ? "Admin" : undefined,
        }
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        return true
      }
      return false
    } catch (error) {
      console.error("Registration error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

