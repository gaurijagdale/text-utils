/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif'],
      'noto-sans': ['Noto Sans']
  },
    extend: {
      colors:{
        'LBlue':'#CAF4FF',
        'DBlue':'#153448'
      }
    },
  },
  plugins: [],
}

