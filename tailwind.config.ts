import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050308",
          900: "#0a0712",
          800: "#120c1f",
          700: "#1b1330",
          600: "#241a40",
        },
        accent: {
          100: "#efe6ff",
          200: "#dbc8ff",
          300: "#c7b3ff",
          400: "#a883ff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6425c9",
          glow: "#b389ff",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.18), transparent 60%)",
        "grid-glow":
          "linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.45)",
        "glow-sm": "0 0 20px -6px rgba(139,92,246,0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift 34s ease-in-out infinite",
        "drift-slow": "drift 50s ease-in-out infinite reverse",
        cruise: "cruise 90s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.92)" },
          "20%": { opacity: "0.95", transform: "scale(1.03)" },
          "45%": { opacity: "0.4", transform: "scale(0.94)" },
          "70%": { opacity: "1", transform: "scale(1.08)" },
          "85%": { opacity: "0.55", transform: "scale(0.97)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6%, 2%)" },
        },
        cruise: {
          "0%": { transform: "translate(-30%, 0)" },
          "45%": { transform: "translate(10%, -2.5%)" },
          "100%": { transform: "translate(130%, 3%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
