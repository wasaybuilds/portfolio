"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

/**
 * Projects section — editorial numbered list on the left with a sticky
 * preview panel on the right that swaps in the project screenshot on hover.
 *
 * On mobile (<lg) the preview panel is hidden and each row links directly.
 */
export function Projects() {
  const [active, setActive] = useState<string>(projects[0]?.slug ?? "");

  const activeProject = projects.find((p) => p.slug === active) ?? projects[0];

  return (
    <section id="work" className="relative px-6 py-24 sm:py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-12 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Work
            </span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted">{projects.length} projects</span>
          </div>
        </Reveal>

        <div className="grid gap-0 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">

          {/* ---------- Left — project list ---------- */}
          <div>
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-row group flex items-start gap-5 py-7 sm:items-center"
                  onMouseEnter={() => setActive(project.slug)}
                  onFocus={() => setActive(project.slug)}
                >
                  {/* Number */}
                  <span className="mt-0.5 w-8 shrink-0 font-display text-sm font-semibold text-muted sm:mt-0">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                        {project.name}
                      </span>
                      <span className="text-sm text-muted">{project.tagline}</span>
                    </div>

                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      {/* Tech tags (first 3) */}
                      <div className="hidden items-center gap-1.5 sm:flex">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* ---------- Key metrics strip below the list ---------- */}
            {activeProject && (
              <Reveal delay={0.15}>
                <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl card-glass p-6 lg:hidden">
                  {activeProject.highlights.map((h) => (
                    <div key={h.label}>
                      <div className="font-display text-xl font-bold text-foreground">
                        {h.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-muted">{h.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* ---------- Right — sticky preview panel (desktop only) ---------- */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden rounded-2xl card-glass"
                  >
                    {/* Screenshot */}
                    <div className="relative overflow-hidden bg-black/30">
                      <div
                        className={`absolute inset-0 -z-10 bg-gradient-to-br ${activeProject.accent} opacity-10`}
                      />
                      <Image
                        src={activeProject.image}
                        alt={activeProject.name}
                        width={960}
                        height={600}
                        className="h-56 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-display text-lg font-bold text-foreground">
                            {activeProject.name}
                          </div>
                          <div className="mt-0.5 text-sm text-muted">
                            {activeProject.role}
                          </div>
                        </div>
                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-110"
                          aria-label={`Visit ${activeProject.name}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {activeProject.description}
                      </p>

                      {/* Metrics */}
                      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
                        {activeProject.highlights.map((h) => (
                          <div key={h.label}>
                            <div className="font-display text-lg font-bold text-foreground">
                              {h.value}
                            </div>
                            <div className="mt-0.5 text-[11px] leading-snug text-muted">
                              {h.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
