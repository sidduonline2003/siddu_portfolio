import Hero from "@/components/ui/music-reactive-hero-section";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TechSphere from "@/components/TechSphere";
import FineTunedModels from "@/components/FineTunedModels";
import ProductShowcase3D from "@/components/ProductShowcase3D";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-black">
        <TechSphere />
        <ProductShowcase3D />
        <FineTunedModels />
        <ProjectsShowcase />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;