import type React from "react"
import ScrollToSection from "@/components/scroll-to-section"

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollToSection />
      {children}
    </>
  )
}

