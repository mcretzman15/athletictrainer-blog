"use client";

import { useState, useEffect } from "react";

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile: Collapsible */}
      <div className="lg:hidden bg-warm-white rounded-lg p-4 mb-8" style={{ border: '1px solid rgba(184, 168, 138, 0.5)' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-semibold text-charcoal"
        >
          <span>Table of Contents</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <nav className="mt-4 space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm py-1 transition-colors ${
                  heading.level === 3 ? "pl-4" : ""
                } ${
                  activeId === heading.id
                    ? "text-olive font-medium"
                    : "text-graphite hover:text-olive"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop: Sticky Sidebar */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-warm-white rounded-lg p-6" style={{ border: '1px solid rgba(184, 168, 138, 0.5)' }}>
          <h3 className="text-sm font-semibold text-charcoal mb-4 uppercase tracking-wide">
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm py-1 transition-colors ${
                  heading.level === 3 ? "pl-4" : ""
                } ${
                  activeId === heading.id
                    ? "text-olive font-medium"
                    : "text-graphite hover:text-olive"
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
