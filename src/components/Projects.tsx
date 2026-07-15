"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { projects, type Project } from "@/lib/data";

/**
 * Projects section — premium editorial case-study index.
 *
 * Interactions:
 * - Hovering/focusing a row swaps the sticky preview.
 * - Live products show a screenshot; open-source repos show a GitHub-style card.
 * - Each row carries its own proof points so mobile still feels complete.
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
            {projects.map((project, index) => {
              const isRepo = project.kind === "repo";

              return (
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
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-display text-2xl font-semibold leading-none tracking-tighter text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                                {project.name}
                              </h3>
                              {isRepo && (
                                <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                                  <GithubIcon className="h-3 w-3" />
                                  Open Source
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent lg:hidden" />
                        </div>
                        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

                        {isRepo && project.repoFullName && (
                          <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted/80">
                            <GithubIcon className="h-3 w-3 shrink-0" />
                            {project.repoFullName}
                          </p>
                        )}

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
              );
            })}
          </div>

          {/* ── Right — sticky product / repo preview (desktop only) ── */}
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
                    {activeProject.kind === "repo" ? (
                      <RepoPreview project={activeProject} />
                    ) : (
                      <LivePreview project={activeProject} />
                    )}
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

/**
 * Sticky preview for shipped live products — browser chrome + screenshot.
 */
function LivePreview({ project }: { project: Project }) {
  return (
    <>
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

        {project.image && (
          <div className="relative overflow-hidden bg-background">
            <Image
              src={project.image}
              alt={project.name}
              width={960}
              height={600}
              className="h-60 w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        )}

        <PreviewFooter project={project} systemsLabel="Key systems" />
      </div>
    </>
  );
}

/**
 * Sticky preview for open-source repos — no fake product screenshot.
 * Reads like a GitHub README card: path, description, language bar, stack.
 */
function RepoPreview({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute -inset-3 -rotate-1 rounded-[2.25rem] border border-accent/15" />

      <div className="relative overflow-hidden rounded-4xl border border-border bg-background-soft shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2 text-muted">
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="font-mono text-[11px] tracking-tight">
              {project.repoFullName ?? project.name}
            </span>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            Open Source
          </p>
        </div>

        {/* Code-window body instead of a product screenshot */}
        <div className="relative overflow-hidden bg-background px-5 py-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background-soft">
                <BookOpen className="h-3.5 w-3.5 text-accent" />
              </span>
              <div>
                <div className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {project.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Public repository · MIT
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {project.languages && project.languages.length > 0 && (
              <div className="mt-5">
                <div className="flex h-2 overflow-hidden rounded-full bg-border">
                  {project.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="h-full first:rounded-l-full last:rounded-r-full"
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: lang.color,
                      }}
                      title={`${lang.name} ${lang.percent}%`}
                    />
                  ))}
                </div>
                <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                  {project.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="flex items-center gap-1.5 text-[11px] text-muted"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.name}
                      <span className="text-foreground/50">{lang.percent}%</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-background-soft px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <PreviewFooter project={project} systemsLabel="What it does" />
      </div>
    </>
  );
}

function PreviewFooter({
  project,
  systemsLabel,
}: {
  project: Project;
  systemsLabel: string;
}) {
  return (
    <div className="border-t border-border p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
            {project.name}
          </div>
          <div className="mt-1 text-sm text-muted">{project.tagline}</div>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
          aria-label={
            project.kind === "repo"
              ? `View ${project.name} on GitHub`
              : `Visit ${project.name}`
          }
        >
          {project.kind === "repo" ? (
            <GithubIcon className="h-4 w-4" />
          ) : (
            <ArrowUpRight className="h-4 w-4" />
          )}
        </a>
      </div>

      <div className="mt-5 border-t border-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {systemsLabel}
        </p>
        <ul className="mt-3 space-y-2">
          {project.features.slice(0, 2).map((feature) => (
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
  );
}
