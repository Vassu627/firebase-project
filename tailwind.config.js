/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        "dark-yellow": "#F6820C",
        orange: "#F6820C",
      },
    },
  },
  plugins: [],
};
