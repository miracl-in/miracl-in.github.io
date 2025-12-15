import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Training Institute in Thanjavur | Miraclin Technologies',
  description: 'Best software training institute in Thanjavur offering Python, Java, DevOps, AI/ML courses. 100% placement assistance. Expert trainers from fsociety.in partnership.',
  keywords: 'software training thanjavur, programming courses thanjavur, coding classes thanjavur, IT training institute thanjavur',
  openGraph: {
    title: 'Software Training Institute in Thanjavur | Miraclin Technologies',
    description: 'Best software training institute in Thanjavur offering Python, Java, DevOps, AI/ML courses. 100% placement assistance.',
    url: 'https://miracl.in/software-training-thanjavur',
  }
}

export default function SoftwareTrainingThanjavur() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Software Training Institute in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Leading software training institute in Thanjavur offering comprehensive programming courses with 100% placement assistance and industry expert trainers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Software Training in Thanjavur?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span>Expert trainers with industry experience from top companies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span>Hands-on practical training with real-world projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span>100% placement assistance and career guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span>Partnership with fsociety.in for advanced mentoring</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Popular Software Courses</h3>
            <div className="space-y-3">
              <a href="/python-training-thanjavur" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <strong>Python Programming</strong> - Full Stack Development
              </a>
              <a href="/devops-training-thanjavur" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <strong>DevOps Training</strong> - CI/CD & Cloud
              </a>
              <a href="/ai-training-thanjavur" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <strong>AI/ML Training</strong> - Data Science
              </a>
              <a href="/ethical-hacking-course-thanjavur" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <strong>Ethical Hacking</strong> - Cybersecurity
              </a>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Software Career in Thanjavur</h2>
          <p className="text-blue-100 mb-6">Join Thanjavur's premier software training institute</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Enroll Now
          </a>
        </div>
      </div>
    </main>
  )
}
