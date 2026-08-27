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
          background: "linear-gradient(135deg, #10233F 0%, #5B2BA8 60%, #F04483 100%)",
          borderRadius: "36px",
          color: "#FFB52E",
          fontSize: "90px",
          fontWeight: "bold",
          boxShadow: "0 8px 24px rgba(16, 35, 63, 0.4)",
        }}
      >
        🏰
      </div>
    ),
    { ...size }
  );
}
