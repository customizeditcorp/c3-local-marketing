import { Card } from "@/components/ui/card";
import { Search, Award, Key, TrendingUp, Clock, Languages } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Search,
      title: "VISIBILIDAD",
      subtitle: "Ya no serás invisible",
      description: "Apareces cuando clientes buscan tu servicio en tu zona. Google Business Profile verificado + Website profesional."
    },
    {
      icon: Award,
      title: "CONFIANZA",
      subtitle: "Te verás tan profesional como la competencia",
      description: 'Presencia digital completa que genera credibilidad instantánea. No más perder contratos por verte "pequeño".'
    },
    {
      icon: Key,
      title: "CONTROL",
      subtitle: "Eres dueño 100% de todo",
      description: "Todas las credenciales en tus manos. Si dejas de trabajar con nosotros, te quedas con todo. Sin ataduras."
    },
    {
      icon: TrendingUp,
      title: "ESCALABILIDAD",
      subtitle: "Listo para crecer cuando quieras",
      description: "Sistema ads-ready desde día 1. Elige: orgánico (gratis pero más lento) o acelerado (con publicidad)."
    },
    {
      icon: Clock,
      title: "24/7",
      subtitle: "Tu negocio trabaja mientras duermes",
      description: "Website + GBP optimizado atrayendo clientes automáticamente. Ya no dependes solo de referencias."
    },
    {
      icon: Languages,
      title: "SIN BARRERAS",
      subtitle: "Todo en español, sin complicaciones",
      description: "Entendemos tu negocio, tu idioma, tus desafíos. Implementación sin estrés técnico."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold Title with More Impact */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Qué Logras con el <span className="text-primary">Sistema Imán Local™</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Beneficios reales que transforman tu negocio
          </p>
        </div>

        {/* 3-Column Grid with Generous Spacing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:shadow-xl hover:scale-105 transition-all border-2 hover:border-primary/50 bg-background">
              <benefit.icon className="h-14 w-14 text-primary mb-6 stroke-[1.5]" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">{benefit.title}</h3>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-secondary">
                {benefit.subtitle}
              </h4>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;