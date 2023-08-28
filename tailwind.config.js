/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '25%': {
            transform: 'translateY(-50px)'
          },
          '50%': {
            transform: 'translateY(-100px)'
          },
          '75%': {
            transform: 'translateY(-150px)'
          },
          '100%': {
            transform: 'translateY(-200px)'
          },
        }
      }
    },
  },
  plugins: [],
}

