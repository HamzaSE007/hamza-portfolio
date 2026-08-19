"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Zap } from "lucide-react";
import { profile, status } from "@/lib/data";
import CircuitBackdrop from "./CircuitBackdrop";
import StatusBadge from "./StatusBadge";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <CircuitBackdrop />

      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-signal/10 blur-3xl opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-5 h-80 w-80 rounded-full bg-signalDim/10 blur-3xl opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        <motion.div variants={item}>
          <StatusBadge label={status.role} />
        </motion.div>

        <motion.h1
          variants={titleVariants}
          className="mt-8 max-w-4xl bg-gradient-to-r from-ink via-ink to-signal bg-clip-text font-display text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          Building interfaces that hold up when the data won't stop moving.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-base transition-all"
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative flex items-center gap-2">
              <Zap size={16} className="group-hover:animate-pulse" />
              View Work
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md border border-line px-6 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink transition-all hover:border-signal hover:text-signal hover:shadow-[0_0_20px_rgba(79,209,197,0.3)]"
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex flex-wrap items-center gap-5">
          {[
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              whileHover={{ scale: 1.2, color: "#4fd1c5" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted transition-colors"
            >
              <social.icon size={20} />
            </motion.a>
          ))}

          <span className="h-4 w-px bg-line" />
          <motion.span
            className="font-mono text-xs text-muted"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {profile.location}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with smooth animation */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-signal"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
