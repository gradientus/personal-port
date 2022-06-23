/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  content: ['./*{html,js}',
    './index.html'],
  theme: {
    extend: {
      colors: {
        'body': '#17171a',
        'selected-text': '#a3a335',
        'theme': '#3f3f35',
        'nav': '#404045',
        'secondary': '#919195',
        'badge': '#3f3f35',
        'input-border': '#565655',
        'input': '#2a2a25'
      },
      fontFamily: {
        'MartelSans': ['Martel Sans', 'sans-serif'],
        'AnticSlab': ['Antic Slab', 'serif'],
      }
    },
  },
}
