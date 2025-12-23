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
    'microservices-architecture-guide-2026',
    'typescript-advanced-development-2026',
    'graphql-api-development-2026',
    'redis-caching-strategies-2026',
    'mongodb-database-design-2026',
    'docker-containerization-guide-2026',
    'rest-api-design-2026',
    'git-version-control-mastery-2026',
    'elasticsearch-search-engine-2026',
    'apache-kafka-streaming-2026',
    'terraform-infrastructure-as-code-2026',
    'nodejs-backend-development-guide-2026',
    'flutter-mobile-app-development-guide-2026',
    'golang-backend-development-2026',
    'angular-frontend-development-2026',
    'vue-js-development-guide-2026',
    'postgresql-database-administration-2026',
    'linux-system-administration-guide-2026',
    'kubernetes-container-orchestration-guide-2026',
    'java-programming-career-guide-2026',
    'aws-cloud-certification-roadmap-2026',
    'digital-marketing-seo-guide-2026',
    'mobile-app-development-trends-2026',
    'software-testing-automation-guide-2026',
    'full-stack-development-roadmap-2026',
    'ai-machine-learning-career-2026'
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
