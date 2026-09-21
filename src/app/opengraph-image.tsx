import { ImageResponse } from "next/og";

export const alt = "Rise & Thrive Support Services — Nurturing Growth, Inspiring Hope.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F0E6",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 999,
            border: "2px solid #2C5A3C",
            alignItems: "center",
            justifyContent: "center",
            color: "#2C5A3C",
            fontSize: 28,
          }}
        >
          RT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#2C5A3C", fontSize: 72, lineHeight: 1.05, fontWeight: 600 }}>
            Rise & Thrive
          </div>
          <div style={{ color: "#6B6258", fontSize: 28, marginTop: 16 }}>
            Nurturing Growth, Inspiring Hope.
          </div>
          <div style={{ color: "#2C5A3C", fontSize: 20, marginTop: 28, letterSpacing: 4 }}>
            A RESIDENTIAL GROUP HOME FOR YOUTH
          </div>
        </div>
      </div>
    ),
    size,
  );
}
