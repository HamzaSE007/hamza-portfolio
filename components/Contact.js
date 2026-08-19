"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function Contact() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="contact" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-10 sm:p-16"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-signal/5 via-transparent to-signal/5 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.6 }}
          />

          {/* Floating elements */}
          <motion.div
            className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-signal/10 blur-3xl opacity-0 group-hover:opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div variants={itemVariants}>
              <StatusBadge label="Open to select opportunities" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-2xl bg-gradient-to-r from-ink to-signal bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent sm:text-5xl"
            >
              Have something real-time to build? Let's talk.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-lg leading-relaxed text-muted"
            >
              Whether it's a live dashboard, a multi-portal platform, or a Next.js frontend that
              needs to talk to a tricky backend — I'd like to hear about it.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.a
                href={`mailto:${profile.email}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn inline-flex items-center gap-2 overflow-hidden rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-base transition-all"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail size={16} />
                </motion.span>
                {profile.email}
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-line pt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ x: 4, color: "#4fd1c5" }}
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={13} />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ x: 4, color: "#4fd1c5" }}
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors"
              >
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
              </motion.a>
              <motion.span
                variants={itemVariants}
                className="font-mono text-xs text-muted"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {profile.phone}
              </motion.span>
              <motion.span variants={itemVariants} className="font-mono text-xs text-muted">
                {profile.location}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
