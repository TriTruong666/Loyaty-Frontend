import { heroui } from "@heroui/theme";
import withMT from "@material-tailwind/react/utils/withMT";
import type { Config } from "tailwindcss";

export default withMT({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(alert|button|date-picker|dropdown|image|input|link|pagination|select|ripple|spinner|calendar|date-input|form|popover|menu|divider|listbox|scroll-shadow).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        open: ["var(--font-open-sans)"],
        monse: ["var(--font-monse)"],
      },
      borderColor: {
        "gray-400-40": "rgba(117,117,117, 0.2)",
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
  plugins: [heroui()],
} satisfies Config);
