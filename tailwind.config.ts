import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'accent-color': '#b0b6c0',
        'accent-color-lighter': '#eee',
      },
      borderColor: {
        DEFAULT: '#e5e7eb',
      },
      gridTemplateColumns: {
        'main-grid': '350px 1fr',
      },
    },
  },
  plugins: [],
} satisfies Config;
