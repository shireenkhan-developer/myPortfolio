/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          50: 'rgb(var(--app-gray-50) / <alpha-value>)',
          100: 'rgb(var(--app-gray-100) / <alpha-value>)',
          200: 'rgb(var(--app-gray-200) / <alpha-value>)',
          300: 'rgb(var(--app-gray-300) / <alpha-value>)',
          400: 'rgb(var(--app-gray-400) / <alpha-value>)',
          500: 'rgb(var(--app-gray-500) / <alpha-value>)',
          600: 'rgb(var(--app-gray-600) / <alpha-value>)',
          700: 'rgb(var(--app-gray-700) / <alpha-value>)',
          800: 'rgb(var(--app-gray-800) / <alpha-value>)',
          900: 'rgb(var(--app-gray-900) / <alpha-value>)',
          950: 'rgb(var(--app-gray-950) / <alpha-value>)',
        },
        cosmic: {
          DEFAULT: '#0a0a0f',
          50: '#1a1a2e',
          100: '#0f0f1f',
          200: '#1a1a2e',
          300: '#25253d',
          400: '#2f2f4c',
          500: '#3a3a5b',
          600: '#45456a',
          700: '#505079',
          800: '#5b5b88',
          900: '#666697',
          950: '#7171a6',
        },
        nebula: {
          DEFAULT: '#1a0b2e',
          50: '#2d1b47',
          100: '#402b60',
          200: '#533b79',
          300: '#664b92',
          400: '#795bab',
          500: '#8c6bc4',
          600: '#9f7bdd',
          700: '#b28bf6',
          800: '#c59bff',
          900: '#d8abff',
        },
        space: {
          DEFAULT: '#000000',
          50: '#0a0a0f',
          100: '#0f0f1a',
          200: '#141420',
          300: '#191925',
          400: '#1e1e2a',
          500: '#232330',
          600: '#282835',
          700: '#2d2d3a',
          800: '#323240',
          900: '#373745',
        },
        void: {
          DEFAULT: '#0a0a15',
          50: '#1a1a2e',
          100: '#0f0f1f',
          200: '#1a1a2e',
          300: '#25253d',
        },
        stellar: {
          blue: '#4c63d2',
          cyan: '#6366f1',
          purple: '#7c3aed',
          pink: '#a855f7',
          violet: '#6d28d9',
          indigo: '#4f46e5',
          darkblue: '#312e81',
        },
        glow: {
          blue: '#4c63d2',
          cyan: '#6366f1',
          purple: '#7c3aed',
          pink: '#a855f7',
          violet: '#6d28d9',
          indigo: '#4f46e5',
        },
      },
      keyframes: {
        open: {
          '0%': {
            opacity: 1,
            transform: 'translateX(100%)',
          },
        },
        close: {
          to: {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
        waving: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.5)' },
        },
        shootingStar: {
          '0%': { transform: 'translate(0, 0) rotate(-45deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100vw, 100vh) rotate(-45deg)', opacity: '0' },
        },
        spaceParticle: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.3' },
          '50%': { transform: 'translate(20px, -20px)', opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '25%': { transform: 'translateY(-30px) translateX(15px)', opacity: '0.6' },
          '50%': { transform: 'translateY(-60px) translateX(-10px)', opacity: '0.5' },
          '75%': { transform: 'translateY(-30px) translateX(-15px)', opacity: '0.7' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        rotatePlanet: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        floatPlanet: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px) scale(1.05)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlide: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        aurora: {
          '0%, 100%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(180deg)',
            opacity: '0.6'
          },
        },
        codeFloat: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        mistFlow: {
          '0%, 100%': { opacity: '0.15', transform: 'translateX(0)' },
          '50%': { opacity: '0.25', transform: 'translateX(20px)' },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
        'waving-hand': 'waving 2s linear 3',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shooting-star': 'shootingStar 8s linear infinite',
        'space-particle': 'spaceParticle 12s ease-in-out infinite',
        'float-slow': 'floatSlow 20s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'rotate-planet': 'rotatePlanet 20s linear infinite',
        'float-planet': 'floatPlanet 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-slide': 'fadeInSlide 0.6s ease-out forwards',
        'aurora': 'aurora 20s ease-in-out infinite',
        'code-float': 'codeFloat 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.7s infinite',
        'float-around': 'floatAround 20s ease-in-out infinite',
        'mist-flow': 'mistFlow 15s ease-in-out infinite',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom, #0a0e27, #1a0b2e, #030518)',
        'nebula-gradient': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
        'stellar-glow': 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

// Ref :: https://twitter.com/steventey/status/1677339375645126659
// Ref :: https://tailwindcss.com/docs/customizing-colors#using-css-variables
