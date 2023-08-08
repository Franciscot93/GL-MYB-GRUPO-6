/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
'./src/**/*.{js,jsx}'],
  theme: {
    extend: {

      colors: {
        'tacha': {
          '50': '#fbf9f1',
          '100': '#f6f2de',
          '200': '#ece1bc',
          '300': '#e0cc91',
          '400': '#d4b268',
          '500': '#c99b46',
          '600': '#bb853b',
          '700': '#9c6a32',
          '800': '#7d542f',
          '900': '#664728',
          '950': '#362314',
      },
      'saffron-mango': {
        '50': '#fff9eb',
        '100': '#fdefc8',
        '200': '#fcdb8b',
        '300': '#fac657',
        '400': '#f8ac27',
        '500': '#f28a0e',
        '600': '#d66609',
        '700': '#b2450b',
        '800': '#903510',
        '900': '#772c10',
        '950': '#441504',
    },

      }
    },
  },
  plugins: [],
}

