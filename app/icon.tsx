import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
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
          background: "linear-gradient(135deg, #10233F 0%, #5B2BA8 60%, #F04483 100%)",
          borderRadius: "10px",
          color: "#FFB52E",
          fontSize: "24px",
          fontWeight: "bold",
          boxShadow: "0 4px 12px rgba(16, 35, 63, 0.4)",
        }}
      >
        🏰
      </div>
    ),
    { ...size }
  );
}
