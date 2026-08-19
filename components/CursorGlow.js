"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer large glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(79,209,197,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Inner sharp dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          width: 8,
          height: 8,
          backgroundColor: "rgba(79,209,197,0.7)",
          boxShadow: "0 0 10px rgba(79,209,197,0.8)",
        }}
      />
    </>
  );
}
