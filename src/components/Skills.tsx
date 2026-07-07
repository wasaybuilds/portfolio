"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

/**
 * Stack section — inline-text layout with per-skill hover highlights.
 *
 * Each technology word is individually interactive: hovering it lights it
 * up in the accent colour and dims its siblings, creating a subtle spotlight
 * that rewards curiosity without requiring a click.
 */
export function Skills() {
  /**
   * Track which (category, item) the cursor is over.
   * `null` when nothing is hovered — all items at full opacity.
   */
  const [hovered, setHovered] = useState<{ cat: string; item: string } | null>(null);

  return (
    <section id="stack" className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stack
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        {/* ---------- Category rows ---------- */}
        <div className="flex flex-col divide-y divide-border">
          {skills.map((group, gIndex) => {
            const catHovered = hovered?.cat === group.category;

            return (
              <Reveal key={group.category} delay={gIndex * 0.06}>
                <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:gap-8 lg:gap-12">

                  {/* Category label */}
                  <span className="w-full shrink-0 font-display text-sm font-semibold text-accent sm:w-44 lg:w-52">
                    {group.category}
                  </span>

                  {/* Skills — individually hoverable */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {group.items.map((item, iIndex) => {
                      const isHighlighted = hovered === null || (catHovered && hovered.item === item);
                      const isDimmed = hovered !== null && !isHighlighted;

                      return (
                        <span key={item} className="flex items-center gap-3">
                          <motion.span
                            onMouseEnter={() => setHovered({ cat: group.category, item })}
                            onMouseLeave={() => setHovered(null)}
                            animate={{
                              color: isHighlighted
                                ? hovered?.item === item
                                  ? "var(--accent)"
                                  : "var(--foreground)"
                                : "var(--muted)",
                              opacity: isDimmed ? 0.35 : 1,
                            }}
                            transition={{ duration: 0.15 }}
                            className="cursor-default select-none text-sm text-muted sm:text-base"
                          >
                            {item}
                          </motion.span>
                          {/* Separator dot */}
                          {iIndex < group.items.length - 1 && (
                            <span className="opacity-20 select-none">·</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
