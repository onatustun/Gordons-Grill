/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/home/*.{html,js}",
    "./dist/home/js/*.{html,js}",
    "./dist/about-us/*.{html,js}",
    "./dist/about-us/js/*.{html,js}",
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
        20: "5.5rem",
        26: "6.5rem",
        34: "8.5rem",
        1.5: "0.313rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        34: "8.5rem",
        "3/4": "3 / 4",
      },
      backdropBlur: {
        xs: "0.125rem",
      },
      blur: {
        "1.5xl": "2rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Quattrocento", "serif"],
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "3/5": "3 / 5",
        "5/4": "5 / 4",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "2.5xl": "1.688rem",
      },
      margin: {
        6.5: "1.625rem",
        4.5: "1.125rem",
      },
    },
  },
  variants: {},
  plugins: ["prettier-plugin-tailwindcss"],
};
