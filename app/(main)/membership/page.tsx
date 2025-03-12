import Image from "next/image"
import Link from "next/link"
import { Check, Globe, TrendingUp, FileText, Users, Trophy, ArrowRight, Calendar } from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src=""
            alt="Abstract geometric background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#39a3b1]/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to be a boss; Think like One</h1>
            <p className="text-xl text-white/90 mb-10">
              Be a member of a community of like-minded people who are extremely professional and are highly supportive
              to you in attaining your career goals.
            </p>
            <Link
              href="#join"
              className="inline-block px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors text-lg"
            >
              Be A Member
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white" id="benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should I Join?</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">MEMBERSHIP BENEFITS</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Network Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="network"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Create your web</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  In the modern world it is extremely important to have connections & contacts, so develop your network
                  by joining as a member to collaborate with people who are practising strategies day in & day out.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Career Growth Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="career"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Professional surge</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Grow in your profession and get immense ideas to explore new opportunities. It's high time to take
                  charge of your career.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Resources Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="resources"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Scroll freely through the resources provided to our members. Easily stay up to date with the
                  industrial trends and shift by our provided material.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Leadership Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="leadership"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Leadership</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Evolve as a leader and pioneer by the guidance of SNB Alliance and by participating in various
                  activities that our membership club offers.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      {/* <section className="py-16 bg-gray-50" id="plans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the membership plan that best fits your professional needs and career goals.
            </p>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 text-center">Basic</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Access to member resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Community forum access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Monthly newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Discounts on certifications</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-center text-gray-800 font-medium rounded-md transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#39a3b1] transform scale-105">
              <div className="p-6 bg-[#39a3b1] border-b border-[#39a3b1]">
                <h3 className="text-xl font-bold text-white text-center">Professional</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-white/80">/year</span>
                </div>
                <div className="mt-2 bg-white/20 text-white text-xs text-center py-1 px-2 rounded-full mx-auto w-max">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">All Basic features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Priority access to events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quarterly career coaching</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced networking tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Exclusive webinars</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/register?plan=professional"
                    className="block w-full py-3 px-4 bg-[#39a3b1] hover:bg-[#2d8a96] text-center text-white font-medium rounded-md transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 text-center">Executive</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-gray-900">$349</span>
                  <span className="text-gray-600">/year</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">All Professional features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">1-on-1 executive mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Leadership development program</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">VIP industry events access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Featured profile in directory</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/register?plan=executive"
                    className="block w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-center text-gray-800 font-medium rounded-md transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Bid Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Joining the SnB Alliance membership has been transformative for my career. The networking opportunities
                and resources have helped me secure multiple high-value contracts."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Recruitment Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The professional development resources and leadership training have accelerated my growth. I've been
                promoted twice since becoming a member!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Rodriguez</h4>
                  <p className="text-sm text-gray-600">Operations Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The executive membership has connected me with industry leaders and mentors who have helped shape my
                leadership style and strategic thinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-[#39a3b1] text-white" id="join">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8">Join our community of professionals and take your career to the next level.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors text-lg"
              >
                Become a Member
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-md hover:bg-white/20 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I become a member?</h3>
                <p className="text-gray-600">
                  You can become a member by selecting a membership plan and completing the registration process. Once
                  your application is approved, you'll have immediate access to member benefits.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What are the benefits of membership?</h3>
                <p className="text-gray-600">
                  Membership benefits include networking opportunities, professional development resources, exclusive
                  events, career advancement support, and leadership development programs.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade my membership plan?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade your membership plan at any time. The difference in price will be prorated based
                  on the remaining time in your current membership period.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a corporate membership option?</h3>
                <p className="text-gray-600">
                  Yes, we offer corporate membership packages for organizations. Please contact our membership team for
                  more information on corporate rates and benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add an "events" section with the correct ID */}
      {/* Add this after the FAQ section */}
      <section className="py-16 bg-gray-50" id="events">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Member Events</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">June 15, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Networking Mixer</h3>
                <p className="text-gray-600 mb-4">
                  Connect with fellow members and industry professionals in a relaxed setting.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>7:00 PM - 9:00 PM EST</span>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">July 10, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Develop essential leadership skills with our expert-led interactive workshop.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>1:00 PM - 4:00 PM EST</span>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">August 5, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Panel Discussion</h3>
                <p className="text-gray-600 mb-4">
                  Hear insights from industry leaders on the future of bidding and recruitment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>11:00 AM - 12:30 PM EST</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/membership/events"
                className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
              >
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add a "stories" section with the correct ID */}
      {/* Add this after the events section */}
      <section className="py-16 bg-white" id="stories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Success Stories</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Success Story 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Professional in a meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">From Associate to Director in 3 Years</h3>
                  <p className="text-gray-600 mb-4">
                    "The mentorship and resources I received as a member helped me advance rapidly in my career. The
                    leadership training was particularly valuable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Jennifer Lee</p>
                      <p className="text-sm text-gray-600">Director of Operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Professional giving presentation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Doubled Win Rate on Bids</h3>
                  <p className="text-gray-600 mb-4">
                    "The specialized resources and networking opportunities helped me refine my bidding strategies and
                    significantly improve our success rate."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Marcus Johnson</p>
                      <p className="text-sm text-gray-600">Senior Bid Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/membership/success-stories"
                className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
              >
                Read More Success Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

