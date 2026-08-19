"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const groupLabels = {
  core: "Core",
  backend: "Backend",
  realtime: "Real-time",
  tooling: "Tooling",
};

const groupColors = {
  core: { accent: "#4FD1C5", bg: "from-signal/10", ring: "border-signal/30" },
  backend: { accent: "#2C7A73", bg: "from-signalDim/10", ring: "border-signalDim/30" },
  realtime: { accent: "#A78BFA", bg: "from-purple-500/10", ring: "border-purple-500/30" },
  tooling: { accent: "#60A5FA", bg: "from-blue-400/10", ring: "border-blue-400/30" },
};

// Simple skill icon — colored initial badge
function SkillIcon({ name, color }) {
  const initials = name
    .split(/[\s./+]/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-[9px] font-bold"
      style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
    >
      {initials}
    </span>
  );
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const grouped = skills.reduce((acc, s) => {
    acc[s.group] = acc[s.group] || [];
    acc[s.group].push(s);
    return acc;
  }, {});

  return (
    <section className="relative border-t border-line py-16 sm:py-24 overflow-hidden">
      {/* Animated gradient orb */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-signal/5 blur-[80px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Stack"
          title="What I build with"
          description="Weighted toward React/Next.js and the real-time layer — WebSockets, live form state, and keeping REST and sockets in sync."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {Object.entries(grouped).map(([group, items], gi) => {
            const colors = groupColors[group];
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.02}
                  className={`group h-full overflow-hidden rounded-xl border ${colors.ring} bg-surface/50 p-5 transition-all duration-300 hover:bg-surface`}
                >
                  {/* Gradient top accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.bg} to-transparent`}
                  />

                  {/* Group header */}
                  <div className="mb-5 flex items-center gap-2.5">
                    <motion.div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: gi * 0.3 }}
                    />
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: colors.accent }}
                    >
                      {groupLabels[group]}
                    </span>
                  </div>

                  {/* Skill list */}
                  <motion.ul
                    className="space-y-2"
                    variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {items.map((s) => (
                      <motion.li
                        key={s.name}
                        variants={{
                          hidden: { opacity: 0, x: -8 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        }}
                        onMouseEnter={() => setHoveredSkill(s.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill relative flex items-center gap-2.5 overflow-hidden rounded-lg border border-line bg-surface/30 px-3 py-2.5 text-sm text-ink transition-all duration-200 hover:border-signal/40 hover:bg-surface/80"
                      >
                        {/* Animated skill fill bar on hover */}
                        <motion.div
                          className="absolute inset-0 origin-left"
                          style={{ background: `linear-gradient(90deg, ${colors.accent}18, transparent)` }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: hoveredSkill === s.name ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        <SkillIcon name={s.name} color={colors.accent} />
                        <span className="relative z-10 text-sm">{s.name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
