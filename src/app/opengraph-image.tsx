import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Houssem Darragi | Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #030712 0%, #111827 50%, #1e1b4b 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#6366f1",
            color: "white",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          HD
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f9fafb",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Houssem Darragi
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a5b4fc",
            marginBottom: 40,
          }}
        >
          Full-Stack Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
          }}
        >
          houssemdarragi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
