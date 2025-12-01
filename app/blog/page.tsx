import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
  description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
  keywords: 'tech blog, AI tutorials, DevSecOps tips, cloud computing guide, career advice, technology trends'
}

const blogPosts = [
  {
    title: "Top 10 AI Jobs in Tamil Nadu 2024",
    excerpt: "Discover the highest paying AI jobs available for freshers and experienced professionals in Tamil Nadu.",
    slug: "ai-jobs-tamil-nadu-2024",
    date: "Dec 1, 2024",
    category: "Career"
  },
  {
    title: "DevSecOps vs DevOps: Which Career Path to Choose?",
    excerpt: "Complete comparison of DevSecOps and DevOps careers, salary expectations, and job opportunities.",
    slug: "devsecops-vs-devops-career",
    date: "Nov 28, 2024",
    category: "Career"
  },
  {
    title: "AWS vs Azure: Which Cloud Platform to Learn First?",
    excerpt: "Detailed comparison of AWS and Azure for beginners. Which certification should you pursue?",
    slug: "aws-vs-azure-beginners-guide",
    date: "Nov 25, 2024",
    category: "Cloud"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
          Tech Training Blog
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Expert insights, career guidance, and latest trends in technology from Thanjavur's leading training institute
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
