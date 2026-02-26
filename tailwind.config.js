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
        primary: "#0E21A0",
        secondary: "#FA8112",
      },
    },
  },
  plugins: [],
};
