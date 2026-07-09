"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Share2 } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

/**
 * Full-width sticky navbar.
 *
 * – Spans the full viewport width with symmetric padding (no centred max-width
 *   on the bar itself) so it reads as a continuous header like the reference.
 * – Content sections below still use max-w-5xl, so the nav feeling wider is
 *   intentional — it anchors the top of the page.
 * – Transparent on top; becomes a restrained bordered bar once the user scrolls.
 * – Active link tracked via IntersectionObserver on desktop.
 * – Mobile keeps logo + share/download only — scroll is the primary navigation.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#work");
  const [shareLabel, setShareLabel] = useState("Share");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /** Native share sheet on mobile; clipboard fallback elsewhere. */
  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: `${profile.name} — ${profile.role}`,
      text: profile.tagline,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      setShareLabel("Copied!");
      window.setTimeout(() => setShareLabel("Share"), 2000);
    } catch {
      // User dismissed the share sheet — no feedback needed.
    }
  };

  const actionButtonClass =
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-white/10";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          AW<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/8"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={handleShare}
            className={actionButtonClass}
            aria-label="Share portfolio"
          >
            <Share2 className="h-3.5 w-3.5" />
            {shareLabel}
          </button>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFilename}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent/90"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={handleShare}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Share portfolio"
          >
            <Share2 className="h-4 w-4" />
          </button>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFilename}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Download CV"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
