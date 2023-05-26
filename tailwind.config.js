
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Include your project files
    ],
    options: {
     
    },
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  
  theme: {
    extend: { 
      colors: {
      MainBeige: '#EFECE2',
      customGreen: '#00FF00',
      customBlue: '#0000FF',

    },
    transitionProperty: {
      'opacity': 'opacity',
      'size':'height,width',
      'cursor':'size,width,height,background-color'
      
    },
    transitionTimingFunction: {
      'expo': 'cubic-bezier(.13,.93,.58,.57)',
    },
    cursor:['hover'],
    
    fontFamily: {
      'Satoshi': ['Satoshi', 'sans-serif'],
      'Lora': ['Lora,serif'],
      'Erode':['Erode,serif'],
    
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
}}
