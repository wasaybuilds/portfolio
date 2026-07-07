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
    <section id="about" className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="03"
          label="About"
          title="I build like the product has to survive real users."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ---------- Left — pull-quote + philosophy ---------- */}
          <Reveal>
            <blockquote className="font-display text-display-md text-foreground leading-snug">
              Full ownership.
              <br />
              <span className="text-accent">Front to back,</span>
              <br />
              idea to production.
            </blockquote>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              I stay close to the code, the user, and the outcome. Less noise,
              more shipped product.
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
                {
                  label: "Product-minded",
                  desc: "I care about the metric behind the feature.",
                },
                {
                  label: "Performance-obsessed",
                  desc: "Fast UI, efficient APIs, clean deployment paths.",
                },
                {
                  label: "Team multiplier",
                  desc: "Reviews and mentoring without leaving the code.",
                },
              ].map((item) => (
                <div key={item.label} className="group py-5">
                  <div className="mb-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {item.label}
                  </div>
                  <div className="text-sm leading-relaxed text-muted">{item.desc}</div>
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
