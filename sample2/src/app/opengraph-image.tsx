import { ImageResponse } from "next/og";

export const alt = "Rise & Thrive Support Services — Nurturing Growth. Inspiring Hope.";
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
          background: "#0E3D2C",
          padding: 72,
        }}
      >
        <div style={{ color: "#E8C547", fontSize: 18, letterSpacing: 8 }}>
          PORTSMOUTH, VIRGINIA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#F6EDD9", fontSize: 68, fontWeight: 600 }}>Rise & Thrive</div>
          <div style={{ color: "#E8C547", fontSize: 28, marginTop: 16 }}>
            Nurturing Growth. Inspiring Hope.
          </div>
          <div style={{ color: "#F6EDD9", fontSize: 18, marginTop: 28, letterSpacing: 3 }}>
            RESIDENTIAL GROUP HOME FOR YOUTH AGES 10–17
          </div>
        </div>
      </div>
    ),
    size,
  );
}
