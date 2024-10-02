/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/home/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#1A1A1A',
        'white': '#FBFBFE'
      },
      spacing: {
        '20': '88px',
        '26': '104px',
        '260': '1040px'
      },
      maxWidth: {
        '34': '8.5rem'
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}