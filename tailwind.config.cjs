module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFE8',
          dark: '#FFCB00',
          'dark-30': 'rgba(255, 203, 0, .3)'
        }
      },
      fontFamily: {
        poppins: 'Poppins'
      }
    }
  },
  plugins: []
};
