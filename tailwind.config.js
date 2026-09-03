/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        ink: '#0f0f10',
        ink2: '#17171a',
        line: '#2a2a2e',
        paper: '#f7f5f0',
        paper2: '#ffffff',
        linelight: '#e7e3d8',
        accent: '#e8973a',
        accentdark: '#c97a22',
      },
    },
  },
  plugins: [],
};
