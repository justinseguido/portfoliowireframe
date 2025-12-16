export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      keyframes: {
        flow: {
          "0%, 100%": { opacity: "0.25", transform: "translateY(0)" },
          "50%": { opacity: "0.6", transform: "translateY(4px)" },
        },
      },
      animation: {
        flow: "flow 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
