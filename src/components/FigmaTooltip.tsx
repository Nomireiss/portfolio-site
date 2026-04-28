"use client";

import { useState, useRef, useEffect } from "react";

const MONO = "'JetBrains Mono', 'Courier New', monospace";

interface FigmaTooltipProps {
  label: string;
  children: React.ReactNode;
  delay?: number;
  display?: string;
}

export default function FigmaTooltip({ label, children, delay = 300, display = "inline-flex" }: FigmaTooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }

  function handleMouseLeave() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div
      style={{ position: "relative", display }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#1E1E1E",
            color: "#E5E5E5",
            fontFamily: MONO,
            fontSize: "10px",
            lineHeight: 1.4,
            padding: "4px 8px",
            borderRadius: "2px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 100,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
