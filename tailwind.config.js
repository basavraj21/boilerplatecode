module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { 900: "#000000", "900_99": "#00000099", "900_7f": "#0000007f" },
        blue_gray: { 50: "#edf0f8", 100: "#d9d9d9" },
        gray: { 100: "#f3f3f3", 300: "#e4e4e4", 400: "#b8bbbf", 500: "#a2a2a2", 600: "#716c6c", "400_01": "#b9bbbf" },
        red: { A700_7f: "#ff00007f" },
        indigo: { 800: "#3a4980" },
        lime: { 100: "#e6f7b7" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", khula: "Khula" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
