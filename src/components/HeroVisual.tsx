"use client";

import { motion } from "framer-motion";
import { Braces, Cloud, Server, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/lib/data";

const floatingBadges = [
  {
    icon: Braces,
    label: "TypeScript",
    className: "-left-6 top-6 sm:-left-10 sm:top-10",
    delay: 0,
  },
  {
    icon: Server,
    label: "Node.js",
    className: "-right-4 top-24 sm:-right-8 sm:top-28",
    delay: 1.4,
  },
  {
    icon: Cloud,
    label: "AWS",
    className: "-left-8 bottom-28 sm:-left-12 sm:bottom-32",
    delay: 0.7,
  },
  {
    icon: Terminal,
    label: "Python",
    className: "-right-6 bottom-8 sm:-right-10 sm:bottom-12",
    delay: 2.1,
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block xl:max-w-md">
      <div className="absolute inset-10 rounded-full bg-gradient-to-br from-accent/30 via-accent-2/20 to-accent-3/25 opacity-70 blur-3xl" />

      <div className="absolute inset-6 rounded-full border border-dashed border-white/10 animate-spin-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 flex h-full flex-col items-center justify-center rounded-[2rem] card-glass p-10 text-center shadow-2xl shadow-black/40"
      >
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-background-soft font-display text-2xl font-bold text-foreground">
            AW
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 ring-4 ring-background">
            <span className="h-2 w-2 rounded-full bg-background-soft" />
          </span>
        </div>

        <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
          {profile.name}
        </h3>
        <p className="mt-1 max-w-[14rem] text-sm text-muted">{profile.role}</p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent-2" />
          Performance-focused full stack engineer
        </div>
      </motion.div>

      {floatingBadges.map(({ icon: Icon, label, className, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 + delay * 0.15 }}
          className={`animate-float absolute z-20 flex items-center gap-2 rounded-full card-glass px-3 py-2 text-xs font-medium whitespace-nowrap text-foreground shadow-lg shadow-black/30 ${className}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="h-3.5 w-3.5 text-accent-2" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
