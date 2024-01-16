const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primaryOne: '#495e57',
      primaryTwo: '#f4ce14',
      secondaryOne: '#ee9972',
      secondaryTwo: '#fbdabb',
      garyLight: '#edefee',
      grayDark: '#333',
      white: '#fff',
      black: '#000',
      transparent:'transparent'
    },
    extend: {},
  },
  plugins: [],
}