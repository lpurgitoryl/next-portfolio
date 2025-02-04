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
      },
      keyframes: {
        cautionTape: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-176.22px -89.79px" },
        },
      },
      animation: {
        cautionTape: "cautionTape 5s linear infinite",
      },
    }
  }
}
export default config
