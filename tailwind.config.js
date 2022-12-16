/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
      },
      backgroundImage: {
        "pp-1": "url('./src/images/pp.JPG')",
      },
      animation: {
        fadeIn: "fadeIn .4s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'translateY(50px)' },
          "100%": { opacity: 1, transform: 'translateY(0)' },
        },
      },
      variants: {
        animation: ["motion-safe"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
