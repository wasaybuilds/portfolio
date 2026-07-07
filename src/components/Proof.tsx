"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { proof } from "@/lib/data";

/**
 * Parses a metric string like "370%", "3+", "1,000+" into its numeric
 * part and the surrounding suffix so we can animate only the digits.
 */
function parseMetric(raw: string): { num: number; prefix: string; suffix: string } {
  // Strip commas for parsing, keep them for display
  const cleaned = raw.replace(/,/g, "");
  const match = cleaned.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
  };
}

/** Formats a number back with comma-thousands for display. */
function formatNum(n: number): string {
  return Math.floor(n).toLocaleString("en-US");
}

/**
 * CountUp — animates from 0 to `target` over `duration` ms
 * once the containing element scrolls into view.
 */
function CountUp({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const { num, prefix, suffix } = parseMetric(value);
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            /* ease-out-cubic so the counter decelerates into the final value */
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(eased * num);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNum(displayed)}
      {suffix}
    </span>
  );
}

/**
 * Proof section — animated count-up metrics displayed as a full-width grid.
 * Numbers run from 0 to their target the moment the section enters the viewport.
 */
export function Proof() {
  return (
    <section className="relative px-5 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">

        {/* ---------- Section label ---------- */}
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
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
              <div className="group flex flex-col gap-3 bg-background p-8 transition-colors duration-300 hover:bg-background-soft lg:p-10">
                {/* Big number — counts up on scroll */}
                <div className="font-display text-5xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-6xl">
                  <CountUp value={item.value} />
                </div>

                <div className="font-medium text-foreground">{item.label}</div>
                <div className="text-sm leading-snug text-muted">{item.note}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
