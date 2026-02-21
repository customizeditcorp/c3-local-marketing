import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, CheckCircle, Check, Phone, ThumbsDown, PhoneCall, X } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "¿Cuánto debo invertir en publicidad (Ad Spend)?",
    answer: "Recomendamos un mínimo de $500-$1,000/mes en presupuesto publicitario para ver resultados significativos. Este presupuesto va directo a Meta (Facebook/Instagram) y es independiente de nuestra tarifa de gestión.",
  },
  {
    question: "¿Cuánto tarda en generar leads reales?",
    answer: "Las primeras llamadas suelen llegar en la primera o segunda semana. Sin embargo, las campañas se optimizan con datos reales durante los primeros 30 días. No prometemos resultados 'overnight' — eso es marketing de métricas falsas.",
  },
  {
    question: "¿Qué tipo de anuncios crean?",
    answer: "Campañas de respuesta directa: anuncios diseñados para que el dueño de casa te llame o te envíe un mensaje. No hacemos campañas de 'awareness' o 'branding' que solo generan likes sin retorno.",
  },
  {
    question: "¿Necesito tener una página de Facebook activa?",
    answer: "Sí, necesitas una página de Facebook y un Business Manager configurado. Si no los tienes, nosotros te los creamos y configuramos como parte del servicio.",
  },
  {
    question: "¿Puedo ver cuántos leads generan mis anuncios?",
    answer: "Absolutamente. Recibes reportes claros con métricas que importan: llamadas recibidas, mensajes de prospectos y costo por lead. Nada de impresiones o alcance inflado.",
  },
];

const serviciosIncluidos = [
  "Configuración de Business Manager y Pixel",
  "Campañas de generación de leads",
  "Retargeting de visitantes de tu sitio web",
  "Creativos publicitarios profesionales",
  "Reportes mensuales con métricas reales",
  "Optimización continua de campañas",
];

const MetaAds = () => (
  <PageLayout>
    <SEOHead
      title="Meta Ads para Contratistas - Facebook & Instagram | C3 Local Marketing"
      description="Campañas de Facebook e Instagram Ads para contratistas en la Costa Central de California. Leads reales, no métricas falsas."
      faqItems={faqItems}
    />

    {/* Hero */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
          Anuncios que traen contratos, no solo 'Me Gusta'.
        </h1>
        <div className="flex justify-center mt-6 gap-1">
          <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />
          <div className="h-1.5 w-16 rounded-full" style={{ backgroundColor: "#0866FF" }} />
        </div>
      </div>
    </section>

    {/* El Problema */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4 mb-8">
          <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">El Problema: Métricas Falsas</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Muchas agencias te venden tráfico y likes que no pagan las facturas. Eso es una trampa. No necesitas ser un 'influencer', necesitas <strong className="text-foreground">leads calificados</strong>.
            </p>
          </div>
        </div>

        {/* Vanity vs Real metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                <ThumbsDown className="h-5 w-5" /> Métricas Falsas
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {["5,000 impresiones", "200 likes", "50 compartidos", "10,000 alcance"].map((m, i) => (
                  <li key={i} className="flex items-center gap-2 line-through opacity-60">
                    <X className="h-4 w-4 text-destructive" /> {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-600/30 bg-green-50 dark:bg-green-900/10">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <PhoneCall className="h-5 w-5" /> Métricas Reales
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {["12 llamadas de prospectos", "8 presupuestos enviados", "4 contratos firmados", "$18,000 en ingresos"].map((m, i) => (
                  <li key={i} className="flex items-center gap-2 font-medium">
                    <Check className="h-4 w-4 text-green-600" /> {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* La Solución */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-start gap-4 mb-8">
          <CheckCircle className="h-8 w-8 text-green-600 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">La Solución: Growth Marketing</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Implementamos campañas de Growth Marketing de respuesta directa. Enfocamos tu presupuesto solo en dueños de casa en tu área que necesitan tus servicios hoy.
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {serviciosIncluidos.map((s, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-600 shrink-0" />
              <span className="text-muted-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Ad Spend Disclaimer */}
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm text-muted-foreground text-center italic">
          <strong>Nota importante:</strong> El presupuesto publicitario (Ad Spend) que va directo a Meta es independiente de nuestra tarifa de gestión. Tú controlas cuánto inviertes y puedes ajustarlo en cualquier momento.
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

export default MetaAds;
