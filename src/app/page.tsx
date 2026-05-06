import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <ProjectGallery />
      <CTASection />
    </main>
  );
}
