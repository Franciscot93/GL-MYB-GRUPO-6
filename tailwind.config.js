import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
'./src/**/*.{js,jsx}'],
  theme: {
    extend: {

      colors: {
        'bright-turquoise': {
          '50': '#effbff',
          '100': '#dff5ff',
          '200': '#b7eeff',
          '300': '#77e2ff',
          '400': '#2fd4ff',
          '500': '#0ec8fb',
          '600': '#009bd0',
          '700': '#007ba8',
          '800': '#01688b',
          '900': '#085572',
          '950': '#05374c',
      },
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const neonUtilities = {}
      const colors = theme('colors')

      for (const color in colors) {
        if(typeof colors[color] === 'object' ) {
          const color1 = colors[color]['400']
          const color2 = colors[color]['600']
          
          neonUtilities[`.neon-${color}`] = {
            boxShadow: ` 0 0 5px ${color1}, 0 0 10px ${color2}`
          }
           
       
        }
      }

      console.log('addUtilities')
      addUtilities(neonUtilities)
    })
  ],
}

