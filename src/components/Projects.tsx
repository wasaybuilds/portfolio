"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

/**
 * Projects section — premium editorial case-study index.
 *
 * Interactions:
 * - Hovering/focusing a row swaps the sticky preview.
 * - Each row carries its own proof points so mobile still feels complete.
 * - No cursor-tracking or 3D effects; the creativity comes from layout,
 *   typography, and disciplined interaction.
 */
export function Projects() {
  const [active, setActive] = useState<string>(projects[0]?.slug ?? "");
  const activeProject = projects.find((p) => p.slug === active) ?? projects[0];

  return (
    <section id="work" className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="01"
          label="Work"
          title="What I've shipped."
          meta={`${projects.length} projects`}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px]">

          {/* ── Left — editorial case-study list ── */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block overflow-hidden rounded-3xl border border-border p-4 transition-all duration-300 hover:border-accent/30 hover:bg-background-soft/55 sm:rounded-4xl sm:p-6 ${
                    active === project.slug
                      ? "border-accent/30 bg-background-soft/45"
                      : "bg-background/35"
                  }`}
                  onMouseEnter={() => setActive(project.slug)}
                  onFocus={() => setActive(project.slug)}
                >
                  <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-5">
                    <span className="font-display text-2xl font-semibold leading-none tracking-tighter text-foreground/20 transition-colors group-hover:text-accent/40 sm:text-3xl">
                      0{index + 1}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl font-semibold leading-none tracking-tighter text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                          {project.name}
                        </h3>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent lg:hidden" />
                      </div>
                      <p className="mt-2 text-sm text-muted">{project.tagline}</p>

                      <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 hidden gap-5 border-t border-border pt-3 sm:flex">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <div key={highlight.label}>
                            <div className="font-display text-base font-semibold text-foreground">
                              {highlight.value}
                            </div>
                            <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted">
                              {highlight.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* ── Right — sticky product preview (desktop only) ── */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] border border-accent/15" />

                    <div className="relative overflow-hidden rounded-4xl border border-border bg-background-soft shadow-2xl shadow-black/20">
                      <div className="flex items-center justify-between border-b border-border px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-accent/70" />
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="h-2 w-2 rounded-full bg-white/10" />
                        </div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                          Live Product
                        </p>
                      </div>

                      <div className="relative overflow-hidden bg-background">
                        <Image
                          src={activeProject.image}
                          alt={activeProject.name}
                          width={960}
                          height={600}
                          className="h-60 w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </div>

                      <div className="border-t border-border p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                              {activeProject.name}
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              {activeProject.tagline}
                            </div>
                          </div>
                          <a
                            href={activeProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                            aria-label={`Visit ${activeProject.name}`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>

                        <div className="mt-5 border-t border-border pt-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            Key systems
                          </p>
                          <ul className="mt-3 space-y-2">
                            {activeProject.features.slice(0, 2).map((feature) => (
                              <li
                                key={feature}
                                className="grid grid-cols-[0.75rem_1fr] gap-2 text-sm leading-snug text-muted"
                              >
                                <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
