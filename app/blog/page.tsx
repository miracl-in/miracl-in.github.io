import { Metadata } from 'next'
import { getAllBlogs } from '@/lib/blog'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
  description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
  keywords: 'tech blog, AI tutorials, DevSecOps tips, cloud computing guide, career advice, technology trends, Thanjavur training',
  authors: [{ name: 'Miraclin Technologies' }],
  creator: 'Miraclin Technologies',
  publisher: 'Miraclin Technologies',
  robots: 'index, follow',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
    description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
    type: 'website',
    locale: 'en_US',
    url: '/blog',
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
    title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
    description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
    images: ['/hero-image.jpeg']
  }
}

export default async function BlogPage() {
  const blogs = await getAllBlogs()
  
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
      <BlogClient initialBlogs={blogs} />
    </>
  )
}
