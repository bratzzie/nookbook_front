const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#fa7f55",
        primary_green: "#8DDAC1",
        primary_yellow: "#FFDF5D",
        primary_dark_green: "#384E53",
        primary_blue: "#37a4aa",
        light_gray: "#8c9dab",
        primary_brown: "#6b5e53",
        sand: "#8d8169",
        input: "#fefff1",
        success: "#00b6aa",
        link: "#37a4aa;",
        island: "#099b6f",
      },
      fontFamily: {
        fink: ["FinkHeavy"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [flowbiteReact],
};
