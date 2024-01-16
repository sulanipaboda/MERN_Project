/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange" : "#ff724c",
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary" : "#555",
        "primaryBG" : "#fcfcfc"
      }
    },
  },
  plugins: [require("daisyui")],
}

