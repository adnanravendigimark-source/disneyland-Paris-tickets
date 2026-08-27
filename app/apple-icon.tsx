import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #102A5C 0%, #172F6B 60%, #E94B83 100%)",
          borderRadius: "36px",
          color: "#D6A84F",
          fontSize: "90px",
          fontWeight: "bold",
          boxShadow: "0 8px 24px rgba(16, 42, 92, 0.4)",
        }}
      >
        🏰
      </div>
    ),
    { ...size }
  );
}
