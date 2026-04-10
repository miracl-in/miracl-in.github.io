/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  }
}

module.exports = nextConfig
