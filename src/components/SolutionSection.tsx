import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import googleMobile from "@/assets/generated/03_google_mobile_search.png";
import gbpDashboard from "@/assets/generated/04_gbp_desktop_dashboard.png";

const SolutionSection = () => {
  const benefits = [
    {
      title: "Diseñado para negocios de servicios",
      description: "No es teoría. Es un proceso paso a paso probado con contratistas reales."
    },
    {
      title: "En tu idioma",
      description: "Sin barreras de comunicación. Todo en español, claro y directo."
    },
    {
      title: "Tú eres el dueño",
      description: "No pagas rentas eternas. Todo es tuyo al terminar los 90 días."
    },
    {
      title: "Listo para escalar",
      description: "Empieza orgánico o acelera con publicidad cuando quieras."
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          La Solución: Sistema Imán Local™
        </h2>
        
        <p className="text-xl sm:text-2xl text-secondary italic text-center mb-6 sm:mb-8">
          El sistema que convierte tu negocio en un imán de clientes locales
        </p>
        
        <p className="text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-muted-foreground">
          No vendemos "servicios de marketing digital" genéricos. Implementamos un sistema específico probado con más de 10 negocios de servicios hispanos en California.
        </p>

        {/* Why It Works */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            ¿Por Qué Funciona?
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Alert className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary max-w-4xl mx-auto">
            <AlertDescription className="text-base sm:text-lg font-semibold text-center">
              🏆 A diferencia de otras agencias que te cobran mensualidades eternas y nunca eres dueño de nada, con el Sistema Imán Local™ TODO es tuyo desde el día 1.
            </AlertDescription>
          </Alert>
        </div>

        {/* Mockups */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={googleMobile} 
              alt="Búsqueda móvil en Google" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={gbpDashboard} 
              alt="Dashboard de Google Business Profile" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;