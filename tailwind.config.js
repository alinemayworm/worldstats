/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      "off-white": "#F9FAF5",
      "blue-ultralight": "#D5E4FA",
      "purple-ultralight": "#E5D6FB",
      "pink-ultralight": "#FBD4F5",
      "yellow-ultralight": "#FFFDC7",
      "green-ultralight": "#e4fb98",

      "blue-light": "#82aff0",
      "purple-light": "#af81f3",
      "pink-light": "#f37fe1",
      "yellow-light": "#fffa6c",
      "green-light": "#e4fb98",

      "blue-regular": "#307ae6",
      "purple-regular": "#7a2dea",
      "pink-regular": "#eb2bce",
      "yellow-regular": "#fff711",
      "green-regular": "#b5e909",

      "blue-dark": "#144fa5",
      "purple-dark": "#4f11a9",
      "pink-dark": "#a91092",
      "yellow-dark": "#b6af00",
      "green-dark": "#789b06",

      "blue-ultradark": "#0a2753",
      "purple-ultradark": "#270855",
      "pink-ultradark": "#550849",
      "yellow-ultradark": "#5b5800",
      "green-ultradark": "#3c4e03",

      "grey-ultralight": "#EAEBE6",
      "grey-light": "#CBCCC8",
      "grey-regular": "#5E5E5D",
      "grey-dark": "#20201F",
      "grey-ultradark": "#101010",

      black: "000",
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
