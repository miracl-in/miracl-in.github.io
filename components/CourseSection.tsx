import ScrollAnimation from './ScrollAnimation'

const courses = [
  {
    id: 1,
    name: "Python Programming",
    slug: "python-programming",
    description: "Master Python from basics to advanced. Learn data structures, OOP, file handling, and build real-world applications with Python.",
    duration: "2 months",
    price: "₹3,000",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    name: "DevSecOps",
    slug: "devsecops",
    description: "Learn DevSecOps practices and security integration in CI/CD pipelines. Master automated testing, security scanning, and secure deployment.",
    duration: "2 months",
    price: "₹8,000",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Cloud Computing (Azure + AWS)",
    slug: "cloud-computing",
    description: "Master both Azure and AWS cloud platforms. Learn cloud security, deployment, monitoring, and multi-cloud infrastructure management.",
    duration: "3 months", 
    price: "₹10,000",
    level: "Intermediate"
  },
  {
    id: 4,
    name: "DevOps",
    slug: "devops",
    description: "Master DevOps practices with Docker, Kubernetes, and CI/CD pipelines. Learn deployment automation and infrastructure management.",
    duration: "2 months",
    price: "₹6,000",
    level: "Intermediate"
  },
  {
    id: 5,
    name: "Blockchain Development",
    slug: "blockchain-development",
    description: "Learn blockchain technology and smart contract development with Solidity. Build DApps, understand cryptocurrency, and master DeFi protocols.",
    duration: "2 months",
    price: "₹5,000",
    level: "Intermediate to Advanced"
  },
  {
    id: 6,
    name: "AI Agents & Agentic AI",
    slug: "ai-agents",
    description: "Learn to build intelligent AI agents and agentic systems. Master LLMs, autonomous agents, and AI-powered automation for real-world applications.",
    duration: "2 months",
    price: "₹10,000",
    level: "Intermediate to Advanced"
  }
]

export default function CourseSection() {
  return (
    <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of technology courses designed to advance your career
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <ScrollAnimation key={course.id} delay={index * 150}>
              <div className="bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/70 transition-all duration-500 p-8 flex flex-col justify-between h-full ring-1 ring-gray-100/50 hover:ring-blue-300/60 hover:-translate-y-4 hover:scale-105 group overflow-hidden relative cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-400">
                    {course.level}
                  </span>
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
                  href={`/courses/${course.slug}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl text-center relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </ScrollAnimation>
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
