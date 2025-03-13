import Image from "next/image"
import Link from "next/link"
import { Check, Users, FileText, Award } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// async function getHomePageData() {
//   const res = await fetch("http://localhost/wordpress/wp-json/wp/v2/pages/25");
//   if (!res.ok) {
//     throw new Error("Failed to fetch home page data");
//   }
//   return res.json();
// }

export default async function HomePage() {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/homebanner.png"
            alt="Abstract geometric background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-[#f8a02e] md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
              EMPOWERING PROFESSIONALS IN
              <br />
              BIDDING & RECRUITMENT
            </h1>
            <p className="text-xl text-white mb-10">
              Join SNB Alliance to become a qualified expert in bidding & recruitment with recognized industry
              certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learning/start"
                className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-md hover:bg-[#f8a02e] transition-colors text-lg"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative w-full overflow-hidden py-20">
      {homeData.acf.hero_bg_image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeData.acf.hero_bg_image})` }}
        ></div>
      )}

       <div className="absolute inset-0">
          <Image
            src="/homebanner.png"
            alt="Abstract geometric background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply"></div>
        </div>
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
      <h1
      className="text-3xl md:text-5xl font-bold text-[#f8a02e] mb-4"
      dangerouslySetInnerHTML={{ __html: homeData?.acf?.hero_title || "" }} 
    ></h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
          {homeData.acf.hero_subtitle}
        </p>
        {homeData.acf.button_text && (
          <a
            href="#"
            className="bg-[#f8a02e] hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg rounded"
          >
            {homeData.acf.button_text}
          </a>
        )}
      </div>
    </section> */}

      {/* What is SNB ALLIANCE? Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="rounded-[2rem] overflow-hidden transform rotate-[-2deg]">
                <Image
                  src="/about.png"
                  alt="Students collaborating"
                  width={600}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-teal-700">What is SNB ALLIANCE?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We are a team dedicated to train the qualified people and provide them with a detailed structure to
                  cover the bidding & recruitment industry.
                </p>
                <p>
                  The intellectual property and products behind this idea are the founding body of this alliance who
                  identified the gap between the bidding and recruiting management and brokers.
                </p>
                <p className="font-medium">
                  We aspire that the recruiters & proposal writers be considered as the qualified.
                </p>
                <p>The key idea is to bring the two ends of roles so that they can work peacefully.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-teal-700">Why Us?</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-1 mt-1">
                    <Check className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="text-gray-700">
                    Increase the industrial awareness and expand the tactics of bidding, recruitment, and proposals.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-1 mt-1">
                    <Check className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="text-gray-700">
                    Exams are methodized to assess the skill sets before awarding the certificates.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-1 mt-1">
                    <Check className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="text-gray-700">
                    New members are always welcomed and they are enlightened by the senior members & mentors.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-1 mt-1">
                    <Check className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="text-gray-700">
                    Your career soars with each session and ultimately you evolve into a global leader.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-1 mt-1">
                    <Check className="h-5 w-5 text-teal-700" />
                  </div>
                  <p className="text-gray-700">
                    SNB Alliance is an advanced platform where professional achievers help other professionals to reach
                    their goals.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/whyus.png"
                alt="Student with notebook"
                width={400}
                height={600}
                className="rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Pathways */}
      <section className="py-16 bg-teal-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Certification Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CSBA Card */}
            <div className="border-r border-gray-300 p-6 flex flex-col h-full">
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-white">CSBA</h3>
                <p className="text-sm text-white/80">(Certificate in Bidding & Staffing Associate)</p>
                <p className="text-white/90 text-sm">
                  This foundational certification secures you with the essential knowledge of bidding processes and
                  proposal writing basics. It's perfect for individuals new to the industry.
                </p>
              </div>
              <Link
                href="/certifications/csba"
                className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
              >
                Explore More
              </Link>
            </div>

            {/* CBMP Card */}
            <div className="border-r border-gray-300 p-6 flex flex-col h-full">
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-white">BMP</h3>
                <p className="text-sm text-white/80">(Certificate in Bid & Man-power Professional)</p>
                <p className="text-white/90 text-sm">
                  Aimed at individuals who want to specialize in bid management and manpower allocation. Builds on CSBA
                  with deeper strategic knowledge.
                </p>
              </div>
              <Link
                href="/certifications/cbmp"
                className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
              >
                Explore More
              </Link>
            </div>

            {/* CSMP Card */}
            <div className="border-r border-gray-300 p-6 flex flex-col h-full">
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-white">CSMP</h3>
                <p className="text-sm text-white/80">(Certified Staffing Man-power Professional)</p>
                <p className="text-white/90 text-sm">
                  Designed for resource managers, this certification enhances professional skill sets in staffing
                  optimization and team building.
                </p>
              </div>
              <Link
                href="/certifications/csmp"
                className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
              >
                Explore More
              </Link>
            </div>

            {/* CSBL Card */}
            <div className=" rounded-lg p-6 flex flex-col h-full">
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-white">CSBL</h3>
                <p className="text-sm text-white/80">(Certified Staffing And Bidding Leader)</p>
                <p className="text-white/90 text-sm">
                  Advanced certification for experienced leaders who want to master all aspects of staffing and bidding
                  operations.
                </p>
              </div>
              <Link
                href="/certifications/csbl"
                className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Training */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Learning & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Individuals */}
            <div
              className="bg-yellow-500 p-8 text-white"
              style={{ borderBottomRightRadius: "100px", borderTopLeftRadius: "100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">For Individuals</h3>
              <p className="mb-8">
                Comprehensive learning programs designed to help you thrive in the bidding and recruitment world.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Self-Paced Study</p>
                    <p className="text-sm text-white/80">Learn at your own pace with comprehensive materials.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Instructor-Led Training</p>
                    <p className="text-sm text-white/80">Interactive sessions with industry experts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Mock Exams</p>
                    <p className="text-sm text-white/80">Practice tests to prepare for certification.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Businesses */}
            <div
              className="bg-teal-700 p-8 text-white"
              style={{ borderBottomRightRadius: "100px", borderTopLeftRadius: "100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">For Businesses</h3>
              <p className="mb-8">
                Empower your team with tailored training solutions that align with your business needs.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Customizable Corporate Training</p>
                    <p className="text-sm text-white/80">Programs tailored to your team's needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Team Certification Packages</p>
                    <p className="text-sm text-white/80">Streamlined certification for entire teams.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Compliance Solutions</p>
                    <p className="text-sm text-white/80">Stay compliant with industry standards.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Learning Guidelines</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2rem] p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Prerequisite</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Certification</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Target Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">-</td>
                    <td className="py-4 px-4 font-medium text-teal-700">CSBA</td>
                    <td className="py-4 px-4">Anyone can join</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">CSBA</td>
                    <td className="py-4 px-4 font-medium text-teal-700">CBMP</td>
                    <td className="py-4 px-4">Proposal writers</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">CSBA</td>
                    <td className="py-4 px-4 font-medium text-teal-700">CSMP</td>
                    <td className="py-4 px-4">Resource manager</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">CSBA</td>
                    <td className="py-4 px-4 font-medium text-teal-700">CSBL</td>
                    <td className="py-4 px-4">
                      <ul className="space-y-1">
                        <li>Operational Manager (OM)</li>
                        <li>General Manager (GM)</li>
                        <li>Director Consulting (DC)</li>
                        <li>Account Executive (AE)</li>
                        <li>Business Development Manager (BD)</li>
                        <li>Director (D)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/workshops"
              className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-400 transition-colors"
            >
              Workshops & Webinars
            </Link>
            <Link
              href="/learning"
              className="px-8 py-3 bg-teal-700 text-white font-bold rounded-md hover:bg-teal-600 transition-colors"
            >
              Explore Learning Programs
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

