/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bodyColor : '#212428',
        lightText : '#c4cfde',
        boxBg :"linear-gradient(145deg,#1e2024,#1e2024,#23272b)",
        designColor : '#ff0414f',
      },
      boxShadow : {
        shadowOne : '10px 10px 19px #1c1e22, -10px -10px 19px #262e2e',
      }
    },
  },
  plugins: [],
}

