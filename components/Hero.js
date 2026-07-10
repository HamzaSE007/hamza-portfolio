"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <CircuitBackdrop />
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
          variants={item}
          className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Building interfaces that hold up when the data won't stop moving.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-base transition-transform hover:scale-[1.03]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-6 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-signal"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-signal"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-signal"
          >
            <Mail size={20} />
          </a>
          <span className="h-4 w-px bg-line" />
          <span className="font-mono text-xs text-muted">{profile.location}</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-signal"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} className="animate-pulseSoft" />
      </motion.a>
    </section>
  );
}
