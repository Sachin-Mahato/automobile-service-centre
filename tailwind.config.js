/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#1E5DBC'
      },
      backgroundImage: {
        'Hero-img': "url('/src/img/Hero.jpg')",
      }
    },
  },
  plugins: [],
}

