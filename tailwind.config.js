/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html", 
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'black': '#000000',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'light-purple': '#bc94ff', 
      'light-violet': '#a5a4ff', 
      'light-blue': '#aecaff',
    },
    extend: {},
  },
  plugins: [],
}

