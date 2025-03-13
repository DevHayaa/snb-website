import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Building,
  Globe,
  GraduationCap,
  HandshakeIcon,
  LightbulbIcon,
  Mail,
  MapPin,
  Phone,
  Users,
  CheckCircle,
} from "lucide-react"

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in recruitment and bidding, Sarah founded SnB Alliance with a vision to transform the industry.",
  },
  {
    name: "Michael Chen",
    role: "Chief Learning Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "An expert in educational technology and professional development, Michael leads our learning initiatives.",
  },
  {
    name: "David Rodriguez",
    role: "Head of Certifications",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David brings 12 years of certification program development experience to ensure our standards remain industry-leading.",
  },
]

// Job openings data
const jobOpenings = [
  {
    title: "Program Coordinator",
    description: "Assist in the development and management of our certification programs.",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Marketing Specialist",
    description: "Help promote our offerings and engage the community.",
    type: "Full-time",
    location: "Hybrid",
  },
  {
    title: "Instructional Designer",
    description: "Create and develop learning materials for both online and in-person training.",
    type: "Contract",
    location: "Remote",
  },
]

// News & announcements data
const announcements = [
  {
    title: "New Certification Launch",
    date: "March 15, 2025",
    description: "Introducing our advanced level certification for bidding professionals.",
    link: "/news/new-certification",
  },
  {
    title: "Partnership Announcement",
    date: "March 10, 2025",
    description: "Strategic partnership with Global Recruitment Association.",
    link: "/news/partnership",
  },
  {
    title: "Upcoming Workshop Series",
    date: "March 5, 2025",
    description: "Join our expert-led workshop series on advanced bidding strategies.",
    link: "/news/workshop-series",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[80vh] flex items-center bg-[#007b8f] md:bg-transparent">
  {/* Background Image - Visible Only on Medium & Larger Screens */}
  <div className="inset-0 overflow-hidden hidden md:block">
    <div className=" inset-0 bg-black/50" /> {/* Dark overlay for contrast */}
    <Image
      src="/aboutBanner.png"
      alt="Team collaboration"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </div>

  {/* Content Wrapper */}
  <div className="relative container mx-auto px-6 md:px-12">
    <div className="max-w-2xl text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">WHO WE ARE</h1>
      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
        SnB Alliance is a non-profit organization dedicated to setting standards and providing 
        certifications in the bidding and recruitment industries. Through our comprehensive programs 
        and resources, we empower professionals to excel in their careers.
      </p>
    </div>
  </div>
</section>


      {/* Mission & Vision Section */}
      <section className="py-16 bg-white" id="mission-vision">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {/* Mission */}
            <div className="bg-teal-700 rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal-600/30 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">MISSION</h2>
                  <p className="text-white/90">
                    To empower individuals and organizations by providing accessible, credible certifications and
                    training programs, thereby creating a more skilled, confident workforce in bidding and recruitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-yellow-500 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">VISION</h2>
                  <p className="text-white/90">
                    To become the global benchmark for excellence in staffing and bidding, recognized for fostering
                    innovation, collaboration, and professional growth.
                  </p>
                </div>
                <div className="w-16 h-16 bg-yellow-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LightbulbIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50" id="what-we-do">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">WHAT WE DO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
              <p className="text-gray-600 mb-4">
                We offer a range of certifications designed to validate expertise and enhance career prospects in
                bidding and recruitment.
              </p>
              <Link
                href="/certifications"
                className="text-[#39a3b1] hover:text-teal-dark font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Learning & Training */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learning & Training</h3>
              <p className="text-gray-600 mb-4">
                Through interactive and hands-on sessions, we provide comprehensive training to help professionals excel
                in their roles.
              </p>
              <Link
                href="/learning"
                className="text-[#39a3b1] hover:text-teal-dark font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Resources & Community */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resources & Community</h3>
              <p className="text-gray-600 mb-4">
                Our resource hub, coupled with a vibrant community, provides ongoing support and networking
                opportunities.
              </p>
              <Link
                href="/resources"
                className="text-[#39a3b1] hover:text-teal-dark font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#39a3b1] mb-6">Founding Team</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                Driven by years of hands-on experience, our founders created SnB Alliance with a shared passion for
                improving standards across the bidding and recruitment sectors. Their vision and expertise guide our
                offerings, ensuring we provide relevant, high-quality programs.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/foundingTeam.jpg"
                alt="SnB Alliance founding team collaborating on projects"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="py-16 bg-gray-50" id="partners">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="/partners.jpg"
                alt="Business partners shaking hands during a meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partners & Collaborations</h2>
              <p className="text-gray-600 mb-6">
                We're actively forging partnerships with educational institutions, industry associations, and leading
                organizations. These collaborations help us expand our reach, enhance our curriculum, and connect our
                community with opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Educational Partners</h3>
                    <p className="text-gray-600">Leading universities and training institutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <HandshakeIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Industry Associations</h3>
                    <p className="text-gray-600">Professional bodies and trade organizations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Global Network</h3>
                    <p className="text-gray-600">International recruitment and bidding firms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <section className="py-16 bg-[#FFF3E0] relative" id="careers">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 pb-32">
            {" "}
            {/* Added more padding at the bottom */}
            {/* Join Our Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Join Our Mission</h2>
              </div>
              <p className="text-gray-800">
                SnB Alliance is always looking for passionate professionals who share our vision of elevating the
                bidding and recruitment industries. As a growing nonprofit, we offer an environment where your ideas can
                make a real impact.
              </p>
            </div>
            {/* Why Work With Us */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Why Work With Us?</h2>
              </div>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Meaningful Impact: Be part of a team dedicated to empowering individuals and businesses.</li>
                <li>Collaborative Culture: Work alongside thought leaders and industry experts.</li>
                <li>Professional Growth: Access to ongoing training and certification opportunities.</li>
              </ul>
            </div>
            {/* Current Openings */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Current Openings</h2>
              </div>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Program Coordinator: Assist in the development and management of our certification programs.</li>
                <li>Marketing Specialist: Help promote our offerings and engage the community.</li>
                <li>
                  Instructional Designer: Create and refine learning materials for both online and in-person training.
                </li>
              </ul>
            </div>
          </div>

          {/* How to Apply - positioned to extend outside the section */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-3xl">
            <div className="bg-[#d3e3fd] border border-gray-700 rounded-2xl p-8 text-center shadow-lg mx-4">
              <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
              <p className="text-gray-800">
                Send your resume and a brief cover letter detailing your interest in SnB Alliance to
                careers@snballiance.org. If we think you're a good fit, we'll reach out to schedule an interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements Section - added margin-top to accommodate the overlapping card */}
      <section className="py-16 bg-[#F5F5F5] mt-16" id="news">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">News & Announcements</h2>
            <h3 className="text-xl font-semibold text-[#333333] mb-4">
              Stay Informed with the Latest from SnB Alliance
            </h3>
            <p className="text-[#666666] mb-12 max-w-3xl mx-auto">
              Keep track of our latest initiatives, partnerships, and program launches. Whether you're a member, future
              candidate, or industry partner, our updates will ensure you're always in the loop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center px-6 py-8 relative">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Upcoming Certifications:</h4>
              <p className="text-[#666666]">
                Be among the first to learn about new courses and special early-bird registrations.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-3/4 bg-[#E5E5E5] -translate-y-1/2"></div>
            </div>
            <div className="text-center px-6 py-8 relative">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">New Collaborations:</h4>
              <p className="text-[#666666]">
                Discover our latest partnerships with educational institutions, companies, and industry experts
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-3/4 bg-[#E5E5E5] -translate-y-1/2"></div>
            </div>
            <div className="text-center px-6 py-8 relative">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Community Spotlights:</h4>
              <p className="text-[#666666]">
                Celebrate the achievements of standout members and read success stories that inspire.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-3/4 bg-[#E5E5E5] -translate-y-1/2"></div>
            </div>
            <div className="text-center px-6 py-8">
              <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Event Highlights:</h4>
              <p className="text-[#666666]">
                Recap our recent workshops, webinars, and conferences, and find out when the next event is happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@snballiance.org</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) XXX-XXXX</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Global Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

