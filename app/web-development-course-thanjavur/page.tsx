import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Course in Thanjavur | Full Stack Training | Miraclin Technologies',
  description: 'Best web development course in Thanjavur. Learn HTML, CSS, JavaScript, React, Node.js. Full stack development training with placement assistance.',
  keywords: 'web development course thanjavur, full stack development thanjavur, HTML CSS JavaScript training thanjavur, React course thanjavur',
  openGraph: {
    title: 'Web Development Course in Thanjavur | Full Stack Training | Miraclin Technologies',
    description: 'Best web development course in Thanjavur. Learn HTML, CSS, JavaScript, React, Node.js with expert trainers.',
    url: 'https://miracl.in/web-development-course-thanjavur',
  }
}

export default function WebDevelopmentCourseThanjavur() {
  const curriculum = [
    { module: 'Frontend Basics', topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'] },
    { module: 'Frontend Frameworks', topics: ['React.js', 'State Management', 'Component Architecture', 'Hooks'] },
    { module: 'Backend Development', topics: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'] },
    { module: 'Database & Deployment', topics: ['MongoDB', 'MySQL', 'Git/GitHub', 'Cloud Deployment'] }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Web Development Course in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Master full stack web development with hands-on training in HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your web development career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span><strong>Complete Full Stack:</strong> Frontend + Backend + Database</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span><strong>Live Projects:</strong> Build 5+ real-world applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span><strong>Industry Tools:</strong> Git, VS Code, Chrome DevTools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span><strong>Portfolio Development:</strong> Professional portfolio website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span><strong>Job Assistance:</strong> Resume, interview prep, placement support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Course Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Duration:</span>
                <span>4 months</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Fee:</span>
                <span className="text-2xl font-bold text-blue-600">₹6,000</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Level:</span>
                <span>Beginner to Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Next Batch:</span>
                <span>15th January 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Class Mode:</span>
                <span>Offline + Online</span>
              </div>
            </div>
            <a href="/contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
              Enroll Now
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Complete Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((module, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.module}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-gray-600 text-sm">• {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast-Track Learning</h3>
            <p className="text-gray-600">Intensive 4-month program to make you job-ready</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Job Guarantee</h3>
            <p className="text-gray-600">100% placement assistance with top companies</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
            <p className="text-gray-600">Certificate recognized by leading tech companies</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Launch Your Web Development Career</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the most comprehensive web development course in Thanjavur and build amazing websites and applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Learning Today
            </a>
            <a href="/courses" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
