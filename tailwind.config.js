/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
