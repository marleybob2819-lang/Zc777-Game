import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:        "#1a1a1a",
        "gold-light":"#404040",
        "gold-dark": "#111111",
        crimson:     "#8B0000",
        "bg-dark":   "#ffffff",
        "bg-card":   "#ffffff",
        "bg-mid":    "#f5f5f5",
        "bg-section":"#fafafa",
      },
      fontFamily: {
        sans:   ["var(--font-inter)", "system-ui", "sans-serif"],
        cinzel: ["var(--font-inter)", "system-ui", "sans-serif"],
        lato:   ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
