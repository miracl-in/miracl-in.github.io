import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Python Training Institute in Thanjavur | Hands-On Python Course | Real Projects | Miraclin Technologies',
  description: 'Best Python programming training in Thanjavur with real-time projects. Learn Python from basics to advanced with hands-on coding. Job assistance included.',
  keywords: 'Python training Thanjavur, Python programming course, Python certification Thanjavur, hands-on Python projects, real-time Python training, Python for beginners Thanjavur'
}

export default function PythonTrainingThanjavurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Python Training Institute in Thanjavur
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Learn Python with Real-Time Hands-On Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-green-600">Hands-On Project Portfolio</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>🌐 Web scraping applications</li>
                <li>📊 Data analysis dashboards</li>
                <li>🤖 Automation scripts</li>
                <li>🔗 API integration projects</li>
                <li>📱 GUI applications</li>
              </ul>
              
              <h3 className="font-bold mb-2 text-blue-600">Why Python in 2024?</h3>
              <p className="text-gray-600">Python developers earn ₹4-8 LPA in Tamil Nadu. High demand in AI, web development, and automation.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Real-Time Learning Approach</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Code every day - 2 hours daily practice</li>
                <li>✅ Build 5+ real projects</li>
                <li>✅ GitHub portfolio creation</li>
                <li>✅ Industry coding standards</li>
                <li>✅ Interview preparation</li>
              </ul>
              
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-700">Success Rate</h4>
                <p className="text-green-600">95% students get jobs within 3 months</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/courses/python-programming"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Python Course
          </Link>
        </div>
      </div>
    </div>
  )
}
