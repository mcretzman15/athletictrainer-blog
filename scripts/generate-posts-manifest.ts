import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostManifest {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  imageCredit?: string;
  readingTime: number;
  published: boolean;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl: string;
  ogImage?: string;
  schema: string;
  funnelStage?: string;
  persona?: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  relatedPosts?: string[];
  content: string;
  headings: { level: number; text: string; id: string }[];
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function extractHeadings(content: string): { level: number; text: string; id: string }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ level, text, id });
  }

  return headings;
}

async function main() {
  console.log("📝 Generating posts manifest for Cloudflare Workers...\n");

  const postsDir = path.join(process.cwd(), "content", "posts");
  const generatedDir = path.join(process.cwd(), "src", "generated");

  if (!fs.existsSync(postsDir)) {
    console.error("❌ Posts directory not found:", postsDir);
    process.exit(1);
  }

  // Create generated directory if it doesn't exist
  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  console.log(`Found ${files.length} blog posts\n`);

  const posts: PostManifest[] = [];

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const readingTime = data.readingTime || calculateReadingTime(content);
    const headings = extractHeadings(content);

    posts.push({
      slug: data.slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updatedDate: data.updatedDate,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      featuredImageAlt: data.featuredImageAlt,
      imageCredit: data.imageCredit,
      readingTime,
      published: data.published !== false,
      featured: data.featured,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      canonicalUrl: data.canonicalUrl,
      ogImage: data.ogImage,
      schema: data.schema,
      funnelStage: data.funnelStage,
      persona: data.persona,
      primaryKeyword: data.primaryKeyword,
      secondaryKeywords: data.secondaryKeywords,
      relatedPosts: data.relatedPosts,
      content,
      headings,
    });

    console.log(`   ✓ ${data.slug}`);
  }

  // Generate TypeScript file
  const manifestPath = path.join(generatedDir, "posts-manifest.ts");
  const fileContent = `// Auto-generated at build time - do not edit manually
// This file bundles post data for Cloudflare Workers (no filesystem access)

export const postsManifest = ${JSON.stringify(posts, null, 2)} as const;

export type PostManifest = typeof postsManifest[number];
`;

  fs.writeFileSync(manifestPath, fileContent);

  console.log(`\n✅ Posts manifest generated!`);
  console.log(`   File: ${manifestPath}`);
  console.log(`   Posts: ${posts.length}`);
  console.log(`   Published: ${posts.filter(p => p.published).length}`);
}

main().catch((err) => {
  console.error("❌ Manifest generation failed:", err);
  process.exit(1);
});
