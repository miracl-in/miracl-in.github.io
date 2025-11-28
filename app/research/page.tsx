"use client"

import { FaCode, FaShieldAlt, FaLock, FaSearchengin, FaCloud, FaBug } from 'react-icons/fa'

const projects = [
  {
    title: "AI Driven Code Review System",
    description: "Leveraging artificial intelligence and machine learning to automate code review processes, identify bugs, suggest improvements, and ensure code quality standards across development teams.",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevSecOps",
    description: "Integrating security practices within the DevOps process, automating security testing, and implementing continuous security monitoring to build secure software from development to deployment.",
    icon: FaShieldAlt,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Application Security",
    description: "Comprehensive security solutions for modern applications including vulnerability assessment, penetration testing, secure coding practices, and runtime application self-protection (RASP).",
    icon: FaLock,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Secure Code Review",
    description: "In-depth security-focused code analysis to identify vulnerabilities, security flaws, and compliance issues. Expert manual review combined with automated tools to ensure robust and secure codebases.",
    icon: FaSearchengin,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud Computing",
    description: "Cloud infrastructure design, migration strategies, and optimization for AWS, Azure, and GCP. Implementing scalable, cost-effective cloud solutions with focus on security, performance, and reliability.",
    icon: FaCloud,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "VAPT",
    description: "Vulnerability Assessment and Penetration Testing services to identify security weaknesses in applications, networks, and infrastructure. Comprehensive testing methodologies following industry standards and best practices.",
    icon: FaBug,
    color: "from-red-500 to-pink-500"
  }
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Research Works
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exploring cutting-edge technologies and innovative solutions in software development and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
