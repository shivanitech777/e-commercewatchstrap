/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#115335",
          dark: "#0c3c26",
          light: "#1c7a4d",
        },
        sand: "#f8f5f2",
        ivory: "#fdfcf9",
        stone: {
          100: "#f5f5f5",
          200: "#e9e9e9",
          300: "#d9d9d9",
          500: "#717171",
          700: "#3a3a3a",
        },
        ink: "#141d17",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(17, 83, 53, 0.35)",
        lift: "0 18px 40px -24px rgba(17, 83, 53, 0.4)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      spacing: {
        header: "4.5rem",
        section: "5.5rem",
      },
      transitionTimingFunction: {
        subtle: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
