/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      backgroundColor: {
        footerBlue: '#2f466c',
        pinkBeige: '#f8ebe6',
      },
    },
  },
  plugins: [],
};
