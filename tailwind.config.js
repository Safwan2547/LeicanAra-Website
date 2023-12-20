
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
      MainBeige: '#EFECE3',
      customTeal: '#003847',
      LunarTwilight:"#2f4858",
      NightFall:"#141414",
      customTealAlpha:"#00384780",
      customBurgandy: '#470F00',


    },

    classes:{
      hidden:{
        display:"none",
        transitionProperty:"all 1s ease-in-out",
      },
      
      show:{
        display:"block",
      }

    },

    transitionProperty: {
      'opacity': 'opacity',
      'size':'height,width',
      'cursor':'size,width,height,background-color',
      'button':'transform,color,height,width,background-color',
      'text':'transform,color,background-color',
      
    },
    transitionTimingFunction: {
      'expo': 'cubic-bezier(.13,.93,.58,.57)',
      'elastic':"cubic-bezier(0.25,0.4,0.55,1.4)",
      'quart':"cubic-bezier(.62,.55,.68,1.12)"
    },
    

    aspectRatio: {
      'cinematic': '21/9', // Define a custom cinematic aspect ratio
    },
    
    
    cursor:['hover'],
    minHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '75vh':'75vh'
    },
    
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
    corePlugins: {
    // ...
    fontSmoothing: true, // add this
  },
}}
