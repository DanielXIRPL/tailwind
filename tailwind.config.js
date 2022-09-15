/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        "red":"#dc2626",
        "white":"#f8fafc",
        "gray":"#6b7280",
        "blue":"#2563eb",
        "teal":"#0d9488",
        "teal300":"#5eead4",
        "cyan":"#22d3ee",
        "black":"#171717"
      },

      fontFamily:{
        Poppins:["Popppins, sans-serif"]
      },

      container:{
        center:true,
        padding:"1rem",
        screens:{
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px"
        }
      }
    },
  },
  plugins: [],
}
