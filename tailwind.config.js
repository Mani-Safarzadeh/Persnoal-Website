/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/*.html",
    "./src/js/app.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': '\'Vazir\''
      },
      inset: {
        '640': '640px',
        '1280': '1280px'
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

