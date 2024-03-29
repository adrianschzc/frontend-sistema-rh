/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secundary: { 900: "#131517", 100: "#1E1F25" },
      },
    },
  },
  plugins: [],
};
