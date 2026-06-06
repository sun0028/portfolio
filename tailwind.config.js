/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: '#080c14',
        bg2: '#0f1520',
        accent: '#c9b99a',
        accent2: '#e8dcc8',
        muted: '#6b7385',
      },
    },
  },
  plugins: [],
}
