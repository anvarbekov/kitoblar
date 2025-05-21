/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-source.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // if your website has no www, drop it
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
}

module.exports = nextConfig
