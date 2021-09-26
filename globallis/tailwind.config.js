module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        globallisBlue: "#0E3345",
        globallisSvetia: "#B3C5D3",
        lightWhite: "rgba(255, 255, 255, 0.4)",
        temma: "rgba(14, 51, 69, 0.7)",
      },
      fontFamily: {
        'logo': ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
