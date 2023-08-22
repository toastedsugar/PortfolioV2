/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.contentful.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
