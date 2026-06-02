/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#39FF14',
          light: '#5FFF3A',
          dark: '#106e00',
        },
        secondary: {
          DEFAULT: '#00BFFF',
          light: '#33CCFF',
          dark: '#0891B2',
        },
        accent: {
          DEFAULT: '#00BFFF',
          light: '#33CCFF',
          dark: '#0891B2',
        },
        dark: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#B0B0B0',
          400: '#B0B0B0',
          500: '#64748B',
          600: '#475569',
          700: '#222222',
          800: '#111111',
          900: '#0A0A0A',
          950: '#000000',
        },
        glass: {
          light: 'rgba(0,191,255,0.08)',
          dark: 'rgba(17,17,17,0.70)',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'slideDown': 'slideDown 0.6s ease-out',
        'slideLeft': 'slideLeft 0.6s ease-out',
        'slideRight': 'slideRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 191, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}