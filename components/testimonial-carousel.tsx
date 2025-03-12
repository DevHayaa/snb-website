"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type TestimonialCategory = "students" | "hr-managers" | "industry-leaders"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Proposal Writer at TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The CSBA certification completely transformed my career. I gained practical skills that I use every day in my role as a proposal writer. The course was challenging but incredibly rewarding.",
    category: "students",
    certification: "CSBA",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Senior Bid Manager",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "After completing the CBMP certification, I was promoted to Senior Bid Manager within three months. The program provided me with advanced strategies that have significantly improved our win rate.",
    category: "students",
    certification: "CBMP",
  },
  {
    id: 3,
    name: "Robert Johnson",
    role: "HR Director at Global Solutions",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "We've implemented SnB Alliance training across our entire recruitment team. The standardized approach has improved our hiring efficiency by 40% and reduced onboarding time significantly.",
    category: "hr-managers",
    certification: "CSMP",
  },
  {
    id: 4,
    name: "Jennifer Lee",
    role: "VP of Talent Acquisition",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The corporate training program was tailored perfectly to our organization's needs. Our team is now equipped with cutting-edge recruitment strategies that have given us a competitive edge.",
    category: "hr-managers",
    certification: "CSBL",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "CEO of BidPro Consulting",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "As a leader in the bidding industry, I've seen many certification programs, but SnB Alliance stands out for its practical approach and comprehensive curriculum. It's now a requirement for all our new hires.",
    category: "industry-leaders",
    certification: "CSBL",
  },
  {
    id: 6,
    name: "Sarah Williams",
    role: "Director of Operations",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The CSBL certification has been instrumental in helping me develop a strategic approach to our bidding and recruitment operations. The ROI on this investment has been exceptional.",
    category: "industry-leaders",
    certification: "CSBL",
  },
]

export default function TestimonialCarousel() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory>("students")
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredTestimonials = testimonials.filter((testimonial) => testimonial.category === activeCategory)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => {
              setActiveCategory("students")
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              activeCategory === "students" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200`}
          >
            Students
          </button>
          <button
            onClick={() => {
              setActiveCategory("hr-managers")
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 text-sm font-medium ${
              activeCategory === "hr-managers" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            } border-t border-b border-gray-200`}
          >
            HR Managers
          </button>
          <button
            onClick={() => {
              setActiveCategory("industry-leaders")
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              activeCategory === "industry-leaders"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200`}
          >
            Industry Leaders
          </button>
        </div>
      </div>

      {filteredTestimonials.length > 0 && (
        <div className="relative bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={filteredTestimonials[currentIndex].image || "/placeholder.svg"}
                  alt={filteredTestimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center">{filteredTestimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-600 text-center mb-2">{filteredTestimonials[currentIndex].role}</p>
              <div className="flex items-center justify-center mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {filteredTestimonials[currentIndex].certification} Certified
              </div>
            </div>
            <div className="md:w-2/3">
              <blockquote className="text-lg text-gray-700 italic relative">
                <span className="text-4xl text-blue-200 absolute -top-4 -left-2">"</span>
                {filteredTestimonials[currentIndex].quote}
                <span className="text-4xl text-blue-200 absolute -bottom-10 -right-2">"</span>
              </blockquote>
            </div>
          </div>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

