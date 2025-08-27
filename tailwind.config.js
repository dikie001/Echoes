/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fancy: { bg: "#fdf0ff", text: "#8a2be2" },
        solarized: { bg: "#fdf6e3", text: "#657b83" },
        cyberpunk: { bg: "#0f0f1c", text: "#ff00ff" },
        forest: { bg: "#0b3d2e", text: "#9acd32" },
        ocean: { bg: "#001f3f", text: "#7fdbff" },
        dracula: { bg: "#282a36", text: "#bd93f9" },
      },
    },
  },
  plugins: [],
};
