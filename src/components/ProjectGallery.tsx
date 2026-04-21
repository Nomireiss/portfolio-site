"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Nylas",
    year: "©24",
    image: "/MacBook Pro 16-inch Space Black on the Dark.png",
  },
  {
    title: "SeeTree",
    year: "©23",
    image: "/Untitled design - 2026-04-20T001356.456.png",
  },
  {
    title: "ShyMama",
    year: "©23",
    image: "/ShyMama Mockup.png",
  },
];

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (rowRef.current) {
        gsap.fromTo(
          rowRef.current,
          { y: 52, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rowRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative bg-black">

      {/* Top divider */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="border-t border-white/10" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-24" style={{ paddingTop: "80px" }}>

        {/* Section header */}
        <div ref={headingRef} className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#A3A3A3",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#A3A3A3",
                textTransform: "uppercase",
              }}
            >
              My Work
            </span>
          </div>

          <h2
            style={{
              fontFamily: '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif',
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
              letterSpacing: "-3px",
              lineHeight: 0.95,
              color: "white",
              margin: 0,
            }}
          >
            The Proven Results
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(220,220,220,0.9)",
              lineHeight: 1.7,
              margin: "20px 0 0",
              maxWidth: "62%",
            }}
          >
            Every fold, transition, and interaction has led here. This collection
            represents the transition from abstract concepts to high-fidelity
            experiences. By balancing system logic with uncompromising craft, I
            transform raw ideas into polished interfaces that feel as intuitive as
            they are inevitable.
          </p>
        </div>

        {/* Cards grid — 1 col mobile, 2 col md, 3 col lg */}
        <div
          ref={rowRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px", marginTop: "64px" }}
        >
          {projects.map((project, i) => {
            const isActive = hovered === i;
            const isBlurred = hovered !== null && !isActive;

            return (
              <div
                key={project.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col"
                style={{
                  cursor: "pointer",
                  filter: isBlurred ? "blur(3px)" : "blur(0px)",
                  opacity: isBlurred ? 0.55 : 1,
                  transform: isBlurred ? "scale(0.98)" : "scale(1)",
                  transition: "filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {/* Image card */}
                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    aspectRatio: "385 / 440",
                    borderRadius: "30px 0px 30px 0px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                </div>

                {/* Title below card */}
                <div
                  style={{
                    marginTop: "16px",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif',
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      letterSpacing: "-0.5px",
                      lineHeight: 1,
                      color: "white",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
