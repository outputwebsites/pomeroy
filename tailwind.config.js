/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pomeroyGreenMain: '#14532D',
        pomeroyGreenWhite: '#E8E9DD',
        pomeroyGreenLight: '#86967A',
        pomeroyGreenDark: '#4A5740',
        pomeroyGreenBlack: '#1D271E',
        pomeroyGray: '#E5E7EB',
        pomeroyWhite: '#FFFFFF',
        pomeroyBlack: '#0B0C0B'
      }
    }
  },
  plugins: []
}
