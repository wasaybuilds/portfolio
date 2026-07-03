import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, profile } from "@/lib/data";
import { GraduationCap, Sparkles } from "lucide-react";

const focusAreas = [
  {
    title: "Product-Minded Engineering",
    description:
      "I don't just build what's specced — I dig into the why, so what ships actually moves the metric.",
  },
  {
    title: "Performance & Accessibility",
    description:
      "Fast load times and inclusive interfaces aren't optional extras — they're baked into how I build.",
  },
  {
    title: "Cross-Functional Leadership",
    description:
      "From discovery to roadmap to shipped feature — I bridge design, engineering, and business goals.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A full stack engineer with a product brain."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" direction="right">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {profile.about.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-foreground" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl card-glass p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium text-foreground">{education.school}</div>
                <div className="text-sm text-muted">
                  {education.degree} · {education.period}
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 lg:col-span-2" stagger={0.12}>
            {focusAreas.map((area) => (
              <RevealItem key={area.title} direction="left">
                <div className="group h-full rounded-2xl card-glass p-6 transition-colors hover:border-accent/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-2">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{area.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
