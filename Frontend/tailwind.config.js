/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primaryRed: "#ed3237",
        primaryBlue: "#012060",
        primaryBlack: "#0a0a0b",
        secondaryBlack: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
