import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0c6978] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f0932a]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications" className="hover:text-[#f0932a] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-[#f0932a] transition-colors">
                  Learning Programs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#f0932a] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f0932a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f0932a] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f0932a]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-[#f0932a] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#f0932a] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#f0932a] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#f0932a] transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f0932a]">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" aria-label="Facebook" className="hover:text-[#f0932a] transition-colors">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-[#f0932a] transition-colors">
                <Twitter />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-[#f0932a] transition-colors">
                <Linkedin />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[#f0932a] transition-colors">
                <Instagram />
              </Link>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-[#f0932a]">Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#f0932a] text-white rounded-md hover:bg-[#f0932a]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#f0932a]/30 mt-8 pt-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} SnB Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

