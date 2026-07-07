import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* "Field Standard" design tokens — values defined per-theme in globals.css */
        paper: {
          DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
          raised: 'rgb(var(--paper-raised) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
        signal: 'rgb(var(--signal) / <alpha-value>)',
        steel: 'rgb(var(--steel) / <alpha-value>)',
        ok: 'rgb(var(--ok) / <alpha-value>)',
        warn: 'rgb(var(--warn) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        head: ['var(--font-big-shoulders)', 'Impact', 'sans-serif'],
        body: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        data: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
