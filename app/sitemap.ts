import { MetadataRoute } from 'next'
import { coursesData } from './courses/courseData'
import { getAllBlogSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miracl.in'
  
  // High priority pages
  const highPriorityPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/courses', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/training', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const }
  ]

  // Training pages (location-specific)
  const trainingPages = [
    '/ai-training-thanjavur',
    '/devops-training-thanjavur', 
    '/python-training-thanjavur',
    '/ethical-hacking-course-thanjavur',
    '/software-training-thanjavur',
    '/programming-courses-thanjavur',
    '/it-training-institute-thanjavur',
    '/web-development-course-thanjavur',
    '/data-science-training-thanjavur'
  ].map(url => ({
    url,
    priority: 0.8,
    changeFrequency: 'weekly' as const
  }))

  // Other static pages
  const staticPages = [
    '/career',
    '/team', 
    '/research',
    '/project-support',
    '/faq',
    '/privacy',
    '/locations/thanjavur'
  ].map(url => ({
    url,
    priority: 0.6,
    changeFrequency: 'monthly' as const
  }))

  // Course pages
  const coursePages = Object.keys(coursesData).map(slug => ({
    url: `/courses/${slug}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const
  }))

  // Blog pages with higher priority for recent posts
  const blogSlugs = getAllBlogSlugs()
  const recentBlogPosts = [
    'cybersecurity-fundamentals-2025',
    'data-science-career-roadmap-2025', 
    'react-development-mastery-2025',
    'mobile-app-development-trends-2025',
    'software-testing-automation-guide-2025'
  ]
  
  const blogPages = blogSlugs.map(slug => ({
    url: `/blog/${slug}`,
    priority: recentBlogPosts.includes(slug) ? 0.8 : 0.7,
    changeFrequency: 'weekly' as const
  }))

  const allPages = [
    ...highPriorityPages,
    ...trainingPages, 
    ...staticPages,
    ...coursePages,
    ...blogPages
  ]

  return allPages.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
