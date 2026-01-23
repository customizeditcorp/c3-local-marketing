import { Check, ArrowRight, Handshake } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface TimelineStep {
  month: string;
  price: string;
  isStarter: boolean;
  label?: string;
}

interface PriceRampTimelineProps {
  steps: TimelineStep[];
  title?: string;
  showTagline?: boolean;
}

const PriceRampTimeline = ({ steps, title, showTagline = false }: PriceRampTimelineProps) => {
  const { language } = useLanguage();
  
  const t = {
    es: {
      scaledInvestment: 'Inversión escalonada: empiezas con menos y escalas gradualmente',
      investmentTagline: 'Nosotros ponemos la inversión, tú pones la confianza.',
      starter: 'Starter',
    },
    en: {
      scaledInvestment: 'Scaled investment: start with less and scale gradually',
      investmentTagline: 'We put in the investment, you put in the trust.',
      starter: 'Starter',
    }
  };

  const text = t[language];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
      {title && (
        <h4 className="text-lg font-bold text-amber-900 text-center mb-4">
          {title}
        </h4>
      )}
      
      {showTagline && (
        <p className="text-sm text-green-700 italic text-center mb-4 flex items-center justify-center gap-2">
          <Handshake className="h-4 w-4 text-green-600" />
          {text.investmentTagline}
        </p>
      )}
      
      {/* Desktop Timeline */}
      <div className="hidden sm:flex items-center justify-center gap-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Box */}
            <div 
              className={`flex flex-col items-center p-4 rounded-xl min-w-[140px] ${
                step.isStarter 
                  ? 'bg-green-100 border-2 border-green-500' 
                  : 'bg-white border-2 border-amber-300'
              }`}
            >
              {step.isStarter && (
                <span className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">
                  {text.starter}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{step.month}</span>
              <span className={`text-2xl font-bold ${step.isStarter ? 'text-green-600' : 'text-amber-800'}`}>
                {step.price}
              </span>
              {step.label && (
                <span className="text-xs text-muted-foreground mt-1">{step.label}</span>
              )}
            </div>
            
            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <ArrowRight className="h-6 w-6 text-amber-400 mx-2 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="sm:hidden space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div 
                className={`w-4 h-4 rounded-full ${
                  step.isStarter ? 'bg-green-500' : 'bg-amber-400'
                }`}
              />
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-amber-300" />
              )}
            </div>
            
            {/* Step content */}
            <div 
              className={`flex-1 p-3 rounded-lg ${
                step.isStarter 
                  ? 'bg-green-100 border border-green-500' 
                  : 'bg-white border border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">{step.month}</span>
                  {step.isStarter && (
                    <span className="text-xs font-bold text-green-600">{text.starter.toUpperCase()}</span>
                  )}
                </div>
                <span className={`text-xl font-bold ${step.isStarter ? 'text-green-600' : 'text-amber-800'}`}>
                  {step.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explanation */}
      <p className="text-sm text-amber-800 text-center mt-6">
        <Check className="h-4 w-4 inline-block mr-1 text-green-600" />
        {text.scaledInvestment}
      </p>
    </div>
  );
};

export default PriceRampTimeline;
