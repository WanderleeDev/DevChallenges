/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        'min-dynamic': '100dvh'
      },
      colors: {
        primary: '#E5E7EB',
        secondary: '#4D5562',
        label: '#A2A1A8',
        checkbox: '#394050',
        'checked-bg': '#652CD1',
        'checked-border': '#845EEE'
      },
      width: {
        fluid: 'min(30rem, 100%)'
      },
      boxShadow: {
        stepActive: '0 0 0 .3rem #342D62'
      },
      screens: {
        xs: '25rem'
      }
    }
  },
  plugins: []
}
