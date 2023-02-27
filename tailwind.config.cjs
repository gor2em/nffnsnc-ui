/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primaryBackground: "var(--primary-bg-color)",
          primary: "var(--primary-color)",
          secondaryBackground: "var(--secondary-bg-color)",
          secondary: "var(--secondary-color)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
