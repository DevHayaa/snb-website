"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ChevronRight, CheckCircle } from "lucide-react";

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
};

export default function CertificationPage() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState<string>("eligibility");

  // Get certification type from URL
  const certType = params?.type?.toString().toLowerCase() || "csba";

  // Default to CSBA if certification type not found
  const certification = certifications[certType as keyof typeof certifications] || certifications.csba;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-12 md:py-20">
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
                  {["eligibility", "curriculum", "examDetails", "timeline"].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => setActiveSection(section)}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                          activeSection === section ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                        }`}
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {activeSection === "eligibility" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Eligibility Requirements</h2>
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
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Curriculum Overview</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {certification.curriculum.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === "examDetails" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Exam Details</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Duration: {certification.examDetails.duration}</li>
                    <li>Questions: {certification.examDetails.questions}</li>
                    <li>Passing Score: {certification.examDetails.passingScore}</li>
                    <li>Exam Fee: {certification.examDetails.fee}</li>
                  </ul>
                </div>
              )}

              {activeSection === "timeline" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Certification Process Timeline</h2>
                  <ul className="list-decimal list-inside space-y-2">
                    {certification.timeline.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
