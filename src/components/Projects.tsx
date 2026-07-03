import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Products I've helped bring to life."
          description="Two flagship AI platforms where I owned frontend architecture and delivered a polished, production-ready UI."
        />

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl card-glass">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.accent} opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]`}
                />

                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative flex items-center justify-center overflow-hidden bg-black/30 p-6 sm:p-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={`${project.name} website screenshot`}
                        width={960}
                        height={1080}
                        className="h-[420px] w-full object-cover object-top sm:h-[480px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.accent}`}
                      />
                      <span className="text-sm font-medium tracking-wide text-muted uppercase">
                        {project.tagline}
                      </span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title mt-3 inline-flex w-fit items-center gap-2"
                    >
                      <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover/title:text-foreground" />
                    </a>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-foreground">
                      {project.role}
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight.label}
                          className="rounded-xl border border-border bg-white/5 p-3"
                        >
                          <div className="font-display text-lg font-semibold text-foreground sm:text-xl">
                            {highlight.value}
                          </div>
                          <div className="mt-0.5 text-[11px] leading-tight text-muted sm:text-xs">
                            {highlight.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                    >
                      Visit Live Site
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
