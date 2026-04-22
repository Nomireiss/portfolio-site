import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONO = "'JetBrains Mono', 'Courier New', monospace";
const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';
const INTER = "Inter, sans-serif";

/* ─── Typography primitives ───────────────────────────────────── */

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{
      margin: "0 0 28px",
      paddingLeft: "20px",
      borderLeft: "3px solid #0A0A0A",
      fontFamily: INTER,
      fontSize: "1.1rem",
      fontStyle: "italic",
      lineHeight: 1.8,
      color: "#3A3A3A",
    }}>
      {children}
    </blockquote>
  );
}

function BulletItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
      <span style={{ color: "#A3A3A3", flexShrink: 0, marginTop: "3px" }}>→</span>
      <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#3A3A3A", margin: 0 }}>
        <strong style={{ color: "#0A0A0A", fontWeight: 600 }}>{label} </strong>
        {children}
      </p>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", marginBottom: "16px" }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: MONA,
      fontWeight: 300,
      fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
      lineHeight: 0.96,
      letterSpacing: "-0.025em",
      color: "#0A0A0A",
      margin: "0 0 32px",
    }}>
      {children}
    </h2>
  );
}

/* ─── Image placeholder ───────────────────────────────────────── */

function ImagePlaceholder({ label, aspectRatio = "16/9" }: { label?: string; aspectRatio?: string }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio,
      background: "#F2F2F2",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #E8E8E8",
      margin: "40px 0",
    }}>
      <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "#B5B5B5" }}>
        {label ?? "Image — to be provided"}
      </span>
    </div>
  );
}

/* ─── Sidebar comment card ────────────────────────────────────── */

function SidebarComment({ label, mention, children }: { label: string; mention?: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "2px solid #E5E5E5", paddingLeft: "16px" }}>
      <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.12em", color: "#555555", textTransform: "uppercase", marginBottom: "10px" }}>
        {label}
      </p>
      {mention && (
        <p style={{ fontFamily: INTER, fontSize: "1rem", color: "#4497F7", fontWeight: 600, marginBottom: "10px" }}>
          {mention}
        </p>
      )}
      <div style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#1A1A1A" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── 70/30 section grid ──────────────────────────────────────── */

function SectionGrid({ main, sidebar }: { main: React.ReactNode; sidebar: React.ReactNode }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "7fr 3fr",
      gap: "clamp(2rem, 5vw, 72px)",
      alignItems: "start",
    }}>
      <div>{main}</div>
      <aside style={{ position: "sticky", top: "120px", alignSelf: "start", display: "flex", flexDirection: "column", gap: "32px" }}>
        {sidebar}
      </aside>
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function SeeTreePage() {
  const pad = "clamp(1rem, 6.94vw, 80px)";

  return (
    <>
      <Navigation forceColored />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: pad, paddingRight: pad }}>

          {/* Back */}
          <div style={{ paddingTop: "40px", paddingBottom: "56px" }}>
            <Link href="/#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: INTER, fontSize: "0.85rem", fontWeight: 500, color: "#737373", textDecoration: "none" }}
              className="hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft size={15} /> All Work
            </Link>
          </div>

          {/* ── PROJECT HEADER — full width ──────────────────── */}
          <header style={{ paddingBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A3A3A3" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase" }}>
                Case Study · AgriTech / GIS · 2023
              </span>
            </div>

            <h1 style={{
              fontFamily: MONA,
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 4.2vw, 5.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
              margin: "0 0 48px",
            }}>
              Digitizing the Orchard:
              <br />
              <span style={{ fontWeight: 800 }}>The Intelligence-First Pivot.</span>
            </h1>

            {/* Metadata row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}>
              {[
                { label: "Client", value: "SeeTree" },
                { label: "Role", value: "Principal Product Designer" },
                { label: "Scope", value: "Mobile App + Manager Dashboard" },
                { label: "Year", value: "2023" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 500, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── SECTION 1: THE AGRICULTURAL DATA GAP ────────── */}
          <SectionGrid
            main={
              <>
                <ImagePlaceholder label="SeeTree Platform — Hero Shot" aspectRatio="16/10" />
                <PullQuote>
                  &ldquo;I joined SeeTree to transform a fragmented collection of drone maps
                  and sensor logs into a unified, actionable &lsquo;Medical File&rsquo; for
                  every tree. The challenge was to create a design system that scaled from
                  the muddy reality of field scouting to the high-level strategic needs of
                  enterprise agronomists.&rdquo;
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Annotation: The Environment">
                The &ldquo;Messy Middle&rdquo; here was literal. We had to design for 40°C
                heat, screen glare, and zero-latency requirements in areas with no Wi-Fi.
                This wasn&rsquo;t just a UI challenge; it was a physics challenge.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 2: THE MEDICAL FILE ──────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Core Logic</SectionEyebrow>
                <SectionHeading>
                  Beyond the Map:<br />
                  <span style={{ fontWeight: 800 }}>Architecting Actionable Insights.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I led the redesign of the core SeeTree experience, shifting the
                  focus from passive observation to proactive management. By introducing a
                  &lsquo;Mission-Based&rsquo; architecture, we ensured that every user —
                  from the scout in the field to the manager in the office — knew exactly
                  which &lsquo;at-risk&rsquo; trees required immediate intervention.&rdquo;
                </PullQuote>
                <BulletItem label="The GIS System:">
                  Re-engineering the MapConnect logic to handle 2M+ data points without
                  cognitive overload.
                </BulletItem>
                <BulletItem label="The Hierarchy:">
                  Creating a &ldquo;Tree-level&rdquo; detail view that aggregated drone
                  imagery, soil sensors, and historical growth data into a single source
                  of truth.
                </BulletItem>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "12px" }}>
                  {["MapConnect — GIS Redesign", "Tree Medical File — Detail View"].map(l => (
                    <div key={l} style={{ aspectRatio: "4/3", background: "#F2F2F2", borderRadius: "10px", border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#B5B5B5", textAlign: "center", padding: "0 12px" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="Technical Logic">
                We moved from &ldquo;feature-based&rdquo; navigation to
                &ldquo;outcome-based&rdquo; navigation. I audited the workflow of 50+
                field scouts to ensure the most critical &ldquo;Spray/Don&rsquo;t
                Spray&rdquo; data was never more than two taps away.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 3: THE MULTI-PERSONA SYSTEM ─────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Scale</SectionEyebrow>
                <SectionHeading>
                  One System,<br /><span style={{ fontWeight: 800 }}>Two Realities.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I architected a cross-platform design language that maintained
                  brand integrity while adapting to vastly different environmental
                  constraints. The high-contrast, &lsquo;big-button&rsquo; mobile UI
                  enabled rapid data entry in the field, while the expansive, data-rich
                  desktop dashboard provided the &lsquo;God-view&rsquo; required for
                  global orchard management.&rdquo;
                </PullQuote>
                <BulletItem label="The Component Library:">
                  Built for scalability to accommodate 8+ different agricultural sectors
                  (Citrus, Nuts, Coffee, etc.).
                </BulletItem>
                <BulletItem label="The Handshake:">
                  Ensuring field data synced seamlessly with executive reports, closing
                  the loop on agricultural ROI.
                </BulletItem>
                <ImagePlaceholder label="Mobile Scout App + Manager Dashboard" aspectRatio="16/9" />
              </>
            }
            sidebar={
              <SidebarComment label="Annotation: The Two UIs">
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#0A0A0A" }}>Mobile:</strong> High-contrast,
                  large tap targets, offline-first. Designed for sunlight and muddy gloves.
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: "#0A0A0A" }}>Desktop:</strong> Data-dense,
                  multi-panel, GIS-first. Designed for strategic oversight across
                  thousands of hectares.
                </p>
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 4: THE RESOLUTION ────────────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <SectionGrid
              main={
                <>
                  <SectionEyebrow>The Resolution</SectionEyebrow>
                  <SectionHeading>
                    Stability Found:<br /><span style={{ fontWeight: 800 }}>The Result of Clarity.</span>
                  </SectionHeading>
                  <PullQuote>
                    &ldquo;The impact was immediate. By resolving the ambiguity of the
                    field-to-office data loop, we achieved a 40% reduction in labour hours
                    for Tier 1 agribusiness clients. We didn&rsquo;t just build an app; we
                    built a global standard for agricultural intelligence.&rdquo;
                  </PullQuote>
                  <ImagePlaceholder label="Impact — Field-to-Office Data Loop" aspectRatio="16/9" />
                </>
              }
              sidebar={
                <SidebarComment label="Final Take" mention="@Hiring Manager">
                  If you want to talk about GIS logic, high-latency data syncing, or
                  designing for extreme physical environments, this is the project we should
                  discuss. It&rsquo;s the ultimate proof that I can bring order to any
                  environment.
                </SidebarComment>
              }
            />
          </section>

          {/* ── MORE WORK ────────────────────────────────────── */}
          <section style={{ borderTop: "1px solid #E5E5E5", paddingTop: "64px", paddingBottom: "120px" }}>
            <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", marginBottom: "32px" }}>
              More Work
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
              {[
                { title: "Nylas", year: "©24", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
                { title: "ShyMama", year: "©23", image: "/ShyMama Mockup.png", href: "/work/shymama" },
              ].map((project) => (
                <div
                  key={project.title}
                  onClick={() => project.href && (window.location.href = project.href)}
                  style={{ cursor: project.href ? "pointer" : "default" }}
                >
                  <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: "16px", overflow: "hidden", marginBottom: "14px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p style={{ fontFamily: MONA, fontSize: "1rem", fontWeight: 600, color: "#0A0A0A", margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </p>
                  <p style={{ fontFamily: INTER, fontSize: "0.8rem", color: "#A3A3A3", margin: 0 }}>
                    {project.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
