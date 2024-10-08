/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(100%) translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
