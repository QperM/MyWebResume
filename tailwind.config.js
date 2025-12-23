/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Inter"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
        'glow-gradient':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgba(167,139,250,0.2), transparent 35%), radial-gradient(circle at 50% 80%, rgba(16,185,129,0.16), transparent 35%)',
      },
    },
  },
  plugins: [],
};

