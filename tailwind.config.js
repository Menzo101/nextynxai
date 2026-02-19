/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0E21A0",
        secondary: "#FA8112",
      },
    },
  },
  plugins: [],
};
