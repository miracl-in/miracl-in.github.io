import Image from "next/image"
import ScrollAnimation from './ScrollAnimation'

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        <ScrollAnimation className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transform Your Tech Career with Expert-Led Training
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Master in-demand skills through hands-on courses designed by industry professionals.
            Build real projects, gain practical experience, and accelerate your career growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href="/courses" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl relative overflow-hidden">
              <span className="relative z-10">Start Learning Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="/courses" className="group px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">Browse Courses</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Career Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Flexible Learning</span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200} className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <div className="relative aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
            <img 
              src="/hero-image.jpeg" 
              alt="Miraclin Technologies" 
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
