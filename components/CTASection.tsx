export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Tech Career?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have accelerated their careers with our expert-led training programs. 
          Start your journey today and unlock your potential in the tech industry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#courses" 
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Courses
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Get Free Consultation
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <div className="text-xl font-bold">Expert Instructors</div>
            <div className="text-blue-100 text-sm">Industry professionals</div>
          </div>
          <div className="text-white">
            <div className="text-xl font-bold">Flexible Learning</div>
            <div className="text-blue-100 text-sm">Learn at your pace</div>
          </div>
          <div className="text-white">
            <div className="text-xl font-bold">Career Support</div>
            <div className="text-blue-100 text-sm">Job placement assistance</div>
          </div>
        </div>
      </div>
    </section>
  )
}