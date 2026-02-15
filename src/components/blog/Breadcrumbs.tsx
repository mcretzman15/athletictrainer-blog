import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-text mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          <Link
            href={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        </span>
      ))}
      <span className="mx-2">/</span>
      <span className="text-dark-text">{currentPage}</span>
    </nav>
  );
}
