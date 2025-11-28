"use client"

import { FaUsers, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa'

const openings = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    description: "Build scalable web applications using modern frameworks. Work with React, Node.js, and cloud technologies to deliver high-quality solutions.",
    hidden: true
  },
  {
    title: "DevSecOps Engineer",
    type: "Full-time",
    location: "Hybrid",
    experience: "3-5 years",
    description: "Integrate security practices into CI/CD pipelines. Automate security testing and implement continuous monitoring across development lifecycle.",
    hidden: true
  },
  {
    title: "Security Analyst",
    type: "Full-time",
    location: "Remote",
    experience: "1-3 years",
    description: "Conduct vulnerability assessments and security audits. Analyze threats, implement security controls, and ensure compliance with industry standards.",
    hidden: true
  },
  {
    title: "Cloud Architect",
    type: "Full-time",
    location: "Hybrid",
    experience: "5+ years",
    description: "Design and implement cloud infrastructure solutions on AWS. CSPM (Cloud Security Posture Management) expert to lead cloud migration projects and optimize architecture for scalability, security, and cost-efficiency."
  }
]

const benefits = [
  {
    icon: FaRocket,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths"
  },
  {
    icon: FaUsers,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment"
  },
  {
    icon: FaLightbulb,
    title: "Innovation Focus",
    description: "Work on cutting-edge technologies and innovative projects"
  },
  {
    icon: FaHeart,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  }
]

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Be part of a dynamic team driving innovation in technology education and security solutions
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openings.filter(job => !job.hidden).map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{job.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-semibold">Type:</span> {job.type}</p>
                  <p className="text-gray-600"><span className="font-semibold">Location:</span> {job.location}</p>
                  <p className="text-gray-600"><span className="font-semibold">Experience:</span> {job.experience}</p>
                </div>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <a 
                  href={`mailto:miraclintech@gmail.com?subject=Application for ${job.title}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg mb-6">We're always looking for talented individuals. Send us your resume!</p>
          <a 
            href="mailto:miraclintech@gmail.com?subject=General Application"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all"
          >
            Send Your Resume
          </a>
        </div>

      </div>
    </main>
  )
}
