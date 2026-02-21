import { Link } from "react-router-dom";
import { FileText, ExternalLink, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const forms = [
  {
    titleEs: "Aplicación para Licencia Original",
    titleEn: "Original License Application",
    descEs: "Para solicitar tu primera licencia de contratista en California.",
    descEn: "To apply for your first contractor license in California.",
  },
  {
    titleEs: "Certificación de Asbestos (DOSH)",
    titleEn: "Asbestos Certification (DOSH)",
    descEs: "Requerida para proyectos de remoción de asbestos.",
    descEn: "Required for asbestos removal projects.",
  },
  {
    titleEs: "Registro de Vendedor HIS",
    titleEn: "HIS Salesperson Registration",
    descEs: "Para registrar vendedores de mejoras del hogar.",
    descEn: "To register home improvement salespersons.",
  },
  {
    titleEs: "Solicitud de Examen",
    titleEn: "Exam Application",
    descEs: "Para programar tu examen de licencia CSLB.",
    descEn: "To schedule your CSLB license exam.",
  },
  {
    titleEs: "Renovación de Licencia",
    titleEn: "License Renewal",
    descEs: "Para renovar tu licencia activa antes del vencimiento.",
    descEn: "To renew your active license before expiration.",
  },
  {
    titleEs: "Cambio de Nombre o Dirección",
    titleEn: "Name or Address Change",
    descEs: "Para actualizar la información de tu licencia.",
    descEn: "To update your license information.",
  },
  {
    titleEs: "Fianza de Contratista (Contractor Bond)",
    titleEn: "Contractor Bond",
    descEs: "Documentación para tu fianza requerida.",
    descEn: "Documentation for your required bond.",
  },
  {
    titleEs: "Reactivación de Licencia",
    titleEn: "License Reactivation",
    descEs: "Para reactivar una licencia vencida o inactiva.",
    descEn: "To reactivate an expired or inactive license.",
  },
];

const CSLB_URL = "https://www.cslb.ca.gov/About_Us/Library/Forms_And_Applications.aspx";

const CSLBForms = () => {
  const { isEnglish } = useLanguage();

  const faqItems = isEnglish
    ? [
        { question: "Is C3 a government entity?", answer: "No. C3 Local Marketing is a private marketing agency. We link directly to official California State documents to help our contractor clients." },
        { question: "Are these the official CSLB forms?", answer: "Yes. All links direct to the official CSLB website at cslb.ca.gov." },
        { question: "Can C3 help me fill out these forms?", answer: "We don't offer legal or licensing services, but we can help you build your digital presence once your license is active." },
      ]
    : [
        { question: "¿C3 es una entidad gubernamental?", answer: "No. C3 Local Marketing es una agencia de marketing privada. Enlazamos directamente a los documentos oficiales del Estado de California para facilitar el acceso a nuestros clientes contratistas." },
        { question: "¿Son estos los formularios oficiales del CSLB?", answer: "Sí. Todos los enlaces dirigen al sitio oficial del CSLB en cslb.ca.gov." },
        { question: "¿C3 me puede ayudar a llenar estos formularios?", answer: "No ofrecemos servicios legales ni de licenciamiento, pero podemos ayudarte a construir tu presencia digital una vez que tu licencia esté activa." },
      ];

  return (
    <PageLayout>
      <SEOHead
        title={isEnglish ? "CSLB Forms Directory - California Contractor Forms | C3 Local Marketing" : "Formularios CSLB California - Directorio Rápido | C3 Local Marketing"}
        description={isEnglish ? "Complete directory of official CSLB forms for California contractors. Find the forms you need quickly." : "Directorio completo de formularios oficiales del CSLB para contratistas de California. Encuentra los formularios que necesitas rápidamente."}
        faqItems={faqItems}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {isEnglish ? "Official CSLB Forms — Quick Directory" : "Formularios Oficiales del CSLB California — Directorio Rápido"}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {isEnglish ? "The Problem" : "El Problema"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isEnglish
                  ? "Navigating government websites can be confusing. Wasting time searching for the right form delays your projects and hiring."
                  : "Navegar por el sitio web del gobierno puede ser confuso. Perder tiempo buscando el formulario correcto retrasa tus proyectos y contrataciones."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {isEnglish ? "The Solution" : "La Solución"}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isEnglish
                  ? "We've organized the most important Contractors State License Board (CSLB) forms so you can find them in seconds, all in one place."
                  : "Hemos organizado los formularios más importantes del Contractors State License Board (CSLB) para que los encuentres en segundos y en un solo lugar."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0" />
                    <CardTitle className="text-lg">
                      {isEnglish ? form.titleEn : form.titleEs}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm">
                    {isEnglish ? form.descEn : form.descEs}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={CSLB_URL} target="_blank" rel="noopener noreferrer">
                      {isEnglish ? "View Official Document" : "Ver Documento Oficial"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {isEnglish
              ? "C3 Local Marketing is not a government entity. We link directly to public documents from the State of California to facilitate access for our contractor clients."
              : "C3 Local Marketing no es una entidad gubernamental. Enlazamos directamente a los documentos públicos del Estado de California para facilitar el acceso a nuestros clientes contratistas."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {isEnglish ? "Ready to grow your contracting business?" : "¿Listo para hacer crecer tu negocio de contratista?"}
          </h2>
          <Button size="lg" asChild>
            <Link to="/#diagnostico">
              {isEnglish ? "Diagnose My Business Free" : "Diagnostica tu Negocio Gratis"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {isEnglish ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="border rounded-lg p-4 group">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between text-foreground">
                  {item.question}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CSLBForms;
