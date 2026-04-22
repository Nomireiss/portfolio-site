"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    document.body.style.cursor = "none";
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s ease",
      }}
    >
      {/* Figma-style arrow */}
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 2L2 18.5L6.2 13.8L9.6 21.2L12.4 20L9 12.5L16 12.5Z"
          fill="#E8009A"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      {/* Name badge */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "14px",
          backgroundColor: "#E8009A",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.72rem",
          fontWeight: 500,
          padding: "3px 8px",
          borderRadius: "4px",
          whiteSpace: "nowrap",
          letterSpacing: "0.01em",
        }}
      >
        Site Visitor
      </div>
    </div>
  );
}
