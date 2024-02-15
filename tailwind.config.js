/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        antiFlashWhite: "#EBEBEB",
        whiteSmoke: "#F2F2F2",
        fireEngineRed: "#D01E1E",
        textBlack: "#1E1E1E",
        whiteSmokeDark: "F4F4F4",
        vanilla: "#F7EFA3",
        celestialBlue: "#3498DB",
        indigoDye: "#00436F",
        gray: "#808080",
      },
      width: {
        343: "21.4375rem",
        350: "12.875rem",
        1240: "77.5rem",
        436: "27.25rem",
        837: "52.3125rem",
        820: "51.25rem",
        400: "25rem",
        1440: "90rem",
        430: "26.875rem",
      },

      height: {},

      minWidth: {
        300: "18.75rem",
      },
    },
  },
  plugins: [],
};
