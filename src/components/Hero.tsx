"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile, stats } from "@/lib/data";

/** Typed bezier ease shared across entrance animations. */
const EASE = [0.16, 1, 0.3, 1] as const;

/** Staggered fade-up for supporting text / CTAs. */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

/**
 * Hero — two-column layout on desktop:
 *  Left  : "Full Stack | Senior Engineer" pills → massive name → role + CTAs → stats
 *  Right : profile photo card with name, role, and availability badge
 *
 * Drop your photo at `public/profile.jpg` and it will appear in the card.
 * The card falls back to the "AW" initials avatar if the file is missing.
 */
export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 sm:px-8 pt-28 pb-10"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* ── "Minimal | Creative" style pill labels ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 flex items-center gap-2"
        >
          <span className="rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-foreground">
            Full Stack
          </span>
          <span className="text-muted opacity-40">·</span>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Senior Engineer
          </span>
          <span className="text-muted opacity-40">·</span>
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted">
            <MapPin className="h-3 w-3" />
            {profile.location.split(",")[0]}
          </span>
        </motion.div>

        {/* ── Main content grid ── */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">

          {/* Left column */}
          <div>
            {/* Massive name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: "105%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
                className="font-display text-display-xl text-foreground"
              >
                Abdul
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: "105%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                className="font-display text-display-xl text-accent"
              >
                Wasay.
              </motion.h1>
            </div>

            {/* Role + tagline */}
            <motion.div
              {...fadeUp(0.35)}
              className="mt-6 flex flex-col gap-1"
            >
              <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                {profile.role}
              </span>
              <span className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Building performant, production-ready products end to end —
                React, Node.js, Python and everything in between.
              </span>
            </motion.div>

            {/* CTA row */}
            <motion.div
              {...fadeUp(0.45)}
              className="mt-7 flex flex-wrap items-center gap-3"
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

            {/* Stats bar */}
            <motion.div
              {...fadeUp(0.55)}
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
          </div>

          {/* ── Right column — profile photo card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="hidden lg:block"
          >
            <div className="overflow-hidden rounded-3xl card-glass p-1">
              {/* Photo — place your image at public/profile.jpg */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-background-soft">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  /* Fallback initials avatar */
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-5xl font-bold text-muted/30">AW</span>
                  </div>
                )}

                {/* Availability badge pinned to bottom-left of photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-foreground">Available</span>
                </div>
              </div>

              {/* Name + role strip below photo */}
              <div className="px-4 py-4">
                <div className="font-display text-base font-bold text-foreground">
                  {profile.name}
                </div>
                <div className="mt-0.5 text-sm text-muted">{profile.role}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
