import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, CheckCircle, Check, Phone, Smartphone, Globe, Zap, Shield, Languages } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "¿Cuánto tarda en estar lista mi página web?",
    answer: "Un sitio profesional optimizado tarda entre 2-4 semanas dependiendo de la complejidad. No hacemos 'templates genéricos' — cada sitio se construye para convertir visitantes en llamadas para tu negocio específico.",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo después?",
    answer: "Sí. Te entregamos un sistema fácil de usar para que puedas actualizar textos, fotos y precios. Y si necesitas ayuda, estamos a una llamada de distancia.",
  },
  {
    question: "¿Mi sitio web actual se puede mejorar o necesito uno nuevo?",
    answer: "Depende. Si tu sitio no genera llamadas, probablemente necesita una reconstrucción enfocada en conversión. Hacemos un diagnóstico gratuito para decirte exactamente qué necesitas.",
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer: "El hosting está incluido en todos los planes. El dominio (tu dirección web .com) se paga por separado directamente al registrador — típicamente $12-15/año. Te ayudamos a configurarlo.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer: "Trabajamos contigo en cada etapa. Recibes un mockup para aprobar antes de construir. Incluimos revisiones para asegurarnos de que el resultado final te representa al 100%.",
  },
];

const features = [
  { icon: Smartphone, label: "Mobile-First" },
  { icon: Languages, label: "Bilingüe (ES/EN)" },
  { icon: Globe, label: "SEO Local" },
  { icon: Zap, label: "Carga Ultra Rápida" },
  { icon: Shield, label: "SSL Seguro" },
];

const planes = [
  {
    name: "Cimientos",
    subtitle: "CRM y Automatización Base",
    price: "$150/mes",
    label: "Suscripción Base",
    highlighted: false,
    features: [
      "Licencia CRM C3 Studio",
      "Embudos de venta y contactos",
      "Chat automatizado",
      "Solicitud automática de reseñas Google",
    ],
  },
  {
    name: "Presencia Digital",
    subtitle: "Ecosistema digital completo",
    price: "$399/mes",
    label: "6 meses mínimo",
    highlighted: true,
    features: [
      "Todo de Cimientos +",
      "Sitio Web Premium optimizado",
      "Setup de Google Business Profile",
      "Copy y oferta con IA",
      "Dominio a tu nombre día 1",
      "Mantenimiento y soporte activo",
    ],
  },
  {
    name: "Imán Local",
    subtitle: "SEO Local y posicionamiento",
    price: "$498/mes",
    label: "6 meses mínimo",
    highlighted: false,
    features: [
      "Todo de Presencia Digital +",
      "SEO Local activo",
      "Publicaciones semanales en GBP",
      "Monitoreo BrightLocal Rank",
      "Rastreo de keywords locales",
    ],
  },
];

const Websites = () => (
  <PageLayout>
    <SEOHead
      title="Sitios Web para Contratistas - Santa Barbara y SLO | C3 Local Marketing"
      description="Diseño web profesional para contratistas en la Costa Central. Sitios que convierten visitantes en llamadas de alto valor."
      faqItems={faqItems}
    />

    {/* Hero */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
          Tu página web debería ser tu mejor vendedor.
        </h1>
        <div className="flex justify-center mt-6">
          <div className="h-1.5 w-32 rounded-full bg-primary" />
        </div>
      </div>
    </section>

    {/* El Problema */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">El Problema</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Una web bonita que no convierte visitantes en llamadas es un gasto inútil. Si tu sitio no filtra a los clientes que buscan 'lo más barato', <strong className="text-foreground">estás perdiendo el tiempo</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* La Solución */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4 mb-8">
          <CheckCircle className="h-8 w-8 text-green-600 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">La Solución</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Construimos sistemas optimizados para generar llamadas de alto valor. Rápido, bilingüe y enfocado 100% en ventas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted text-center">
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Planes de Inversión */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Planes de Inversión</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((plan, i) => (
            <Card key={i} className={`flex flex-col ${plan.highlighted ? "border-primary border-2 relative" : ""}`}>
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Recomendado</Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{plan.subtitle}</p>
                <div className="mt-3 space-y-1">
                  <p className="text-3xl font-bold text-foreground">{plan.price}</p>
                  <p className="text-xs text-muted-foreground">{plan.label}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-600 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant={plan.highlighted ? "default" : "outline"} asChild>
                  <Link to="/#diagnostico">Consultar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          * La gestión de campañas está incluida. El presupuesto publicitario (Ad Spend) es adicional y se paga directamente por el cliente a las plataformas.
        </p>
        <p className="text-sm text-muted-foreground text-center mt-2 italic">
          * Compromiso mínimo de 6 meses para Cimientos y Expansión, 12 meses para Dominio Estratégico.
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <Button size="lg" asChild>
          <Link to="/#diagnostico">
            <Phone className="mr-2 h-5 w-5" />
            Diagnostica tu Negocio Gratis
          </Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default Websites;
