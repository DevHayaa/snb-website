"use client"
import Link from "next/link"
import { Download, Award, BookOpen, CheckCircle, ArrowRight, Calendar, Users, BarChart } from "lucide-react"
import LearningPathTabs from "@/components/learning-path-tabs"
import ProgramShowcase from "@/components/program-showcase"
import WorkshopCalendar from "@/components/workshop-calendar"
import TestimonialCarousel from "@/components/testimonial-carousel"
import SmartEnrollment from "@/components/smart-enrollment"
import Image from "next/image"

export default function LearningPage() {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; /* Adjust based on your header height */
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-white md:bg-transparent">
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/learningBanner.png"
              alt="Abstract geometric background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 mix-blend-multiply"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto md:mx-0 text-left">
              <h2 className="text-5xl md:text-5xl lg:text-3xl font-bold mb-4">
                Learning at SnB Alliance
              </h2>
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Bidding & Recruitment Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-700 md:text-teal-600 mb-10">
                Flexible Learning Solutions for Individuals & Organizations
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/learning"
                  className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-400 transition-colors text-lg"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </section>


      {/* Learning Path Cards */}
      <section className="py-16 bg-white" id="learning-paths">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Choose Your Learning Path</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you're an individual looking to advance your career or an organization seeking to upskill your team,
            we have tailored learning solutions for you.
          </p>
          <div className="relative mb-12 max-w-5xl mx-auto">
            <Image
              src="/learningPathBg.jpg"
              alt="Students collaborating on a learning project"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent rounded-lg flex items-center">
              <div className="p-8 max-w-md">
                <h3 className="text-2xl font-bold text-white mb-2">Personalized Learning Experience</h3>
                <p className="text-white/90">
                  Our adaptive learning platform tailors content to your skill level and learning style.
                </p>
              </div>
            </div>
          </div>
          <LearningPathTabs />
        </div>
      </section>

      {/* Interactive Program Showcase */}
      {/* <section className="py-16 bg-gray-50" id="programs">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of certifications, courses, and learning resources designed to help you
            excel in bidding and recruitment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Professional certification training"
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Professional Certifications</h3>
                <p className="text-white/90 mb-4">Industry-recognized credentials to advance your career</p>
                <Link href="/learning/certifications" className="inline-flex items-center text-yellow-400 font-medium">
                  Explore Certifications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Specialized training workshops"
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Specialized Workshops</h3>
                <p className="text-white/90 mb-4">Intensive, hands-on training for specific skills</p>
                <Link href="/learning/workshops" className="inline-flex items-center text-yellow-400 font-medium">
                  Browse Workshops <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <ProgramShowcase />
        </div>
      </section> */}

      {/* Benefits Visualization */}
      <section className="py-16 bg-white" id="learning-journey">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your Learning Journey</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  {/* <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    1
                  </div> */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/enrollmentIcon.png"
                      alt="Enrollment process"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enrollment</h3>
                  <p className="text-gray-600">
                    Choose your certification path or course and enroll with our simple registration process.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  {/* <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    2
                  </div> */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/flexibalIcon.png"
                      alt="Flexible learning options"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Learning</h3>
                  <p className="text-gray-600">
                    Access course materials anytime, anywhere. Learn at your own pace or with an instructor.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  {/* <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    3
                  </div> */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/practicalIcon.png"
                      alt="Practical skills training"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Skills</h3>
                  <p className="text-gray-600">
                    Apply what you've learned through hands-on exercises, case studies, and real-world scenarios.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  {/* <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    4
                  </div> */}
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/certificationIcon.png"
                      alt="Certification achievement"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
                  <p className="text-gray-600">
                    Complete your assessment and earn your industry-recognized certification to advance your career.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-gray-700 font-medium">Career Advancement Rate</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <p className="text-gray-700 font-medium">Certified Professionals</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
                <p className="text-gray-700 font-medium">Exam Success Rate</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Workshop Calendar */}
      <section className="py-16 bg-gray-50" id="workshops">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Upcoming Workshops & Webinars</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our live sessions led by industry experts to deepen your knowledge and network with peers.
          </p>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/webinar.png"
                    alt="Featured workshop on advanced bidding strategies"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium">June 15, 2025 • 10:00 AM - 12:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Bidding Strategies Masterclass</h3>
                  <p className="text-gray-600 mb-6">
                    Join industry expert Sarah Johnson for an in-depth workshop on advanced bidding strategies that will
                    help you win more contracts and improve your success rate.
                  </p>
                  <div className="flex items-center mb-6">
                   
                    <div>
                      <p className="font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Senior Bid Manager, Global Procurement Inc.</p>
                    </div>
                  </div>
                  <Link
                    href="/workshops/advanced-bidding-strategies"
                    className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1] transition-colors"
                  >
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <WorkshopCalendar /> */}
        </div>
      </section>

      {/* Comparison Table */}
      {/* <section className="py-16 bg-white" id="comparison">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Program Comparison</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Compare our learning programs to find the perfect fit for your needs.
          </p>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-semibold text-gray-700 border">Features</th>
                  <th className="p-4 text-center font-semibold text-gray-700 border">Individual Programs</th>
                  <th className="p-4 text-center font-semibold text-gray-700 border">Corporate Programs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium text-gray-700">Learning Format</td>
                  <td className="p-4 border text-center">Self-paced, Instructor-led</td>
                  <td className="p-4 border text-center">Self-paced, Instructor-led, Hybrid, Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium text-gray-700">Access Period</td>
                  <td className="p-4 border text-center">6 months</td>
                  <td className="p-4 border text-center">12 months with renewal options</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium text-gray-700">Support</td>
                  <td className="p-4 border text-center">Email, Community Forum</td>
                  <td className="p-4 border text-center">Dedicated Account Manager, Priority Support</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium text-gray-700">Certification Paths</td>
                  <td className="p-4 border text-center">CSBA, CBMP, CSMP, CSBL</td>
                  <td className="p-4 border text-center">All certifications with team tracking</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium text-gray-700">Practice Exams</td>
                  <td className="p-4 border text-center">2 per certification</td>
                  <td className="p-4 border text-center">Unlimited with analytics</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium text-gray-700">Workshops</td>
                  <td className="p-4 border text-center">Additional fee</td>
                  <td className="p-4 border text-center">Included (4 per year)</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium text-gray-700">Reporting</td>
                  <td className="p-4 border text-center">Personal progress</td>
                  <td className="p-4 border text-center">Team analytics, Compliance tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Testimonial Carousel */}
      <section className="py-16 bg-gray-50 relative" id="testimonials">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from professionals who have transformed their careers with our learning programs.
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Smart Enrollment CTA */}
      {/* <section className="py-16 relative text-white" id="smart-enrollment">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Abstract background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Find Your Perfect Learning Path</h2>
          <p className="text-lg text-center text-blue-100 mb-12 max-w-3xl mx-auto">
            Answer a few questions to get personalized program recommendations tailored to your goals.
          </p>
          <SmartEnrollment />
        </div>
      </section> */}

      {/* Resource Hub */}
      {/* <section className="py-16 bg-white" id="resources">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Resource Hub</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Access free resources to help you get started on your learning journey.
          </p>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="md:flex items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Free e-book on bidding strategies"
                    width={300}
                    height={300}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Free E-Book: Mastering the Art of Bidding</h3>
                  <p className="text-gray-600 mb-6">
                    Download our comprehensive guide to bidding strategies, proposal writing, and winning more
                    contracts. This 50-page e-book is packed with actionable insights from industry experts.
                  </p>
                  <Link
                    href="/resources/ebooks/mastering-bidding"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Download Free E-Book <Download className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mb-4 rounded-lg overflow-hidden w-full h-32 relative">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Course catalogs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Course Catalogs</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides to our certification programs and courses.</p>
              <Link
                href="/resources/catalogs"
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                Download PDF <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mb-4 rounded-lg overflow-hidden w-full h-32 relative">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Sample study materials"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sample Study Materials</h3>
              <p className="text-gray-600 mb-4">Preview our learning content and study resources.</p>
              <Link
                href="/resources/samples"
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                Access Samples <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mb-4 rounded-lg overflow-hidden w-full h-32 relative">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Certification roadmaps"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certification Roadmaps</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides to achieving your certification goals.</p>
              <Link
                href="/resources/roadmaps"
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                View Roadmaps <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mb-4 rounded-lg overflow-hidden w-full h-32 relative">
                <Image src="/placeholder.svg?height=150&width=200" alt="Knowledge base" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Searchable database of FAQs and helpful articles.</p>
              <Link
                href="/resources/knowledge-base"
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
              >
                Search Articles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

