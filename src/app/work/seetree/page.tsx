import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONO = "'JetBrains Mono', 'Courier New', monospace";
const MONA = '"Manrope", Inter, sans-serif';
const INTER = "Inter, sans-serif";

/* ─── Typography primitives ───────────────────────────────────── */

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#2A2326", margin: "0 0 28px" }}>
      {children}
    </p>
  );
}

function BulletItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
      <span style={{ color: "#A6907E", flexShrink: 0, marginTop: "3px" }}>→</span>
      <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326", margin: 0 }}>
        <strong style={{ color: "#2A2326", fontWeight: 600 }}>{label} </strong>
        {children}
      </p>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: MONA, fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 300, letterSpacing: "0.04em", color: "#A6907E", marginBottom: "16px" }}>
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
      lineHeight: 1.15,
      letterSpacing: "-0.025em",
      color: "#2A2326",
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
      background: "#F1E8D8",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #E5D9C5",
      margin: "40px 0",
    }}>
      <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: "#A6907E" }}>
        {label ?? "Image: to be provided"}
      </span>
    </div>
  );
}

/* ─── Sidebar comment card ────────────────────────────────────── */

function SidebarComment({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "2px solid #E5D9C5", paddingLeft: "16px" }}>
      <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase", marginBottom: "10px" }}>
        {label}
      </p>
      <div style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326" }}>
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
  return <div style={{ margin: "72px 0" }} />;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function SeeTreePage() {
  const pad = "clamp(1rem, 3.5vw, 48px)";

  return (
    <>
      <Navigation forceColored />

      <main style={{ backgroundColor: "#FBF8F3", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: pad, paddingRight: pad }}>

          {/* Back */}
          <div style={{ paddingTop: "40px", paddingBottom: "56px" }}>
            <Link href="/#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: INTER, fontSize: "0.85rem", fontWeight: 500, color: "#8A7E72", textDecoration: "none" }}
              className="hover:text-[#2A2326] transition-colors"
            >
              <ArrowLeft size={15} /> All Work
            </Link>
          </div>

          {/* ── PROJECT HEADER ──────────────────────────────── */}
          <header style={{ paddingBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A6907E" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase" }}>
                Case Study · AgriTech / GIS · 2022–2024
              </span>
            </div>

            <h1 style={{
              fontFamily: MONA,
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.2vw, 5.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#2A2326",
              margin: "0 0 48px",
            }}>
              <span style={{ fontWeight: 800 }}>One system, eight industries:</span>
              <br />
              designing SeeTree&rsquo;s multi-sector platform.
            </h1>

            {/* Metadata row */}
            <div style={{
              borderTop: "1px solid #ECE3D6",
              borderBottom: "1px solid #ECE3D6",
              paddingTop: "20px",
              paddingBottom: "20px",
            }} className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: "Company", value: "SeeTree" },
                { label: "Role", value: "Sole Product Designer (end-to-end)" },
                { label: "Scope", value: "Mobile field app + Manager dashboard" },
                { label: "Year", value: "2022–2024" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 700, color: "#2A2326", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── CHALLENGE INTRO ─────────────────────────────── */}
          <PullQuote>
            The challenge: Build a single product that works for citrus growers in California, oil palm operations in Indonesia, coffee plantations in Brazil, and forestry companies across multiple continents, without forking the codebase or fragmenting the brand.
          </PullQuote>

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "48px", marginTop: "24px" }}>
            <img
              src="/Untitled design - 2026-04-22T155542.913.png"
              alt="SeeTree Platform Hero Shot"
              style={{ width: "100%", borderRadius: "16px", display: "block" }}
            />
          </div>

          <Divider />

          {/* ── THE PROBLEM ─────────────────────────────────── */}
          <section style={{ maxWidth: "960px" }}>
            <SectionHeading>
              <span style={{ fontWeight: 800 }}>The problem.</span>
            </SectionHeading>
            <PullQuote>
              SeeTree gives farmers individual tree-level intelligence: drone imagery, sensor data, ground observations, and ML-driven health analysis, all stitched into a per-tree &ldquo;medical file.&rdquo; The technology was powerful. The product experience was struggling to keep up with the company&rsquo;s growth.
            </PullQuote>
            <PullQuote>
              By the time I joined, SeeTree&rsquo;s customer base had expanded well beyond its original citrus-grower roots. Each new vertical (nuts, coffee, oil palm, forestry) brought different workflows, different user populations, different reporting requirements, and different field conditions. The product was being asked to serve all of them, but the design wasn&rsquo;t built for that kind of range. Components had drifted, mobile and desktop didn&rsquo;t share a system, and onboarding a new sector meant rebuilding rather than configuring.
            </PullQuote>
            <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326", fontWeight: 600, margin: 0 }}>
              This is the classic agritech scaling problem: you have one technology platform, but the product needs to feel native in radically different industries.
            </p>
          </section>

          <Divider />

          {/* ── MY ROLE ─────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  <span style={{ fontWeight: 800 }}>My role.</span>
                </SectionHeading>
                <PullQuote>
                  I was SeeTree&rsquo;s sole product designer, owning the end-to-end product experience across both the mobile field app and the manager-facing web dashboard. I partnered with the Product team on prioritization and research, and worked closely with engineering on implementation and the design system that underpinned both surfaces.
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Scope">
                Sole designer. Owned both mobile and desktop surfaces, the component library, persona definition, information architecture, and sector-specific configurations across eight verticals.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 1: TWO DIFFERENT USERS ──────────────── */}
          <section style={{ maxWidth: "960px" }}>
            <SectionEyebrow>01</SectionEyebrow>
            <SectionHeading>
              Designing for two<br />
              <span style={{ fontWeight: 800 }}>very different users.</span>
            </SectionHeading>
            <PullQuote>
              The mobile app and the desktop dashboard serve almost opposite jobs.
            </PullQuote>
            <PullQuote>
              The field app is used by scouts and field workers, often in remote orchards or plantations, often in bright sunlight, often with gloved hands or while moving. They need to capture observations quickly, work offline, and trust that what they record will sync. Design constraints: high contrast, large tap targets, minimal cognitive load, offline-first.
            </PullQuote>
            <PullQuote>
              The manager dashboard is used by agronomists and farm managers from an office, making strategic decisions across thousands of hectares. They need density, GIS visualization, historical trends, and the ability to drill from a regional view down to a single tree. Design constraints: information richness without overwhelm, fast filtering, clear data hierarchy.
            </PullQuote>
            <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326", fontWeight: 600, margin: 0 }}>
              I designed both as part of one system (shared design language, shared component primitives, shared brand) but tuned for each environment&rsquo;s reality.
            </p>
          </section>

          <div style={{ borderRadius: "10px", overflow: "hidden", margin: "40px auto", maxWidth: "85%" }}>
            <img src="/forestry-mobile-desktop.jpg" alt="Forestry,Mobile and Desktop" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <Divider />

          {/* ── SECTION 2: THE RESEARCH PROCESS ─────────────── */}
          <section style={{ maxWidth: "960px" }}>
            <SectionEyebrow>02</SectionEyebrow>
            <SectionHeading>
              The research<br />
              <span style={{ fontWeight: 800 }}>process.</span>
            </SectionHeading>
            <PullQuote>
              Working with the Product team, I synthesized insights from user research sessions conducted with field scouts and agronomists across multiple regions and sectors. Sessions were typically PM-led (SeeTree has long-standing on-the-ground relationships with customers) and I worked from the recordings, transcripts, and synthesis to build empathy maps and define personas.
            </PullQuote>
            <PullQuote>
              I defined three core user personas across the management hierarchy and field workforce, each grounded in real user feedback rather than assumption. Those personas anchored every component decision that followed: who&rsquo;s using this, in what context, with what constraints.
            </PullQuote>
          </section>

          <div style={{ borderRadius: "10px", overflow: "hidden", margin: "40px auto", maxWidth: "85%" }}>
            <img src="/SeeTree%20Personas.jpg" alt="SeeTree Personas" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <Divider />

          {/* ── SECTION 3: THE SYSTEM THAT SCALED ───────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>03</SectionEyebrow>
                <SectionHeading>
                  The system that scaled<br />
                  <span style={{ fontWeight: 800 }}>to eight sectors.</span>
                </SectionHeading>
                <PullQuote>
                  The hardest part of the work was building one component library that could serve eight materially different agricultural industries. A citrus grower thinks in trees and groves. An oil palm operation thinks in blocks and bunches. A forestry company thinks in stands and timber volume. The data, the vocabulary, and the workflows are all different, but the underlying primitives (a map, a list, a tree-level detail view, a mission, a report) can be shared if the system is designed for configurability from the start.
                </PullQuote>
                <PullQuote>
                  I built a token-driven design system with components designed to be composed and configured rather than forked. New sectors could be supported by recombining existing primitives and configuring sector-specific vocabulary, without designing from scratch each time.
                </PullQuote>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326", fontWeight: 600, margin: 0 }}>
                  This is the work I&rsquo;m most proud of from SeeTree: a system that absorbed the company&rsquo;s expansion without fragmenting.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="What I Owned">
                <BulletItem label="The full mobile and desktop design language."> </BulletItem>
                <BulletItem label="The component library and token system."> </BulletItem>
                <BulletItem label="Persona definition and research synthesis"> (in partnership with Product).</BulletItem>
                <BulletItem label="The information architecture"> for both surfaces.</BulletItem>
                <BulletItem label="Sector-specific configurations"> across eight agricultural sectors including citrus, nuts, coffee, oil palm, and forestry.</BulletItem>
              </SidebarComment>
            }
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", margin: "40px auto", maxWidth: "85%" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Fruit Farms.png" alt="Fruit Farms" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Oil Palms.png" alt="Oil Palms" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>

          <Divider />

          {/* ── SECTION 4: FIELD-TO-OFFICE DATA LOOP ────────── */}
          <section style={{ maxWidth: "960px" }}>
            <SectionEyebrow>04</SectionEyebrow>
            <SectionHeading>
              The field-to-office<br />
              <span style={{ fontWeight: 800 }}>data loop.</span>
            </SectionHeading>
            <PullQuote>
              A central design problem at SeeTree was the handoff between field and office. A scout flagging a stressed tree on their phone needs that observation to surface in the manager&rsquo;s dashboard immediately, in context, with the right metadata. A manager assigning a mission to scout a section of grove needs that mission to appear on the right scouts&rsquo; devices, routed correctly, with offline fallbacks.
            </PullQuote>
            <PullQuote>
              I designed the patterns that close this loop (mission assignment, field capture, sync states, status surfacing in the dashboard) and worked with engineering on the sync logic that makes them feel reliable in practice.
            </PullQuote>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", margin: "40px auto", maxWidth: "85%" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Forestry 2.png" alt="Tree Medical File Detail View" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Forest 4.jpg" alt="MapConnect GIS Redesign" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>

          <Divider />

          {/* ── REFLECTION ──────────────────────────────────── */}
          <section style={{ maxWidth: "960px", paddingBottom: "120px" }}>
            <SectionEyebrow>Reflection</SectionEyebrow>
            <SectionHeading>
              Designing<br />
              <span style={{ fontWeight: 800 }}>for range.</span>
            </SectionHeading>
            <PullQuote>
              Most product design work happens inside a single industry&rsquo;s mental model. SeeTree gave me an unusual challenge: design one product that feels native across eight industries with genuinely different vocabularies and workflows, while operating as the sole designer in the company.
            </PullQuote>
            <PullQuote>
              What I took from it: the difference between &ldquo;designing a feature&rdquo; and &ldquo;designing a system&rdquo; becomes existential when you can&rsquo;t fork. Every component had to earn its place not just in one workflow but in five. Every naming decision had to survive translation across industries. Every screen had to be built for configurability from day one.
            </PullQuote>
            <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#2A2326", fontWeight: 600, margin: 0 }}>
              It&rsquo;s the project that taught me to design for range.
            </p>
            <div style={{ borderRadius: "10px", overflow: "hidden", marginTop: "48px", maxWidth: "85%", marginLeft: "auto", marginRight: "auto" }}>
              <img src="/Widgets.png" alt="Impact: Field-to-Office Data Loop" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </section>

          {/* ── MORE WORK ────────────────────────────────────── */}
          <section style={{ borderTop: "1px solid #ECE3D6", paddingTop: "64px", paddingBottom: "120px" }}>
            <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase", marginBottom: "32px" }}>
              More Work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Nylas", year: "©24", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
                { title: "MyTzedakah", year: "©24", image: "/MTF Card.png", href: "/work/mytzedakah" },
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
                  <p style={{ fontFamily: MONA, fontSize: "1rem", fontWeight: 400, color: "#2A2326", margin: 0, letterSpacing: "-0.02em" }}>
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
