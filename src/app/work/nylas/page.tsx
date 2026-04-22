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
              fontWeight: 800,
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
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}>
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

          {/* ── SECTION 1: THE MANDATE ───────────────────────── */}
          <SectionGrid
            main={
              <>
                <ImagePlaceholder label="Nylas Platform — Hero Shot (100% Fidelity)" aspectRatio="16/10" />
                <PullQuote>
                  &ldquo;When I joined Nylas, the user journey felt like crossing borders
                  between three different countries. My mandate was to eliminate the
                  cognitive load of &lsquo;context switching&rsquo; by building a singular,
                  high-performance design language that scaled from a marketing headline to
                  a complex API configuration.&rdquo;
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Annotation: The Problem" mention="@Hiring Manager">
                I identified 14 different button styles across the suite in week one.
                Fragmentation isn&rsquo;t just an aesthetic issue — it&rsquo;s a velocity
                killer. Every inconsistent component is a decision an engineer shouldn&rsquo;t
                have to make.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 2: THE NDS ───────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The How</SectionEyebrow>
                <SectionHeading>
                  Building the Bridge:<br />
                  <span style={{ fontWeight: 800 }}>The Nylas Design System (NDS).</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I architected the NDS as a multi-layered system. By leveraging
                  Shadcn&rsquo;s accessible foundations and Tailwind&rsquo;s utility-first
                  logic, I created a component library that served two masters: the editorial
                  needs of the website and the dense, data-heavy requirements of the
                  dashboard.&rdquo;
                </PullQuote>
                <BulletItem label="Atomic Alignment:">
                  Synchronizing color palettes and spacing scales so the &ldquo;Marketing
                  Pitch&rdquo; felt like the &ldquo;Product Reality.&rdquo;
                </BulletItem>
                <BulletItem label="The Component Pivot:">
                  Moving away from rigid, legacy components to a composable architecture
                  that empowered engineers to build faster.
                </BulletItem>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "12px" }}>
                  {["NDS — Component Library", "Token Architecture"].map(l => (
                    <div key={l} style={{ aspectRatio: "4/3", background: "#F2F2F2", borderRadius: "10px", border: "1px solid #E8E8E8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#B5B5B5" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="Operational Note">
                I didn&rsquo;t just hand off a library. I re-engineered the hand-off process
                itself. By aligning our Figma variables directly with our Tailwind tokens,
                we created a 1:1 parity between design and production.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 3: THE DASHBOARD ─────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>The Why</SectionEyebrow>
                <SectionHeading>
                  From Data Noise to<br /><span style={{ fontWeight: 800 }}>Actionable Intelligence.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I overhauled the full suite — from Email and Calendar integrations
                  to the new Agentic tools — focusing on Information Hierarchy. By
                  introducing a clean, modular &lsquo;Card&rsquo; system and a unified
                  navigation structure, I transformed the dashboard into a high-clarity
                  workspace for developers.&rdquo;
                </PullQuote>
                <BulletItem label="Logic Audit:">
                  Redesigning the onboarding flow to prioritise the &ldquo;Time to First
                  API Call.&rdquo;
                </BulletItem>
                <BulletItem label="The UX Shift:">
                  Reducing the number of clicks required for key administrative tasks by
                  40% through better layout density.
                </BulletItem>
                <ImagePlaceholder label="Dashboard — Suite Transformation" aspectRatio="16/9" />
              </>
            }
            sidebar={
              <SidebarComment label="Deep Dive">
                The dashboard needed to transition from a &ldquo;Monitoring Tool&rdquo; to
                a &ldquo;Strategic Interface&rdquo; for the Agentic Era.
              </SidebarComment>
            }
          />

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />

          {/* ── SECTION 4: THE RESULT ────────────────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <SectionGrid
              main={
                <>
                  <SectionEyebrow>The Impact</SectionEyebrow>
                  <SectionHeading>
                    Operational Excellence:<br /><span style={{ fontWeight: 800 }}>A Platform Stabilised.</span>
                  </SectionHeading>
                  <PullQuote>
                    &ldquo;The common design language didn&rsquo;t just make the product look
                    better — it made the company move faster. We achieved a cohesive brand
                    identity that signalled maturity to our enterprise clients, while the
                    internal engineering velocity increased because the &lsquo;Messy
                    Middle&rsquo; of hand-offs had been replaced by a reliable, automated
                    system.&rdquo;
                  </PullQuote>
                  <ImagePlaceholder label="Results — System at Scale" aspectRatio="16/9" />
                </>
              }
              sidebar={
                <SidebarComment label="Annotation: The Outcome">
                  <p style={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#0A0A0A" }}>Strategic maturity</strong> delivered
                    at the product level.
                  </p>
                  <p style={{ color: "#737373", fontSize: "0.72rem", margin: 0 }}>
                    This is what Principal-level operational design leadership looks like.
                  </p>
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
                { title: "SeeTree", year: "©23", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
                { title: "ShyMama", year: "©23", image: "/ShyMama Mockup.png", href: "/work/shymama" },
              ].map((project) => (
                <a
                  key={project.title}
                  href={project.href ?? undefined}
                  style={{ display: "block", textDecoration: "none", cursor: project.href ? "pointer" : "default" }}
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
