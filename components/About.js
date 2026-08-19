"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import ProfileImage from "./ProfileImage";
import AnimatedCounter from "./AnimatedCounter";
import TiltCard from "./TiltCard";

const stats = [
  {
    value: 2,
    suffix: "",
    label: "Production platforms shipped",
    detail: "Live, paying-customer codebases at Gigalabs",
    color: "from-signal/20",
  },
  {
    value: 2,
    suffix: "",
    label: "Portals in one codebase",
    detail: "Contractor + Admin portals on Electric Avenue",
    color: "from-signalDim/20",
  },
  {
    value: 1,
    suffix: "",
    label: "Real-time WebSocket layer",
    detail: "Full STOMP/WebSocket integration on Sredible",
    color: "from-purple-500/20",
  },
  {
    value: 1,
    suffix: "+",
    label: "Year in production",
    detail: "Promoted intern → full-time Frontend Developer",
    color: "from-amber/20",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-16 sm:py-24 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,209,197,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,209,197,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-signal" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">About</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Frontend developer, keeping two{" "}
            <span className="bg-gradient-to-r from-signal to-signalDim bg-clip-text text-transparent">
              real-time platforms
            </span>{" "}
            honest.
          </h2>
          <p className="mt-5 max-w-2xl text-balance text-sm leading-relaxed text-muted sm:text-base">
            {profile.summary}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            I care about the seam between{" "}
            <span className="text-ink">&quot;the data changed&quot;</span> and{" "}
            <span className="text-ink">&quot;the screen agrees with it&quot;</span> — that&apos;s
            where most real-time UI breaks, and where I spend most of my time.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Profile Image with glow + availability badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-5 lg:items-start"
          >
            <TiltCard maxTilt={8} scale={1.02} glare className="w-full max-w-xs rounded-2xl sm:max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-3 shadow-[0_0_40px_rgba(79,209,197,0.08)]">
                <ProfileImage />
                {/* Available badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <motion.div
                    className="flex items-center gap-2 rounded-full border border-signal/30 bg-base/90 px-3 py-1.5 backdrop-blur-md"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span
                      className="h-2 w-2 flex-shrink-0 rounded-full bg-signal"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-mono text-[11px] text-signal">Open to opportunities</span>
                  </motion.div>
                </div>
              </div>
            </TiltCard>

            {/* Current company badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-line bg-surface/50 px-4 py-3 backdrop-blur-sm sm:max-w-sm"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-signal/10 font-mono text-xs font-bold text-signal">
                GL
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-ink">Gigalabs, Lahore</div>
                <div className="font-mono text-[11px] text-muted">Frontend Developer · 2025–Present</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid — 2 cols on mobile, 2 on all sizes */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="h-full">
                <TiltCard
                  maxTilt={10}
                  scale={1.03}
                  className="group relative h-full overflow-hidden rounded-xl border border-line bg-surface/60 p-4 transition-all duration-300 hover:border-signal hover:bg-surface sm:p-6"
                >
                  {/* Gradient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.color} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    {/* Animated counter */}
                    <div className="font-display text-3xl font-semibold text-signal sm:text-4xl lg:text-5xl">
                      <AnimatedCounter end={s.value} suffix={s.suffix} duration={2} />
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-ink sm:text-sm">{s.label}</div>
                    <div className="mt-1 font-mono text-[10px] leading-relaxed text-muted sm:text-[11px]">
                      {s.detail}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
