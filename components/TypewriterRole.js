"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypewriterRole() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        2000,
        "React / Next.js Engineer",
        2000,
        "Real-time UI Specialist",
        2000,
        "WebSocket Interface Builder",
        2000,
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={70}
      repeat={Infinity}
      className="text-signal"
    />
  );
}
