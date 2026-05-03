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
        background: "var(--background)",
        foreground: "var(--foreground)",
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          950: "#451A03",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          950: "#2E1065",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
