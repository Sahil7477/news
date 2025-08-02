/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ✅ App Router
    "./components/**/*.{js,ts,jsx,tsx}",// ✅ Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
