const courses = [
  {
    id: 1,
    name: "Python Programming",
    description: "Master Python from basics to advanced. Learn data structures, OOP, file handling, and build real-world applications with Python.",
    duration: "2 months",
    price: "₹3,000",
    originalPrice: "₹5,000",
    features: ["Python Basics", "Data Structures", "OOP Concepts", "File Handling", "Real-world Projects"],
    instructor: "fsociety.in",
    level: "Beginner to Advanced"
  },
  {
    id: 2,
    name: "DevSecOps",
    description: "Learn DevSecOps practices and security integration in CI/CD pipelines. Master automated testing, security scanning, and secure deployment.",
    duration: "2 months",
    price: "₹8,000",
    originalPrice: "₹10,000",
    features: ["CI/CD Security", "Security Testing", "Vulnerability Assessment", "Secure Code Review", "Automation Tools"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Cloud Computing (Azure + AWS)",
    description: "Master both Azure and AWS cloud platforms. Learn cloud security, deployment, monitoring, and multi-cloud infrastructure management.",
    duration: "3 months", 
    price: "₹10,000",
    originalPrice: "₹12,000",
    features: ["Azure Services", "AWS Services", "Cloud Security", "Multi-Cloud Strategy", "Infrastructure Management"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 4,
    name: "DevOps",
    description: "Master DevOps practices with Docker, Kubernetes, and CI/CD pipelines. Learn deployment automation and infrastructure management.",
    duration: "2 months",
    price: "₹6,000",
    originalPrice: "₹8,000",
    features: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure Automation", "Deployment Strategies", "Monitoring & Logging"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 5,
    name: "Blockchain Development",
    description: "Learn blockchain technology and smart contract development with Solidity. Build DApps, understand cryptocurrency, and master DeFi protocols.",
    duration: "2 months",
    price: "₹5,000",
    originalPrice: "₹7,000",
    features: ["Blockchain Basics", "Solidity Programming", "Smart Contracts", "DApp Development", "Web3 & DeFi"],
    instructor: "fsociety.in",
    level: "Intermediate to Advanced"
  },
  {
    id: 6,
    name: "Linux",
    description: "Master Linux operating system fundamentals. Learn command line, shell scripting, system administration, and server management.",
    duration: "1 month",
    price: "₹3,000",
    originalPrice: "₹5,000",
    features: ["Linux Basics", "Command Line", "Shell Scripting", "System Administration", "Server Management"],
    instructor: "fsociety.in",
    level: "Beginner to Intermediate"
  },
  {
    id: 7,
    name: "Azure",
    description: "Learn Microsoft Azure cloud platform. Master Azure services, deployment, security, and cloud infrastructure management.",
    duration: "2 months",
    price: "₹4,000",
    originalPrice: "₹6,000",
    features: ["Azure Services", "Cloud Deployment", "Azure Security", "Resource Management", "Azure DevOps"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 8,
    name: "AWS",
    description: "Master Amazon Web Services cloud platform. Learn AWS services, architecture, security, and cloud infrastructure deployment.",
    duration: "2 months",
    price: "₹4,000",
    originalPrice: "₹6,000",
    features: ["AWS Services", "Cloud Architecture", "AWS Security", "EC2 & S3", "Lambda & CloudFormation"],
    instructor: "fsociety.in",
    level: "Intermediate to Advanced"
  },
  {
    id: 9,
    name: "Terraform",
    description: "Master Infrastructure as Code with Terraform. Learn to automate cloud infrastructure provisioning and management across multiple platforms.",
    duration: "1 month",
    price: "₹3,000",
    originalPrice: "₹5,000",
    features: ["Infrastructure as Code", "Terraform Basics", "Multi-Cloud Deployment", "State Management", "Automation & Modules"],
    instructor: "fsociety.in",
    level: "Intermediate"
  },
  {
    id: 10,
    name: "AI Agents & Agentic AI",
    description: "Learn to build intelligent AI agents and agentic systems. Master LLMs, autonomous agents, and AI-powered automation for real-world applications.",
    duration: "2 months",
    price: "₹10,000",
    originalPrice: "₹12,000",
    features: ["AI Fundamentals", "LLM Integration", "Autonomous Agents", "AI Automation", "Real-world AI Projects"],
    instructor: "fsociety.in",
    level: "Intermediate to Advanced"
  },
  {
    id: 11,
    name: "Full Stack AI + DevSecOps + Cloud Course",
    description: "Comprehensive 5-month program covering AI development, full-stack applications, DevSecOps practices, and cloud infrastructure. Build intelligent, secure, scalable applications from development to production.",
    duration: "5 months",
    price: "₹23,000",
    originalPrice: "₹25,000",
    features: ["AI & Machine Learning", "Full Stack Development", "DevSecOps Integration", "Cloud Infrastructure", "Production Deployment"],
    instructor: "fsociety.in",
    level: "Beginner to Advanced"
  },
  {
    id: 12,
    name: "Job Assistance & Confidence Boosting Programme",
    description: "FREE for Full Stack course students! Comprehensive career support including resume building, interview preparation, mock interviews, and confidence building sessions to help you land your dream job.",
    duration: "Ongoing Support",
    price: "FREE",
    originalPrice: "with Full Stack Course",
    features: ["Resume Building", "Interview Preparation", "Mock Interviews", "Confidence Building", "Career Guidance"],
    instructor: "fsociety.in",
    level: "All Levels"
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Courses
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your career with our industry-focused courses designed by experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                  <div className="text-right">
                    {course.originalPrice && (
                      <span className="text-sm text-gray-400 line-through block">{course.originalPrice}</span>
                    )}
                    <span className="text-2xl font-bold text-green-600">{course.price}</span>
                  </div>
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

                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
