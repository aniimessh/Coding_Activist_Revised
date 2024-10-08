import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/assets/hero-1.png')"
      },
      colors: {
        'blue-charcoal': {
          '50': '#eef6ff',
          '100': '#dcecff',
          '200': '#b2daff',
          '300': '#6dbcff',
          '400': '#2099ff',
          '500': '#007cff',
          '600': '#005fdf',
          '700': '#004bb4',
          '800': '#004095',
          '900': '#00357a',
          '950': '#000814',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform'
      },
      transform: {
        'translateY-full': 'translateY(100%)',
        'translateY-0': 'translateY(0)',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },
      transitionDuration: {
        '300': '300ms'
      }
    },
  },
  plugins: [],
};
export default config;
