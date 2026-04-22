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
      {/* Cursor arrow — simple triangle head, no tail */}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L17 7L11 11L7 17Z"
          fill="#E8009A"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {/* Name badge */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "16px",
          backgroundColor: "#E8009A",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.78rem",
          fontWeight: 500,
          padding: "4px 10px",
          borderRadius: "2px",
          whiteSpace: "nowrap",
          letterSpacing: "0.01em",
        }}
      >
        Site Visitor
      </div>
    </div>
  );
}
