/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html",
    "./src/js/app.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': '\'Vazir\''
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

