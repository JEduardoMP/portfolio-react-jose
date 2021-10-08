const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: '#F0A500',
      yellow: '#FEE440',
      red: '#950101'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
