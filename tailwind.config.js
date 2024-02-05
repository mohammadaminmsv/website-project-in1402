/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      'sm': {'max': '768px'},
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaryBlue: { 100: "#45636b", 200: "#456645" , 300 : "#A6E3E9" },
        borderinputcolor : {100 : '#555'} ,
        bgappcss : {100 : "#F3FFFF"} ,
        headercolor : {100 : "#71C9CE"},
        buttoncolor : {100 : "#f0f" ,200 : "#555"}
       
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        15:"30px"
      },
    },
  },
  plugins: [],
};
