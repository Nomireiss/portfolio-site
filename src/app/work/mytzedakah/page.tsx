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

function Divider() {
  return <div style={{ borderTop: "1px solid #E5E5E5", margin: "72px 0" }} />;
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function MyTzedakahPage() {
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
                Case Study · FinTech / Philanthropy · 2024
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
              The Modern Giving Gap:
              <br />
              <span style={{ fontWeight: 800 }}>Architecting Habitual Generosity.</span>
            </h1>

            {/* Metadata row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }} className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: "Client", value: "MyTzedakah" },
                { label: "Role", value: "Lead Product Designer" },
                { label: "Scope", value: "FinTech / Philanthropy Platform" },
                { label: "Year", value: "2024" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 700, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "48px" }}>
            <ImagePlaceholder label="MyTzedakah Platform — Hero Shot" aspectRatio="16/9" />
          </div>

          {/* ── SECTION 1: THE ENTRY ─────────────────────────── */}
          <SectionGrid
            main={
              <>
                <PullQuote>
                  &ldquo;I led the end-to-end design of MyTzedakah, a digital ecosystem
                  built to turn the ancient tradition of giving into a frictionless daily
                  rhythm. By moving beyond &lsquo;emergency&rsquo; philanthropy, I
                  architected a platform that empowers users to build personalized
                  portfolios of impact&mdash;stabilizing the recurring revenue for charities
                  while simplifying the act of giving for the donor.&rdquo;
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="The Modern Giving Gap" mention="@Hiring Manager">
                The &lsquo;Messy Middle&rsquo; here was the psychological barrier to
                micro-giving. I redesigned the logic to move from &lsquo;Donation as an
                Event&rsquo; to &lsquo;Donation as a Habit,&rsquo; creating a stable,
                automated handshake between the donor and the cause.
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
                  From Reactive to<br />
                  <span style={{ fontWeight: 800 }}>Proactive Giving.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I re-engineered the MyTzedakah experience around the concept of
                  Ideological Commitment. I replaced the fragmented, &lsquo;slick&rsquo;
                  marketing of individual campaigns with a clean, unified dashboard where
                  users could curate their own &lsquo;Impact Funds.&rsquo; I audited the
                  giving logic to prioritize transparency and frequency, respecting the
                  user&rsquo;s intent above the platform&rsquo;s pressure.&rdquo;
                </PullQuote>
                <BulletItem label="The Portfolio Logic:">
                  Designing a modular &ldquo;Fund&rdquo; system that lets users distribute
                  a single monthly amount across multiple charities.
                </BulletItem>
                <BulletItem label="The Frequency Anchor:">
                  Introducing &ldquo;Daily Rhythm&rdquo; features that mimic the physical
                  act of dropping a coin into a Tzedakah box, keeping the momentum of
                  kindness alive.
                </BulletItem>
                <ImagePlaceholder label="Impact Fund Dashboard — Core Logic" aspectRatio="4/3" />
              </>
            }
            sidebar={
              <SidebarComment label="Technical Logic">
                I implemented a custom &lsquo;Auto-Refill&rsquo; and &lsquo;Streak&rsquo;
                system. By normalizing the data flow between Stripe and the user&rsquo;s
                ideological goals, we achieved a near-zero churn rate. Stability is the
                hallmark of trust.
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
                  Modernising<br />
                  <span style={{ fontWeight: 800 }}>the Mitzvah.</span>
                </SectionHeading>
                <PullQuote>
                  &ldquo;I architected a design language that felt both timeless and
                  technical. By using high-end typography and generous white space, I
                  ensured that the &lsquo;sacredness&rsquo; of the act wasn&rsquo;t lost
                  in the digital noise. The result was a platform that scaled from a simple
                  mobile app to a robust charity management tool, providing a common
                  language for donors and non-profits alike.&rdquo;
                </PullQuote>
                <BulletItem label="The Transparency Engine:">
                  Developing &ldquo;Impact Reports&rdquo; that converted raw donation data
                  into clear, human narratives.
                </BulletItem>
                <BulletItem label="The Ethical UI:">
                  Removing &ldquo;Guilt-Based&rdquo; dark patterns and replacing them with
                  moments of calm, intentional choice.
                </BulletItem>
                <ImagePlaceholder label="Mobile App + Charity Dashboard" aspectRatio="16/9" />
              </>
            }
            sidebar={
              <SidebarComment label="Design Language">
                The visual system had to hold two contradictions at once: the weight of
                tradition and the lightness of a daily habit. Every typographic choice was
                in service of making generosity feel effortless, not obligatory.
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
                    Clarity as a<br />
                    <span style={{ fontWeight: 800 }}>Catalyst for Change.</span>
                  </SectionHeading>
                  <PullQuote>
                    &ldquo;The impact was profound. By resolving the ambiguity of
                    &lsquo;where my money goes,&rsquo; we empowered a new generation of
                    donors to give authentically. We proved that recurring micro-donations
                    are more impactful than one-time checks. I didn&rsquo;t just design an
                    app; I built a financial infrastructure for kindness&mdash;one that is
                    operationally sound and emotionally resonant.&rdquo;
                  </PullQuote>
                </>
              }
              sidebar={
                <SidebarComment label="Final Take" mention="@Hiring Manager">
                  MyTzedakah proves I can handle complex financial logic, high-stakes user
                  trust, and cultural nuance. If your product requires a balance between
                  emotional engagement and structural rigor, let&rsquo;s talk.
                </SidebarComment>
              }
            />
            <ImagePlaceholder label="Impact — A Democracy of Giving" aspectRatio="16/9" />
          </section>

          {/* ── MORE WORK ────────────────────────────────────── */}
          <section style={{ borderTop: "1px solid #E5E5E5", paddingTop: "64px", paddingBottom: "120px" }}>
            <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", marginBottom: "32px" }}>
              More Work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Nylas", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
                { title: "SeeTree", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
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
