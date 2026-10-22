/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          50: '#eef1f6',
          100: '#d3dbe8',
          200: '#a7b7d1',
          300: '#7b93ba',
          400: '#4f6fa3',
          500: '#2c4a7c',
          600: '#1c3560',
          700: '#132648',
          800: '#0d1c36',
          900: '#0a1628',
          950: '#060d1a'
        },
        gold: {
          DEFAULT: '#fc7404', light: '#ff8a1f',
          50: '#fff4ea', 100: '#ffe4cc', 200: '#ffc999', 300: '#ffab66', 400: '#ff8f33',
          500: '#fc7404', 600: '#d45f00', 700: '#b34f00', 800: '#8a3d00', 900: '#5c2900'
        },
        offwhite: '#f1f5f9',
        deep: '#0d1b2a',
        graytxt: '#475569'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,22,40,.06), 0 8px 24px rgba(10,22,40,.08)',
        cardHover: '0 2px 4px rgba(10,22,40,.08), 0 24px 48px rgba(10,22,40,.22)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 45%, rgba(201,168,76,0.55) 100%)'
      }
    }
  },
  plugins: []
}
