import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

/**
 * Stack section — four pillars in a compact grid.
 * Tells the story of how Wasay works: build, ship, polish, lead.
 */
export function Skills() {
  return (
    <section id="stack" className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <EditorialSectionHeader
          index="06"
          label="Chapter VI · Stack"
          title="What I reach for when it matters."
          description="Not every shiny tool — the ones that don't flake mid-demo."
        />

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <div className="group bg-background p-5 transition-colors hover:bg-background-soft sm:p-6">
                <div className="font-display text-2xl font-semibold tracking-tighter text-foreground transition-colors group-hover:text-accent">
                  {group.category}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.items.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
