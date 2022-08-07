/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fogWhite': '#eaeaea',
        'fogDark': '#2d3047',
        'fogGold': '#f3a712',
        'fogBlue': '#0496ff'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "mono"],
        caveat: ["Caveat", "cursive"], 
        syncopate: ["Syncopate", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
