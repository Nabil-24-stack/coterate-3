/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove experimental.appDir as it's now deprecated in Next.js 14+
  images: {
    domains: ['plus.unsplash.com', 'images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    buildActivity: true
  }
};

module.exports = nextConfig;