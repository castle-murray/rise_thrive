import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#C5A035",
          color: "#2A2118",
          fontSize: 26,
          fontWeight: 700,
        }}
      >
        RT
      </div>
    ),
    size,
  );
}
