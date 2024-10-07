/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sb1-pacific-v6",
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
