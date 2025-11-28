const courses = [
  {
    id: 1,
    name: "Python + DevSecOps",
    description: "Master Python programming with DevSecOps practices. Learn secure coding, automated testing, and security integration in CI/CD pipelines.",
    duration: "3 months",
    price: "₹3,500",
    features: ["Python Programming", "Security Testing", "CI/CD Security", "Vulnerability Assessment", "Secure Code Review"],
    instructor: "fsociety.in",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    name: "DevSecOps + Cloud Computing",
    description: "Comprehensive DevSecOps with cloud security. Learn to secure cloud infrastructure, implement security automation, and manage cloud compliance.",
    duration: "3 months", 
    price: "₹4,000",
    features: ["Cloud Security", "Infrastructure Security", "Compliance Automation", "Security Monitoring", "Incident Response"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Next.js + DevOps",
    description: "Build modern web applications with Next.js and deploy them using DevOps best practices. Master full-stack development with deployment automation.",
    duration: "3 months",
    price: "₹3,500",
    features: ["Next.js Framework", "React Development", "CI/CD Pipelines", "Docker Deployment", "Cloud Hosting"],
    instructor: "fsociety.in",
    level: "Beginner to Intermediate"
  },
  {
    id: 4,
    name: "Solidity + Blockchain Development",
    description: "Learn blockchain development with Solidity. Build smart contracts, DApps, and understand cryptocurrency and DeFi protocols.",
    duration: "3 months",
    price: "₹4,000",
    features: ["Solidity Programming", "Smart Contracts", "DApp Development", "Web3 Integration", "DeFi Protocols"],
    instructor: "fsociety.in",
    level: "Intermediate"
  }
]

export default function CoursesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Courses
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 max-w-4xl mx-auto">
            Life time access but course engagement is just for 3 months
          </h2>
          <div className="bg-blue-50 rounded-2xl p-6 max-w-2xl mx-auto border border-blue-200/50">
            <p className="text-lg text-gray-600 leading-relaxed">
              Enroll in our comprehensive courses designed by industry experts.
              <br />
              Transform your career with hands-on learning and practical projects.
            </p>
          </div>
        </div>

        <div className="mt-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-green-600">{course.price}</span>
                </div>

                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {course.name}
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>📅 {course.duration}</span>
                    {/* <span>👨🏫 {course.instructor}</span> */}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/contact" className="block w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center text-sm md:text-base">
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
              Join professionals who have transformed their careers with our expert-led courses
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
