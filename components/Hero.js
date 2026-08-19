"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Zap, Download } from "lucide-react";
import { profile, status } from "@/lib/data";
import ParticleField from "./ParticleField";
import StatusBadge from "./StatusBadge";
import MagneticButton from "./MagneticButton";
import TypewriterRole from "./TypewriterRole";
import FloatingCodeOrb from "./FloatingCodeOrb";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const techBadges = ["React 19", "Next.js 16", "WebSocket", "Tailwind CSS", "TypeScript"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Particle constellation backdrop */}
      <ParticleField />

      {/* Gradient mesh blobs — pointer-events-none prevents overflow scroll */}
      <div className="pointer-events-none absolute -top-40 -left-20 h-72 w-72 rounded-full bg-signal/10 blur-[100px] opacity-30 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-72 w-72 rounded-full bg-signalDim/10 blur-[100px] opacity-25 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[80px] sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          {/* Left: Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full min-w-0"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <StatusBadge label={status.role} />
            </motion.div>

            {/* Typewriter role line */}
            <motion.div
              variants={item}
              className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:text-sm sm:tracking-[0.2em]"
            >
              I am a{" "}
              <TypewriterRole />
            </motion.div>

            {/* Headline — smaller on mobile */}
            <motion.h1
              variants={titleVariants}
              className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="bg-gradient-to-r from-ink via-ink/90 to-signal bg-clip-text text-transparent">
                Building interfaces
              </span>{" "}
              <span className="text-ink/80">that hold up when</span>{" "}
              <span
                className="bg-gradient-to-r from-signal via-signalDim to-signal bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "shimmerText 3s linear infinite",
                }}
              >
                data won&apos;t stop moving.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Tech badges */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {techBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.08, borderColor: "#4fd1c5" }}
                  className="rounded-full border border-line bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] text-muted backdrop-blur-sm transition-colors hover:text-signal sm:px-3 sm:py-1 sm:text-[11px]"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons — stack on mobile, row on sm+ */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <MagneticButton
                href="#work"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-base shadow-[0_0_20px_rgba(79,209,197,0.25)] transition-shadow hover:shadow-[0_0_35px_rgba(79,209,197,0.45)] sm:px-7 sm:py-3.5"
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <span className="relative flex items-center gap-2">
                  <Zap size={15} className="group-hover:animate-pulse" />
                  View Work
                </span>
              </MagneticButton>

              <div className="flex gap-3 sm:gap-4">
                <MagneticButton
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink transition-all hover:border-signal hover:text-signal hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] sm:flex-none sm:px-7 sm:py-3.5"
                >
                  <Download size={14} />
                  Resume
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="flex flex-1 items-center justify-center rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-[0.1em] text-muted transition-all hover:border-signal/50 hover:text-signal sm:flex-none sm:px-7 sm:py-3.5"
                >
                  Contact
                </MagneticButton>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.25, color: "#4fd1c5" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted transition-colors"
                >
                  <social.icon size={19} />
                </motion.a>
              ))}
              <span className="h-4 w-px bg-line" />
              <motion.span
                className="font-mono text-xs text-muted"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {profile.location}
              </motion.span>
              {/* Live availability dot */}
              <span className="flex items-center gap-1.5 font-mono text-xs text-signal">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Available
              </span>
            </motion.div>
          </motion.div>

          {/* Right: 3D Code Orb — desktop only */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <FloatingCodeOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-muted transition-colors hover:text-signal"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
