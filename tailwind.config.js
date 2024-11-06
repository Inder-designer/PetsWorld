import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
    ...flowbite.content,
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
    require('flowbite/plugin'),
    ...flowbite.plugins,
  ],
};
