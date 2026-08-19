"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import ProfileImage from "./ProfileImage";

const stats = [
  { value: "2", label: "Production platforms shipped" },
  { value: "2", label: "Portals in one codebase (Electric Avenue)" },
  { value: "1", label: "Real-time WebSocket layer owned (Sredible)" },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
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

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-start"
          >
            <ProfileImage />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border border-line bg-surface/60 p-6 transition-all hover:border-signal hover:bg-surface"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-signal/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative">
                  <motion.div
                    className="font-display text-4xl font-semibold text-signal"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {s.value}
                  </motion.div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
