module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "var(--red)",
          redDark: "var(--red-dark)",
          green: "var(--green)",
          ink: "var(--ink)",
          paper: "var(--paper)",
          alt: "var(--alt)",
          border: "var(--border-mid)",
          mid: "var(--mid)",
          navlink: "var(--navlink)",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}