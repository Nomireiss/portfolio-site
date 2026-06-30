"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function LogoText() {
  return (
    <span style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "1.35rem",
      fontWeight: 600,
      color: "#2A2326",
      letterSpacing: "-0.01em",
    }}>
      Nomi Reiss
    </span>
  );
}

export default function Navigation({ forceColored = false, hideWorkLink = false }: { forceColored?: boolean; hideWorkLink?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isColored = forceColored;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: isColored ? "#F1E8D8" : "#FBF8F3",
        borderBottom: "1px solid #ECE3D6",
        transition: "background-color 0.5s ease",
      }}
    >
      <div className="w-full px-4 sm:px-10 md:px-20 py-4">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="Home">
            <LogoText />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1">
              {!hideWorkLink && (
                <a href="/#work" className="h-9 px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center" style={{ color: "#2A2326" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(42,35,38,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  Work
                </a>
              )}
              <a href="/about" className="h-9 px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center" style={{ color: "#2A2326" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(42,35,38,0.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                About
              </a>
            </div>
            <a href="/contact" className="h-11 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 inline-flex items-center"
              style={{ backgroundColor: "#2A2326", color: "#FBF8F3" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#3C4D7A"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#2A2326"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="/contact" className="h-11 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 inline-flex items-center"
              style={{ backgroundColor: "#2A2326", color: "#FBF8F3" }}
            >
              Get in touch
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#2A2326" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav className="md:hidden pt-3 pb-2 flex flex-col gap-1 mt-3" style={{ borderTop: "1px solid #ECE3D6" }}>
            {!hideWorkLink && (
              <a href="/#work" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium rounded-lg transition-colors flex items-center" style={{ color: "#2A2326" }}>
                Work
              </a>
            )}
            <a href="/about" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium rounded-lg transition-colors flex items-center" style={{ color: "#2A2326" }}>
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
