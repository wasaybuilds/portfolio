"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type PortfolioTheme = "ink" | "classic";

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: PortfolioTheme = "ink";

export const THEMES: {
  id: PortfolioTheme;
  label: string;
  hint: string;
}[] = [
  {
    id: "ink",
    label: "Ink",
    hint: "Blue charcoal · steel accent",
  },
  {
    id: "classic",
    label: "Classic",
    hint: "Near-black · orange",
  },
];

type ThemeContextValue = {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Applies theme to <html> so CSS variables + color-scheme update together.
 */
function applyTheme(theme: PortfolioTheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.add("dark");
}

/**
 * Resolves a stored value to a supported dark theme.
 * Migrates the removed light "editorial" preference to Ink.
 */
function resolveTheme(stored: string | null): PortfolioTheme {
  if (stored === "classic" || stored === "ink") return stored;
  return DEFAULT_THEME;
}

/**
 * ThemeProvider — dark-first. Default is Ink; Classic keeps the orange look.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>(DEFAULT_THEME);

  useEffect(() => {
    const initial = resolveTheme(window.localStorage.getItem(STORAGE_KEY));
    setThemeState(initial);
    applyTheme(initial);
    window.localStorage.setItem(STORAGE_KEY, initial);
  }, []);

  const setTheme = useCallback((next: PortfolioTheme) => {
    setThemeState(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const index = THEMES.findIndex((t) => t.id === current);
      const next = THEMES[(index + 1) % THEMES.length].id;
      applyTheme(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Access the active portfolio theme. Must be used under ThemeProvider.
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
