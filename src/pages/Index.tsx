import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustGridSection from "@/components/TrustGridSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import ServicesHubSection from "@/components/ServicesHubSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

import CallNowButton from "@/components/CallNowButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoTestimonialSection />
      <ServicesHubSection />
      <TrustGridSection />
      <DiagnosticSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      
      <CallNowButton />
    </div>
  );
};

export default Index;
