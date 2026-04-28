"use client";

import { Map, Origami, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CommentCard, { Mention, Bold } from "@/components/CommentCard";

const skills = [
  {
    icon: Map,
    title: "Skill 01: Information Architecture",
    description:
      'The "Map" Skill: Designing the skeletal logic that prevents user friction.',
  },
  {
    icon: Origami,
    title: "Skill 02: Visual Interaction & Craft",
    description:
      'The "Precision" Skill: Obsessing over tactile interactions, physics, and the structural integrity of the UI.',
  },
  {
    icon: BarChart2,
    title: "Skill 03: Product Strategy",
    description:
      'The "Business" Skill: Aligning product goals with the operational needs of the organization.',
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
            There&rsquo;s a lot of white space here. I don&rsquo;t mind it
            for the mapping stage, it keeps the hierarchy clean while
            we&rsquo;re still architecting the flow. Let&rsquo;s just keep
            an eye on the density as the components get more complex.
          </p>
        </CommentCard>
      </div>

      {/* Top-left comment card — desktop only, floats above section */}
      <div className="hidden lg:block">
        <CommentCard time="1 minute ago" className="left-[92px] top-[32px]">
          <p>
            <Bold>Note to Self: </Bold>
            Does the origami crane icon hit the right note here? I love that
            it refers to craft and precision, but is that obvious enough?
          </p>
        </CommentCard>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 max-w-[672px] mx-auto text-center">
          <h2
            className="font-semibold leading-tight"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)", lineHeight: 1.1 }}
          >
            <span className="text-[#0A0A0A]">Resolving </span>
            <span style={{ color: "#0A0A0A" }} className="font-bold">the Ambiguity.</span>
          </h2>
          <p className="text-[#0A0A0A] text-lg leading-6" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
            I treat the design process as an exercise in structural clarity. This
            is the stage where fragmented needs become a cohesive system. By
            mapping the architecture and pressure-testing the strategy early, I
            ensure that the final result isn&rsquo;t just visually compelling,
            but operationally sound.
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
