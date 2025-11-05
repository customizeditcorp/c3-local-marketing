import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/generated/02_luis_tablet_gbp_CORRECTED.png";
import badge100 from "@/assets/generated/12_badge_100_tuyo.png";
import badge90 from "@/assets/generated/13_badge_90_dias.png";
import badgeSin from "@/assets/generated/14_badge_sin_ataduras.png";

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <img src={badge100} alt="100% Tuyo" className="h-16 sm:h-20 w-auto" />
              <img src={badge90} alt="90 Días" className="h-16 sm:h-20 w-auto" />
              <img src={badgeSin} alt="Sin Ataduras" className="h-16 sm:h-20 w-auto" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              De Invisible a Visible en 90 Días
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-foreground/80 text-center lg:text-left">
              Presencia digital completa que atrae clientes locales 24/7, ads-ready desde día 1, 100% tuyo
            </h2>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-muted-foreground text-center lg:text-left">
              ¿Pierdes contratos cada mes porque no apareces en Google o no te ves profesional? El Sistema Imán Local™ convierte tu negocio de servicios en un imán de clientes locales en solo 90 días.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                <Phone className="mr-2 h-5 w-5" />
                Agendar Llamada de Diagnóstico Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={scrollToHowItWorks}
              >
                Ver Cómo Funciona
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Profesional mostrando Google Business Profile" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;