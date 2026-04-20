import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <SkillsGrid />
      <div style={{ background: "#000" }}>
        <ProjectGallery />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
