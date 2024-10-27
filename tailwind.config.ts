import tailwindcssAnimate from 'tailwindcss-animate'

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '834px',
      xl: '1440px',
    },
    extend: {
      colors: {
        success: '#65BD47',
        blue: {
          400: '#96CAF7',
          500: '#32ABF2',
          550: '#5383ec',
          600: '#93A8C1',
          700: '#5D7FA3',
          800: '#4F637D',
          900: '#134267',
        },
        gray: {
          100: '#C3CAD5',
          200: '#C9D3E0',
          300: '#CCCCCC',
          400: '#F8F9FC',
          500: '#E8EAED',
          600: '#80858A',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        fancy: ['var(--font-eudoxus)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        xs: '0.01em',
        sm: '0.02em',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
