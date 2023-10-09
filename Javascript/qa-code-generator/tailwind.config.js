/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },
      backgroundImage: {
        page: "url('/src/assets/images/bg-illustration.svg')"
      },
      colors: {
        'clr-primary': '#3662E3',
        'clr-secondary': '#1E2C51',
        'clr-qr': '#F2F5FA'
      }
    }
  },
  plugins: []
}
