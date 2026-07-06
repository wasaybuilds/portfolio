import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";
import { ArrowUpRight, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career Path"
          title="Where I've made an impact."
          description="A timeline of the teams and products I've helped build, scale, and ship."
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border sm:left-6" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role + exp.period} delay={index * 0.05}>
                <div className="relative flex gap-6 pl-0 sm:gap-8">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background-soft text-accent sm:h-12 sm:w-12">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-background" />
                    )}
                  </div>

                  <div className="flex-1 rounded-2xl card-glass p-6 transition-colors hover:border-accent/40 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-accent-2 hover:underline"
                            >
                              {exp.company}
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="font-medium text-foreground">
                              {exp.company}
                            </span>
                          )}
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium whitespace-nowrap text-muted">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
