import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fbfaf7",
          100: "#f6f1e7",
          200: "#efe4cf",
          300: "#e4d1ab",
        },
        ocean: {
          50: "#effbfb",
          100: "#d6f6f6",
          200: "#9feaea",
          300: "#66d7d7",
          400: "#2bbcbc",
          500: "#16a3a3",
          600: "#0f7f7f",
          700: "#0b5c5c",
        },
        sun: {
          400: "#f6c453",
          500: "#f2b23d",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        card: "0 12px 28px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
