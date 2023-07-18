// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",
      xl: "1360px",
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
