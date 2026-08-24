import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Chapter } from "@/components/ui/Chapter";
import { RevealMedia, Spotlight, StackItem } from "@/components/ui/ScrollScene";
import { saasProjects, type Project } from "@/lib/data";

/**
 * Work — the production platforms, presented as a deck.
 *
 * Each case study pins near the top of the viewport and is covered by the next
 * one as you scroll, so the section reads as a sequence rather than a wall.
 * Below `lg` the cards fall back to ordinary stacked blocks.
 */
export function Work() {
  return (
    <Chapter
      id="work"
      index="01"
      label="Work"
      title="Platforms in production."
      description="Two products I built end to end and still maintain. The interesting parts are underneath the screenshots."
      meta={`${saasProjects.length} platforms`}
    >
      <div className="space-y-6 lg:space-y-0 lg:pb-[40vh]">
        {saasProjects.map((project, index) => (
          <StackItem
            key={project.slug}
            index={index}
            total={saasProjects.length}
          >
            <WorkCard project={project} />
          </StackItem>
        ))}
      </div>
    </Chapter>
  );
}

function WorkCard({ project }: { project: Project }) {
  return (
    <Spotlight className="overflow-hidden rounded-2xl border border-border bg-background-soft shadow-2xl shadow-black/20">
      {project.image ? (
        <RevealMedia className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-background">
          <div className="relative h-full w-full">
            <Image
              src={project.image}
              alt={`${project.name} interface`}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover object-top"
            />
          </div>
        </RevealMedia>
      ) : null}

      <div className="relative z-20 p-5 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.name}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Visit site
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="mt-1 text-sm text-muted">
          {project.tagline} · {project.role}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>

        {project.problem ? (
          <Block label="The technical problem" body={project.problem} />
        ) : null}
        {project.built ? (
          <Block label="What I built" body={project.built} />
        ) : null}

        {project.features.length ? (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2.5 text-sm leading-snug text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-7 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Stack
            </div>
            <p className="mt-2 text-sm text-muted">{project.tags.join(" · ")}</p>
          </div>

          {project.highlights.length ? (
            <div className="sm:text-right">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Scale
              </div>
              {project.highlights.map((h) => (
                <p key={h.label} className="mt-2 text-sm text-muted">
                  <span className="font-medium text-foreground">{h.value}</span>{" "}
                  {h.label.toLowerCase()}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Spotlight>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="mt-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{body}</p>
    </div>
  );
}
