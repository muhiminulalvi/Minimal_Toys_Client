/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3811",

          secondary: "#37363A",

          accent: "#a3255b",

          neutral: "#2B252D",

          "base-100": "#FFFFFF",

          info: "#94CCF9",

          success: "#1F7A50",

          warning: "#fce116",

          error: "#F76E9C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
