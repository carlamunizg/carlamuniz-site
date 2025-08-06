import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pergola: ["Pergola", "sans-serif", "Arial", "Helvetica"],
        futura: ["FuturaNowHeadline", "Futura", "sans-serif"],
        "futura-light": ["FuturaNowHeadlineLight", "Futura", "sans-serif"],
        "futura-medium": ["FuturaNowHeadlineMedium", "Futura", "sans-serif"],
        "futura-bold": ["FuturaNowHeadlineBold", "Futura", "sans-serif"],
        "futura-extra-bold": ["FuturaNowHeadlineExtraBold", "Futura", "sans-serif"],
        "futura-black": ["FuturaNowHeadlineBlack", "Futura", "sans-serif"],
        "futura-extra-black": ["FuturaNowHeadlineExtraBlack", "Futura", "sans-serif"],
      },
      colors: {
        pink_cl: {
          50: "#fdf6f6",
          100: "#f9eaea",
          200: "#f2d1d0",
          300: "#e8afad",
          400: "#df8f8d",
          500: "#e3a5a2",
          600: "#c28480",
          700: "#a16768",
          800: "#864e4e",
          900: "#6f3e3f",
          950: "#3d1d1f",
          980: "#CC6C67"
        },
        brown_cl: {
          50: "#f8f6f6",
          100: "#eee6e6",
          200: "#d9c7c6",
          300: "#c2a6a5",
          400: "#ac8987",
          500: "#9f7371",
          600: "#835c5a",
          700: "#6b4a47",
          800: "#573d3a",
          900: "#473231",
          950: "#251817",
          980: "#7F3835"
        },
        golden_cl: {
          50: "#fffdf5",
          100: "#fff5d5",
          200: "#ffe9a6",
          300: "#ffd46b",
          400: "#f3cb66",
          500: "#dfb558",
          600: "#c89d3c",
          700: "#a37626",
          800: "#865c1d",
          900: "#6f4b18",
          950: "#3e2709",
        },
        blush_cl: {
          50: "#fff5f5",
          100: "#ffeded",
          200: "#ffd5d5",
          300: "#ffbaba",
          400: "#ff9c9c",
          500: "#f97e7e",
          600: "#e46262",
          700: "#c44646",
          800: "#a63838",
          900: "#842c2c",
          950: "#4d1515",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      mdd: "1024px",
      lg: "1025px",
      xl: "1280px",
      xll: "1900",
      xxl: "2560px"
    },
  },
  plugins: [],
} satisfies Config;
