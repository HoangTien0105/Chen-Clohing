import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3F4F6",
        foreground: "#1F2937",
        primary: "#1E3A8A",
        secondary: "#3B82F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
