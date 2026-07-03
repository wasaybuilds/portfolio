"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

/** How long the marquee stays paused after touch ends so taps can register. */
const TOUCH_RESUME_DELAY_MS = 700;

export function Certifications() {
  const loopItems = [...certifications, ...certifications];
  const [paused, setPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseMarquee = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setPaused(true);
  };

  const scheduleResume = (delay = TOUCH_RESUME_DELAY_MS) => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & continuous learning."
          description="Formal recognition from Meta, HackerRank, and Webflow backing up the hands-on experience."
        />
      </div>

      <div
        className="relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onPointerDown={pauseMarquee}
        onPointerUp={() => scheduleResume()}
        onPointerCancel={() => scheduleResume(300)}
        onPointerLeave={(event) => {
          // Touch taps lift off the track right away — let scheduleResume handle those.
          if (event.pointerType === "touch") return;

          if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current);
            resumeTimerRef.current = null;
          }
          setPaused(false);
        }}
      >
        <div
          className={`animate-marquee flex w-max shrink-0 gap-5 pr-5 hover:[animation-play-state:paused] active:[animation-play-state:paused] ${
            paused ? "[animation-play-state:paused]" : ""
          }`}
        >
          {loopItems.map((cert, index) => (
            <a
              key={`${cert.name}-${index}`}
              href={cert.url ?? "#"}
              target={cert.url ? "_blank" : undefined}
              rel={cert.url ? "noopener noreferrer" : undefined}
              className={`flex w-72 shrink-0 flex-col justify-between rounded-2xl card-glass p-6 transition-colors ${
                cert.url ? "hover:border-accent/40" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Award className="h-4 w-4" />
                </div>
                {cert.url && (
                  <ExternalLink className="h-4 w-4 text-muted" />
                )}
              </div>
              <div className="mt-6">
                <h3 className="font-display text-base leading-snug font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
