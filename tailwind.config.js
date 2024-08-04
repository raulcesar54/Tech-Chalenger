/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ligth-gray": "#F2F2F2",
        "medium-gray": "#959595",
        "medium-ligth-gray": "#DBDBDB",
        "primary-ligth": "#649FBF33",
        primary: "#649FBF",
        dark: "#272F33",
      },
      boxShadow: {
        "3xl": "0px 2px 23px 0 rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
};
