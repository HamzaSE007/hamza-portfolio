"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", href, onClick, target, rel, strength = 0.4 }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.1s linear";
  }, []);

  const props = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    className,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...props} whileTap={{ scale: 0.95 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...props} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
  );
}
