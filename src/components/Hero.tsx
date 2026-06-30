"use client";

import SplitText from "@/components/SplitText";

const MONA = '"Manrope", Inter, sans-serif';
const INTER = "Inter, sans-serif";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(24px, 3vw, 40px) 0 0",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col">
          <SplitText
            tag="h1"
            text="Senior Product Designer."
            className=""
            delay={30}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
          <SplitText
            tag="p"
            text="Forever partial to the messy puzzles that come before the polished briefs."
            className=""
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
        </div>
      </div>
      <style jsx global>{`
        .split-parent h1, h1.split-parent {
          font-family: ${MONA};
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3.6rem);
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #2A2326;
          margin: 0 0 10px;
        }
        .split-parent p, p.split-parent {
          font-family: ${INTER};
          font-size: clamp(1.05rem, 1.4vw, 1.2rem);
          font-weight: 400;
          line-height: 1.7;
          color: #2A2326;
          margin: 0;
        }

      `}</style>
    </section>
  );
}
