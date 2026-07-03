import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06060a",
          borderRadius: 8,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#f4f4f8",
          }}
        >
          AW
          <span style={{ color: "#7c5cff" }}>.</span>
        </div>
      </div>
    ),
    size
  );
}
