"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-line bg-base/80 backdrop-blur-md shadow-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, idx) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <motion.a
                href={l.href}
                className="relative font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-signal"
                whileHover={{ scale: 1.1 }}
              >
                {l.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-signal origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, borderColor: "#4fd1c5" }}
          whileTap={{ scale: 0.95 }}
          className="rounded-md border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-all hover:text-signal hover:shadow-[0_0_15px_rgba(79,209,197,0.3)]"
        >
          Resume
        </motion.a>
      </nav>
    </motion.header>
  );
}
