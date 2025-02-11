import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        open: ["var(--font-open-sans)"],
        monse: ["var(--font-monse)"],
      },
      borderColor: {
        "gray-400-40": "rgba(156, 163, 175, 0.4)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        normal: "var(--normal)",
        dangerous: "var(--dangerous)",
      },
    },
  },
  plugins: [],
} satisfies Config;
