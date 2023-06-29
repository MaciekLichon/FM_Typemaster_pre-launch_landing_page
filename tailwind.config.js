/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: { // font-
      barlow: ['Barlow', 'sans-serif']
    },
    fontWeight: { // font-
      regular: 500,
      bold: 700,
      black: 900
    },
    fontSize: { // text-
      regular: ['16px', '26px'],
      regular_desktop: ['18px', '26px'],
      header_small: ['24px', '28px'],
      header_medium: ['32px', '36px'],
      header_big_mob: ['48px', '48px'],
      header_big: ['56px', '56px']
    },
    colors: { // text-
      accent: '#F16718',
      accentHover: '#FF9B62',
      primary: {
        100: '#FFFFFF',
        200: '#E8EFF2',
        500: '#7B8BAD',
        600: '#162542'
      }
    },
    extend: {
      borderRadius: {
        20: '20px'
      }
    },
  },
  plugins: [],
}

