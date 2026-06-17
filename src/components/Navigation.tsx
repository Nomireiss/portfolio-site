"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function LogoText() {
  return (
    <span style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "1.35rem",
      fontWeight: 600,
      color: "#0A0A0A",
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
      className="sticky top-0 z-50 border-b border-[#E5E5E5]"
      style={{
        backgroundColor: isColored ? "#EFF0F6" : "#ffffff",
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
                <a href="/#work" className="h-9 px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors inline-flex items-center">
                  Work
                </a>
              )}
              <a href="/about" className="h-9 px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors inline-flex items-center">
                About
              </a>
            </div>
            <a href="/contact" className="h-11 px-6 py-2.5 bg-[#1a1a1a] text-[#FAFAFA] text-sm font-medium rounded-full hover:bg-[#333333] hover:scale-105 transition-all duration-200 inline-flex items-center">
              Get in touch
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="/contact" className="h-11 px-6 py-2.5 bg-[#1a1a1a] text-[#FAFAFA] text-sm font-medium rounded-full hover:bg-[#333333] hover:scale-105 transition-all duration-200 inline-flex items-center">
              Get in touch
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <nav className="md:hidden pt-3 pb-2 flex flex-col gap-1 border-t border-[#E5E5E5] mt-3">
            {!hideWorkLink && (
              <a href="/#work" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors flex items-center">
                Work
              </a>
            )}
            <a href="/about" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors flex items-center">
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
