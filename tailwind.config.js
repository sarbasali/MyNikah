/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',  // Default small breakpoint
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom-sm': {'min': '530px', 'max': '767px'},
      'custom-lg': {'min':'1150px' , 'max': '1287px'},
    },
  },
  plugins: [],
}

