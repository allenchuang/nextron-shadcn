/** @type {import('next').NextConfig} */
module.exports = {
  // Only enable static export for desktop builds
  ...(process.env.BUILD_TARGET === 'desktop' ? { output: 'export' } : {}),
  distDir: process.env.NODE_ENV === 'production' ? '../dist' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: config => {
    return config
  }
}
