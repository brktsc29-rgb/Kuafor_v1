/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['Instrument Serif', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'rose-gold': '#B9816F',
        'rose-gold-dark': '#A06858',
        'cream': '#FFF8F5',
        'warm-dark': '#1F1A17',
        'warm-mid': '#7A6A63',
        'warm-border': '#E9D6CE',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
