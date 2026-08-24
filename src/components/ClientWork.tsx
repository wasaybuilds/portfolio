import { ArrowUpRight } from "lucide-react";
import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { clientWork } from "@/lib/data";

/**
 * ClientWork section — CMS & freelance builds shown as an editorial list.
 *
 * Each row links directly to the live site and shows the platform used.
 * Sits after Proof so the story goes: flagship products → receipts →
 * then breadth across client builds.
 */
export function ClientWork() {
  return (
    <Chapter
      id="client-work"
      index="06"
      label="Client Builds"
      title="Sites shipped for clients."
      description="Freelance and agency builds on WordPress, Shopify and Webflow. Every one is live — the links go straight to the running site."
      meta={`${clientWork.length} sites`}
    >
      <div className="border-t border-border">
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
    </Chapter>
  );
}
