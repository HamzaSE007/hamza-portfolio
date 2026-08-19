"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <motion.div
        className="mb-4 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.span
          className="h-px w-8 bg-signal"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.span
          className="font-mono text-xs uppercase tracking-[0.2em] text-signal"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
      </motion.div>

      <motion.h2
        className="bg-gradient-to-r from-ink via-ink to-signal bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="mt-4 text-balance leading-relaxed text-muted"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
