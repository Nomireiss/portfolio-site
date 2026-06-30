"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MONA = '"Manrope", Inter, sans-serif';
const INTER = "Inter, sans-serif";

function Divider() {
  return <div className="my-10 md:my-[72px]" style={{ borderTop: "1px solid #ECE3D6" }} />;
}

export default function AboutPage() {
  const pad = "clamp(1rem, 6.94vw, 80px)";

  return (
    <>
      <Navigation forceColored />

      <main style={{ backgroundColor: "#FBF8F3", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: pad, paddingRight: pad }}>

          {/* Back */}
          <div className="pt-8 pb-8 md:pt-10 md:pb-14">
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: INTER, fontSize: "0.85rem", fontWeight: 500, color: "#8A7E72", textDecoration: "none" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#2A2326")}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#8A7E72")}
            >
              <ArrowLeft size={15} /> Home
            </Link>
          </div>

          {/* ── PAGE HEADER ──────────────────────────────────── */}
          <h1 style={{
            fontFamily: MONA,
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#2A2326",
            margin: "0 0 48px",
          }}>
            About Me<span style={{ color: "#4F6092" }}>.</span>
          </h1>

          {/* ── BIO ────────────────────────────────────────── */}
          <section className="pb-12 md:pb-16">
            <div className="grid grid-cols-1 md:[grid-template-columns:3fr_2fr] items-start" style={{ gap: "clamp(2rem, 4vw, 64px)" }}>
              {/* Left — bio text */}
              <div className="order-2 md:order-1" style={{ maxWidth: "580px" }}>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#2A2326", margin: "0 0 20px", textWrap: "pretty" as const }}>
                  My professional life began in high-end kitchens (Le Cordon Bleu, Nobu, a stage at Eleven Madison Park), working as a pastry chef on teams that were structured as brigades, everyone with their rank, role and unique set of skills working collaboratively across the team to maintain the highest level of quality and attention to detail. There was no such thing as an individual working on their own, so collaboration and open communication were key. In many ways the art of pastry is similar to product design, in that it involves precision, whether it&rsquo;s grams of salt or pixels, craft, and a focus on creating an enjoyable and memorable user (or customer) experience.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#2A2326", margin: "0 0 20px", textWrap: "pretty" as const }}>
                  My post-secondary BFA in Painting and Drawing gave me a foundational understanding of colour theory, composition, balance, and finding comfort, and even inspiration, in ambiguity. There is nothing more inspiring to me than a blank canvas, filled with opportunity and the chance to work through a concept.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#2A2326", margin: "0 0 20px", textWrap: "pretty" as const }}>
                  As a product designer, I&rsquo;ve been the sole designer at three companies, across consumer fintech, agricultural IoT, and SaaS developer infrastructure. My background in pastry and my Fine Arts training have both shaped how I show up in those roles.
                </p>
                <p style={{ fontFamily: INTER, fontSize: "1.05rem", lineHeight: 1.8, color: "#2A2326", margin: "0 0 40px", textWrap: "pretty" as const }}>
                  I&rsquo;m a Toronto native, always on the hunt for the best coffee. When I have a sliver of free time, I love to paint. When I don&rsquo;t, I just daydream about what I would paint if I did.
                </p>

                {/* CTA */}
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "48px",
                    padding: "0 28px",
                    backgroundColor: "#2A2326",
                    borderRadius: "9999px",
                    fontFamily: INTER,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#FBF8F3",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3C4D7A"; e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#2A2326"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Get in touch
                </a>
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

        </div>
      </main>
    </>
  );
}
