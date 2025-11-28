export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your tech career? Contact us for personalized guidance and course recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">miraclintech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 6381612228</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Miraclin Technologies<br />
                    No. 35 & 36, 1st Floor<br />
                    Infant Jesus Commercial Complex<br />
                    Near Infant Jesus Church, Pudukottai Road<br />
                    Thanjavur - 613005
                  </p>
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
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <div className="space-y-6">
              <div className="text-center p-6 md:p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-200">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Contact Form</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">Fill out our detailed contact form to get personalized course recommendations and career guidance.</p>
                
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSduVlTEm5Ex5GXjYkvb3eXtRrYC8mqB6msjH-AnTzGc9g446Q/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  Open Contact Form
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Personalized course recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Free career consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No spam, just helpful guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
