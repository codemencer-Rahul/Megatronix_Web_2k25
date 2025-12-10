// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        movedown: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        movedown: "movedown 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
