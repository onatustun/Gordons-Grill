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
        'primary': '#69140E',
        'secondary': '#FFCB69',
        'accent': '#FE4646'
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
        serif: ['Quattrocento', 'serif']
      },
    },
  },
  variants: {},
  plugins: [],
}