import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Check, Handshake } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

interface StarterPriceBoxProps {
  starterPrice: string;
  normalPrice: string;
  starterMonths: number;
  savings: string;
  planName: string;
}

const StarterPriceBox = ({ 
  starterPrice, 
  normalPrice, 
  starterMonths, 
  savings,
  planName 
}: StarterPriceBoxProps) => {
  const { language } = useLanguage();
  
  const t = {
    es: {
      sharedRisk: 'Riesgo Compartido',
      months: 'Meses',
      c3Invests: 'C3 invierte',
      inYourLaunch: 'en tu arranque',
      investmentTagline: 'Nosotros ponemos la inversión, tú pones la confianza.',
      perMonth: '/mes',
      normalPrice: 'precio normal',
    },
    en: {
      sharedRisk: 'Shared Risk',
      months: 'Months',
      c3Invests: 'C3 invests',
      inYourLaunch: 'in your launch',
      investmentTagline: 'We put in the investment, you put in the trust.',
      perMonth: '/month',
      normalPrice: 'normal price',
    }
  };

  const text = t[language];

  return (
    <Card className="border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
      <div className="bg-green-600 text-white text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2">
          <Handshake className="h-4 w-4" />
          <span className="font-bold text-sm uppercase tracking-wide">
            🤝 {text.sharedRisk} ({text.months} 1-{starterMonths})
          </span>
          <Handshake className="h-4 w-4" />
        </div>
      </div>
      
      <CardContent className="p-6 text-center space-y-4">
        <div className="space-y-2">
          {/* Starter Price - Large and Green */}
          <div className="text-5xl sm:text-6xl font-bold text-green-600">
            {starterPrice}
            <span className="text-xl font-normal text-green-600/80">{text.perMonth}</span>
          </div>
          
          {/* Normal Price - Small and Strikethrough */}
          <div className="text-lg text-muted-foreground">
            <span className="line-through">{normalPrice}</span>
            <span className="ml-2 text-sm">{text.normalPrice}</span>
          </div>
        </div>

        {/* Investment Badge - Changed from "Savings" to "C3 Invests" */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
          <Check className="h-4 w-4 text-green-600" />
          <span className="font-semibold text-green-800">
            {text.c3Invests} {savings} {text.inYourLaunch}
          </span>
        </div>

        {/* Investment Tagline */}
        <p className="text-sm text-green-700 italic">
          {text.investmentTagline}
        </p>

        {/* Plan name */}
        <p className="text-sm text-muted-foreground">
          {planName}
        </p>
      </CardContent>
    </Card>
  );
};

export default StarterPriceBox;
