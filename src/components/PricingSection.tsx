import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PricingSectionProps {
  onOpenForm: () => void;
}

const PricingSection = ({ onOpenForm }: PricingSectionProps) => {
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
    <section id="precio" className="py-20 sm:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Inversión <span className="text-primary">Única</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Sin mensualidades eternas. Un solo pago, todo es tuyo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-4 border-primary shadow-2xl">
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-10 sm:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Sistema Imán Local™ Completo</h3>
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold line-through opacity-70">$4,000</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold">$3,300</span>
                </div>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl font-semibold border-t border-primary-foreground/30 pt-6">Opciones de Pago:</p>
                  <div className="space-y-3 text-lg sm:text-xl">
                    <p className="font-semibold">✓ Pago completo: $3,135 (5% descuento)</p>
                    <p className="font-semibold">✓ 3 pagos mensuales: $1,100 cada uno</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl opacity-95 mt-6">90 días de implementación completa</p>
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* What's Included */}
              <div className="mb-12">
                <h4 className="text-2xl sm:text-3xl font-bold mb-8">Qué Incluye:</h4>
                <ul className="space-y-5">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Check className="h-7 w-7 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's NOT Included */}
              <div className="mb-12">
                <h4 className="text-2xl sm:text-3xl font-bold mb-8">Servicios Opcionales:</h4>
                <ul className="space-y-5">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <AlertCircle className="h-7 w-7 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hosting Note */}
              <div className="bg-muted p-6 sm:p-8 rounded-xl mb-12">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <strong>Nota de Hosting:</strong> + Hosting Squarespace: ~$16-23/mes (pago directo al proveedor - eres dueño desde día 1)
                </p>
              </div>

              {/* Urgency */}
              <Alert className="bg-secondary/10 border-secondary border-2 mb-10 p-8">
                <AlertDescription className="text-base sm:text-lg space-y-4">
                  <p className="font-bold text-xl">⏰ CONDICIÓN ESPECIAL:</p>
                  <p>Solo disponible para los primeros 10 negocios de servicios que inicien este mes.</p>
                  <p className="text-base">
                    <strong>¿Por qué esta limitación?</strong> Solo podemos manejar la implementación de 10 negocios simultáneamente para garantizar calidad y atención personalizada. Después de estos 10 espacios, el precio vuelve a $4,000.
                  </p>
                </AlertDescription>
              </Alert>

              {/* CTA */}
              <Button 
                size="lg" 
                onClick={onOpenForm}
                className="w-full text-xl py-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
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