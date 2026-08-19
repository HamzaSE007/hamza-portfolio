"use client";

import { motion } from "framer-motion";

export default function CircuitBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating animated circles */}
      <motion.div
        className="absolute -top-40 right-[-15%] h-72 w-72 rounded-full bg-signal/10 blur-2xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-signalDim/5 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* SVG Circuit diagram with animations */}
      <svg
        className="absolute -top-24 right-[-10%] h-[600px] w-[600px] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Animated circles */}
        <motion.circle
          cx="200"
          cy="200"
          r="199"
          className="trace-line"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          className="trace-line"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          className="trace-line"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />

        {/* Animated lines */}
        <motion.line
          x1="0"
          y1="200"
          x2="400"
          y2="200"
          className="trace-line"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.line
          x1="200"
          y1="0"
          x2="200"
          y2="400"
          className="trace-line"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        />

        {/* Animated nodes */}
        <motion.circle
          cx="200"
          cy="60"
          r="3"
          fill="#4FD1C5"
          animate={{
            r: [3, 5, 3],
            opacity: [1, 0.6, 1],
            boxShadow: [
              "0 0 10px rgba(79, 209, 197, 0.8)",
              "0 0 20px rgba(79, 209, 197, 1)",
              "0 0 10px rgba(79, 209, 197, 0.8)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="340"
          cy="200"
          r="3"
          fill="#F0B429"
          animate={{
            r: [3, 5, 3],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        {/* Additional animated nodes */}
        <motion.circle
          cx="60"
          cy="200"
          r="2"
          fill="#4FD1C5"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="200"
          cy="340"
          r="2"
          fill="#F0B429"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}
