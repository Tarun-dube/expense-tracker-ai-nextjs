import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // 🔴 Reddish theme colors
        primary: {
          light: '#fca5a5',   // light red
          DEFAULT: '#ef4444', // main red
          dark: '#b91c1c',    // dark red (hover/active)
        },
        accent: {
          light: '#fb7185',   // rose-pink
          DEFAULT: '#f43f5e', // rose main
          dark: '#be123c',    // deep rose
        },
      },
    },
  },
  plugins: [],
} satisfies Config
