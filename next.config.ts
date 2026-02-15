import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'www.athletictrainerjob.com' 
      },
      { 
        protocol: 'https', 
        hostname: 'cdn.prod.website-files.com' 
      },
      { 
        protocol: 'https', 
        hostname: 'images.unsplash.com' 
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { 
            key: 'X-Robots-Tag', 
            value: 'index, follow' 
          },
        ],
      },
    ];
  },
  // Ensure content directory is included in the build
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./content/**/*'],
    },
  },
};

export default nextConfig;
