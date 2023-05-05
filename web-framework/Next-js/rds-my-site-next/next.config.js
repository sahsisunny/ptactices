/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocols: ['http', 'https'],
    domains: ['my.realdevsquad.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
