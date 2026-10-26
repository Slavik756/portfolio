import { ImageResponse } from "next/og";

export const alt = "Viacheslav Pokora — Frontend and Fullstack Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 85px",
        color: "#ffffff",
        background: "linear-gradient(135deg, #080b0a 0%, #101d17 60%, #080b0a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 74,
            height: 74,
            borderRadius: 18,
            backgroundColor: "#123626",
            border: "2px solid #34d399",
            color: "#6ee7b7",
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          VP
        </div>

        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          DEVELOPER PORTFOLIO
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -3,
          }}
        >
          Viacheslav Pokora
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#6ee7b7",
            fontWeight: 600,
          }}
        >
          Frontend & Fullstack Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          React · Next.js · TypeScript · Node.js
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #244435",
          paddingTop: 28,
          fontSize: 21,
          color: "#a1a1aa",
        }}
      >
        <span>Based in France</span>

        <span style={{ color: "#6ee7b7" }}>AVAILABLE FOR OPPORTUNITIES ↗</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
