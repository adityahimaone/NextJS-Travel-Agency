/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        serif: ["'Volkhov', serif"],
      },
      colors: {
        "accent-1": "#F1A501",
        "accent-2": "#DF6951",
        "accent-3": "#FFF1DA",
        "accent-4": "#D5AEE4",
        "accent-5": "#FF7152",
        "accent-6": "#6246E5",
      },
    },
  },
  plugins: [],
};
