import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Training in Thanjavur | Machine Learning Course | Miraclin Technologies',
  description: 'Best data science training in Thanjavur. Learn Python, ML, AI, statistics, data analysis. Expert trainers, hands-on projects, placement assistance.',
  keywords: 'data science training thanjavur, machine learning course thanjavur, python data science thanjavur, AI training thanjavur',
  openGraph: {
    title: 'Data Science Training in Thanjavur | Machine Learning Course | Miraclin Technologies',
    description: 'Best data science training in Thanjavur. Learn Python, ML, AI, statistics with expert trainers.',
    url: 'https://miracl.in/data-science-training-thanjavur',
  }
}

export default function DataScienceTrainingThanjavur() {
  const skills = [
    'Python Programming', 'Statistics & Probability', 'Data Visualization', 'Machine Learning',
    'Deep Learning', 'SQL & Databases', 'Pandas & NumPy', 'Scikit-learn', 'TensorFlow', 'Power BI'
  ]

  const projects = [
    'Sales Forecasting System', 'Customer Segmentation Analysis', 'Sentiment Analysis Tool',
    'Recommendation Engine', 'Fraud Detection Model', 'Stock Price Prediction'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Data Science Training in Thanjavur
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Master data science and machine learning with comprehensive training in Python, statistics, ML algorithms, and real-world projects in Thanjavur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Data Science?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">📈</span>
                <div>
                  <h4 className="font-bold">High Demand Career</h4>
                  <p className="text-gray-600">Data scientists are among the most sought-after professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">💰</span>
                <div>
                  <h4 className="font-bold">Excellent Salary</h4>
                  <p className="text-gray-600">Average salary ranges from ₹6-15 LPA for freshers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🌍</span>
                <div>
                  <h4 className="font-bold">Remote Opportunities</h4>
                  <p className="text-gray-600">Work with global companies from Thanjavur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Course Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Duration:</span>
                <span>5 months</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Mode:</span>
                <span className="text-2xl font-bold text-blue-600">Online/Offline</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prerequisites:</span>
                <span>Basic Math & Computer</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Certification:</span>
                <span>Industry Recognized</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Job Assistance:</span>
                <span>100% Support</span>
              </div>
            </div>
            <a href="/contact" className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
              Start Your Journey
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Skills You'll Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
                <span className="font-semibold text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Projects</h2>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Path</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-bold">Foundation</h4>
                  <p className="text-gray-600">Python, Statistics, Data Manipulation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-bold">Analysis</h4>
                  <p className="text-gray-600">Data Visualization, EDA, Insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-bold">Machine Learning</h4>
                  <p className="text-gray-600">Algorithms, Model Building, Evaluation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-bold">Deployment</h4>
                  <p className="text-gray-600">Model Deployment, Portfolio Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Data Science Expert</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the most comprehensive data science training in Thanjavur and unlock high-paying career opportunities
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Enroll Today
          </a>
        </div>
      </div>
    </main>
  )
}
