"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const stats = [
  { value: "2", label: "Production platforms shipped" },
  { value: "2", label: "Portals in one codebase (Electric Avenue)" },
  { value: "1", label: "Real-time WebSocket layer owned (Sredible)" },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-signal" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">About</span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frontend developer, currently keeping two real-time platforms honest.
          </h2>
          <p className="mt-6 text-balance leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">
            I care about the seam between "the data changed" and "the screen agrees with it" —
            that's where most real-time UI breaks, and where I spend most of my time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="grid gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-signalDim"
            >
              <div className="font-display text-4xl font-semibold text-signal">{s.value}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
