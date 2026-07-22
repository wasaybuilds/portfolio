"use client";

import { Palette } from "lucide-react";
import { THEMES, useTheme } from "@/components/ThemeProvider";

/**
 * Cycles Editorial → Ink → Classic so you can A/B the palette live.
 * Persists via ThemeProvider / localStorage.
 */
export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <button
      type="button"
      onClick={cycleTheme}
      title={`Theme: ${current.label} — ${current.hint}. Click to cycle.`}
      aria-label={`Current theme ${current.label}. Click to switch theme.`}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground/10"
    >
      <Palette className="h-3.5 w-3.5 text-accent" />
      <span className="hidden sm:inline">{current.label}</span>
    </button>
  );
}
