/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/home/*.{html,js}",
    "./dist/home/js/*.{html,js}",
    "./dist/js/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        "dark-gray": {
          1: "#292929",
          2: "#3E3E3E",
        },
        gray: "#8B8B8C",

        "light-gray": {
          2: "#DFDFE2",
          1: "#EDEDF0",
        },
        white: "#FBFBFE",
        primary: "#69140E",
        secondary: "#FFCB69",
        accent: "#FE4646",
      },
      spacing: {
        20: "88px",
        26: "104px",
        34: "136px",
        1.5: "5px",
      },
      maxWidth: {
        34: "8.5rem",
        "3/4": "3 / 4",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Quattrocento", "serif"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "3/5": "3 / 5",
      },
    },
  },
  variants: {},
  plugins: ["prettier-plugin-tailwindcss"],
};
