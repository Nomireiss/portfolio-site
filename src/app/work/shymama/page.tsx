import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <span style={{ fontFamily: INTER, fontSize: "0.7rem", color: "#B5B5B5" }}>
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

function Divider() {
  return <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function ShyMamaPage() {
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
                Case Study · E-Commerce / DTC · 2023
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
              Designing for the
              <br />
              <span style={{ fontWeight: 800 }}>One-Handed User.</span>
            </h1>

            {/* Metadata row */}
            <div style={{
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }} className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: "Client", value: "ShyMama" },
                { label: "Role", value: "Lead Product Designer" },
                { label: "Scope", value: "Mobile E-Commerce + Subscription" },
                { label: "Year", value: "2023" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 500, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "48px" }}>
            <img src="/ShyMama Cover.png" alt="ShyMama Platform — Hero Shot" style={{ width: "100%", borderRadius: "16px", display: "block" }} />
          </div>

          {/* ── SECTION 1: THE ENTRY ─────────────────────────── */}
          <SectionGrid
            main={
              <>
                <PullQuote>
                  &ldquo;I transformed ShyMama from a generic storefront into a subscription
                  platform built for the physical reality of its users. By prioritizing
                  Contextual Ergonomics, I architected a mobile-first flow that converted
                  first-time visitors by respecting their constraints rather than ignoring
                  them.&rdquo;
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="The Empathy Gap" mention="@Hiring Manager">
                This wasn&rsquo;t just a UI refresh. I conducted primary research to map the
                &lsquo;Empathy Gap&rsquo; between a standard checkout and the actual lived
                experience of a nursing mother. In this space, every extra tap is a reason
                to abandon the cart.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 2: THE CORE LOGIC ────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Core Logic</SectionEyebrow>
                <SectionHeading>
                  Minimalist Utility,<br />
                  <span style={{ fontWeight: 800 }}>Maximum Reach.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I led the end-to-end design process, from primary persona development
                  to high-fidelity handoff. The breakthrough came from the Ergonomic Audit:
                  I re-engineered the information architecture so that 90% of critical
                  interactions — selection, subscription toggling, and checkout — lived within
                  the &lsquo;Natural Thumb Zone&rsquo; of a mobile device.&rdquo;
                </PullQuote>
                <BulletItem label="The Subscription Pivot:">
                  Optimizing the checkout flow to prioritize trust signals and reduce friction
                  for first-time buyers.
                </BulletItem>
                <BulletItem label="Semantic Hierarchy:">
                  Using large tap targets and a clean style guide to ensure clarity during
                  distracted, low-light browsing sessions.
                </BulletItem>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "12px" }}>
                  {["Ergonomic Audit — Thumb Zone Map", "Subscription Flow — Checkout Redesign"].map(l => (
                    <div key={l} style={{ aspectRatio: "4/3", background: "#F2F2F2", borderRadius: "10px", border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: INTER, fontSize: "0.65rem", color: "#B5B5B5", textAlign: "center", padding: "0 12px" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="Technical Logic">
                We optimised for &lsquo;Distracted Browsing.&rsquo; I designed the logic so
                that if a user was interrupted, their progress was preserved and the
                &lsquo;Next Step&rsquo; was always visually dominant. No cognitive heavy
                lifting required.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 3: THE SCALE ─────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Scale</SectionEyebrow>
                <SectionHeading>
                  Scaling Trust<br />
                  <span style={{ fontWeight: 800 }}>through Clarity.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I built a unified design system that balanced the warmth of a
                  consumer brand with the structural rigour of a subscription service. By
                  synthesizing user interviews and empathy mapping, I created a responsive UI
                  that felt intuitive across every touchpoint — ensuring the
                  &lsquo;ShyMama&rsquo; brand felt like a supportive partner, not just a
                  vendor.&rdquo;
                </PullQuote>
                <BulletItem label="The Style Guide:">
                  A refined palette and typography system that signalled premium quality and
                  safety.
                </BulletItem>
                <BulletItem label="The Handshake:">
                  A seamless transition from educational content (the &ldquo;Why&rdquo;) to
                  the subscription engine (the &ldquo;How&rdquo;).
                </BulletItem>
                <ImagePlaceholder label="Design System + Responsive UI" aspectRatio="16/9" />
              </>
            }
            sidebar={
              <SidebarComment label="Annotation: Brand as Trust Signal">
                The design system wasn&rsquo;t decorative — it was functional. Every colour,
                typeface, and spacing decision was made to signal safety and expertise to a
                first-time mother making a nutritional decision for her child.
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
                    Efficiency Found:<br />
                    <span style={{ fontWeight: 800 }}>The ROI of Contextual Design.</span>
                  </SectionHeading>
                  <PullQuote>
                    &ldquo;The result was a high-conversion platform that eliminated the
                    &lsquo;Subscription Roadblock.&rsquo; By resolving the physical ambiguity
                    of the user&rsquo;s environment, I delivered an end-to-end product that
                    was ready for development handoff and optimised for growth. We proved that
                    when you design for the user&rsquo;s reality, the business goals take care
                    of themselves.&rdquo;
                  </PullQuote>
                  <ImagePlaceholder label="Impact — Conversion Funnel Transformation" aspectRatio="16/9" />
                </>
              }
              sidebar={
                <SidebarComment label="Final Take" mention="@Hiring Manager">
                  ShyMama is proof that I can take a sensitive, underserved audience and
                  build a high-performance system for them. I don&rsquo;t just design for
                  &lsquo;users&rsquo;; I design for humans in their most demanding contexts.
                </SidebarComment>
              }
            />
          </section>

          {/* ── MORE WORK ────────────────────────────────────── */}
          <section style={{ borderTop: "1px solid #E5E5E5", paddingTop: "64px", paddingBottom: "120px" }}>
            <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", marginBottom: "32px" }}>
              More Work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Nylas", year: "©24", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
                { title: "SeeTree", year: "©23", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
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
