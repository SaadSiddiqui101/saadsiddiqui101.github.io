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
        'custom3': '65%',
        '4/5': '80%',
        '37': '45vw',
        '26ch' : "26ch",
        '40ch' : "40ch",
        '1200' : "1200px"
      },
      width: {
        'inherit': 'inherit',
        'special': '30.333%'
      },
      height: {
        'workh': '29rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
