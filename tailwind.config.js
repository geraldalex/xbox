const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
    purge: [],
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
green: colors.green,
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }