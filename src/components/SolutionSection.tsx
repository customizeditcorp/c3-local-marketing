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
    <section id="como-funciona" className="py-20 sm:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            La Solución: <span className="text-primary">Sistema Imán Local™</span>
          </h2>
          
          <p className="text-2xl sm:text-3xl text-secondary italic mb-8 font-semibold">
            El sistema que convierte tu negocio en un imán de clientes locales
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            No vendemos "servicios de marketing digital" genéricos. Implementamos un sistema específico probado con más de 10 negocios de servicios hispanos en California.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/30">
            <p className="text-xl sm:text-2xl font-bold mb-4">
              Especializados en <span className="text-primary">Home Service Business</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['Roofing', 'Landscaping', 'HVAC', 'Plumbing', 'Electrical', 'Construction', 'Painting', 'Remodeling'].map((service, i) => (
                <span key={i} className="bg-background px-4 py-2 rounded-lg font-semibold text-sm sm:text-base border-2 border-primary/20 hover:border-primary/50 transition-colors">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why It Works */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            ¿Por Qué Funciona?
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-xl hover:scale-105 transition-all border-2 hover:border-primary/50">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                      <Check className="h-8 w-8 text-primary-foreground stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">{benefit.title}</h4>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Alert className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary max-w-5xl mx-auto p-8">
            <AlertDescription className="text-lg sm:text-xl font-bold text-center leading-relaxed">
              🏆 A diferencia de otras agencias que te cobran mensualidades eternas y nunca eres dueño de nada, con el Sistema Imán Local™ TODO es tuyo desde el día 1.
            </AlertDescription>
          </Alert>
        </div>

        {/* Mockups */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow border-4 border-muted">
            <img 
              src={googleMobile} 
              alt="Búsqueda móvil en Google" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow border-4 border-muted">
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