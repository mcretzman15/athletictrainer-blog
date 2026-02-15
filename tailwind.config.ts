import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A5F",
        "psi-red": "#E31837",
        "dark-text": "#1A1A2E",
        "gray-text": "#4A4A5A",
        "light-gray": "#F5F5F7",
        "border-gray": "#E0E0E0",
        "card-bg": "#FFFFFF",
        "tag-bg": "#EEF2F7",
        "tag-text": "#1B3A5F",
      },
      fontFamily: {
        sans: ["Arial", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "sans-serif"],
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
            color: "#1A1A2E",
            lineHeight: "1.7",
            maxWidth: "760px",
            fontSize: "1rem",
            h1: {
              color: "#1B3A5F",
              fontWeight: "700",
              lineHeight: "1.25",
            },
            h2: {
              color: "#1B3A5F",
              fontWeight: "600",
              lineHeight: "1.25",
            },
            h3: {
              color: "#1B3A5F",
              fontWeight: "600",
              lineHeight: "1.3",
            },
            h4: {
              color: "#1B3A5F",
              fontWeight: "600",
            },
            a: {
              color: "#1B3A5F",
              textDecoration: "underline",
              "&:hover": {
                color: "#E31837",
              },
            },
            strong: {
              color: "#1A1A2E",
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: "#1B3A5F",
              fontStyle: "normal",
              backgroundColor: "#F5F5F7",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            },
            code: {
              color: "#1B3A5F",
              backgroundColor: "#F5F5F7",
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
