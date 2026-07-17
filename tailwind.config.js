/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base:        '#0a0d14', // body / deepest background
          deep:        '#0f1419', // navbar / dark page background
          mid:         '#1e2635', // section / page gradient mid
          card:        '#1a1f2b', // card gradient from
          surface:     '#2a2f3b', // card gradient to / tag pills
          hover:       '#3a3f4b', // hover state on surface elements
          accent:      '#d99a3d', // warm brass — primary accent (links, active states, CTAs)
          accentHover: '#e8ad5c', // accent hover — brighter brass
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
