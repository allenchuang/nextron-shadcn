/** @type {import('next').NextConfig} */
module.exports = {
  // Only enable static export and custom distDir for non-Vercel builds
  ...(process.env.VERCEL ? {} : {
    output: 'export',
    distDir: process.env.NODE_ENV === 'production' ? '../dist' : '.next',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    webpack: config => {
      return config
    }
  }),

}
