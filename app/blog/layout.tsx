import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Training Blog | AI, DevSecOps, Cloud Computing Tips - Miraclin Technologies',
  description: 'Latest insights on AI, DevSecOps, Cloud Computing, and career guidance. Expert tips from Thanjavur\'s leading tech training institute.',
  keywords: 'tech blog, AI tutorials, DevSecOps tips, cloud computing guide, career advice, technology trends'
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
