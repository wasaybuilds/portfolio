import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

/**
 * Experience — titles, employers and dates exactly as they appear on LinkedIn.
 *
 * Descriptions are optional and currently omitted: a recruiter cross-checks
 * this section against a profile, and a row that matches on every field is
 * worth more than a row with a paragraph that doesn't.
 */
export function Experience() {
  return (
    <Chapter
      id="experience"
      index="04"
      label="Experience"
      title="Where I've worked."
      description="Titles and dates as they appear on my LinkedIn, so there's nothing to reconcile."
    >
      <div className="flex flex-col divide-y divide-border border-y border-border">
        {experiences.map((exp, index) => (
          <Reveal key={exp.role + exp.period} delay={index * 0.06}>
            <div className="group grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <div className="flex flex-row flex-wrap items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                <span className="text-sm tabular-nums text-muted">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-status/10 px-2.5 py-0.5 text-[11px] font-medium text-status">
                    <span className="h-1.5 w-1.5 rounded-full bg-status" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <div className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {exp.role}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">
                      {exp.company}
                    </span>
                  )}
                  <span className="text-muted/40">·</span>
                  <span className="text-muted">{exp.location}</span>
                </div>

                {exp.description ? (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}
