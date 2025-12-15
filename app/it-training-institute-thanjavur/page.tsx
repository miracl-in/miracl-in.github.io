import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Training Institute in Thanjavur | Best Computer Courses | Miraclin Technologies',
  description: 'Top IT training institute in Thanjavur offering computer courses, software training, and technology education. Expert faculty, modern labs, placement assistance.',
  keywords: 'IT training institute thanjavur, computer courses thanjavur, technology education thanjavur, IT institute thanjavur',
  openGraph: {
    title: 'IT Training Institute in Thanjavur | Best Computer Courses | Miraclin Technologies',
    description: 'Top IT training institute in Thanjavur offering computer courses, software training, and technology education.',
    url: 'https://miracl.in/it-training-institute-thanjavur',
  }
}

export default function ITTrainingInstituteThanjavur() {
  const features = [
    { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Industry professionals with 5+ years experience' },
    { icon: '💻', title: 'Modern Infrastructure', desc: 'State-of-the-art labs and equipment' },
    { icon: '📜', title: 'Industry Certifications', desc: 'Recognized certificates and credentials' },
    { icon: '🤝', title: 'Placement Support', desc: '100% job assistance and career guidance' },
    { icon: '⏰', title: 'Flexible Timings', desc: 'Weekend and evening batches available' }
  ]

  const courses = [
    'Software Development', 'Web Development', 'Mobile App Development',
    'Data Science & Analytics', 'Cloud Computing', 'Cybersecurity',
    'DevOps Engineering', 'AI & Machine Learning', 'Digital Marketing'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Leading IT Training Institute in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform your career with comprehensive IT training programs. Modern infrastructure, expert faculty, and guaranteed placement assistance in Thanjavur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comprehensive IT Course Offerings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
                <span className="font-semibold text-gray-800">{course}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Miraclin Technologies?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">01</span>
                <div>
                  <h4 className="font-bold">Industry-Aligned Curriculum</h4>
                  <p className="text-gray-600">Courses designed with current industry requirements and latest technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">02</span>
                <div>
                  <h4 className="font-bold">Practical Learning Approach</h4>
                  <p className="text-gray-600">70% hands-on training with real-world projects and case studies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">03</span>
                <div>
                  <h4 className="font-bold">Career Development</h4>
                  <p className="text-gray-600">Resume building, interview preparation, and job placement assistance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Student Success Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Placement Rate</span>
                <span className="text-2xl font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Salary Hike</span>
                <span className="text-2xl font-bold">150%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Students Trained</span>
                <span className="text-2xl font-bold">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Industry Partners</span>
                <span className="text-2xl font-bold">50+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-gray-600 mb-6">Join Thanjavur's most trusted IT training institute and transform your future</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Enroll Now
            </a>
            <a href="/courses" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              View Courses
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
