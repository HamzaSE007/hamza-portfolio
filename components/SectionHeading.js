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
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-signal" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-balance leading-relaxed text-muted">{description}</p>}
    </motion.div>
  );
}
