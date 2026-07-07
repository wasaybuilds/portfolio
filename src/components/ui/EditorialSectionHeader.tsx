import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type EditorialSectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  className?: string;
};

/**
 * EditorialSectionHeader gives every section the same intentional rhythm:
 * a large quiet index, a precise label, and one strong title line.
 */
export function EditorialSectionHeader({
  index,
  label,
  title,
  description,
  meta,
  className = "mb-10",
}: EditorialSectionHeaderProps) {
  return (
    <Reveal className={className}>
      <div className="border-t border-border pt-5">
        <div className="grid gap-5 sm:grid-cols-[8rem_1fr] sm:gap-8">
          <div>
            <div className="font-display text-6xl font-bold leading-none tracking-[-0.08em] text-foreground/10 sm:text-7xl">
              {index}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {label}
            </div>
          </div>

          <div className="min-w-0 pt-1 sm:pt-3">
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              {meta ? <div className="shrink-0 text-xs text-muted">{meta}</div> : null}
            </div>
            <h2 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
