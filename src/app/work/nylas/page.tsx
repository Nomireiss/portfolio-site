import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONO = "'JetBrains Mono', 'Courier New', monospace";
const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';

/* ─── Sidebar primitives ──────────────────────────────────────── */

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: MONO, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "10px" }}>
      // {children}
    </p>
  );
}

function SidebarBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "2px solid #E5E5E5", paddingLeft: "14px" }}>
      <SidebarLabel>{label}</SidebarLabel>
      <div style={{ fontFamily: MONO, fontSize: "0.78rem", lineHeight: 1.7, color: "#3A3A3A" }}>
        {children}
      </div>
    </div>
  );
}

function Mention({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#4497F7", fontWeight: 500 }}>{children}</span>;
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
      <span style={{ color: "#A3A3A3", minWidth: "56px" }}>{label}</span>
      <span style={{ color: "#0A0A0A" }}>→ {value}</span>
    </div>
  );
}

/* ─── Image placeholder ───────────────────────────────────────── */

function ImagePlaceholder({ label, aspectRatio = "16/9" }: { label?: string; aspectRatio?: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        background: "#F5F5F5",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #E5E5E5",
      }}
    >
      <span style={{ fontFamily: MONO, fontSize: "0.75rem", color: "#A3A3A3" }}>
        {label ?? "Image — to be provided"}
      </span>
    </div>
  );
}

/* ─── Section divider ─────────────────────────────────────────── */

function Divider() {
  return <div style={{ borderTop: "1px solid #E5E5E5", margin: "80px 0" }} />;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function NylasPage() {
  return (
    <>
      <Navigation />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(1rem, 6.94vw, 80px)",
            paddingRight: "clamp(1rem, 6.94vw, 80px)",
          }}
        >

          {/* Back link */}
          <div style={{ paddingTop: "40px", paddingBottom: "56px" }}>
            <Link
              href="/#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#737373",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="hover:text-[#0A0A0A]"
            >
              <ArrowLeft size={15} />
              All Work
            </Link>
          </div>

          {/* ── SECTION 1: HERO ─────────────────────────────────── */}
          <section>

            {/* Category eyebrow */}
            <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#A3A3A3" }} />
              <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.14em", color: "#A3A3A3", textTransform: "uppercase" }}>
                Case Study · 2024 · Platform Design
              </span>
            </div>

            {/* 70 / 30 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "7fr 3fr",
                gap: "clamp(2rem, 5vw, 80px)",
                alignItems: "start",
              }}
            >

              {/* ── MAIN STAGE ── */}
              <div>
                {/* Headline */}
                <h1
                  style={{
                    fontFamily: MONA,
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.03em",
                    color: "#0A0A0A",
                    margin: "0 0 32px",
                  }}
                >
                  NYLAS:<br />
                  <span style={{ fontWeight: 700 }}>Engineering the<br />Agentic Era.</span>
                </h1>

                {/* Sub-headline */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "#3A3A3A",
                    maxWidth: "580px",
                    margin: "0 0 56px",
                  }}
                >
                  Scaling a developer-first platform from fragmented UI components
                  to a unified, AI-ready architectural ecosystem. This is a study
                  in operational design leadership.
                </p>

                {/* Hero image */}
                <ImagePlaceholder label="Nylas Dashboard — Hero Shot (100% Fidelity)" aspectRatio="16/10" />
              </div>

              {/* ── SIDEBAR ── */}
              <aside style={{ position: "sticky", top: "120px", alignSelf: "start", display: "flex", flexDirection: "column", gap: "36px" }}>

                <SidebarBlock label="Annotation: The Role">
                  <p style={{ marginBottom: "10px" }}>
                    <Mention>@Hiring Manager</Mention>
                  </p>
                  <p style={{ borderLeft: "2px solid #E5E5E5", paddingLeft: "10px", color: "#3A3A3A", marginBottom: 0 }}>
                    At Nylas, I&rsquo;m not just the &ldquo;Designer.&rdquo; I&rsquo;m the bridge
                    between Product and Engineering. My mandate: turn a sprawling
                    legacy platform into a high-velocity design system that can
                    handle the complexity of AI-to-AI communication.
                  </p>
                </SidebarBlock>

                <SidebarBlock label="Annotation: The Metric">
                  <MetricRow label="Status" value="100% Fidelity (Live)" />
                  <MetricRow label="Stack" value="Shadcn / Tailwind / React" />
                  <MetricRow label="Impact" value="Unified 4+ disparate product workstreams into a single, cohesive design language." />
                </SidebarBlock>

              </aside>
            </div>
          </section>

          <Divider />

          {/* ── SECTION 2: OPERATIONAL DESIGN PIVOT ─────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "7fr 3fr",
                gap: "clamp(2rem, 5vw, 80px)",
                alignItems: "start",
              }}
            >

              {/* ── MAIN STAGE ── */}
              <div>
                <h2
                  style={{
                    fontFamily: MONA,
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: "#0A0A0A",
                    margin: "0 0 28px",
                  }}
                >
                  From Pixels to Processes.
                </h2>

                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    lineHeight: 1.85,
                    color: "#3A3A3A",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: "600px",
                  }}
                >
                  <p>
                    Design leadership at this scale isn&rsquo;t about how the buttons
                    look; it&rsquo;s about how the buttons are <em>built</em>. I led the
                    transition to a modular system that empowers engineering velocity.
                  </p>
                  <p>
                    By pressure-testing the logic of our agentic infrastructure, we
                    reduced dev-handoff friction and stabilised the platform&rsquo;s
                    architectural maturity.
                  </p>
                </div>

                {/* Image placeholder for this section */}
                <div style={{ marginTop: "48px" }}>
                  <ImagePlaceholder label="System Architecture — Design Tokens & Component Map" aspectRatio="4/3" />
                </div>
              </div>

              {/* ── SIDEBAR ── */}
              <aside style={{ position: "sticky", top: "120px", alignSelf: "start", display: "flex", flexDirection: "column", gap: "36px" }}>

                <SidebarBlock label="Real-Talk Snippet">
                  <p style={{ color: "#3A3A3A", fontStyle: "italic", marginBottom: 0 }}>
                    &ldquo;We had a Design Debt problem. I solved it by treating the
                    Design System as a product in itself.&rdquo;
                  </p>
                </SidebarBlock>

                <SidebarBlock label="The Result">
                  <p style={{ marginBottom: "8px" }}>
                    <span style={{ color: "#0A0A0A", fontWeight: 600 }}>30% faster</span> deployment
                    cycles for new feature sets.
                  </p>
                  <p style={{ color: "#737373", fontSize: "0.73rem", marginBottom: 0 }}>
                    This is what Principal-level operational excellence looks like.
                  </p>
                </SidebarBlock>

              </aside>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
