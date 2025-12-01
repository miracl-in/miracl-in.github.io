import { coursesData } from '../courseData'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = coursesData[params.slug as keyof typeof coursesData]
  
  if (!course) {
    return { title: 'Course Not Found' }
  }

  return {
    title: `${course.name} - Miraclin Technologies`,
    description: course.description,
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = coursesData[params.slug as keyof typeof coursesData]

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {course.name}
          </h1>
          <p className="text-gray-600 text-lg mb-6">{course.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">{course.level}</span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold">{course.duration}</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold">{course.price}</span>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800"><strong>Next Batch Starts:</strong> {course.nextBatch}</p>
          </div>
        </div>

        {/* Program Highlights */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Highlights</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {course.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* About Course */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Course</h2>
          <p className="text-gray-700 leading-relaxed">{course.about}</p>
        </section>

        {/* Curriculum */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
          <div className="space-y-4">
            {course.curriculum.map((module, i) => (
              <div key={i} className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">{module.module}</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j}>• {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Audience</h2>
          <ul className="space-y-2">
            {course.targetAudience.map((audience, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">→</span> {audience}
              </li>
            ))}
          </ul>
        </section>

        {/* Prerequisites */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-requisites</h2>
          <p className="text-gray-700">{course.prerequisites}</p>
        </section>

        {/* FAQs */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {course.faqs.map((faq, i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}
