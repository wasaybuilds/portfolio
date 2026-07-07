import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

/**
 * Experience section — editorial list layout.
 *
 * Rows replace the old card-timeline: period on the left, role/company in the
 * centre, and description right-aligned on wide screens. This feels like a
 * senior résumé, not a junior portfolio.
 */
export function Experience() {
  return (
    <section id="experience" className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="04"
          label="Experience"
          title="One company. Multiple products. Real ownership."
        />

        <div className="flex flex-col divide-y divide-border">
          {experiences.map((exp, index) => (
            <Reveal key={exp.role + exp.period} delay={index * 0.07}>
              <div className="group grid gap-4 py-8 sm:grid-cols-[160px_1fr] sm:gap-8 lg:grid-cols-[200px_1fr_340px] lg:gap-12">

                {/* Period + location */}
                <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-1.5">
                  <span className="text-sm text-muted">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                  <span className="hidden text-xs text-muted/60 sm:block">{exp.location}</span>
                </div>

                {/* Role + company */}
                <div>
                  <div className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                    {exp.role}
                  </div>
                  <div className="mt-1">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {exp.company}
                      </span>
                    )}
                  </div>

                  {/* Description — visible on mobile / below role on all screens */}
                  <p className="mt-3 text-sm leading-relaxed text-muted lg:hidden">
                    {exp.description}
                  </p>
                </div>

                {/* Description — right column, desktop only */}
                <p className="hidden text-sm leading-relaxed text-muted lg:block">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
