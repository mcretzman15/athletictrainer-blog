import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - modern, approachable
        primary: "#1E3A8A", // Deep blue (lighter than old navy)
        accent: "#10B981", // Green/teal accent
        secondary: "#F59E0B", // Warm accent
        
        // Text colors
        "dark-text": "#111827",
        "gray-text": "#6B7280",
        "light-gray": "#F9FAFB",
        "border-gray": "#E5E7EB",
        "card-bg": "#FFFFFF",
        
        // Legacy aliases for compatibility
        navy: "#1E3A8A",
        "psi-red": "#10B981",
        "tag-bg": "#DBEAFE",
        "tag-text": "#1E3A8A",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      lineHeight: {
        body: "1.7",
        heading: "1.25",
      },
      maxWidth: {
        content: "760px",
        container: "1200px",
        sidebar: "320px",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#111827",
            lineHeight: "1.7",
            maxWidth: "760px",
            fontSize: "1rem",
            h1: {
              color: "#1E3A8A",
              fontWeight: "700",
              lineHeight: "1.25",
            },
            h2: {
              color: "#1E3A8A",
              fontWeight: "600",
              lineHeight: "1.25",
            },
            h3: {
              color: "#1E3A8A",
              fontWeight: "600",
              lineHeight: "1.3",
            },
            h4: {
              color: "#1E3A8A",
              fontWeight: "600",
            },
            a: {
              color: "#1E3A8A",
              textDecoration: "underline",
              "&:hover": {
                color: "#10B981",
              },
            },
            strong: {
              color: "#111827",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#10B981",
              fontStyle: "normal",
              backgroundColor: "#F9FAFB",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            },
            code: {
              color: "#1E3A8A",
              backgroundColor: "#F9FAFB",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
