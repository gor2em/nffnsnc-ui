/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // screens: {
      //   xs: "614px",
      //   sm: "1002px",
      //   md: "1022px",
      //   lg: "1092px",
      //   xl: "1180px",
      //   "2xl": "1280px",
      // },

      colors: {
        theme: {
          primaryBg: "var(--primary-bg-color)",
          primaryNav: "var(--primary-nav-color)",
          primaryHead: "var(--primary-head-color)",
          primaryText: "var(--primary-text-color)",
          primaryTextDark: "var(--primary-text-dark-color)",
          primaryMoreTextDark: "var(--primary-text-more-dark-color)",
          primaryTextSuccess: "var(--primary-text-success-color)",
          primaryBorder: "var(--primary-border-color)",
          primaryIcon: "var(--primary-icon-color)",
          primaryIconActive: "var(--primary-icon-active-color)",

          secondaryBg: "var(--secondary-bg-color)",
          backdropMain: "var(--backdrop-main-bg-color)",

          fromGradient: "var(--from-gradient)",
          toGradient: "var(--to-gradient)",
          viaGradient: "var(--via-gradient)",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
