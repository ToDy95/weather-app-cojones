/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text": "#1a0222",
        "background": " #f2d3fd",
        "primary": "#972907",
        "secondary": "#d6fcca",
        "accent": "#0bbaef",
      },
      backgroundImage: {
        gold: 'var(--gold-gradient, linear-gradient(180deg, #F9EBA0 0%, #FBF0BC 20.83%, #EAC346 43.75%, #A87A36 66.15%, #A87A36 72.92%, #EECB54 100%))',
        sky: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.9114583333333334) 35%, rgba(0,212,255,1) 100%);'
      },
      background: {}
    },
  },
  plugins: [],
}
