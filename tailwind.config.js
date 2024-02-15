/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ["Poppins", "sans-serif"]
      },
      color: {
        "antiFlashWhite": "#EBEBEB",
        "whiteSmoke": "#F2F2F2",
        "fireEngineRed": "#D01E1E",
        "textBlack" : "#1E1E1E",
        "whiteSmokeDark": "F4F4F4",
        "vanilla" : "#F7EFA3",
        "celestialBlue": "#3498DB",
        "indigoDye": "#00436F",
        "gray": "#808080",
      }
    },
  },
  plugins: [],
}

