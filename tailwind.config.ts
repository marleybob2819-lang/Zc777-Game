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
        gold:        "#D4AF37",
        "gold-light":"#F5D76E",
        "gold-dark": "#A07C10",
        crimson:     "#8B0000",
        "bg-dark":   "#0A0A0F",
        "bg-card":   "#12121A",
        "bg-mid":    "#1A1A28",
        "bg-section":"#0F0F18",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        lato:   ["var(--font-lato)",   "sans-serif"],
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        shimmer:    "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
