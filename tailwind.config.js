module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grayish-black': '#000000ff',
      },
      outline: {
        'grayish-black': '2px solid #0000ff',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
