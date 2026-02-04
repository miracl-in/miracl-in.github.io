import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OSINT Research & Digital Journalism Projects - Miraclin Technologies',
  description: 'Join our investigative research program. Learn OSINT techniques, conduct digital investigations, and publish findings through cyber journalism. Professional training and research projects.',
}

export default function ProjectSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            OSINT Research & Digital Journalism Projects
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-2">
            Learn investigative research techniques, master OSINT tools, and publish digital investigations. 
            Join our research program for open source intelligence and cyber journalism methodologies.
          </p>
        </div>

        {/* Research Focus Areas */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Research & Investigation Focus Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">🌍 Geospatial Intelligence & Verification</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Satellite image analysis using Google Earth, Planet Labs</li>
                <li>• Geolocation verification from photos/videos</li>
                <li>• Chronolocation using shadows, weather, astronomical data</li>
                <li>• Infrastructure monitoring and conflict documentation</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">🔍 Digital Forensics & Evidence Analysis</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Metadata extraction and EXIF analysis</li>
                <li>• Video/photo authentication and deepfake detection</li>
                <li>• Weapon identification and military equipment analysis</li>
                <li>• Facial recognition and identity verification</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">📱 Social Media Intelligence (SOCMINT)</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Social network mapping and influence analysis</li>
                <li>• Disinformation campaign detection and bot analysis</li>
                <li>• Real-time event monitoring and crisis mapping</li>
                <li>• Account attribution and anonymous identity linking</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">📊 Data Mining & Pattern Recognition</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Flight/ship tracking analysis (ADS-B, AIS data)</li>
                <li>• Financial flow analysis and cryptocurrency tracking</li>
                <li>• Communication pattern analysis (Telegram, encrypted messaging)</li>
                <li>• Procurement & supply chain investigations</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">🤖 AI-Powered Cyber OSINT</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Automated social media monitoring and sentiment analysis</li>
                <li>• AI-driven facial recognition and identity clustering</li>
                <li>• Machine learning for disinformation pattern detection</li>
                <li>• Natural language processing for threat intelligence</li>
              </ul>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">🔬 Advanced Cyber Intelligence</h3>
              <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
                <li>• Dark web monitoring and threat actor profiling</li>
                <li>• Automated vulnerability and breach intelligence</li>
                <li>• AI-assisted network traffic analysis</li>
                <li>• Predictive modeling for cyber threat assessment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training & Publication Process */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Training & Publication Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">OSINT Training</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Learn investigative techniques and master OSINT tools</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Research Project</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Conduct real investigations using learned methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Digital Publication</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Write and publish findings as digital journalism</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Cyber Journalism</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Build portfolio of published investigative work</p>
            </div>
          </div>
        </section>

        {/* OSINT Tools & Technologies */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">OSINT Tools & Technologies You'll Master</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">🛰️ Geospatial Analysis</h3>
              <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                <li>• Google Earth Pro</li>
                <li>• Planet Labs imagery</li>
                <li>• Sentinel Hub</li>
                <li>• QGIS mapping</li>
                <li>• SunCalc chronolocation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">🔍 Investigation Tools</h3>
              <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                <li>• Maltego network analysis</li>
                <li>• Shodan device search</li>
                <li>• TinEye reverse search</li>
                <li>• Wayback Machine</li>
                <li>• ExifTool metadata</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">📱 Social Media Intel</h3>
              <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                <li>• Social network scrapers</li>
                <li>• Telegram monitoring</li>
                <li>• Twitter advanced search</li>
                <li>• Facebook Graph Search</li>
                <li>• Bot detection tools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">🤖 AI-Powered OSINT</h3>
              <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                <li>• OpenCV face recognition</li>
                <li>• YOLO object detection</li>
                <li>• spaCy NLP analysis</li>
                <li>• Scikit-learn clustering</li>
                <li>• TensorFlow deepfake detection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Who Should Join This Program?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Students & Researchers</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Learn investigative journalism and digital research skills</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📰</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Aspiring Journalists</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Master cyber journalism and digital investigation techniques</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Security Professionals</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Enhance OSINT skills for threat intelligence and analysis</p>
            </div>
          </div>
        </section>

        {/* What You'll Achieve */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What You'll Achieve</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Master professional investigative methodologies",
              "Publish digital investigations and cyber journalism articles",
              "Build a portfolio of published research work",
              "Develop expertise in OSINT tools and AI-powered techniques",
              "Learn to verify information and detect disinformation using AI",
              "Conduct geospatial analysis and satellite imagery investigation",
              "Perform social media intelligence and automated network analysis",
              "Create data-driven investigative reports with machine learning insights",
              "Implement AI-based facial recognition and identity clustering",
              "Use natural language processing for threat intelligence analysis",
              "Deploy automated monitoring systems for cyber threat detection",
              "Apply machine learning for pattern recognition in large datasets"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-600 text-lg sm:text-xl flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Research Ethics & Legal Framework */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Research Ethics & Legal Framework</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">🛡️ Ethical Guidelines</h3>
              <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Responsible disclosure practices</li>
                <li>• Privacy protection in investigations</li>
                <li>• Source verification and fact-checking</li>
                <li>• Avoiding harm to individuals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">⚖️ Legal Compliance</h3>
              <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Understanding legal boundaries in OSINT</li>
                <li>• Data protection and GDPR compliance</li>
                <li>• Intellectual property considerations</li>
                <li>• Journalistic standards and ethics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8 sm:mb-12 lg:mb-16 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What is OSINT and how does it work?",
                a: "OSINT (Open Source Intelligence) involves gathering and analyzing publicly available information for investigations. We use satellite imagery, social media analysis, and digital forensics to uncover facts and publish findings."
              },
              {
                q: "Will I publish real investigations?",
                a: "Yes! You'll conduct actual research projects and publish your findings as digital journalism articles, building a portfolio of investigative work."
              },
              {
                q: "Do I need prior journalism or technical experience?",
                a: "No prior experience required. We'll train you from basics to advanced OSINT techniques and digital journalism skills."
              },
              {
                q: "What kind of investigations will I work on?",
                a: "Projects may include conflict monitoring, disinformation analysis, environmental investigations, human rights documentation, and other public interest research."
              },
              {
                q: "Is this program suitable for academic research?",
                a: "Absolutely! The skills and methodologies learned are valuable for academic research, thesis projects, and scholarly publications."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b pb-3 sm:pb-4 last:border-0">
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Ready to Become an Investigative Researcher?</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90 px-2">Join our OSINT training program and start publishing digital investigations!</p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            Apply for Research Program
          </a>
        </div>
      </div>
    </div>
  )
}
