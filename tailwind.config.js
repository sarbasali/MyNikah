/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'XS': '540px',
      'SM': '722px',
      'MD': '830px',
      'LG': '1460px'

    }
  },
  plugins: [],
}

