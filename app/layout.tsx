import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://miracl.in'),
  title: 'Miraclin Technologies - Best Tech Training Institute in Thanjavur | AI, DevSecOps, Cloud Computing',
  description: 'Leading technology training institute in Thanjavur offering courses in AI, DevSecOps, Cloud Computing, Python, Blockchain. Expert-led training with job assistance. Enroll now!',
  keywords: 'tech training Thanjavur, AI course Thanjavur, DevSecOps training, cloud computing course, Python programming, blockchain development, job assistance, technology institute Thanjavur',
  authors: [{ name: 'Miraclin Technologies' }],
  creator: 'Miraclin Technologies',
  publisher: 'Miraclin Technologies',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://miracl.in',
    siteName: 'Miraclin Technologies',
    title: 'Miraclin Technologies - Best Tech Training Institute in Thanjavur',
    description: 'Transform your tech career with expert-led training in AI, DevSecOps, Cloud Computing. Job assistance included. Located in Thanjavur.',
    images: [
      {
        url: '/hero-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Miraclin Technologies Training Institute'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miraclin Technologies - Tech Training Institute Thanjavur',
    description: 'Expert-led tech training in AI, DevSecOps, Cloud Computing with job assistance',
    images: ['/hero-image.jpeg']
  },
  verification: {
    google: '-vxmtRm92qhkpFnw1WWDw3eDAG6qWmfzWxEtXocFyTk'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://miracl.in" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Thanjavur" />
        <meta name="geo.position" content="10.7905;79.1378" />
        <meta name="ICBM" content="10.7905, 79.1378" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Miraclin Technologies",
              "description": "Technology training institute specializing in AI, DevSecOps, Cloud Computing",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 35 & 36, 1st Floor, Infant Jesus Commercial Complex",
                "addressLocality": "Thanjavur",
                "postalCode": "613005",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6381612228",
                "email": "miraclintech@gmail.com"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
