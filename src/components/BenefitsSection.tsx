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
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-16 text-center">
          Qué Logras con el Sistema Imán Local™
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{benefit.title}</h3>
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary/80">
                {benefit.subtitle}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
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