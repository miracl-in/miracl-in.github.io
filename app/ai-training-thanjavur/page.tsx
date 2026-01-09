import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Training Institute in Thanjavur | Machine Learning Course | Miraclin Technologies',
  description: 'Best AI and Machine Learning training in Thanjavur. Learn Python, TensorFlow, Deep Learning with hands-on projects. Job assistance included. Enroll now!',
  keywords: 'AI training Thanjavur, machine learning course Thanjavur, artificial intelligence institute Thanjavur, Python AI course, deep learning training'
}

export default function AITrainingThanjavurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Training Institute in Thanjavur
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Learn AI in Thanjavur?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Growing Demand</h3>
              <p className="text-gray-600 mb-4">AI jobs in Tamil Nadu increased by 300% in 2024. Thanjavur students are getting placed in Chennai, Bangalore tech companies.</p>
              
              <h3 className="font-bold mb-2">Local Advantage</h3>
              <p className="text-gray-600">Learn from industry experts without traveling to Chennai. Same quality training at affordable costs.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Course Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Python Programming for AI</li>
                <li>✅ Machine Learning Algorithms</li>
                <li>✅ Deep Learning & Neural Networks</li>
                <li>✅ Real-world AI Projects</li>
                <li>✅ Job Placement Assistance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Duration</h3>
            <p className="text-2xl text-blue-600">2 Months</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Mode</h3>
            <p className="text-2xl text-green-600">Online/Offline</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Batch Size</h3>
            <p className="text-2xl text-purple-600">Max 15</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/courses/ai-agents"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Enroll in AI Course
          </Link>
        </div>
      </div>
    </div>
  )
}
