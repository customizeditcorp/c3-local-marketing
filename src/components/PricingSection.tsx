import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { trackEvent, useAnalytics } from "@/hooks/use-analytics";
import { useLanguage } from "@/hooks/use-language";

interface PricingSectionProps {
  onOpenForm: () => void;
}

const PricingSection = ({ onOpenForm }: PricingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);
  const { trackCTAClick } = useAnalytics();
  const { t, language } = useLanguage();

  // Track when user views pricing section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView.current) {
            trackEvent('view_content', { 
              content_name: 'Pricing Section',
              value: 3300 
            });
            hasTrackedView.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    trackCTAClick('Agendar Diagnóstico', 'Pricing Section');
    onOpenForm();
  };

  const includes = language === 'es' 
    ? [
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
      ]
    : [
        "Verified and optimized Google Business Profile",
        "Professional website (5-7 pages) on Squarespace",
        ".com domain (.org, .net available)",
        "Corporate Gmail (5 accounts)",
        "Complete competition analysis",
        "10 strategic keywords + local SEO",
        "LinkTree configuration",
        "Optimized professional content",
        "Complete training",
        "All credentials (you own 100%)"
      ];

  const notIncluded = language === 'es'
    ? [
        "Fotos profesionales (opcionales: +$500-1,000)",
        "Videos promocionales (opcionales: +$800-1,500)",
        "Gestión mensual de reviews (opcional: desde $300/mes)",
        "Gestión de Google Ads (opcional: desde $500/mes + presupuesto publicitario)"
      ]
    : [
        "Professional photos (optional: +$500-1,000)",
        "Promotional videos (optional: +$800-1,500)",
        "Monthly review management (optional: from $300/month)",
        "Google Ads management (optional: from $500/month + ad budget)"
      ];

  return (
    <section ref={sectionRef} id="precio" className="py-20 sm:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t('pricing.title')} <span className="text-primary">{t('pricing.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-4 border-primary shadow-2xl">
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-10 sm:p-16 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">{t('pricing.planTitle')}</h3>
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold line-through opacity-70">$4,000</span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold">$3,300</span>
                </div>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl font-semibold border-t border-primary-foreground/30 pt-6">{t('pricing.paymentOptions')}</p>
                  <div className="space-y-3 text-lg sm:text-xl">
                    <p className="font-semibold">✓ {t('pricing.fullPayment')}</p>
                    <p className="font-semibold">✓ {t('pricing.monthlyPayments')}</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl opacity-95 mt-6">{t('pricing.implementation')}</p>
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              {/* What's Included */}
              <div className="mb-12">
                <h4 className="text-2xl sm:text-3xl font-bold mb-8">{t('pricing.whatIncluded')}</h4>
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
                <h4 className="text-2xl sm:text-3xl font-bold mb-8">{t('pricing.optionalServices')}</h4>
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
                  <strong>{t('pricing.hostingNote')}</strong> {t('pricing.hostingText')}
                </p>
              </div>

              {/* Urgency */}
              <Alert className="bg-secondary/10 border-secondary border-2 mb-10 p-8">
                <AlertDescription className="text-base sm:text-lg space-y-4">
                  <p className="font-bold text-xl">{t('pricing.urgencyTitle')}</p>
                  <p>{t('pricing.urgencyText')}</p>
                  <p className="text-base">
                    <strong>{t('pricing.urgencyReason')}</strong>
                  </p>
                </AlertDescription>
              </Alert>

              {/* CTA */}
              <Button 
                size="lg" 
                onClick={handleCTAClick}
                className="w-full text-xl py-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                {t('pricing.cta')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
