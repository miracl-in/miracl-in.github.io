import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Training Programs in Thanjavur | Miraclin Technologies',
  description: 'Comprehensive professional training programs in Thanjavur. Software development, IT courses, programming, data science, AI/ML, cybersecurity training.',
  keywords: 'professional training thanjavur, IT training programs, software development courses, technology education thanjavur',
  openGraph: {
    title: 'Professional Training Programs in Thanjavur | Miraclin Technologies',
    description: 'Comprehensive professional training programs in Thanjavur covering all major technology domains.',
    url: 'https://miracl.in/training',
  }
}

export default function TrainingPage() {
  const trainingCategories = [
    {
      category: 'Software Development',
      courses: [
        { name: 'Python Programming', link: '/python-training-thanjavur', duration: '2 months' },
        { name: 'Web Development', link: '/web-development-course-thanjavur', duration: '4 months' },
        { name: 'Programming Courses', link: '/programming-courses-thanjavur', duration: '2-3 months' }
      ]
    },
    {
      category: 'Data Science & AI',
      courses: [
        { name: 'Data Science Training', link: '/data-science-training-thanjavur', duration: '5 months' },
        { name: 'AI/ML Training', link: '/ai-training-thanjavur', duration: '4 months' },
        { name: 'Analytics & Visualization', link: '/courses', duration: '3 months' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      courses: [
        { name: 'DevOps Training', link: '/devops-training-thanjavur', duration: '3 months' },
        { name: 'Cloud Computing', link: '/courses', duration: '2 months' },
        { name: 'Infrastructure Management', link: '/courses', duration: '2 months' }
      ]
    },
    {
      category: 'Cybersecurity',
      courses: [
        { name: 'Ethical Hacking', link: '/ethical-hacking-course-thanjavur', duration: '3 months' },
        { name: 'Network Security', link: '/courses', duration: '2 months' },
        { name: 'Security Analysis', link: '/courses', duration: '2 months' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Training Programs in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technology training programs designed to accelerate your career. Expert instructors, hands-on projects, and guaranteed placement assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trainingCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.courses.map((course, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div>
                      <a href={course.link} className="font-semibold text-blue-600 hover:text-blue-800">
                        {course.name}
                      </a>
                      <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                    </div>
                    <a href={course.link} className="text-blue-600 hover:text-blue-800">
                      →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Training Programs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Industry-Focused</h3>
              <p className="text-gray-600">Curriculum designed with current industry requirements and latest technologies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Learn from professionals with 5+ years of industry experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Career Support</h3>
              <p className="text-gray-600">100% placement assistance and career guidance for all students</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Training Methodology</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">📚</span>
                <div>
                  <h4 className="font-bold">Structured Learning</h4>
                  <p className="text-gray-600">Step-by-step curriculum from basics to advanced concepts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">💻</span>
                <div>
                  <h4 className="font-bold">Hands-on Practice</h4>
                  <p className="text-gray-600">70% practical training with real-world projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🤝</span>
                <div>
                  <h4 className="font-bold">Mentorship</h4>
                  <p className="text-gray-600">Personal guidance from industry experts and fsociety.in consultants</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Training Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Students Trained</span>
                <span className="text-2xl font-bold">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Placement Rate</span>
                <span className="text-2xl font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Training Programs</span>
                <span className="text-2xl font-bold">15+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Industry Partners</span>
                <span className="text-2xl font-bold">50+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose from our comprehensive training programs and take the first step towards a successful tech career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started Today
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
