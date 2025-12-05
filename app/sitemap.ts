import { MetadataRoute } from 'next'
import { coursesData } from './courses/courseData'
import { getAllBlogSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miracl.in'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/courses',
    '/career',
    '/team',
    '/research',
    '/project-support',
    '/faq',
    '/privacy',
    '/blog',
    '/locations/thanjavur',
    '/ai-training-thanjavur',
    '/devops-training-thanjavur',
    '/python-training-thanjavur',
    '/ethical-hacking-course-thanjavur'
  ]

  // Course pages
  const coursePages = Object.keys(coursesData).map(slug => `/courses/${slug}`)

  // Blog pages
  const blogSlugs = getAllBlogSlugs()
  const blogPages = blogSlugs.map(slug => `/blog/${slug}`)

  const allPages = [...staticPages, ...coursePages, ...blogPages]

  return allPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : page.includes('/blog/') ? 'weekly' : page.includes('/courses/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('/blog/') ? 0.7 : page.includes('/courses/') ? 0.8 : 0.7,
  }))
}
