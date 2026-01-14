import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/generated/hero_luis_consulting.png";
import { useAnalytics } from "@/hooks/use-analytics";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const { trackCTAClick } = useAnalytics();

  const scrollToDiagnostic = () => {
    trackCTAClick('Diagnosticar mi Negocio', 'Hero Section');
    const element = document.getElementById('diagnostico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenForm();
    }
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-5 py-2 border-2 border-primary rounded-full">
                <span className="text-sm font-bold text-primary tracking-wide">SISTEMA IMÁN LOCAL™</span>
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left text-foreground">
              Existes en la vida real.{" "}
              <span className="text-primary">Haz que Google te reconozca.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center lg:text-left max-w-xl">
              Dejas de perder contratos por ser invisible. Verificamos, optimizamos y te entregamos el control total de tu presencia digital. Sin rentas mensuales eternas.
            </p>

            {/* Microcopy */}
            <p className="text-base font-semibold text-foreground text-center lg:text-left">
              100% Tuyo desde el Día 1.
            </p>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start pt-2">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 shadow-soft-lg hover:shadow-xl hover:scale-[1.02] transition-all rounded-xl"
                onClick={scrollToDiagnostic}
              >
                Diagnosticar mi Negocio Gratis
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-110"></div>
              <img 
                src={heroImage} 
                alt="Profesional mostrando Google Business Profile optimizado" 
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