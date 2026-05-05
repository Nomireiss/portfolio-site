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
        {label ?? "Image: to be provided"}
      </span>
    </div>
  );
}

/* ─── Sidebar comment card ────────────────────────────────────── */

function SidebarComment({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "2px solid #EFF0F6", paddingLeft: "16px" }}>
      <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.12em", color: "#555555", textTransform: "uppercase", marginBottom: "10px" }}>
        {label}
      </p>
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

          {/* ── PROJECT HEADER ──────────────────────────────── */}
          <header style={{ paddingBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A3A3A3" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase" }}>
                Case Study · FinTech / Philanthropy · 2021–2023
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
              <span style={{ fontWeight: 800 }}>Designing MyTzedakah:</span>
              <br />
              a complete giving platform, end to end.
            </h1>

            {/* Metadata row */}
            <div style={{
              borderTop: "1px solid #E5E5E5",
              borderBottom: "1px solid #E5E5E5",
              paddingTop: "20px",
              paddingBottom: "20px",
            }} className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: "Client", value: "MyTzedakah" },
                { label: "Role", value: "Sole Product Designer (end-to-end)" },
                { label: "Scope", value: "Consumer mobile app, P2P fundraising, B2B white-label" },
                { label: "Year", value: "2021–2023" },
              ].map(({ label, value }) => (
                <div key={label} style={{ paddingRight: "24px" }}>
                  <p style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase", margin: "0 0 6px" }}>{label}</p>
                  <p style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 700, color: "#0A0A0A", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </header>

          {/* ── WHAT I SHIPPED ──────────────────────────────── */}
          <SectionGrid
            main={
              <PullQuote>
                What I shipped: A live consumer fintech product covering personal giving funds, peer-to-peer fundraising, in-app charity discovery, and a white-label donation platform for partner organizations.
              </PullQuote>
            }
            sidebar={
              <SidebarComment label="Scope">
                Three distinct product surfaces. One design system. One designer. Consumer giving, P2P fundraising, and B2B white-label, all shipped and in use.
              </SidebarComment>
            }
          />

          {/* ── HERO IMAGE ───────────────────────────────────── */}
          <div style={{ marginBottom: "48px", marginTop: "24px" }}>
            <img src="/MTF Cover.png" alt="MyTzedakah Platform Hero Shot" style={{ width: "85%", height: "auto", display: "block", borderRadius: "10px", margin: "0 auto" }} />
          </div>

          <Divider />

          {/* ── THE PRODUCT ─────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  <span style={{ fontWeight: 800 }}>The product.</span>
                </SectionHeading>
                <PullQuote>
                  MyTzedakah is a giving platform built around the Jewish tradition of tzedakah, charitable giving as a regular, structured practice rather than a one-time emotional response. The product turns that tradition into a modern fintech experience: users build personalized giving funds, contribute on a recurring basis, discover and add new causes, and direct funds to specific charities over time.
                </PullQuote>
                <PullQuote>
                  The challenge for the company was that &ldquo;habitual giving&rdquo; requires a meaningfully different product than &ldquo;one-time donation.&rdquo; Most charity tech is optimized for the impulse: emergency campaigns, one-tap donation buttons, urgency-driven CTAs. MyTzedakah needed an interface that supported a slower, more deliberate behavior: building a portfolio of causes, tracking commitments over time, and giving in a way that feels intentional rather than reactive.
                </PullQuote>
                <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", fontWeight: 600, margin: 0 }}>
                  I joined as the sole product designer and led design end-to-end across every surface of the product.
                </p>
              </>
            }
            sidebar={
              <SidebarComment label="The Design Challenge">
                Most charity tech optimizes for impulse. MyTzedakah needed to support deliberate, recurring behavior. That&rsquo;s a fundamentally different design problem.
              </SidebarComment>
            }
          />

          <div style={{ borderRadius: "10px", overflow: "hidden", margin: "40px auto", maxWidth: "85%" }}>
            <img src="/mtf-choose-charities.jpg" alt="MyTzedakah: Choose Charities" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <Divider />

          {/* ── MY ROLE ─────────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  <span style={{ fontWeight: 800 }}>My role.</span>
                </SectionHeading>
                <PullQuote>
                  I was the only product designer on MyTzedakah, working directly with the founders, engineering, and product on every surface that shipped. The work spanned three distinct product areas: consumer giving, peer-to-peer fundraising, and B2B white-label, each with its own design language considerations, user populations, and flows. I owned the design system, the IA, the component library, and the visual language that holds it all together.
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Ownership">
                Sole designer across three product surfaces. Owned the design system, information architecture, component library, and brand expression through the product.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── SECTION 1: CONSUMER EXPERIENCE ──────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>01</SectionEyebrow>
                <SectionHeading>
                  The consumer experience:<br />
                  <span style={{ fontWeight: 800 }}>making giving a habit, not an event.</span>
                </SectionHeading>
                <PullQuote>
                  The core consumer flow is fund creation. A user picks a giving cadence (monthly, weekly, custom), sets an amount, and selects the charities the fund will support over time. The design problem was that every prior charity app I studied treated &ldquo;find a charity&rdquo; as an exit: users would tap out to a browser, research on a charity&rsquo;s external site, and often never return.
                </PullQuote>
                <PullQuote>
                  I designed the discovery experience into the app. A unified Charity Spotlight pattern lets users explore any partner organization in a consistent in-app surface (mission, financials, programs, recent campaigns) without leaving the fund-creation flow. A persistent Fund Tray shows their selections accumulating in real time, so the act of building a fund feels tangible rather than abstract.
                </PullQuote>
                <PullQuote>
                  The flow is mobile-first and optimized for one-handed use. The tactile feedback (the Fund Tray growing as charities are added, the cadence affirmations, the confirmation states) is designed to make the experience of committing to give feel as good as the experience of giving itself.
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Design Decision">
                Bringing charity discovery inside the app eliminated the &ldquo;exit to browser&rdquo; drop-off that plagued every other giving platform I studied. The Fund Tray provides immediate visual feedback that makes building a giving portfolio feel tangible.
              </SidebarComment>
            }
          />

          <div style={{ borderRadius: "10px", overflow: "hidden", margin: "40px auto", maxWidth: "85%" }}>
            <img src="/Mobile Create Fund.png" alt="Mobile Create Fund: In-App Discovery" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <Divider />

          {/* ── SECTION 2: P2P FUNDRAISING ──────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionEyebrow>02</SectionEyebrow>
                <SectionHeading>
                  Peer-to-peer fundraising:<br />
                  <span style={{ fontWeight: 800 }}>turning donors into campaigners.</span>
                </SectionHeading>
                <PullQuote>
                  I designed the P2P campaign builder, a flow that lets any user create a fundraising campaign in support of one or more charities, customize the campaign&rsquo;s narrative, and share it via a generated link. Recipients of the link land on a campaign page anchored around the campaigner&rsquo;s story, with a clear path to give.
                </PullQuote>
                <PullQuote>
                  I designed the social proof layer too: a live comment wall and donor feedback system that surfaces public messages of support and creates a visible narrative around the campaign as it grows.
                </PullQuote>
                <PullQuote>
                  The design challenge here was tone. Most P2P fundraising tools optimize hard for urgency and gamification: progress bars maxing out, emoji explosions, countdown timers. That register doesn&rsquo;t fit tzedakah. I designed for warmth and dignity instead: progress shown without pressure, social proof that feels communal rather than competitive, donation amounts presented as meaningful rather than maximized.
                </PullQuote>
              </>
            }
            sidebar={
              <SidebarComment label="Tone">
                Most P2P tools optimize for urgency. Tzedakah required the opposite: warmth, dignity, communal encouragement. Progress shown without pressure. Social proof that feels supportive rather than competitive.
              </SidebarComment>
            }
          />

          <div style={{ borderRadius: "10px", overflow: "hidden", margin: "40px auto", maxWidth: "85%" }}>
            <img src="/Zoe Fundraiser.png" alt="P2P Campaign Builder: Zoe Fundraiser" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          <Divider />

          {/* ── WHAT I OWNED ────────────────────────────────── */}
          <SectionGrid
            main={
              <>
                <SectionHeading>
                  <span style={{ fontWeight: 800 }}>What I owned.</span>
                </SectionHeading>
                <BulletItem label="The full consumer mobile experience:">fund creation, charity discovery, recurring giving, account management.</BulletItem>
                <BulletItem label="The P2P campaign builder,">campaign pages, and social proof layer.</BulletItem>
                <BulletItem label="The design system and component library">underlying both surfaces.</BulletItem>
                <BulletItem label="The brand and visual language">as expressed through the product.</BulletItem>
              </>
            }
            sidebar={
              <SidebarComment label="Range">
                Consumer fintech and P2P social. Two product surfaces, one system, one designer.
              </SidebarComment>
            }
          />

          <Divider />

          {/* ── REFLECTION ──────────────────────────────────── */}
          <section style={{ paddingBottom: "120px" }}>
            <SectionGrid
              main={
                <>
                  <SectionEyebrow>Reflection</SectionEyebrow>
                  <SectionHeading>
                    End-to-end<br />
                    <span style={{ fontWeight: 800 }}>ownership.</span>
                  </SectionHeading>
                  <PullQuote>
                    MyTzedakah was the first project where I owned every product surface end-to-end as the sole designer. Three product areas, one design system, one designer. What I took from it was that consistency at that scope isn&rsquo;t a stylistic concern, it&rsquo;s a survival concern. Without a strict component library and a tokenized system, a sole designer working across consumer, P2P, and B2B can&rsquo;t ship at the velocity the work requires.
                  </PullQuote>
                  <p style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#0A0A0A", fontWeight: 600, margin: 0 }}>
                    The product is live and in use today, supporting recurring giving for individuals, peer-to-peer campaigns, and partner organizations running their own donation experiences on the platform.
                  </p>
                </>
              }
              sidebar={
                <SidebarComment label="Final Take">
                  The project that taught me that consistency at scale isn&rsquo;t style, it&rsquo;s survival. A tokenized system was the only way to ship three product surfaces as a sole designer.
                </SidebarComment>
              }
            />
            <div style={{ marginTop: "48px", borderRadius: "10px", overflow: "hidden", maxWidth: "85%", marginLeft: "auto", marginRight: "auto" }}>
              <img src="/Choose Amounts.jpg" alt="MyTzedakah: Choose Amounts" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
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
