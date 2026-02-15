import Link from "next/link";
import { Post } from "@/lib/mdx";

interface SidebarProps {
  featuredPosts: Post[];
}

export default function Sidebar({ featuredPosts }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Featured Articles */}
      <div className="bg-white rounded-lg border border-border-gray p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">
          Featured Articles
        </h3>
        <div className="space-y-4">
          {featuredPosts.map((post) => (
            <Link
              key={post.frontmatter.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="block group"
            >
              <h4 className="text-sm font-medium text-dark-text group-hover:text-navy transition-colors line-clamp-2 mb-1">
                {post.frontmatter.title}
              </h4>
              <span className="text-xs text-gray-text">
                {post.frontmatter.readingTime} min read
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Apply Now CTA */}
      <div className="bg-navy text-white rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Ready to Apply?</h3>
        <p className="text-sm text-gray-200 mb-4">
          Join our team of Athletic Trainers serving in military healthcare
          programs across the United States.
        </p>
        <Link
          href="https://www.athletictrainerjob.com/job-description#apply-main"
          className="btn-accent w-full text-center inline-flex items-center justify-center gap-2"
        >
          Apply Now
          <span className="text-lg">➜</span>
        </Link>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-light-gray rounded-lg p-6">
        <h3 className="text-lg font-semibold text-navy mb-3">
          Stay Informed
        </h3>
        <p className="text-sm text-gray-text mb-4">
          Get the latest insights on military athletic training careers
          delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border border-border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
