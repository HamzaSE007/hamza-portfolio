"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ProjectCase({ project, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-line bg-surface/50 transition-all hover:border-signal hover:bg-surface/80"
    >
      {/* Animated background glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/10 to-signal/0 opacity-0 group-hover:opacity-100"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative z-10 flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div>
          <motion.div
            className="mb-2 flex items-center gap-3"
            animate={{ x: open ? 0 : 0 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">
              {project.kicker}
            </span>
            <motion.span
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-signal"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {project.status}
            </motion.span>
          </motion.div>
          <motion.h3
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
            whileHover={{ x: 4 }}
          >
            {project.name}
          </motion.h3>
          <motion.p
            className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/90"
            whileHover={{ x: 4 }}
          >
            {project.oneLiner}
          </motion.p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0, scale: open ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-signal group-hover:text-signal"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="border-t border-line"
          >
            <div className="relative z-10 grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_260px]">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Problem
                  </h4>
                  <p className="leading-relaxed text-muted">
                    {project.problem}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Role
                  </h4>
                  <p className="leading-relaxed text-muted">{project.role}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Approach
                  </h4>
                  <ul className="space-y-3">
                    {project.approach.map((line, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="mt-1 font-mono text-xs text-signal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{line}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t, idx) => (
                      <motion.span
                        key={t}
                        className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted transition-all hover:border-signal hover:bg-surface"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + idx * 0.04 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        className="text-sm leading-relaxed text-muted"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.span
                          className="text-signal"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.6, delay: 0.35 + i * 0.05 }}
                        >
                          ◆
                        </motion.span>{" "}
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
