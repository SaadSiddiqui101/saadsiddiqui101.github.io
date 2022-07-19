/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      flex: {
        '2': '1 0 auto'
      },
      maxWidth: {
        '3/5': '60%',
        '37': '37vw',
        '26ch' : "26ch",
        '40ch' : "40ch"
      },
      width: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
