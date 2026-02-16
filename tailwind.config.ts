import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Military Army Palette
        "army-green": "#4B5320", // OD green - primary
        "army-dark": "#2D3319", // Dark olive - headers, overlays
        "army-tan": "#C2B280", // Khaki/sand - accents, borders
        "army-brown": "#5C4033", // Earth brown - secondary text
        "camo-light": "#6B7F3E", // Light camo green - highlights
        "camo-dark": "#3B4A2B", // Dark camo - depth
        sand: "#F5F0E8", // Warm off-white - page backgrounds
        cream: "#FAF8F3", // Card backgrounds
        
        // PSI Brand colors (navbar/footer only)
        navy: "#1B3A5F", // PSI brand navy
        red: "#E31837", // Apply Now CTA only
        
        // Text colors
        "dark-text": "#1F2937",
        "gray-text": "#6B7280",
        "light-gray": "#F9FAFB",
        "border-gray": "#D1D5DB",
        "card-bg": "#FFFFFF",
        
        // Legacy aliases for compatibility
        primary: "#4B5320",
        accent: "#6B7F3E",
        secondary: "#C2B280",
        "psi-red": "#E31837",
        "tag-bg": "#E8EDDC",
        "tag-text": "#4B5320",
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
              color: "#2D3319",
              fontWeight: "700",
              lineHeight: "1.25",
            },
            h2: {
              color: "#2D3319",
              fontWeight: "600",
              lineHeight: "1.25",
            },
            h3: {
              color: "#2D3319",
              fontWeight: "600",
              lineHeight: "1.3",
            },
            h4: {
              color: "#2D3319",
              fontWeight: "600",
            },
            a: {
              color: "#4B5320",
              textDecoration: "underline",
              "&:hover": {
                color: "#E31837",
              },
            },
            strong: {
              color: "#1F2937",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#4B5320",
              fontStyle: "normal",
              backgroundColor: "#FAF8F3",
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
