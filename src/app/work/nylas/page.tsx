import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONO = "'JetBrains Mono', 'Courier New', monospace";
const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';
const INTER = "Inter, sans-serif";

/* ─── Typography primitives ───────────────────────────────────── */

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
      {children}
    </p>
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

function Divider() {
  return <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />;
}

/* ─── Impact callout ──────────────────────────────────────────── */

function ImpactCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: "3px solid #0A0A0A",
      paddingLeft: "20px",
      margin: "32px 0 0",
    }}>
      <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#737373", margin: "0 0 6px" }}>
        Headline Impact
      </p>
      <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.7, color: "#0A0A0A", margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function NylasPage() {
  const pad = "clamp(1rem, 3.5vw, 48px)";

  return (
    <>
      <Navigation forceColored />
      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: pad, paddingRight: pad }}>

          {/* Back */}
          <div style={{ paddingTop: "40px", paddingBottom: "56px" }}>
            <Link href="/#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: INTER, fontSize: "0.85rem", fontWeight: 500, color: "#737373", textDecoration: "none" }}
              className="hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft size={15} /> All Work
            </Link>
          </div>

          {/* ── PROJECT HEADER ───────────────────────────────── */}
          <header style={{ paddingBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A3A3A3" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase" }}>
                Case Study · Platform Design · 2024–present
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
              Closing the gap between<br />
              <span style={{ fontWeight: 800 }}>try it and ship it.</span>
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
                { label: "Role", value: "Principal Product Designer (sole designer + Dashboard PM)" },
                { label: "Stack", value: "Shadcn / Tailwind / React" },
                { label: "Year", value: "2024–present" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 500, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>

            <ImpactCallout>
              +104% YoY growth in subscriptions created (1,104 in FY25), driven by an end-to-end redesign of the developer journey from Sandbox to Production.
            </ImpactCallout>
          </header>

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "72px", borderRadius: "10px", overflow: "hidden" }}>
            <img src="/Nylas Hero.png" alt="Nylas Platform — Hero Shot" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* ── THE PROBLEM ──────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  The problem behind<br />
                  <span style={{ fontWeight: 800 }}>the dashboard.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  Nylas sells developer infrastructure for email, calendar, and contacts. The product is powerful, but the path from sign-up to a production-ready integration was costing the company customers — and we could see it in the funnel.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  When I started, three things were breaking the developer journey:
                </p>
                <BulletItem label="Onboarding had no feedback loop.">
                  New users completed setup steps without understanding why those steps mattered or whether they were working. Success was invisible until the very end.
                </BulletItem>
                <BulletItem label="Time-to-value in the Sandbox was long.">
                  To see the API actually do anything, developers had to leave the dashboard, set up their own terminal environment, and write code against our docs. The &ldquo;aha&rdquo; moment lived outside our product.
                </BulletItem>
                <BulletItem label="Sandbox and Production were two different products.">
                  They looked different, asked for different setup steps, and didn&rsquo;t share configuration. Worse: the moment a developer tried to move to Production, they hit Google&rsquo;s OAuth verification process for the first time — a multi-week gauntlet they had no idea was coming. Launches slipped by weeks. Some never happened.
                </BulletItem>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#0A0A0A", margin: "28px 0 0", fontWeight: 500 }}>
                  This wasn&rsquo;t a UI problem. It was a product architecture problem dressed up as a UI problem.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="The Diagnosis" mention="@Hiring Manager">
                Most designers would have started with the UI. I started with the funnel. The &ldquo;fragmentation tax&rdquo; wasn&rsquo;t a visual problem — it was a structural one, and fixing it required thinking like a PM as much as a designer.
              </SidebarComment>
            }
          />

          <ImagePlaceholder label="Legacy dashboard / annotated Sandbox→Production funnel" />

          <Divider />

          {/* ── MY ROLE ──────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  <span style={{ fontWeight: 800 }}>My role.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  I was Nylas&rsquo; sole product designer in FY25, owning the end-to-end product experience while also acting as PM for the Dashboard — driving prioritization, cross-functional alignment, and execution across every initiative below. I partnered closely with Engineering, Product, and Marketing to ship work that spanned design, strategy, and roadmap ownership.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="Scope">
                Sole designer. Also PM for the Dashboard. Every initiative below was owned end-to-end — strategy, design, and execution.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 1 ────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>01</SectionEyebrow>
                <SectionHeading>
                  Rebuilding the dashboard<br />
                  <span style={{ fontWeight: 800 }}>from Sandbox to post-purchase.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  I led a full redesign of the dashboard experience, from a developer&rsquo;s first sign-up through purchase and beyond. The work covered:
                </p>
                <BulletItem label="Unified UX and visual language">
                  between Sandbox and Production, so configuration and mental models carry over.
                </BulletItem>
                <BulletItem label="Improved navigation and global search">
                  that moves beyond wayfinding to act as a functional command hub.
                </BulletItem>
                <BulletItem label="New notification infrastructure."></BulletItem>
                <BulletItem label="Organization-level settings, metrics, and redesigned billing and usage">
                  that gives customers a clear view into what they&rsquo;re consuming and paying for.
                </BulletItem>
                <BulletItem label="Infrastructure to market and launch new products">
                  within the dashboard, opening new growth pathways.
                </BulletItem>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", margin: "28px 0 0", fontWeight: 600 }}>
                  Impact: +104% YoY increase in subscriptions created — 1,104 subscriptions in FY25 vs. FY24.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="The Architecture Bet">
                The Sandbox/Production split wasn&rsquo;t just a UX inconvenience — it was a revenue leak. Unifying them meant developers could build confidence in Sandbox and carry that directly into production, with no mental reset.
              </SidebarComment>
            }
          />

          <ImagePlaceholder label="Redesigned dashboard — Sandbox/Production parity or org settings" />

          <Divider />

          {/* ── SECTION 2 ────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>02</SectionEyebrow>
                <SectionHeading>
                  Product Explorers —<br />
                  <span style={{ fontWeight: 800 }}>bringing the &ldquo;aha&rdquo; inside.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  The single biggest activation problem at Nylas was that the moment of value lived in the developer&rsquo;s terminal, not in our product. So I designed and shipped Product Explorers — interactive surfaces inside the dashboard where users can hit our APIs against real data and see the response immediately, without writing a line of code.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  I partnered with Engineering and Product to define reusable patterns that make complex features easier to explore, configure, and implement — accelerating time-to-value and supporting our PLG motion.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", margin: "0 0 12px", fontWeight: 600 }}>
                  Impact (since launch on Oct 28):
                </p>
                <BulletItem label="Notetaker Explorer:">488 unique users.</BulletItem>
                <BulletItem label="Scheduler Explorer:">513 unique users.</BulletItem>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginTop: "32px", alignItems: "start" }}>
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
              <SidebarComment label="The PLG Lever" mention="@Hiring Manager">
                Moving the &ldquo;aha moment&rdquo; inside the dashboard wasn&rsquo;t just a UX improvement — it was a growth strategy. Every developer who can see value without leaving the product is a developer closer to converting.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 3 ────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>03</SectionEyebrow>
                <SectionHeading>
                  New pricing &amp; packaging —<br />
                  <span style={{ fontWeight: 800 }}>design that drives revenue.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  When Nylas rolled out new pricing and packaging in July, I owned the design across both surfaces: the public pricing page and every dashboard flow that supports the new model — checkout, plan selection, upgrade paths, and post-purchase configuration.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", fontWeight: 600, margin: 0 }}>
                  Impact: 740 new subscriptions created under the new pricing model.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="Revenue Design">
                Pricing page design is often treated as a marketing problem. I treated it as a conversion funnel — every flow from the public page to post-purchase needed to reduce friction and build confidence in the purchase decision.
              </SidebarComment>
            }
          />

          <ImagePlaceholder label="Pricing page or upgrade flow" />

          <Divider />

          {/* ── SECTION 4 ────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>04</SectionEyebrow>
                <SectionHeading>
                  Setting the stage<br />
                  <span style={{ fontWeight: 800 }}>for Nylas AI.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  I designed the foundation for Nylas&rsquo; 2026 AI product vision, shipping the dashboard experiences for:
                </p>
                <BulletItem label="MCP (Model Context Protocol) integration." />
                <BulletItem label="Inbound AI capabilities." />
                <BulletItem label="Templates and Workflows">for agent-driven product use.</BulletItem>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "28px 0 0" }}>
                  This work positions the dashboard to support customers building with AI agents on top of our full product line.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="The Agentic Era">
                Designing for AI isn&rsquo;t about adding a chat interface. It&rsquo;s about building surfaces that can be operated by agents and humans alike — with the same clarity and the same trust signals.
              </SidebarComment>
            }
          />

          <ImagePlaceholder label="MCP, Inbound, or Templates & Workflows surface" />

          <Divider />

          {/* ── SECTION 5 ────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>05</SectionEyebrow>
                <SectionHeading>
                  The system underneath —<br />
                  <span style={{ fontWeight: 800 }}>designing for the AI era.</span>
                </SectionHeading>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  To ship this much surface area as a sole designer, and to set up the team for AI-assisted development, I rebuilt the design system around Shadcn and Tailwind — aligning Figma design tokens with the conventions engineers and LLMs already use.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                  The point isn&rsquo;t just consistency. It&rsquo;s that a token-driven, semantically-named system creates a shared layer between design, AI-assisted code generation, and engineering implementation. Prompting an LLM to build a Nylas component now produces something that actually matches our system, because the system speaks the same language the model does.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", fontWeight: 600, margin: 0 }}>
                  Impact: Measurably increased velocity in design and engineering deliverables, with a shared semantic foundation that scales beyond any single contributor.
                </p>
                <div style={{ marginTop: "32px", borderRadius: "10px", overflow: "hidden" }}>
                  <img src="/Components.png" alt="NDS — Component Library" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </>
            }
            sidebar={
              <SidebarComment label="Technical Logic">
                If an LLM can generate a component that passes design review on the first try, that&rsquo;s not a design system — that&rsquo;s a multiplier. The Shadcn/Tailwind migration was about building infrastructure that scales beyond any single contributor.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── REFLECTION ───────────────────────────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <SectionGrid
              main={
                <>
                  <SectionHeading>
                    <span style={{ fontWeight: 800 }}>Reflection.</span>
                  </SectionHeading>
                  <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                    The original dashboard treated each screen as a feature. The redesign treats the dashboard as a developer journey — from first sign-up to production launch to ongoing operations to AI-extended use.
                  </p>
                  <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 28px" }}>
                    The Shadcn/Tailwind migration gets attention internally, but it&rsquo;s the enabler, not the headline. The headline is that more developers are reaching production, faster, and Nylas saw subscription growth more than double year over year.
                  </p>
                  <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: 0 }}>
                    Doing this as a sole designer required treating design as product strategy, not just execution — which is the work I want to keep doing.
                  </p>
                </>
              }
              sidebar={
                <SidebarComment label="Final Take" mention="@Hiring Manager">
                  The metric that matters isn&rsquo;t pixel-perfect components. It&rsquo;s +104% subscription growth. The system is how we got there — but the result is why it matters.
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
