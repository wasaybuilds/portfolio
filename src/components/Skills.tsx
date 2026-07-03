import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import { CodeXml, Database, Cloud, PenTool, Layers, Rocket } from "lucide-react";

const icons = [CodeXml, Database, Cloud, PenTool, Layers, Rocket];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies I work with."
          description="Full stack range — from pixel-perfect frontends to backend architecture, databases, and shipping pipelines."
        />

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {skills.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <RevealItem key={group.category} className="min-w-0">
                <div className="group h-full min-w-0 rounded-2xl card-glass p-6 transition-colors hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="max-w-full rounded-full border border-border bg-white/5 px-3 py-1 text-xs break-words text-muted transition-colors group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
