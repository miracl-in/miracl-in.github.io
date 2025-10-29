const features = [
  {
    icon: "🎯",
    title: "Interactive Learning",
    description: "Engage with hands-on exercises, quizzes, and real-world projects that reinforce your learning."
  },
  {
    icon: "👨🏫",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in their respective fields."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and milestone achievements."
  },
  {
    icon: "🕒",
    title: "Flexible Schedule",
    description: "Learn at your own pace with 24/7 access to course materials and resources."
  },
  {
    icon: "🏆",
    title: "Certification Support",
    description: "Get preparation and guidance for industry certifications like CompTIA, AWS, Azure, and more."
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Get guidance on career paths, resume building, and job placement assistance."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Miraclin Technologies?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide everything you need to succeed in your tech career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-base md:text-lg font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
