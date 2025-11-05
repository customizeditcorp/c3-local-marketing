import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import mes1 from "@/assets/generated/05_timeline_mes1_fundacion.png";
import mes2 from "@/assets/generated/06_timeline_mes2_optimizacion.png";
import mes3 from "@/assets/generated/07_timeline_mes3_activacion.png";

const TimelineSection = () => {
  const timeline = [
    {
      month: "MES 1",
      badge: "1-30",
      badgeColor: "bg-primary text-primary-foreground",
      title: "FUNDACIÓN DIGITAL",
      image: mes1,
      items: [
        "Google Business Profile creado y en verificación",
        "Website profesional publicado",
        "Análisis de competencia y keywords",
        "Brief completo de tu negocio"
      ],
      result: "🎯 Ya eres visible digitalmente. Los clientes pueden encontrarte.",
      resultColor: "bg-primary/10 border-primary"
    },
    {
      month: "MES 2",
      badge: "31-60",
      badgeColor: "bg-secondary text-secondary-foreground",
      title: "OPTIMIZACIÓN",
      image: mes2,
      items: [
        "SEO local implementado",
        "10 keywords estratégicas activas",
        "Contenido refinado",
        "Perfil completamente optimizado"
      ],
      result: "🎯 Tu presencia digital trabaja a tu favor. Empiezas a destacar.",
      resultColor: "bg-secondary/10 border-secondary"
    },
    {
      month: "MES 3",
      badge: "61-90",
      badgeColor: "bg-muted text-foreground",
      title: "ACTIVACIÓN COMPLETA",
      image: mes3,
      items: [
        "Todas las credenciales (eres dueño 100%)",
        "Capacitación completa",
        "Guía de gestión de reviews",
        "Sistema listo para Google Ads"
      ],
      result: "🎯 Sistema imán completo trabajando 24/7. Listo para escalar.",
      resultColor: "bg-muted border-border"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-16 text-center">
          Tu Transformación en 90 Días
        </h2>

        <div className="space-y-8 sm:space-y-16 max-w-6xl mx-auto">
          {timeline.map((phase, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <Badge className={`${phase.badgeColor} text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2`}>
                      {phase.month}
                    </Badge>
                    <span className="text-sm sm:text-base text-muted-foreground">Días {phase.badge}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    {phase.title}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <p className="font-semibold text-base sm:text-lg">Lo que {index === 2 ? 'entregas' : index === 1 ? 'optimizamos' : 'construimos'}:</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Card className={`p-4 sm:p-6 ${phase.resultColor}`}>
                    <p className="text-sm sm:text-base lg:text-lg font-semibold">{phase.result}</p>
                  </Card>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={phase.image} 
                    alt={`Timeline ${phase.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;