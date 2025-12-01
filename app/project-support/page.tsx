import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Final Year Project Support & Assistance - Miraclin Technologies',
  description: 'Get expert guidance for your pre-final and final year projects. We assist you in completing your project while making you presentation-ready.',
}

export default function ProjectSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Final Year Project Support & Assistance
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Expert guidance for pre-final and final year students. We help you complete your project while ensuring you're fully prepared for your presentation.
          </p>
        </div>

        {/* What We Offer */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Completion Assistance</h3>
              <p className="text-gray-600">
                You do the work, we guide you. Learn by doing while we provide expert mentorship to ensure your project meets academic standards and industry practices.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Idea Assistance</h3>
              <p className="text-gray-600">
                Don't have a project idea? We help you brainstorm innovative, feasible project ideas aligned with current technology trends and your interests.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Understanding</h3>
              <p className="text-gray-600">
                We ensure you understand every aspect of your project - from architecture to implementation, making you confident for viva and presentations.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Presentation Ready</h3>
              <p className="text-gray-600">
                Mock presentations, documentation review, and Q&A preparation to make you fully confident for your final presentation and viva.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Upload Your Idea</h3>
              <p className="text-gray-600 text-sm">Share your project idea or request assistance in finding one</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Discussion & Planning</h3>
              <p className="text-gray-600 text-sm">We discuss feasibility, scope, and create a roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Guided Development</h3>
              <p className="text-gray-600 text-sm">You build with our mentorship and regular reviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Presentation Prep</h3>
              <p className="text-gray-600 text-sm">Mock presentations and viva preparation</p>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Is This For?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Pre-Final Year Students</h3>
              <p className="text-gray-600 text-sm">Get a head start on your final year project</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Final Year Students</h3>
              <p className="text-gray-600 text-sm">Complete your project with expert guidance</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 mb-2">Students Without Ideas</h3>
              <p className="text-gray-600 text-sm">Get innovative project ideas tailored to you</p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Gain</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Complete understanding of your project architecture",
              "Hands-on experience with real-world technologies",
              "Professional documentation and code quality",
              "Confidence to explain every aspect of your project",
              "Presentation and communication skills",
              "Industry-standard development practices",
              "Problem-solving and debugging skills",
              "Portfolio-worthy project for job applications"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies We Support */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technologies We Support</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "Java", "JavaScript", "React", "Next.js", "Node.js",
              "Machine Learning", "AI", "Blockchain", "IoT", "Cloud Computing",
              "DevOps", "Mobile Apps", "Web Development", "Data Science"
            ].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Will you do my project for me?",
                a: "No. We believe in learning by doing. You'll build the project yourself while we guide, mentor, and ensure you understand everything."
              },
              {
                q: "What if I don't have a project idea?",
                a: "That's perfectly fine! We'll help you brainstorm innovative ideas based on your interests and current technology trends."
              },
              {
                q: "How long does the support last?",
                a: "We support you throughout your project duration until your final presentation, typically 3-6 months."
              },
              {
                q: "Will I understand my project completely?",
                a: "Absolutely! Our goal is to make you confident enough to explain every line of code and design decision in your viva."
              },
              {
                q: "What's the cost?",
                a: "Contact us with your project requirements for a customized quote. We offer affordable packages for students."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">Upload your idea or request assistance today!</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  )
}
