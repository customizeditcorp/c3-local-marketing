import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import heroImage from "@/assets/generated/02_luis_tablet_gbp_CORRECTED.png";
import badge100 from "@/assets/generated/12_badge_100_tuyo.png";
import badge90 from "@/assets/generated/13_badge_90_dias.png";
import badgeSin from "@/assets/generated/14_badge_sin_ataduras.png";

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src="https://elfsightcdn.com/platform.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);
  const scrollToHowItWorks = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Content - Asymmetric Layout */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badges - More Prominent */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <img src={badge100} alt="100% Tuyo" className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-lg hover:scale-105 transition-transform" />
              <img src={badge90} alt="90 Días" className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-lg hover:scale-105 transition-transform" />
              <img src={badgeSin} alt="Sin Ataduras" className="h-20 sm:h-24 lg:h-28 w-auto drop-shadow-lg hover:scale-105 transition-transform" />
            </div>

            {/* Bold Typography with Stronger Hierarchy */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
              De <span className="text-primary">Invisible</span> a <span className="text-secondary">Visible</span> en 90 Días
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-snug text-center lg:text-left">
              Presencia digital completa que atrae clientes locales 24/7, ads-ready desde día 1, 100% tuyo
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center lg:text-left max-w-2xl">
              ¿Pierdes contratos cada mes porque no apareces en Google o no te ves profesional? El Sistema Imán Local™ convierte tu negocio de servicios en un imán de clientes locales en solo 90 días.
            </p>

            {/* CTAs - Larger and More Prominent */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Phone className="mr-3 h-6 w-6" />
                Agendar Llamada de Diagnóstico Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all"
                onClick={scrollToHowItWorks}
              >
                Ver Cómo Funciona
                <ArrowDown className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Image - Larger with Better Shadow */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform -rotate-6"></div>
              <img 
                src={heroImage} 
                alt="Profesional mostrando Google Business Profile" 
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:shadow-primary/20 transition-shadow"
              />
            </div>

            {/* Google Reviews Widget */}
            <div className="mt-12">
              <Card className="p-6 sm:p-8 border-2">
                <div className="elfsight-app-ca4a2a87-be2a-4c74-8b7e-2f02e19c2c53" data-elfsight-app-lazy></div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;