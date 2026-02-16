import { Metadata } from "next";
import Container from "@/components/layout/Container";
import PostCard from "@/components/blog/PostCard";
import CategoryPills from "@/components/blog/CategoryPills";
import Sidebar from "@/components/blog/Sidebar";
import Pagination from "@/components/blog/Pagination";
import { getPaginatedPosts } from "@/lib/posts";
import { getAllCategories, getFeaturedPosts } from "@/lib/mdx";

interface BlogIndexProps {
  searchParams: Promise<{ page?: string }>;
}

export const metadata: Metadata = {
  title: "Athletic Trainer Career Resources | PSI Blog",
  description: "Career insights, program guides, and resources for athletic trainers exploring military healthcare opportunities with Army H2F and Marine Corps SMIP programs.",
  openGraph: {
    title: "Athletic Trainer Career Resources | PSI Blog",
    description: "Career insights, program guides, and resources for athletic trainers exploring military healthcare opportunities.",
    type: "website",
    url: "https://blog.athletictrainerjob.com/",
  },
};

export default async function BlogIndex({ searchParams }: BlogIndexProps) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const { posts, pagination } = getPaginatedPosts(page, 9);
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts(4);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-army-dark to-army-green text-white py-16 md:py-20 camo-texture">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Military Athletic Trainer Careers
            </h1>
            <p className="text-lg md:text-xl text-army-tan">
              Expert insights, program guides, and resources for athletic trainers
              exploring military healthcare opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filters */}
      <section className="bg-cream border-b border-army-tan/30 py-6">
        <Container>
          <CategoryPills categories={categories} currentCategory={undefined} />
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-sand">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-text text-lg">
                    No articles found yet. Check back soon!
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination pagination={pagination} basePath="/" />
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar featuredPosts={featuredPosts} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
