"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";
import { X, Menu } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-base/85 backdrop-blur-md shadow-[0_1px_0_rgba(79,209,197,0.08)]"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm font-medium tracking-tight text-ink"
          >
            <motion.span
              className="text-signal"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &gt;
            </motion.span>{" "}
            {profile.name.split(" ")[1] || profile.name}
            <motion.span
              className="text-signal"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l, idx) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                >
                  <motion.a
                    href={l.href}
                    className={`relative font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                      isActive ? "text-signal" : "text-muted hover:text-signal"
                    }`}
                    whileHover={{ scale: 1.08 }}
                  >
                    {l.label}
                    {/* Active underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-signal origin-left"
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25 }}
                      style={{ width: "100%" }}
                    />
                  </motion.a>
                </motion.li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: "#4fd1c5" }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-md border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-all hover:text-signal hover:shadow-[0_0_15px_rgba(79,209,197,0.3)] md:block"
            >
              Resume
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-signal hover:text-signal md:hidden"
              onClick={() => setMobileOpen(true)}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-base/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 z-[70] flex h-full w-72 flex-col border-l border-line bg-surface shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Close button */}
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Menu</span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted hover:border-signal hover:text-signal"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-2 p-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-lg border border-line px-4 py-3 font-mono text-sm text-muted transition-all hover:border-signal hover:bg-surface2 hover:text-signal"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.08 }}
                  className="mt-2 rounded-lg border border-signal/40 bg-signal/10 px-4 py-3 text-center font-mono text-sm text-signal"
                >
                  Download Resume
                </motion.a>
              </nav>

              {/* Footer info */}
              <div className="border-t border-line p-6">
                <div className="font-mono text-xs text-muted">{profile.email}</div>
                <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-signal"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {profile.location}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
