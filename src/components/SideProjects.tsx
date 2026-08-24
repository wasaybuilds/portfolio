import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Chapter } from "@/components/ui/Chapter";
import { Spotlight } from "@/components/ui/ScrollScene";
import { Reveal } from "@/components/ui/Reveal";
import { sideProjects, type Project } from "@/lib/data";

/**
 * Side Projects — things I own and shipped myself.
 *
 * Deliberately not "Open Source Contributions": nothing here claims a merged
 * patch to somebody else's repository. Every link points at the specific repo
 * or live demo, never at a profile page, so a reader can check the claim in one
 * click rather than being sent somewhere vague.
 */
export function SideProjects() {
  return (
    <Chapter
      id="side-projects"
      index="02"
      label="Side Projects"
      title="Things I built for myself."
      description="Personal projects, honestly labelled. Where something is unfinished, it says so."
      meta={`${sideProjects.length} projects`}
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {sideProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <SideProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}

function SideProjectCard({ project }: { project: Project }) {
  const isRepo = project.url.includes("github.com");
  const status = project.highlights.find((h) => h.label === "Status")?.value;

  return (
    <Spotlight className="flex h-full flex-col bg-background p-5 transition-colors hover:bg-background-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        {status ? (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted">
            {status}
          </span>
        ) : null}
      </div>

      <p className="mt-1 text-sm text-accent">{project.tagline}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <p className="mt-5 text-xs text-muted/70">{project.tags.join(" · ")}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground hover:text-accent"
      >
        {isRepo ? <GithubIcon className="h-4 w-4" /> : null}
        {isRepo ? "View repository" : "View live demo"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </Spotlight>
  );
}
