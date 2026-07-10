"use client";

import { motion } from "framer-motion";
import { projects, personalProjects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCase from "./ProjectCase";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Case studies"
          description="Two production platforms I've built the frontend for at Gigalabs — click a card to open the full breakdown."
        />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCase key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Personal projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {personalProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-line bg-surface/40 p-6 transition-colors hover:border-signalDim"
              >
                <h4 className="font-display text-lg font-semibold text-ink">{p.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
