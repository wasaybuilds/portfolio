import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

/**
 * About section — editorial two-column layout.
 *
 * Left: A large pull-quote that captures Wasay's engineering philosophy
 * in one punchy sentence, rendered at display scale.
 *
 * Right: compact principles + education.
 */
export function About() {
  return (
    <section id="about" className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="03"
          label="About"
          title="How I think."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ---------- Left — pull-quote + philosophy ---------- */}
          <Reveal>
            <blockquote className="font-display text-display-md text-foreground leading-snug">
              Full ownership.
              <br />
              <span className="text-accent">Idea to production.</span>
            </blockquote>

            <p className="mt-4 max-w-sm text-sm text-muted">
              Close to the code, the user, and what actually ships.
            </p>
          </Reveal>

          {/* ---------- Right — capabilities + education ---------- */}
          {/*
           * Flat divider-row layout: same visual language as Experience and
           * Skills. No glassmorphism cards — just clean horizontal rules.
           */}
          <Reveal delay={0.1}>
            <div className="flex flex-col divide-y divide-border">
              {[
                { label: "Product-minded", desc: "Metrics over tickets." },
                { label: "Performance-first", desc: "Fast UI, clean APIs." },
                { label: "Team multiplier", desc: "Reviews and mentoring." },
              ].map((item) => (
                <div key={item.label} className="group flex flex-wrap items-baseline gap-x-2 py-4">
                  <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted">— {item.desc}</span>
                </div>
              ))}

              {/* Education — flat row, same language */}
              <div className="py-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Education
                </div>
                <div className="mt-2 font-medium text-foreground">{education.school}</div>
                <div className="mt-0.5 text-sm text-muted">
                  {education.degree} · {education.period}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
