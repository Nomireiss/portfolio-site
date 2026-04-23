import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';
const INTER = "Inter, sans-serif";

function Divider() {
  return <div className="my-10 md:my-[72px]" style={{ borderTop: "1px solid #E5E5E5" }} />;
}

export default function AboutPage() {
  const pad = "clamp(1rem, 6.94vw, 80px)";

  return (
    <>
      <Navigation forceColored />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: pad, paddingRight: pad }}>

          {/* Back */}
          <div className="pt-8 pb-8 md:pt-10 md:pb-14">
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: INTER, fontSize: "0.85rem", fontWeight: 500, color: "#737373", textDecoration: "none" }}
              className="hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft size={15} /> Home
            </Link>
          </div>

          {/* ── PAGE HEADER ──────────────────────────────────── */}
          <header className="pb-8 md:pb-16">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A3A3A3" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#222222", textTransform: "uppercase" }}>
                About
              </span>
            </div>
            <h1 style={{
              fontFamily: MONA,
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.2vw, 5.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
              margin: 0,
            }}>
              Nomi Reiss.<br />
              <span style={{ fontWeight: 800 }}>Senior Product Designer.</span>
            </h1>
          </header>

          {/* ── SECTION 1: THE BIO ───────────────────────────── */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: "clamp(2rem, 5vw, 80px)" }}>
              {/* Left — bio text */}
              <div className="order-2 md:order-1">
                <h2 style={{
                  fontFamily: MONA,
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3vw, 3rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.025em",
                  color: "#0A0A0A",
                  margin: "0 0 32px",
                }}>
                  Discipline<br />
                  <span style={{ fontWeight: 800 }}>in the layers.</span>
                </h2>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 20px" }}>
                  My approach to design is rooted in an obsession with how things
                  are built. Before I was navigating design systems, I was a
                  professional pastry chef. In a high-pressure kitchen, you learn
                  quickly that &ldquo;pretty&rdquo; is irrelevant if the structure
                  doesn&rsquo;t hold.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: 0 }}>
                  I&rsquo;ve traded the kitchen for the product suite, but the
                  mindset remains: I&rsquo;m a Senior Product Designer focused on
                  building the invisible infrastructure that makes great products
                  possible. I specialize in taking fragmented,
                  &ldquo;messy&rdquo; requirements and synthesizing them into
                  cohesive, operationally sound systems that allow teams to scale
                  without the friction.
                </p>
              </div>

              {/* Right — profile image */}
              <div className="order-1 md:order-2 md:sticky md:top-[120px]">
                <img
                  src="/nomi-avatar.png"
                  alt="Nomi Reiss"
                  style={{
                    width: "100%",
                    maxWidth: "460px",
                    height: "auto",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </section>

          <Divider />

          {/* ── SECTION 2 + 3: WORKFLOW + SIDEBAR + CTA ─────── */}
          <section className="pb-16 md:pb-[120px]" style={{ display: "flex", flexDirection: "column" }}>
            <div className="grid grid-cols-1 md:[grid-template-columns:7fr_3fr] items-start" style={{ gap: "clamp(2rem, 5vw, 72px)" }}>
              {/* Main — workflow */}
              <div>
                <h2 style={{
                  fontFamily: MONA,
                  fontWeight: 300,
                  fontSize: "clamp(1.8rem, 3vw, 3rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.025em",
                  color: "#0A0A0A",
                  margin: "0 0 32px",
                }}>
                  Pressure-testing<br />
                  <span style={{ fontWeight: 800 }}>the logic.</span>
                </h2>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 20px" }}>
                  I&rsquo;ve learned that the most expensive mistakes happen before
                  a single pixel is moved. That&rsquo;s why I&rsquo;ve integrated
                  an AI-first workflow into my daily process. I treat LLMs as
                  strategic partners&mdash;using them to audit product requirements,
                  simulate edge cases, and stress-test the logic of a feature long
                  before I open Figma.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#3A3A3A", margin: "0 0 40px" }}>
                  By the time I&rsquo;m designing, the ambiguity has been resolved,
                  and the path to implementation is clear. It&rsquo;s about being
                  an &ldquo;Architect of Clarity&rdquo; in a world that is
                  increasingly complex.
                </p>

                {/* CTA */}
                <h3 style={{
                  fontFamily: MONA,
                  fontWeight: 300,
                  fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#0A0A0A",
                  margin: "0 0 20px",
                }}>
                  Let&rsquo;s build something{" "}
                  <span style={{ fontWeight: 800 }}>worth finding.</span>
                </h3>
                <a
                  href="mailto:hello@nomireiss.com"
                  className="hover:bg-[#0B87E0] transition-colors"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "52px",
                    padding: "0 32px",
                    backgroundColor: "#0D99FF",
                    borderRadius: "6px",
                    fontFamily: INTER,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Get in touch
                </a>
              </div>

              {/* Sidebar — the direct handshake */}
              <aside className="md:sticky md:top-[120px] pb-16 md:pb-0" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ borderLeft: "2px solid #E5E5E5", paddingLeft: "16px" }}>
                  <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.12em", color: "#555555", textTransform: "uppercase", marginBottom: "10px" }}>
                    The Direct Handshake
                  </p>
                  <p style={{ fontFamily: INTER, fontSize: "1rem", color: "#4497F7", fontWeight: 600, marginBottom: "10px" }}>
                    @Hiring Manager
                  </p>
                  <div style={{ fontFamily: INTER, fontSize: "1rem", lineHeight: 1.75, color: "#1A1A1A" }}>
                    <p style={{ margin: "0 0 16px" }}>
                      I know the drill. You&rsquo;re looking for a Senior who
                      doesn&rsquo;t need hand-holding&mdash;someone who can talk to
                      your CTO as easily as your users.
                    </p>
                    <p style={{ margin: "0 0 24px" }}>
                      I&rsquo;m a technical designer who cares about the
                      &ldquo;why.&rdquo; I don&rsquo;t believe in design for
                      design&rsquo;s sake; I believe in design that solves the
                      business case and makes the engineering process smoother. If
                      that sounds like the partner you need, let&rsquo;s connect.
                    </p>
                    <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <p style={{ fontFamily: INTER, fontSize: "0.82rem", color: "#555555", margin: 0 }}>
                        <span style={{ fontWeight: 600, color: "#0A0A0A" }}>Status:</span> Open to a strategic partnership.
                      </p>
                      <p style={{ fontFamily: INTER, fontSize: "0.82rem", color: "#555555", margin: 0 }}>
                        <span style={{ fontWeight: 600, color: "#0A0A0A" }}>Location:</span> Toronto / Remote.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

          </section>

        </div>
      </main>
    </>
  );
}
