import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playwrite: ["Ysabeau SC"]
 },
 container: {
  center: true,
  padding: "15px",
},
colors: {
 accent: "#08E9SE",

},
    },
  },
  plugins: [],
} satisfies Config;
