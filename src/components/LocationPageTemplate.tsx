import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, MapPin, Shield, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationPageTemplateProps {
  countyName: string;
  h1: string;
  problemText: string;
  solutionText: string;
  cities: string[];
  mapEmbedUrl: string;
  seoTitle: string;
  seoDescription: string;
  faqItems: FAQItem[];
}

const licenseLinks = [
  { code: "C-27", name: "Landscaping", path: "/industrias/c-27-landscaping-paisajismo" },
  { code: "C-39", name: "Roofing", path: "/industrias/c-39-roofing-techados" },
  { code: "C-36", name: "Plumbing", path: "/industrias/c-36-plumbing-plomeria" },
  { code: "C-10", name: "Electrical", path: "/industrias/c-10-electrical-electricista" },
  { code: "C-33", name: "Painting", path: "/industrias/c-33-painting-pintura" },
  { code: "C-20", name: "HVAC", path: "/industrias/c-20-hvac" },
  { code: "Class B", name: "General Building", path: "/industrias/class-b-general-building" },
];

const LocationPageTemplate = ({
  countyName,
  h1,
  problemText,
  solutionText,
  cities,
  mapEmbedUrl,
  seoTitle,
  seoDescription,
  faqItems,
}: LocationPageTemplateProps) => {
  return (
    <PageLayout>
      <SEOHead title={seoTitle} description={seoDescription} faqItems={faqItems} />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {h1}
          </h1>
          <div className="mt-6 h-1.5 w-24 mx-auto rounded-full bg-primary" />
        </div>
      </section>

      {/* El Problema */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">El Problema</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{problemText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">La Solución</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solutionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ciudades que Servimos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Ciudades que Servimos en {countyName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-background rounded-lg p-4 shadow-sm border"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hablamos el Idioma de tu Licencia */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Hablamos el Idioma de tu Licencia
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {licenseLinks.map((license) => (
              <Link key={license.code} to={license.path}>
                <Badge
                  variant="outline"
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {license.code} — {license.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Nuestra Área de Servicio
          </h2>
          <div className="rounded-xl overflow-hidden border shadow-sm aspect-video">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${countyName}`}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Preguntas Frecuentes — {countyName}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Listo para Dominar tu Mercado Local?
          </h2>
          <p className="text-muted-foreground mb-8">
            Descubre exactamente qué le falta a tu presencia digital con nuestro diagnóstico gratuito.
          </p>
          <Link to="/#diagnostico">
            <Button size="lg" className="gap-2">
              Diagnostica tu Negocio Gratis <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default LocationPageTemplate;
