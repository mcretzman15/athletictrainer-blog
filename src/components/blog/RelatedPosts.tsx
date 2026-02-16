import PostCard from "./PostCard";
import { Post } from "@/lib/mdx";

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-12 bg-cream border-t border-army-tan/30">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-army-dark mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
