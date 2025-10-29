const courses = [
  {
    id: 1,
    name: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and databases. Build complete applications from frontend to backend with hands-on projects.",
    duration: "3 months",
    price: "$299",
    features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "Authentication & Security", "Deployment & DevOps"],
    instructor: "Sarah Johnson",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    name: "Data Science & Analytics",
    description: "Learn Python, machine learning, and data visualization. Transform data into actionable insights for business decisions.",
    duration: "4 months", 
    price: "$399",
    features: ["Python Programming", "Pandas & NumPy", "Machine Learning", "Data Visualization", "Statistical Analysis"],
    instructor: "Dr. Michael Chen",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Cloud Computing (AWS)",
    description: "Get hands-on experience with AWS services. Prepare for cloud certifications and modern infrastructure management.",
    duration: "2 months",
    price: "$249",
    features: ["AWS Core Services", "EC2 & S3", "Lambda Functions", "CloudFormation", "Security & Monitoring"],
    instructor: "Emily Rodriguez",
    level: "Beginner to Intermediate"
  },
  {
    id: 4,
    name: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android using React Native. Create cross-platform applications efficiently.",
    duration: "3 months",
    price: "$329",
    features: ["React Native", "iOS Development", "Android Development", "API Integration", "App Store Deployment"],
    instructor: "James Wilson",
    level: "Intermediate"
  },
  {
    id: 5,
    name: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts, ethical hacking, and security best practices for modern organizations.",
    duration: "2.5 months",
    price: "$279",
    features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance", "Incident Response"],
    instructor: "Alex Thompson",
    level: "Beginner"
  },
  {
    id: 6,
    name: "DevOps Engineering",
    description: "Master CI/CD pipelines, containerization, and infrastructure automation for modern software delivery.",
    duration: "3.5 months",
    price: "$349",
    features: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Cloud Platforms"],
    instructor: "David Kumar",
    level: "Intermediate to Advanced"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
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
              href="#contact"
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
