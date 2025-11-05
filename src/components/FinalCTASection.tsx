import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Check } from "lucide-react";

const FinalCTASection = () => {
  const callPoints = [
    "Analizamos tu situación específica",
    "Identificamos tus obstáculos actuales",
    "Verificamos si eres candidato ideal",
    "Respondemos todas tus preguntas",
    "Si encajamos, diseñamos tu plan de 90 días"
  ];

  return (
    <section id="cta-final" className="py-12 sm:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Estás a Una Llamada de Convertirte en Visible
          </h2>
          
          <p className="text-lg sm:text-xl mb-4 text-muted-foreground">
            Si has llegado hasta aquí, probablemente el Sistema Imán Local™ tiene sentido para tu negocio.
          </p>
          
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 font-semibold">
            El siguiente paso es simple:
          </p>

          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 mb-8 sm:mb-12"
          >
            <Phone className="mr-3 h-6 w-6" />
            📞 Agendar Llamada de Diagnóstico Gratuita
          </Button>

          <Card className="p-6 sm:p-8 lg:p-10 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Qué Pasa en la Llamada:
            </h3>
            
            <p className="text-base sm:text-lg mb-6 text-center text-muted-foreground">
              30 minutos donde:
            </p>
            
            <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
              {callPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="text-base sm:text-lg">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-base sm:text-lg text-center text-muted-foreground italic">
              No es una llamada de venta agresiva. Es una conversación profesional para determinar si podemos ayudarte.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;