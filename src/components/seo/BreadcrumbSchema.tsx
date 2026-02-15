interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function BreadcrumbSchema({
  items,
  currentPage,
}: BreadcrumbSchemaProps) {
  const allItems = [
    ...items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.label,
      item: `https://www.athletictrainerjob.com${item.href}`,
    })),
    {
      "@type": "ListItem" as const,
      position: items.length + 1,
      name: currentPage,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
