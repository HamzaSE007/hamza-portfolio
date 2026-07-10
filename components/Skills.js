"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const groupLabels = {
  core: "Core",
  backend: "Backend",
  realtime: "Real-time",
  tooling: "Tooling",
};

export default function Skills() {
  const grouped = skills.reduce((acc, s) => {
    acc[s.group] = acc[s.group] || [];
    acc[s.group].push(s);
    return acc;
  }, {});

  return (
    <section className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="What I build with"
          description="Weighted toward React/Next.js and the real-time layer — WebSockets, live form state, and keeping REST and sockets in sync."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(grouped).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-signal">
                {groupLabels[group]}
              </div>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li
                    key={s.name}
                    className="rounded-md border border-line bg-surface/40 px-3 py-2 text-sm text-ink transition-colors hover:border-signalDim hover:bg-surface"
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
