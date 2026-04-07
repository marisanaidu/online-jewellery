export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6F61',
          dark: '#E05A4F',
        },
        gold: {
          DEFAULT: '#FFD700',
          dark: '#CCA100',
        },
        charcoal: '#333333',
        midnight: '#191970',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
