/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/*.html",
    "./src/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': '\'Vazir\''
      },
      inset: {
        '26' : '104px',
        '1/8': '12.5%',
        '75': '300px'
      },
      padding: {
        '29': '116px'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

