import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "container" | "content" | "full";
}

export default function Container({
  children,
  className = "",
  maxWidth = "container",
}: ContainerProps) {
  const widthClass = {
    container: "max-w-container",
    content: "max-w-content",
    full: "max-w-full",
  }[maxWidth];

  return (
    <div className={`${widthClass} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
