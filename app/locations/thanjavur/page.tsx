import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Tech Training Institute in Thanjavur | AI, DevSecOps, Cloud Computing - Miraclin Technologies',
  description: 'Top-rated technology training institute in Thanjavur offering AI, DevSecOps, Cloud Computing courses. 98% Job-Success rate. Located near Infant Jesus Church, Pudukottai Road.',
  keywords: 'tech training Thanjavur, AI course Thanjavur, DevSecOps training Thanjavur, cloud computing Thanjavur, Python programming Thanjavur, best IT institute Thanjavur'
}

export default function ThanjavurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Best Tech Training Institute in Thanjavur
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Miraclin Technologies in Thanjavur?</h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Located in prime location near Infant Jesus Church</li>
              <li>✅ Easy access from Pudukottai Road</li>
              <li>✅ 50+ students trained from Thanjavur district</li>
              <li>✅ Industry expert instructors from Chennai & Bangalore</li>
              <li>✅ Job placement assistance with top companies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Courses in Thanjavur</h3>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded-lg shadow">
                <strong>AI & Machine Learning</strong>
              </div>
              <div className="p-3 bg-white rounded-lg shadow">
                <strong>DevSecOps Training</strong>
              </div>
              <div className="p-3 bg-white rounded-lg shadow">
                <strong>Cloud Computing (AWS + Azure)</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Our Thanjavur Campus</h3>
          <p className="text-gray-600 mb-4">
            Conveniently located at No. 35 & 36, 1st Floor, Infant Jesus Commercial Complex, 
            our Thanjavur campus offers state-of-the-art facilities for hands-on tech training.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>📍 Near Infant Jesus Church</div>
            <div>🚌 Easy bus connectivity</div>
            <div>🏢 Modern training facilities</div>
          </div>
        </div>
      </div>
    </div>
  )
}
