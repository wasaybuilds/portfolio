"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ChapterRail,
  DrawRule,
  ScrollText,
} from "@/components/ui/ScrollScene";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Chapter is the single layout used by every section below the hero.
 *
 * It gives the page one consistent reading rhythm: a rule that draws itself
 * across the top, a pinned chapter number and label that stay with you for the
 * length of the section, a headline whose words rise out of a mask one after
 * another, and a description that lights word by word as you read it.
 *
 * Sections supply only their content — never their own heading chrome — so the
 * rhythm can't drift between sections.
 */
export function Chapter({
  id,
  index,
  label,
  title,
  description,
  meta,
  children,
}: {
  id?: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <DrawRule className="mb-10 sm:mb-14" />

        <ChapterRail index={index} label={label}>
          <header className="mb-10 sm:mb-14">
            {meta ? (
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <div className="shrink-0 text-xs text-muted">{meta}</div>
              </div>
            ) : null}

            <MaskedHeadline text={title} />

            {description ? (
              <ScrollText className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </ScrollText>
            ) : null}
          </header>

          {children}
        </ChapterRail>
      </div>
    </section>
  );
}

/**
 * Each word gets its own clipping wrapper so the headline assembles itself
 * word by word instead of arriving as one block. `align-bottom` on the wrapper
 * keeps descenders from being clipped by `overflow-hidden`.
 */
function MaskedHeadline({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tighter text-foreground sm:text-5xl">
        {text}
      </h2>
    );
  }

  return (
    <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tighter text-foreground sm:text-5xl">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.12em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
