"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

// All FAQ data categorized
const faqCategories = [
  {
    title: "Certification Questions",
    faqs: [
      {
        question: "Do I need to be a member to apply for the certifications?",
        answer:
          "Membership is not mandatory, but members get benefits like discounts on exam fees and exclusive access to resources.",
      },
      {
        question: "How can I check my eligibility for certification programs?",
        answer:
          "Eligibility requirements are listed on each certification's page. You can also contact support for further assistance.",
      },
      {
        question: "Can I get a certificate without an exam?",
        answer:
          "No, you must complete the course and pass the exam to earn certification.",
      },
    ],
  },
  {
    title: "Exam Registration Questions",
    faqs: [
      {
        question: "How can I schedule my exam?",
        answer:
          "Go to ‘Schedule My Exam’, choose your preferred exam, and book it at least 48 hours in advance.",
      },
      {
        question: "What is the cancellation & reschedule policy?",
        answer:
          "Exam fees are refundable within 12 months of payment. Rescheduling requires a minimum of 2 business days' notice.",
      },
      {
        question: "What identification is required for exam enrollment?",
        answer:
          "You can use a government-issued ID such as a passport, driver's license, or national identification card.",
      },
    ],
  },
  {
    title: "Membership Support",
    faqs: [
      {
        question: "How do I become a member of SnB Alliance?",
        answer:
          "Visit the Membership page, choose your plan, complete the form, and submit payment if applicable.",
      },
      {
        question: "Can I upgrade my membership tier?",
        answer:
          "Yes! You can upgrade anytime from your account settings or by contacting support.",
      },
      {
        question: "Do members get discounts on certifications or courses?",
        answer:
          "Yes! Most membership tiers include discounts on exam fees and training programs.",
      },
    ],
  },
]

// Collapsible FAQ Component
function CollapsibleFAQ() {
  const [openIndex, setOpenIndex] = useState<{ category: number | null; question: number | null }>({
    category: null,
    question: null,
  })

  return (
    <div className="bg-white rounded-xl border p-6">
      {faqCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">{category.title}</h3>
          {category.faqs.map((faq, faqIndex) => (
            <div key={faqIndex} className="border-b last:border-0 py-3">
              <button
                className="w-full flex justify-between items-center text-left text-gray-800 font-semibold"
                onClick={() =>
                  setOpenIndex((prev) =>
                    prev.category === catIndex && prev.question === faqIndex
                      ? { category: null, question: null }
                      : { category: catIndex, question: faqIndex }
                  )
                }
              >
                {faq.question}
                {openIndex.category === catIndex && openIndex.question === faqIndex ? (
                  <Minus className="h-5 w-5 text-[#39a3b1]" />
                ) : (
                  <Plus className="h-5 w-5 text-[#39a3b1]" />
                )}
              </button>
              {openIndex.category === catIndex && openIndex.question === faqIndex && (
                <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CollapsibleFAQ
