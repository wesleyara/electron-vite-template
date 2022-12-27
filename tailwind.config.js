/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["Poppins", "system-ui", "sans-serif"],
    body: ["Poppins", "system-ui", "sans-serif"],
    extend: {
      colors: {
        brand: {
          primary: {
            blue1F: "var(--blue-1F)",
            blue1A: "var(--blue-1A)",
            blue85E: "var(--blue-85E)",
          },
        },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          xl: "0rem",
        },
      },
    },
  },
  plugins: [],
};
