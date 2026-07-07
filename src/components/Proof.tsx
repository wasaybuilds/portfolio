import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { proof } from "@/lib/data";

/**
 * Proof section — large, headline-worthy metrics displayed as a full-width grid.
 *
 * The goal is to give sceptical visitors fast, scannable evidence of real
 * impact. Inspired by the "Receipts" approach: numbers, not promises.
 */
export function Proof() {
  return (
    <section className="relative px-6 py-24 sm:py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              By the numbers
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        {/* ---------- Metric grid ---------- */}
        <RevealGroup
          className="grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {proof.map((item) => (
            <RevealItem key={item.label}>
              <div className="group flex flex-col gap-3 bg-background p-8 transition-colors hover:bg-background-soft lg:p-10">
                {/* Big number */}
                <div className="font-display text-5xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-6xl">
                  {item.value}
                </div>

                {/* Label */}
                <div className="font-medium text-foreground">{item.label}</div>

                {/* Supporting note */}
                <div className="mt-1 text-sm leading-snug text-muted">{item.note}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
