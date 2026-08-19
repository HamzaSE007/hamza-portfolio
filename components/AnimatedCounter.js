"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * AnimatedCounter — triggers a number count-up when scrolled into view.
 * @param {number} end - The final number to count to
 * @param {string} suffix - Optional suffix (e.g. "+", "k")
 * @param {string} prefix - Optional prefix
 * @param {number} duration - Animation duration in seconds
 */
export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2, decimals = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  );
}
