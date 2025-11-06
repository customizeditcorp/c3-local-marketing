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
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tu <span className="text-primary">Transformación</span> en <span className="text-secondary">90 Días</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            De invisible a imparable, paso a paso
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 max-w-6xl mx-auto">
          {timeline.map((phase, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-2xl transition-all">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className="p-8 sm:p-12 lg:p-16 bg-background">
                  <div className="flex items-center gap-5 mb-8">
                    <Badge className={`${phase.badgeColor} text-base sm:text-lg px-5 py-2 font-bold`}>
                      {phase.month}
                    </Badge>
                    <span className="text-base sm:text-lg text-muted-foreground font-semibold">Días {phase.badge}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    {phase.title}
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <p className="font-bold text-xl">Lo que {index === 2 ? 'entregas' : index === 1 ? 'optimizamos' : 'construimos'}:</p>
                    <ul className="space-y-4">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <Check className="h-7 w-7 text-primary flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Card className={`p-6 sm:p-8 ${phase.resultColor} border-2`}>
                    <p className="text-lg sm:text-xl font-bold leading-relaxed">{phase.result}</p>
                  </Card>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} min-h-[500px] lg:min-h-[600px] bg-muted`}>
                  <img 
                    src={phase.image} 
                    alt={`Timeline ${phase.title}`}
                    className="w-full h-full object-cover object-center"
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