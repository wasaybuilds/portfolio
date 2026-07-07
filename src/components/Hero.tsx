"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile, stats } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Tech ticker — the technologies that scroll continuously beneath the name,
 * giving the hero perpetual motion without being distracting.
 */
const TICKER_ITEMS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "AWS", "Docker", "PostgreSQL", "GraphQL", "NestJS",
  "Framer Motion", "Prisma", "Redis", "Linux", "CI/CD",
  "Tailwind CSS", "REST APIs", "Webflow", "Shopify", "Monorepos",
];

/**
 * Work category counts shown in the strip below the ticker —
 * inspired by the reference portfolio's category navigation.
 */
const CATEGORIES = [
  { label: "SaaS Products",   count: "2",   href: "#work" },
  { label: "Client Builds",   count: "8+",  href: "#client-work" },
  { label: "Experience",      count: "3+ yrs", href: "#experience" },
  { label: "Certifications",  count: "10+", href: "#certifications" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-14 pt-28"
    >
      {/* ── Status row ── */}
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 flex flex-wrap items-center gap-3"
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
          <span className="opacity-20 select-none">·</span>
          <span className="text-xs text-muted">2026</span>
        </motion.div>
      </div>

      {/* ── HERO NAME — fills the viewport ── */}
      {/*
        "WASAY" at 22vw makes the 5-character name dominate the screen the
        same way the reference uses the full name. "Abdul" sits above it in
        the same scale, pushed back with a lighter weight to create hierarchy.
      */}
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.05, ease: EASE }}
          className="px-5 sm:px-8"
        >
          <h1
            className="font-display text-hero font-extrabold leading-none text-foreground/20 select-none"
            aria-hidden="true"
          >
            Abdul
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
          className="px-5 sm:px-8"
        >
          <h1 className="font-display text-hero font-extrabold leading-none text-foreground">
            Wasay<span className="text-accent">.</span>
          </h1>
        </motion.div>
      </div>

      {/* ── Tech ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-6 flex overflow-hidden border-y border-border py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="animate-marquee-fast flex w-max shrink-0 gap-8 pr-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-xs font-medium tracking-widest text-muted uppercase whitespace-nowrap">
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom strip: bio + category counts + CTAs ── */}
      <div className="mx-auto mt-8 w-full max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="grid gap-8 sm:grid-cols-[1fr_auto]"
        >
          {/* Left — role + bio */}
          <div>
            <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
              {profile.role}
            </p>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
              Building production-grade SaaS from the ground up — React,
              Node.js, Python. Full ownership, front to back.
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] hover:bg-accent/90"
              >
                View Work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                Say Hello
              </a>
              <a
                href={profile.github}
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — category count strip (like reference's "Products 7 | Projects 8 | …") */}
          <div className="grid grid-cols-2 gap-px border border-border sm:grid-cols-1">
            {CATEGORIES.map(({ label, count, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-between gap-4 bg-background px-4 py-3 text-xs transition-colors hover:bg-background-soft"
              >
                <span className="text-muted transition-colors group-hover:text-foreground">
                  {label}
                </span>
                <span className="font-display font-bold text-foreground tabular-nums">
                  {count}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
