/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f2e6',
          100: '#ead8ab',
          200: '#dec074',
          300: '#d5b053',
          400: '#caa04e',
          500: '#b9892f',
          600: '#966521',
          700: '#6f4b1b',
          800: '#473114',
          900: '#281d0f',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(202, 159, 78, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(4,10,26,0.92) 0%, rgba(7,16,35,0.8) 44%, rgba(11,18,32,0.35) 100%)',
      },
    },
  },
  plugins: [],
};
