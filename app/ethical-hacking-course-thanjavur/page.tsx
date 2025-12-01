import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ethical Hacking Course in Thanjavur | Cybersecurity Training | Penetration Testing | Miraclin Technologies',
  description: 'Professional ethical hacking and cybersecurity training in Thanjavur. Learn penetration testing, network security with hands-on labs. CEH certification prep.',
  keywords: 'ethical hacking course Thanjavur, cybersecurity training, penetration testing course, CEH certification Thanjavur, network security training, cybersecurity institute Thanjavur'
}

export default function EthicalHackingCourseThanjavurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Ethical Hacking Course in Thanjavur
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Master Cybersecurity with Hands-On Penetration Testing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-red-600">Practical Hacking Labs</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>🔍 Network vulnerability scanning</li>
                <li>🛡️ Web application penetration testing</li>
                <li>🔐 Password cracking techniques</li>
                <li>📡 Wireless network security</li>
                <li>🕵️ Social engineering simulations</li>
              </ul>
              
              <h3 className="font-bold mb-2 text-purple-600">Career Opportunities</h3>
              <p className="text-gray-600">Cybersecurity professionals earn ₹6-15 LPA. High demand in banking, IT, government sectors.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Tools You'll Master</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm">Kali Linux</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">Metasploit</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Nmap</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">Burp Suite</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">Wireshark</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">OWASP ZAP</span>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-700">CEH Certification Prep</h4>
                <p className="text-red-600">Prepare for Certified Ethical Hacker exam</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Inquire About Ethical Hacking Course
          </Link>
        </div>
      </div>
    </div>
  )
}
