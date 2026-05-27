/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#02253A',
          'navy-dark': '#0A3D5C',
          orange: '#EB6219',
          'orange-light': '#FF8A4C',
          green: '#0F9203',
          amber: '#F59E0B',
          purple: '#7C3AED',
          teal: '#0D9488',
          bg: '#F8F8FB',
          surface: '#FFFFFF',
          outline: '#94A3B8',
          scrim: '#04506E',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #02273C 0%, #023047 25%, #02344D 50%, #033B54 75%, #044965 100%)',
      },
    },
  },
  plugins: [],
};
