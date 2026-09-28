import { ImageResponse } from "next/og";

export const alt = "Claudinei de Lima | Desenvolvedor de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700 }}>Claudinei de Lima</div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#a3a3a3" }}>
          Desenvolvedor de Software
        </div>
        <div
          style={{ width: 160, height: 8, background: "#2563eb", marginTop: 40 }}
        />
        <div style={{ fontSize: 32, marginTop: 40, color: "#d4d4d4" }}>
          Front-end · Mobile · Java · Flutter · Next.js · Firebase
        </div>
      </div>
    ),
    size
  );
}
