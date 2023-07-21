/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      "blue-ultralight": "#BDD5DE",
      "blue-light": "#7AAABD",
      "blue-medium": "#3d5880",
      "blue-dark": "#000642",
      "pink-ultralight": "E7C5D3",
      "pink-light": "#CE8BA6",
      "pink-regular": "#9D174D",
      "pink-dark": "#76123A",
      "orange-light": "#FFCF8E",
      "orange-regular": "#FF9F1C",
      black: "",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".1em",
      wider: ".2em",
      widest: ".4em",
    },
  },
  plugins: [],
};
