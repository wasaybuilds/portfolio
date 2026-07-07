import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

/**
 * Stack section — editorial inline-text layout.
 *
 * Each skill category is rendered as a horizontal row: the category name in
 * orange acts as a heading, followed by the skill items separated by dots.
 * This reads as a senior engineer's competency profile rather than a
 * chip-cloud of buzzwords.
 */
export function Skills() {
  return (
    <section id="stack" className="relative px-6 py-24 sm:py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Stack
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        {/* ---------- Category rows ---------- */}
        <div className="flex flex-col divide-y divide-border">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.07}>
              <div className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:gap-8 lg:gap-12">
                {/* Category label */}
                <span className="w-full shrink-0 font-display text-sm font-semibold text-accent sm:w-44 lg:w-52">
                  {group.category}
                </span>

                {/* Skills inline */}
                <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm leading-relaxed text-muted sm:text-base">
                  {group.items.map((item, i) => (
                    <span key={item} className="flex items-center gap-3">
                      <span className="transition-colors group-hover:text-foreground">
                        {item}
                      </span>
                      {/* Separator dot — hidden after the last item */}
                      {i < group.items.length - 1 && (
                        <span className="opacity-25">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
