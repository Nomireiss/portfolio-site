"use client";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(90deg, #DAD3E3 0%, #C2C8DF 52%, #A9B6D6 100%)",
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
              color: "rgba(46,58,92,0.75)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#2E3A5C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(46,58,92,0.75)")}
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
            color: "#2E3A5C",
            margin: 0,
          }}
        >
          Always up for a good puzzle<span style={{ color: "#4F6092" }}>.</span>
        </h2>

        {/* Button + status */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <a
            href="mailto:nomi.reiss@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center",
              height: "52px", padding: "0 32px",
              border: "1.5px solid rgba(46,58,92,0.4)",
              borderRadius: "9999px",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem", fontWeight: 500,
              color: "#2E3A5C",
              textDecoration: "none",
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4F6092";
              e.currentTarget.style.borderColor = "#4F6092";
              e.currentTarget.style.color = "#FBF8F3";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(46,58,92,0.4)";
              e.currentTarget.style.color = "#2E3A5C";
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
              color: "rgba(46,58,92,0.75)",
            }}>
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{
        alignItems: "flex-end",
        borderTop: "1px solid rgba(46,58,92,0.25)",
        marginTop: "48px",
        paddingTop: "24px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(46,58,92,0.7)" }}>
            nomi.reiss@gmail.com
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(46,58,92,0.7)" }}>
            Toronto / Remote
          </span>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(46,58,92,0.5)" }}>
            NOMI &copy;{new Date().getFullYear()}
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
