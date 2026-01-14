import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustGridSection from "@/components/TrustGridSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import SoftwareSection from "@/components/SoftwareSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
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
      <TrustGridSection />
      <VideoTestimonialSection />
      <DiagnosticSection />
      <SoftwareSection />
      <TeamSection />
      <PricingSection onOpenForm={() => {}} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onOpenForm={() => {}} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
