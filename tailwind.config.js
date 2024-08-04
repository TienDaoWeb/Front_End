const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  // prefix: 'tw-',
  // important: true,
  content: [
    "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./packages/material-tailwind-react/src/theme/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
    "./docs-content/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./documentation/**/*.mdx",
    "./public/material-tailwind-html-v2.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
      },
      backgroundImage: {
        'login-bg': "url('/assets/images/background_login.jpg')",
      },
      fontFamily: {
        'KDHidayatullah': ['KD Hidayatullah'],
        'DFVNBridgeType': ['DFVN Bridge Type'],
      },
      screens:{
        xs: "300px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
});
