const { createJestConfig } = require('@craco/craco');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
 
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      colors: {
      MainBeige: '#EFECE2',
      customGreen: '#00FF00',
      customBlue: '#0000FF',
    },
    
    fontFamily: {
      custom: ['Satoshi', 'sans-serif'],},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}}
