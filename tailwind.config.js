module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3.3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "'Cabin', sans-serif",
        monospace: "'VT323', monospace",
      },
      colors: {
        dark1: "#171923",
        dark2: "#1A202C",
        light1: "#eaeef3",
        light2: "#f1f5f9",
        accent: "#e63946",
        middle: "#E7934F",
        middle2: "#d36711",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
