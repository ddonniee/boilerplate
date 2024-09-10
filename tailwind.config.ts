import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./src/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          bg: "red",
        },
        selected: "rgba(5, 111, 184, 1)",
        bright: {
          navBg: "rgba(255, 255, 255, 1)",
          navColor: "rgba(88, 88, 88, 1)",
          navLine: "rgba(215, 215, 215, 1)",
          bodyBg: "rgba(251, 251, 251, 1)",
          bodyCi: "rgba(0, 0, 0, 1)",
          bodyAnsBg: "rgba(5, 111, 184, 1)",
          queBg: "#ffffff",
          sampleBg: "rgba(226, 239, 245, 1)",
          sampleColor: "rgba(0, 0, 0, 1)",
          sampleIcon: "rgba(5, 111, 184, 1)",
        },
        dark: {
          navBg: "rgba(58, 58, 58, 1)",
          navColor: "rgba(160, 160, 160, 1)",
          navLine: "rgba(32, 32, 32, 1)",
          bodyBg: "rgba(45, 45, 45, 1)",
          bodyCi: "rgba(0, 0, 0, 1)",
          bodyAnsBg: "rgba(5, 111, 184, 1)",
          queBg: "#ffffff",
          sampleBg: "rgba(105, 105, 105, 1)",
          sampleColor: "rgba(255, 255, 255, 1)",
          sampleIcon: "rgba(45, 45, 45, 1)",
        },
      },
      lineHeight: {
        "75": "75px",
      },
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        "26": "26px",
      },
      maxWidth: {
        "742": "742px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
