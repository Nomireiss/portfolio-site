"use client";

import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#A6907E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="#A6907E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke="#A6907E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
import { sendContactEmail } from "./actions";

const MONA = '"Manrope", Inter, sans-serif';
const INTER = "Inter, sans-serif";

const inputStyle = {
  width: "100%",
  fontFamily: INTER,
  fontSize: "1rem",
  fontWeight: 400,
  color: "#2A2326",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5D9C5",
  borderRadius: "6px",
  padding: "14px 16px",
  outline: "none",
  display: "block",
  boxSizing: "border-box" as const,
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
};

const labelStyle = {
  fontFamily: INTER,
  fontSize: "0.82rem",
  fontWeight: 500,
  color: "#A6907E",
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  display: "block",
  marginBottom: "8px",
};

export default function ContactPage() {
  const pad = "clamp(1rem, 6.94vw, 80px)";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const result = await sendContactEmail(data);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

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

          {/* Header */}
          <header className="pb-8 md:pb-16">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A6907E" }} />
              <span style={{ fontFamily: MONA, fontSize: "0.78rem", fontWeight: 400, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase" }}>
                Contact
              </span>
            </div>
            <h1 style={{
              fontFamily: MONA,
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.2vw, 5.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#2A2326",
              margin: 0,
            }}>
              Get in touch<span style={{ color: "#4F6092" }}>.</span>
            </h1>
          </header>

          {/* Body */}
          <section className="pb-16 md:pb-[120px]">
            <div className="grid grid-cols-1 md:[grid-template-columns:7fr_3fr] items-start" style={{ gap: "clamp(2rem, 5vw, 72px)" }}>

              {/* Form */}
              <div>
                {status === "success" ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "40px", backgroundColor: "#FFFFFF", borderRadius: "10px", border: "1px solid #E5D9C5" }}>
                    <CheckCircle size={32} color="#3DB96B" />
                    <h2 style={{ fontFamily: MONA, fontWeight: 800, fontSize: "1.5rem", color: "#2A2326", margin: 0 }}>
                      Message sent.
                    </h2>
                    <p style={{ fontFamily: INTER, fontSize: "1rem", color: "#2A2326", lineHeight: 1.7, margin: 0 }}>
                      Thanks for reaching out — I&rsquo;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      style={{ fontFamily: INTER, fontSize: "0.9rem", fontWeight: 500, color: "#4F6092", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "20px" }}>
                      <div>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = "#4F6092"; e.target.style.boxShadow = "0 0 0 3px rgba(79,96,146,0.18)"; }}
                          onBlur={e => { e.target.style.borderColor = "#E5D9C5"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = "#4F6092"; e.target.style.boxShadow = "0 0 0 3px rgba(79,96,146,0.18)"; }}
                          onBlur={e => { e.target.style.borderColor = "#E5D9C5"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" style={labelStyle}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        placeholder="Tell me about your project..."
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                        onFocus={e => { e.target.style.borderColor = "#4F6092"; e.target.style.boxShadow = "0 0 0 3px rgba(79,96,146,0.18)"; }}
                        onBlur={e => { e.target.style.borderColor = "#E5D9C5"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    {status === "error" && (
                      <p style={{ fontFamily: INTER, fontSize: "0.9rem", color: "#E53E3E", margin: 0 }}>
                        {errorMsg}
                      </p>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: "52px",
                          padding: "0 32px",
                          backgroundColor: status === "sending" ? "#8A9BBF" : "#4F6092",
                          borderRadius: "6px",
                          fontFamily: INTER,
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          color: "#FBF8F3",
                          border: "none",
                          cursor: status === "sending" ? "not-allowed" : "pointer",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.backgroundColor = "#3C4D7A"; }}
                        onMouseLeave={e => { if (status !== "sending") e.currentTarget.style.backgroundColor = "#4F6092"; }}
                      >
                        {status === "sending" ? "Sending…" : "Send message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <aside className="md:sticky md:top-[120px] pb-16 md:pb-0" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ borderLeft: "2px solid #E5D9C5", paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ fontFamily: INTER, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.12em", color: "#A6907E", textTransform: "uppercase", margin: 0 }}>
                    Get in touch
                  </p>

                  <a
                    href="mailto:nomi.reiss@gmail.com"
                    style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2A2326", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4F6092")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2326")}
                  >
                    <Mail size={16} style={{ flexShrink: 0, color: "#A6907E" }} />
                    <span style={{ fontFamily: INTER, fontSize: "0.95rem", fontWeight: 500 }}>
                      nomi.reiss@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nomi-reiss-8a7a69b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2A2326", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4F6092")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2326")}
                  >
                    <LinkedinIcon />
                    <span style={{ fontFamily: INTER, fontSize: "0.95rem", fontWeight: 500 }}>
                      linkedin.com/in/nomi-reiss
                    </span>
                  </a>
                </div>

                <div style={{ borderLeft: "2px solid #E5D9C5", paddingLeft: "16px" }}>
                  <p style={{ fontFamily: INTER, fontSize: "0.82rem", color: "#8A7E72", margin: "0 0 6px" }}>
                    <span style={{ fontWeight: 600, color: "#2A2326" }}>Status:</span> Open to new opportunities.
                  </p>
                  <p style={{ fontFamily: INTER, fontSize: "0.82rem", color: "#8A7E72", margin: 0 }}>
                    <span style={{ fontWeight: 600, color: "#2A2326" }}>Location:</span> Toronto / Remote.
                  </p>
                </div>
              </aside>

            </div>
          </section>

        </div>
      </main>
    </>
  );
}
