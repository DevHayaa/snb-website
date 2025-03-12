"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Clock, DollarSign, FileText, CheckCircle } from "lucide-react"

// Certification data
const certifications = {
  csba: {
    title: "Certified in Bidding & Staffing Associate (CSBA)",
    description: "The foundational certification for professionals entering the bidding and staffing industry.",
    eligibility: [
      "No prior experience required",
      "Basic understanding of business processes",
      "High school diploma or equivalent",
    ],
    curriculum: [
      "Introduction to Bidding Processes",
      "Fundamentals of Staffing and Recruitment",
      "Proposal Writing Basics",
      "Industry Terminology and Standards",
      "Communication Skills for Professionals",
      "Ethics in Bidding and Staffing",
    ],
    examDetails: {
      duration: "2 hours",
      questions: 100,
      passingScore: "70%",
      fee: "$250",
    },
    timeline: [
      "Application Submission",
      "Application Review",
      "Payment Processing",
      "Exam Scheduling",
      "Exam Completion",
      "Certification Award",
    ],
  },
  cbmp: {
    title: "Certified in Bid & Man-power Professional (CBMP)",
    description: "Advanced certification for professionals specializing in bid management and manpower allocation.",
    eligibility: [
      "CSBA certification required",
      "Minimum 1 year experience in bidding or staffing",
      "Bachelor's degree or equivalent work experience",
    ],
    curriculum: [
      "Advanced Bid Strategy Development",
      "Manpower Planning and Allocation",
      "Cost Estimation and Pricing Strategies",
      "Contract Negotiation Techniques",
      "Risk Assessment in Bidding",
      "Resource Management Best Practices",
    ],
    examDetails: {
      duration: "3 hours",
      questions: 120,
      passingScore: "75%",
      fee: "$350",
    },
    timeline: [
      "Application Submission",
      "Experience Verification",
      "Application Review",
      "Payment Processing",
      "Exam Scheduling",
      "Certification Award",
    ],
  },
  csmp: {
    title: "Certified Staffing Man-power Professional (CSMP)",
    description: "Specialized certification for resource managers focused on staffing optimization.",
    eligibility: [
      "CSBA certification required",
      "Minimum 2 years experience in staffing or HR",
      "Bachelor's degree or equivalent work experience",
    ],
    curriculum: [
      "Strategic Workforce Planning",
      "Talent Acquisition and Management",
      "Performance Metrics and Analytics",
      "Team Building and Leadership",
      "Compliance and Legal Considerations",
      "Client Relationship Management",
    ],
    examDetails: {
      duration: "3 hours",
      questions: 120,
      passingScore: "75%",
      fee: "$350",
    },
    timeline: [
      "Application Submission",
      "Experience Verification",
      "Application Review",
      "Payment Processing",
      "Exam Scheduling",
      "Certification Award",
    ],
  },
  csbl: {
    title: "Certified Staffing And Bidding Leader (CSBL)",
    description: "Executive-level certification for senior professionals in bidding and staffing leadership roles.",
    eligibility: [
      "CSBA certification required",
      "CBMP or CSMP certification recommended",
      "Minimum 5 years experience in leadership roles",
      "Bachelor's degree required, Master's preferred",
    ],
    curriculum: [
      "Strategic Business Development",
      "Executive Leadership in Bidding and Staffing",
      "Financial Management and Budgeting",
      "Organizational Development",
      "Industry Trends and Innovation",
      "Global Bidding and Staffing Practices",
    ],
    examDetails: {
      duration: "4 hours",
      questions: 150,
      passingScore: "80%",
      fee: "$500",
    },
    timeline: [
      "Application Submission",
      "Experience Verification",
      "Leadership Assessment",
      "Application Review",
      "Payment Processing",
      "Exam Scheduling",
      "Certification Award",
    ],
  },
}

export default function CertificationPage({ params }: { params: { type: string } }) {
  const [activeSection, setActiveSection] = useState<string>("eligibility")
  const certType = params.type.toLowerCase()

  // Default to CSBA if certification type not found
  const certification = certifications[certType as keyof typeof certifications] || certifications.csba

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="gradient-bg text-black py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{certification.title}</h1>
          <p className="text-xl max-w-3xl">{certification.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 md:sticky md:top-24">
              <h2 className="text-lg font-bold mb-4">Certification Details</h2>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveSection("eligibility")}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeSection === "eligibility" ? "bg-primary text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Eligibility
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection("curriculum")}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeSection === "curriculum" ? "bg-primary text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Curriculum
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection("examDetails")}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeSection === "examDetails" ? "bg-primary text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Exam Details
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection("timeline")}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeSection === "timeline" ? "bg-primary text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Process Timeline
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {activeSection === "eligibility" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Eligibility Requirements</h2>
                  <ul className="space-y-3">
                    {certification.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === "curriculum" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Curriculum</h2>
                  <ul className="space-y-3">
                    {certification.curriculum.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === "examDetails" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Exam Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Duration</h3>
                        <p>{certification.examDetails.duration}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Questions</h3>
                        <p>{certification.examDetails.questions} multiple choice</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Passing Score</h3>
                        <p>{certification.examDetails.passingScore}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Exam Fee</h3>
                        <p>{certification.examDetails.fee}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "timeline" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Process Timeline</h2>
                  <div className="relative">
                    {certification.timeline.map((step, index) => (
                      <div key={index} className="mb-8 flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div className="rounded-full bg-primary text-white flex items-center justify-center w-8 h-8 z-10">
                            {index + 1}
                          </div>
                          {index < certification.timeline.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-200 -mt-2 ml-0.5"></div>
                          )}
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 flex-grow">
                          <h3 className="font-medium">{step}</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {index === 0 &&
                              "Complete the online application form with your personal and professional details."}
                            {index === 1 &&
                              "Our team reviews your application to ensure you meet all eligibility requirements."}
                            {index === 2 && "Process your payment securely through our online payment system."}
                            {index === 3 && "Choose your preferred date and time for the certification exam."}
                            {index === 4 && "Complete the exam within the allotted time and receive your results."}
                            {index === 5 && "Upon passing, receive your official certification and digital badge."}
                            {index === 6 &&
                              "Your leadership skills will be assessed through a comprehensive evaluation."}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Apply Now Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 px-4 z-40">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">{certification.title}</h3>
            <p className="text-gray-600">Ready to advance your career?</p>
          </div>
          <Link
            href="/apply"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}

