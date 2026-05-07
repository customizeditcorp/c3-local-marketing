import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";
import { trackEvent, useAnalytics } from "@/hooks/use-analytics";
import { useLanguage } from "@/hooks/use-language";

interface PricingSectionProps {
  onOpenForm: () => void;
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  highlight?: boolean;
  badge?: string;
  includes: string[];
  excludes?: string[];
}

const PricingSection = ({ onOpenForm }: PricingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);
  const { trackCTAClick } = useAnalytics();
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView.current) {
            trackEvent('view_content', { content_name: 'Pricing Section', value: 399 });
            hasTrackedView.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCTAClick = (planName: string) => {
    trackCTAClick(`Consultar ${planName}`, 'Pricing Section');
    onOpenForm();
  };

  const copy = {
    es: {
      title: 'Tu negocio,',
      titleHighlight: 'escalado a tu ritmo.',
      subtitle: 'Elige la infraestructura que necesitas hoy. Sin promesas vacías, con resultados medibles.',
      mostPopular: 'MÁS POPULAR',
      consult: 'Consultar este Plan',
      adNote: 'El presupuesto publicitario (Ad Spend) se paga directamente a la plataforma elegida.',
      commitNote: 'Compromiso mínimo de 6 meses para Presencia Digital e Imán Local. Cimientos es suscripción base sin compromiso forzoso.',
      paymentNote: 'Precios con descuento pre-aplicado por pago en Efectivo, ACH o Zelle. Tarjeta de crédito sujeta a recargo del 3%.',
      oneTimeTitle: 'Plan Lanzamiento',
      oneTimeBadge: 'Pago Único',
    },
    en: {
      title: 'Your business,',
      titleHighlight: 'scaled at your pace.',
      subtitle: 'Choose the infrastructure you need today. No empty promises, just measurable results.',
      mostPopular: 'MOST POPULAR',
      consult: 'Consult This Plan',
      adNote: 'Ad budget (Ad Spend) is paid directly to the chosen platform.',
      commitNote: '6-month minimum commitment for Digital Presence and Local Magnet. Foundations is a base subscription with no forced commitment.',
      paymentNote: 'Prices include pre-applied discount for Cash, ACH or Zelle payments. Credit card subject to 3% surcharge.',
      oneTimeTitle: 'Launch Plan',
      oneTimeBadge: 'One-Time Payment',
    }
  }[language];

  const plans: Plan[] = language === 'es' ? [
    {
      name: 'Cimientos',
      tagline: 'La base operativa para organizar tu negocio y no perder clientes.',
      price: '$149',
      priceNote: '/mes (Suscripción Base)',
      includes: [
        'Licencia CRM C3 Studio',
        'Embudos de Venta y Gestión de Contactos',
        'Chat Automatizado para Atención al Cliente',
        'Automatización de Solicitud de Reseñas (Google Reviews)',
      ],
      excludes: [
        'No incluye desarrollo de página web',
        'No incluye configuración de Google Business Profile',
      ],
    },
    {
      name: 'Presencia Digital',
      tagline: 'Tu ecosistema digital completo. Eres dueño de tu marca en internet.',
      price: '$399',
      priceNote: '/mes (Compromiso mínimo 6 meses)',
      highlight: true,
      badge: copy.mostPopular,
      includes: [
        'Todo lo incluido en el Plan Cimientos',
        'Creación de Sitio Web Premium y Optimizado',
        'Configuración y Setup de Google Business Profile',
        'Textos y Oferta de Valor impulsados por nuestra IA',
        'Dominio registrado a tu nombre desde el día 1',
        'Mantenimiento y Soporte Activo',
      ],
      excludes: ['No incluye posteos semanales ni SEO activo'],
    },
    {
      name: 'Imán Local',
      tagline: 'Tracción orgánica y posicionamiento constante frente a tu competencia.',
      price: '$498',
      priceNote: '/mes (Compromiso mínimo 6 meses)',
      includes: [
        'Todo lo incluido en Presencia Digital',
        'Trabajo activo de SEO Local',
        'Publicaciones semanales en tu Google Business Profile',
        'Monitoreo de posicionamiento en el mapa (BrightLocal Rank)',
        'Rastreo de Palabras Clave Locales',
      ],
    },
    {
      name: 'Acelerador de Campañas (Ads)',
      tagline: 'Escala con publicidad pagada cuando tu base digital esté sólida.',
      price: '$199',
      priceNote: '/mes por canal (Google Ads o Meta Ads)',
      includes: [
        'Lanzamiento y Optimización Continua de Anuncios',
        'Textos Persuasivos y Creatividades Incluidas',
        'Segmentación Hiper-Local',
        'Reportes de Rendimiento Transparentes',
      ],
    },
  ] : [
    {
      name: 'Foundations',
      tagline: 'The operational base to organize your business and never lose a lead.',
      price: '$149',
      priceNote: '/month (Base Subscription)',
      includes: [
        'C3 Studio CRM License',
        'Sales Funnels and Contact Management',
        'Automated Chat for Customer Service',
        'Google Reviews Request Automation',
      ],
      excludes: [
        'Website development not included',
        'Google Business Profile setup not included',
      ],
    },
    {
      name: 'Digital Presence',
      tagline: 'Your complete digital ecosystem. You own your brand online.',
      price: '$399',
      priceNote: '/month (6-month minimum)',
      highlight: true,
      badge: copy.mostPopular,
      includes: [
        'Everything in Foundations',
        'Premium Optimized Website Build',
        'Google Business Profile Setup',
        'Copy & Value Offer powered by our AI',
        'Domain registered in your name from day 1',
        'Active Maintenance & Support',
      ],
      excludes: ['Weekly posting and active SEO not included'],
    },
    {
      name: 'Local Magnet',
      tagline: 'Organic traction and constant positioning against your competition.',
      price: '$498',
      priceNote: '/month (6-month minimum)',
      includes: [
        'Everything in Digital Presence',
        'Active Local SEO work',
        'Weekly Google Business Profile posts',
        'Map ranking monitoring (BrightLocal Rank)',
        'Local Keyword Tracking',
      ],
    },
    {
      name: 'Campaign Accelerator (Ads)',
      tagline: 'Scale with paid advertising once your digital base is solid.',
      price: '$199',
      priceNote: '/month per channel (Google Ads or Meta Ads)',
      includes: [
        'Launch and Continuous Ad Optimization',
        'Persuasive Copy and Creatives Included',
        'Hyper-Local Targeting',
        'Transparent Performance Reports',
      ],
    },
  ];

  const launchPlan = language === 'es' ? {
    name: 'Plan Lanzamiento',
    tagline: 'Propiedad absoluta sin contratos mensuales.',
    price: '$1,799',
    priceNote: 'Pago Único',
    includes: [
      'Desarrollo de Website Premium',
      'Setup de Google Business Profile',
      'Entrega "Llave en Mano"',
      'Transferencia total de activos el Día 1',
    ],
    excludes: [
      'No incluye licencia del software CRM (Cimientos)',
      'No incluye mantenimiento mensual ni soporte a futuro',
    ],
  } : {
    name: 'Launch Plan',
    tagline: 'Absolute ownership with no monthly contracts.',
    price: '$1,799',
    priceNote: 'One-Time Payment',
    includes: [
      'Premium Website Development',
      'Google Business Profile Setup',
      'Turn-Key Delivery',
      'Full asset transfer on Day 1',
    ],
    excludes: [
      'CRM software license (Foundations) not included',
      'Monthly maintenance or future support not included',
    ],
  };

  return (
    <section ref={sectionRef} id="precio" className="py-20 sm:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            {copy.title} <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`flex flex-col relative ${plan.highlight ? 'border-2 border-primary shadow-xl' : 'border'}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 gap-1">
                  <Star className="h-3 w-3" /> {plan.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1 min-h-[40px]">{plan.tagline}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{plan.priceNote}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                {plan.includes.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
                {plan.excludes?.map((item, j) => (
                  <div key={`x-${j}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlight ? 'default' : 'outline'}
                  className="w-full"
                  onClick={() => handleCTAClick(plan.name)}
                >
                  {copy.consult}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Launch Plan - one-time */}
        <div className="max-w-3xl mx-auto mt-10">
          <Card className="border-2 border-secondary">
            <CardHeader className="text-center">
              <Badge variant="secondary" className="mx-auto mb-2 w-fit">{copy.oneTimeBadge}</Badge>
              <CardTitle className="text-2xl">{launchPlan.name}</CardTitle>
              <p className="text-muted-foreground">{launchPlan.tagline}</p>
              <div className="mt-3">
                <span className="text-5xl font-bold">{launchPlan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{launchPlan.priceNote}</span>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {launchPlan.includes.map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
              {launchPlan.excludes.map((item, j) => (
                <div key={`x-${j}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleCTAClick(launchPlan.name)}>
                {copy.consult}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-10 space-y-2 text-center text-sm text-muted-foreground italic">
          <p>* {copy.adNote}</p>
          <p>* {copy.commitNote}</p>
          <p>* {copy.paymentNote}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
