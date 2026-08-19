"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function Timeline({ items }) {
  return (
    <div className="relative space-y-10 border-l border-line pl-8">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative"
        >
          {/* Animated timeline dot */}
          <motion.span
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-base"
            whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(79, 209, 197, 0.6)" }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated line connector on hover */}
          <motion.div
            className="absolute -left-[calc(2rem+5px)] top-6 h-8 w-0.5 origin-top bg-gradient-to-b from-signal to-transparent opacity-0 group-hover:opacity-100"
            animate={{ height: ["0px", "32px", "0px"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <div className="rounded-lg border border-line bg-surface/40 p-4 transition-all duration-300 group-hover:border-signal group-hover:bg-surface/60">
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-signal">{it.period}</div>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink group-hover:text-signal">
              {it.title}
            </h3>
            <div className="mt-0.5 text-sm text-muted">{it.org}</div>
            {it.detail && (
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{it.detail}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Timeline" title="Experience & education" />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-muted"
            >
              Experience
            </motion.h3>
            <Timeline items={experience} />
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-muted"
            >
              Education
            </motion.h3>
            <Timeline items={education} />

            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.15em] text-muted"
            >
              Certifications
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {certifications.map((c, idx) => (
                <motion.li
                  key={c.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  whileHover={{
                    x: 4,
                    borderColor: "#4fd1c5",
                  }}
                  className="group flex items-center justify-between overflow-hidden rounded-md border border-line bg-surface/40 px-4 py-3 text-sm transition-all duration-300 hover:bg-surface"
                >
                  <motion.span
                    className="relative text-ink group-hover:text-signal"
                    transition={{ duration: 0.2 }}
                  >
                    {c.name}
                  </motion.span>
                  <motion.span
                    className="font-mono text-xs text-muted"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
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
