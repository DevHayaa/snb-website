import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  type LucideIcon,
  Scroll,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react"

// Certification types
const certifications = [
  {
    id: "csba",
    title: "CSBA",
    fullTitle: "Certified in Staffing & Bidding Associate",
    description:
      "This foundational certification equips you with the essential knowledge of bidding processes, proposal writing, and staffing basics.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700",
    eligibility: "No prior experience required. Open to all professionals interested in bidding and staffing.",
    value: "Gain foundational knowledge in bidding processes, proposal writing, and staffing basics.",
    duration: "40 hours (4-6 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours)",
    fee: "$299",
    image: "/csba.png",
  },
  {
    id: "cbmp",
    title: "CBMP",
    fullTitle: "Certified in Bid & Man-power Professional",
    description: "Aimed at individuals who want to specialize in bid management and manpower allocation.",
    icon: FileText,
    color: "bg-green-100 text-green-700",
    eligibility: "1+ years of experience in bidding or staffing, or CSBA certification.",
    value: "Develop specialized skills in bid management and manpower allocation strategies.",
    duration: "60 hours (8-10 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours) + Case study analysis",
    fee: "$499",
    image: "/cbmp.png",
  },
  {
    id: "csmp",
    title: "CSMP",
    fullTitle: "Certified Staffing Man-power Professional",
    description:
      "Designed for resource managers, this certification enhances your professional skill sets in staffing optimization.",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    eligibility: "2+ years of experience in staffing or resource management, or CSBA certification.",
    value: "Master advanced staffing optimization techniques and resource management strategies.",
    duration: "60 hours (8-10 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours) + Practical assignment",
    fee: "$499",
    image: "/csbl.png",
  },
  {
    id: "csbl",
    title: "CSBL",
    fullTitle: "Certified Staffing And Bidding Leader",
    description:
      "This advanced certification is tailored for experienced leaders who want to master all aspects of staffing and bidding operations.",
    icon: Trophy,
    color: "bg-amber-100 text-amber-700",
    eligibility: "5+ years of experience in bidding and staffing, or CBMP/CSMP certification.",
    value: "Develop leadership capabilities to oversee and optimize integrated bidding and staffing operations.",
    duration: "80 hours (10-12 weeks part-time)",
    assessment: "Multiple-choice exam (3 hours) + Case study + Interview",
    fee: "$799",
    image: "/csmp.png",
  },
]

// Certification benefits
const benefits = [
  {
    title: "Career Advancement",
    description: "Unlock new job opportunities and promotions with industry-recognized credentials.",
    icon: Target,
  },
  {
    title: "Industry Recognition",
    description: "Gain credibility with employers and clients through validated expertise.",
    icon: Award,
  },
  {
    title: "Knowledge Enhancement",
    description: "Develop specialized skills and stay updated with industry best practices.",
    icon: BookOpen,
  },
  {
    title: "Competitive Edge",
    description: "Stand out in the job market with credentials that validate your expertise.",
    icon: Star,
  },
  {
    title: "Professional Network",
    description: "Connect with a community of certified professionals and industry experts.",
    icon: Users,
  },
]

// Certification process steps
const processSteps = [
  {
    title: "Eligibility Check",
    description: "Verify that you meet the prerequisites for your chosen certification.",
    icon: CheckCircle,
  },
  {
    title: "Registration",
    description: "Complete the registration form and pay the certification fee.",
    icon: FileText,
  },
  {
    title: "Learning & Preparation",
    description: "Access study materials and prepare for the certification exam.",
    icon: BookOpen,
  },
  {
    title: "Exam Scheduling",
    description: "Schedule your exam at a convenient date and time.",
    icon: Calendar,
  },
  {
    title: "Certification Exam",
    description: "Complete the exam and any additional assessment components.",
    icon: Scroll,
  },
  {
    title: "Certification Award",
    description: "Receive your certification upon successful completion of all requirements.",
    icon: Trophy,
  },
]

// Benefit Card Component
function BenefitCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Process Step Component
function ProcessStep({
  title,
  description,
  icon: Icon,
  step,
}: { title: string; description: string; icon: LucideIcon; step: number }) {
  return (
    <div className="flex items-start">
      <div className="relative">
        <div className="bg-[#2d8a96] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 relative">
          <span>{step}</span>
        </div>
        {step < processSteps.length && (
          <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-[#2d8a96]/30 -translate-x-1/2 h-full"></div>
        )}
      </div>
      <div className="ml-4 pb-12">
        <div className="flex items-center mb-2">
          <Icon className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

// Certification Card Component
function CertificationCard({ certification }: { certification: (typeof certifications)[0] }) {
  const { id, title, fullTitle, description, icon: Icon, color } = certification

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className={`p-4 ${color} flex items-center`}>
        <Icon className="h-6 w-6 mr-2" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-sm text-gray-600">({fullTitle})</p>
        <p className="text-gray-700">{description}</p>
        <Link href={`/certifications/${id}`} className="inline-flex items-center text-primary hover:text-primary/80">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

// Certification Detail Component
function CertificationDetail({ certification }: { certification: (typeof certifications)[0] }) {
  const { title, fullTitle, icon: Icon, color, eligibility, value, duration, assessment, fee, image } = certification

  return (
    <div id={certification.id} className="mb-16">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">
          <div className="md:col-span-1 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} Certification`}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-6 text-white">
                {/* <div
                  className={`inline-flex items-center justify-center p-2 rounded-full bg-white/20 backdrop-blur-sm mb-4`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-1">{title}</h2>
                <p className="text-white/80 text-sm">{fullTitle}</p> */}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eligibility</h3>
                    <p className="text-gray-600 text-sm">{eligibility}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Value</h3>
                    <p className="text-gray-600 text-sm">{value}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                    <p className="text-gray-600 text-sm">{duration}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Assessment</h3>
                    <p className="text-gray-600 text-sm">{assessment}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
              {/* <div>
                <span className="text-gray-600 text-sm">Certification Fee:</span>
                <span className="ml-2 text-xl font-bold">{fee}</span>
              </div> */}
              <Link
                href={`/certifications/${certification.id}/apply`}
                className="px-6 py-2 border border-black rounded-md hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/certificationBanner.png"
            alt="Abstract geometric background"
            fill
            className="object-cover object-right md:object-center"
            priority
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-3xl text-white text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SnB Alliance Certifications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Advance your career with our industry-recognized certifications in bidding and recruitment.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Link
                href="#certification-options"
                className="px-6 py-3 bg-white text-[#39a3b1] font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Explore Certifications
              </Link>
              <Link
                href="#certification-process"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                View Certification Process
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Certification</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certifications provide numerous advantages to help you advance in your career and stand out in the
              industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Cards Section */}
      <section id="certification-options" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certification Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the certification that aligns with your career goals and experience level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certification Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the details of each certification to find the right fit for your career goals.
            </p>
          </div>

          {certifications.map((certification) => (
            <CertificationDetail key={certification.id} certification={certification} />
          ))}
        </div>
      </section>

      {/* Certification Process Section */}
      <section id="certification-process" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certification Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to earn your SnB Alliance certification.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} step={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Exam & Fees Section */}
      <section id="exam-fees" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exam & Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our examination process and certification fees.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left">Certification</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Exam Format</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Duration</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Passing Score</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Fee</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Retake Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">CSBA</td>
                  <td className="border border-gray-200 px-4 py-3">Multiple-choice</td>
                  <td className="border border-gray-200 px-4 py-3">2 hours</td>
                  <td className="border border-gray-200 px-4 py-3">70%</td>
                  <td className="border border-gray-200 px-4 py-3">$299</td>
                  <td className="border border-gray-200 px-4 py-3">$99 per retake</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">CBMP</td>
                  <td className="border border-gray-200 px-4 py-3">Multiple-choice + Case study</td>
                  <td className="border border-gray-200 px-4 py-3">3 hours</td>
                  <td className="border border-gray-200 px-4 py-3">75%</td>
                  <td className="border border-gray-200 px-4 py-3">$499</td>
                  <td className="border border-gray-200 px-4 py-3">$149 per retake</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">CSMP</td>
                  <td className="border border-gray-200 px-4 py-3">Multiple-choice + Practical</td>
                  <td className="border border-gray-200 px-4 py-3">3 hours</td>
                  <td className="border border-gray-200 px-4 py-3">75%</td>
                  <td className="border border-gray-200 px-4 py-3">$499</td>
                  <td className="border border-gray-200 px-4 py-3">$149 per retake</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">CSBL</td>
                  <td className="border border-gray-200 px-4 py-3">Multiple-choice + Case study + Interview</td>
                  <td className="border border-gray-200 px-4 py-3">4 hours</td>
                  <td className="border border-gray-200 px-4 py-3">80%</td>
                  <td className="border border-gray-200 px-4 py-3">$799</td>
                  <td className="border border-gray-200 px-4 py-3">$199 per retake</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">What's Included in the Fee</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Access to study materials and practice exams</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Certification exam fee (first attempt)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Digital badge and certificate upon successful completion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>One year of certification validity</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards professional growth and industry recognition with our certifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/learning"
              className="px-6 py-3 border border-[#0c6978] text-[#0c6978] font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Learning Resources
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#0c6978]  text-white font-medium rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

