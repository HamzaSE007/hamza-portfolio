"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * TiltCard — wraps any content with a real-time CSS 3D perspective tilt
 * based on mouse position. Zero dependencies beyond Framer Motion.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.02,
  glare = true,
}) {
  const ref = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`;

      if (glare && glareRef.current) {
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
        glareRef.current.style.transform = `rotate(${angle}deg)`;
        glareRef.current.style.opacity = "0.15";
      }
    },
    [maxTilt, scale, glare]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  }, [glare]);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.1s linear";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`relative ${className}`}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-inherit opacity-0 transition-opacity duration-300"
          style={{ borderRadius: "inherit" }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "linear-gradient(105deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 60%)",
              transformOrigin: "center",
            }}
          />
        </div>
      )}
    </div>
  );
}
