import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/generated/hero_luis_consulting.png";
import { useAnalytics } from "@/hooks/use-analytics";

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();

  const scrollToDiagnostic = () => {
    trackCTAClick('Diagnosticar mi Negocio Gratis', 'Hero Section');
    const element = document.getElementById('diagnostico');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 bg-muted border border-primary/20 rounded-full">
            <span className="text-sm font-bold text-primary tracking-wide">SISTEMA IMÁN LOCAL™</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Existes en la vida real.{" "}
            <span className="text-primary">Haz que Google te reconozca.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Verificación garantizada y software de gestión para negocios hispanos. Sin rentas mensuales eternas. <strong className="text-foreground">100% Tuyo.</strong>
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 shadow-soft-lg hover:shadow-xl hover:scale-[1.02] transition-all rounded-xl"
              onClick={scrollToDiagnostic}
            >
              Diagnosticar mi Negocio Gratis
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {/* Image - Below CTA */}
          <div className="pt-8 sm:pt-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-110"></div>
              <img 
                src={heroImage} 
                alt="Perfil de Google Business verificado" 
                className="relative w-full h-auto rounded-2xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
