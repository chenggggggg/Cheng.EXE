/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#151514",
        rice: "#f7f2e8",
        canvas: "#fffaf0",
        charcoal: "#22211f",
        gold: "#d7a94f",
        redline: "#b91f2c",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
