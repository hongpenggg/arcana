/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shuffle: 'shuffle-move 0.5s ease-in-out',
        glow: 'glow-pulse 2s infinite',
      },
    },
  },
  plugins: [],
};
