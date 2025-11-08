import { Button } from "@/components/ui/button";
import { Phone, ArrowDown, Shield, Calendar, Zap } from "lucide-react";
import heroImage from "@/assets/generated/hero_luis_consulting.png";

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Content - Asymmetric Layout */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-full hover:bg-primary/15 transition-all hover:scale-105">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-bold text-foreground">100% Tuyo</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-secondary/10 border-2 border-secondary/20 rounded-full hover:bg-secondary/15 transition-all hover:scale-105">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="font-bold text-foreground">90 Días</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-accent/10 border-2 border-accent/20 rounded-full hover:bg-accent/15 transition-all hover:scale-105">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-bold text-foreground">Sin Ataduras</span>
              </div>
            </div>

            {/* Bold Typography with Stronger Hierarchy */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
              De <span className="text-primary">Invisible</span> a <span className="text-secondary">Visible</span> en 90 Días
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-snug text-center lg:text-left">
              Presencia digital completa que atrae clientes locales 24/7, ads-ready desde día 1, 100% tuyo
            </h2>
            
            <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center lg:text-left max-w-2xl space-y-4">
              <p>¿Pierdes contratos cada mes porque no apareces en Google o no te ves profesional?</p>
              <p className="font-semibold text-foreground">El Sistema Imán Local™ convierte tu negocio de servicios en un imán de clientes locales en solo 90 días.</p>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;