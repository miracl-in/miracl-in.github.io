const courses = [
  {
    id: 1,
    name: "Python + DevSecOps",
    description: "Master Python programming with DevSecOps practices. Learn secure coding, automated testing, and security integration in CI/CD pipelines.",
    duration: "3 months",
    price: "₹3,500"
  },
  {
    id: 2,
    name: "DevSecOps + Cloud Computing",
    description: "Comprehensive DevSecOps with cloud security. Learn to secure cloud infrastructure and implement security automation.",
    duration: "3 months", 
    price: "₹4,000"
  },
  {
    id: 3,
    name: "Next.js + DevOps",
    description: "Build modern web applications with Next.js and deploy them using DevOps best practices with deployment automation.",
    duration: "3 months",
    price: "₹3,500"
  }
]

export default function CourseSection() {
  return (
    <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of technology courses designed to advance your career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/70 transition-all duration-500 p-8 flex flex-col justify-between h-full ring-1 ring-gray-100/50 dark:ring-gray-700/50 hover:ring-blue-300/60 hover:-translate-y-2 group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-400">
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400">
                    {course.price}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3 mb-6">
                  {course.description}
                </p>
              </div>

              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/courses" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  )
}
