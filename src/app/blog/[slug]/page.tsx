import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Container from "@/components/layout/Container";
import PostHero from "@/components/blog/PostHero";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBox from "@/components/blog/AuthorBox";
import RelatedPosts from "@/components/blog/RelatedPosts";
import ShareButtons from "@/components/blog/ShareButtons";
import CTABanner from "@/components/blog/CTABanner";
import { getPostBySlug, getAllPosts, getAuthorBySlug, getRelatedPosts } from "@/lib/mdx";
import { formatDate, generateBreadcrumbs } from "@/lib/utils";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

interface BlogPostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { frontmatter } = post;

  return {
    title: frontmatter.seoTitle || frontmatter.title,
    description: frontmatter.seoDescription || frontmatter.description,
    openGraph: {
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
      type: "article",
      url: frontmatter.canonicalUrl,
      images: [
        {
          url: frontmatter.ogImage || frontmatter.featuredImage,
          alt: frontmatter.featuredImageAlt,
        },
      ],
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updatedDate || frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.seoTitle || frontmatter.title,
      description: frontmatter.seoDescription || frontmatter.description,
      images: [frontmatter.ogImage || frontmatter.featuredImage],
    },
    alternates: {
      canonical: frontmatter.canonicalUrl,
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, headings } = post;
  const author = getAuthorBySlug(frontmatter.author);
  const relatedPosts = getRelatedPosts(params.slug, 3);
  const breadcrumbItems = generateBreadcrumbs(params.slug, frontmatter.category);
  const fullUrl = frontmatter.canonicalUrl;

  // Add IDs to headings in content for anchor links
  const contentWithIds = content.replace(
    /^(#{2,3})\s+(.+)$/gm,
    (match, hashes, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `${hashes} ${text} {#${id}}`;
    }
  );

  return (
    <>
      <ArticleSchema post={post} author={author} />
      <BreadcrumbSchema items={breadcrumbItems} currentPage={frontmatter.title} />

      <PostHero
        title={frontmatter.title}
        featuredImage={frontmatter.featuredImage}
        featuredImageAlt={frontmatter.featuredImageAlt}
        category={frontmatter.category}
        date={formatDate(frontmatter.date)}
        readingTime={frontmatter.readingTime || 5}
      />

      <ShareButtons url={fullUrl} title={frontmatter.title} />

      <article className="py-12">
        <Container maxWidth="container">
          <div className="max-w-content mx-auto mb-8">
            <Breadcrumbs items={breadcrumbItems} currentPage={frontmatter.title} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="max-w-content">
                <TableOfContents headings={headings} />

                <div className="prose prose-lg max-w-none">
                  <MDXRemote
                    source={contentWithIds}
                    components={MDXComponents}
                    options={{
                      mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [rehypeHighlight],
                      },
                    }}
                  />
                </div>

                <CTABanner />

                {author && (
                  <div className="mt-12">
                    <AuthorBox author={author} />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar with TOC */}
            <div className="lg:col-span-1">
              <TableOfContents headings={headings} />
            </div>
          </div>
        </Container>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
