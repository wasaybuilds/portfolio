"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

/**
 * Soft accent wash that follows the cursor on large screens.
 * Uses the active theme's --accent-glow so Classic/Ink/Editorial stay in sync.
 * Hidden on touch devices and kept subtle on light themes via CSS token opacity.
 */
export function CursorGlow() {
  const rawX = useMotionValue(-1200);
  const rawY = useMotionValue(-1200);

  const springConfig = { stiffness: 100, damping: 22, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const background = useMotionTemplate`radial-gradient(700px circle at ${x}px ${y}px, var(--accent-glow), transparent 75%)`;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-20 hidden lg:block"
      style={{ background }}
      aria-hidden
    />
  );
}
