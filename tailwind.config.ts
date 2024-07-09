import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      sans: ['poppins'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
export default config;
