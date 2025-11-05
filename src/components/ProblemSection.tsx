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
    <section className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
          ¿Por Qué Pierdes Clientes Cada Mes?
        </h2>
        
        <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-muted-foreground">
          La realidad dolorosa: estás perdiendo trabajos y contratos porque los clientes ya no contratan al primer número que encuentran.
        </p>

        {/* Customer Decision Process */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            El Nuevo Proceso de Decisión del Cliente
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <Alert className="border-primary bg-primary/5 max-w-4xl mx-auto">
            <AlertDescription className="text-base sm:text-lg font-semibold text-center">
              💔 Si tu negocio no aparece o se ve desactualizado digitalmente, simplemente quedas fuera de la competencia.
            </AlertDescription>
          </Alert>
        </div>

        {/* Hidden Costs */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Los Costos Ocultos
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {costs.map((cost, index) => (
            <Card key={index} className="p-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 text-primary">{cost.title}</h4>
              <ul className="space-y-2">
                {cost.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm sm:text-base">
                    <span className="text-primary mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;