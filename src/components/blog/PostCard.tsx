import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { frontmatter, slug } = post;

  return (
    <article className="bg-cream rounded-lg border border-army-tan hover:shadow-lg hover:border-l-4 hover:border-l-army-green transition-all overflow-hidden group">
      <Link href={`/${slug}`}>
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-army-dark to-army-green camo-texture">
          {frontmatter.featuredImage && (
            <Image
              src={frontmatter.featuredImage}
              alt={frontmatter.featuredImageAlt || frontmatter.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3">
          <Link
            href={`/category/${frontmatter.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-tag-bg text-army-green px-4 py-1.5 rounded-full text-sm font-medium inline-block hover:bg-opacity-80 transition-colors"
          >
            {frontmatter.category}
          </Link>
        </div>

        <Link href={`/${slug}`}>
          <h3 className="text-xl font-semibold text-army-dark mb-3 group-hover:text-army-green transition-colors line-clamp-2">
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
