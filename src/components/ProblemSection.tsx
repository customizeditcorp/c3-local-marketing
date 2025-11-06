import { Card } from "@/components/ui/card";
import { Search, Eye, Globe, Star, TrendingDown } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ProblemSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Buscan en Google",
      description: '"landscaping near me" → Si no apareces, ya perdiste'
    },
    {
      icon: Eye,
      title: "Comparan Perfiles",
      description: "Ven tu competencia con fotos, reseñas, horarios → Si no te ves profesional, te descartan"
    },
    {
      icon: Globe,
      title: "Visitan Websites",
      description: "Verifican que eres legítimo → Si no tienes website o se ve mal, siguiente"
    },
    {
      icon: Star,
      title: "Leen Reseñas",
      description: "Confirman confiabilidad → Sin reseñas = sin confianza"
    },
    {
      icon: TrendingDown,
      title: "Eligen al Más Confiable",
      description: "El que pasó todos los filtros gana el contrato"
    }
  ];

  const costs = [
    {
      title: "Pierdes dinero:",
      points: [
        "2-10 clientes potenciales cada mes",
        "Contratos que se van a la competencia"
      ]
    },
    {
      title: "Pierdes tiempo:",
      points: [
        "Dependes 100% de referencias (no escalable)",
        "Frustración de hacer buen trabajo pero no conseguir clientes nuevos"
      ]
    },
    {
      title: "Pierdes oportunidades:",
      points: [
        "Barrera de idioma con herramientas digitales",
        "Pagar mensualidades eternas sin ser dueño de nada"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold Title */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿Por Qué <span className="text-primary">Pierdes Clientes</span> Cada Mes?
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            La realidad dolorosa: estás perdiendo trabajos y contratos porque los clientes ya no contratan al primer número que encuentran.
          </p>
        </div>

        {/* Customer Decision Process */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            El Nuevo Proceso de Decisión del Cliente
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-xl hover:scale-105 transition-all border-2 hover:border-primary/50">
                <step.icon className="h-16 w-16 text-primary mb-6 stroke-[1.5]" />
                <h4 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">{step.title}</h4>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>

          <Alert className="border-primary bg-primary/5 max-w-4xl mx-auto border-2 p-8">
            <AlertDescription className="text-lg sm:text-xl font-bold text-center leading-relaxed">
              💔 Si tu negocio no aparece o se ve desactualizado digitalmente, simplemente quedas fuera de la competencia.
            </AlertDescription>
          </Alert>
        </div>

        {/* Hidden Costs */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Los Costos Ocultos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {costs.map((cost, index) => (
              <Card key={index} className="p-8 border-2 hover:shadow-xl transition-shadow">
                <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{cost.title}</h4>
                <ul className="space-y-4">
                  {cost.points.map((point, i) => (
                    <li key={i} className="flex items-start text-base sm:text-lg leading-relaxed">
                      <span className="text-primary mr-3 text-2xl leading-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;