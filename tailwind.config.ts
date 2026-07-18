import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // Brand colors extracted from logo gradient
        primary: {
          DEFAULT: "#1E5EFF", // Royal Blue
          50: "#EFF5FF",
          100: "#DBE8FF",
          200: "#BFD7FF",
          300: "#98BDFF",
          400: "#6A9AFF",
          500: "#4578FF",
          600: "#1E5EFF",
          700: "#0D40EA",
          800: "#0D35BC",
          900: "#102F94",
        },
        secondary: {
          DEFAULT: "#0EA5E9", // Bright Blue
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        // Deep navy for dark mode backgrounds
        navy: {
          DEFAULT: "#0A1628",
          50: "#F0F4F8",
          100: "#E1E8EF",
          200: "#C2D1DF",
          300: "#94A8BE",
          400: "#5E7794",
          500: "#364A62",
          600: "#1E324A",
          700: "#0A1628",
          800: "#070F1C",
          900: "#040A12",
          950: "#020508",
        },
        // Neutral grays
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Light mode background
        mist: "#FAFBFC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(30,94,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,94,255,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 27% 37%, rgb(30, 94, 255) 0px, transparent 50%), radial-gradient(at 97% 21%, rgb(14, 165, 233) 0px, transparent 50%), radial-gradient(at 52% 99%, rgb(6, 182, 212) 0px, transparent 50%), radial-gradient(at 10% 29%, rgb(30, 94, 255) 0px, transparent 50%), radial-gradient(at 97% 96%, rgb(6, 182, 212) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(14, 165, 233) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(30, 94, 255) 0px, transparent 50%)",
      },
      keyframes: {
        ring: {
          "0%": { transform: "scale(0.6)", opacity: "0.6" },
          "80%": { opacity: "0" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%,100%": { opacity: "1", filter: "blur(20px)" },
          "50%": { opacity: "0.5", filter: "blur(30px)" },
        },
      },
      animation: {
        ring1: "ring 3.5s cubic-bezier(0.2,0.6,0.3,1) infinite",
        ring2: "ring 3.5s cubic-bezier(0.2,0.6,0.3,1) infinite 1.15s",
        ring3: "ring 3.5s cubic-bezier(0.2,0.6,0.3,1) infinite 2.3s",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        blob: "blob 15s ease-in-out infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16,1,0.3,1)",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16,1,0.3,1)",
        "fade-in": "fade-in 0.6s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
        glow: "glow 4s ease-in-out infinite",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(30,94,255,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
        "glass-dark": "0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset",
        glow: "0 0 60px rgba(30,94,255,0.3)",
        "glow-accent": "0 0 60px rgba(6,182,212,0.4)",
        "button-primary": "0 10px 40px -10px rgba(30,94,255,0.4)",
        "button-hover": "0 20px 60px -15px rgba(30,94,255,0.5)",
        "card": "0 1px 3px rgba(15,23,42,0.1), 0 1px 2px rgba(15,23,42,0.06)",
        "card-hover": "0 10px 40px -10px rgba(15,23,42,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
