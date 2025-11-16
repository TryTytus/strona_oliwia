/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FBF9F3',
        'dark-brown': '#3D352E',
        'mid-brown': '#A38B76',
        'accent': '#B54A2A',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}