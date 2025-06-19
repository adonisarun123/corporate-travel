/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b35',
          light: '#ff8f66',
          dark: '#cc5529',
        },
        secondary: {
          DEFAULT: '#2d3748',
          light: '#4a5568',
          dark: '#1a202c',
        },
        accent: {
          blue: '#3182ce',
          purple: '#805ad5',
          teal: '#319795',
        },
        surface: {
          light: '#f7fafc',
          DEFAULT: '#ffffff',
          dark: '#edf2f7',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #FF6A00 0%, #FFB347 100%)',
        'market-gradient': 'linear-gradient(90deg, #7B2FF2 0%, #F357A8 100%)',
        'roadmap-gradient': 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        'glass': '8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

