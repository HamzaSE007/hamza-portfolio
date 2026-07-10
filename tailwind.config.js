/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0D10",
        surface: "#12161B",
        surface2: "#181D24",
        line: "#232A32",
        ink: "#E7ECEF",
        muted: "#7C8894",
        signal: "#4FD1C5",
        signalDim: "#2C7A73",
        amber: "#F0B429",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
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
          "50%": { opacity: 0.35 },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
