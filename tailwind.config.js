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
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

