/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/home/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#1A1A1A',
        'dark-gray': {
          1: '#292929',
          2: '#3E3E3E'
        },
        'gray': '#8B8B8C',

        'light-gray': {
          1: '#DFDFE2',
          2: '#EDEDF0'
        },
        'white': '#FBFBFE',
        'primary': '#823349',
        'secondary': '#EE8484',
        'accent': '#A6A58D'
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