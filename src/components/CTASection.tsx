"use client";

import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 flex justify-center">
        <div className="flex-1 max-w-[576px] flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2
              className="text-[#FAFAFA] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-10"
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                fontStretch: "120%",
              }}
            >
              Ready to resolve the ambiguity?
            </h2>
            <p className="text-[#FAFAFA]/80 text-base leading-6">
              I&rsquo;m currently looking for my next high-stakes challenge at
              the Principal level. If you have a complex product ecosystem that
              needs a signature sense of clarity, and a designer who isn&rsquo;t
              afraid to get their hands dirty in the logic, let&rsquo;s talk.
            </p>
          </div>
          <a
            href="mailto:hello@portfolio.com"
            className="h-9 px-4 py-2 bg-[#FAFAFA] text-[#171717] text-sm font-medium rounded-lg hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Let&rsquo;s Chat
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
