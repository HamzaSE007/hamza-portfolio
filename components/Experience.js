"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { Award, Briefcase, GraduationCap } from "lucide-react";

function TimelineDot({ isActive, delay = 0 }) {
  return (
    <div className="absolute -left-[calc(2rem+5px)] top-4">
      {/* Sonar ripple rings — only on active */}
      {isActive && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full border border-signal"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay }}
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-signal"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 0.7 }}
          />
        </>
      )}
      <motion.span
        className={`relative block h-2.5 w-2.5 rounded-full border-2 ${
          isActive ? "border-signal bg-signal/30" : "border-muted/50 bg-base"
        }`}
        whileHover={{ scale: 1.5, boxShadow: "0 0 16px rgba(79,209,197,0.6)" }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

function Timeline({ items, isExperience = false }) {
  return (
    <div className="relative space-y-5 border-l border-line pl-8">
      {/* Animated draw-in line overlay */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 w-px origin-bottom bg-gradient-to-t from-signal/40 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {items.map((it, i) => {
        const isActive = isExperience && i === 0;
        return (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <TimelineDot isActive={isActive} delay={i * 0.4} />

            {/* "Now" indicator — only shown on md+ to avoid left overflow on mobile */}
            {isActive && (
              <motion.div
                className="absolute -left-16 top-3 hidden items-center gap-1 rounded-sm bg-signal/10 px-1.5 py-0.5 md:flex"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-mono text-[9px] text-signal">now</span>
              </motion.div>
            )}

            <div
              className={`overflow-hidden rounded-xl border bg-surface/40 p-4 transition-all duration-300 group-hover:bg-surface/70 ${
                isActive
                  ? "border-signal/40 shadow-[0_0_20px_rgba(79,209,197,0.08)]"
                  : "border-line group-hover:border-signal/30"
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-signal">
                {it.period}
              </div>
              <h3
                className={`mt-1 font-display text-base font-semibold transition-colors sm:text-lg ${
                  isActive ? "text-signal" : "text-ink group-hover:text-signal"
                }`}
              >
                {it.title}
              </h3>
              <div className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                {isExperience ? (
                  <Briefcase size={11} className="flex-shrink-0 text-muted/60" />
                ) : (
                  <GraduationCap size={11} className="flex-shrink-0 text-muted/60" />
                )}
                <span className="min-w-0 truncate">{it.org}</span>
              </div>
              {it.detail && (
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{it.detail}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-16 sm:py-24 overflow-hidden">
      {/* Background blob */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-purple-500/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Timeline" title="Experience & education" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2"
            >
              <Briefcase size={13} className="text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Experience</h3>
            </motion.div>
            <Timeline items={experience} isExperience />
          </div>

          {/* Education + Certs */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2"
            >
              <GraduationCap size={13} className="text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
            </motion.div>
            <Timeline items={education} />

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-5 mt-12 flex items-center gap-2"
            >
              <Award size={13} className="text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Certifications
              </h3>
            </motion.div>

            <motion.ul
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {certifications.map((c, idx) => (
                <motion.li
                  key={c.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ x: 4, borderColor: "#4fd1c5" }}
                  className="group flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-line bg-surface/40 px-4 py-3 text-sm transition-all duration-200 hover:bg-surface"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-signal/10">
                      <Award size={11} className="text-signal" />
                    </div>
                    <span className="min-w-0 truncate text-ink group-hover:text-signal transition-colors">
                      {c.name}
                    </span>
                  </div>
                  <motion.span
                    className="flex-shrink-0 font-mono text-xs text-muted"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    {c.org} · {c.year}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
