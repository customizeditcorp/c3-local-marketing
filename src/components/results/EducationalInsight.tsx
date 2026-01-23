import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Calculator } from "lucide-react";

interface EducationalInsightProps {
  revenueRange: string | null;
  recommendedPlanPrice: string;
  profile: 'INICIAL' | 'ESTABILIDAD' | 'CRECIMIENTO' | 'LIDER';
}

const revenueData: Record<string, { min: number; max: number; label: string }> = {
  'menos10k': { min: 5000, max: 10000, label: 'menos de $10,000' },
  '10k-25k': { min: 10000, max: 25000, label: '$10,000 - $25,000' },
  '25k-60k': { min: 25000, max: 60000, label: '$25,000 - $60,000' },
  'mas60k': { min: 60000, max: 100000, label: 'más de $60,000' }
};

const EducationalInsight = ({ revenueRange, recommendedPlanPrice, profile }: EducationalInsightProps) => {
  const revenue = revenueRange ? revenueData[revenueRange] : null;
  
  // Calculate 5-10% investment range
  const minInvestment = revenue ? Math.round(revenue.min * 0.05) : 0;
  const maxInvestment = revenue ? Math.round(revenue.max * 0.10) : 0;

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
            <Lightbulb className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              💡 Lo que esto significa para tu negocio
            </h3>
            <p className="text-blue-800 leading-relaxed">
              Los negocios exitosos invierten entre el <strong>5% y 10%</strong> de su facturación mensual en marketing digital. 
              Esta regla asegura que tu inversión sea proporcional a tu capacidad y retorno potencial.
            </p>
          </div>
        </div>

        {revenue && (
          <div className="bg-white/70 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-900">Tu rango de inversión saludable:</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-100/50 rounded-lg">
                <p className="text-xs text-blue-600 font-medium mb-1">Facturación</p>
                <p className="text-lg font-bold text-blue-900">{revenue.label}</p>
              </div>
              <div className="p-3 bg-green-100/50 rounded-lg">
                <p className="text-xs text-green-600 font-medium mb-1">Inversión Ideal (5-10%)</p>
                <p className="text-lg font-bold text-green-700">
                  ${minInvestment.toLocaleString()} - ${maxInvestment.toLocaleString()}/mes
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="text-xs text-primary font-medium mb-1">Nuestro Plan</p>
                <p className="text-lg font-bold text-primary">{recommendedPlanPrice}</p>
              </div>
            </div>

            {profile !== 'INICIAL' && (
              <p className="text-sm text-blue-700 mt-3 text-center">
                ✓ Tu plan recomendado está dentro del rango saludable de inversión
              </p>
            )}
          </div>
        )}

        <p className="text-sm text-blue-700 italic">
          "Invertir menos del 5% limita tu crecimiento. Invertir más del 10% puede afectar tu operación. 
          Nuestros planes están diseñados para maximizar resultados dentro de este rango."
        </p>
      </CardContent>
    </Card>
  );
};

export default EducationalInsight;
