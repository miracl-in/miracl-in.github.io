import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programming Courses in Thanjavur | Learn Coding | Miraclin Technologies',
  description: 'Best programming courses in Thanjavur. Learn Python, Java, JavaScript, C++ with expert trainers. Practical coding classes with placement support.',
  keywords: 'programming courses thanjavur, coding classes thanjavur, learn programming thanjavur, software development courses thanjavur',
  openGraph: {
    title: 'Programming Courses in Thanjavur | Learn Coding | Miraclin Technologies',
    description: 'Best programming courses in Thanjavur. Learn Python, Java, JavaScript, C++ with expert trainers.',
    url: 'https://miracl.in/programming-courses-thanjavur',
  }
}

export default function ProgrammingCoursesThanjavur() {
  const courses = [
    { name: 'Python Programming', duration: '2 months', level: 'Beginner to Advanced' },
    { name: 'Java Development', duration: '3 months', level: 'Beginner to Advanced' },
    { name: 'JavaScript & React', duration: '2.5 months', level: 'Intermediate' },
    { name: 'C++ Programming', duration: '2 months', level: 'Beginner' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Programming Courses in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Master programming languages with hands-on coding classes in Thanjavur. Expert instructors, practical projects, and career support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Duration: {course.duration}</p>
                <p>Level: {course.level}</p>
              </div>
              <a href="/contact" className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
            <p className="text-gray-600">Hands-on coding projects and real-world applications</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Career Support</h3>
            <p className="text-gray-600">100% placement assistance and interview preparation</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Learn Programming in Thanjavur?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Growing IT Opportunities</h3>
              <p className="text-gray-600 mb-4">Thanjavur is emerging as a tech hub with increasing demand for skilled programmers in local and remote opportunities.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Remote work opportunities</li>
                <li>• Local startup ecosystem</li>
                <li>• Government IT initiatives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Education</h3>
              <p className="text-gray-600 mb-4">Access world-class programming education right in Thanjavur with personalized attention and affordable fees.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Small batch sizes</li>
                <li>• Affordable course fees</li>
                <li>• Flexible timings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Programming Journey Today</h2>
          <p className="text-blue-100 mb-6">Join hundreds of students who have launched their tech careers from Thanjavur</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}
