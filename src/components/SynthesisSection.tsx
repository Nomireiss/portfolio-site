"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { src: "/Synthesizing Workflows Card 1.png", alt: "Synthesizing Workflows — Card 1" },
  { src: "/Synthesizing Workflows Card 2.png", alt: "Synthesizing Workflows — Card 2" },
  { src: "/Synthesizing Workflows Card 3.png", alt: "Synthesizing Workflows — Card 3" },
];

export default function SynthesisSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const [card1, card2, card3] = cardRefs.current;

      // Cards 2 & 3 start below the container
      gsap.set(card2, { yPercent: 108 });
      gsap.set(card3, { yPercent: 108 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: pinnedRef.current,
          pinSpacing: false,
        },
      });

      // Dead zone (0→1): section fully visible, nothing animates yet
      tl.to({}, { duration: 1 });

      // Phase 1 (1→2): Card 2 slides in over Card 1; Card 1 scales down
      tl.to(card2, { yPercent: 0, duration: 1, ease: "none" }, 1)
        .to(card1, { scale: 0.94, duration: 1, ease: "none" }, 1);

      // Phase 2 (2→3): Card 3 slides in over Card 2; cards scale further
      tl.to(card3, { yPercent: 0, duration: 1, ease: "none" }, 2)
        .to(card2, { scale: 0.94, duration: 1, ease: "none" }, 2)
        .to(card1, { scale: 0.88, duration: 1, ease: "none" }, 2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    /* Outer section — tall to drive the scroll (400vh = 100vh dead zone + 2×150vh transitions) */
    <div
      ref={sectionRef}
      style={{ height: "400vh" }}
      className="relative"
    >
      {/* Pinned row — stays fixed during scroll, 100vh tall */}
      <div
        ref={pinnedRef}
        className="w-full h-screen flex flex-col lg:flex-row items-center"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
          paddingLeft: "clamp(1rem, 6.94vw, 80px)",
          paddingRight: "clamp(1rem, 6.94vw, 80px)",
          paddingTop: "90px",   /* clear sticky nav */
          paddingBottom: "48px",
          gap: "5vw",
        }}
      >
        {/* Left — heading + body */}
        <div className="flex-1 flex flex-col gap-8 shrink-0">
          <h2
            className="text-[#0A0A0A] leading-[0.93]"
            style={{
              fontFamily: '"Mona Sans", "Plus Jakarta Sans", Inter, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4.6vw, 4.6rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Synthesizing Our Workforces.
          </h2>
          <p
            className="text-[#3A3A3A] leading-7"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 400,
              textWrap: "balance",
            } as React.CSSProperties}
          >
            Great products are born when specialized talent meets organized need.
            My role is to bridge the gap between where the industry is going,
            logic-first, AI-augmented design, and where your product needs to be.
            This section visualizes the Strategic Grey Area — synthesizing our
            mutual needs into a cohesive system that moves the needle.
          </p>
        </div>

        {/* Right — stacked cards */}
        <div className="flex-1 relative w-full" style={{ height: "calc(100vh - 160px)" }}>
          {/* Card stack container — overflow hidden so cards below are clipped */}
          <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "20px" }}>
            {cards.map((card, i) => (
              <div
                key={card.src}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="w-full h-full"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transformOrigin: "top center",
                  willChange: "transform",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full block"
                  style={{ objectFit: "cover" }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
