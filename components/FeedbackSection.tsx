const feedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "Full Stack Development",
    comment: "This course exceeded my expectations and provided practical skills I use daily in my work. The instructors were knowledgeable and supportive throughout the journey.",
    date: "November 2023",
    track: "PREMIUM"
  },
  {
    id: 2,
    name: "Michael Chen",
    course: "Data Science & Analytics", 
    comment: "The hands-on approach and real-world projects helped me transition into a data analyst role. Highly recommend for anyone looking to break into tech.",
    date: "October 2023",
    track: "STANDARD"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    course: "Cloud Computing (AWS)",
    comment: "Excellent preparation for AWS certification. The practical labs and expert guidance made complex concepts easy to understand and apply.",
    date: "December 2023",
    track: "PREMIUM"
  }
]

export default function FeedbackSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Success Stories from Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how our comprehensive training programs have empowered professionals to advance their careers and achieve their goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                index === 1 ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-100 hover:border-blue-600/30 hover:shadow-lg'
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-600 text-base leading-relaxed mb-8 font-medium">
                "{feedback.comment}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-15 h-15 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                  {feedback.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {feedback.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Graduate • {feedback.course}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {feedback.date}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  {feedback.track} TRACK
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Expert</div>
              <div className="text-blue-100">Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Learning Support</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  )
}
