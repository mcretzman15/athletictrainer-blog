import { getAllPosts, getPostsByCategory, Post } from "./mdx";

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function getPaginatedPosts(
  page: number = 1,
  postsPerPage: number = 9
): { posts: Post[]; pagination: PaginationData } {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const posts = allPosts.slice(startIndex, endIndex);

  const pagination: PaginationData = {
    currentPage: page,
    totalPages,
    postsPerPage,
    totalPosts,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };

  return { posts, pagination };
}

export function getPaginatedPostsByCategory(
  category: string,
  page: number = 1,
  postsPerPage: number = 9
): { posts: Post[]; pagination: PaginationData } {
  const allPosts = getPostsByCategory(category);
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const posts = allPosts.slice(startIndex, endIndex);

  const pagination: PaginationData = {
    currentPage: page,
    totalPages,
    postsPerPage,
    totalPosts,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };

  return { posts, pagination };
}

export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    const titleMatch = post.frontmatter.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = post.frontmatter.description
      .toLowerCase()
      .includes(lowerQuery);
    const tagsMatch = post.frontmatter.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const contentMatch = post.content.toLowerCase().includes(lowerQuery);

    return titleMatch || descriptionMatch || tagsMatch || contentMatch;
  });
}
