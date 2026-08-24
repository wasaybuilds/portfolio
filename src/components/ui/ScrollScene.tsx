"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * Scroll-story primitives.
 *
 * Everything here is progressive enhancement: each component renders its
 * content in its final, readable state and only *adds* scroll-linked motion on
 * top. If JavaScript never runs, or the visitor has "reduce motion" enabled,
 * the page still reads as a complete document. That matters here — a large
 * share of the audience opens this on a phone, and recruiters' link previewers
 * do not run JS at all.
 */

/* -------------------------------------------------------------------------- */
/*  Chapter rail — the pinned spine of a section                               */
/* -------------------------------------------------------------------------- */

/**
 * ChapterRail pins the chapter number + label to the left of a section while
 * the section's content scrolls past it, and draws a rule that fills in step
 * with scroll progress through that section.
 *
 * Pinning is desktop-only (`lg:sticky`). On narrow screens the rail collapses
 * into a normal horizontal heading row, because a pinned sidebar on a 390px
 * viewport just eats the content column.
 */
export function ChapterRail({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-[10rem_1fr] lg:gap-12">
      {/* Pinned spine */}
      <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit">
        <div className="flex items-center gap-4 lg:block">
          <div className="font-display text-4xl font-bold leading-none tracking-[-0.08em] text-foreground/10 sm:text-6xl">
            {index}
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent lg:mt-3">
            {label}
          </div>
        </div>

        {/* Scroll-linked progress rule — horizontal on mobile, vertical on desktop */}
        <div className="mt-4 h-px w-full overflow-hidden bg-border lg:mt-6 lg:h-40 lg:w-px">
          <motion.div
            className="h-px w-full origin-left bg-accent lg:h-full lg:w-px lg:origin-top"
            style={
              reduced
                ? { scaleX: 1, scaleY: 1 }
                : { scaleX: fill, scaleY: fill }
            }
          />
        </div>
      </div>

      <div className="min-w-0">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll-driven text                                                         */
/* -------------------------------------------------------------------------- */

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

/**
 * ScrollText dims a line of type and lights it up word by word as the reader
 * scrolls through it — the "reading" effect. Falls back to fully-lit static
 * text with reduced motion.
 */
export function ScrollText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });

  const words = children.split(" ");

  if (reduced) {
    return <p className={className}>{children}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <span key={`${word}-${i}`}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card stack — the "sections stack on top of each other" effect              */
/* -------------------------------------------------------------------------- */

/**
 * StackItem pins a card near the top of the viewport and shrinks it slightly as
 * the following card rides up and covers it, so a list of projects reads as a
 * deck being dealt rather than a wall of scrolling boxes.
 *
 * `index` offsets each card's resting position by a few pixels so the stacked
 * edges stay visible behind the topmost card.
 *
 * Stacking is disabled below `lg` and under reduced motion, where the cards
 * simply flow one after another.
 */
export function StackItem({
  index,
  total,
  children,
}: {
  index: number;
  total: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 15%", "end 45%"],
  });

  /* Last card never shrinks — nothing comes to cover it. */
  const isLast = index === total - 1;
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast || reduced ? 1 : 0.94]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isLast || reduced ? 1 : 0.55]
  );

  return (
    <div
      ref={ref}
      className="lg:sticky"
      style={{ top: `calc(6rem + ${index * 14}px)` }}
    >
      <motion.div
        style={reduced ? undefined : { scale, opacity }}
        className="origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Parallax                                                                   */
/* -------------------------------------------------------------------------- */

/** Drifts its children against the scroll direction by `distance` pixels. */
export function Parallax({
  children,
  distance = 60,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pointer-reactive surfaces                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Spotlight tracks the pointer across a card and lifts a soft accent wash under
 * it, so a card responds continuously to the cursor instead of snapping between
 * two hover states. The wash is a pseudo-free radial gradient painted in an
 * overlay layer, and it is inert on touch devices (no pointer to track) and
 * under reduced motion.
 */
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, var(--accent-glow), transparent 70%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div
      className={`group/spot relative ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => opacity.set(1)}
      onMouseLeave={() => opacity.set(0)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ background, opacity }}
      />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll-driven media                                                        */
/* -------------------------------------------------------------------------- */

/**
 * RevealMedia wipes its child open with a clip-path as it enters, then keeps
 * drifting it slowly against the scroll for the whole time it is on screen —
 * so a screenshot reads as a live surface rather than a static block that
 * animated once and stopped.
 */
export function RevealMedia({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Slow counter-drift: the image sits at 112% height and slides within it. */
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div style={{ y }} className="h-[112%] w-full">
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rules                                                                      */
/* -------------------------------------------------------------------------- */

/** A hairline that draws itself left-to-right as it enters the viewport. */
export function DrawRule({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={`h-px w-full overflow-hidden bg-border/40 ${className}`}>
      <motion.div
        className="h-px w-full origin-left bg-border"
        initial={reduced ? undefined : { scaleX: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
