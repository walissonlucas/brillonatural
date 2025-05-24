/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FDECEC',  // Light pink
        secondary: '#FFF7ED', // Soft beige
        terciary: '#73C883', // Mint Green Medium
        accent: '#D7F3EB',   // Mint green
        'accent-dark': '#90CFBE', // Darker mint for hovers
        background: '#FFFFFF', // White
        dark: '#333333',     // Dark gray for text
        'dark-light': '#666666', // Lighter gray for secondary text
        success: '#4CAF50',  // Green
        warning: '#FF9800',  // Orange
        error: '#F44336',    // Red
        neutral: {
          50: '#F9F9F9',
          100: '#F1F1F1',
          200: '#E1E1E1',
          300: '#D1D1D1',
          400: '#AFAFAF',
          500: '#8E8E8E',
          600: '#6E6E6E',
          700: '#4B4B4B',
          800: '#2C2C2C',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};