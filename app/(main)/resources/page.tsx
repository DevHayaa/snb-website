import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"

// Resource categories data
const resourceCategories = [
  {
    title: "Industry Insights & Reports",
    description: "Stay updated with the latest trends, expert opinions, and forecasts in bidding and recruitment.",
    icon: BarChart,
    href: "/resources/insights",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    items: [
      { title: "Market Trends", href: "/resources/insights/market-trends" },
      { title: "Expert Opinions", href: "/resources/insights/expert-opinions" },
      { title: "Industry Forecasts", href: "/resources/insights/forecasts" },
    ],
  },
  {
    title: "Best Practices & Guidelines",
    description: "Access comprehensive guides, compliance checklists, and process templates for optimal results.",
    icon: CheckSquare,
    href: "/resources/best-practices",
    color: "bg-green-50 text-green-700 border-green-200",
    items: [
      { title: "Compliance Checklists", href: "/resources/best-practices/compliance" },
      { title: "Process Templates", href: "/resources/best-practices/templates" },
      { title: "Standard Operating Procedures", href: "/resources/best-practices/sops" },
    ],
  },
  {
    title: "Templates & Tools",
    description: "Download ready-to-use templates and access specialized tools for bidding and staffing.",
    icon: FileText,
    href: "/resources/templates",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    items: [
      { title: "Bidding Templates", href: "/resources/templates/bidding" },
      { title: "Staffing Tools", href: "/resources/templates/staffing" },
      { title: "Assessment Frameworks", href: "/resources/templates/assessment" },
    ],
  },
  {
    title: "FAQs",
    description: "Find answers to common questions about certifications, exams, membership, and more.",
    icon: HelpCircle,
    href: "/resources/faqs",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    items: [
      { title: "Certification Questions", href: "/resources/faqs/certification" },
      { title: "Exam Registration", href: "/resources/faqs/exams" },
      { title: "Membership Support", href: "/resources/faqs/membership" },
    ],
  },
  {
    title: "Blog & Articles",
    description: "Read insightful articles, success stories, and educational content from industry experts.",
    icon: BookOpen,
    href: "/resources/blog",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    items: [
      { title: "Latest Articles", href: "/resources/blog/latest" },
      { title: "Success Stories", href: "/resources/blog/success-stories" },
      { title: "Educational Content", href: "/resources/blog/educational" },
    ],
  },
  {
    title: "Community & Networking",
    description: "Connect with peers, join forums, and participate in webinars and events.",
    icon: Users,
    href: "/resources/community",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    items: [
      { title: "Upcoming Webinars", href: "/resources/community/webinars" },
      { title: "Discussion Forums", href: "/resources/community/forums" },
      { title: "Networking Events", href: "/resources/community/events" },
    ],
  },
]

// Featured tools data
const featuredTools = [
  {
    title: "Genrpide",
    description: "AI-powered bid generation tool that helps create professional proposals in minutes.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/resources/tools/genrpide",
  },
  {
    title: "Sphere",
    description: "Comprehensive staffing software for efficient resource allocation and management.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/resources/tools/sphere",
  },
  {
    title: "BidTracker Pro",
    description: "Track and manage your bidding process from submission to award with detailed analytics.",
    image: "/placeholder.svg?height=200&width=300",
    href: "/resources/tools/bidtracker",
  },
]

// Recent blog posts data
const recentBlogPosts = [
  {
    title: "5 Strategies to Win More Bids in 2023",
    excerpt:
      "Learn the latest techniques and approaches to improve your bid success rate in today's competitive market.",
    image: "/placeholder.svg?height=150&width=250",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    href: "/resources/blog/strategies-to-win-bids",
  },
  {
    title: "The Future of Recruitment: AI and Human Touch",
    excerpt:
      "Discover how artificial intelligence is transforming recruitment while maintaining the essential human element.",
    image: "/placeholder.svg?height=150&width=250",
    date: "May 28, 2023",
    author: "Michael Chen",
    href: "/resources/blog/future-of-recruitment",
  },
  {
    title: "Compliance Challenges in International Bidding",
    excerpt:
      "Navigate the complex landscape of international regulations and compliance requirements in global bidding.",
    image: "/placeholder.svg?height=150&width=250",
    date: "April 10, 2023",
    author: "David Rodriguez",
    href: "/resources/blog/international-compliance",
  },
]

// Upcoming events data
const upcomingEvents = [
  {
    title: "Mastering the RFP Response Process",
    type: "Webinar",
    date: "July 20, 2023",
    time: "2:00 PM - 3:30 PM EST",
    href: "/resources/events/rfp-response-webinar",
  },
  {
    title: "Staffing Optimization Workshop",
    type: "Virtual Workshop",
    date: "August 5, 2023",
    time: "10:00 AM - 12:00 PM EST",
    href: "/resources/events/staffing-workshop",
  },
  {
    title: "Q3 Industry Trends Discussion",
    type: "Panel Discussion",
    date: "August 18, 2023",
    time: "1:00 PM - 2:30 PM EST",
    href: "/resources/events/q3-trends-panel",
  },
]

// FAQ items data
const faqItems = [
  {
    question: "How do I apply for SnB Alliance certifications?",
    answer:
      "To apply for our certifications, visit the Certifications page, select your desired program, and click 'Apply Now'. You'll need to create an account, complete the application form, and pay the certification fee.",
  },
  {
    question: "What are the benefits of SnB Alliance membership?",
    answer:
      "Membership benefits include access to exclusive resources, discounted certification fees, priority registration for events, networking opportunities, and continuous professional development resources.",
  },
  {
    question: "How can I reschedule my certification exam?",
    answer:
      "You can reschedule your exam through your member dashboard up to 48 hours before your scheduled exam time. Log in to your account, navigate to 'My Exams', and select the reschedule option.",
  },
  {
    question: "Are the templates and tools free to use?",
    answer:
      "Basic templates are available to all visitors, while premium tools and advanced templates are exclusive to members. Different membership tiers offer access to various resources.",
  },
]

// Resource Category Card Component
function ResourceCategoryCard({ category }: { category: (typeof resourceCategories)[0] }) {
  const { title, description, icon: Icon, href, color, items } = category

  return (
    <div className={`rounded-xl border p-6 transition-all hover:shadow-md ${color}`}>
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-white p-2 shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <ul className="space-y-1 mb-4">
            {items.map((item, index) => (
              <li key={index} className="text-sm">
                <Link href={item.href} className="flex items-center hover:underline">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={href} className="inline-flex items-center text-sm font-medium hover:underline">
            View All Resources <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Featured Tool Card Component
function FeaturedToolCard({ tool }: { tool: (typeof featuredTools)[0] }) {
  const { title, description, image, href } = tool

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={href} className="text-[#39a3b1] hover:text-[#39a3b1]/80 text-sm font-medium flex items-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href={`${href}/download`}
            className="flex items-center text-sm font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md"
          >
            <Download className="h-4 w-4 mr-1" /> Download
          </Link>
        </div>
      </div>
    </div>
  )
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: (typeof recentBlogPosts)[0] }) {
  const { title, excerpt, image, date, author, href } = post

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <Link href={href} className="text-[#39a3b1] hover:text-[#39a3b1]/80 text-sm font-medium flex items-center">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

// Event Card Component
function EventCard({ event }: { event: (typeof upcomingEvents)[0] }) {
  const { title, type, date, time, href } = event

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-b-0">
      <div className="bg-[#f0932a]/10 text-[#f0932a] p-2 rounded-lg">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-2">{type}</span>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {date} • {time}
        </p>
        <Link href={href} className="text-[#39a3b1] hover:text-[#39a3b1]/80 text-sm font-medium flex items-center">
          Register Now <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

// FAQ Item Component
function FaqItem({ faq, index }: { faq: (typeof faqItems)[0]; index: number }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0 py-4">
      <h3 className="font-bold text-gray-800 mb-2">
        <span className="text-[#39a3b1] mr-2">{index + 1}.</span>
        {faq.question}
      </h3>
      <p className="text-gray-600 text-sm">{faq.answer}</p>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#39a3b1]">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Abstract background"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources Hub</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Access industry insights, tools, templates, and educational content to elevate your bidding and
              recruitment career.
            </p>
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for resources, templates, articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#39a3b1]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resource Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources designed to support your professional growth in bidding
              and recruitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <ResourceCategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized tools designed to streamline your bidding and staffing processes for optimal efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool, index) => (
              <FeaturedToolCard key={index} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/resources/tools"
              className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
            >
              View All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog and Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentBlogPosts.map((post, index) => (
                  <BlogPostCard key={index} post={post} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/resources/blog"
                  className="inline-flex items-center text-[#39a3b1] hover:text-[#39a3b1]/80 font-medium"
                >
                  View All Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/resources/events"
                  className="inline-flex items-center text-[#39a3b1] hover:text-[#39a3b1]/80 font-medium"
                >
                  View All Events <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our resources, certifications, and membership.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-6">
            {faqItems.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/resources/faqs"
              className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
            >
              View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#39a3b1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Professional Skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SnB Alliance today to access premium resources, tools, and certifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/join"
              className="px-6 py-3 bg-[#f0932a] text-white font-medium rounded-md hover:bg-[#f0932a]/90 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/certifications"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Certifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

