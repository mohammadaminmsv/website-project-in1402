/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,TTF}"],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }

      sm: { max: "1024px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "450px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      md: { max: "819px" },
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        primary: ["Advent+Pro"],
        secondary: ["Exo 2"],
      },
      colors: {
        primaryBlue: { 100: "#45636b", 200: "#456645", 300: "#C9D6DF" },
        borderinputcolor: { 100: "#555" },
        bgappcss: { 100: "#F0F5F9", 200: "#e6e6e6" },
        headercolor: { 100: "#52616B" },
        buttoncolor: { 100: "#52616B", 200: "#555" },
      },
      boxShadow: {
        "3xl": "-5px -5px 5px 5px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        15: "30px",
      },
    },
  },
  plugins: [require("tailwindcss-dir")()],
};
