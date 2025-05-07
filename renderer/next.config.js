/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base configuration for both web and desktop
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  // Conditional configuration based on build target
  ...(process.env.BUILD_TARGET === 'desktop' ? {
    output: 'export',
    distDir: process.env.NODE_ENV === 'production' ? '../dist' : '.next',
    trailingSlash: true,
  } : {
    // Web configuration (default for Vercel)
    output: 'standalone',
  }),
}

module.exports = nextConfig
