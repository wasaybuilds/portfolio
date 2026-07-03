import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-sm font-medium tracking-wide text-accent-2 uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 section-heading-line" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base text-muted sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
