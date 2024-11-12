import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        serif: ["ClashGrotesk"],
      },
      colors: {
        lime: {
          primary: "#A2FF00",
          secondary: "#CBFF72",
        },
      },
    },
  },
  plugins: [],
  safelist: ["max-h-screen", "overflow-hidden"],
} satisfies Config;
