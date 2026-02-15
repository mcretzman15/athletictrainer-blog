"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

export function FAQItem({ question, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-gray last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-navy transition-colors"
      >
        <span className="font-semibold text-dark-text pr-4">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform ${
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
        <div className="pb-4 text-gray-text prose prose-sm max-w-none">
          {children}
        </div>
      )}
    </div>
  );
}

interface FAQProps {
  children: React.ReactNode;
}

export default function FAQ({ children }: FAQProps) {
  return (
    <div className="bg-light-gray rounded-lg p-6 my-8">
      <h3 className="text-2xl font-bold text-navy mb-6">
        Frequently Asked Questions
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
