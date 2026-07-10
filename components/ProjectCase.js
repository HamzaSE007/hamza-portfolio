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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden rounded-xl border border-line bg-surface/50"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">
              {project.kicker}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {project.status}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/90">
            {project.oneLiner}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line text-muted"
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
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_260px]">
              <div className="space-y-8">
                <div>
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Problem
                  </h4>
                  <p className="leading-relaxed text-muted">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Role
                  </h4>
                  <p className="leading-relaxed text-muted">{project.role}</p>
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Approach
                  </h4>
                  <ul className="space-y-3">
                    {project.approach.map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1 font-mono text-xs text-signal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted"
                      >
                        <span className="text-signal">◆</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
