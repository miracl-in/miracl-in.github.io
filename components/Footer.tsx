"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* AdSense - Above Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1999706408810094"
          data-ad-slot="4965524167"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/favicon.ico" 
                  alt="Miraclin Technologies" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="text-xl font-bold">Miraclin Technologies</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering the next generation of tech professionals through innovative, practical, and affordable learning experiences.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300 text-sm">
                  📍 Miraclin Technologies<br />
                  No. 35 & 36, 1st Floor<br />
                  Infant Jesus Commercial Complex<br />
                  Near Infant Jesus Church, Pudukottai Road<br />
                  Thanjavur - 613005
                </p>
              </div>
              <div className="flex gap-4">
                <a href="mailto:miraclintech@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  📧 miraclintech@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="/career" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/sitemap.xml" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/privacy#terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy#refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Miraclin Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}
