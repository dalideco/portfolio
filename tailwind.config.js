/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './parts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      black: "#1D1D1D",
      white: "#F5F5F5",
      gray: "#666666",
      lightgray: "#E7E7E7"
    }
  },
  plugins: [],
}
