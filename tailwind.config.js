const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
    ...(Array.isArray(flowbite.content) ? flowbite.content : []), // ensure it's iterable
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1400px",
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    ...(Array.isArray(flowbite.plugins) ? flowbite.plugins : []), // ensure it's iterable
  ],
};
