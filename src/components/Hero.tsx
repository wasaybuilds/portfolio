"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
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
  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden px-5 pb-10 pt-24 sm:min-h-screen sm:px-8 sm:pb-10 sm:pt-28"
    >
      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-wrap items-center gap-3"
      >
        <span className="flex items-center gap-2 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to work
        </span>
        <span className="opacity-20 select-none">·</span>
        <span className="text-xs text-muted">{profile.location}</span>
      </motion.div>

      {/* Name — full viewport on desktop, compact on mobile */}
      <div className="mt-8 overflow-hidden sm:mt-0 sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:py-6">
        <div className="hidden overflow-hidden sm:block">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
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
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-display text-hero font-extrabold leading-none text-foreground"
          >
            Wasay<span className="text-accent">.</span>
          </motion.h1>
        </div>
      </div>

      {/* Role + one-line story */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
        className="mt-6 max-w-md sm:mt-0"
      >
        <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
          {profile.role}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {profile.tagline}
        </p>
      </motion.div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative -mx-5 mt-8 flex overflow-hidden border-y border-border py-3 mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mx-0"
      >
        <div className="animate-marquee-fast flex w-max shrink-0 gap-8 pr-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-xs font-medium tracking-widest text-muted uppercase whitespace-nowrap"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTAs + story links */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
        className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] hover:bg-accent/90"
          >
            View Work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            Say Hello
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
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
    </section>
  );
}
