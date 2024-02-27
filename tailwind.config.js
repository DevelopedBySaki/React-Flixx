/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: { primary: "#020d18", secondary: "#f1c40f" },
      gridTemplateColumns: {
        "250px": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
