"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MONA = '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif';
const INTER = "Inter, sans-serif";

const projects = [
  { title: "Nylas", label: "Nylas - 1", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
  { title: "SeeTree", label: "SeeTree - 2", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
  { title: "MyTzedakah", label: "MyTzedakah - 3", image: "/MTF Card.png", href: "/work/mytzedakah" },
];

export default function ProjectGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section id="work" style={{ backgroundColor: "#F5F5F5", padding: "80px 0" }}>
      <div className="w-full max-w-[1280px] mx-auto px-6">

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
          fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
          color: "#0A0A0A",
          margin: "0 0 24px",
        }}>
          The Proven Results
        </h2>
        <p className="w-full md:max-w-[55%]" style={{
          fontFamily: INTER,
          fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "#3A3A3A",
          lineHeight: 1.7,
          margin: 0,
        }}>
          Every fold, transition, and interaction has led here. This collection
          represents the transition from abstract concepts to high-fidelity
          experiences. By balancing system logic with uncompromising craft, I
          transform raw ideas into polished interfaces that feel as intuitive as
          they are inevitable.
        </p>
      </div>

      {/* 3-column portrait grid — Figma canvas style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        {projects.map((project, i) => {
          const isActive = hovered === i;
          return (
            <div key={i}>
              {/* Figma-style frame label row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3px" }}>
                <p style={{
                  fontFamily: INTER,
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#3998EA" : "#999999",
                  transition: "color 0.2s ease, font-weight 0.2s ease",
                  margin: 0,
                  letterSpacing: "0.01em",
                }}>
                  {project.label}
                </p>
                {/* Component icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="5" fill="#3DB96B"/>
                  <path d="M7.5 7L5 10L7.5 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 7L15 10L12.5 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Card */}
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => project.href && router.push(project.href)}
                style={{
                  cursor: "pointer",
                  aspectRatio: "3 / 4",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 0,
                  backgroundColor: "#1a1a1a",
                  outline: isActive ? "3px solid #3998EA" : "3px solid transparent",
                  outlineOffset: "1px",
                  transition: "outline-color 0.2s ease",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%", objectFit: "cover",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
