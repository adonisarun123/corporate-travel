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
          50: '#fff7f5',
          100: '#ffede8',
          200: '#ffd6c9',
          300: '#ffbea9',
          400: '#ff8f66',
          500: '#ff6b35',
          600: '#ff4d0d',
          700: '#cc3a03',
          800: '#a13003',
          900: '#752302'
        },
        secondary: {
          DEFAULT: '#2d3748',
          light: '#4a5568',
          dark: '#1a202c'
        },
        accent: {
          blue: '#3182ce',
          purple: '#805ad5',
          teal: '#319795',
        },
        surface: {
          light: '#f7fafc',
          dark: '#edf2f7'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
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

