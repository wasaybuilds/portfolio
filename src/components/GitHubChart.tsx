"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Contribution heatmap tinted to the active theme accent.
 * ghchart.rshah.org takes a hex without `#` in the path.
 */
export function GitHubChart({ user }: { user: string }) {
  const { theme } = useTheme();
  const [hex, setHex] = useState("8fb3c9");

  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--chart-color")
      .trim();
    if (value) setHex(value);
  }, [theme]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://ghchart.rshah.org/${hex}/${user}`}
      alt="GitHub contribution chart"
      className="h-auto w-full min-w-150 opacity-80"
      loading="lazy"
    />
  );
}
