import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DevOps Training Institute in Thanjavur | Docker, Kubernetes, CI/CD Course | Miraclin Technologies',
  description: 'Best DevOps training in Thanjavur with hands-on projects. Learn Docker, Kubernetes, Jenkins, CI/CD pipelines. Real-time projects and job assistance included.',
  keywords: 'DevOps training Thanjavur, Docker course Thanjavur, Kubernetes training, CI/CD pipeline course, Jenkins training, DevOps certification Thanjavur, hands-on DevOps projects'
}

export default function DevOpsTrainingThanjavurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DevOps Training Institute in Thanjavur
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Master DevOps with Real-Time Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-blue-600">Hands-On Learning</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>✅ Real-time industry projects</li>
                <li>✅ Live server deployments</li>
                <li>✅ Production environment setup</li>
                <li>✅ Troubleshooting scenarios</li>
              </ul>
              
              <h3 className="font-bold mb-2 text-purple-600">Tools You'll Master</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Jenkins</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">AWS</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Real-Time Project Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li>🚀 E-commerce app deployment pipeline</li>
                <li>🔄 Microservices orchestration</li>
                <li>📊 Monitoring & logging setup</li>
                <li>🛡️ Security scanning automation</li>
                <li>☁️ Multi-cloud infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/courses/devops"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start DevOps Training
          </Link>
        </div>
      </div>
    </div>
  )
}
