export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Miraclin Technologies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through innovative learning experiences
          </p>
        </div>

        {/* Founder's Journey */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Founder's Journey</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <span className="text-4xl md:text-5xl">👨💻</span>
                </div>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Founded by industry veterans with over 15 years of combined experience in software development, 
                  DevOps, and cybersecurity. Our journey began when we realized the gap between traditional 
                  education and industry requirements.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Having worked at top tech companies and trained hundreds of professionals, we created 
                  Miraclin Technologies to bridge this gap with practical, hands-on learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To democratize quality tech education by providing affordable, practical, and industry-relevant 
                training that transforms careers and builds the future workforce.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To become India's leading platform for practical tech education, creating a community of 
                skilled professionals who drive innovation and technological advancement.
              </p>
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Company Milestones</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">2023</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Company Founded</h4>
                  <p className="text-gray-600 dark:text-gray-300">Launched with our first DevSecOps course</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">500+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Students Trained</h4>
                  <p className="text-gray-600 dark:text-gray-300">Across various technology domains</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">85%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Placement Rate</h4>
                  <p className="text-gray-600 dark:text-gray-300">Students placed in top tech companies</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-orange-600 dark:text-orange-400">4.8</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Average Rating</h4>
                  <p className="text-gray-600 dark:text-gray-300">Based on student feedback and reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Awards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Best EdTech Startup 2024</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Recognized for innovative teaching methods</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Top Rated Platform</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Highest student satisfaction scores</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎖️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Partnership</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Certified training partner with tech giants</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
