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
      <Link href={`/blog/${frontmatter.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={frontmatter.featuredImage}
            alt={frontmatter.featuredImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3">
          <Link
            href={`/blog/category/${frontmatter.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="category-pill"
          >
            {frontmatter.category}
          </Link>
        </div>

        <Link href={`/blog/${frontmatter.slug}`}>
          <h3 className="text-xl font-semibold text-dark-text mb-3 group-hover:text-navy transition-colors line-clamp-2">
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
