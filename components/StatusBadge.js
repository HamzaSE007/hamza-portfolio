"use client";

import { motion } from "framer-motion";

export default function StatusBadge({ label, tone = "signal" }) {
  const toneMap = {
    signal: "bg-signal shadow-[0_0_8px_2px_rgba(79,209,197,0.6)]",
    amber: "bg-amber shadow-[0_0_8px_2px_rgba(240,180,41,0.6)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-all hover:border-signal hover:bg-surface/80"
    >
      <motion.span
        className={`relative flex h-2 w-2`}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          className={`absolute inline-flex h-full w-full rounded-full ${toneMap[tone]}`}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.span>
      {label}
    </motion.div>
  );
}
