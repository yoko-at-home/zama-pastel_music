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
        primary: "#595959", // キーカラー1（例: テキスト用）
        secondary: "#9394A7", // キーカラー1（例: テキスト用）
        whitish: "#F2F0F2", // キーカラー1（例: テキスト用）
        pink: "#F2CEE6", // キーカラー2（例: ピンク
        pink_strong: "#f5abdc", // キーカラー2（例: ピンク
        blue: "#82cefa", // キーカラー2（例: blue
        light_blue: "#CFF6FF", // キーカラー2（例: blue
        blue_green: "#A6DA3E", // キーカラー2（例: blue
        purple: "#D6BEF1", // キーカラー2（例: blue
      },
    },
  },
  plugins: [],
};
export default config;
