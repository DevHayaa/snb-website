"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToSection() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element by id (without the #)
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          const yOffset = -100 // Header offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }, 300)
      }
    }
  }, [pathname])

  return null
}

