/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderWidth: {
        '.6': '.6px',
      },
      spacing: {
        '6px': '6px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '20%': '20%',
        '33%': '33%',
        '66%': '66%',
        '33vw': '33vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '20vh': '20vh',
        '50vh': '50vh',
      },
      colors: {
        'darkgrey': 'rgb(34, 34, 34)',
        'darkgreyHover': 'rgb(55, 55, 55)',
        'grey': 'rgb(195, 194, 190)',
        'lightgrey': 'rgb(234, 234, 237)',
        'softwhite': 'rgb(250, 251, 245)',
      },
      fontSize: {
        s: '0.8rem',
        m: '14px',
        base: '1rem',
        l: '1.2rem',
        xl: '2.4rem'
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, 1fr)',
        '2': 'repeat(2, 50%)',
      },
      gridAutoRows: {
        '1em': '1em' 
      }
    },
  },
  plugins: [],
}
