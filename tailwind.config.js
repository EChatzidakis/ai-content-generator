/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // If using Next.js App Router
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#892B64',
          'primary-content': '#ead4de',
          secondary: '#0091AD',
          'secondary-content': '#00070b',
          accent: '#FFD166',
          'accent-content': '#161003',
          neutral: '#455e89',
          'neutral-content': '#d7dde7',
          'base-100': '#ffffff',
          'base-200': '#dedede',
          'base-300': '#bebebe',
          'base-content': '#161616',
          info: '#0000ff',
          'info-content': '#c6dbff',
          success: '#00ff00',
          'success-content': '#001600',
          warning: '#FFD166',
          'warning-content': '#161003',
          error: '#ff0000',
          'error-content': '#160000'
        }
      }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root' // The element that receives theme color CSS variables
  },
  plugins: [daisyui]
};
