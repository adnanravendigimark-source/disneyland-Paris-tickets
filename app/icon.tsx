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
          background: "linear-gradient(135deg, #102A5C 0%, #172F6B 60%, #E94B83 100%)",
          borderRadius: "10px",
          color: "#D6A84F",
          fontSize: "24px",
          fontWeight: "bold",
          boxShadow: "0 4px 12px rgba(16, 42, 92, 0.4)",
        }}
      >
        🏰
      </div>
    ),
    { ...size }
  );
}
