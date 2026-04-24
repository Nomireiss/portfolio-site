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
    <div style={{ borderLeft: "2px solid #EFF0F6", paddingLeft: "16px" }}>
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
    <div className="grid grid-cols-1 md:[grid-template-columns:7fr_3fr] items-start" style={{ gap: "clamp(2rem, 5vw, 72px)" }}>
      <div>{main}</div>
      <aside className="md:sticky md:top-[120px]" style={{ alignSelf: "start", display: "flex", flexDirection: "column", gap: "32px" }}>
        {sidebar}
      </aside>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function NylasPage() {
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
                Case Study · Platform Design · 2024
              </span>
            </div>

            <h1 style={{
              fontFamily: MONA,
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.2vw, 5.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
              margin: "0 0 48px",
            }}>
              The Unification Mandate:
              <br />
              <span style={{ fontWeight: 800 }}>Erasing the Friction of Fragmentation.</span>
            </h1>

            {/* Metadata row */}
            <div style={{
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }} className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: "Client", value: "Nylas" },
                { label: "Role", value: "Principal Product Designer" },
                { label: "Stack", value: "Shadcn / Tailwind / React" },
                { label: "Year", value: "2024" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 500, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "48px", borderRadius: "10px", overflow: "hidden" }}>
            <img src="/Nylas Hero.png" alt="Nylas Platform — Hero Shot" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* ── SECTION 1: THE ENTRY ─────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  Architecting for Velocity:<br />
                  <span style={{ fontWeight: 800 }}>The Dashboard Rebirth.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 20px" }}>
                  <strong style={{ color: "#0A0A0A" }}>The Mission:</strong> To transform a legacy developer dashboard into a unified, high-velocity architectural ecosystem.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  <strong style={{ color: "#0A0A0A" }}>The Problem:</strong> Nylas was facing a &ldquo;fragmentation tax.&rdquo; The existing dashboard was a collection of siloed features rather than a cohesive product. This slowed down engineering cycles, confused new users, and hindered the platform&rsquo;s ability to scale for the &ldquo;Agentic Era&rdquo; of AI.
                </p>
                <PullQuote>
                  &ldquo;I led the end-to-end redesign of the Nylas Dashboard, functioning as both a Principal Designer and a Strategic Product Partner. My goal was to eliminate the structural debt that was slowing us down and replace it with a design system built for speed, clarity, and the future of AI-integrated developer tools.&rdquo;
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="The Operational Bottleneck" mention="@Hiring Manager">
                This wasn&rsquo;t just a UI refresh. I identified that our &lsquo;Messy Middle&rsquo; was actually an operational bottleneck. By unifying our design and engineering handshakes, we didn&rsquo;t just change pixels&mdash;we changed how fast we could ship.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 2: THE CORE LOGIC ────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Core Logic</SectionEyebrow>
                <SectionHeading>
                  Systemizing<br />
                  <span style={{ fontWeight: 800 }}>the Handshake.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I spearheaded the migration to a modern technical stack using Shadcn and Tailwind, moving Nylas away from fragmented UI components toward a mature, documented Design System. This allowed us to treat the dashboard as a living architecture where new features&mdash;like our AI-to-AI communication tools&mdash;could be &lsquo;plugged in&rsquo; without breaking the existing logic.&rdquo;
                </PullQuote>
                <BulletItem label="Component Maturity:">
                  Audited and rebuilt the library to ensure 100% parity between design and code.
                </BulletItem>
                <BulletItem label="Engineering Velocity:">
                  Reduced the time from &ldquo;Design Intent&rdquo; to &ldquo;Production Ready&rdquo; by standardizing the implementation framework.
                </BulletItem>
                <div style={{ marginTop: "32px", transform: "scale(1.08)", transformOrigin: "left center" }}>
                  <img src="/Components.png" alt="NDS — Component Library" style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px" }} />
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="Technical Logic">
                We moved away from &lsquo;custom everything.&rsquo; I enforced a strict 1:1 token system between Figma and Tailwind. If it wasn&rsquo;t in the system, it wasn&rsquo;t in the product. This discipline is what allowed us to scale the dashboard for enterprise-level data density.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 3: THE SCALE ─────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Scale</SectionEyebrow>
                <SectionHeading>
                  Designing for<br /><span style={{ fontWeight: 800 }}>the Next Frontier.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;As Nylas moved into the &lsquo;Agentic Era,&rsquo; I focused on ensuring the dashboard could handle the increased complexity of AI-driven data flows. I redesigned the navigation and information architecture to prioritize &lsquo;Actionable Clarity,&rsquo; ensuring that developers could manage millions of data points without cognitive overload.&rdquo;
                </PullQuote>
                <BulletItem label="Universal Search:">
                  Built a &ldquo;Command-K&rdquo; style logic that moved beyond simple navigation to act as a global functional hub.
                </BulletItem>
                <BulletItem label="Onboarding Efficiency:">
                  Streamlined the time-to-first-API-call by reducing the &ldquo;clutter&rdquo; of legacy onboarding steps.
                </BulletItem>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginTop: "32px", alignItems: "start", transform: "scale(1.08)", transformOrigin: "left center" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img src="/Sandbox Email Explorer Step 2.png" alt="Sandbox Email Explorer" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img src="/KBD Search (1).png" alt="KBD Search" style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="The Agentic Era">
                The dashboard needed to transition from a &ldquo;Monitoring Tool&rdquo; to a &ldquo;Strategic Interface&rdquo; for the Agentic Era. Every navigation decision was made to surface the right signal at the right moment.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 4: THE RESOLUTION ────────────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <SectionGrid
              main={
                <>
                  <SectionEyebrow>The Resolution</SectionEyebrow>
                  <SectionHeading>
                    Stability Found:<br /><span style={{ fontWeight: 800 }}>The Principal Handover.</span>
                  </SectionHeading>
                  <PullQuote>
                    &ldquo;The redesign resulted in a unified platform that successfully supported the launch of our most complex AI features to date. By resolving the ambiguity of our legacy system, I provided Nylas with a stable foundation for the next decade of growth. This wasn&rsquo;t just a design win; it was an operational victory for the entire product org.&rdquo;
                  </PullQuote>
                </>
              }
              sidebar={
                <SidebarComment label="Final Take" mention="@Hiring Manager">
                  My Impact Review at Nylas highlighted my ability to &lsquo;increase velocity through clarity.&rsquo; I&rsquo;m not just a designer; I&rsquo;m an architect who ensures your team can build faster because the foundation is sound.
                </SidebarComment>
              }
            />
            <div style={{ marginTop: "48px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Nylas UI.png" alt="Results — System at Scale" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </section>

          {/* ── MORE WORK ────────────────────────────────────── */}
          <section style={{ borderTop: "1px solid #E5E5E5", paddingTop: "64px", paddingBottom: "120px" }}>
            <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", marginBottom: "32px" }}>
              More Work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "SeeTree", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
                { title: "MyTzedakah", image: "/MTF Card.png", href: "/work/mytzedakah" },
              ].map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
                >
                  <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: "0", overflow: "hidden", marginBottom: "14px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p style={{ fontFamily: MONA, fontSize: "1rem", fontWeight: 400, color: "#0A0A0A", margin: 0, letterSpacing: "-0.02em" }}>
                    {project.title}
                  </p>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
