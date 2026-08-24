"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useIntroDone } from "@/components/IntroLoader";
import { profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const TICKER_ITEMS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "AWS", "PostgreSQL", "NestJS", "Linux", "CI/CD",
];

/** Story anchors — where the scroll goes next, not a second metrics block. */
const STORY_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  /*
   * Entrance animations hold until the intro curtain starts lifting, so the
   * name reveal happens *as* the curtain exposes it — not hidden behind it.
   */
  const introDone = useIntroDone();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  /*
   * Scroll-linked exit: the hero recedes as the first chapter rises over it,
   * so the handoff into Work reads as one movement instead of two sections
   * meeting at a hard edge.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-dvh flex-col overflow-hidden px-5 pb-5 pt-20 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-28"
    >
      <motion.div
        style={reduced ? undefined : { scale, opacity, y }}
        className="flex min-h-0 flex-1 flex-col origin-top"
      >
      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="shrink-0"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
            </span>
            {profile.availability}
          </span>
          <span className="opacity-20 select-none">·</span>
          <span className="text-xs text-muted">{profile.location}</span>
        </div>
      </motion.div>

      {/* Name + role — fills available viewport height on mobile */}
      <div className="flex min-h-0 flex-1 flex-col justify-center py-3 sm:py-6">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={introDone ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
            className="font-display text-hero font-extrabold leading-none text-foreground/15 select-none"
            aria-hidden="true"
          >
            Abdul
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={introDone ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-display text-hero font-extrabold leading-none text-foreground"
          >
            Wasay<span className="text-accent">.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="mt-3 max-w-md sm:mt-5"
        >
          <p className="font-display text-base font-semibold text-foreground sm:text-xl">
            {profile.headline}
          </p>
          <p className="mt-1.5 text-xs leading-snug text-muted sm:mt-2 sm:text-sm sm:leading-relaxed">
            {profile.tagline}
          </p>
        </motion.div>
      </div>

      {/* Bottom stack — ticker + actions stay inside the first screen */}
      <div className="shrink-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={introDone ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative -mx-5 flex overflow-hidden border-y border-border py-2 mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mx-0 sm:py-3"
        >
          <div className="animate-marquee-fast flex w-max shrink-0 gap-8 pr-8">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-[10px] font-medium tracking-widest text-muted uppercase whitespace-nowrap sm:text-xs"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/50" />
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-5"
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] hover:bg-accent/90 sm:px-5 sm:py-2"
            >
              View Work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:px-5 sm:py-2"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFilename}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/10 sm:px-5 sm:py-2"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>

          <nav className="flex items-center gap-3 text-xs text-muted">
            {STORY_LINKS.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-3">
                {i > 0 ? <span className="opacity-20">·</span> : null}
                <a href={href} className="transition-colors hover:text-accent">
                  {label}
                </a>
              </span>
            ))}
          </nav>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
}
