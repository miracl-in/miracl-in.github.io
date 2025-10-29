export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your tech career? Contact us for personalized guidance and course recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@---------.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSduVlTEm5Ex5GXjYkvb3eXtRrYC8mqB6msjH-AnTzGc9g446Q/viewform?embedded=true" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Prefer to fill out the form in a new tab?</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSduVlTEm5Ex5GXjYkvb3eXtRrYC8mqB6msjH-AnTzGc9g446Q/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Open Google Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
