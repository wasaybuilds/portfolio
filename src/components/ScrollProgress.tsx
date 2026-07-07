"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin orange progress bar pinned to the very top of the viewport.
 * Grows from left to right as the user scrolls the page.
 * Uses a spring so it feels slightly elastic — not mechanical.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
