import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'accent-color': '#b0b6c0',
      },
      borderColor: {
        DEFAULT: '#e5e7eb',
      },
      gridTemplateColumns: {
        'main-grid': '300px 1fr',
      },
    },
  },
  plugins: [],
} satisfies Config;
