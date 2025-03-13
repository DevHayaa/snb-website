"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  BarChart,
  CheckSquare,
  FileText,
  HelpCircle,
  BookOpen,
  Users,
  Download,
  Calendar,
  Search,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  FileQuestion,
} from "lucide-react"

import CollapsibleFAQComponent from "@/components/collapsibleFaq"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

// Resource categories
const resourceCategories = [
  {
    title: "Industry Insights & Reports",
    description:
      "Stay updated with the latest trends, expert opinions, and forecasts in bidding and recruitment.",
    icon: BarChart,
    href: "/resources/insights",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Best Practices & Guidelines",
    description:
      "Access guides, compliance checklists, and templates for optimal results.",
    icon: CheckSquare,
    href: "/resources/best-practices",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Templates & Tools",
    description:
      "Download ready-to-use templates and access specialized tools for bidding and staffing.",
    icon: FileText,
    href: "/resources/templates",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    title: "FAQs",
    description:
      "Find answers to common questions about certifications, exams, and membership.",
    icon: HelpCircle,
    href: "/resources/faqs",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
]

// Featured tools
const featuredTools = [
  {
    title: "Genrpide",
    description:
      "AI-powered bid generation tool that helps create professional proposals in minutes.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/resources/tools/genrpide",
  },
  {
    title: "Sphere",
    description:
      "Comprehensive staffing software for efficient resource allocation and management.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/resources/tools/sphere",
  },
]

// FAQ data (collapsible)
const faqItems = [
  {
    question: "How do I apply for SnB Alliance certifications?",
    answer:
      "Visit the Certifications page, select your program, click 'Apply Now', and complete the application form.",
  },
  {
    question: "What are the benefits of SnB Alliance membership?",
    answer:
      "Access exclusive resources, discounted certification fees, priority event registration, and more.",
  },
  {
    question: "How can I reschedule my certification exam?",
    answer:
      "Log in to your account, navigate to 'My Exams', and select the reschedule option at least 48 hours in advance.",
  },
]

// Collapsible FAQ Component
function LocalCollapsibleFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)


}

// Page Component
export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#39a3b1] text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Resources Hub</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Access industry insights, tools, templates, and educational content
            to elevate your bidding and recruitment career.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#39a3b1]"
            />
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Resource Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 transition hover:shadow-md ${category.color}`}
              >
                <div className="flex items-start gap-4">
                  <category.icon className="h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                    <Link
                      href={category.href}
                      className="text-[#39a3b1] hover:underline mt-2 block"
                    >
                      Explore <ArrowRight className="h-4 w-4 inline" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl border p-6">
                <h3 className="text-lg font-bold">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <Link
                  href={tool.href}
                  className="text-[#39a3b1] hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
             {/* FAQs */}
        <Card className="container h-full md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center gap-2">
            <FileQuestion className="h-6 w-6" />
            <div>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions about our certifications, membership, and more
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="certification">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="certification">Certification Questions</TabsTrigger>
                <TabsTrigger value="exam">Exam Registration</TabsTrigger>
                <TabsTrigger value="membership">Membership Support</TabsTrigger>
              </TabsList>

              <TabsContent value="certification" className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Do I need to be a member to apply for the certifications?</AccordionTrigger>
                    <AccordionContent>
                      While membership isn't mandatory, members often enjoy benefits such as discounts on exam fees and
                      exclusive access to certain resources. Non-members can still enroll in courses and certifications
                      at standard rates.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I find my eligibility for the certification programs?</AccordionTrigger>
                    <AccordionContent>
                      The eligibility requirements are mentioned in the respective certificate link. You can also
                      contact us via email for further assistance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I apply for a particular certification?</AccordionTrigger>
                    <AccordionContent>
                      Just click on the "Apply Now" link. Doing so will open the particular application form. We request
                      you to fill the form with the correct information to avoid delay.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Do I need to attach any particular document for the certification?
                    </AccordionTrigger>
                    <AccordionContent>No.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can I get a certificate without an exam?</AccordionTrigger>
                    <AccordionContent>
                      No, you need to complete the course duration and then pass the exam to earn certification.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Will I be able to approach the handouts, tutorial and resources after the certification?
                    </AccordionTrigger>
                    <AccordionContent>Yes. All members will have access to the available resources.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="exam" className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What identification should I enroll with?</AccordionTrigger>
                    <AccordionContent>
                      <p>You can use following identification cards while enrolling for the exam:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>National/state/country identification card</li>
                        <li>Government issued driving licence</li>
                        <li>Government issued passport</li>
                      </ul>
                      <p className="mt-2">
                        Please make sure that the information you provide is discrepancy free. In case of any error
                        inform the administration prior to your exam so that your attempt is not wasted and the error
                        can be fixed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I schedule my exam?</AccordionTrigger>
                    <AccordionContent>
                      Click on "schedule my exam". That will drop you with an option of what exam you want to book.
                      Click according to your preference. Schedule at least 48 hours prior to your exam. Don't Forget To
                      Confirm It Via Email Link.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is the cancelation & reschedule policy?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        The exam fee is refundable within 12 months of the day SNB Alliance receives your exam/exam
                        rewrite fee. After that duration the fee is NOT refundable.
                      </p>
                      <p className="mt-2">
                        If you fail to appear in the exam without cancelling or rescheduling it, it will be considered
                        as a No Show attempt. In case of any communication you can contact the administration.
                      </p>
                      <p className="mt-2">
                        To reschedule your exam, the procedure is pretty much the same. Go to book your exam &gt;
                        schedule your exam &gt; change the date
                      </p>
                      <p className="mt-2">
                        NOTE: SNB Alliance requires 2 business days to reschedule the date and send you an email link.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are the exam regulations?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>General rules:</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Sign in to your account with the log in & identification details.</li>
                        <li>Switch on the webcam that focuses you properly in the frame.</li>
                        <li>Login in 30 mins before the starting time & read all the instructions given.</li>
                      </ul>

                      <p className="mt-3">
                        <strong>Specific rules for CSBA:</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>The duration of the exam is 2 hours.</li>
                        <li>There are no breaks during the exam hours.</li>
                        <li>You can just stand up & stretch remaining in the frame of the webcam.</li>
                        <li>
                          You are allowed to carry a water bottle, pen/pencil & a blank paper to make notes during the
                          exam.
                        </li>
                      </ul>

                      <p className="mt-3">
                        <strong>Specific Rules For CBMP, CSMP, CSBL:</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>The duration of the exam is 4 hours.</li>
                        <li>You are allowed to have one break of 15 mins. The timer will not stop during that time.</li>
                        <li>
                          Return after 15 mins and start attempting your exam so that you complete it within the time
                          limit as you will not be given extra time for it.
                        </li>
                        <li>
                          In case you don't return to your exam screen after 15 mins, the assessment will be labelled as
                          "VOID". To attempt the exam later, you will have to schedule it & pay the full fee.
                        </li>
                        <li>
                          You are allowed to carry a water bottle, pen/pencil & a blank paper to make notes during the
                          exam.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="membership" className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I become a member of SnB Alliance?</AccordionTrigger>
                    <AccordionContent>
                      Simply visit our Membership page and choose the membership option that best fits your needs.
                      Complete the registration form, submit payment (if applicable), and you'll receive an email
                      confirming your membership details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What are the benefits of becoming a member?</AccordionTrigger>
                    <AccordionContent>
                      <p>Members gain access to:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Exclusive learning resources and webinars</li>
                        <li>Discounts on certification exam fees</li>
                        <li>Early registration for events and workshops</li>
                        <li>A dedicated community forum for networking</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there a membership fee?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer different membership tiers, each with its own fee structure and benefits. You can
                      find the current pricing and inclusions on our Membership page.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How long does my membership last, and how do I renew it?</AccordionTrigger>
                    <AccordionContent>
                      Most memberships are valid for one year from the date of purchase. Renewal reminders will be sent
                      via email 30 days before your membership expires. You can renew by logging into your account and
                      following the on-screen instructions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can I upgrade my membership tier at any time?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely. If you find that you need more features or perks, you can upgrade your membership by
                      visiting your account settings or contacting our support team.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
    </div>
  )
}
