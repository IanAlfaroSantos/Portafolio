
module.exports = {
  content: [
    "./index.html",
    "./*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00c6ff',
        'brand-blue-dark': '#0072ff',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'typing': 'typing 3s steps(40, end) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
