module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'sugar-cane': ['ut_sugar_caneregular']
      }
    },
    rotate: {
      '-15': '-15deg'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
