export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to improve your experience on our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2026
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
          
          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">What are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience and analyze how our site is used.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-700">
                  Required for the website to function properly. These cannot be disabled and include session management and security features.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
                <p className="text-gray-700">
                  Help us understand how visitors interact with our website by collecting anonymous information about page visits and user behavior.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                <p className="text-gray-700">
                  Remember your preferences and settings to provide a personalized experience across visits.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Managing Your Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies individually or all at once</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies from being set</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Note: Disabling cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Google Analytics (for website analytics)</li>
              <li>Social media plugins</li>
              <li>Content delivery networks</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about our cookie policy, please contact us at{' '}
              <a href="mailto:miraclintech@gmail.com" className="text-blue-600 hover:underline">
                miraclintech@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
