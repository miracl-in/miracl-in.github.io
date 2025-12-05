import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  
  return {
    title: `${blog.title} - Miraclin Technologies Blog`,
    description: blog.excerpt,
    keywords: blog.tags.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author]
    }
  }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <article className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            {blog.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{blog.author}</span>
            <span>•</span>
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            ← Back to All Posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
