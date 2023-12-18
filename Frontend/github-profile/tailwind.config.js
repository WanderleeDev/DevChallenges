/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/img/hero.webp')",
      },
      colors: {
        'primary': '#CDD5E0',
        'complementary': '#4A5567',
        'page': '#20293A'
      }
    },
  },
  plugins: [],
}
