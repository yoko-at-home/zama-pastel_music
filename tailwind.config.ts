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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#595959", // キーカラー1（例: テキスト用）
        whitish: "#F2F0F2", // キーカラー1（例: テキスト用）
        pink: "#F2CEE6", // キーカラー2（例: ピンク
        pink_strong: "#f5abdc", // キーカラー2（例: ピンク
        blue: "#BBDDF2", // キーカラー2（例: blue
      },
    },
  },
  plugins: [],
};
export default config;
