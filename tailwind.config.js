/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#00BCD4",
      },
    },
  },
  plugins: [],
};
