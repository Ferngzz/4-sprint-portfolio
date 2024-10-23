/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{html,ts,tsx}",
      "./src/components/**/*.{html,ts,tsx}",
      "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F39422',
        'light-blue': '#537EC5',
        'dark-blue': '#293A80'
      }
    },
  },
  plugins: [],
}

