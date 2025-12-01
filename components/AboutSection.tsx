const organizationDetails = [
  { label: "Industry", value: "Technology Education" },
  { label: "Company Size", value: "Growing Team" },
  { label: "Headquarters", value: "India" },
  { label: "Type", value: "EdTech & Training" },
  { label: "Founded", value: "2025" },
]

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Miraclin Technologies</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Miraclin Technologies is a modern EdTech company specializing in cutting-edge technology training. 
              We offer comprehensive courses in AI, DevSecOps, Cloud Computing, Blockchain, and Full-Stack Development, 
              designed to make students industry-ready from day one.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Our mission is to bridge the gap between academic learning and industry requirements through 
              hands-on, practical training. We don't just teach—we mentor, guide, and ensure every student 
              gains real-world skills and confidence to excel in their tech careers.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Company Overview</h3>
            <div className="space-y-4">
              {organizationDetails.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <span className="font-medium text-gray-600 dark:text-gray-300">{label}</span>
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
