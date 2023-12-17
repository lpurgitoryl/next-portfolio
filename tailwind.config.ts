import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
// const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  darkMode: ["class"],
  theme: {
    extend: {
      colors:{
        accent: colors.blue
      }
    }
  }
}
export default config
