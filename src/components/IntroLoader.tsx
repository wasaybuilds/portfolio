"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Opening story beat with a dry wink before the name lands.
 * Passion first — humour keeps it human, not résumé-robot.
 */
const INTRO_WORDS = [
  "Passionate",
  "Obsessed",
  "Relentless",
  "Caffeinated",
  "Builder",
];

/**
 * Hold long enough that enter (0.85s) finishes and the word stays sharp
 * for ~1.25s before the next crossfade begins.
 */
const WORD_MS = 2100;

/** How long the name mark holds before the curtain lifts. */
const NAME_MS = 2000;

type IntroPhase = "boot" | "words" | "name" | "exit" | "done";

/* Default false so consumers outside the provider never assume the reveal already ran. */
const IntroContext = createContext(false);

/**
 * Whether the intro curtain has started lifting.
 * Hero entrance animations wait on this so they reveal *under* the curtain,
 * not while it is still covering the screen.
 */
export function useIntroDone(): boolean {
  return useContext(IntroContext);
}

/**
 * Wraps the page with the intro overlay + completion context.
 * Children stay server-rendered — this only layers a client overlay on top.
 * While the curtain is up, page content is inert so nav/links can't steal focus.
 */
export function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <IntroContext.Provider value={done}>
      <IntroLoader onReveal={() => setDone(true)} />
      <div inert={done ? undefined : true}>{children}</div>
    </IntroContext.Provider>
  );
}

/**
 * Shared motion for each word. The old and new words overlap during their
 * crossfade so the sequence flows continuously without a blank frame.
 */
const wordVariants = {
  initial: { y: 36, scale: 0.96, opacity: 0, filter: "blur(14px)" },
  animate: { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
  exit: { y: -36, scale: 1.02, opacity: 0, filter: "blur(14px)" },
};

/**
 * IntroLoader — a slow, skippable opening sequence (≈13s, click/Esc to skip):
 * passion story words → name mark → curtain lifts.
 *
 * - plays on every full page load so the sequence is part of the experience
 * - respects prefers-reduced-motion (skipped entirely)
 * - click, Enter, Space, or Escape to skip
 */
function IntroLoader({ onReveal }: { onReveal: () => void }) {
  const [phase, setPhase] = useState<IntroPhase>("boot");
  const [wordIndex, setWordIndex] = useState(0);

  /* Reduced-motion visitors bypass the sequence without seeing a flash. */
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /*
     * Schedule the first transition after mount so the boot curtain paints
     * before its first animated frame.
     */
    const timer = window.setTimeout(() => {
      if (reducedMotion) {
        onReveal();
        setPhase("done");
        return;
      }

      setPhase("words");
    }, 0);

    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Advance through the personality words, then hand off to the name mark. */
  useEffect(() => {
    if (phase !== "words") return;

    const timer = setTimeout(() => {
      if (wordIndex < INTRO_WORDS.length - 1) {
        setWordIndex((i) => i + 1);
      } else {
        setPhase("name");
      }
    }, WORD_MS);

    return () => clearTimeout(timer);
  }, [phase, wordIndex]);

  /* Hold the name, then lift the curtain. */
  useEffect(() => {
    if (phase !== "name") return;
    const timer = setTimeout(() => setPhase("exit"), NAME_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  /* Signal the hero the moment the curtain starts lifting. */
  useEffect(() => {
    if (phase === "exit") onReveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  /* Lock page scroll while the overlay covers the viewport. */
  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  /* Escape works even when focus isn't on the overlay. */
  useEffect(() => {
    if (phase !== "words" && phase !== "name") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setPhase("exit");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase]);

  if (phase === "done" || phase === "boot") {
    /* boot renders the plain curtain (no text) to avoid a hydration flash. */
    if (phase === "done") return null;
    return <div className="intro-curtain fixed inset-0 z-100 bg-background" aria-hidden />;
  }

  const skip = () => {
    if (phase === "words" || phase === "name") setPhase("exit");
  };

  const word = INTRO_WORDS[wordIndex];

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Skip intro animation"
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 1.15, ease: EASE }}
      onAnimationComplete={() => {
        if (phase === "exit") setPhase("done");
      }}
      onClick={skip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          skip();
        }
      }}
      className="intro-curtain fixed inset-0 z-100 flex cursor-pointer flex-col items-center justify-center bg-background outline-none"
    >
      {/* Step counter — quiet, editorial, keeps the eye anchored */}
      <span
        aria-hidden
        className="mb-6 text-[10px] uppercase tracking-[0.35em] text-muted/50 tabular-nums"
      >
        {phase === "words"
          ? `0${wordIndex + 1} / 0${INTRO_WORDS.length + 1}`
          : `0${INTRO_WORDS.length + 1} / 0${INTRO_WORDS.length + 1}`}
      </span>

      {/* Word stage — overlapping blur crossfades lead into the name reveal */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="relative flex min-h-24 w-full items-center justify-center px-5 sm:min-h-36"
      >
        <AnimatePresence>
          {phase === "words" ? (
            <motion.span
              key={word}
              variants={wordVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.85, ease: EASE }}
              className="absolute font-serif text-6xl tracking-tight whitespace-nowrap text-foreground sm:text-9xl"
            >
              {word}
              <em className="text-accent not-italic">.</em>
            </motion.span>
          ) : (
            <motion.span
              key="name"
              variants={wordVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: EASE }}
              className="absolute font-serif text-5xl tracking-tight whitespace-nowrap text-foreground sm:text-8xl"
            >
              {profile.name}
              <em className="text-accent not-italic">.</em>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar — eases forward with each word, completes on the name */}
      <div
        aria-hidden
        className="mt-10 h-px w-44 overflow-hidden bg-border sm:w-64"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX:
              phase === "words"
                ? (wordIndex + 1) / (INTRO_WORDS.length + 1)
                : 1,
          }}
          transition={{ duration: 1.1, ease: EASE }}
          className="h-full w-full origin-left bg-accent"
        />
      </div>

      <span className="absolute bottom-8 text-[10px] uppercase tracking-[0.25em] text-muted/60">
        Click or Esc — I won&apos;t take it personally
      </span>
    </motion.div>
  );
}
