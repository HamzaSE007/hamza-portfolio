"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import StatusBadge from "./StatusBadge";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-line bg-surface/50 p-10 sm:p-16"
        >
          <StatusBadge label="Open to select opportunities" />
          <h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Have something real-time to build? Let's talk.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            Whether it's a live dashboard, a multi-portal platform, or a Next.js frontend that
            needs to talk to a tricky backend — I'd like to hear about it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-base transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-line pt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-signal"
            >
              <Github size={16} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-signal"
            >
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <span className="font-mono text-xs text-muted">{profile.phone}</span>
            <span className="font-mono text-xs text-muted">{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
