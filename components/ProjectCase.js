"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Layers, Zap, CheckCircle2 } from "lucide-react";
import TiltCard from "./TiltCard";

// Browser mockup frame for project preview
function BrowserMockup({ name, color = "#4fd1c5" }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface2 shadow-lg">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-500/60" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
        <div className="h-2 w-2 rounded-full bg-green-500/60" />
        <div className="mx-2 flex-1 rounded-sm bg-line px-2 py-0.5 font-mono text-[10px] text-muted">
          app.{name.toLowerCase().replace(/\s/g, "")}.com
        </div>
      </div>
      {/* Placeholder screen */}
      <div
        className="relative flex h-28 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #12161B 0%, #1a2030 100%)`,
        }}
      >
        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${color}33 1px, transparent 1px), linear-gradient(90deg, ${color}33 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Center UI hint */}
        <div className="relative space-y-1.5 text-center">
          <div className="mx-auto h-1.5 w-20 rounded-full" style={{ background: color, opacity: 0.5 }} />
          <div className="mx-auto h-1 w-14 rounded-full bg-line" />
          <div className="mx-auto h-1 w-16 rounded-full bg-line" />
        </div>
        {/* Scan line */}
        <motion.div
          className="absolute inset-x-0 h-px opacity-30"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          animate={{ y: [-10, 120, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

export default function ProjectCase({ project, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      <TiltCard
        maxTilt={4}
        scale={1.005}
        glare={false}
        className="group relative overflow-hidden rounded-xl border border-line bg-surface/50 transition-all duration-300 hover:border-signal hover:bg-surface/80"
      >
        {/* Animated background sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/5 to-signal/0 opacity-0 group-hover:opacity-100"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Card header */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex w-full flex-col gap-4 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          {/* Text info */}
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">
                {project.kicker}
              </span>
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-signal/25 bg-signal/10 px-2 py-0.5 font-mono text-[10px] text-signal"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                {project.status}
              </motion.span>
            </div>

            <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-signal sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{project.oneLiner}</p>

            {/* Impact metric chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-md border border-line bg-surface2 px-2 py-1 font-mono text-[10px] text-muted"
                >
                  <CheckCircle2 size={10} className="text-signal" />
                  {h.split(" ").slice(0, 5).join(" ")}…
                </span>
              ))}
            </div>
          </div>

          {/* Browser mockup preview (visible when closed) */}
          {!open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="hidden w-48 flex-shrink-0 sm:block"
            >
              <BrowserMockup name={project.name} />
            </motion.div>
          )}

          {/* Chevron */}
          <motion.div
            animate={{ rotate: open ? 180 : 0, scale: open ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all group-hover:border-signal group-hover:text-signal"
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="border-t border-line"
            >
              <div className="relative z-10 grid gap-8 p-5 sm:p-6 lg:grid-cols-[1fr_260px] lg:gap-10">
                {/* Left: Problem / Role / Approach */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                      <Layers size={12} /> Problem
                    </h4>
                    <p className="leading-relaxed text-muted">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                      <Zap size={12} /> Role
                    </h4>
                    <p className="leading-relaxed text-muted">{project.role}</p>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                      <CheckCircle2 size={12} /> Approach
                    </h4>
                    <ul className="space-y-3">
                      {project.approach.map((line, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.06 }}
                          whileHover={{ x: 4 }}
                        >
                          <span className="mt-0.5 font-mono text-xs text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{line}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Right: Stack / Highlights / Mockup */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Browser mockup */}
                  <BrowserMockup name={project.name} />

                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((t, idx) => (
                        <motion.span
                          key={t}
                          className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-[11px] text-muted transition-all hover:border-signal hover:text-signal"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + idx * 0.04 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-amber">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + i * 0.06 }}
                        >
                          <motion.span
                            className="mt-0.5 text-signal"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.6, delay: 0.35 + i * 0.06 }}
                          >
                            ◆
                          </motion.span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </TiltCard>
    </motion.article>
  );
}
