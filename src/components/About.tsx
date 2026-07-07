import { Reveal } from "@/components/ui/Reveal";
import { education, profile } from "@/lib/data";

/**
 * About section — editorial two-column layout.
 *
 * Left: A large pull-quote that captures Wasay's engineering philosophy
 * in one punchy sentence, rendered at display scale.
 *
 * Right: Full bio paragraphs + education card.
 */
export function About() {
  return (
    <section id="about" className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:grid-cols-[1.1fr_0.9fr]">

          {/* ---------- Left — pull-quote + philosophy ---------- */}
          <Reveal direction="right">
            <blockquote className="font-display text-display-md text-foreground leading-snug">
              Full ownership.
              <br />
              <span className="text-accent">Front to back,</span>
              <br />
              idea to production.
            </blockquote>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.about.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-foreground/90" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {/* ---------- Right — capabilities + education ---------- */}
          {/*
           * Flat divider-row layout: same visual language as Experience and
           * Skills. No glassmorphism cards — just clean horizontal rules.
           */}
          <Reveal direction="left" delay={0.1}>
            <div className="flex flex-col divide-y divide-border">
              {[
                {
                  label: "Product-minded",
                  desc: "I don't just build what's specced — I dig into the why so what ships actually moves the metric.",
                },
                {
                  label: "Performance-obsessed",
                  desc: "Render cycles on the frontend, efficient pipelines on the backend — correctness isn't optional.",
                },
                {
                  label: "Team multiplier",
                  desc: "Code reviews, architectural guidance, and mentoring junior engineers to grow the team's capability.",
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
