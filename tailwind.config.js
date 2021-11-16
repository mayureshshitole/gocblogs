module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      slowSpin: "slowSpin 3s linear",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 6s infinite",
      bounceReverse: "bounceReverse 6s infinite",
      bouncePanda: "bouncePanda 8s infinite",
    },
    keyframes: {
      spin: {
        to: { transform: "rotate(360deg)" },
      },
      slowSpin: {
        to: { transform: "rotate(360deg)" },
      },
      ping: {
        "75%, 100%": { transform: "scale(2)", opacity: "0" },
      },
      pulse: {
        "50%": { opacity: ".5" },
      },
      bounce: {
        "0%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
      },
      bounceReverse: {
        "0%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
      },
      bouncePanda: {
        "0%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
      },
    },
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        bluish: "#09152E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
