import { Chapter } from "@/components/ui/Chapter";
import { ScrollText } from "@/components/ui/ScrollScene";
import { Reveal } from "@/components/ui/Reveal";
import { education, profile } from "@/lib/data";

/**
 * About — the plain-language chapter. Paragraphs light up word by word as the
 * reader moves through them, which is the only ornament this section gets.
 */
export function About() {
  return (
    <Chapter
      id="about"
      index="03"
      label="About"
      title="How I work."
      description="Three years of building the parts of a product that have to be correct before they can be impressive."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-6">
          {profile.about.map((paragraph, i) => (
            <ScrollText
              key={i}
              className="text-sm leading-relaxed text-foreground/80 sm:text-base"
            >
              {paragraph}
            </ScrollText>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            <div className="py-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Based in
              </div>
              <div className="mt-2 font-medium text-foreground">
                {profile.location}
              </div>
              <div className="mt-0.5 text-sm text-muted">
                Working remotely with teams in the US, UK, EU and the Gulf.
              </div>
            </div>

            <div className="py-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Education
              </div>
              <div className="mt-2 font-medium text-foreground">
                {education.school}
              </div>
              <div className="mt-0.5 text-sm text-muted">
                {education.degree} · {education.period}
              </div>
            </div>

            <div className="py-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Currently
              </div>
              <div className="mt-2 text-sm text-muted">
                Leading product operations at Hatzs Dimensions, and still
                writing the code I ask other people to review.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Chapter>
  );
}
