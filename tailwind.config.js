export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          900: '#04050d',
          800: '#0d1224',
          700: '#111827',
          600: '#131a2a',
          500: '#1d253f',
          blue: '#35c7ff',
          purple: '#a855f7',
          cyan: '#22d3ee',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.25)',
        cyber: '0 0 20px rgba(59, 130, 246, 0.18), 0 0 60px rgba(56, 189, 248, 0.12)',
      },
      backgroundImage: {
        'grid-cyber': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.08), transparent 25%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.08), transparent 25%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(59, 130, 246, 0.35)' },
        },
      },
    },
  },
  plugins: [],
};
