/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {

      /* Custom Brand Colors */
      colors: {
        primary: "#ff3e6c",
        secondary: "#ff9f1c",
        accent: "#2ec4b6",
        background: "#f5f5f5",
        "text-primary": "#333333",
        "text-secondary": "#666666",
      },

      /* Fonts */
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier New", "monospace"],
      },

      /* Extra spacing utilities (Tailwind already has many) */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      /* Additional shadows */
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)",
        card: "0 4px 20px rgba(0,0,0,0.1)",
        hover: "0 10px 30px rgba(0,0,0,0.15)",
      },

      /* Custom border radius */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      /* Extra z-index levels */
      zIndex: {
        60: "60",
        70: "70",
      },

    },
  },

  plugins: [
    require("@tailwindcss/forms"),
  ],
};