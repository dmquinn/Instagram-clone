/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "modal-gray": "#1b1b1b",
      "link-blue": "#60a5fa",
      "plain-white": "#ffffff",
      "modal-back": "#00000088",
      searchBar: "#efefef",
    },
  },
  plugins: [],
};
