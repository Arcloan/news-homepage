/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", ]
      },
      colors: {
        "softOrange": "hsl(35,77%,62%)",
        "softRed": "hsl(5, 85%, 63%)",
        "offWhite": "hsl(36,100%,99%)",
        "grayshBlue": "hsl(233,8%,79%)",
        "darkGrayshBlue": "hsl(236,13%,42%)",
        "veryDarkBlue": "hsl(240,100%,5%)",
      }
    },
  },
  plugins: [],
}

