import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TimelineSection from "@/components/TimelineSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import LogosSection from "@/components/LogosSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TimelineSection />
      <BenefitsSection />
      <StepsSection />
      <VideoTestimonialSection />
      <PricingSection />
      <TestimonialsSection />
      <ReviewsSection />
      <LogosSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
