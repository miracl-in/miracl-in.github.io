import Image from "next/image"

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/20 dark:to-purple-400/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transform Your Tech Career with Expert-Led Training
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Master in-demand skills through hands-on courses designed by industry professionals.
            Build real projects, gain practical experience, and accelerate your career growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href="/courses" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning Today
            </a>
            <a href="/courses" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Browse Courses
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Career Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Flexible Learning</span>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-md rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
            <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl lg:text-8xl mb-4">🎓</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Students Learning Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
