"use client";

const MONA = '"Manrope", Inter, sans-serif';
const INTER = "Inter, sans-serif";

export default function SynthesisSection() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 65%), linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 10px 10px, 10px 10px",
        padding: "100px 0",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-6">

        {/* Centred heading + subtext */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 64px",
          }}
        >
          <h2
            style={{
              fontFamily: MONA,
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#0A0A0A",
              margin: "0 0 24px",
            }}
          >
            Finding Our Alignment.
          </h2>
          <p
            style={{
              fontFamily: INTER,
              fontSize: "1.05rem",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "#3A3A3A",
              margin: 0,
            }}
          >
            Great products aren&rsquo;t built in a vacuum. They happen when
            specialized design meets a clear business need. I treat this portfolio
            as a logic test: an opportunity to show how my skills in system
            architecture and AI-first workflows can solve the specific challenges
            your team is facing. This is the &ldquo;Strategic Grey Area,&rdquo;
            where we stop guessing and start building.
          </p>
        </div>

        {/* GIF */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <img
            src="/Scene (3).gif"
            alt="Finding Our Alignment"
            style={{
              width: "auto",
              maxWidth: "100%",
              maxHeight: "calc(100vh - 320px)",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

      </div>
    </div>
  );
}
