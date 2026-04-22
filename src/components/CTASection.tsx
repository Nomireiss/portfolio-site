"use client";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0A0A0A",
        minHeight: "unset",
        display: "flex",
        flexDirection: "column",
        padding: "clamp(1.5rem, 4vw, 48px) 0",
      }}
    >
      <div
        className="w-full max-w-[1280px] mx-auto px-6"
        style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
      {/* Top row — social links */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "32px" }}>
        {["LinkedIn", "Dribbble", "Read.cv"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "1000px" }}>
        {/* Heading with word-fade */}
        <h2
          style={{
            fontFamily: '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif',
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: 0,
          }}
        >
          Ready to resolve the ambiguity?
          <br />
          Let&rsquo;s make something inevitable.
        </h2>

        {/* Button + status */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <a
            href="mailto:hello@nomireiss.com"
            style={{
              display: "inline-flex", alignItems: "center",
              height: "52px", padding: "0 32px",
              border: "1.5px solid rgba(255,255,255,0.8)",
              borderRadius: "4px",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem", fontWeight: 500,
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.2s ease, color 0.2s ease",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#0A0A0A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Get in Touch
          </a>

          {/* Available indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              backgroundColor: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
            }} />
            <span style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem", fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
            }}>
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "flex-end",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "24px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            hello@nomireiss.com
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            Toronto / Remote
          </span>
        </div>

        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            Designed &amp; Built by Nomi Reiss
          </span>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            NOMI &copy;{new Date().getFullYear()}
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
