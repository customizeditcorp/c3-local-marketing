import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, CheckSquare, MapPin, Shield, ArrowRight } from "lucide-react";
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

interface ServiceLink {
  label: string;
  path: string;
}

interface IndustryPageTemplateProps {
  licenseCode: string;
  licenseName: string;
  industryNameEs: string;
  h1: string;
  problemText: string;
  solutionText: string;
  services: ServiceLink[];
  faqItems: FAQItem[];
  seoTitle: string;
  seoDescription: string;
  accentColor?: string;
}

const coverageAreas = [
  { name: "Condado de Santa Barbara", path: "/areas-de-servicio/santa-barbara-county" },
  { name: "Condado de San Luis Obispo", path: "/areas-de-servicio/san-luis-obispo-county" },
];

const IndustryPageTemplate = ({
  licenseCode,
  licenseName,
  industryNameEs,
  h1,
  problemText,
  solutionText,
  services,
  faqItems,
  seoTitle,
  seoDescription,
  accentColor = "bg-primary",
}: IndustryPageTemplateProps) => {
  return (
    <PageLayout>
      <SEOHead title={seoTitle} description={seoDescription} faqItems={faqItems} />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5">
            <Shield className="w-4 h-4 mr-1.5" />
            Licencia CSLB {licenseCode} — {licenseName}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {h1}
          </h1>
          <div className={`mt-6 h-1.5 w-24 mx-auto rounded-full ${accentColor}`} />
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
              <h2 className="text-2xl font-bold text-foreground mb-4">
                El Problema del {industryNameEs}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{problemText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo te Ayudamos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cómo te Ayudamos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{solutionText}</p>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-background hover:bg-muted transition-colors group"
                  >
                    <CheckSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {service.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas que Cubrimos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Áreas que Cubrimos
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {coverageAreas.map((area) => (
              <Link key={area.path} to={area.path}>
                <div className="flex items-center gap-2 bg-background rounded-lg p-5 shadow-sm border hover:border-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{area.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Preguntas Frecuentes — {licenseCode} {licenseName}
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
            ¿Listo para Llenar tu Calendario de Proyectos?
          </h2>
          <p className="text-muted-foreground mb-8">
            Descubre qué le falta a tu presencia digital con un diagnóstico gratuito personalizado para contratistas {licenseCode}.
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

export default IndustryPageTemplate;
