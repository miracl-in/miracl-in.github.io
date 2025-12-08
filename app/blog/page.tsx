import { Metadata } from 'next'
import { getAllBlogs } from '@/lib/blog'
import BlogClient from './BlogClient'

export async function generateMetadata({ searchParams }: { 
  searchParams: { page?: string } 
}): Promise<Metadata> {
  const blogs = await getAllBlogs()
  const currentPage = Number(searchParams.page) || 1
  const totalPages = Math.ceil(blogs.length / 9)
  
  const title = currentPage > 1 
    ? `Tech Training Blog - Page ${currentPage} | Miraclin Technologies`
    : 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies'
  
  const description = currentPage > 1
    ? `Browse page ${currentPage} of our tech training blog. Latest insights on AI, DevSecOps, Cloud Computing from Thanjavur's leading institute.`
    : 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.'

  return {
    title,
    description,
    keywords: 'tech blog, AI tutorials, DevSecOps tips, cloud computing guide, career advice, technology trends, Thanjavur training',
    authors: [{ name: 'Miraclin Technologies' }],
    creator: 'Miraclin Technologies',
    publisher: 'Miraclin Technologies',
    robots: 'index, follow',
    alternates: {
      canonical: currentPage > 1 ? `/blog?page=${currentPage}` : '/blog'
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: currentPage > 1 ? `/blog?page=${currentPage}` : '/blog',
      siteName: 'Miraclin Technologies',
      images: [{
        url: '/hero-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Miraclin Technologies Tech Training Blog'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/hero-image.jpeg']
    },
    other: {
      'article:publisher': 'Miraclin Technologies',
      'article:section': 'Technology Training',
      'og:locale': 'en_US'
    }
  }
}

export default async function BlogPage({ searchParams }: { 
  searchParams: { page?: string } 
}) {
  const blogs = await getAllBlogs()
  const currentPage = Number(searchParams.page) || 1
  const totalPages = Math.ceil(blogs.length / 9)
  
  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Miraclin Technologies Tech Training Blog',
    description: 'Expert insights on AI, DevSecOps, Cloud Computing, and technology careers',
    url: 'https://miraclin-technologies.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Miraclin Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://miraclin-technologies.com/hero-image.jpeg'
      }
    },
    blogPost: blogs.slice(0, 10).map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.excerpt,
      author: {
        '@type': 'Organization',
        name: blog.author
      },
      datePublished: blog.date,
      url: `https://miraclin-technologies.com/blog/${blog.slug}`,
      image: `https://miraclin-technologies.com${blog.image}`
    }))
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient 
        initialBlogs={blogs} 
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  )
}
