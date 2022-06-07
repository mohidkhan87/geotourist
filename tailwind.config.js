module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Avenir': ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'primary': '#5B5C5E',
        'secondary': '#2DAEE1',
      }
    },
  },
  plugins: [],
}
