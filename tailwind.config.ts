import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark backgrounds
        charcoal: "#1C1C1E", // Near-black - primary dark sections
        graphite: "#2C2C2E", // Dark gray - card overlays, secondary dark
        slate: "#3A3A3C", // Medium dark - borders on dark backgrounds
        
        // Warm neutrals
        stone: "#E8E4DF", // Warm light gray - page background
        "warm-white": "#F7F5F2", // Card backgrounds
        parchment: "#EEEBE5", // Alternate section background
        
        // Military accents (muted)
        olive: "#5C6B4F", // Muted olive - subtle accent
        "olive-dark": "#3D4A33", // Dark olive - text accent
        sand: "#B8A88A", // Muted khaki - secondary accent, borders
        rust: "#8B4513", // Dark rust - warm accent, sparingly
        
        // PSI Brand
        navy: "#1B3A5F", // Navbar only
        red: "#C41E2A", // Darker red - Apply Now CTA only
        
        // Legacy text colors for compatibility
        "dark-text": "#1C1C1E",
        "gray-text": "#2C2C2E",
        "light-gray": "#E8E4DF",
        "border-gray": "#B8A88A",
        "card-bg": "#F7F5F2",
        
        // Legacy aliases
        primary: "#5C6B4F",
        accent: "#5C6B4F",
        secondary: "#B8A88A",
        "psi-red": "#C41E2A",
        "tag-bg": "rgba(92, 107, 79, 0.1)",
        "tag-text": "#3D4A33",
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
            color: "#1F2937",
            lineHeight: "1.7",
            maxWidth: "760px",
            fontSize: "1rem",
            h1: {
              color: "#1C1C1E",
              fontWeight: "700",
              lineHeight: "1.25",
            },
            h2: {
              color: "#1C1C1E",
              fontWeight: "600",
              lineHeight: "1.25",
            },
            h3: {
              color: "#1C1C1E",
              fontWeight: "600",
              lineHeight: "1.3",
            },
            h4: {
              color: "#1C1C1E",
              fontWeight: "600",
            },
            a: {
              color: "#5C6B4F",
              textDecoration: "underline",
              "&:hover": {
                color: "#3D4A33",
              },
            },
            strong: {
              color: "#2C2C2E",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#5C6B4F",
              fontStyle: "normal",
              backgroundColor: "#EEEBE5",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            },
            code: {
              color: "#4A5D3E",
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
