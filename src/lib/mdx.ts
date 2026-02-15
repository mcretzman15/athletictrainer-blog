import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime, extractHeadings } from "./utils";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const authorsDirectory = path.join(process.cwd(), "content", "authors");

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  imageCredit?: string;
  readingTime?: number;
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
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  headings: { level: number; text: string; id: string }[];
}

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export function getPostSlugs(): string[] {
  console.log('[MDX] Checking posts directory:', postsDirectory);
  console.log('[MDX] process.cwd():', process.cwd());
  if (!fs.existsSync(postsDirectory)) {
    console.error('[MDX] Posts directory does not exist:', postsDirectory);
    return [];
  }
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
  console.log('[MDX] Found', files.length, 'MDX files:', files);
  return files;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as PostFrontmatter;
    
    // Calculate reading time if not provided
    if (!frontmatter.readingTime) {
      frontmatter.readingTime = calculateReadingTime(content);
    }

    const headings = extractHeadings(content);

    return {
      frontmatter,
      content,
      headings,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  console.log('[MDX] getAllPosts: found', slugs.length, 'slugs');
  const posts = slugs
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is Post => post !== null && post.frontmatter.published)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA; // Most recent first
    });

  console.log('[MDX] getAllPosts: returning', posts.length, 'published posts');
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) =>
      post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByAuthor(authorSlug: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.author === authorSlug);
}

export function getFeaturedPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.featured).slice(0, limit);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const relatedBySlug = currentPost.frontmatter.relatedPosts || [];

  // First, get explicitly related posts
  const explicitlyRelated = relatedBySlug
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null);

  // If we don't have enough, find posts in same category
  if (explicitlyRelated.length < limit) {
    const sameCategory = allPosts
      .filter(
        (post) =>
          post.frontmatter.slug !== currentSlug &&
          post.frontmatter.category === currentPost.frontmatter.category &&
          !relatedBySlug.includes(post.frontmatter.slug)
      )
      .slice(0, limit - explicitlyRelated.length);

    return [...explicitlyRelated, ...sameCategory].slice(0, limit);
  }

  return explicitlyRelated.slice(0, limit);
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.frontmatter.category));
  return Array.from(categories).sort();
}

export function getAuthorBySlug(slug: string): Author | null {
  try {
    const fullPath = path.join(authorsDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents) as Author;
  } catch (error) {
    console.error(`Error reading author ${slug}:`, error);
    return null;
  }
}
