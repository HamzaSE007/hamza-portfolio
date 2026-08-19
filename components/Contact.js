"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "./MagneticButton";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function Contact() {
  const now = new Date();
  const pstHour = (now.getUTCHours() + 5) % 24;
  const isWorkingHours = pstHour >= 9 && pstHour < 18;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="relative border-t border-line py-16 sm:py-24 overflow-hidden">
      {/* Background orbs — pointer-events-none so they don't cause scroll */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-signal/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-signalDim/5 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-line bg-surface/50 backdrop-blur-sm"
        >
          {/* Top gradient line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-signal/5 via-transparent to-signal/5 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.6 }}
          />

          <div className="relative z-10 grid lg:grid-cols-[1fr_1px_340px]">
            {/* Left: CTA text */}
            <div className="p-6 sm:p-10 lg:p-14">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-3 py-1.5"
              >
                <motion.span
                  className="h-2 w-2 flex-shrink-0 rounded-full bg-signal"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-mono text-xs text-signal">Open to select opportunities</span>
              </motion.div>

              {/* Heading — tighter sizing on mobile */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="bg-gradient-to-r from-ink via-ink/90 to-signal bg-clip-text font-display text-2xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
              >
                Have something real-time to build?{" "}
                <span className="text-signal">Let&apos;s talk.</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base"
              >
                Whether it&apos;s a live dashboard, a multi-portal platform, or a Next.js frontend
                that needs to talk to a tricky backend — I&apos;d like to hear about it.
              </motion.p>

              {/* Primary CTA — responsive email display */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <MagneticButton
                  href={`mailto:${profile.email}`}
                  className="group/btn inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-signal px-6 py-4 font-mono text-sm font-medium uppercase tracking-[0.08em] text-base shadow-[0_0_25px_rgba(79,209,197,0.3)] transition-shadow hover:shadow-[0_0_45px_rgba(79,209,197,0.5)] sm:w-auto sm:tracking-[0.1em]"
                >
                  <motion.span
                    className="flex-shrink-0"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Mail size={16} />
                  </motion.span>
                  {/* Show short label on mobile, full email on larger screens */}
                  <span className="sm:hidden">Send Me an Email</span>
                  <span className="hidden truncate sm:inline">{profile.email}</span>
                  <ArrowUpRight size={14} className="flex-shrink-0 opacity-60" />
                </MagneticButton>
              </motion.div>

              {/* Social links row */}
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { href: profile.github, icon: Github, label: "GitHub" },
                  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 4, color: "#4fd1c5" }}
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-signal"
                  >
                    <s.icon size={15} />
                    {s.label}
                    <ArrowUpRight size={12} />
                  </motion.a>
                ))}
                <motion.span
                  variants={itemVariants}
                  className="flex items-center gap-1.5 font-mono text-xs text-muted"
                >
                  <Phone size={12} className="flex-shrink-0" />
                  {profile.phone}
                </motion.span>
              </motion.div>
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block" style={{ width: 1, background: "#232A32" }} />

            {/* Right: Info panel */}
            <motion.div
              className="flex flex-col gap-5 border-t border-line p-6 sm:p-10 lg:border-t-0 lg:p-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-line bg-surface2">
                  <MapPin size={15} className="text-signal" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Location</div>
                  <div className="mt-0.5 text-sm text-ink">{profile.location}</div>
                  <div className="font-mono text-[11px] text-muted">Pakistan Standard Time (UTC+5)</div>
                </div>
              </motion.div>

              {/* Working hours status */}
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-line bg-surface2">
                  <Clock size={15} className="text-signal" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Availability</div>
                  <div className="mt-0.5 flex items-center gap-2 text-sm">
                    <motion.span
                      className="h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: isWorkingHours ? "#4fd1c5" : "#7C8894" }}
                      animate={isWorkingHours ? { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className={isWorkingHours ? "text-signal" : "text-muted"}>
                      {isWorkingHours ? "Online now" : "Outside working hours"}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Availability calendar */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-line bg-surface2/50 p-4"
              >
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Working days
                </div>
                <div className="flex gap-1 sm:gap-1.5">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
                    const isWork = days.includes(day);
                    return (
                      <div key={day} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className={`h-7 w-full rounded-md ${
                            isWork
                              ? "border border-signal/30 bg-signal/10"
                              : "border border-line bg-surface/30"
                          }`}
                        />
                        <span
                          className={`font-mono text-[8px] sm:text-[9px] ${
                            isWork ? "text-signal" : "text-muted/40"
                          }`}
                        >
                          {day[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 font-mono text-[10px] text-muted">9:00 AM – 6:00 PM PST</div>
              </motion.div>

              {/* Response time */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl border border-line bg-surface2/50 px-4 py-3 font-mono text-[11px] text-muted"
              >
                <span className="text-signal">⚡ Avg. response:</span> Within 24 hours
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
