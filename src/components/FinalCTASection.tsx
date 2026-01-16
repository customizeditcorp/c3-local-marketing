import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FinalCTASection = () => {
  const callPoints = [
    "Analizamos tu situación",
    "Identificamos obstáculos",
    "Sin venta agresiva"
  ];

  const scrollToDiagnostic = () => {
    const element = document.getElementById('diagnostico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-final" className="py-16 sm:py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Sin presiones. Solo claridad.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            {callPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-base font-medium">{point}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="text-lg px-10 py-6"
            onClick={scrollToDiagnostic}
          >
            Agendar Diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;