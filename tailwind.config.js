/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base:       "#0A0D10",
        surface:    "#12161B",
        surface2:   "#181D24",
        line:       "#232A32",
        ink:        "#E7ECEF",
        muted:      "#7C8894",
        signal:     "#4FD1C5",
        signalDim:  "#2C7A73",
        amber:      "#F0B429",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(79,209,197,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,209,197,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%":      { opacity: 0.35 },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 49%":  { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        shimmerText: {
          "0%":   { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        sonarRipple: {
          "0%":   { transform: "scale(1)", opacity: 0.6 },
          "100%": { transform: "scale(3)", opacity: 0 },
        },
        meshDrift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%":      { transform: "translate(30px, -20px) scale(1.05)" },
          "66%":      { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        drawLineDown: {
          from: { height: "0%" },
          to:   { height: "100%" },
        },
        scanSweep: {
          "0%":   { transform: "translateY(-10px)", opacity: 0 },
          "10%":  { opacity: 1 },
          "90%":  { opacity: 1 },
          "100%": { transform: "translateY(120px)", opacity: 0 },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(79,209,197,0.4)" },
          "50%":      { boxShadow: "0 0 30px rgba(79,209,197,0.85)" },
        },
      },
      animation: {
        pulseSoft:   "pulseSoft 2.4s ease-in-out infinite",
        scan:        "scan 3s linear infinite",
        blink:       "blink 1s step-start infinite",
        shimmerText: "shimmerText 3s linear infinite",
        sonarRipple: "sonarRipple 2s ease-out infinite",
        meshDrift:   "meshDrift 12s ease-in-out infinite",
        orbFloat:    "orbFloat 4s ease-in-out infinite",
        drawLineDown: "drawLineDown 1.4s ease-out forwards",
        scanSweep:   "scanSweep 3s linear infinite",
        glowPulse:   "glowPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
