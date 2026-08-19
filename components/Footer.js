"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/5 to-signal/0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted sm:flex-row">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </motion.span>

        <motion.span
          className="inline-flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-signal"
            animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 5px rgba(79, 209, 197, 0.5)", "0 0 15px rgba(79, 209, 197, 0.8)", "0 0 5px rgba(79, 209, 197, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            status: online
          </motion.span>
        </motion.span>
      </div>
    </footer>
  );
}
