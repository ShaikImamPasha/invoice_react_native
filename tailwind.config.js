/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'Manrope_Regula': ['Manrope-Regular'],
        'Manrope_SemiBold':['Manrope-SemiBold']
      },
    },
  },
  plugins: [],
}

