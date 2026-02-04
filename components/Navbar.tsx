"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses", hasDropdown: true },
  { name: "Projects", href: "/project-support" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team", hidden: true },
  { name: "About", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "FAQ", href: "/faq", hidden: true },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "https://miraclin.fsociety.in/", external: true }
]

const courses = [
  { name: "Python Programming", slug: "python-programming" },
  { name: "DevSecOps", slug: "devsecops" },
  { name: "Cloud Computing", slug: "cloud-computing" },
  { name: "DevOps", slug: "devops" },
  { name: "Blockchain Development", slug: "blockchain-development" },
  { name: "Linux", slug: "linux" },
  { name: "Azure", slug: "azure" },
  { name: "AWS", slug: "aws" },
  { name: "Terraform", slug: "terraform" },
  { name: "AI Agents & Agentic AI", slug: "ai-agents" },
  { name: "Data Engineering", slug: "data-engineering" },
  { name: "Observability (OpenSearch/ELK)", slug: "observability" },
  { name: "Ethical Hacking", slug: "ethical-hacking" },
  { name: "Full Stack AI + DevSecOps + Cloud", slug: "full-stack-ai-devsecops-cloud" },
  { name: "Job Assistance Programme", slug: "job-assistance" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout)
    setShowCoursesDropdown(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setShowCoursesDropdown(false), 300)
    setCloseTimeout(timeout)
  }

  return (
    <header className="sticky top-0 z-20 w-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-8 py-4 md:py-5 shadow-lg">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/favicon.ico" 
            alt="Miraclin Technologies" 
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-white font-bold text-lg md:text-xl">Miraclin Technologies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.filter(link => !link.hidden).map((link) => (
            link.hasDropdown ? (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-white hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium transform hover:-translate-y-0.5 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out text-sm md:text-base inline-flex items-center gap-1"
                >
                  {link.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {showCoursesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-30 max-h-96 overflow-y-auto">
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-white hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium transform hover:-translate-y-0.5 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out text-sm md:text-base ${link.name === 'Login' ? 'animate-pulse' : ''}`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-white hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium transform hover:-translate-y-0.5 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out text-sm md:text-base"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 pb-4">
          {navLinks.filter(link => !link.hidden).map((link) => (
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setShowCoursesDropdown(!showCoursesDropdown)}
                  className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                >
                  {link.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCoursesDropdown && (
                  <div className="pl-4 mt-1">
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors ${link.name === 'Login' ? 'animate-pulse' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
      )}
    </header>
  )
}
