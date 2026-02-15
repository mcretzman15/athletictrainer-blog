import { Metadata } from "next";
import Container from "@/components/layout/Container";
import PostCard from "@/components/blog/PostCard";
import CategoryPills from "@/components/blog/CategoryPills";
import Sidebar from "@/components/blog/Sidebar";
import Pagination from "@/components/blog/Pagination";
import { getPaginatedPosts } from "@/lib/posts";
import { getAllCategories, getFeaturedPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Athletic Trainer Career Resources | PSI Blog",
  description: "Career insights, program guides, and resources for athletic trainers exploring military healthcare opportunities with Army H2F and Marine Corps SMIP programs.",
  openGraph: {
    title: "Athletic Trainer Career Resources | PSI Blog",
    description: "Career insights, program guides, and resources for athletic trainers exploring military healthcare opportunities.",
    type: "website",
    url: "https://www.athletictrainerjob.com/blog/",
  },
};

// Force static generation at build time
export const dynamic = 'force-static';

export default async function BlogIndex() {
  // Always show page 1 for static generation
  console.log('[PAGE] BlogIndex rendering...');
  const { posts, pagination } = getPaginatedPosts(1, 9);
  console.log('[PAGE] Received', posts.length, 'posts from getPaginatedPosts');
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts(4);
  console.log('[PAGE] Categories:', categories.length, 'Featured:', featuredPosts.length);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-[#556B47] to-[#3D4F31] text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Athletic Trainer Career Resources
            </h1>
            <p className="text-lg md:text-xl text-green-50">
              Expert insights, program guides, and resources for athletic trainers
              exploring military healthcare opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-border-gray py-6">
        <Container>
          <CategoryPills categories={categories} currentCategory={undefined} />
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
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
                      <PostCard key={post.frontmatter.slug} post={post} />
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
