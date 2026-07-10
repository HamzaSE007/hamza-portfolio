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
          className="relative"
        >
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-base" />
          <div className="font-mono text-xs uppercase tracking-[0.1em] text-signal">{it.period}</div>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{it.title}</h3>
          <div className="mt-0.5 text-sm text-muted">{it.org}</div>
          {it.detail && <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{it.detail}</p>}
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
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-muted">Experience</h3>
            <Timeline items={experience} />
          </div>
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.15em] text-muted">Education</h3>
            <Timeline items={education} />

            <h3 className="mb-6 mt-14 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-md border border-line bg-surface/40 px-4 py-3 text-sm"
                >
                  <span className="text-ink">{c.name}</span>
                  <span className="font-mono text-xs text-muted">
                    {c.org} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
