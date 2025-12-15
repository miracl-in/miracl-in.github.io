const teamMembers = [
  {
    id: 7,
    name: "Aldrin Wilfred A",
    role: "Senior Consultant",
    bio: "Experienced Consultant (from fsociety.in) specializing in DevSecOps and Application Security. Provides personalized guidance and mentorship to students.",
    expertise: ["Security+", "DevOps", "DevSecOps", "Jenkins", "Python", "JavaScript", "Linux", "AWS", "Azure", "Deep learning"],
    experience: "7+ years",
    education: "M.S (Europe) - Telecommunications",
    image: "AW"
  },
  {
    id: 8,
    name: "Jossina Vijita A",
    role: "Senior Consultant",
    bio: "Expert Consultant with strong background in Python programming languages. Focuses on practical testing skills and problem-solving.",
    expertise: ["Python", "Automation", "Software Testing", "Data Science", "C++", "Problem Solving", "Agentic AI", "Artificial Intelligence"],
    experience: "4+ years",
    education: "M.Sc - Information Technology",
    image: "JV"
  }
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Learn from industry professionals with real-world experience at top tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {member.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>💼</span>
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎓</span>
                    <span>{member.education}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Learning Community</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get personalized guidance from industry experts and accelerate your tech career
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
