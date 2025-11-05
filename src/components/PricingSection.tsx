import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PricingSection = () => {
  const includes = [
    "Google Business Profile verificado y optimizado",
    "Website profesional (5-7 páginas) en Squarespace",
    "Dominio .com (.org, .net disponibles)",
    "Correo corporativo Gmail (5 cuentas)",
    "Análisis de competencia completo",
    "10 keywords estratégicas + SEO local",
    "Configuración de LinkTree",
    "Contenido profesional optimizado",
    "Capacitación completa",
    "Todas las credenciales (eres dueño 100%)"
  ];

  const notIncluded = [
    "Fotos profesionales (opcionales: +$500-1,000)",
    "Videos promocionales (opcionales: +$800-1,500)",
    "Gestión mensual de reviews (opcional: desde $300/mes)",
    "Gestión de Google Ads (opcional: desde $500/mes + presupuesto publicitario)"
  ];

  return (
    <section id="precio" className="py-12 sm:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Inversión Única
        </h2>
        
        <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-muted-foreground">
          Sin mensualidades eternas. Un solo pago, todo es tuyo.
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary">
            <div className="bg-primary text-primary-foreground p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Sistema Imán Local™ Completo</h3>
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">$2,800</span>
                <p className="text-lg sm:text-xl mt-2">Pago único - Todo incluido</p>
              </div>
              <p className="text-base sm:text-lg opacity-90">90 días de implementación completa</p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Qué Incluye:</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's NOT Included */}
              <div className="mb-8">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Servicios Opcionales:</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hosting Note */}
              <div className="bg-muted p-4 sm:p-6 rounded-lg mb-8">
                <p className="text-sm sm:text-base text-muted-foreground">
                  <strong>Nota de Hosting:</strong> + Hosting Squarespace: ~$16-23/mes (pago directo al proveedor - eres dueño desde día 1)
                </p>
              </div>

              {/* Urgency */}
              <Alert className="bg-secondary/10 border-secondary mb-6 sm:mb-8">
                <AlertDescription className="text-sm sm:text-base">
                  <p className="font-bold mb-2">⏰ CONDICIÓN ESPECIAL:</p>
                  <p className="mb-3">Solo disponible para los primeros 10 negocios de servicios que inicien este mes.</p>
                  <p className="text-sm">
                    <strong>¿Por qué esta limitación?</strong> Solo podemos manejar la implementación de 10 negocios simultáneamente para garantizar calidad y atención personalizada. Después de estos 10 espacios, el precio base aumenta a $3,800.
                  </p>
                </AlertDescription>
              </Alert>

              {/* CTA */}
              <Button size="lg" className="w-full text-base sm:text-lg py-6">
                Agendar Llamada de Diagnóstico Gratuita
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;