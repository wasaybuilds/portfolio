import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

/**
 * Contact section — full-width editorial CTA.
 *
 * The headline fills the section at display scale so it reads as a clear,
 * confident invitation rather than a generic form block. Social links sit
 * below in a minimal row.
 */
export function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-14 sm:py-24">
      <div className="mx-auto max-w-5xl">

        <EditorialSectionHeader
          index="09"
          label="Contact"
          title="Ready for the next serious build."
        />

        {/* ---------- Headline ---------- */}
        <Reveal>
          <div className="overflow-hidden">
            <p className="font-display text-display-lg text-foreground">
              Let&apos;s build something
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-display text-display-lg text-accent">
              worth using.
            </p>
          </div>
        </Reveal>

        {/* ---------- Sub-copy + links ---------- */}
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Senior full-stack help for serious products, SaaS builds, and
            production systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.03]"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
