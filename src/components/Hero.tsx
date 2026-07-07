"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile, stats } from "@/lib/data";

/**
 * Fade-up entrance animation config — shared across hero elements.
 * Each child is given an incremental delay via the `delay` prop.
 * The ease is typed as a const tuple so Framer Motion's BezierDefinition
 * constraint is satisfied.
 */
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 sm:px-8 pt-28 pb-10"
    >
      <div className="mx-auto w-full max-w-5xl">

      {/* ---------- Status badge ---------- */}
      <motion.div
        {...fadeUp(0)}
        className="mb-10 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs text-muted sm:text-sm"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to Senior Full Stack &amp; Lead roles
        <span className="mx-1 opacity-30">·</span>
        <MapPin className="h-3.5 w-3.5 opacity-60" />
        {profile.location.split(",")[0]}
      </motion.div>

      {/* ---------- Hero headline — massive display type ---------- */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: "105%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display text-display-xl text-foreground"
        >
          Abdul
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: "105%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display text-display-xl text-accent"
        >
          Wasay.
        </motion.h1>
      </div>

      {/* ---------- Role + tagline row ---------- */}
      <motion.div
        {...fadeUp(0.4)}
        className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
      >
        <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
          {profile.role}
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-muted sm:block" />
        <span className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          Building performant, production-ready products end to end — React,
          Node.js, Python and everything in between.
        </span>
      </motion.div>

      {/* ---------- CTA row ---------- */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] hover:bg-accent/90"
        >
          View Work
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
        >
          Say Hello
        </a>

        {/* Social icons */}
        <div className="ml-1 flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      {/* ---------- Stats bar ---------- */}
      <motion.div
        {...fadeUp(0.65)}
        className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      </div>{/* /max-w-5xl */}
    </section>
  );
}
