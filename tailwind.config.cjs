/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        700: '#252524',
        600: '#303034',
        500: '#7C7C8A',
        300: '#CACACC',
        100: '#E1E1E6',
      },

      purple: {
        800: '#6407DD',
        600: '#7518EE',
        500: '#8629FF',
        400: '#973AFF',
      }
    },

    fontSize: {
      '2xs': 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
