import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SnB Alliance - Empowering Professionals in Bidding & Recruitment",
  description: "Professional certifications and learning paths for bidding and recruitment specialists.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get the current pathname to determine if we should show header/footer
  const isAuthOrDashboardPage = (pathname: string) => {
    return pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/dashboard")
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* We'll handle the header and footer in each specific layout */}
          <main className="min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

