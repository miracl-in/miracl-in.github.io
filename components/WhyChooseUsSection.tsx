const advantages = [
  {
    icon: "⚡",
    title: "Industry-Relevant Curriculum",
    description: "Our courses are designed with input from leading tech companies to ensure you learn the most in-demand skills."
  },
  {
    icon: "🎯",
    title: "Practical Project-Based Learning",
    description: "Build real-world projects that you can showcase in your portfolio and demonstrate to potential employers."
  },
  {
    icon: "👥",
    title: "Small Class Sizes",
    description: "Get personalized attention with our small cohorts, ensuring you receive the support you need to succeed."
  },
  {
    icon: "🔄",
    title: "Lifetime Access",
    description: "Once enrolled, you have lifetime access to course materials and updates, keeping your skills current."
  },
  {
    icon: "🌟",
    title: "Quality First Approach",
    description: "As a new organization, we focus on delivering high-quality content and personalized attention to every student."
  },
  {
    icon: "💡",
    title: "Cutting-Edge Technology",
    description: "Learn the latest tools, frameworks, and technologies that are shaping the future of the tech industry."
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Miraclin Technologies Stands Out
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another online learning platform. Here's what makes us different and why professionals choose us for their career transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
            Ready to experience the Miraclin Technologies difference?
          </p>
          <a 
            href="/courses" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Courses
          </a>
        </div>
      </div>
    </section>
  )
}
