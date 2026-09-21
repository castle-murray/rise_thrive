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
          background: "#2C5A3C",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#F6F0E6",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          R
        </div>
      </div>
    ),
    size,
  );
}
