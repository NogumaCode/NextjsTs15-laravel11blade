import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        showHeader: {
          '0%': {
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        showHeader: 'showHeader 0.8s ease',
      },
      // keyframes: {
      //   ScaleImg: {
      //     "0%": { transform: "scale(1.2)" },
      //     "100%": { transform: "scale(1)" },
      //   },
      //   translateY: {
      //     "0%": { transform: "translateY(100%)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" },
      //   },
      //   animateY: {
      //     "0%": { transform: "translateY(60px)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" },
      //   },
      // },
      // animation: {
      //   ScaleImg: "ScaleImg 0.8s ease",
      //   translateY: "translateY 1.2s ease-in-out",
      //   animateY: "animateY 1.5s ease-in-out",
      // },
    },
  },
  plugins: [],
} satisfies Config;
