import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog",
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "www.athletictrainerjob.com" 
      },
      { 
        protocol: "https", 
        hostname: "cdn.prod.website-files.com" 
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { 
            key: "X-Robots-Tag", 
            value: "index, follow" 
          },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
