import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
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
};

export default nextConfig;
