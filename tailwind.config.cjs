/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-reduce": "url('/reduce.jpg')",
        "bg-redux": "url('/redux.jpg')",
      },
    },
  },
  plugins: [],
};
