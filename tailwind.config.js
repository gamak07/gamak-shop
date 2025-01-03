/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#007BFF",
        secondaryOrange: "#FF6A13",
        lightGray: "#F7F7F7",
        darkGray: "#333333",
        softWhite: "#FFFFFF",
        successGreen: "#28A745",
        dangerRed: "#DC3545",
      },
      fontFamily: {
        montserrat: ['montserrat']
      }
    },
  },
  plugins: [],
};
