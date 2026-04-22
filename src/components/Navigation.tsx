"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

function LogoIcon({ colored }: { colored: boolean }) {
  return (
    <div style={{ display: "grid", height: "64px", alignItems: "center" }}>
      <img
        src="/Nomi Logo Rough.png"
        alt="Nomi"
        style={{
          gridArea: "1 / 1",
          height: "64px",
          width: "auto",
          opacity: colored ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />
      <img
        src="/Nomi Logo.png"
        alt="Nomi"
        style={{
          gridArea: "1 / 1",
          height: "64px",
          width: "auto",
          opacity: colored ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}

export default function Navigation({ forceColored = false }: { forceColored?: boolean }) {
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
          <a href="#" aria-label="Home">
            <LogoIcon colored={isColored} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1">
              <a href="#work" className="h-9 px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors inline-flex items-center">
                Work
              </a>
              <a href="/about" className="h-9 px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors inline-flex items-center">
                About
              </a>
            </div>
            <a href="#contact" className="h-11 px-6 py-2.5 bg-[#0D99FF] text-[#FAFAFA] text-sm font-medium rounded-[10px] hover:bg-[#0B87E0] transition-colors inline-flex items-center">
              Get in touch
            </a>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#contact" className="h-11 px-6 py-2.5 bg-[#0D99FF] text-[#FAFAFA] text-sm font-medium rounded-[10px] hover:bg-[#0B87E0] transition-colors inline-flex items-center">
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
            <a href="#work" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors flex items-center">
              Work
            </a>
            <a href="/about" onClick={() => setMobileOpen(false)} className="h-10 px-3 text-sm font-medium text-[#0A0A0A] hover:bg-black/5 rounded-lg transition-colors flex items-center">
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
