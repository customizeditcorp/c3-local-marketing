import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustGridSection from "@/components/TrustGridSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import SolutionSection from "@/components/SolutionSection";
import SoftwareSection from "@/components/SoftwareSection";
import TimelineSection from "@/components/TimelineSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DiagnosisForm from "@/components/DiagnosisForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onOpenForm={() => setIsFormOpen(true)} />
      <TrustGridSection />
      <DiagnosticSection />
      <SolutionSection />
      <SoftwareSection />
      <TimelineSection />
      <BenefitsSection />
      <VideoTestimonialSection />
      <TeamSection />
      <PricingSection onOpenForm={() => setIsFormOpen(true)} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onOpenForm={() => setIsFormOpen(true)} />
      <Footer />
      <WhatsAppButton />
      {isFormOpen && (
        <DiagnosisForm 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
};

export default Index;
