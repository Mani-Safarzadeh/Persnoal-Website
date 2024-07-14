/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html",
    "./src/js/*.js",
    "./src/fonts/*.*"
  ],
  theme: {
    fontFamily: {
      'vazir': ['vazir', 'sans-serif']
    },
    extend: {
      inset: {
        '26' : '104px',
        '1/8': '12.5%',
        '75': '300px'
      },
      padding: {
        '29': '116px'
      },
      spacing: {
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
        '150': '37.5rem',
        '200': '50rem'
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        '#353535': '#353535', // black
        '#3C6E71': '#3C6E71', // green
        '#FFFFFF': '#FFFFFF', // white
        '#D9D9D9': '#D9D9D9', // gray
        '#284B63': '#284B63' //  blue
      },
      borderRadius: {
        '5xl': '5rem'
      }
    },
  },
  corePlugins: {
  },
  plugins: [
  ],
}

