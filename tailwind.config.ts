import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: "var(--main-background)",
        mainTextColor: "var(--main-text-color)",
        mainBorderColor: "var(--main-border-color)",
        mainLinkColor: "var(--main-link-color)",
        secondaryTextColor: "var(--secondary-text-color)",
      },
    },
  },
  plugins: [],
};
export default config;
