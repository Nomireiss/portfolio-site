import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import SynthesisSection from "@/components/SynthesisSection";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <SkillsGrid />
      <SynthesisSection />
      <ProjectGallery />
      <CTASection />
    </main>
  );
}
