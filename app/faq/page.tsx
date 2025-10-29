'use client'
import { useState } from 'react'

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What is Miraclin Technologies?",
          a: "Miraclin Technologies is a leading EdTech platform offering practical, industry-relevant courses in software development, DevOps, cybersecurity, and emerging technologies."
        },
        {
          q: "How are your courses different from others?",
          a: "Our courses focus on hands-on learning with real-world projects, industry expert instructors, and direct job placement assistance. We emphasize practical skills over theoretical knowledge."
        },
        {
          q: "Do you provide certificates?",
          a: "Yes, we provide industry-recognized certificates upon successful completion of courses. Our certificates are valued by top tech companies."
        }
      ]
    },
    {
      category: "Course & Learning",
      questions: [
        {
          q: "How long are the courses?",
          a: "Most of our courses are 3 months long, designed to provide comprehensive learning while maintaining flexibility for working professionals."
        },
        {
          q: "Can I learn at my own pace?",
          a: "Yes, our courses offer flexible scheduling with recorded sessions, live doubt-clearing sessions, and 24/7 access to course materials."
        },
        {
          q: "What if I miss a live session?",
          a: "All live sessions are recorded and available for later viewing. You can also schedule 1-on-1 sessions with instructors for personalized guidance."
        },
        {
          q: "Do you provide hands-on projects?",
          a: "Absolutely! Each course includes multiple real-world projects that you can add to your portfolio and showcase to potential employers."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "What technical requirements do I need?",
          a: "A computer with internet connection is sufficient. We provide cloud-based development environments for most courses, eliminating setup hassles."
        },
        {
          q: "How do I access course materials?",
          a: "After enrollment, you'll receive login credentials to our learning platform where all materials, videos, and resources are available 24/7."
        },
        {
          q: "What if I face technical issues?",
          a: "Our technical support team is available via email, chat, and phone. We also have community forums where students help each other."
        },
        {
          q: "Can I download course videos?",
          a: "Course videos are available for streaming on our platform. Limited offline access is available through our mobile app for premium students."
        }
      ]
    },
    {
      category: "Payment & Refunds",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major payment methods including credit/debit cards, UPI, net banking, and EMI options through our secure payment gateway."
        },
        {
          q: "Do you offer EMI options?",
          a: "Yes, we offer flexible EMI options starting from ₹1,000 per month for most courses. No additional processing fees."
        },
        {
          q: "What is your refund policy?",
          a: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, we'll provide a full refund, no questions asked."
        },
        {
          q: "Are there any hidden charges?",
          a: "No hidden charges. The course fee includes all materials, projects, certificates, and placement assistance. What you see is what you pay."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our courses, platform, and services
          </p>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 mb-12 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-6 opacity-90">Can't find what you're looking for? Our support team is here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Support
            </a>
            <a href="mailto:support@miraclintech.com" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Email Us
            </a>
          </div>
        </div>

        {/* FAQ Sections */}
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.questions.map((faq, faqIndex) => {
                const globalIndex = sectionIndex * 100 + faqIndex
                return (
                  <div key={faqIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)}
                    >
                      <span className="font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.q}
                      </span>
                      <span className="text-2xl text-gray-400 flex-shrink-0">
                        {openFAQ === globalIndex ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === globalIndex && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Learning Guides */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Learning Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Getting Started Guide</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step guide to begin your learning journey with us.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Read Guide →
              </a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technical Setup</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete guide to set up your development environment.
              </p>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Setup Guide →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
