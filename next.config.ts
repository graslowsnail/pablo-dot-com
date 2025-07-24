import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'graslowsnail.s3.us-east-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      // Add more domains as needed
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https: blob:;
              font-src 'self' data:;
              connect-src 'self' https: wss:;
              frame-src 'self' https://vercel.live;
            `.replace(/\s{2,}/g, ' ').trim()
          },
        ],
      },
    ];
  },
};

export default nextConfig;
