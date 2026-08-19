"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * FloatingCodeOrb — A pseudo-3D rotating tech orb for the Hero section.
 * Built with pure CSS/SVG — no Three.js required.
 * Orbiting tech keywords rotate around a glowing central core.
 */
const TECH_TAGS = [
  { label: "React", angle: 0, radius: 110, size: "text-xs" },
  { label: "Next.js", angle: 60, radius: 120, size: "text-[11px]" },
  { label: "WebSocket", angle: 120, radius: 105, size: "text-[10px]" },
  { label: "TypeScript", angle: 180, radius: 115, size: "text-[10px]" },
  { label: "Tailwind", angle: 240, radius: 110, size: "text-[11px]" },
  { label: "Framer", angle: 300, radius: 108, size: "text-[10px]" },
];

function OrbRing({ radiusX, radiusY, duration, reverse = false, strokeOpacity = 0.15 }) {
  return (
    <ellipse
      cx="150"
      cy="150"
      rx={radiusX}
      ry={radiusY}
      fill="none"
      stroke="#4fd1c5"
      strokeWidth="0.8"
      strokeOpacity={strokeOpacity}
      strokeDasharray="4 6"
      style={{
        animation: `orbSpin ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
        transformOrigin: "150px 150px",
      }}
    />
  );
}

export default function FloatingCodeOrb() {
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: 300, height: 300 }}>
      {/* CSS animation for the rings */}
      <style>{`
        @keyframes orbSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes tagFloat {
          0%, 100% { opacity: 0.7; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>

      {/* Floating wrapper */}
      <div style={{ animation: "orbFloat 4s ease-in-out infinite" }}>
        {/* SVG Rings */}
        <svg
          viewBox="0 0 300 300"
          width="300"
          height="300"
          className="absolute inset-0"
          style={{ pointerEvents: "none" }}
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4fd1c5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4fd1c5" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Glow backdrop */}
          <circle cx="150" cy="150" r="90" fill="url(#coreGlow)" />
          {/* Orbital rings */}
          <OrbRing radiusX={120} radiusY={40} duration={12} strokeOpacity={0.2} />
          <OrbRing radiusX={100} radiusY={30} duration={16} reverse strokeOpacity={0.15} />
          <OrbRing radiusX={80} radiusY={25} duration={20} strokeOpacity={0.1} />
          {/* Equator ring */}
          <ellipse
            cx="150"
            cy="150"
            rx={110}
            ry={110}
            fill="none"
            stroke="#4fd1c5"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </svg>

        {/* Core sphere */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #2C7A73, #0a0d10)",
            border: "1px solid rgba(79,209,197,0.4)",
            boxShadow: "0 0 30px rgba(79,209,197,0.25), 0 0 60px rgba(79,209,197,0.1), inset 0 0 20px rgba(79,209,197,0.1)",
          }}
        >
          {/* Inner highlight */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "20%",
              width: "30%",
              height: "20%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              filter: "blur(4px)",
            }}
          />
          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: 10,
              color: "rgba(79,209,197,0.8)",
              letterSpacing: 1,
            }}
          >
            &lt;/&gt;
          </div>
        </div>

        {/* Orbiting tech tags */}
        {TECH_TAGS.map(({ label, angle, radius, size }, i) => {
          const rad = (angle * Math.PI) / 180;
          // Flatten y for perspective illusion
          const x = 150 + Math.cos(rad) * radius;
          const y = 150 + Math.sin(rad) * radius * 0.38;
          return (
            <div
              key={label}
              className={`absolute font-mono font-medium text-signal/80 ${size}`}
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                animation: `tagFloat ${3 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                textShadow: "0 0 8px rgba(79,209,197,0.5)",
                background: "rgba(10,13,16,0.7)",
                backdropFilter: "blur(4px)",
                padding: "2px 6px",
                borderRadius: 4,
                border: "1px solid rgba(79,209,197,0.2)",
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
