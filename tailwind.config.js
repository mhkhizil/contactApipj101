/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mplus-rounded': '"M PLUS Rounded 1c"'
    },
    extend: {
      colors: {
        'bc':"#eebbc3",
        'btc':"#232946",
        'htc':"#fffffe",
        'ptc':"#b8c1ec"
      }
    },
  },
  plugins: [],
}

