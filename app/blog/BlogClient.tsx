'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

const POSTS_PER_PAGE = 9

interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  tags: string[]
}

interface BlogClientProps {
  initialBlogs: BlogPost[]
  currentPage: number
  totalPages: number
}

export default function BlogClient({ initialBlogs, currentPage, totalPages }: BlogClientProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedBlogs = initialBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog'
    router.push(newUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Training Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert insights, career guidance, and latest trends in technology from Thanjavur's leading training institute
          </p>
          {currentPage > 1 && (
            <p className="text-sm text-gray-500 mt-2">
              Page {currentPage} of {totalPages} • {initialBlogs.length} total articles
            </p>
          )}
        </header>

        <main>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedBlogs.map((blog, index) => (
              <article 
                key={blog.slug} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                  itemProp="image"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      {blog.tags.slice(0, 2).map((tag: string) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time 
                      className="text-gray-500 text-sm"
                      dateTime={blog.date}
                      itemProp="datePublished"
                    >
                      {new Date(blog.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <Link 
                      href={`/blog/${blog.slug}`}
                      itemProp="url"
                    >
                      <span itemProp="headline">{blog.title}</span>
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More →
                    </Link>
                    <span className="text-xs text-gray-400" itemProp="author">
                      {blog.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav 
              className="flex justify-center items-center gap-2"
              aria-label="Blog pagination navigation"
            >
              {currentPage > 1 && (
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Go to previous page"
                >
                  Previous
                </button>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    page === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              
              {currentPage < totalPages && (
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Go to next page"
                >
                  Next
                </button>
              )}
            </nav>
          )}
        </main>
      </div>
    </div>
  )
}
