import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { frontmatter } = post;

  return (
    <article className="bg-white rounded-xl border border-border-gray hover:shadow-xl transition-all overflow-hidden group">
      <Link href={`/${frontmatter.slug}`}>
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary via-[#556B47] to-[#3D4F31]">
          {/* Gradient background serves as placeholder for missing images */}
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3">
          <Link
            href={`/category/${frontmatter.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="category-pill"
          >
            {frontmatter.category}
          </Link>
        </div>

        <Link href={`/${frontmatter.slug}`}>
          <h3 className="text-xl font-semibold text-dark-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {frontmatter.title}
          </h3>
        </Link>

        <p className="text-gray-text text-sm mb-4 line-clamp-3">
          {frontmatter.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-text">
          <span>{formatDate(frontmatter.date)}</span>
          <span>{frontmatter.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}
