"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const MONA = '"Manrope", Inter, sans-serif';
const MONO = "'JetBrains Mono', 'Courier New', monospace";
const INTER = "Inter, sans-serif";

type ResultItem = {
  id: string;
  category: string;
  label: string;
  hint: string;
  keywords: string[];
  isEasterEgg?: boolean;
  action: (router: ReturnType<typeof useRouter>, close: () => void) => void;
};

const ALL_RESULTS: ResultItem[] = [
  {
    id: "nylas",
    category: "Navigate",
    label: "Nylas",
    hint: "Case Study →",
    keywords: ["nylas", "platform", "dashboard", "shadcn", "tailwind", "react", "design"],
    action: (router, close) => { close(); router.push("/work/nylas"); },
  },
  {
    id: "seetree",
    category: "Navigate",
    label: "SeeTree",
    hint: "Case Study →",
    keywords: ["seetree", "agritech", "gis", "agriculture", "mapping"],
    action: (router, close) => { close(); router.push("/work/seetree"); },
  },
  {
    id: "mytzedakah",
    category: "Navigate",
    label: "MyTzedakah",
    hint: "Case Study →",
    keywords: ["mytzedakah", "tzedakah", "fintech", "philanthropy", "charity", "fundraising"],
    action: (router, close) => { close(); router.push("/work/mytzedakah"); },
  },
  {
    id: "skill-ia",
    category: "Technical Skills",
    label: "Information Architecture",
    hint: "Jump to Skills ↓",
    keywords: ["information", "architecture", "ia", "map", "logic", "structure", "tailwind", "system", "skeleton"],
    action: (router, close) => {
      close();
      if (window.location.pathname === "/") {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#about");
      }
    },
  },
  {
    id: "skill-visual",
    category: "Technical Skills",
    label: "Visual Interaction & Craft",
    hint: "Jump to Skills ↓",
    keywords: ["visual", "interaction", "craft", "ui", "precision", "animation", "micro", "tailwind"],
    action: (router, close) => {
      close();
      if (window.location.pathname === "/") {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#about");
      }
    },
  },
  {
    id: "skill-strategy",
    category: "Technical Skills",
    label: "Product Strategy",
    hint: "Jump to Skills ↓",
    keywords: ["product", "strategy", "business", "logic", "kpi", "roadmap", "tailwind"],
    action: (router, close) => {
      close();
      if (window.location.pathname === "/") {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#about");
      }
    },
  },
  {
    id: "email",
    category: "Contact",
    label: "Email Nomi",
    hint: "nomi.reiss@gmail.com",
    keywords: ["email", "contact", "nomi", "mail", "reach", "message"],
    action: (_, close) => { close(); window.location.href = "mailto:nomi.reiss@gmail.com"; },
  },
  {
    id: "linkedin",
    category: "Contact",
    label: "LinkedIn",
    hint: "linkedin.com/in/nomi-reiss",
    keywords: ["linkedin", "connect", "social", "nomi", "profile"],
    action: (_, close) => { close(); window.open("https://www.linkedin.com/in/nomi-reiss-8a7a69b7", "_blank"); },
  },
  {
    id: "easter-egg",
    category: "[CLASSIFIED]",
    label: '[LOGIC]: The secret to a perfect tart is structural integrity.',
    hint: "🥐",
    keywords: ["pastry", "secret", "tart", "bake", "croissant", "cake"],
    isEasterEgg: true,
    action: () => {},
  },
];

function fuzzyMatch(query: string, item: ResultItem): boolean {
  if (!query.trim()) return !item.isEasterEgg;
  const q = query.toLowerCase().trim();
  if (item.label.toLowerCase().includes(q)) return true;
  if (item.keywords.some(k => k.includes(q))) return true;
  const label = item.label.toLowerCase();
  let qi = 0;
  for (let i = 0; i < label.length && qi < q.length; i++) {
    if (label[i] === q[qi]) qi++;
  }
  return qi === q.length && q.length >= 2;
}

function groupByCategory(results: ResultItem[]) {
  const groups: Record<string, ResultItem[]> = {};
  for (const r of results) {
    if (!groups[r.category]) groups[r.category] = [];
    groups[r.category].push(r);
  }
  return groups;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const filtered = ALL_RESULTS.filter(r => fuzzyMatch(query, r));

  useEffect(() => { setActiveIndex(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[activeIndex];
        if (item && !item.isEasterEgg) item.action(router, close);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, activeIndex, router, close]);

  if (!open) return null;

  const groups = groupByCategory(filtered);
  let flatIndex = 0;

  return (
    <div
      onClick={close}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        backgroundColor: "rgba(42,35,38,0.45)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        paddingTop: "18vh",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "560px", margin: "0 16px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5D9C5",
          borderRadius: "12px",
          boxShadow: "0 24px 64px rgba(42,35,38,0.18), 0 4px 16px rgba(42,35,38,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Input row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          padding: "16px 20px",
          borderBottom: filtered.length > 0 ? "1px solid #ECE3D6" : "none",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A6907E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, skills, contact..."
            style={{
              flex: 1, border: "none", outline: "none", background: "transparent",
              fontFamily: MONA, fontSize: "1rem", fontWeight: 400,
              color: "#2A2326", caretColor: "#4F6092",
            }}
          />
          <kbd style={{
            fontFamily: MONO, fontSize: "10px", color: "#A6907E",
            border: "1px solid #E5D9C5", borderRadius: "4px",
            padding: "2px 6px", flexShrink: 0,
          }}>
            ESC
          </kbd>
        </div>

        {/* Results */}
        {filtered.length > 0 && (
          <div style={{ maxHeight: "340px", overflowY: "auto", padding: "8px 0" }}>
            {Object.entries(groups).map(([category, items]) => (
              <div key={category}>
                <div style={{
                  fontFamily: INTER, fontSize: "10px", fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#A6907E", padding: "8px 20px 4px",
                }}>
                  {category}
                </div>

                {items.map(item => {
                  const idx = flatIndex++;
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => { if (!item.isEasterEgg) item.action(router, close); }}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "9px 20px",
                        backgroundColor: isActive ? (item.isEasterEgg ? "#2A2326" : "#F1E8D8") : "transparent",
                        cursor: item.isEasterEgg ? "default" : "pointer",
                        transition: "background-color 0.1s ease",
                      }}
                    >
                      <span style={{
                        fontFamily: MONO, fontSize: "13px",
                        color: item.isEasterEgg ? (isActive ? "#4F6092" : "#8A7E72") : (isActive ? "#2A2326" : "#2A2326"),
                        fontStyle: item.isEasterEgg ? "italic" : "normal",
                      }}>
                        {item.label}
                      </span>
                      <span style={{
                        fontFamily: MONO, fontSize: "11px",
                        color: item.isEasterEgg ? (isActive ? "#8A7E72" : "#A6907E") : (isActive ? "#8A7E72" : "#A6907E"),
                        flexShrink: 0, marginLeft: "16px",
                      }}>
                        {item.hint}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && query.trim() && (
          <div style={{
            padding: "32px 20px", textAlign: "center",
            fontFamily: MONO, fontSize: "12px", color: "#A6907E",
          }}>
            No results for &ldquo;{query}&rdquo;
          </div>
        )}

        {/* Footer hint */}
        <div style={{
          borderTop: "1px solid #ECE3D6",
          padding: "10px 20px",
          display: "flex", gap: "16px", alignItems: "center",
        }}>
          {[
            { keys: ["↑", "↓"], label: "navigate" },
            { keys: ["↵"], label: "select" },
            { keys: ["esc"], label: "close" },
          ].map(({ keys, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {keys.map(k => (
                <kbd key={k} style={{
                  fontFamily: MONO, fontSize: "10px", color: "#A6907E",
                  border: "1px solid #E5D9C5", borderRadius: "3px",
                  padding: "1px 5px",
                }}>
                  {k}
                </kbd>
              ))}
              <span style={{ fontFamily: INTER, fontSize: "11px", color: "#A6907E" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
