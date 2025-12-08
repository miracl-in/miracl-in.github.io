import { getAllBlogs } from '@/lib/blog'
import BlogClient from './BlogClient'

export default async function BlogPage() {
  const blogs = await getAllBlogs()
  
  return <BlogClient initialBlogs={blogs} />
}
