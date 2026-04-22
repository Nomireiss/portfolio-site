"use client";

import { Map, Origami, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CommentCard, { Mention, Bold } from "@/components/CommentCard";

const skills = [
  {
    icon: Map,
    title: "Skill 01: Information Architecture",
    description:
      'The "Map" Skill: Designing the skeletal logic that keeps users from getting lost.',
  },
  {
    icon: Origami,
    title: "Skill 02: Visual Interaction & Craft",
    description:
      'The "Treasure" Skill: Obsessing over micro-interactions, lighting, and the tactile feel of the UI.',
  },
  {
    icon: BarChart2,
    title: "Skill 03: Product Strategy",
    description:
      'The "Business" Skill: Aligning the design with the actual KPIs that Heads of Product care about.',
  },
];

export default function SkillsGrid() {
  return (
    <section
      id="about"
      className="relative bg-white py-12 md:py-24 overflow-visible"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
        paddingBottom: "24px",
      }}
    >
      {/* Bottom-right comment card — floats into the gap between sections */}
      <div className="hidden lg:block">
        <CommentCard time="just now" className="right-[92px] bottom-[-200px]">
          <p>
            There&rsquo;s a lot of white space here. I don&rsquo;t mind it as
            we&rsquo;re still mapping things out, but let&rsquo;s keep it in
            mind as we move through the design stage.
          </p>
        </CommentCard>
      </div>

      {/* Top-left comment card — desktop only, floats above section */}
      <div className="hidden lg:block">
        <CommentCard time="1 minute ago" className="left-[92px] top-[32px]">
          <p>
            <Bold>Note to Self: </Bold>
            Does the origami crane icon in the Visual Interaction section hit
            the right note? I love that it refers to craft and precision, but
            is that obvious enough from this icon?
          </p>
          <p>
            <Mention>@Hiring Manager / Head of Product </Mention>
            This is where I stop talking about the map and start showing you
            the treasure. The goal here is to prove that I can handle the
            &lsquo;heavy lifting&rsquo; of your most complex features while
            keeping the aesthetic at a premium level. Let&rsquo;s dial up the
            fidelity to 75% here, it&rsquo;s time you see what I can actually
            do.
          </p>
        </CommentCard>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 max-w-[672px] mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight md:leading-10"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
          >
            <span className="text-[#0A0A0A]">The Architect of </span>
            <span style={{ color: "#0A0A0A" }} className="font-bold">Clarity</span>
            <span className="text-[#0A0A0A]">.</span>
          </h2>
          <p className="text-[#0A0A0A] text-lg leading-6" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            I specialize in the &lsquo;messy middle&rsquo; of the design process.
            While others might see ambiguity as a roadblock, I treat it as raw
            material. My role is to act as the bridge, translating high-level
            business goals and fragmented user needs into cohesive digital systems
            that are as logically sound as they are visually compelling.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className="bg-white border border-[#E5E5E5] rounded-2xl shadow-sm"
              >
                <CardContent className="p-6 flex flex-col gap-6">
                  <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-[#171717]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#0A0A0A] text-base font-semibold leading-6">
                      {skill.title}
                    </p>
                    <p className="text-[#737373] text-sm leading-5">
                      {skill.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
