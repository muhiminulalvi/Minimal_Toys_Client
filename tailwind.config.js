/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3811",

          secondary: "#151515",

          accent: "#a3255b",

          neutral: "#2B252D",

          "base-100": "#FFFFFF",

          info: "#94CCF9",

          success: "#1F7A50",

          warning: "#EBBD33",

          error: "#F76E9C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
