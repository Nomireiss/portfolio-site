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
        {[
          { label: "LinkedIn", href: "https://www.linkedin.com/in/nomi-reiss-8a7a69b7" },
          { label: "Read.cv", href: "https://read.cv/nomireiss" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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
            {label}
          </a>
        ))}
      </div>

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "1000px" }}>
        {/* Heading with word-fade */}
        <h2
          style={{
            fontFamily: '"Manrope", Inter, sans-serif',
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: 0,
          }}
        >
          Always up for a good puzzle.
        </h2>

        {/* Button + status */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <a
            href="mailto:nomi.reiss@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center",
              height: "52px", padding: "0 32px",
              border: "1.5px solid rgba(255,255,255,0.8)",
              borderRadius: "9999px",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem", fontWeight: 500,
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0D99FF";
              e.currentTarget.style.borderColor = "#0D99FF";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get in Touch
          </a>

          {/* Available indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
      <div className="grid grid-cols-1 md:grid-cols-3" style={{
        alignItems: "flex-end",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "24px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            nomi.reiss@gmail.com
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            Toronto / Remote
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
