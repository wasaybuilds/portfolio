import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

/**
 * About section — the obsession chapter.
 *
 * Left: a pull-quote that states the emotional thesis.
 * Right: principles that turn passion into craft, plus education.
 */
export function About() {
  return (
    <section id="about" className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="04"
          label="Chapter IV · About"
          title="The obsession behind it."
          description="Passion without craft is noise. Craft without passion is a very polished spreadsheet."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          <Reveal>
            <blockquote className="font-display text-display-md text-foreground leading-snug">
              Not tickets.
              <br />
              <span className="text-accent">Products people feel.</span>
            </blockquote>

            <p className="mt-4 max-w-sm text-sm text-muted">
              Close to the code. Closer to the outcome. Allergic to &quot;works on my machine.&quot;
            </p>
          </Reveal>

          {/*
           * Flat divider-row layout: same visual language as Experience and
           * Skills. No glassmorphism cards — just clean horizontal rules.
           */}
          <Reveal delay={0.1}>
            <div className="flex flex-col divide-y divide-border">
              {[
                {
                  label: "Passionate",
                  desc: "I stay when the idea won't leave (sleep is negotiable).",
                },
                {
                  label: "Obsessed",
                  desc: "Performance until the spinner feels personally attacked.",
                },
                {
                  label: "Extraordinary",
                  desc: "Results that make the client double-check the decimal.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex flex-wrap items-baseline gap-x-2 py-4"
                >
                  <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted">— {item.desc}</span>
                </div>
              ))}

              <div className="py-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Education
                </div>
                <div className="mt-2 font-medium text-foreground">
                  {education.school}
                </div>
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
