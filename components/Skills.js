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

const groupColors = {
  core: "from-signal/20",
  backend: "from-signalDim/20",
  realtime: "from-purple-500/20",
  tooling: "from-blue-500/20",
};

export default function Skills() {
  const grouped = skills.reduce((acc, s) => {
    acc[s.group] = acc[s.group] || [];
    acc[s.group].push(s);
    return acc;
  }, {});

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

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
              <motion.div className="group">
                <div className="mb-4 flex items-center gap-2">
                  <motion.div
                    className={`h-2 w-2 rounded-full bg-signal`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: gi * 0.2 }}
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-signal">
                    {groupLabels[group]}
                  </span>
                </div>
                <motion.ul
                  className="space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {items.map((s) => (
                    <motion.li
                      key={s.name}
                      variants={itemVariants}
                      whileHover={{
                        x: 4,
                        backgroundColor: "var(--color-surface)",
                        borderColor: "#4fd1c5",
                      }}
                      className="relative overflow-hidden rounded-md border border-line bg-surface/40 px-3 py-2 text-sm text-ink transition-all duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/10 to-signal/0 opacity-0 group-hover:opacity-100"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                      <span className="relative">{s.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
