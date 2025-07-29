import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import HowItWorksSection from "@/components/ui/how-it-works";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
