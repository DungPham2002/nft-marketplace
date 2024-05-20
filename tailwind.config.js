/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./domain/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      icons: {
        color: "#4c5773",
        light: "#4c577341",
        bg: "#e2e6e9"
      },
      shadow: {
        dark: "#d3dae7",
        light: "#fff"
      },
      main: {
        bg: "#ecf0f3"
      }
    },
    boxShadow: {
      'shadow': '1rem 1rem 1rem #d3dae7, -1rem -1rem 1rem #fff',
      'shadow-1': '0rem 0rem 0rem #d3dae7, -.3rem -.3rem 1rem #d3dae7'
    },
    skew: {
      '45': '45deg',
    },
  },
  plugins: [],
};
