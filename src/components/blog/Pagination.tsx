import Link from "next/link";
import { PaginationData } from "@/lib/posts";

interface PaginationProps {
  pagination: PaginationData;
  basePath?: string;
}

export default function Pagination({
  pagination,
  basePath = "/blog",
}: PaginationProps) {
  const { currentPage, totalPages, hasPrevPage, hasNextPage } = pagination;

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      {hasPrevPage ? (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 border border-border-gray rounded-lg hover:bg-light-gray transition-colors"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 border border-border-gray rounded-lg text-gray-text cursor-not-allowed opacity-50">
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          const href = page === 1 ? basePath : `${basePath}?page=${page}`;

          return (
            <Link
              key={page}
              href={href}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-white font-semibold shadow-sm"
                  : "border border-border-gray hover:bg-light-gray"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {hasNextPage ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 border border-border-gray rounded-lg hover:bg-light-gray transition-colors"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 border border-border-gray rounded-lg text-gray-text cursor-not-allowed opacity-50">
          Next
        </span>
      )}
    </nav>
  );
}
