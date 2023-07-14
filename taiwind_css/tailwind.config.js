/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing: {
       '35': "35px",
      },
      colors:{
        gray33: "#333",
      }
    },
  },
  plugins: [],
}

