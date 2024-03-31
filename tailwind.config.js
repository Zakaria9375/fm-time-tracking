/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      bluebck: "#5747EA",
      mainbck: "#0E1323",
      secbck: "#1C204B",

      indigo: "#33397A",

      desat: "#7078C9",
      pale: "#BBC0FF",

      white: "#FFFFFF",

      work: "#FF8B64",
      play: "#55C2E6",
      study: "#FF5E7D",
      exercise: "#4BCF82",
      social: "#7335D2",
      selfCare: "#F1C75B",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      screens: {
        lmd: { max: "768px" },

        lxl: { max: "1160px" },
        csm: { min: "768px", max: "890px" },
      },
    },
  },
  plugins: [],
};
