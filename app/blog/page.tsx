import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogs } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
  description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
  keywords: 'tech blog, AI tutorials, DevSecOps tips, cloud computing guide, career advice, technology trends'
}

export default async function BlogPage() {
  const blogs = await getAllBlogs()

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
          {blogs.map((blog) => (
            <article key={blog.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    {blog.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link 
                  href={`/blog/${blog.slug}`}
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
