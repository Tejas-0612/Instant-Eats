/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary0: "#ff8953",
        primary1: "#ff7837",
        primary2: "#ff6600",
        dark1: "#3d4152",
        Green: "#16a34a",
        Red: "#ef4444",
      },
    },
    fontFamily: {
      sans: ['"PT Sans"', "Calibri", "Tahoma", "sans-serif"],
    },
  },
  plugins: [],
};
