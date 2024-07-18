/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html",
    "./src/js/*.js"
  ],
  theme: {
    fontFamily: {
      'vazir': ['vazir', 'sans-serif']
    },
    extend: {
      inset: {
        '18': '4.5rem',
        '26' : '104px',
        '1/8': '12.5%',
        '75': '300px'
      },
      padding: {
        '29': '116px'
      },
      spacing: {
        '54': '13.5rem',
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
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'nxl': '6rem'
      },
      fontSize: {
        '2xs': '.6rem'
      },
      screens: {
        '2xs': '375px',
        'xs': '460px'
      },
      animation: {
        fade: 'fade 300ms ease-in-out'
      },
      keyframes: {
        fade: {
          '0%': {
              opacity: 0,
              transform: 'scale(1.5,1.5)'
          },
          '100%': {
              opacity: 1,
              transform: 'scale(1)'
          }
        }
      }
    },
  },
  corePlugins: {
  },
  plugins: [
  ],
}

