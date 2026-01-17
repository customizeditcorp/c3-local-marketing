import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustGridSection from "@/components/TrustGridSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoTestimonialSection />
      <TrustGridSection />
      <DiagnosticSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;