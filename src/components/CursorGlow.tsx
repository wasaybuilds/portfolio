"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

/**
 * Full-screen overlay that renders a soft radial glow following the mouse cursor.
 * Uses spring physics so the glow lags slightly behind the cursor — giving it
 * a natural, organic feel rather than snapping rigidly to the pointer.
 * Hidden on touch devices (no hover intent).
 */
export function CursorGlow() {
  const rawX = useMotionValue(-1200);
  const rawY = useMotionValue(-1200);

  // Spring config: fairly responsive but with enough damping to look fluid
  const springConfig = { stiffness: 100, damping: 22, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  // Build the gradient string reactively — updates every animation frame
  const background = useMotionTemplate`radial-gradient(700px circle at ${x}px ${y}px, rgba(249, 115, 22, 0.09), transparent 75%)`;

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
