import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rise & Thrive Support Services";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#F3E6CC",
          padding: 72,
        }}
      >
        <div style={{ color: "#8B6914", fontSize: 18, letterSpacing: 6 }}>AGES 10–17</div>
        <div style={{ color: "#2A2118", fontSize: 68, marginTop: 12 }}>Rise & Thrive</div>
        <div style={{ color: "#8B6914", fontSize: 28, marginTop: 12 }}>
          Nurturing Growth. Inspiring Hope.
        </div>
      </div>
    ),
    size,
  );
}
