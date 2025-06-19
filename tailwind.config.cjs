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
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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

