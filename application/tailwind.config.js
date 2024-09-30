import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "250px",
      sm: "480px",
      md: "900px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1600px",
    },
    colors: {
      white: "var(--color-white)",
      black: "var(--color-black)",
      grey: "var(--color-grey)",
      primary: "var(--color-primary)",
      second: "var(--color-secondary)",
    },
    fontSize: {
      x: "var(--fs-main)",
      main: "var(--fs-main2)",
      base: "var(--fs-base)",
      x2: "var(--fs-sectionHead)",
      xl: "var(--fs-big)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-br":
          "radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    import("@tailwindcss/line-clamp"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
