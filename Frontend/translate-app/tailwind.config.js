/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/img/hero_img.jpg"
      },
      colors: {
        border: '#4D5562',
        auxiliar: '#9CA3AF',
        boxClr1: '#232637'
      }
    },
  },
  plugins: [],
}
