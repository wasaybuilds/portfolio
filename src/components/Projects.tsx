"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  GitBranch,
  MapPin,
  Mail,
  Sparkles,
  Watch,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/icons/BrandIcons";
import {
  saasProjects,
  labProjects,
  type Project,
} from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Projects section — two clear tiers:
 * 1. AI SaaS products (DealerIQ, Befer) with editorial case-study + sticky preview
 * 2. Lab / for-fun experiments as interactive playground cards
 */
export function Projects() {
  const [active, setActive] = useState<string>(saasProjects[0]?.slug ?? "");
  const activeProject =
    saasProjects.find((p) => p.slug === active) ?? saasProjects[0];

  return (
    <section id="work" className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <EditorialSectionHeader
          index="01"
          label="Chapter I · Work"
          title="I don't ship average."
          description="AI products in the wild — agents, CRMs, real users, real stakes. Demo day energy, production scars."
          meta={`${saasProjects.length} SaaS · ${labProjects.length} lab`}
        />

        {/* ── Tier 1: Production AI SaaS ── */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              AI SaaS products
            </p>
            <p className="mt-1.5 max-w-md text-sm text-muted">
              Built end to end — then stress-tested by people who don't care about your elegant abstractions.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-4">
            {saasProjects.map((project, index) => (
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
                            <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                              Live SaaS
                            </span>
                          </div>
                        </div>
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
                    <SaasPreview project={activeProject} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Tier 2: Lab / for-fun playgrounds ── */}
        <div className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12">
          <Reveal>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Lab · for fun
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
                  Passion projects. Zero brief. Maximum chaos.
                </h3>
                <p className="mt-2 max-w-lg text-sm text-muted">
                  Nobody asked for these. I built them anyway. Hover, click, poke — break nothing expensive.
                </p>
              </div>
              <span className="text-xs text-muted">
                {labProjects.length} playgrounds
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {labProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.08 + index * 0.08}>
                {project.slug === "horology-api" ? (
                  <HorologyPlayground project={project} />
                ) : (
                  <IntentPlayground project={project} />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Sticky browser-chrome preview for live SaaS products. */
function SaasPreview({ project }: { project: Project }) {
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
            Live SaaS
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
              aria-label={`Visit ${project.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 border-t border-border pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Key systems
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
      </div>
    </>
  );
}

const INTENT_ICONS = [MapPin, Sparkles, Mail] as const;

/**
 * Intent Engine playground — click through the scrape → enrich → email pipeline.
 * Card shell is a div so step buttons stay valid HTML (no nested interactive).
 */
function IntentPlayground({ project }: { project: Project }) {
  const steps = project.playSteps ?? [];
  const [step, setStep] = useState(0);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background/40 transition-colors hover:border-accent/30 hover:bg-background-soft/50 sm:rounded-4xl">
      <div className="relative overflow-hidden border-b border-border bg-background px-5 py-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
              <GitBranch className="h-3 w-3" />
              Pipeline demo
            </span>
            <span className="font-mono text-[10px] text-muted/70">
              step {step + 1}/{steps.length || 1}
            </span>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Intent Engine pipeline">
            {steps.map((label, i) => {
              const Icon = INTENT_ICONS[i] ?? Sparkles;
              const active = i === step;
              const done = i < step;

              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setStep(i)}
                  className={`flex flex-1 flex-col items-center gap-2 rounded-2xl border px-2 py-3 transition-all ${
                    active
                      ? "border-accent/40 bg-accent/10 text-foreground"
                      : done
                        ? "border-border bg-background-soft text-muted"
                        : "border-border/60 bg-transparent text-muted/60"
                  }`}
                >
                  <motion.span
                    animate={active ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                      active
                        ? "border-accent/50 bg-accent/20 text-accent"
                        : "border-border bg-background text-muted"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </motion.span>
                  <span className="text-center text-[10px] font-medium leading-tight">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              role="tabpanel"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-5 text-sm leading-relaxed text-muted"
            >
              {project.features[step] ?? project.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col justify-between p-5 outline-none focus-visible:bg-background-soft/80"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-semibold tracking-tighter text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
              For fun
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{project.tagline}</p>
          {project.repoFullName && (
            <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted/80">
              <GithubIcon className="h-3 w-3 shrink-0" />
              {project.repoFullName}
            </p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
            <GithubIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </article>
  );
}

/**
 * Horology playground — mouse-tilt watch face that "winds" on hover.
 */
function HorologyPlayground({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const [winding, setWinding] = useState(false);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 18);
    rotateX.set((0.5 - py) * 14);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setWinding(false);
  };

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseEnter={() => setWinding(true)}
      onMouseLeave={onLeave}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background/40 transition-colors hover:border-accent/30 hover:bg-background-soft/50 sm:rounded-4xl"
      style={{ perspective: 900 }}
    >
      <div className="relative flex items-center justify-center overflow-hidden border-b border-border bg-background px-5 py-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(249,115,22,0.35), transparent 55%)",
          }}
        />

        <div className="absolute left-5 top-5 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
            <Watch className="h-3 w-3" />
            3D demo
          </span>
        </div>
        <div className="absolute right-5 top-5 font-mono text-[10px] text-muted/70">
          drag me · live
        </div>

        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: "preserve-3d",
          }}
          className="relative mt-4"
        >
          {/* Watch outer case */}
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-border bg-background-soft shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-2 rounded-full border border-white/5" />
            <div className="absolute inset-4 rounded-full border border-accent/20" />

            {/* Tick marks */}
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute h-full w-px"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <span
                  className={`absolute left-1/2 top-2 h-2 w-px -translate-x-1/2 ${
                    i % 3 === 0 ? "bg-accent/70" : "bg-white/20"
                  }`}
                />
              </span>
            ))}

            {/* Seconds / wind hand */}
            <motion.span
              animate={winding ? { rotate: 360 } : { rotate: 45 }}
              transition={
                winding
                  ? { duration: 2.4, repeat: Infinity, ease: "linear" }
                  : { duration: 0.6, ease: EASE }
              }
              className="absolute left-1/2 top-1/2 h-[42%] w-[1.5px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-accent"
              style={{ transformStyle: "preserve-3d" }}
            />

            {/* Minute hand */}
            <motion.span
              animate={winding ? { rotate: 360 } : { rotate: -20 }}
              transition={
                winding
                  ? { duration: 18, repeat: Infinity, ease: "linear" }
                  : { duration: 0.6, ease: EASE }
              }
              className="absolute left-1/2 top-1/2 h-[32%] w-0.5 origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-foreground/80"
            />

            {/* Hour hand */}
            <span className="absolute left-1/2 top-1/2 h-[22%] w-[2.5px] origin-bottom -translate-x-1/2 -translate-y-full rotate-110 rounded-full bg-foreground" />

            {/* Center cap */}
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
          </div>

          {/* Crown */}
          <span className="absolute -right-1 top-1/2 h-6 w-2 -translate-y-1/2 rounded-r-sm border border-border bg-background-soft" />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-semibold tracking-tighter text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
              For fun
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{project.tagline}</p>

          {project.playSteps && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.playSteps.map((s, i) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 text-[11px] text-muted"
                >
                  <span className="font-mono text-accent/80">0{i + 1}</span>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
