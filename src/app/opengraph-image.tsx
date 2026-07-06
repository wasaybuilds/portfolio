import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates the Open Graph preview card shown when the portfolio URL is shared
 * on WhatsApp, Telegram, Twitter, LinkedIn, iMessage, etc.
 *
 * Uses Next.js ImageResponse (satori-based) which renders a subset of React JSX
 * with flexbox-only CSS at build time — no browser required.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080a0f",
          padding: "60px 70px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row — logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1.5px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: -1,
              color: "#f2f2f7",
            }}
          >
            AW
          </div>
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Centre — name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Orange accent bar */}
          <div
            style={{
              width: 56,
              height: 4,
              borderRadius: 99,
              background: "#f97316",
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f2f2f7",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#f97316",
              letterSpacing: -0.5,
            }}
          >
            {profile.role}
          </div>
        </div>

        {/* Bottom row — tagline + location */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            {profile.tagline}
          </div>
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.25)",
              whiteSpace: "nowrap",
            }}
          >
            {profile.location}
          </div>
        </div>
      </div>
    ),
    size
  );
}
