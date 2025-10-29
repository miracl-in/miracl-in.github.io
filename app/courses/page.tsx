const courses = [
  {
    id: 1,
    name: "Python + DevSecOps",
    description: "Master Python programming with DevSecOps practices. Learn secure coding, automated testing, and security integration in CI/CD pipelines.",
    duration: "3 months",
    price: "₹3,500",
    features: ["Python Programming", "Security Testing", "CI/CD Security", "Vulnerability Assessment", "Secure Code Review"],
    instructor: "Sarah Johnson",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    name: "DevSecOps + Cloud Computing",
    description: "Comprehensive DevSecOps with cloud security. Learn to secure cloud infrastructure, implement security automation, and manage cloud compliance.",
    duration: "3 months", 
    price: "₹4,000",
    features: ["Cloud Security", "Infrastructure Security", "Compliance Automation", "Security Monitoring", "Incident Response"],
    instructor: "Dr. Michael Chen",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Next.js + DevOps",
    description: "Build modern web applications with Next.js and deploy them using DevOps best practices. Master full-stack development with deployment automation.",
    duration: "3 months",
    price: "₹3,500",
    features: ["Next.js Framework", "React Development", "CI/CD Pipelines", "Docker Deployment", "Cloud Hosting"],
    instructor: "Emily Rodriguez",
    level: "Beginner to Intermediate"
  },
  {
    id: 4,
    name: "Solidity + Blockchain Development",
    description: "Learn blockchain development with Solidity. Build smart contracts, DApps, and understand cryptocurrency and DeFi protocols.",
    duration: "3 months",
    price: "₹4,000",
    features: ["Solidity Programming", "Smart Contracts", "DApp Development", "Web3 Integration", "DeFi Protocols"],
    instructor: "James Wilson",
    level: "Intermediate"
  }
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology courses designed by industry experts to advance your career and transform your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                  <span className="text-2xl font-bold text-green-600">{course.price}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {course.name}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>📅 {course.duration}</span>
                    <span>👨🏫 {course.instructor}</span>
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

                <a href="/contact" className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center">
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our expert-led courses
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
    </main>
  )
}
