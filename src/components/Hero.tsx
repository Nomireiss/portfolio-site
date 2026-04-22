"use client";

import { ArrowUpRight } from "lucide-react";
import CommentCard, { Mention } from "@/components/CommentCard";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[480px] md:min-h-[748px]"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Grid overlay — 4 cols mobile → 8 cols tablet → 12 cols desktop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full px-4 sm:px-10 md:px-20 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-3 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full ${i >= 4 ? "hidden sm:block" : ""} ${i >= 8 ? "sm:hidden md:block" : ""}`}
              style={{ backgroundColor: "rgba(255, 0, 0, 0.08)" }}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left column — text */}
        <div className="w-full md:flex-1 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1
              className="text-[#0A0A0A] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[48px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every Great Design is
              <br />
              Born from Ambiguity.
            </h1>
            <p className="text-base md:text-lg leading-7">
              <span className="text-[#0A0A0A] font-bold">
                Great digital experiences aren&rsquo;t found; they are forged.
              </span>
              <br />
              <span className="text-[#2C2C2C] font-normal">
                I embrace the initial ambiguity of the product lifecycle, using
                rapid prototyping, empathetic research, and rigorous testing to
                refine raw concepts into polished, pixel-perfect interactions.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="h-11 px-6 py-2.5 bg-[#0D99FF] text-[#FAFAFA] text-sm font-medium rounded-[10px] hover:bg-[#0B87E0] transition-colors inline-flex items-center"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="h-11 px-6 py-2.5 text-[#0A0A0A] text-sm font-medium rounded-[10px] hover:bg-black/5 transition-colors inline-flex items-center gap-2"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right column — hidden on mobile */}
        <div className="hidden md:block md:flex-1 relative">
          <img
            src="/image 1.png"
            alt="Portfolio preview"
            className="w-full h-[596px] object-cover"
          />

          {/* Figma comment card */}
          <CommentCard time="2 minutes ago" className="-top-4 -right-16">
            <p>
              <Mention>DesignTeam </Mention>
              Since we know the users on this page are likely Heads of Product
              and Decision Makers, let&rsquo;s swap this wireframe placeholder
              for the Multidimensional Value Prism.
            </p>
            <p>
              We need to kill the ambiguity of &lsquo;what I do&rsquo;
              immediately. They&rsquo;ve probably got 20 other tabs open, so
              let&rsquo;s give them the &lsquo;Treasure&rsquo; up front: a
              high-fidelity visual of my process that proves I can handle their
              most complex logic. Let&rsquo;s make the interaction on this
              crisp;{" "}
              <strong>
                if they&rsquo;re going to judge the &lsquo;Treasure,&rsquo;
                let&rsquo;s give them something worth finding.&rdquo;
              </strong>
            </p>
          </CommentCard>
        </div>
      </div>
    </section>
  );
}
