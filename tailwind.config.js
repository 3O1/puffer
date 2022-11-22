/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pufferBlue: '#3C68FF',
        pufferPink: '#FFCAE0',
        pufferYellow: '#FFD438',
        pufferOrange: '#FF8B4A',
        pufferRed: '#FF3535',
        pufferGreen: '#27996B',
      },
    },
  },
  plugins: [],
};
