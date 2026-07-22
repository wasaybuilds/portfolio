export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      {/* Soft accent wash — gives light themes atmosphere without glow orbs */}
      <div className="atmosphere-wash absolute inset-0" aria-hidden />
      <div className="absolute inset-0 noise-overlay mix-blend-overlay" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
