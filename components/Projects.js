"use client";

import { motion } from "framer-motion";
import { personalProjects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCase from "./ProjectCase";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";
import { Code2, Globe } from "lucide-react";

const projectIcons = {
  "Responsive eCommerce Website": Globe,
  "Weather App": Code2,
};

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-line py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-signalDim/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
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

        {/* Personal projects */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-6 bg-muted/40" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Personal projects
            </h3>
            <span className="h-px flex-1 bg-muted/20" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {personalProjects.map((p, i) => {
              const Icon = projectIcons[p.name] || Code2;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TiltCard
                    maxTilt={10}
                    scale={1.02}
                    className="group h-full overflow-hidden rounded-xl border border-line bg-surface/40 p-6 transition-all duration-300 hover:border-signal/50 hover:bg-surface/60"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface2 transition-colors group-hover:border-signal/40">
                        <Icon size={18} className="text-signal/70" />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-ink group-hover:text-signal transition-colors">
                        {p.name}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-line bg-surface2 px-2 py-0.5 font-mono text-[10px] text-muted transition-colors group-hover:border-line/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
