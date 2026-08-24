import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

/**
 * Stack — a grouped list, deliberately unadorned. No proficiency badges, no
 * logo wall: the reader is here to check whether the stack overlaps with
 * theirs, and a list answers that faster than anything else.
 */
export function Skills() {
  return (
    <Chapter
      id="stack"
      index="05"
      label="Stack"
      title="What I build with."
      description="The tools I use regularly enough to be interviewed on. Nothing listed here is a single tutorial deep."
    >
      <div className="flex flex-col divide-y divide-border border-y border-border">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <div className="group grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {group.category}
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-sm text-foreground/85 transition-colors group-hover:border-accent/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}
