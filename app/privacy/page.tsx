export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy & Terms
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your privacy and trust are important to us. Learn how we protect your data and our terms of service.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: January 2024
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a href="#privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
            <a href="#terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
            <a href="#data-protection" className="text-blue-600 dark:text-blue-400 hover:underline">Data Protection</a>
            <a href="#refund-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Refund Policy</a>
          </div>
        </div>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information (name, email, phone number) provided during registration</li>
                  <li>Payment information processed securely through our payment partners</li>
                  <li>Learning progress and course completion data</li>
                  <li>Device and browser information for platform optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our educational services</li>
                  <li>Process payments and manage your account</li>
                  <li>Send course updates and important notifications</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Analyze platform usage to enhance user experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Security</h3>
                <p>We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms-of-service" className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Course Access</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Course access is granted upon successful payment</li>
                  <li>Access remains valid for the duration specified in your course package</li>
                  <li>Sharing login credentials is strictly prohibited</li>
                  <li>Course materials are for personal use only and cannot be redistributed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">User Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate information during registration</li>
                  <li>Maintain confidentiality of your account credentials</li>
                  <li>Use the platform respectfully and lawfully</li>
                  <li>Report any technical issues or security concerns promptly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Intellectual Property</h3>
                <p>All course content, including videos, materials, and assessments, are the intellectual property of Miraclin Technologies and are protected by copyright laws.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section id="data-protection" className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Data Protection</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Your Rights</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your account and associated data</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent for marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data Retention</h3>
                <p>We retain your personal data only as long as necessary to provide our services and comply with legal obligations. Course progress data is retained for 2 years after course completion.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Third-Party Services</h3>
                <p>We use trusted third-party services for payments, analytics, and communication. These partners are bound by strict data protection agreements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section id="refund-policy" className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Refund Policy</h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7-Day Money-Back Guarantee</h3>
                <p>We offer a full refund within 7 days of course enrollment if you're not satisfied with the course content or quality.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Refund Conditions</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Refund requests must be made within 7 days of enrollment</li>
                  <li>Course completion should be less than 25%</li>
                  <li>Refunds are processed within 5-7 business days</li>
                  <li>Processing fees may apply for certain payment methods</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Non-Refundable Items</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Certificates and credentials already issued</li>
                  <li>One-on-one mentoring sessions already conducted</li>
                  <li>Physical materials or hardware (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Questions About Our Policies?</h2>
          <p className="mb-6 opacity-90">Contact our legal team for any questions about privacy, terms, or data protection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
            <a href="mailto:legal@miraclintech.com" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Email Legal Team
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
