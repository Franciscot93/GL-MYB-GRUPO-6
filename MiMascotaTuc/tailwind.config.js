/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
'./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/logo2.png')",
      }
    },
  },
  plugins: [],
}

