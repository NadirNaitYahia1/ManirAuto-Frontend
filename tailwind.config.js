/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors:{
        userButton:'#7A63F0',
        userButtonText:'#D9D9D9',
        phoneColorText:'#999999',
        priceColorText:'#7A63F0',
      },


    },
  },
  plugins:[]
}

