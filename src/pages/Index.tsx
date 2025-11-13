import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TimelineSection from "@/components/TimelineSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import TeamSection from "@/components/TeamSection";
import LogosSection from "@/components/LogosSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DiagnosisForm from "@/components/DiagnosisForm";
import FormConfigPanel from "@/components/FormConfigPanel";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [ghlWebhookUrl, setGhlWebhookUrl] = useState("");

  // Load webhook URL from localStorage
  useState(() => {
    const savedConfig = localStorage.getItem("sistemaimanlocal_config");
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      setGhlWebhookUrl(config.ghlWebhookUrl || "");
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onOpenForm={() => setIsFormOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <TimelineSection />
      <BenefitsSection />
      <StepsSection />
      <VideoTestimonialSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <LogosSection />
      <FAQSection />
      <FinalCTASection onOpenForm={() => setIsFormOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <FormConfigPanel />
      {isFormOpen && (
        <DiagnosisForm 
          onClose={() => setIsFormOpen(false)} 
          ghlWebhookUrl={ghlWebhookUrl}
        />
      )}
    </div>
  );
};

export default Index;
