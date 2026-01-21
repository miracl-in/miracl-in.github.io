"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show / hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initialize AdSense safely
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* AdSense - Above Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block", minHeight: "200px" }}
            data-ad-client="ca-pub-1999706408810094"
            data-ad-slot="4965524167"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/favicon.ico"
                  alt="Miraclin Technologies"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <span className="text-xl font-bold block">
                    Miraclin Technologies
                  </span>
                  <span className="text-xs text-gray-400">
                    Miraclin Technologies Private Limited<br />
                    CIN: U62099TN2026PTC188323<br />
                    Registered in India
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 max-w-md">
                Empowering the next generation of tech professionals through
                innovative, practical, and affordable learning experiences.
              </p>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                📍 <strong>Corporate Operations & Training Center</strong><br />
                Miraclin Technologies<br />
                No. 35 &amp; 36, 1st Floor<br />
                Infant Jesus Commercial Complex<br />
                Near Infant Jesus Church, Pudukottai Road<br />
                Thanjavur - 613005
              </p>

              <p className="text-gray-300 text-sm">
                📧 <a href="mailto:miraclintech@gmail.com" className="hover:text-white">miraclintech@gmail.com</a><br />
                📞 <a href="tel:+919543813232" className="hover:text-white">+91 95438 13232</a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/courses" className="text-gray-300 hover:text-white">Courses</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/team" className="text-gray-300 hover:text-white">Team</a></li>
                <li><a href="/career" className="text-gray-300 hover:text-white">Career</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="/sitemap.xml" className="text-gray-300 hover:text-white">Sitemap</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
                <li><a href="/privacy#terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy#refund-policy" className="text-gray-300 hover:text-white">Refund Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Miraclin Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
          p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white
          rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}
