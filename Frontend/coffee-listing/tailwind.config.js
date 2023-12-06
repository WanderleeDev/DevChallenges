/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDF6EC',
      },
      width: {
        'card-responsive': 'min(100%, 20rem)',
      }
    },
  },
  plugins: [],
}
