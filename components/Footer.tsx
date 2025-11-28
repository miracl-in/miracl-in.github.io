export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">Miraclin Technologies</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the next generation of tech professionals through innovative, practical, and affordable learning experiences.
            </p>
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
              <li><a href="/career" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/privacy#terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy#refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Miraclin Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
