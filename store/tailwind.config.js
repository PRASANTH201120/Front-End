/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeyellow: "#FFD700",
        themeyellow1:"#fff8a3",
        themepurple: "#4729ac",
        themered: '#FF0000',
        themegreen: '#00FF00',
        themebrown: '#A52A2A',
      },
    },
  },
  plugins: [],
};
