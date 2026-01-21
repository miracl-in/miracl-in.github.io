"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* AdSense */}
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

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

            {/* Company */}
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <img src="/favicon.ico" alt="Miraclin Technologies" className="w-10 h-10 mx-auto sm:mx-0 rounded-lg" />
                <div>
                  <span className="text-xl font-bold block">Miraclin Technologies</span>
                  <span className="text-xs text-gray-400 block">
                    Miraclin Technologies Private Limited • CIN: U62099TN2026PTC188323<br />
                    Registered in India
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 max-w-md mx-auto md:mx-0 break-words">
                Empowering the next generation of tech professionals through innovative,
                practical, and affordable learning experiences.
              </p>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed break-words">
                📍 <strong>Corporate Operations & Training Center</strong><br />
                Miraclin Technologies<br />
                No. 35 &amp; 36, 1st Floor<br />
                Infant Jesus Commercial Complex<br />
                Near Infant Jesus Church, Pudukottai Road<br />
                Thanjavur - 613005
              </p>

              <p className="text-gray-300 text-sm break-words">
                📧 <a href="mailto:miraclintech@gmail.com" className="hover:text-white block">miraclintech@gmail.com</a>
                📞 <a href="tel:+919543813232" className="hover:text-white block">+91 95438 13232</a>
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["/courses","/about","/team","/career","/faq","/contact","/sitemap.xml"].map((l,i)=>(
                  <li key={i}><a href={l} className="block text-gray-300 hover:text-white">{l.replace("/","") || "Home"}</a></li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="block text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/cookies" className="block text-gray-300 hover:text-white">Cookie Policy</a></li>
                <li><a href="/privacy#terms-of-service" className="block text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/privacy#refund-policy" className="block text-gray-300 hover:text-white">Refund Policy</a></li>
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

      {showScrollTop && (
        <button onClick={scrollToTop} aria-label="Scroll to top"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
          p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white
          rounded-full shadow-lg transition-transform hover:scale-110">
          ↑
        </button>
      )}
    </>
  )
}
