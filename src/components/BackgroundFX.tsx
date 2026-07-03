export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full opacity-30 blur-[120px] animate-blob"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full opacity-25 blur-[120px] animate-blob"
        style={{
          background: "radial-gradient(circle, var(--accent-2), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full opacity-20 blur-[120px] animate-blob"
        style={{
          background: "radial-gradient(circle, var(--accent-3), transparent 70%)",
          animationDelay: "-11s",
        }}
      />
      <div
        className="absolute inset-0 noise-overlay mix-blend-overlay"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
