"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';
const INTER = "Inter, sans-serif";

const projects = [
  { title: "Nylas", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
  { title: "SeeTree", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
  { title: "ShyMama", image: "/ShyMama Mockup.png", href: "/work/shymama" },
];

export default function ProjectGallery() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="work" style={{ backgroundColor: "#EFF0F6", padding: "80px clamp(60px, 6.94vw, 80px)" }}>

      {/* Custom circle cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 48, height: 48, borderRadius: "50%",
          backgroundColor: "#0A0A0A",
          pointerEvents: "none", zIndex: 9999,
          opacity: cursorVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Section header */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0A0A0A", flexShrink: 0 }} />
          <span style={{ fontFamily: INTER, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.14em", color: "#0A0A0A", textTransform: "uppercase" }}>
            My Work
          </span>
        </div>
        <h2 style={{
          fontFamily: MONA,
          fontWeight: 800,
          fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
          color: "#0A0A0A",
          margin: "0 0 20px",
        }}>
          The Proven Results
        </h2>
        <p style={{
          fontFamily: INTER,
          fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "#3A3A3A",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "55%",
        }}>
          Every fold, transition, and interaction has led here. This collection
          represents the transition from abstract concepts to high-fidelity
          experiences. By balancing system logic with uncompromising craft, I
          transform raw ideas into polished interfaces that feel as intuitive as
          they are inevitable.
        </p>
      </div>

      {/* 3-column portrait grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {projects.map((project, i) => {
          const isActive = hovered === i;
          return (
            <div
              key={i}
              onMouseEnter={() => { setHovered(i); setCursorVisible(true); }}
              onMouseLeave={() => { setHovered(null); setCursorVisible(false); }}
              onClick={() => project.href && router.push(project.href)}
              style={{
                cursor: "none",
                aspectRatio: "3 / 4",
                position: "relative",
                overflow: "hidden",
                borderRadius: 0,
                backgroundColor: "#1a1a1a",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Hover overlay + title */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.4s ease",
                display: "flex", alignItems: "flex-end",
                padding: "clamp(20px, 3vw, 32px)",
              }}>
                <h3 style={{
                  fontFamily: MONA,
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "#fff",
                  margin: 0,
                }}>
                  {project.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
