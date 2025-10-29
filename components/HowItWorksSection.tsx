const steps = [
  {
    step: "01",
    icon: "🔍",
    title: "Browse & Choose",
    description: "Explore our comprehensive course catalog and select the program that aligns with your career goals and interests."
  },
  {
    step: "02", 
    icon: "📚",
    title: "Learn & Practice",
    description: "Follow structured lessons with hands-on projects, interactive exercises, and real-world applications guided by expert instructors."
  },
  {
    step: "03",
    icon: "🚀",
    title: "Apply & Succeed",
    description: "Use your newly acquired skills in real-world scenarios, build your portfolio, and advance your tech career with confidence."
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start your learning journey in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full mb-6">
                {step.step}
              </div>
              
              <div className="text-5xl mb-4">{step.icon}</div>
              
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <div className="flex items-center justify-center h-8">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#courses" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}