/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#36413E',
        base_accent: '#667A75',
        primary: '#3FB27F',
        pop: '#DCEDFF',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
