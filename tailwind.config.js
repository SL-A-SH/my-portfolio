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
          accent:      '#ff5a4f', // signal red — primary accent (links, active states, CTAs, HUD marks)
          accentHover: '#ff7b72', // accent hover — brighter signal
        },
      },
      // Expo-out everywhere: bare `transition-*` classes and `ease-out` both use it
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
