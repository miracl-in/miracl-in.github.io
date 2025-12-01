import { MetadataRoute } from 'next'
import { coursesData } from './courses/courseData'

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
    '/ai-training-thanjavur'
  ]

  // Course pages
  const coursePages = Object.keys(coursesData).map(slug => `/courses/${slug}`)

  const allPages = [...staticPages, ...coursePages]

  return allPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page.includes('/courses/') ? 0.8 : 0.7,
  }))
}
