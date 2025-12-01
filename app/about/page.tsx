export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Miraclin Technologies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through innovative, practical learning experiences
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in <strong className="text-gray-900">2025</strong>, Miraclin Technologies is a forward-thinking EdTech company dedicated to bridging the gap between academic learning and industry requirements. We specialize in providing cutting-edge technology training in AI, DevSecOps, Cloud Computing, Blockchain, and Full-Stack Development.
              </p>
              <p>
                Our team comprises industry professionals with extensive experience in software development, cybersecurity, cloud architecture, and emerging technologies. We understand what the industry needs because we've been there.
              </p>
              <p>
                What sets us apart is our commitment to <strong className="text-gray-900">practical, hands-on learning</strong>. We don't just teach theory—we ensure every student builds real-world projects, understands industry best practices, and gains the confidence to excel in their tech careers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To democratize quality tech education by providing affordable, practical, and industry-relevant training that transforms careers and builds confident, job-ready professionals.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To become India's leading platform for practical tech education, creating a thriving community of skilled professionals who drive innovation and shape the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Industry Experts</h4>
                <p className="text-sm text-gray-600">Learn from professionals with real-world experience</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Hands-On Projects</h4>
                <p className="text-sm text-gray-600">Build real applications, not just follow tutorials</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Affordable Pricing</h4>
                <p className="text-sm text-gray-600">Quality education accessible to all students</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Job Assistance</h4>
                <p className="text-sm text-gray-600">Resume building, interview prep, and career guidance</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Latest Technologies</h4>
                <p className="text-sm text-gray-600">Curriculum updated with current industry trends</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mentorship</h4>
                <p className="text-sm text-gray-600">Personalized guidance throughout your journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Our Impact in 2025</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                <p className="text-gray-600">Course Programs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-600">Practical Focus</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
                <p className="text-gray-600">Months Full Stack</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Learning Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">We strive for the highest quality in everything we do</p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">We embrace new technologies and teaching methods</p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">We maintain transparency and honesty with our students</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Quality education should be affordable for everyone</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Community</h4>
                <p className="text-sm text-gray-600">We build a supportive learning environment</p>
              </div>
              
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Growth</h4>
                <p className="text-sm text-gray-600">We focus on continuous improvement and learning</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
