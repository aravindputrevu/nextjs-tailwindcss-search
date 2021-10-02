module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#0077CC'
        },
        'poppy': '#FA744E',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
