/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Add paths to your HTML and JS/JSX/TS/TSX files
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        tertiary: '#e74c3c',
        quaternary: '#9b59b6',
        quinary: '#2ecc71',
        secondaryDark: '#273746',
        tertiaryDark: '#2c3e50',
        quaternaryDark: '#34495e',
        quinaryDark: '#16a085',
        secondaryLight: '#ffffff',
        tertiaryLight: '#f1c40f',
        quaternaryLight: '#ecf0f1',
        quinaryLight: '#8e44ad',
        quinaryLighter: '#7f8c8d',
        quinaryLightest: '#3498db',
        gray: {
          '100': '#f9f9f9',
        }
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },    
  },
  plugins: [],
}


