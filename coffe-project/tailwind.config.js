/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        netralSilver: "#f5f7fa",
        netralDGrey: "#4d4d4d",
        brandPrimary: "#4caf4f",
        netralGrey: "#717171",
        grey900: "#18191f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
