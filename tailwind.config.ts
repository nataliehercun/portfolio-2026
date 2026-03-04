import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: {
        DEFAULT: "var(--color-bg)",
        fill: {
          DEFAULT: "var(--color-bg-fill)",
          brand: "var(--color-bg-fill-brand)",
          hover: "var(--color-bg-fill-hover)",
          selected: "var(--color-bg-fill-selected)",
          disabled: "var(--color-bg-fill-disabled)",
        },
        transparent: "var(--color-bg-transparent)",
      },
      text: {
        DEFAULT: "var(--color-text)",
        secondary: "var(--color-text-secondary)",
      },
      icon: {
        DEFAULT: "var(--color-icon)",
      },
      border: {
        DEFAULT: "var(--color-border)",
      },
    },
    fontSize: {
      "heading-xl": ["16px", { lineHeight: "24px", fontWeight: "600" }],
      heading: ["12px", { lineHeight: "16px", fontWeight: "600" }],
      "body-big": ["14px", { lineHeight: "18px", fontWeight: "500" }],
      "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
      caption: ["8px", { lineHeight: "10px", fontWeight: "400" }],
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
