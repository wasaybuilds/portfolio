/**
 * MarqueeDivider — an editorial scrolling text strip used as a chapter break
 * between major page sections. Purely decorative (aria-hidden), quiet by
 * default: oversized ghost type with a small accent star, matching the
 * hero ticker's visual language.
 */
export function MarqueeDivider({ text }: { text: string }) {
  const items = Array.from({ length: 6 }, () => text);

  return (
    <div
      aria-hidden
      className="relative flex overflow-hidden border-y border-border py-3 mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:py-4"
    >
      <div className="animate-marquee flex w-max shrink-0 items-center gap-8 pr-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl font-semibold uppercase tracking-tighter whitespace-nowrap text-foreground/10 sm:text-4xl"
          >
            {item}
            <span className="text-sm text-accent/50 sm:text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
