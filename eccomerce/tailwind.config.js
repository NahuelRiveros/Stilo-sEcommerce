/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont:'',
        titleFont:'Lato',
        otherFont:'Roboto Condensed' 
      }
    },
  },
  plugins: [],
}

