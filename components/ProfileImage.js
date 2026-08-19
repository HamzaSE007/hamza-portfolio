"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-80 w-80"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-signal via-transparent to-signal opacity-0"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-signal via-transparent to-signalDim bg-clip-border"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Image container */}
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-1"
        whileHover={{ borderColor: "#4fd1c5" }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/hamza's_pic.jpeg"
          alt="Muhammad Hamza"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-signal/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-signal/30 bg-signal/5"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border border-signalDim/30 bg-signalDim/5"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
}
