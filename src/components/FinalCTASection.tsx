import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Check } from "lucide-react";

interface FinalCTASectionProps {
  onOpenForm: () => void;
}

const FinalCTASection = ({ onOpenForm }: FinalCTASectionProps) => {
  const callPoints = [
    "Analizamos tu situación específica",
    "Identificamos tus obstáculos actuales",
    "Verificamos si eres candidato ideal",
    "Respondemos todas tus preguntas",
    "Si encajamos, diseñamos tu plan de 90 días"
  ];

  return (
    <section id="cta-final" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Estás a Una Llamada de Convertirte en <span className="text-primary">Visible</span>
          </h2>
          
          <p className="text-xl sm:text-2xl mb-6 text-foreground">
            Si has llegado hasta aquí, probablemente el Sistema Imán Local™ tiene sentido para tu negocio.
          </p>
          
          <p className="text-2xl sm:text-3xl mb-12 font-bold text-primary">
            El siguiente paso es simple:
          </p>

          <Button 
            size="lg" 
            className="w-full sm:w-auto text-xl sm:text-2xl px-12 sm:px-16 py-8 sm:py-10 mb-16 shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all"
            onClick={onOpenForm}
          >
            <Phone className="mr-4 h-8 w-8" />
            📞 Agendar Llamada de Diagnóstico Gratuita
          </Button>

          <Card className="p-10 sm:p-14 lg:p-16 text-left border-4 border-primary/20 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Qué Pasa en la Llamada:
            </h3>
            
            <p className="text-xl sm:text-2xl mb-10 text-center text-muted-foreground font-semibold">
              30 minutos donde:
            </p>
            
            <ul className="space-y-6 mb-10 max-w-3xl mx-auto">
              {callPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                      <Check className="h-7 w-7 text-primary-foreground stroke-[3]" />
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl leading-relaxed font-medium pt-2">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-muted/50 p-8 rounded-2xl">
              <p className="text-lg sm:text-xl text-center text-foreground italic leading-relaxed">
                No es una llamada de venta agresiva. Es una conversación profesional para determinar si podemos ayudarte.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;