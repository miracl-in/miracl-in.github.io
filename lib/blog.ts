import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  tags: string[]
  content: string
}

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md') && fileName !== 'README.md')
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const htmlContent = await marked(content)
  
  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    image: data.image,
    tags: data.tags || [],
    content: htmlContent
  }
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const slugs = getAllBlogSlugs()
  const blogs = await Promise.all(slugs.map(slug => getBlogBySlug(slug)))
  return blogs.sort((a, b) => (a.date > b.date ? -1 : 1))
}
