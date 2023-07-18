// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', // Modify the value here
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
