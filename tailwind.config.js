module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        swing: {
          '20%': {transform: 'rotate(15deg)'},
          '40%': {transform: 'rotate(-10deg)'},
          '60%': {transform: 'rotate(5deg)'},
          '80%': {transform: 'rotate(-5deg)'},
          '100%': {transform: 'rotate(0deg)'}
        },
        moveclouds: {
          '0%': {transform: 'translateX(1000px)'},
          '100%': {transform: 'translateX(-1000px)'}
        }
      },
      animation: {
        swing: 'swing 10s ease-in-out infinite',
        moveclouds30: 'moveclouds 30s linear infinite',
        moveclouds31: 'moveclouds 31s linear infinite',
        moveclouds35: 'moveclouds 35s linear infinite',
        moveclouds40: 'moveclouds 40s linear infinite',
        moveclouds45: 'moveclouds 45s linear infinite',
        moveclouds48: 'moveclouds 48s linear infinite',
      },
      inset: {
        '20pc': '20%',
        '35pc': '35%',
        '60pc': '60%',
        '70pc': '70%',
        '80pc': '80%',
        '85pc': '85%'
      },
      margin: {
        '40pc': '40%',
      },
      height: {
        "95vh": "95vh"
      },
      width: {
        "5pc": "5%",
        "6pc": "6%",
        "7pc": "7%",
        "10pc": "10%",

      },
      colors: {
        transparent: 'transparent',
        night: '#3D4E68',
        sweet: '#D4E9E5',
        babyblue: '#7C97BF'
      },
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'sugar-cane': ['ut_sugar_caneregular']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
