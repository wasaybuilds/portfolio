import { ArrowUpRight } from "lucide-react";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { clientWork } from "@/lib/data";

/**
 * ClientWork section — CMS & freelance builds shown as an editorial list.
 *
 * Each row links directly to the live site and shows the platform used.
 * Sits directly below the flagship Projects section to demonstrate the
 * full breadth of delivery: SaaS products *and* polished client builds.
 */
export function ClientWork() {
  return (
    <section id="client-work" className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="02"
          label="Client Builds"
          title="Fast client sites, shipped with taste."
          meta={`${clientWork.length} sites`}
        />

        {/* ---------- Site list ---------- */}
        <div>
          {clientWork.map((site, index) => (
            <Reveal key={site.url} delay={index * 0.04}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-row group flex items-center gap-4 py-5 sm:gap-6"
              >
                {/* Index */}
                <span className="w-7 shrink-0 font-display text-xs font-semibold tabular-nums text-muted transition-colors group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Site name + category */}
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-4">
                  <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-accent sm:text-xl">
                    {site.name}
                  </span>
                  <span className="text-sm text-muted">{site.category}</span>
                </div>

                {/* Platform badge */}
                <span className="hidden shrink-0 rounded-full border border-border px-3 py-0.5 text-xs font-medium text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground sm:block">
                  {site.platform}
                </span>

                {/* Arrow */}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
