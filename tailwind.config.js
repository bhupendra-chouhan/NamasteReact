/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}", "./index.html"],
  theme: {
    extend: {
      minHeight: {
        '25': "25rem",
      },
      borderColor: {
        "gray-shimmer": "rgb(175, 175, 175);",
      },
      backgroundColor: {
        blanchedalmond: "blanchedalmond;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
